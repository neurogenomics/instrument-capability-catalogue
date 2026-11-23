const form = document.querySelector('form');
const entries = [...document.querySelectorAll('#entries article')];
form.addEventListener('input', () => {
  const query = form.elements.query.value.trim().toLowerCase();
  const family = form.elements.family.value;
  const handoff = form.elements.handoff.value;
  const route = form.elements.route.value;
  for (const entry of entries) {
    entry.hidden = Boolean((family && entry.dataset.family !== family) ||
      (handoff && entry.dataset.handoff !== handoff) || (route && entry.dataset.route !== route) || !entry.textContent.toLowerCase().includes(query));
  }
  document.querySelector('#count').textContent = entries.filter(entry => !entry.hidden).length + ' profiles';
});
