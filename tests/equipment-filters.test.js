import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
import {equipment} from '../content/bench-equipment.js';

test('switching from flask handoff to centrifugation reveals every centrifuge and retains supported filters', () => {
  const elements = Object.fromEntries(['family','query','route','handoff'].map(id => [id,{id,value:''}]));
  elements.handoff.options = ['', 'Tube', 'Plate', 'Flask'].map(value => ({value}));
  const entries = equipment.map(p => ({textContent: p.model, dataset: {family:p.family, route:p.acquisition,
    handoff:p.handoff ? [p.handoffFormat || 'Plate'].flat().join('|') : 'unassessed'}}));
  let change;
  const form = {elements, addEventListener: (_, fn) => {change=fn;}};
  const nodes = {form, '#count':{}, '#empty':{}, '#clear-filters':{addEventListener(){}}};
  const href = 'https://example.com/equipment/?handoff=Flask';
  const context = {URL, location:{href}, history:{replaceState(){}}, window:{addEventListener(){}},
    document:{querySelector: key => nodes[key], querySelectorAll: () => entries}};
  runInNewContext(readFileSync(new URL('../web/equipment-filters.js',import.meta.url),'utf8'),context);
  elements.family.value = 'Centrifugation';
  change();
  assert.equal(elements.handoff.value,'');
  assert(elements.handoff.options.find(o => o.value==='Flask').disabled);
  assert.equal(entries.filter(e=>!e.hidden).length,19);
  elements.handoff.value = 'Tube';
  change();
  assert(entries.some(e=>!e.hidden && e.textContent.includes('MIKRO 220')));
  assert(!entries.some(e=>!e.hidden && e.textContent.includes('MiniSpin')));
  elements.handoff.value = '';
  elements.route.value = 'Published design';
  change();
  assert.equal(entries.filter(e=>!e.hidden).length,5);
});
