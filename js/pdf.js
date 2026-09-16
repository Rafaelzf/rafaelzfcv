(function () {
  // html2pdf.js bundles an older html2canvas that crashes on some Chrome
  // versions ("Cannot read properties of undefined (reading 'width')").
  // Loading html2canvas + jsPDF directly and driving the page-slicing
  // ourselves avoids that bug and gives more control over the output.
  var HTML2CANVAS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
  var JSPDF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';

  var loadPromise = null;
  var busy = false;

  var FILENAME = {
    pt: 'Rafael-Zanini-Francucci-Curriculo.pdf',
    en: 'Rafael-Zanini-Francucci-Resume.pdf',
    es: 'Rafael-Zanini-Francucci-Curriculum.pdf'
  };
  var LOADING_LABEL = {
    pt: 'Gerando PDF...',
    en: 'Generating PDF...',
    es: 'Generando PDF...'
  };
  var ERROR_LABEL = {
    pt: 'Não foi possível gerar o PDF agora. Tente novamente.',
    en: 'Could not generate the PDF right now. Please try again.',
    es: 'No se pudo generar el PDF en este momento. Intenta de nuevo.'
  };

  function currentLang() {
    var htmlLang = document.documentElement.getAttribute('lang') || 'pt-BR';
    if (htmlLang.indexOf('en') === 0) return 'en';
    if (htmlLang.indexOf('es') === 0) return 'es';
    return 'pt';
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error('failed to load ' + src)); };
      document.head.appendChild(s);
    });
  }

  function loadLibs() {
    if (loadPromise) return loadPromise;
    loadPromise = Promise.all([
      window.html2canvas ? Promise.resolve() : loadScript(HTML2CANVAS_URL),
      (window.jspdf && window.jspdf.jsPDF) ? Promise.resolve() : loadScript(JSPDF_URL)
    ]).catch(function (err) {
      loadPromise = null;
      throw err;
    });
    return loadPromise;
  }

  // marks blocks that should never be sliced across a page break (each
  // experience entry, the older-career accordion, each formação column, the
  // volunteer-teaching callout), and pairs a section heading with whatever
  // comes right after it so the heading never ends up alone at the bottom of
  // a page with its content pushed to the next one.
  // Returns { singleEls, gluePairs } using direct element references, since
  // that's simpler and less error-prone than re-querying by attribute later.
  function markAvoidBreak(mainClone) {
    var singleEls = [];
    var gluePairs = [];
    var mark = function (el) { if (el) singleEls.push(el); };
    var glue = function (a, b) { if (a && b) gluePairs.push([a, b]); };

    var expHeading = mainClone.querySelector('[data-i18n="exp.heading"]');
    if (expHeading) {
      var expSection = expHeading.closest('section') || expHeading.parentElement;
      var expList = expSection.querySelector('.divide-y');
      if (expList) {
        Array.prototype.forEach.call(expList.children, mark);
        glue(expHeading, expList.firstElementChild);
      }
      mark(expSection.querySelector('details'));
    }

    var formHeading = mainClone.querySelector('[data-i18n="form.heading"]');
    if (formHeading) {
      var formSection = formHeading.closest('section') || formHeading.parentElement;
      var formGrid = formSection.querySelector('.grid');
      if (formGrid) {
        Array.prototype.forEach.call(formGrid.children, mark);
        glue(formHeading, formGrid);
      }
    }

    // "Stack" reuses the nav.stack i18n key (same word in every language);
    // within the cloned <main> it only matches the section heading, since
    // the site nav itself lives outside <main> and isn't part of this clone
    var stackHeading = mainClone.querySelector('[data-i18n="nav.stack"]');
    if (stackHeading) {
      var stackSection = stackHeading.closest('section') || stackHeading.parentElement;
      var stackGrid = stackSection.querySelector('.grid');
      if (stackGrid && stackGrid.firstElementChild) { glue(stackHeading, stackGrid.firstElementChild); }
    }

    var teacherTitle = mainClone.querySelector('[data-i18n="sobre.teacherTitle"]');
    if (teacherTitle) { mark(teacherTitle.closest('.rounded-xl')); }

    return { singleEls: singleEls, gluePairs: gluePairs };
  }

  function buildPrintable() {
    var main = document.getElementById('top');
    var footer = document.getElementById('contato');

    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:fixed;top:0;left:-10000px;width:1100px;background:#f3f2ee;';
    wrapper.className = 'font-sans';

    var mainClone = main.cloneNode(true);
    var footerClone = footer.cloneNode(true);

    // the site nav / language switcher are not part of the resume
    // (must run before ids are stripped below, since it looks up by id)
    var langSwitcher = mainClone.querySelector('#langSwitcher');
    if (langSwitcher) langSwitcher.remove();

    // the green gradient banner and the "available for opportunities" pill
    // don't belong in the printed resume either
    var banner = mainClone.querySelector('.bg-gradient-to-br');
    if (banner) banner.remove();
    var statusPill = mainClone.querySelector('[data-i18n="header.status"]');
    if (statusPill) {
      var pillWrap = statusPill.closest('span.rounded-full');
      if (pillWrap) pillWrap.remove();
    }

    var marks = markAvoidBreak(mainClone);

    [mainClone, footerClone].forEach(function (root) {
      // avoid duplicate-id collisions with the live page
      root.removeAttribute('id');
      root.querySelectorAll('[id]').forEach(function (el) { el.removeAttribute('id'); });
      // make sure everything is visible regardless of scroll/reveal state
      root.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      // drop the pulsing ping ring: mid-animation frames can blank out sibling text in canvas capture
      root.querySelectorAll('.animate-ping').forEach(function (el) { el.remove(); });
      // simplify the nested status-dot wrapper to a single plain dot: the
      // small nested inline-flex around it was also blanking sibling text
      root.querySelectorAll('span.relative.flex.h-1\\.5.w-1\\.5').forEach(function (el) {
        var dot = document.createElement('span');
        dot.className = 'inline-block h-1.5 w-1.5 rounded-full bg-accent';
        el.replaceWith(dot);
      });
    });

    // expand the "earlier career" accordion so it is included in the PDF
    mainClone.querySelectorAll('details').forEach(function (d) { d.setAttribute('open', ''); });

    // the "Falar comigo" / "Currículo em PDF" action buttons don't belong in
    // a static PDF; the plain mailto link in the footer contact list (no
    // rounded-full pill styling) is left in place since it is just info, not a button.
    // In the header, where those buttons sat, show the email and LinkedIn
    // address instead (stacked) so that spot still carries contact info.
    var headerButtons = mainClone.querySelectorAll('.pdf-download-btn, a.rounded-full[href^="mailto:"]');
    var headerBtnParents = [];
    headerButtons.forEach(function (el) {
      if (headerBtnParents.indexOf(el.parentNode) === -1) headerBtnParents.push(el.parentNode);
      el.remove();
    });
    headerBtnParents.forEach(function (parent) {
      if (!parent) return;
      var info = document.createElement('div');
      info.className = 'text-sm text-ink-muted leading-relaxed';
      info.innerHTML = '<div>rf.francucci@gmail.com</div><div>linkedin.com/in/rafaelzaninifrancucci</div>';
      parent.appendChild(info);
    });

    footerClone.querySelectorAll('.pdf-download-btn, a.rounded-full[href^="mailto:"]').forEach(function (el) { el.remove(); });

    wrapper.appendChild(mainClone);
    wrapper.appendChild(footerClone);
    document.body.appendChild(wrapper);
    return { wrapper: wrapper, marks: marks };
  }

  // returns the top/bottom (in px, relative to wrapper's top) of every span
  // that must not be split across a page break. Must run after the wrapper
  // is attached to the document, so getBoundingClientRect reflects real layout.
  function collectAvoidRanges(wrapper, marks) {
    var wrapperTop = wrapper.getBoundingClientRect().top;
    var ranges = marks.singleEls.map(function (el) {
      var r = el.getBoundingClientRect();
      return { top: r.top - wrapperTop, bottom: r.bottom - wrapperTop };
    });
    marks.gluePairs.forEach(function (pair) {
      var top = pair[0].getBoundingClientRect().top - wrapperTop;
      var bottom = pair[1].getBoundingClientRect().bottom - wrapperTop;
      ranges.push({ top: top, bottom: bottom });
    });
    return ranges;
  }

  function canvasToPdf(canvas, avoidRangesPx, filename) {
    var jsPDF = window.jspdf.jsPDF;
    var pdf = new jsPDF({ unit: 'px', format: 'a4', orientation: 'portrait', hotfixes: ['px_scaling'] });
    var pageWidth = pdf.internal.pageSize.getWidth();
    var pageHeight = pdf.internal.pageSize.getHeight();
    var ratio = pageWidth / canvas.width;
    var pageHeightInCanvasPx = pageHeight / ratio;

    var cursor = 0;
    var pageIndex = 0;

    while (cursor < canvas.height - 1) {
      var idealEnd = Math.min(cursor + pageHeightInCanvasPx, canvas.height);
      var end = idealEnd;

      if (idealEnd < canvas.height) {
        // several avoid-break spans can overlap at this point (e.g. a single
        // experience entry, and the wider "heading + first entry" span that
        // keeps a section title from being orphaned). Check all of them and
        // pull the break back to the EARLIEST one that still applies, not
        // just the first one found, otherwise a narrower inner span can win
        // and leave a heading stranded above where its content resumes.
        for (var i = 0; i < avoidRangesPx.length; i++) {
          var r = avoidRangesPx[i];
          if (idealEnd > r.top && idealEnd < r.bottom) {
            // only pull the break back if the resulting page still has a
            // reasonable amount of content on it (avoids near-empty pages
            // when a single block is close to a full page tall)
            if (r.top > cursor + pageHeightInCanvasPx * 0.25) {
              end = Math.min(end, r.top);
            }
          }
        }
      }

      var sliceHeightPx = end - cursor;
      if (pageIndex > 0) pdf.addPage();
      var slice = document.createElement('canvas');
      slice.width = canvas.width;
      slice.height = sliceHeightPx;
      var ctx = slice.getContext('2d');
      ctx.fillStyle = '#f3f2ee';
      ctx.fillRect(0, 0, slice.width, slice.height);
      ctx.drawImage(canvas, 0, cursor, canvas.width, sliceHeightPx, 0, 0, canvas.width, sliceHeightPx);
      var imgData = slice.toDataURL('image/jpeg', 0.95);
      pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, sliceHeightPx * ratio);

      cursor = end;
      pageIndex++;
    }

    pdf.save(filename);
  }

  function generate(btn) {
    if (busy) return;
    busy = true;

    var lang = currentLang();
    var original = btn.innerHTML;

    // build the printable clone from the still-idle DOM, so the "Currículo
    // em PDF" buttons in the captured page don't get frozen mid-loading-state
    var built = buildPrintable();
    var wrapper = built.wrapper;
    var avoidRanges = collectAvoidRanges(wrapper, built.marks); // CSS px, relative to wrapper

    btn.setAttribute('aria-busy', 'true');
    btn.disabled = true;
    btn.innerHTML = '<i class="ph ph-circle-notch animate-spin"></i><span>' + LOADING_LABEL[lang] + '</span>';

    var restore = function () {
      if (wrapper && wrapper.parentNode) wrapper.parentNode.removeChild(wrapper);
      btn.innerHTML = original;
      btn.removeAttribute('aria-busy');
      btn.disabled = false;
      busy = false;
    };

    var scale = 2;

    loadLibs()
      .then(function () { return document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(); })
      .then(function () {
        // let layout/paint settle before the snapshot. Deliberately not using
        // requestAnimationFrame here: rAF is paused indefinitely on a tab the
        // browser considers backgrounded (visibilityState "hidden"), which
        // would hang this promise forever with no error.
        return new Promise(function (resolve) { setTimeout(resolve, 80); });
      })
      .then(function () {
        return window.html2canvas(wrapper, {
          scale: scale,
          backgroundColor: '#f3f2ee',
          useCORS: true,
          windowWidth: 1100
        });
      })
      .then(function (canvas) {
        var avoidRangesPx = avoidRanges.map(function (r) {
          return { top: r.top * scale, bottom: r.bottom * scale };
        });
        canvasToPdf(canvas, avoidRangesPx, FILENAME[lang] || FILENAME.pt);
        restore();
      })
      .catch(function (err) {
        console.error('PDF generation failed', err);
        restore();
        window.alert(ERROR_LABEL[lang] || ERROR_LABEL.pt);
      });
  }

  document.querySelectorAll('.pdf-download-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { generate(btn); });
  });
})();
