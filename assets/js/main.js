(function () {
  'use strict';

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const storedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', storedTheme);

    themeToggle.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

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

  // Mobile hamburger
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  if (hamburger && sidebar) {
    hamburger.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function (e) {
      if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
          sidebar.classList.remove('open');
        }
      }
    });
  }

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
        var clone = catBtn.cloneNode(true);
        var icon = clone.querySelector('.nav-icon');
        var chevron = clone.querySelector('.chevron');
        if (icon) icon.remove();
        if (chevron) chevron.remove();
        catName = clone.textContent.trim();
      }
      
      seen[url] = true;
      searchIndex.push({ title: title, url: url, category: catName });
    });
    
    // Also index page headings as extra results
    document.querySelectorAll('.content h2, .content h3').forEach(function (h) {
      var id = h.getAttribute('id');
      if (!id) return;
      var url = window.location.pathname + (window.location.pathname.endsWith('/') ? '' : '/') + '#' + id;
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
})();
