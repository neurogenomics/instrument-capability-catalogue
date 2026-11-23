import {equipment} from '../content/bench-equipment.js';

export const benchRelease = '2026-11-23.public.3';

// A profile can add a build or purchase route to an existing model without
// changing its identity or the evidence already held for other configurations.
export function withBenchEquipment(previous, extend) {
  const models = new Map(previous.map(record => [record.id, record]));
  for (const profile of equipment) {
    const {id, model, vendor, family, route, operation, source, section, evidence, gap, kind, acquisition} = profile;
    const sourceId = id + '-bench-source';
    const citation = {id: sourceId, title: model, url: source, section, kind, checked: '2026-11-23'};
    const claim = {id: id + '-bench-operation', operation: operation.toLowerCase(), type: 'unspecified',
      configuration: model, statement: evidence, sourceIds: [sourceId], evidence: kind};
    const bench = {directLoading: profile.directLoading, handoff: profile.handoff, handoffFormat: profile.handoff ? profile.handoffFormat || 'Plate' : undefined, designLicence: profile.designLicence, additionalSources: profile.additionalSources, acquisition, family, route, operation, evidence, gap, sourceIds: [sourceId]};
    const existing = models.get(id);
    if (existing) {
      models.set(id, {...existing, bench, claims: [...existing.claims, claim], gaps: [...existing.gaps, gap],
        sources: [...existing.sources, citation]});
      continue;
    }
    models.set(id, extend({id, name: model, vendor, category: family.toLowerCase(), summary: route + '. ' + evidence,
      bench, claims: [claim], sources: [citation], gaps: [gap], capabilities: [{operation: claim.operation,
        type: claim.type, detail: evidence, sourceIds: [sourceId]}], modules: [], performance: null, verified: citation.checked,
      evidenceLevel: kind === 'manufacturer' ? 'manufacturer-sourced' : 'curated-reference',
      completeness: {workingEnvelope: gap}, planningEligibility: 'unassessed', controlSupport: 'unknown',
      license: 'See the cited project or manufacturer for rights to each design, document and software component.', upstream: null}));
  }
  return [...models.values()];
}
