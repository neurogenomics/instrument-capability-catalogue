import {instrumentModelDirectory} from '../content/instrument-model-release.js';

export function renderRoar({report, records, esc, tag, renderSources, recordURL, search}) {
  const sources = ids => ids.map(id => report.sources.find(source => source.id === id)).filter(Boolean);
  const matches = report.leads.filter(lead => [lead.reportedName, lead.reportedRole, lead.status, lead.identityGap, lead.reportedGroup,
    ...lead.modelIds.map(id => records.find(record => record.id === id)?.category)].filter(Boolean).join(' ').toLowerCase().includes(search.trim().toLowerCase()));
  const status = {matched: 'Model reference', grouped: 'Grouped report', partial: 'Partial match', unresolved: 'Unresolved model'};
  return `<p class="eyebrow">PUBLIC FACILITY REPORTS</p><h1>Discover Imperial ROAR equipment.</h1>
    <p>Find the model references behind ${report.leads.length} equipment roles reported by Imperial, including roles that do not yet identify an exact model.</p>
    <p class="subtle">${esc(report.retrievalNote)} Checked ${esc(report.checked)}.</p>
    <div class="filter-footer roar-toolbar">
      <label class="search">Search ROAR reports <input id="roar-search" type="search" value="${esc(search)}" placeholder="Name, role or unresolved model…"></label>
      <div class="buttons"><button class="button small secondary" data-export="roar-json">ROAR crosswalk JSON</button>
      <button class="button small secondary" data-export="roar-csv">ROAR crosswalk CSV</button></div>
    </div>
    <p class="subtle"><a href="../${instrumentModelDirectory}/bundle.json" download>Download C11 model identities</a>
      · <a href="../${instrumentModelDirectory}/manifest.json" download>Download C11 manifest</a></p>
    <p class="subtle">${matches.length} matching reports · Planning eligibility unassessed · Control support unknown for all ROAR reports.</p>
    <div class="grid">${matches.map(lead => `<article class="instrument-card" id="roar-${esc(lead.id)}" tabindex="-1">
      <div class="card-top">${tag('Facility reported','discovery')} ${tag(status[lead.status])}</div>
      <h3>${esc(lead.reportedName)}</h3><p>${esc(lead.reportedRole)}</p><p class="subtle">${esc(lead.identityGap)}</p>
      ${lead.modelIds.map(id => {
        const model = records.find(record => record.id === id);
        return `<p><a href="${esc(recordURL(id))}" data-instrument="${esc(id)}">Model reference: ${esc(model.vendor)} ${esc(model.name)} ↗</a></p>`;
      }).join('')}
      ${(lead.conflictIds||[]).map(id => `<p><a href="#roar-conflict-${esc(id)}">See conflicting source descriptions ↓</a></p>`).join('')}
      <details><summary>Sources for this report</summary>${renderSources(sources([...lead.sourceIds, ...(lead.additionalSourceIds||[]), ...(lead.relatedSourceIds||[])]))}</details>
    </article>`).join('') || '<div class="empty">No ROAR equipment reports match this search.</div>'}</div>
    <section class="practical-section"><h2>Conflicting source descriptions</h2>
      <div class="grid">${report.conflicts.map(conflict => `<article class="instrument-card" id="roar-conflict-${esc(conflict.id)}" tabindex="-1">
        <h3>${esc(conflict.title)}</h3>
        ${conflict.observations.map(item => `<p>${tag('Facility reported','discovery')} ${esc(item.statement)}</p>${renderSources(sources([item.sourceId]))}`).join('')}
        <p><strong>What remains unresolved:</strong> ${esc(conflict.resolution)}</p>
        ${conflict.relatedSourceIds.length ? renderSources(sources(conflict.relatedSourceIds)) : ''}
      </article>`).join('')}</div>
    </section>
    <section class="practical-section"><h2>Public sources covered</h2>
      ${report.sourceCoverage.map(item => `<div><p>${esc(item.use)}</p>${renderSources(sources([item.sourceId]))}</div>`).join('')}
    </section>`;
}
