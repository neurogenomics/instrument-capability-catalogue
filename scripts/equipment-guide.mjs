import {equipment} from '../content/bench-equipment.js';

const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
function options(values) {
  return [...new Set(values)].sort().map(value => `<option>${esc(value)}</option>`).join('');
}
function card(p) {
  const links = [p.source, ...(p.additionalSources || [])].map((url, index) =>
    `<a href="${esc(url)}">${index ? esc(new URL(url).hostname) : esc(p.section)}</a>`).join(' · ');
  return `<article class="panel" id="${esc(p.id)}" data-handoff="${p.handoff ? 'documented' : 'unassessed'}" data-family="${esc(p.family)}" data-route="${esc(p.acquisition)}">
    <small>${esc(p.family)} · ${esc(p.acquisition)}</small>
    <h2><a href="../web/index.html?instrument=${esc(p.id)}">${esc(p.model)}</a></h2>
    <p><strong>${esc(p.operation)}</strong></p><p>${esc(p.route)}</p><p>${esc(p.evidence)}</p>
    ${p.handoff ? `<p><strong>Documented handoff</strong> ${esc(p.handoff)}</p>` : ''}
    ${p.designLicence ? `<p><strong>Licence</strong> ${esc(p.designLicence)}</p>` : ''}
    <p><strong>Check before choosing</strong> ${esc(p.gap)}</p><p>Evidence · ${links}</p></article>`;
}
export function equipmentGuide() {
  const sorted = [...equipment].sort((a,b) => a.family.localeCompare(b.family) || a.model.localeCompare(b.model));
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Molecular biology equipment · Instrument Atlas</title><link rel="stylesheet" href="../web/styles.css">
  <style>main{max-width:78rem;margin:auto;padding:2rem 4vw}h1{font-size:clamp(2rem,5vw,4rem)}h2{font-size:1.4rem}#entries{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,20rem),1fr));gap:1rem}.panel{margin:0;overflow-wrap:anywhere}.panel:target{outline:2px solid currentColor}.filters{display:flex;flex-wrap:wrap;gap:1rem}.filters label{display:grid;gap:.3rem}main a{text-decoration:underline}select,input{font:inherit;padding:.4rem}article[hidden]{display:none}</style></head>
  <body><main><a href="../web/index.html">Instrument Atlas</a><h1>Molecular biology equipment</h1>
  <p>Find an instrument to buy, a design to build, or a fixture that could connect the two. Open a model to compare its capabilities in the Atlas.</p>
  <form class="filters" onsubmit="return false"><label>Search equipment<input id="query" type="search"></label><label>Equipment family<select id="family"><option value="">All families</option>${options(sorted.map(p=>p.family))}</select></label>
  <label>Acquisition route<select id="route"><option value="">All routes</option>${options(sorted.map(p=>p.acquisition))}</select></label><label>Physical transfer<select id="handoff"><option value="">Any evidence level</option><option value="documented">Documented plate handoff</option></select></label></form>
  <p><span id="count" role="status">${sorted.length} profiles</span> · <a href="profiles.json" download>Download equipment profiles</a></p>
  <div id="entries">${sorted.map(card).join('\n')}</div><h2>More in the Atlas</h2><p><a href="../web/index.html?instrument=kingfisher">Magnetic extraction</a> · <a href="../web/index.html?instrument=magblock">Magnetic separation</a> · <a href="../web/index.html?instrument=hettich-mikro-220-robotic">Robotic tube centrifugation</a> · <a href="../web/index.html?instrument=brooks-preciseflex-400">Robot arms</a></p></main>
  <script type="module" src="../web/equipment-filters.js"></script></body></html>`;
}
