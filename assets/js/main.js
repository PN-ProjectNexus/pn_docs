(function () {
  'use strict';

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', storedTheme);

  themeToggle.addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // Sidebar collapse
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      const subnav = btn.nextElementSibling;
      if (subnav) {
        subnav.style.maxHeight = expanded ? '0' : subnav.scrollHeight + 'px';
      }
    });
    // init expanded
    const subnav = btn.nextElementSibling;
    if (subnav && btn.getAttribute('aria-expanded') === 'true') {
      subnav.style.maxHeight = subnav.scrollHeight + 'px';
    }
  });

  // Search
  var searchIndex = [];
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var searchTimeout;

  function buildSearchIndex() {
    // Collect all sidebar links
    var items = document.querySelectorAll('.subnav-link, .nav-link');
    var seen = {};
    items.forEach(function (el) {
      var title = el.textContent.trim();
      var url = el.getAttribute('href');
      if (!url || seen[url] || url === '#' || url === '') return;
      var catEl = el.closest('.nav-item');
      var catBtn = catEl ? catEl.querySelector('.nav-toggle') : null;
      var catName = '';
      if (catBtn) {
        var raw = catBtn.textContent;
        // Clean: keep only letters, digits, spaces
        catName = raw.replace(/[^a-zA-Z0-9\u00C0-\u024F\s]/g, '').trim();
      }
      seen[url] = true;
      searchIndex.push({ title: title, url: url, category: catName });
    });
    // Also index page headings as extra results
    document.querySelectorAll('.content h2, .content h3').forEach(function (h) {
      var id = h.getAttribute('id');
      if (!id) return;
      var url = window.location.pathname + '#' + id;
      if (seen[url]) return;
      seen[url] = true;
      searchIndex.push({ title: h.textContent.trim(), url: url, category: 'Sur cette page' });
    });
  }

  function performSearch(query) {
    if (!query || query.length < 2) {
      searchResults.classList.add('hidden');
      return;
    }
    var q = query.toLowerCase();
    var results = searchIndex.filter(function (item) {
      return item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
    }).slice(0, 10);

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item" style="color:var(--color-text-secondary);font-size:0.875rem;padding:0.625rem 0.875rem">Aucun résultat</div>';
      searchResults.classList.remove('hidden');
      return;
    }

    var html = '';
    results.forEach(function (r) {
      var re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      var highlightedTitle = r.title.replace(re, '<strong>$1</strong>');
      html += '<a href="' + r.url + '" class="search-result-item">' +
        '<div class="result-title">' + highlightedTitle + '</div>' +
        '<div class="result-category">' + r.category + '</div>' +
        '</a>';
    });
    searchResults.innerHTML = html;
    searchResults.classList.remove('hidden');
  }

  if (searchInput && searchResults) {
    buildSearchIndex();
    searchInput.addEventListener('input', function () {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(function () {
        performSearch(searchInput.value.trim());
      }, 150);
    });
    document.addEventListener('click', function (e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.add('hidden');
      }
    });
    searchInput.addEventListener('focus', function () {
      if (searchInput.value.trim().length >= 2) {
        performSearch(searchInput.value.trim());
      }
    });
  }

  // Mobile sidebar toggle via hamburger menu (accessible via logo area on mobile)
  // If needed, add a hamburger button
  var logo = document.querySelector('.logo');
  if (window.innerWidth <= 768 && logo) {
    var hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', 'Menu');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    logo.parentNode.insertBefore(hamburger, logo);
    hamburger.addEventListener('click', function () {
      document.getElementById('sidebar').classList.toggle('open');
    });
  }

  // Add hamburger styles dynamically
  var style = document.createElement('style');
  style.textContent = `
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 4px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 6px;
    }
    .hamburger span {
      display: block;
      width: 20px;
      height: 2px;
      background: var(--color-text);
      border-radius: 2px;
      transition: transform 0.2s;
    }
    @media (max-width: 768px) {
      .hamburger {
        display: flex;
      }
    }
  `;
  document.head.appendChild(style);
})();
