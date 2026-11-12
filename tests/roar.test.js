import test from 'node:test';
import assert from 'node:assert/strict';
import {catalogue, instrumentExport, roarDiscoveryExport, roarDiscoveryCSV, toCSV} from '../lib/catalogue.js';
import {evidenceFromSources, recordEvidenceLevel} from '../lib/evidence.js';
import {matchesSearch} from '../lib/search.js';

const report = roarDiscoveryExport();
const records = new Map(catalogue.records.map(record => [record.id, record]));
const sources = new Map(report.sources.map(source => [source.id, source]));
const leads = new Map(report.leads.map(lead => [lead.id, lead]));
const conflicts = new Map(report.conflicts.map(conflict => [conflict.id, conflict]));

test('ROAR crosswalk covers the complete public inventory without inflating model or asset identity', () => {
  assert.equal(report.leads.length, 26);
  assert.equal(leads.size, 26);
  assert.deepEqual(Object.fromEntries(report.sourceCoverage.map(({sourceId}) => [sourceId,
    report.leads.filter(lead => lead.sourceIds.includes(sourceId)).length
  ])), {overview: 5, robotic: 7, kinetics: 4, flow: 7, analytical: 3, access: 0, faq: 0});
  assert.equal(report.sources.filter(source => source.kind === 'facility').length, 7);
  for (const lead of leads.values()) {
    assert.equal(lead.assurance, 'facility-reported');
    assert.equal(lead.planningEligibility, 'unassessed');
    assert.equal(lead.controlSupport, 'unknown');
    assert(lead.identityGap);
    assert.equal(lead.modelIds.length === 0, lead.status === 'unresolved');
    for (const id of [...lead.sourceIds, ...(lead.additionalSourceIds||[])]) assert.equal(sources.get(id)?.kind, 'facility');
    for (const id of lead.relatedSourceIds||[]) assert.equal(sources.get(id)?.kind, 'manufacturer');
    for (const id of lead.modelIds) assert(records.get(id)?.roarLeadIds.includes(lead.id), id);
    for (const id of lead.conflictIds||[]) assert(conflicts.has(id), id);
  }
  assert.equal(new Set(report.leads.flatMap(lead => lead.modelIds)).size, 11);
  assert.deepEqual(records.get('unchained-labs-freeslate-junior').roarLeadIds,
    ['junior-dispensing', 'junior-optimising', 'junior-screening']);
  assert.deepEqual(leads.get('ot2').modelIds, ['ot2']);
  assert.equal(records.get('plr-opentrons-ot2').roarLeadIds, undefined);
  assert.deepEqual(leads.get('agilent-1290-6530').modelIds, ['agilent-1290-infinity-ii', 'agilent-6530-q-tof']);
  assert.equal(leads.get('agilent-1260-6250').status, 'partial');
  assert.deepEqual(leads.get('agilent-1260-6250').modelIds, ['agilent-1260-infinity-ii-sfc-uhplc']);
});

test('conflicting facility conditions remain distinct from manufacturer specifications', () => {
  assert.deepEqual([...conflicts.keys()], ['osr-pressure', 'flowuv-pressure', 'phoenix-hcube-group', 'agilent-detector']);
  for (const conflict of conflicts.values()) {
    assert(conflict.resolution);
    assert(report.leads.some(lead => lead.conflictIds?.includes(conflict.id)));
    for (const {sourceId, evidence} of conflict.observations) {
      assert.equal(evidence, 'facility');
      assert.equal(sources.get(sourceId)?.kind, 'facility');
    }
    for (const id of conflict.relatedSourceIds) assert.equal(sources.get(id)?.kind, 'manufacturer');
  }
  assert.match(conflicts.get('flowuv-pressure').observations[0].statement, /35 bar at room temperature/);
  assert.match(conflicts.get('flowuv-pressure').observations[1].statement, /34 bar/);
  const hcube = records.get('thalesnano-h-cube-pro');
  const byClaim = new Map(hcube.claims.map(claim => [claim.id, claim]));
  assert.equal(byClaim.get('hcube-pro-temperature').value.max, 150);
  assert.equal(byClaim.get('hcube-pro-pressure').value.max, 100);
  assert.match(byClaim.get('hcube-pro-pressure').conditions, /Concurrent endpoints are not established/);
  assert.equal(records.get('uniqsis-flowuv').claims.some(claim => claim.unit === 'bar'), false);
});

test('new model claims use dated manufacturer sources and cannot supply a planning or control candidate', () => {
  for (const record of records.values()) {
    if (!record.roarLeadIds || record.id === 'ot2') continue;
    assert.equal(record.evidenceLevel, 'manufacturer-sourced');
    assert.equal(record.planningEligibility, 'unassessed');
    assert.equal(record.controlSupport, 'unknown');
    assert.equal(record.integration.status, 'not-established');
    assert.deepEqual(record.integration.drivers, []);
    assert.equal(record.madsci.status, 'not-assessed');
    assert.equal(record.upstream, null);
    assert(record.inputs && record.outputs && record.gaps.length);
    assert(record.claims.length);
    for (const claim of record.claims) {
      assert.equal(claim.evidence, 'manufacturer');
      assert(claim.configuration);
      for (const id of claim.sourceIds) {
        const source = record.sources.find(source => source.id === id);
        assert.equal(source?.kind, 'manufacturer');
        assert.match(source.url, /^https:\/\//);
        assert.match(source.checked, /^\d{4}-\d\d-\d\d$/);
      }
    }
    assert.deepEqual(instrumentExport(record.id).record.roarLeadIds, record.roarLeadIds);
  }
  assert(matchesSearch(records.get('uniqsis-flowuv'), 'uv-visible'));
  assert.equal([...records.values()].some(record => matchesSearch(record, '6250') &&
    record.claims.some(claim => claim.statement.includes('6250'))), false);
});

test('classification requires positive manufacturer evidence', () => {
  assert.equal(evidenceFromSources(['manufacturer (third-party host)']), 'manufacturer');
  assert.equal(evidenceFromSources(['facility']), 'facility');
  assert.equal(evidenceFromSources(['facility', 'manufacturer']), 'mixed');
  assert.equal(evidenceFromSources(['secondary']), 'secondary');
  for (const kinds of [[], [undefined], ['other'], ['manufacturer', undefined]]) {
    assert.equal(evidenceFromSources(kinds), 'unclassified');
  }
  assert.equal(recordEvidenceLevel([{evidence: 'facility'}], 'curated-reference'), 'facility-reported');
  assert.equal(recordEvidenceLevel([{evidence: 'manufacturer'}, {evidence: 'facility'}], 'curated-reference'), 'mixed-sourced');
  assert.equal(recordEvidenceLevel([{evidence: 'mixed'}], 'curated-reference'), 'mixed-sourced');
  assert.equal(recordEvidenceLevel([{evidence: 'unclassified'}], 'curated-reference'), 'curated-reference');
});

test('standalone crosswalk and exports preserve version, identity gaps and source types', () => {
  assert.equal(report.catalogueVersion, catalogue.version);
  assert.equal(report.catalogueSchemaVersion, catalogue.schemaVersion);
  assert.deepEqual(report.leads, catalogue.discovery.roar.leads);
  assert.deepEqual(report.conflicts, catalogue.discovery.roar.conflicts);
  const csv = roarDiscoveryCSV();
  assert.equal(csv.split('\r\n').length, 27);
  for (const value of ['6250 MS', 'unresolved', 'flowuv-pressure', 'unassessed', catalogue.version, '""kind"":""facility""']) {
    assert(csv.includes(value), value);
  }
  for (const value of ['roarLeadIds', 'planningEligibility', 'controlSupport', 'thalesnano-h-cube-pro', '""evidence"":""manufacturer""']) {
    assert(toCSV().includes(value), value);
  }
});
