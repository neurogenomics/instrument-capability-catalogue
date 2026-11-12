import assert from 'node:assert/strict';
import {catalogue} from '../lib/catalogue.js';
import {instrumentModelAtlasVersion, instrumentModelSchemaVersion} from '../content/instrument-model-release.js';
import {reviewJsonDigest} from './review-json.mjs';

const schemaVersion = instrumentModelSchemaVersion;
const digestProfile = 'agentic-lab/review-json/1';
const contractCommit = 'e0295ebcd485b100150773e6f9c2e9497a5bbd45';
const atlasCommit = '3088f5c63063a6ddf7f7056ddb4e2ff5e2d55611';
const recordedAt = '2026-11-12T21:27:17Z';

// Reviewed identity sources and first revision pins. A changed body must get a new
// revision with its exact parent preserved. Never replace a published pin in place.
const identities = [
  {
    atlasId: 'agilent-1260-infinity-ii-sfc-uhplc',
    sourceId: 'mfr-1260-ii-hybrid',
    digest: 'sha256:fa04c6793c749c81b1742102d5680145c32c093e075a9d528d6a820c69f85d4e'
  },
  {
    atlasId: 'agilent-1290-infinity-ii',
    sourceId: 'mfr-1290-ii',
    digest: 'sha256:476240bf68d5a180eb60516bcdb3c5acee2b77a96cdf58b46e9f43ebabfc8af9'
  },
  {
    atlasId: 'agilent-6530-q-tof',
    sourceId: 'mfr-6530-qtof',
    digest: 'sha256:8c32e995b581652d2e772d720cfd53ba9665c5b2f3e585ae346e82ca1afac46b'
  },
  {
    atlasId: 'agilent-cary-630',
    sourceId: 'mfr-cary-630',
    digest: 'sha256:ad285de1a3eec9a0d788ce2633e923b2cfd4645c8916b24354f3e9f60aaa9d15'
  },
  {
    atlasId: 'mettler-toledo-easymax-102',
    sourceId: 'mfr-easymax-102',
    digest: 'sha256:76ff671cd277e5322b27d08de1ddff0a1ffb43bfe42448431a27797a512532e7'
  },
  {
    atlasId: 'mettler-toledo-reactir-15',
    sourceId: 'mfr-reactir-15',
    digest: 'sha256:ceeb5418db78d7f26ce11ae3f1dc61f8d4947bf1178a2b668a53062437c857e9'
  },
  {
    atlasId: 'ot2',
    sourceId: 'mfr-ot2-pipettes',
    digest: 'sha256:a70c565871efac4c4ee9adeb0258a39374e5f7092b8f71d4301ed3f3616d2085',
    modelIdentifier: 'OT-2',
    identityNote: 'GEN2 in the Atlas label refers to documented pipette options, not a confirmed chassis or fitted pipette variant.'
  },
  {
    atlasId: 'thalesnano-h-cube-pro',
    sourceId: 'mfr-h-cube-pro',
    digest: 'sha256:81f449f0539f01d23d27eddcc5971a286b2cfca803e9b61391b61ac837edf225'
  },
  {
    atlasId: 'unchained-labs-freeslate-junior',
    sourceId: 'mfr-junior',
    digest: 'sha256:3c2ba9b317d3324d49f33f731050d95b006640822746126cb7aebfdcc011e336',
    modelIdentifier: 'Junior',
    identityNote: 'The manufacturer names the model Junior. Freeslate Junior is the Atlas and Imperial report label for the platform.'
  },
  {
    atlasId: 'uniqsis-flowsyn',
    sourceId: 'mfr-flowsyn',
    digest: 'sha256:92770df67a663e5f9d0a83c1891e0b59ae481f67d5570dfb445ab5513efd20de'
  },
  {
    atlasId: 'uniqsis-flowuv',
    sourceId: 'mfr-flowuv',
    digest: 'sha256:dc45e3b1bbab25af3904f31aaece7eaa3f61d0a23989159790ee1545c6a81057'
  }
];

const discoveryRights = basis => ({discovery: 'permitted', assessment: 'unknown', republication: 'unknown', basis});
const modelRights = 'Atlas supplies manufacturer and model identification and a dated source link for discovery.';
const sourceRights = 'Link to the public manufacturer document and identify its publisher and section for discovery.';
const projectedFields = new Set(['id', 'name', 'vendor', 'sources']);

function project(identity) {
  const atlas = catalogue.records.find(record => record.id === identity.atlasId);
  assert(atlas?.claims.some(claim => claim.evidence === 'manufacturer' && claim.sourceIds.includes(identity.sourceId)),
    `No reviewed manufacturer source for ${identity.atlasId}`);
  const oem = atlas.sources.find(source => source.id === identity.sourceId);
  assert(oem?.url?.startsWith('https://') && oem.title && oem.section && oem.checked,
    `Incomplete manufacturer locator for ${identity.atlasId}`);
  const source = {
    source: {namespace: 'manufacturer:document', native_id: oem.url, url: oem.url},
    observed_at: oem.checked,
    snapshot_digest: null,
    visibility: 'public',
    use_rights: discoveryRights(sourceRights)
  };
  const body = {
    schema_version: schemaVersion,
    record_id: `atlas:${atlas.id}`,
    revision_id: 'r1',
    digest_profile: digestProfile,
    parent: null,
    recorded_at: recordedAt,
    visibility: 'public',
    use_rights: discoveryRights(modelRights),
    manufacturer: atlas.vendor,
    model_identifier: identity.modelIdentifier ?? atlas.name,
    variant: null,
    sources: [source],
    reference_facts: []
  };
  const contentDigest = reviewJsonDigest(body);
  assert.equal(contentDigest, identity.digest, `C11 revision changed without a new pin for ${atlas.id}`);
  const record = {...body, content_digest: contentDigest};
  const index = {
    atlasId: atlas.id,
    atlasLabel: atlas.name,
    atlasQuery: `?instrument=${atlas.id}`,
    recordRef: {
      schema_version: schemaVersion,
      record_id: record.record_id,
      revision_id: record.revision_id,
      content_digest: contentDigest
    },
    sourceAttribution: [{
      sourceIndex: 0,
      atlasSourceId: oem.id,
      attribution: 'manufacturer_reported',
      title: oem.title,
      section: oem.section
    }],
    identityNote: identity.identityNote ?? null,
    fieldLoss: {
      omittedAtlasFields: Object.keys(atlas).filter(key => !projectedFields.has(key)).sort(),
      omittedAtlasClaimIds: atlas.claims.map(claim => claim.id),
      omittedAtlasSourceIds: atlas.sources.filter(item => item.id !== oem.id).map(item => item.id ?? item.url),
      referenceFactsReason: 'Source republication rights are unknown. The detailed Atlas claims remain in the ordinary catalogue export.',
      sourceMetadataReason: 'C11 carries the public URL and observation date. The title, section and attribution are retained here. The manufacturer document version and snapshot digest are unrecorded.'
    }
  };
  return {record, index};
}

export function instrumentModelExport() {
  assert.equal(catalogue.version, instrumentModelAtlasVersion, 'Atlas source release differs from the reviewed C11 release');
  const linked = new Set(catalogue.discovery.roar.leads.flatMap(lead => lead.modelIds));
  assert.deepEqual(identities.map(identity => identity.atlasId).sort(), [...linked].sort(),
    'C11 export must cover the reviewed ROAR model identities exactly');
  const entries = identities.map(project);
  return {
    manifest: {
      manifestVersion: 1,
      contract: {name: 'instrument-model', schemaVersion, digestProfile, commit: contractCommit,
        schemaPath: 'contracts/versions/0.1.0/instrument-model.schema.json'},
      sourceRelease: {catalogueSchemaVersion: catalogue.schemaVersion, catalogueVersion: instrumentModelAtlasVersion,
        commit: atlasCommit, discoveryVersion: catalogue.discovery.roar.version},
      scope: 'Manufacturer identity discovery. Assessment and republication rights are unknown. Facility reports remain in the ROAR crosswalk.',
      models: entries.map(({index}) => index)
    },
    records: entries.map(({record}) => record)
  };
}
