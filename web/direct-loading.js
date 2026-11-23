export function renderDirectLoading(assessment, esc) {
  if (!assessment) return '';
  const refs = assessment.sources.map(s => `<a href="${esc(s.url)}">${esc(s.section)}</a>`).join(' · ');
  return `<section class="panel"><h3>Direct robot loading</h3>
    <p><strong>${esc(assessment.effort)}</strong></p><p>${esc(assessment.reason)}</p>
    <p><strong>Check with your arm</strong> ${esc(assessment.check)}</p>
    <details><summary>Assessment basis and sources</summary><p>${esc(assessment.basis)}</p><p>${refs}</p></details></section>`;
}
