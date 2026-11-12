const manufacturerKinds = new Set(['manufacturer', 'manufacturer (third-party host)']);

// Missing or novel source kinds cannot upgrade a claim to manufacturer evidence.
export function evidenceFromSources(sourceKinds) {
  const kinds = [...sourceKinds];
  if (!kinds.length || kinds.some(kind => !manufacturerKinds.has(kind) && kind !== 'facility' && kind !== 'secondary')) return 'unclassified';
  if (kinds.every(kind => manufacturerKinds.has(kind))) return 'manufacturer';
  if (kinds.every(kind => kind === 'facility')) return 'facility';
  if (kinds.every(kind => kind === 'secondary')) return 'secondary';
  return 'mixed';
}

export function recordEvidenceLevel(claims, fallback) {
  if (!claims.length) return fallback;
  if (claims.every(claim => claim.evidence === 'facility')) return 'facility-reported';
  if (claims.every(claim => claim.evidence === 'secondary')) return 'secondary-sourced';
  if (claims.some(claim => ['facility', 'mixed'].includes(claim.evidence))) return 'mixed-sourced';
  // Existing curated records may have separately labelled secondary claims.
  if (claims.some(claim => claim.evidence === 'manufacturer')) return 'manufacturer-sourced';
  if (claims.some(claim => claim.evidence === 'secondary')) return 'mixed-sourced';
  return fallback;
}
