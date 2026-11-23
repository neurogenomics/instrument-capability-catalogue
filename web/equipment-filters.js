const form = document.querySelector('form');
const {family, query, route, handoff} = form.elements;
const entries = [...document.querySelectorAll('#entries article')];
const reset = document.querySelector('#clear-filters');

function update() {
  const inFamily = entries.filter(entry => !family.value || entry.dataset.family === family.value);
  const available = new Set(inFamily.flatMap(entry => entry.dataset.handoff.split('|')));
  const incompatible = handoff.value && !available.has(handoff.value);
  if (incompatible) handoff.value = '';
  for (const option of handoff.options) {
    option.disabled = Boolean(option.value) && !available.has(option.value);
  }
  const term = query.value.trim().toLowerCase();
  let matching = 0;
  for (const entry of entries) {
    entry.hidden = Boolean((family.value && entry.dataset.family !== family.value) ||
      (handoff.value && !entry.dataset.handoff.split('|').includes(handoff.value)) ||
      (route.value && entry.dataset.route !== route.value) || !entry.textContent.toLowerCase().includes(term));
    if (!entry.hidden) matching++;
  }
  document.querySelector('#count').textContent = matching + (matching === 1 ? ' profile' : ' profiles') +
    (incompatible ? ' · Previous transfer filter cleared for this family.' : '');
  document.querySelector('#empty').hidden = matching > 0;
  reset.hidden = ![family, query, route, handoff].some(input => input.value);
  const url = new URL(location.href);
  for (const field of [family, query, route, handoff]) {
    if (field.value) url.searchParams.set(field.id, field.value);
    else url.searchParams.delete(field.id);
  }
  history.replaceState(null, '', url);
}

for (const field of [family, query, route, handoff]) {
  const value = new URL(location.href).searchParams.get(field.id);
  if (value !== null) field.value = value;
}
form.addEventListener('input', update);
reset.addEventListener('click', () => { form.reset(); update(); });
window.addEventListener('pageshow', update);
update();
