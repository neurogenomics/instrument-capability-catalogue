import {catalogue} from '../lib/catalogue.js';import assert from 'node:assert/strict';
const ids=new Set();let claims=0;
for(const r of catalogue.records){assert(!ids.has(r.id),`Duplicate ID ${r.id}`);ids.add(r.id);const sources=new Set(r.sources.map(s=>s.id).filter(Boolean));for(const c of r.claims){assert(c.id&&c.statement&&c.operation&&c.type,`Incomplete claim ${r.id}`);assert(c.sourceIds?.length,`Unsourced claim ${c.id}`);for(const id of c.sourceIds)assert(sources.has(id),`Missing source ${id}`);claims++;}for(const s of r.sources){assert(/^https?:\/\//.test(s.url),`Invalid source URL ${r.id}`);}}
assert.equal(catalogue.records.filter(r=>r.evidenceLevel==='upstream-discovery').length,82);
const text=JSON.stringify(catalogue);for(const forbidden of ['app.labstep.com','slack.com/archives/','/Users/','installationId','protocolId','accessStatus'])assert(!text.includes(forbidden),`Private content marker ${forbidden}`);
console.log(`Checked ${catalogue.records.length} public records and ${claims} sourced claims; no private markers.`);
let prices=0;
for(const r of catalogue.records){
 const sources=new Set(r.sources.map(s=>s.id).filter(Boolean));
 for(const id of r.integration.sourceIds||[])assert(sources.has(id),`Missing integration source ${id}`);
 for(const p of r.procurement){
  assert(p.amount===null||Number.isFinite(p.amount)&&p.amount>0,`Invalid amount ${p.id}`);
  assert(p.checked&&p.configuration&&p.sourceIds?.length,`Incomplete price context ${p.id}`);
  for(const id of p.sourceIds)assert(sources.has(id),`Missing price source ${id}`);
  if(p.amount!==null){assert(/^[A-Z]{3}$/.test(p.currency),`Invalid currency ${p.id}`);assert(p.priceBasis,`Missing price basis ${p.id}`);prices++;}
  assert(['in-stock','orderable','quote-required','discontinued','not-verified'].includes(p.availability),`Invalid availability ${p.id}`);
 }
}
console.log(`Checked ${prices} numeric public price observations and integration provenance.`);
