import {reference} from '../content/reference.js';
import {handlerEvidence} from '../content/manufacturer-handlers.js';
import {peripheralEvidence} from '../content/manufacturer-peripherals.js';
const evidence=new Map([...handlerEvidence,...peripheralEvidence].map(e=>[e.id,e]));
export const catalogue={...reference,schemaVersion:2,version:'2026-10-31.public.1',description:'Public laboratory instrument references and source-backed capability claims. Manufacturer claims and software integration leads are separate evidence layers.',releaseStatus:'Public reference release. No local protocols, installations or access records.',notices:reference.notices,records:reference.records.map(original=>{
 const vendors={'formulatrix':'FORMULATRIX','inheco':'INHECO'};
 const r={...original,vendor:vendors[original.vendor.toLowerCase()]||original.vendor,category:original.category.toLowerCase(),capabilities:original.capabilities.map(c=>({...c,operation:c.operation.toLowerCase()}))};
 const e=evidence.get(r.id);
 if(!e)return {...r,claims:[],gaps:r.evidenceLevel==='upstream-discovery'?['Manufacturer specifications not independently extracted.','Driver status does not certify hardware or assay performance.']:['Configuration-specific claim extraction remains incomplete.']};
 return {...r,summary:e.summary||r.summary,claims:(e.claims||[]).map(c=>({...c,operation:c.operation.toLowerCase()})),sources:[...(e.sources||[]),...r.sources.filter(s=>!(e.sources||[]).some(es=>es.url===s.url))],gaps:e.gaps||[],evidenceLevel:(e.claims||[]).length?'manufacturer-sourced':r.evidenceLevel,license:'Original manufacturer documents retain their own rights; independently authored factual summaries link to those sources. No blanket licence for third-party documents is asserted.',completeness:{...r.completeness,claimCoverage:'Selected original manufacturer claims extracted; remaining gaps are listed.'}};
})};
export function instrumentExport(id){const record=catalogue.records.find(r=>r.id===id);if(!record)throw Error('Unknown instrument ID');return {schemaVersion:catalogue.schemaVersion,version:catalogue.version,notices:catalogue.notices,record};}
function cell(v){let s=typeof v==='object'&&v!==null?JSON.stringify(v):String(v??'');if(/^[=+@\-\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';}
export function toCSV(){const fields=['id','name','vendor','category','evidenceLevel','claims','capabilities','modules','performance','sources','gaps','upstream','license','notices'];return [fields.join(','),...catalogue.records.map(r=>fields.map(k=>cell(k==='notices'?catalogue.notices:r[k])).join(','))].join('\r\n');}
