// An unassessed integration is an absence of evidence, not a search match.
export function matchesSearch(record, query) {
 const searchable = record.madsci?.status === 'not-assessed'
  ? Object.fromEntries(Object.entries(record).filter(([key]) => key !== 'madsci'))
  : record;
 return JSON.stringify(searchable).toLowerCase().includes(query.toLowerCase());
}
