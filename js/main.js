(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) { document.documentElement.classList.add('no-motion'); }

  // reveal on scroll
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll('.reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          setTimeout(function () { entry.target.classList.add('is-visible'); }, (i % 6) * 60);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '15% 0px -5% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
    // safety net: never leave content permanently hidden (fast scrolls, edge cases)
    setTimeout(function () {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(function (el) { el.classList.add('is-visible'); });
    }, 2500);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  // sticky nav shadow, via sentinel (no scroll listener)
  var nav = document.getElementById('siteNav');
  var sentinel = document.getElementById('top-sentinel');
  if ('IntersectionObserver' in window && nav && sentinel) {
    var navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        nav.classList.toggle('shadow-soft', !entry.isIntersecting);
        nav.classList.toggle('border-border', !entry.isIntersecting);
      });
    }, { threshold: 0 });
    navIO.observe(sentinel);
  }

  // mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('nav-closed') === false;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.innerHTML = open ? '<i class="ph ph-x text-xl"></i>' : '<i class="ph ph-list text-xl"></i>';
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.add('nav-closed');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<i class="ph ph-list text-xl"></i>';
      });
    });
  }

  // hero pointer spotlight
  var hero = document.getElementById('heroSection');
  var spot = document.getElementById('heroSpot');
  if (!reduceMotion && hero && spot && window.matchMedia('(hover: hover)').matches) {
    var raf = null;
    hero.addEventListener('pointermove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 100;
      var y = ((e.clientY - rect.top) / rect.height) * 100;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        spot.style.setProperty('--x', x + '%');
        spot.style.setProperty('--y', y + '%');
      });
    });
  }
})();
