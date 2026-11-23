import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import {catalogue, november12Catalogue, instrumentExport, roarDiscoveryExport} from '../lib/catalogue.js';
import {instrumentModelDirectory} from '../content/instrument-model-release.js';
import {instrumentModelExport} from '../scripts/instrument-model-export.mjs';
import {canonicalJson, reviewJsonDigest} from '../scripts/review-json.mjs';
import {renderRoar} from '../web/roar.js';

const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const fixtureHashes = {
  'common.schema.json': 'eedd0d0bc5fe40e5b54e73f3a7bd5e3e5e1b85b92c03e6c50eece2c52b67de01',
  'instrument-model.schema.json': '4dca9c5f7f3c6c4bd8eead121695ab8ce03e7d5d076700f6768cb50cb2106ca5',
  'instrument-model.synthetic.json': '3043f18e150822421941b03e5802f4d465f16d89af81de5a3f164fc8bdf95a40',
  'review-digests.json': '6f9a775f3cad0f15e482f66db8b565e93a3ab34e57fe6e722fe10b95f5c23ace'
};
function fixture(name) {
  const bytes = readFileSync(new URL(`./fixtures/c11/${name}`, import.meta.url));
  assert.equal(sha(bytes), fixtureHashes[name], `Pinned C11 fixture differs: ${name}`);
  return JSON.parse(bytes);
}

function independentDigest(value) {
  const keys = new Set();
  function ownEntries(entry) {
    if (entry === null || typeof entry !== 'object') return entry;
    if (Array.isArray(entry)) return entry.map(ownEntries);
    const result = Object.create(null);
    for (const [key, child] of Object.entries(entry)) {
      keys.add(key);
      result[key] = ownEntries(child);
    }
    return result;
  }
  const ownValue = ownEntries(value);
  // The property list sets ASCII order for each object. Null prototypes keep inherited keys out.
  return 'sha256:' + sha(JSON.stringify(ownValue, [...keys].sort()));
}

const schema = fixture('instrument-model.schema.json');
const ajv = new Ajv2020({strictTypes: false, strictRequired: false});
addFormats(ajv, ['date', 'date-time', 'uri']);
ajv.addSchema(fixture('common.schema.json'));
const validate = ajv.compile(schema);
const bundle = instrumentModelExport();

test('the released C11 schema and canonical vectors validate independently', () => {
  const upstream = fixture('instrument-model.synthetic.json');
  assert(validate(upstream), ajv.errorsText(validate.errors));
  const {content_digest: digest, ...body} = upstream;
  assert.equal(independentDigest(body), digest);
  assert.equal(reviewJsonDigest(body), digest);
  for (const vector of fixture('review-digests.json')) {
    assert.equal(canonicalJson(vector.input), vector.canonical);
    assert.equal(reviewJsonDigest(vector.input), vector.digest);
    assert.equal(independentDigest(vector.input), vector.digest);
  }
  for (const invalid of [1.5, Number.MAX_SAFE_INTEGER + 1, '\uD800', {'µ': 1}]) {
    assert.throws(() => canonicalJson(invalid));
  }
});

test('every linked Atlas model resolves to an exact schema-valid, independently verified revision', () => {
  const expected = new Set(roarDiscoveryExport().leads.flatMap(lead => lead.modelIds));
  assert.equal(expected.size, 11);
  assert.equal(bundle.manifest.models.length, expected.size);
  assert.equal(bundle.records.length, expected.size);
  assert.equal(bundle.manifest.contract.commit, 'e0295ebcd485b100150773e6f9c2e9497a5bbd45');
  assert.equal(bundle.manifest.sourceRelease.commit, '3088f5c63063a6ddf7f7056ddb4e2ff5e2d55611');
  assert.deepEqual(bundle, instrumentModelExport());
  const resolved = new Map(bundle.records.map(record => [record.record_id, record]));
  for (const row of bundle.manifest.models) {
    assert(expected.delete(row.atlasId));
    const atlas = november12Catalogue.records.find(record => record.id === row.atlasId);
    assert.equal(instrumentExport(row.atlasId).record.id, atlas.id);
    assert.equal(row.atlasQuery, `?instrument=${atlas.id}`);
    assert.equal(row.atlasLabel, atlas.name);
    assert.equal(row.recordRef.record_id, `atlas:${atlas.id}`);
    const record = resolved.get(row.recordRef.record_id);
    assert(validate(record), ajv.errorsText(validate.errors));
    for (const key of ['schema_version', 'record_id', 'revision_id', 'content_digest']) {
      assert.equal(row.recordRef[key], record[key]);
    }
    const {content_digest: digest, ...body} = record;
    assert.equal(independentDigest(body), digest);
    assert.notEqual(independentDigest({...body, manufacturer: 'Changed'}), digest);
    assert.equal(record.parent, null);
    assert.equal(record.manufacturer, atlas.vendor);
    assert.equal(record.variant, null);
    assert.deepEqual(record.reference_facts, []);
    assert.equal(record.use_rights.assessment, 'unknown');
    assert.equal(record.use_rights.republication, 'unknown');
    for (const attribution of row.sourceAttribution) {
      const source = record.sources[attribution.sourceIndex];
      const oem = atlas.sources.find(item => item.id === attribution.atlasSourceId);
      assert.equal(attribution.attribution, 'manufacturer_reported');
      assert.equal(attribution.title, oem.title);
      assert.equal(attribution.section, oem.section);
      assert.equal(source.source.url, oem.url);
      assert.equal(source.observed_at, oem.checked);
      assert.equal(source.snapshot_digest, null);
      assert.equal(source.use_rights.discovery, 'permitted');
      assert.equal(source.use_rights.assessment, 'unknown');
      assert.equal(source.use_rights.republication, 'unknown');
    }
    assert.deepEqual(row.fieldLoss.omittedAtlasClaimIds, atlas.claims.map(claim => claim.id));
    assert(row.fieldLoss.omittedAtlasFields.includes('claims'));
    assert(row.fieldLoss.omittedAtlasFields.includes('integration'));
  }
  assert.equal(expected.size, 0);
  assert.equal(resolved.get('atlas:ot2').model_identifier, 'OT-2');
  assert.equal(resolved.get('atlas:unchained-labs-freeslate-junior').model_identifier, 'Junior');
  assert.equal(resolved.has('atlas:plr-opentrons-ot2'), false);
  assert.equal(resolved.has('atlas:6250'), false);
});

test('a model identity change cannot replace a published revision pin', () => {
  const atlas = november12Catalogue.records.find(record => record.id === 'ot2');
  const previous = atlas.vendor;
  try {
    atlas.vendor = 'Changed manufacturer';
    assert.throws(() => instrumentModelExport(), /C11 revision changed without a new pin for ot2/);
  } finally {
    atlas.vendor = previous;
  }
});

test('the exact schema rejects unsupported versions, public claims with unknown rights and malformed dates', () => {
  const example = bundle.records[0];
  assert.equal(validate({...example, schema_version: '0.2.0'}), false);
  assert.equal(validate({...example, recorded_at: '2026-02-31T00:00:00Z'}), false);
  assert.equal(validate({...example, reference_facts: [{
    label: 'Example',
    statement: 'Would require republication rights',
    attribution: 'manufacturer_reported',
    source: example.sources[0]
  }]}), false);
  assert.equal(validate({...example, sources: [{...example.sources[0], visibility: 'organisation_private'}]}), false);
});

test('normal ROAR view exposes the versioned downloads alongside its unchanged crosswalk exports', () => {
  const html = renderRoar({report: roarDiscoveryExport(), records: catalogue.records, search: '', esc: value => value,
    tag: value => value, renderSources: () => '', recordURL: id => `?instrument=${id}`});
  assert(html.includes('data-export="roar-json"'));
  assert(html.includes('data-export="roar-csv"'));
  for (const name of ['bundle.json', 'manifest.json']) {
    const href = `../${instrumentModelDirectory}/${name}`;
    assert(html.includes(`href="${href}" download`));
    assert.equal(new URL(href, 'https://example.org/web/index.html').pathname, `/${instrumentModelDirectory}/${name}`);
  }
});
