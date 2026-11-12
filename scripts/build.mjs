import {mkdir,rm,cp,writeFile,readFile,readdir} from 'node:fs/promises';import assert from 'node:assert/strict';
import {roarDiscoveryExport} from '../lib/catalogue.js';
await rm('dist',{recursive:true,force:true});await mkdir('dist');
for(const dir of ['web','lib','content'])await cp(dir,`dist/${dir}`,{recursive:true});
await writeFile('dist/roar-discovery.json', JSON.stringify(roarDiscoveryExport(), null, 2)+'\n');
await cp('THIRD_PARTY_NOTICES.md','dist/THIRD_PARTY_NOTICES.md');
await writeFile('dist/index.html','<!doctype html><html lang="en"><meta charset="utf-8"><title>Instrument Atlas</title><script>location.replace("web/index.html"+location.search+location.hash)</script><a href="web/index.html">Open Instrument Atlas</a></html>');
async function scan(dir){for(const f of await readdir(dir,{withFileTypes:true})){const p=`${dir}/${f.name}`;if(f.isDirectory())await scan(p);else {const text=await readFile(p,'utf8');for(const marker of ['app.labstep.com','slack.com/archives/','/Users/','installationId','protocolId','accessStatus'])assert(!text.includes(marker),`Private marker ${marker} in ${p}`);}}}await scan('dist');console.log('Packaged standalone public-only tree and scanned every asset.');
