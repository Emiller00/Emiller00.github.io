(() => {
  'use strict';
  const search = document.querySelector('#post-search');
  if (!search) return;
  const posts = Array.from(document.querySelectorAll('[data-post]'));
  const status = document.querySelector('#search-status');
  const empty = document.querySelector('.search-empty');
  const normalize = text => text.normalize('NFKD').toLowerCase().replace(/[\u0300-\u036f]/g, '');
  const update = () => {
    const query = normalize(search.value.trim());
    let count = 0;
    posts.forEach(post => {
      const match = query.split(/\s+/).every(term => normalize(post.dataset.search).includes(term));
      post.hidden = !match;
      if (match) count++;
    });
    status.textContent = query ? `${count} ${count === 1 ? 'entry' : 'entries'} found` : '';
    empty.hidden = count > 0;
  };
  document.querySelector('.search-control').hidden = false;
  search.addEventListener('input', update);
  document.querySelector('#clear-search').addEventListener('click', () => {
    search.value = '';
    update();
    search.focus();
  });
})();
