/* ============================================================================
   ARCHITECTURE ATLAS — progressive enhancement
   ----------------------------------------------------------------------------
   The site is fully static (pages pre-rendered by build.py). This script only
   ADDS optional behaviour on top of complete HTML: theme toggle, mobile menu,
   favorites, styles search/filter, checklist persistence, prompt copy, compare,
   scroll-spy, and the broken-image → generated-plate fallback. With JS off, all
   content still reads.
   ========================================================================== */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); };

  /* ---------- icons ---------- */
  var I = {
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.7-10-9.4C.3 8.2 1.7 4.5 5 4c2.1-.3 3.7 1 4.9 2.6C11.3 5 12.9 3.7 15 4c3.3.5 4.7 4.2 3 7.6C19.5 16.3 12 21 12 21z"/></svg>'
  };

  /* ---------- relative base (depth) ---------- */
  // style pages live in /styles/, everything else at root
  var BASE = /\/styles\/[^/]+\.html?$/.test(location.pathname) ? "../" : "";

  /* ---------- generated plate fallback (mirrors build.py) ---------- */
  function plateHTML(caption) {
    var cap = caption || "Architectural plate", h = 0, i;
    for (i = 0; i < cap.length; i++) h = (h * 31 + cap.charCodeAt(i)) >>> 0;
    function r(n) { h = (h * 1103515245 + 12345) >>> 0; return (h % 1000) / 1000 * n; }
    var n = 3 + Math.floor(r(3)), blocks = "", x = 40, pal = ["var(--sh-dark)", "var(--accent-soft)", "#9b9389"], mid = Math.floor(n / 2);
    for (i = 0; i < n; i++) {
      var w = 34 + r(46), bh = 60 + r(150), gap = 6 + r(16);
      var fill = i === mid ? "var(--accent)" : pal[i % 3];
      var op = i === mid ? 0.85 : 0.5 + (i % 3) * 0.12;
      blocks += '<rect x="' + x.toFixed(1) + '" y="' + (250 - bh).toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + bh.toFixed(1) + '" fill="' + fill + '" opacity="' + op.toFixed(2) + '"/>';
      for (var wy = 250 - bh + 14; wy < 244; wy += 18)
        blocks += '<line x1="' + (x + 6).toFixed(1) + '" y1="' + wy.toFixed(1) + '" x2="' + (x + w - 6).toFixed(1) + '" y2="' + wy.toFixed(1) + '" stroke="var(--bg)" stroke-width="2" opacity="0.45"/>';
      x += w + gap; if (x > 360) break;
    }
    var gid = h % 9999;
    var svg = '<svg viewBox="0 0 400 270" preserveAspectRatio="xMidYMax slice" style="position:absolute;inset:0;width:100%;height:100%">'
      + '<defs><pattern id="g' + gid + '" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" fill="none" stroke="var(--line)" stroke-width="0.6" opacity="0.7"/></pattern></defs>'
      + '<rect width="400" height="270" fill="url(#g' + gid + ')"/>'
      + '<line x1="0" y1="250" x2="400" y2="250" stroke="var(--line)" stroke-width="1.2"/>' + blocks + '</svg>';
    return '<div class="img-fallback plate">' + svg + '<span>' + esc(cap) + '</span></div>';
  }
  function failImg(el) {
    var wrap = document.createElement("div");
    wrap.innerHTML = plateHTML(el.getAttribute("data-plate") || el.getAttribute("alt") || "");
    var node = wrap.firstChild;
    if (el.parentNode) el.parentNode.replaceChild(node, el);
  }

  /* ---------- toast ---------- */
  var toastTimer;
  function toast(msg) {
    var t = $("#toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
    t.innerHTML = I.check + "<span>" + esc(msg) + "</span>";
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  /* ---------- theme ---------- */
  function renderThemeBtn() {
    var b = $("#theme-btn");
    if (b) b.innerHTML = document.documentElement.getAttribute("data-theme") === "dark" ? I.sun : I.moon;
  }
  function bindTheme() {
    var b = $("#theme-btn");
    if (b) b.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("atlas-theme", next); } catch (e) {}
      renderThemeBtn();
    });
    renderThemeBtn();
  }

  /* ---------- mobile menu ---------- */
  function bindMenu() {
    var m = $("#menu-btn"), links = $("#nav-links");
    if (m && links) m.addEventListener("click", function () { links.classList.toggle("open"); });
  }

  /* ---------- favorites ---------- */
  var FAV = "atlas-favorites";
  function getFavs() { try { return JSON.parse(localStorage.getItem(FAV)) || []; } catch (e) { return []; } }
  function setFavs(a) { try { localStorage.setItem(FAV, JSON.stringify(a)); } catch (e) {} }
  function isFav(slug) { return getFavs().indexOf(slug) >= 0; }
  function toggleFav(slug) {
    var f = getFavs(), i = f.indexOf(slug);
    if (i >= 0) { f.splice(i, 1); toast("Removed from favorites"); } else { f.push(slug); toast("Saved to favorites"); }
    setFavs(f); return f.indexOf(slug) >= 0;
  }
  function paintFavs() {
    $$("[data-fav]").forEach(function (el) { el.classList.toggle("on", isFav(el.getAttribute("data-fav"))); });
  }
  function bindFavs() {
    paintFavs();
    document.addEventListener("click", function (e) {
      var btn = e.target.closest && e.target.closest("[data-fav]");
      if (!btn) return;
      e.preventDefault(); e.stopPropagation();
      var on = toggleFav(btn.getAttribute("data-fav"));
      $$('[data-fav="' + btn.getAttribute("data-fav") + '"]').forEach(function (el) { el.classList.toggle("on", on); });
    });
  }

  /* ---------- styles search + filter ---------- */
  function bindStylesPage() {
    var results = $("#results");
    if (!results) return;
    var state = { q: "", band: "", region: "", type: "" };
    var cards = $$("[data-style]", results);
    var empty = $("#empty");
    function apply() {
      var shown = 0;
      cards.forEach(function (c) {
        var ok = true;
        if (state.band && c.getAttribute("data-band") !== state.band) ok = false;
        if (state.region && c.getAttribute("data-region") !== state.region) ok = false;
        if (state.type && ("|" + c.getAttribute("data-types") + "|").indexOf("|" + state.type + "|") < 0) ok = false;
        if (state.q && c.getAttribute("data-search").indexOf(state.q) < 0) ok = false;
        c.style.display = ok ? "" : "none";
        if (ok) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
    }
    var inp = $("#search");
    if (inp) inp.addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase(); apply(); });
    [["#f-band", "band"], ["#f-region", "region"], ["#f-type", "type"]].forEach(function (pair) {
      var box = $(pair[0]); if (!box) return;
      box.addEventListener("click", function (e) {
        var chip = e.target.closest(".chip"); if (!chip) return;
        state[pair[1]] = chip.getAttribute("data-" + pair[1].replace("region", "region")) || chip.getAttribute("data-" + pair[1]) || "";
        Array.prototype.forEach.call(box.children, function (ch) { ch.classList.toggle("active", ch === chip); });
        apply();
      });
    });
  }

  /* ---------- checklist persistence ---------- */
  function bindChecklist() {
    var list = $("#checklist"); if (!list) return;
    var key = "atlas-ck-" + list.getAttribute("data-slug"), done = [];
    try { done = JSON.parse(localStorage.getItem(key)) || []; } catch (e) {}
    $$("li", list).forEach(function (li) {
      var i = +li.getAttribute("data-ck");
      if (done.indexOf(i) >= 0) li.classList.add("done");
      li.addEventListener("click", function () {
        li.classList.toggle("done");
        var idx = done.indexOf(i);
        if (idx >= 0) done.splice(idx, 1); else done.push(i);
        try { localStorage.setItem(key, JSON.stringify(done)); } catch (e) {}
      });
    });
  }

  /* ---------- prompt copy ---------- */
  function bindCopy() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest && e.target.closest("[data-copy]");
      if (!btn) return;
      var txt = btn.getAttribute("data-copy");
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(function () { toast("Prompt copied"); }, function () { toast("Copy failed"); });
      else toast("Copy not supported");
    });
  }

  /* ---------- scroll-spy TOC ---------- */
  function bindTOC() {
    var links = $$("[data-toc]"); if (!links.length) return;
    var secs = links.map(function (a) { return document.getElementById("sec-" + a.getAttribute("data-toc")); }).filter(Boolean);
    function spy() {
      var cur = secs[0];
      secs.forEach(function (s) { if (s.getBoundingClientRect().top <= 140) cur = s; });
      links.forEach(function (a) { a.classList.toggle("active", "sec-" + a.getAttribute("data-toc") === (cur && cur.id)); });
    }
    window.addEventListener("scroll", spy, { passive: true }); spy();
  }

  /* ---------- compare (needs window.STYLES) ---------- */
  function bindCompare() {
    var a = $("#cmp-a"), b = $("#cmp-b"), table = $("#cmp-table");
    if (!a || !b || !table || !window.STYLES) return;
    var bySlug = {}; window.STYLES.forEach(function (s) { bySlug[s.slug] = s; });
    function paletteHTML(arr) {
      return '<div class="palette">' + arr.map(function (c) {
        return '<div class="pc"><div class="fill" style="background:' + c.hex + '"></div><div class="cap"><div class="nm">' + esc(c.name) + '</div><div class="hx">' + esc(c.hex) + '</div></div></div>';
      }).join("") + '</div>';
    }
    function chipsHTML(arr) { return '<div class="filters">' + arr.map(function (x) { return '<span class="chip">' + esc(x) + '</span>'; }).join("") + '</div>'; }
    function head(s) { return '<div class="compare-col-head"><div><h3>' + esc(s.name) + '</h3><span class="muted" style="font-size:.8rem">' + esc(s.eraLabel) + '</span></div></div>'; }
    function row(label, fa, fb) { return '<tr><th>' + label + '</th><td>' + fa + '</td><td>' + fb + '</td></tr>'; }
    function render() {
      var sa = bySlug[a.value], sb = bySlug[b.value];
      table.innerHTML = '<table class="compare-table">'
        + '<tr><th></th><td>' + head(sa) + '</td><td>' + head(sb) + '</td></tr>'
        + row("Tagline", '<span class="serif-italic">' + esc(sa.tagline) + '</span>', '<span class="serif-italic">' + esc(sb.tagline) + '</span>')
        + row("Region", esc(sa.region), esc(sb.region))
        + row("Mood", esc(sa.mood), esc(sb.mood))
        + row("Definition", esc(sa.overview.definition), esc(sb.overview.definition))
        + row("Principles", chipsHTML(sa.philosophy.principles), chipsHTML(sb.philosophy.principles))
        + row("Massing", esc(sa.visual.massing), esc(sb.visual.massing))
        + row("Geometry", esc(sa.visual.geometry), esc(sb.visual.geometry))
        + row("Symmetry", esc(sa.visual.symmetry), esc(sb.visual.symmetry))
        + row("Roofs", esc(sa.visual.roofs), esc(sb.visual.roofs))
        + row("Key Materials", chipsHTML(sa.materials.map(function (m) { return m.name.split(" (")[0]; })), chipsHTML(sb.materials.map(function (m) { return m.name.split(" (")[0]; })))
        + row("Palette", paletteHTML(sa.colors.primary.concat(sa.colors.accent)), paletteHTML(sb.colors.primary.concat(sb.colors.accent)))
        + row("Ornament", esc(sa.facadeGuide.ornament), esc(sb.facadeGuide.ornament))
        + row("Best For", chipsHTML(sa.buildingTypes), chipsHTML(sb.buildingTypes))
        + row("", '<a class="btn" href="' + BASE + 'styles/' + sa.slug + '.html">Open ' + esc(sa.name) + ' ' + I.arrow + '</a>', '<a class="btn" href="' + BASE + 'styles/' + sb.slug + '.html">Open ' + esc(sb.name) + ' ' + I.arrow + '</a>')
        + '</table>';
    }
    // honour ?a= deep link
    var q = new URLSearchParams(location.search);
    if (q.get("a") && bySlug[q.get("a")]) a.value = q.get("a");
    if (q.get("b") && bySlug[q.get("b")]) b.value = q.get("b");
    if (a.value === b.value) b.selectedIndex = Math.min(1, b.options.length - 1);
    a.addEventListener("change", render); b.addEventListener("change", render);
    render();
  }

  /* ---------- favorites page render (needs window.STYLES) ---------- */
  function bindFavoritesPage() {
    var box = $("#fav-results"); if (!box || !window.STYLES) return;
    var empty = $("#fav-empty");
    var bySlug = {}; window.STYLES.forEach(function (s) { bySlug[s.slug] = s; });
    var favs = getFavs().map(function (s) { return bySlug[s]; }).filter(Boolean);
    if (!favs.length) { box.style.display = "none"; if (empty) empty.style.display = ""; return; }
    if (empty) empty.style.display = "none";
    box.innerHTML = favs.map(function (s) {
      var cols = s.colors.primary.concat(s.colors.accent, s.colors.material).slice(0, 5);
      var dots = cols.map(function (c) { return '<span class="dot" style="background:' + c.hex + '"></span>'; }).join("");
      var imgEl = s.banner
        ? '<img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(s.banner.replace(/ /g, "_")) + '?width=600" alt="' + esc(s.name) + '" data-plate="' + esc(s.name) + '" onerror="ATLAS.failImg(this)">'
        : plateHTML(s.name);
      return '<a class="card style-card" href="' + BASE + 'styles/' + s.slug + '.html" data-style>'
        + '<div class="thumb">' + imgEl + '<span class="era-tag">' + esc(s.eraLabel) + '</span>'
        + '<span class="fav"><span class="fav-btn on" data-fav="' + s.slug + '">' + I.heart + '</span></span></div>'
        + '<div class="body"><h3>' + esc(s.name) + '</h3><p>' + esc(s.tagline) + '</p>'
        + '<div class="meta-row"><span class="tag">' + esc(s.region) + '</span></div>'
        + '<div class="swatches">' + dots + '</div></div></a>';
    }).join("");
    paintFavs();
  }

  /* ---------- public api (used by inline onerror) ---------- */
  window.ATLAS = { failImg: failImg, plateHTML: plateHTML };

  /* ---------- boot ---------- */
  function boot() {
    bindTheme(); bindMenu(); bindFavs(); bindStylesPage();
    bindChecklist(); bindCopy(); bindTOC(); bindCompare(); bindFavoritesPage();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
