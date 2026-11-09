import {reference} from '../content/reference.js';
import {handlerEvidence} from '../content/manufacturer-handlers.js';
import {peripheralEvidence} from '../content/manufacturer-peripherals.js';
import {procurementEvidence} from '../content/procurement.js';
import {usedListings} from '../content/used-listings.js';
import {integrationEvidence} from '../content/integration.js';
import {madsciFor} from '../content/madsci.js';
import {addedRecords,addedEvidence} from '../content/coverage-2026-11.js';
const buying=new Map(procurementEvidence.map(e=>[e.id,e]));
const usedBuying=new Map(usedListings.map(e=>[e.id,e]));
const controls=new Map(integrationEvidence.map(e=>[e.id,e]));
const planningQuestions=[
 {topic:'Configured purchase',question:'Which heads, modules, gripper, computer and software are included, and what must be purchased separately?'},
 {topic:'Transfer and recovery',question:'Which plate moves, lid or seal operations, replenishments and fault recoveries still require an operator?'},
 {topic:'Commissioning',question:'Who will install, calibrate and qualify the configuration, and what training is required?'},
 {topic:'Software and control',question:'Which firmware, operating system, driver operations and software licences are required? Is licence transfer permitted for a used system?'},
 {topic:'Ownership cost',question:'What are the service, maintenance, calibration, consumable, spare-part and support costs beyond purchase?'},
 {topic:'Module supply',question:'Is the exact compatible module generation orderable in your region, in stock, discontinued, or available only used?'},
 {topic:'Facility fit',question:'What deck space, bench footprint, power, network, ventilation and loading clearances does this configuration need?'}
];
function extend(record){
 const control=controls.get(record.id),commercial=buying.get(record.id),used=usedBuying.get(record.id);
 const madsci=madsciFor(record.id);
 const autoSource=record.upstream?.source?.pinnedUrl?{id:`integration-registry-${record.id}`,title:'Pinned PyLabRobot device registry',url:record.upstream.source.pinnedUrl,section:`Registry entry ${record.id.replace(/^plr-/,'')}`,checked:record.upstream.source.retrievedAt}:null;
 const integration=control?.integration || (record.upstream?{framework:'PyLabRobot',status:'upstream-listed',drivers:[{name:record.name,registryId:record.id,status:record.upstream.driverStatus,api:record.upstream.api||null,documentationUrl:record.upstream.documentationUrl||null,hardwareTestingRequired:record.upstream.metadata?.needs_hardware_testing??null,scope:'Upstream registry coverage; not independently demonstrated for a physical configuration.',limitations:'Check firmware, supported operations, setup and hardware testing before adoption.'}],prerequisites:['Verify exact model, firmware and documented backend setup.','Check driver coverage and error recovery for intended operations.'],gaps:['Ease of integration and physical workflow reliability have not been independently measured.'],sourceIds:autoSource?[autoSource.id]:[]}:{framework:'PyLabRobot',status:'not-established',drivers:[],prerequisites:['Locate exact model/backend documentation and confirm required control interface.'],gaps:['No exact-model support conclusion established in this record; this is not a claim that support is impossible.'],sourceIds:[]});
 const sources=[...record.sources,...(control?.sources||[]),...(commercial?.sources||[]),...(used?.sources||[]),...(autoSource?[autoSource]:[]),...madsci.sources];
 return {...record,integration,madsci:{status:madsci.status,integrations:madsci.integrations},procurement:[...(commercial?.items||[]),...(used?.items||[])],procurementGaps:[...(commercial?.gaps||(!used?['No public price or live supply observation has been captured for this record.']:[])),...(used?.gaps||[])],practicalConsiderations:control?.practicalConsiderations||[],sources:[...new Map(sources.map((s,i)=>[s.id||s.url||i,s])).values()]};
}
const evidence=new Map([...handlerEvidence,...peripheralEvidence,...addedEvidence].map(e=>[e.id,e]));
export const catalogue={...reference,schemaVersion:4,version:'2026-11-09.public.1',planningQuestions,description:'Public laboratory instrument references and source-backed capability claims. Manufacturer claims and software integration leads are separate evidence layers.',releaseStatus:'Public reference release. No local protocols, installations or access records.',notices:reference.notices,records:[...reference.records,...addedRecords].map(original=>{
 const vendors={'formulatrix':'FORMULATRIX','inheco':'INHECO'};
 const r={...original,vendor:vendors[original.vendor.toLowerCase()]||original.vendor,category:original.category.toLowerCase(),capabilities:original.capabilities.map(c=>({...c,operation:c.operation.toLowerCase()}))};
 const e=evidence.get(r.id);
 if(!e)return {...r,claims:[],gaps:r.evidenceLevel==='upstream-discovery'?['Manufacturer specifications not independently extracted.','Driver status does not certify hardware or assay performance.']:['Configuration-specific claim extraction remains incomplete.']};
 return {...r,summary:e.summary||r.summary,claims:(e.claims||[]).map(c=>({...c,operation:c.operation.toLowerCase()})),sources:[...(e.sources||[]),...r.sources.filter(s=>!(e.sources||[]).some(es=>es.url===s.url))],gaps:e.gaps||[],evidenceLevel:!(e.claims||[]).length?r.evidenceLevel:(e.claims||[]).some(c=>c.evidence!=='secondary')?'manufacturer-sourced':'secondary-sourced',license:'Original manufacturer documents retain their own rights; independently authored factual summaries link to those sources. No blanket licence for third-party documents is asserted.',completeness:{...r.completeness,claimCoverage:'Selected original manufacturer claims extracted; remaining gaps are listed.'}};
}).map(extend)};
export function instrumentExport(id){const record=catalogue.records.find(r=>r.id===id);if(!record)throw Error('Unknown instrument ID');return {schemaVersion:catalogue.schemaVersion,version:catalogue.version,notices:catalogue.notices,record};}
function cell(v){let s=typeof v==='object'&&v!==null?JSON.stringify(v):String(v??'');if(/^[=+@\-\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';}
export function toCSV(){const fields=['id','name','vendor','category','evidenceLevel','claims','capabilities','modules','performance','sources','gaps','upstream','integration','madsci','procurement','procurementGaps','practicalConsiderations','license','notices'];return [fields.join(','),...catalogue.records.map(r=>fields.map(k=>cell(k==='notices'?catalogue.notices:r[k])).join(','))].join('\r\n');}
