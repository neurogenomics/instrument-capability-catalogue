import test from 'node:test';
import assert from 'node:assert/strict';
import {equipment} from '../content/bench-equipment.js';
import {catalogue, instrumentExport, toCSV} from '../lib/catalogue.js';
import {equipmentGuide} from '../scripts/equipment-guide.mjs';

test('each guide entry resolves to one searchable model and its evidence', () => {
  const html = equipmentGuide();
  assert.equal(new Set(equipment.map(p => p.id)).size, equipment.length);
  for (const profile of equipment) {
    const model = instrumentExport(profile.id).record;
    assert.equal(model.bench.route, profile.route);
    assert(model.sources.some(s => s.url === profile.source && s.section === profile.section));
    assert(profile.vendor && profile.gap && profile.evidence && profile.section);
    assert(html.includes('?instrument=' + profile.id));
    for (const url of [profile.source, ...(profile.additionalSources || [])]) assert.equal(new URL(url).protocol, 'https:');
  }
  assert.equal(catalogue.records.filter(r => r.bench).length, equipment.length);
  assert(toCSV().includes('Published design'));
});

test('every centrifuge carries a sourced direct-loading judgement through guide and model export', () => {
  const html = equipmentGuide();
  for (const profile of equipment.filter(p => p.family === 'Centrifugation')) {
    const assessment = profile.directLoading;
    assert(assessment.reason && assessment.check && assessment.effort && assessment.basis);
    assert(assessment.sources.every(s => new URL(s.url).protocol === 'https:' && s.section));
    assert.deepEqual(instrumentExport(profile.id).record.bench.directLoading, assessment);
    assert(html.includes(assessment.effort));
  }
});
