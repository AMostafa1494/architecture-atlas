#!/usr/bin/env python3
"""
ARCHITECTURE ATLAS — static site generator.

Reads the single content source (assets/js/data.js) and PRE-RENDERS every page
to plain static HTML in dist/. No framework, no runtime rendering: the content
is in the HTML and works with JavaScript disabled. enhance.js only layers on
optional niceties (theme, favorites, search, copy).

    python3 build.py        # builds into ./dist
"""
import os, re, json, html, shutil, hashlib

ROOT = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(ROOT, "dist")

# ---------------------------------------------------------------- load content
def load_styles():
    src = open(os.path.join(ROOT, "assets/js/data.js"), encoding="utf-8").read()
    i = src.rindex("const STYLES =") + len("const STYLES =")
    start = src.index("[", i)
    end = src.index("]\n;", start) + 1
    return json.loads(src[start:end])

STYLES = load_styles()
BY_SLUG = {s["slug"]: s for s in STYLES}

# ---------------------------------------------------------------- helpers
def e(s):  # escape
    return html.escape(str(s), quote=True)

def media_url(file, width=800):
    """Resolve an image reference to a URL.
    - Full URL (Unsplash/Pexels/etc., starts with http) → used as-is, with a width
      hint appended for Unsplash's CDN when no sizing param is present.
    - Otherwise treated as a Wikimedia Commons file name (public domain / CC)."""
    if file.startswith("http"):
        if "images.unsplash.com" in file and "w=" not in file:
            sep = "&" if "?" in file else "?"
            return f"{file}{sep}w={width}&q=80&auto=format&fit=crop"
        return file
    f = file.replace(" ", "_")
    from urllib.parse import quote
    return f"https://commons.wikimedia.org/wiki/Special:FilePath/{quote(f)}?width={width}"

# backward-compatible alias
wiki_url = media_url

def plate(caption):
    """Deterministic generated architectural plate (SVG) — exterior massing."""
    cap = caption or "Architectural plate"
    h = 0
    for ch in cap:
        h = (h * 31 + ord(ch)) & 0xFFFFFFFF
    def rnd(n):
        nonlocal h
        h = (h * 1103515245 + 12345) & 0xFFFFFFFF
        return (h % 1000) / 1000 * n
    n = 3 + int(rnd(3))
    blocks = ""
    x = 40.0
    pal = ["var(--sh-dark)", "var(--accent-soft)", "#9b9389"]
    mid = n // 2
    for i in range(n):
        w = 34 + rnd(46); bh = 60 + rnd(150); gap = 6 + rnd(16)
        fill = "var(--accent)" if i == mid else pal[i % 3]
        op = 0.85 if i == mid else 0.5 + (i % 3) * 0.12
        blocks += f'<rect x="{x:.1f}" y="{250-bh:.1f}" width="{w:.1f}" height="{bh:.1f}" fill="{fill}" opacity="{op:.2f}"/>'
        wy = 250 - bh + 14
        while wy < 244:
            blocks += f'<line x1="{x+6:.1f}" y1="{wy:.1f}" x2="{x+w-6:.1f}" y2="{wy:.1f}" stroke="var(--bg)" stroke-width="2" opacity="0.45"/>'
            wy += 18
        x += w + gap
        if x > 360:
            break
    gid = h % 9999
    svg = (f'<svg viewBox="0 0 400 270" preserveAspectRatio="xMidYMax slice" '
           f'style="position:absolute;inset:0;width:100%;height:100%">'
           f'<defs><pattern id="g{gid}" width="22" height="22" patternUnits="userSpaceOnUse">'
           f'<path d="M22 0H0V22" fill="none" stroke="var(--line)" stroke-width="0.6" opacity="0.7"/></pattern></defs>'
           f'<rect width="400" height="270" fill="url(#g{gid})"/>'
           f'<line x1="0" y1="250" x2="400" y2="250" stroke="var(--line)" stroke-width="1.2"/>'
           f'{blocks}</svg>')
    return f'<div class="img-fallback plate">{svg}<span>{e(cap)}</span></div>'

def img(file, caption, width=800):
    """Static <img> pointing at Wikimedia; if no file, render the plate directly.
    A <noscript>-free progressive fallback: enhance.js swaps broken images for plates."""
    if not file:
        return plate(caption)
    cap = e(caption or "")
    return (f'<img loading="lazy" src="{e(media_url(file, width))}" alt="{cap}" '
            f'data-plate="{cap}" onerror="window.ATLAS&&ATLAS.failImg(this)">')

ICON = {
 "compass": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M16 8l-2.5 5.5L8 16l2.5-5.5z"/></svg>',
 "sun": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
 "moon": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
 "heart": '<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.7-10-9.4C.3 8.2 1.7 4.5 5 4c2.1-.3 3.7 1 4.9 2.6C11.3 5 12.9 3.7 15 4c3.3.5 4.7 4.2 3 7.6C19.5 16.3 12 21 12 21z"/></svg>',
 "menu": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
 "check": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 6"/></svg>',
 "copy": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
 "arrow": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
 "layers": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5"/></svg>',
}

NAV = [("Home","index.html"),("Styles","styles.html"),("Schools","schools.html"),
       ("Materials","materials.html"),("Colors","colors.html"),("Prompts","prompts.html"),
       ("Architects","architects.html"),("Buildings","buildings.html"),("Timeline","timeline.html"),
       ("Compare","compare.html"),("Favorites","favorites.html")]

def rel(depth):
    return "../" * depth

def nav(active, depth=0):
    base = rel(depth)
    links = ""
    for label, href in NAV:
        cls = " active" if href == active else ""
        links += f'<a href="{base}{href}" class="nav-link{cls}">{label}</a>'
    return f'''<nav class="nav"><div class="wrap nav-inner">
  <a class="brand" href="{base}index.html"><span class="logo">{ICON['compass']}</span>
    <span>Architecture Atlas<small>Design Reference</small></span></a>
  <div class="nav-links" id="nav-links">{links}</div>
  <button class="icon-btn" id="theme-btn" title="Toggle theme" aria-label="Toggle theme">{ICON['moon']}</button>
  <button class="icon-btn menu-toggle" id="menu-btn" title="Menu" aria-label="Menu">{ICON['menu']}</button>
</div></nav>'''

def footer(depth=0):
    base = rel(depth)
    yr = 2026
    cols = [
     ("Reference", [("Architectural Styles","styles.html"),("Design Schools","schools.html"),
                    ("Materials Library","materials.html"),("Color Library","colors.html")]),
     ("Tools", [("AI Design Prompts","prompts.html"),("Compare Styles","compare.html"),
                ("Timeline","timeline.html"),("Favorites","favorites.html")]),
     ("Discover", [("Famous Architects","architects.html"),("Famous Buildings","buildings.html"),
                   ("Inspiration Gallery","gallery.html")]),
    ]
    colhtml = ""
    for title, items in cols:
        links = "".join(f'<a href="{base}{h}">{t}</a>' for t,h in items)
        colhtml += f'<div><h4>{title}</h4>{links}</div>'
    return f'''<footer class="footer"><div class="wrap">
  <div class="footer-grid">
    <div><a class="brand" href="{base}index.html" style="font-size:1.2rem"><span class="logo">{ICON['compass']}</span><span>Architecture Atlas</span></a>
    <p class="colophon">A practical, exterior-focused architectural design reference — choose a direction and architectural language for any project. Built for design teams.</p></div>
    {colhtml}
  </div>
  <div class="footer-bottom">
    <span>© {yr} Architecture Atlas · Cube Design Studio</span>
    <span>Static site · Exterior architecture only · Imagery via Unsplash · Pexels · Wikimedia (free / public domain)</span>
  </div>
</div></footer>'''

def page(title, body, active, depth=0, description=""):
    base = rel(depth)
    desc = description or "A practical, exterior-focused architectural design reference: 20 styles, materials, colour, façade guides, lighting, checklists and AI prompts."
    return f'''<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{base}assets/css/styles.css">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238a5c38' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cpath d='M16 8l-2.5 5.5L8 16l2.5-5.5z'/%3E%3C/svg%3E">
<script>(function(){{try{{var t=localStorage.getItem('atlas-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}}catch(e){{}}}})();</script>
</head>
<body>
{nav(active, depth)}
{body}
{footer(depth)}
<script src="{base}assets/js/data.js"></script>
<script src="{base}assets/js/enhance.js"></script>
</body>
</html>'''

def swatch_dots(s, n=5):
    cols = (s["colors"]["primary"] + s["colors"]["accent"] + s["colors"]["material"])[:n]
    dots = "".join(f'<span class="dot" style="background:{c["hex"]}"></span>' for c in cols)
    return f'<div class="swatches">{dots}</div>'

def style_card(s, depth=0, rise=""):
    base = rel(depth)
    tags = f'<span class="tag">{e(s["region"])}</span><span class="tag">{e(s["mood"].split(" · ")[0])}</span>'
    search = e(" ".join([s["name"], s["tagline"], s["region"], s["mood"],
        s["overview"]["definition"], " ".join(s["overview"]["architects"]),
        " ".join(m["name"] for m in s["materials"]), " ".join(s["philosophy"]["principles"]),
        " ".join(s["buildingTypes"])]).lower())
    types = e("|".join(s["buildingTypes"]))
    return f'''<a class="card style-card {rise}" href="{base}styles/{s['slug']}.html"
      data-style data-name="{e(s['name'])}" data-era="{s['era']}" data-region="{e(s['region'])}"
      data-types="{types}" data-search="{search}">
  <div class="thumb">{img(s['banner'], s['name'], 600)}
    <span class="era-tag">{e(s['eraLabel'])}</span>
    <span class="fav"><span class="fav-btn" data-fav="{s['slug']}">{ICON['heart']}</span></span></div>
  <div class="body"><h3>{e(s['name'])}</h3><p>{e(s['tagline'])}</p>
    <div class="meta-row">{tags}</div>{swatch_dots(s)}</div>
</a>'''

def palette(arr):
    cells = "".join(
      f'<div class="pc"><div class="fill" style="background:{c["hex"]}"></div>'
      f'<div class="cap"><div class="nm">{e(c["name"])}</div><div class="hx">{e(c["hex"])}</div></div></div>'
      for c in arr)
    return f'<div class="palette">{cells}</div>'

def chips(items):
    return '<div class="filters">' + "".join(f'<span class="chip">{e(x)}</span>' for x in items) + '</div>'

# ---------------------------------------------------------------- PAGES
def build_home():
    feat = STYLES[:6]
    cards = "".join(style_card(s, 0, f"rise rise-{(i%6)+1}") for i,s in enumerate(feat))
    n_mat = sum(len(s["materials"]) for s in STYLES)
    body = f'''<header class="hero"><div class="hero-grid"></div><div class="wrap">
  <p class="eyebrow rise">Exterior Architectural Design Reference · {len(STYLES)} Styles</p>
  <h1 class="rise rise-1">The language of<br><em>built form.</em></h1>
  <p class="hero-lede rise rise-2">A practical, exterior-focused encyclopedia of {len(STYLES)} architectural styles, from antiquity to today — façade, massing, materials, colour, lighting, checklists and AI prompts. Choose a design direction for any project, in minutes.</p>
  <div class="hero-cta rise rise-3"><a class="btn btn-accent" href="styles.html">Explore styles {ICON['arrow']}</a>
    <a class="btn" href="compare.html">Compare two styles</a></div>
  <div class="hero-stats rise rise-4">
    <div class="stat"><div class="num">{len(STYLES)}</div><div class="lab">Styles</div></div>
    <div class="stat"><div class="num">12</div><div class="lab">Sections each</div></div>
    <div class="stat"><div class="num">{n_mat}+</div><div class="lab">Materials</div></div>
    <div class="stat"><div class="num">{len(STYLES)*6}</div><div class="lab">AI Prompts</div></div>
  </div></div></header>
<main class="wrap"><section class="section">
  <div class="section-head"><p class="eyebrow">Browse the collection</p><h2>Architectural Styles</h2>
  <p>Each style is documented across twelve practical, exterior-focused sections — from façade detailing to night-lighting strategy.</p></div>
  <div class="grid cols-3">{cards}</div>
  <div class="center mt-l"><a class="btn" href="styles.html">View all {len(STYLES)} styles {ICON['arrow']}</a></div>
</section>
<section class="section"><div class="grid cols-3">
  {feature_card("Materials Library","Concrete, stone, steel, glass, timber — why each material belongs to a style.","materials.html",ICON['layers'])}
  {feature_card("AI Design Prompts","Optimised exterior prompts: façade, night, aerial, street & masterplan renders.","prompts.html",ICON['compass'])}
  {feature_card("Interactive Timeline","Trace the styles from the classical revival to computational design.","timeline.html",ICON['arrow'])}
</div></section></main>'''
    return page("Architecture Atlas — Exterior Architectural Design Reference", body, "index.html", 0)

def feature_card(title, desc, href, icon):
    return f'''<a class="card" href="{href}" style="padding:34px 32px">
  <span class="icon-btn" style="margin-bottom:18px">{icon}</span>
  <h3 style="font-size:1.5rem;margin-bottom:8px">{e(title)}</h3>
  <p class="muted" style="font-size:.9rem">{e(desc)}</p></a>'''

ERA_BANDS = [("Antiquity","antiquity"),("1500–1800","1500"),("1800–1900","1800"),
             ("1900–1950","1900"),("1950–2000","1950"),("2000+","2000")]
def era_band_of(era):
    if era < 1500: return "antiquity"
    if era < 1800: return "1500"
    if era < 1900: return "1800"
    if era < 1950: return "1900"
    if era < 2000: return "1950"
    return "2000"

def build_styles():
    regions = sorted({s["region"] for s in STYLES})
    types = sorted({t for s in STYLES for t in s["buildingTypes"]})
    cards = "".join(style_card(s, 0, "rise rise-%d" % ((i%6)+1)) for i,s in enumerate(STYLES))
    # add era band data attr by post-processing cards (simpler: include here)
    def band_attr(card, s):
        return card.replace('data-style', f'data-style data-band="{era_band_of(s["era"])}"', 1)
    cards = "".join(band_attr(style_card(s,0,"rise"), s) for s in STYLES)
    era_chips = '<button class="chip active" data-band="">All</button>' + "".join(
        f'<button class="chip" data-band="{v}">{e(l)}</button>' for l,v in ERA_BANDS)
    region_chips = '<button class="chip active" data-region="">All</button>' + "".join(
        f'<button class="chip" data-region="{e(r)}">{e(r)}</button>' for r in regions)
    type_chips = '<button class="chip active" data-type="">All</button>' + "".join(
        f'<button class="chip" data-type="{e(t)}">{e(t)}</button>' for t in types)
    body = f'''<main class="wrap section">
  <div class="section-head"><p class="eyebrow">{len(STYLES)} entries</p><h2>Architectural Styles</h2>
  <p>Search and filter by era, region or building type to find the right architectural language for your project. Exterior design only.</p></div>
  <div class="searchbar">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:20px;height:20px;color:var(--text-faint);flex:none"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
    <input id="search" type="search" placeholder="Search styles, architects, materials, principles…"></div>
  <div class="filter-group" style="margin-top:24px"><label>Era</label><div class="filters" id="f-band">{era_chips}</div></div>
  <div class="filter-group"><label>Region</label><div class="filters" id="f-region">{region_chips}</div></div>
  <div class="filter-group"><label>Building Type</label><div class="filters" id="f-type">{type_chips}</div></div>
  <div id="results" class="grid cols-3" style="margin-top:36px">{cards}</div>
  <div id="empty" class="empty" hidden><div class="big">No styles match</div><p>Try clearing a filter or changing your search.</p></div>
</main>'''
    return page("Architectural Styles — Architecture Atlas", body, "styles.html", 0)

SECTIONS = [("overview","Overview"),("philosophy","Design Philosophy"),("visual","Visual Characteristics"),
 ("materials","Materials"),("colors","Color Palette"),("facade","Façade Guide"),("lighting","Lighting"),
 ("types","Building Types"),("checklist","Design Checklist"),("mistakes","Common Mistakes"),
 ("prompts","AI Prompts"),("gallery","Gallery"),("related","Related")]

def build_style(s):
    depth = 1; base = rel(depth)
    toc_items = []
    for i, (sid, label) in enumerate(SECTIONS):
        cls = ' class="active"' if i == 0 else ''
        toc_items.append(f'<li><a href="#sec-{sid}" data-toc="{sid}"{cls}>{label}</a></li>')
    toc = "".join(toc_items)
    ov = s["overview"]
    tl = "".join(f'<div class="tl-item" style="cursor:default"><div class="tl-year">{e(t["year"])}</div>'
                 f'<div class="tl-card"><span class="tl-dot"></span><p>{e(t["event"])}</p></div></div>' for t in ov["timeline"])
    proj = "".join(f'''<div class="card style-card"><div class="thumb" style="aspect-ratio:4/3">{img(p["file"], p["name"], 500)}</div>
      <div class="body"><h3 style="font-size:1.2rem">{e(p["name"])}</h3><p>{e(p["architect"])} · {e(p["year"])}<br>{e(p["location"])}</p></div></div>''' for p in ov["projects"])
    v = s["visual"]
    vrows = [("Massing",v["massing"]),("Form Language",v["form"]),("Composition",v["composition"]),("Proportion",v["proportion"]),
             ("Geometry",v["geometry"]),("Rhythm",v["rhythm"]),("Symmetry",v["symmetry"]),("Scale",v["scale"]),
             ("Roof Types",v["roofs"]),("Window Proportion",v["windows"]),("Entrance",v["entrance"]),("Façade Articulation",v["facade"])]
    vgrid = "".join(f'<div class="row"><span class="k">{k}</span><span class="v">{e(val)}</span></div>' for k,val in vrows)
    mats = "".join(f'<div class="mat-item"><div class="mh"><span class="sw" style="background:{m["hex"]}"></span><b>{e(m["name"])}</b></div><p>{e(m["why"])}</p></div>' for m in s["materials"])
    fg = s["facadeGuide"]
    frows = [("Window Composition",fg["window"]),("Emphasis",fg["emphasis"]),("Shading Devices",fg["shading"]),
             ("Balconies",fg["balconies"]),("Frames",fg["frames"]),("Openings",fg["openings"]),
             ("Architectural Details",fg["details"]),("Ornamentation",fg["ornament"])]
    fgrid = "".join(f'<div class="row"><span class="k">{k}</span><span class="v">{e(val)}</span></div>' for k,val in frows)
    combos = "".join(f'<li><span class="x" style="color:var(--accent)">+</span><span>{e(c)}</span></li>' for c in s["colors"]["combos"])
    checks = "".join(f'<li data-ck="{i}"><span class="box">{ICON["check"]}</span><span>{e(c)}</span></li>' for i,c in enumerate(s["checklist"]))
    mist = "".join(f'<li><span class="x">✕</span><span>{e(m)}</span></li>' for m in s["mistakes"])
    pr = s["prompts"]
    plabels = [("Exterior",pr["exterior"]),("Façade Concept",pr["facade"]),("Night View",pr["night"]),
               ("Aerial View",pr["aerial"]),("Street Perspective",pr["street"]),("Masterplan",pr["masterplan"])]
    prompts = "".join(f'''<div class="prompt-card"><span class="pl">{lab}</span><p>{e(txt)}</p>
      <button class="icon-btn copy" data-copy="{e(txt)}">{ICON["copy"]}</button></div>''' for lab,txt in plabels)
    gal = "".join(f'<figure>{img(g["file"], g["caption"], 600)}<figcaption>{e(g["caption"])}</figcaption></figure>' for g in s["gallery"])
    types = "".join(f'<span class="chip"><a href="{base}styles.html">{e(t)}</a></span>' for t in s["buildingTypes"])
    related = "".join(style_card(BY_SLUG[r], depth) for r in s["related"] if r in BY_SLUG)

    body = f'''<main class="wrap"><div class="detail-hero">
  <div class="breadcrumb"><a href="{base}styles.html">Styles</a> <span>›</span> <span>{e(s["name"])}</span></div>
  <div class="detail-title"><div><p class="eyebrow">{e(s["eraLabel"])} · {e(s["region"])}</p>
    <h1>{e(s["name"])}</h1><p class="detail-sub serif-italic">{e(s["tagline"])}</p></div>
    <span class="fav-btn" data-fav="{s["slug"]}" title="Save to favorites">{ICON["heart"]}</span></div>
  <div class="detail-banner">{img(s["banner"], s["name"], 1400)}</div></div>
<div class="detail-layout">
  <aside class="toc neu-sm"><ul>{toc}</ul></aside>
  <div>
    <section class="block neu" id="sec-overview"><p class="eyebrow">01 — Overview</p><h2>Overview</h2>
      <p><strong>Definition.</strong> {e(ov["definition"])}</p>
      <p><strong>Historical background.</strong> {e(ov["history"])}</p>
      <p><strong>Origin.</strong> {e(ov["origin"])}</p>
      <h4>Timeline</h4><div class="tl-axis">{tl}</div>
      <h4>Key Architects</h4>{chips(ov["architects"])}
      <h4>Influential Projects</h4><div class="related-row">{proj}</div></section>
    <section class="block neu" id="sec-philosophy"><p class="eyebrow">02 — Design Philosophy</p><h2>Design Philosophy</h2>
      <h4>Core Principles</h4>{chips(s["philosophy"]["principles"])}
      <h4>The Thinking</h4><p>{e(s["philosophy"]["thinking"])}</p>
      <h4>Values It Represents</h4>{chips(s["philosophy"]["values"])}
      <h4>Why It Emerged</h4><p>{e(s["philosophy"]["why"])}</p></section>
    <section class="block neu" id="sec-visual"><p class="eyebrow">03 — Visual Characteristics</p><h2>Visual Characteristics</h2>
      <div class="def-grid">{vgrid}</div></section>
    <section class="block neu" id="sec-materials"><p class="eyebrow">04 — Materials</p><h2>Materials</h2>
      <div class="mat-list">{mats}</div></section>
    <section class="block neu" id="sec-colors"><p class="eyebrow">05 — Color Palette</p><h2>Color Palette</h2>
      <p>{e(s["colors"]["mood"])}</p>
      <h4>Primary</h4>{palette(s["colors"]["primary"])}
      <h4>Accent</h4>{palette(s["colors"]["accent"])}
      <h4>Material Colors</h4>{palette(s["colors"]["material"])}
      <h4>Typical Combinations</h4><ul class="avoid-list">{combos}</ul></section>
    <section class="block neu" id="sec-facade"><p class="eyebrow">06 — Façade Design Guide</p><h2>Façade Design Guide</h2>
      <div class="def-grid">{fgrid}</div></section>
    <section class="block neu" id="sec-lighting"><p class="eyebrow">07 — Lighting</p><h2>Lighting</h2>
      <h4>Natural Lighting Strategy</h4><p>{e(s["lighting"]["natural"])}</p>
      <h4>Artificial Lighting Concept</h4><p>{e(s["lighting"]["artificial"])}</p>
      <h4>Night Façade Appearance</h4><p>{e(s["lighting"]["night"])}</p>
      <h4>Recommendations</h4><p>{e(s["lighting"]["recommendations"])}</p></section>
    <section class="block neu" id="sec-types"><p class="eyebrow">08 — Typical Building Types</p><h2>Typical Building Types</h2>
      <p>Where this style performs best:</p><div class="filters">{types}</div></section>
    <section class="block neu" id="sec-checklist"><p class="eyebrow">09 — Design Checklist</p><h2>Design Checklist</h2>
      <p class="muted" style="font-size:.85rem">Tap an item to mark it complete — saved to your browser.</p>
      <ul class="checklist" id="checklist" data-slug="{s["slug"]}" style="margin-top:16px">{checks}</ul></section>
    <section class="block neu" id="sec-mistakes"><p class="eyebrow">10 — Common Mistakes</p><h2>Common Mistakes</h2>
      <p>Elements that contradict the style — what to avoid:</p><ul class="avoid-list">{mist}</ul></section>
    <section class="block neu" id="sec-prompts"><p class="eyebrow">11 — AI Prompt Examples</p><h2>AI Prompt Examples</h2>
      <p>Optimised for Midjourney, ChatGPT image tools or Claude — exterior renders. Tap copy to use.</p>
      <div style="margin-top:18px">{prompts}</div></section>
    <section class="block neu" id="sec-gallery"><p class="eyebrow">12 — Image Gallery</p><h2>Image Gallery</h2>
      <p>Exterior examples, façade &amp; material references that define the visual identity.</p>
      <div class="gallery" style="margin-top:20px">{gal}</div></section>
    <section class="block neu" id="sec-related"><p class="eyebrow">Related</p><h2>Related Styles</h2>
      <div class="related-row">{related}</div>
      <div class="mt-m"><a class="btn" href="{base}compare.html?a={s["slug"]}">Compare {e(s["name"])} with another style {ICON["arrow"]}</a></div></section>
  </div></div></main>'''
    return page(f'{s["name"]} — Architecture Atlas', body, "styles.html", depth, s["overview"]["definition"])

def build_schools():
    cards = "".join(f'''<a class="card lib-card" href="styles/{s['slug']}.html">
      <div class="flex between items-center"><h3>{e(s['name'])}</h3><span class="tag">{e(s['eraLabel'])}</span></div>
      <p class="muted" style="margin:10px 0">{e(s['philosophy']['thinking'])}</p>
      {chips(s['philosophy']['principles'][:4])}</a>''' for s in STYLES)
    body = f'''<main class="wrap section"><div class="section-head"><p class="eyebrow">Movements & Schools</p><h2>Design Schools</h2>
      <p>The thinking behind each style — its founding idea and the values it represents.</p></div>
      <div class="grid cols-2">{cards}</div></main>'''
    return page("Design Schools — Architecture Atlas", body, "schools.html", 0)

def build_materials():
    m = {}
    for s in STYLES:
        for mat in s["materials"]:
            key = mat["name"].split(" (")[0]
            m.setdefault(key, {"name":mat["name"],"hex":mat["hex"],"why":mat["why"],"styles":[]})["styles"].append(s)
    items = sorted(m.values(), key=lambda x:x["name"].lower())
    cards = ""
    for it in items:
        sl = "".join(f'<a class="chip" href="styles/{s["slug"]}.html">{e(s["name"])}</a>' for s in it["styles"])
        cards += f'''<div class="card lib-card">
          <div class="mh flex items-center gap-s" style="margin-bottom:12px"><span class="sw" style="width:34px;height:34px;border-radius:10px;box-shadow:var(--shadow-out-sm);background:{it["hex"]}"></span><h3>{e(it["name"])}</h3></div>
          <p class="muted" style="font-size:.9rem">{e(it["why"])}</p><div class="filters" style="margin-top:14px">{sl}</div></div>'''
    body = f'''<main class="wrap section"><div class="section-head"><p class="eyebrow">{len(items)} materials</p><h2>Materials Library</h2>
      <p>The palette of exterior architecture — and which styles each material defines, with the reasoning behind it.</p></div>
      <div class="grid cols-2">{cards}</div></main>'''
    return page("Materials Library — Architecture Atlas", body, "materials.html", 0)

def build_colors():
    cards = "".join(f'''<div class="card lib-card">
      <div class="flex between items-center"><h3>{e(s["name"])}</h3><a class="chip" href="styles/{s["slug"]}.html">Open</a></div>
      <p class="muted" style="font-size:.85rem;margin:8px 0 14px">{e(s["colors"]["mood"])}</p>
      {palette(s["colors"]["primary"]+s["colors"]["accent"]+s["colors"]["material"])}</div>''' for s in STYLES)
    body = f'''<main class="wrap section"><div class="section-head"><p class="eyebrow">Palettes by style</p><h2>Color Library</h2>
      <p>Curated palettes — primary, accent and material colours — for each architectural language.</p></div>
      <div class="grid cols-2">{cards}</div></main>'''
    return page("Color Library — Architecture Atlas", body, "colors.html", 0)

def build_prompts():
    blocks = ""
    for s in STYLES:
        pr = s["prompts"]
        labels = [("Exterior",pr["exterior"]),("Façade",pr["facade"]),("Night",pr["night"]),
                  ("Aerial",pr["aerial"]),("Street",pr["street"]),("Masterplan",pr["masterplan"])]
        cards = "".join(f'''<div class="prompt-card"><span class="pl">{lab}</span><p>{e(txt)}</p>
          <button class="icon-btn copy" data-copy="{e(txt)}">{ICON["copy"]}</button></div>''' for lab,txt in labels)
        blocks += f'''<div style="margin-bottom:40px"><div class="flex between items-center" style="margin-bottom:14px">
          <h3 style="font-size:1.6rem">{e(s["name"])}</h3><a class="chip" href="styles/{s["slug"]}.html">View style</a></div>{cards}</div>'''
    body = f'''<main class="wrap section"><div class="section-head"><p class="eyebrow">{len(STYLES)*6} prompts</p><h2>AI Design Prompts</h2>
      <p>Production-ready exterior prompts for AI image generation, organised by style and view. Tap to copy.</p></div>{blocks}</main>'''
    return page("AI Design Prompts — Architecture Atlas", body, "prompts.html", 0)

def build_architects():
    m = {}
    for s in STYLES:
        for a in s["overview"]["architects"]:
            m.setdefault(a, []).append(s)
    items = sorted(m.items(), key=lambda x:x[0].lower())
    cards = "".join(f'''<div class="card lib-card"><h3 style="font-size:1.3rem">{e(name)}</h3>
      <div class="filters" style="margin-top:12px">{"".join(f'<a class="chip" href="styles/{s["slug"]}.html">{e(s["name"])}</a>' for s in styles)}</div></div>'''
      for name, styles in items)
    body = f'''<main class="wrap section"><div class="section-head"><p class="eyebrow">{len(items)} architects</p><h2>Famous Architects</h2>
      <p>The figures associated with each movement — and the styles they shaped.</p></div>
      <div class="grid cols-3">{cards}</div></main>'''
    return page("Famous Architects — Architecture Atlas", body, "architects.html", 0)

def build_buildings():
    allp = [dict(p, style=s) for s in STYLES for p in s["overview"]["projects"]]
    cards = "".join(f'''<a class="card style-card" href="styles/{p["style"]["slug"]}.html">
      <div class="thumb">{img(p["file"], p["name"], 600)}<span class="era-tag">{e(p["style"]["name"])}</span></div>
      <div class="body"><h3 style="font-size:1.3rem">{e(p["name"])}</h3><p>{e(p["architect"])} · {e(p["year"])}<br>{e(p["location"])}</p></div></a>'''
      for p in allp)
    body = f'''<main class="wrap section"><div class="section-head"><p class="eyebrow">{len(allp)} buildings</p><h2>Famous Buildings</h2>
      <p>Landmark exteriors that define each style — with architect, date and location.</p></div>
      <div class="grid cols-3">{cards}</div></main>'''
    return page("Famous Buildings — Architecture Atlas", body, "buildings.html", 0)

def build_gallery():
    imgs = [dict(g, style=s) for s in STYLES for g in s["gallery"]]
    figs = "".join(f'<figure><a href="styles/{g["style"]["slug"]}.html">{img(g["file"], g["caption"], 700)}</a>'
                   f'<figcaption>{e(g["style"]["name"])} — {e(g["caption"])}</figcaption></figure>' for g in imgs)
    body = f'''<main class="wrap section"><div class="section-head"><p class="eyebrow">Inspiration</p><h2>Inspiration Gallery</h2>
      <p>A cross-style visual feed of exteriors — landmark works, façade details and material references.</p></div>
      <div class="gallery">{figs}</div></main>'''
    return page("Inspiration Gallery — Architecture Atlas", body, "gallery.html", 0)

def build_timeline():
    ordered = sorted(STYLES, key=lambda s:s["era"])
    items = "".join(f'''<a class="tl-item" href="styles/{s["slug"]}.html" style="text-decoration:none;color:inherit">
      <div class="tl-year">{s["era"]}</div><div class="tl-card"><span class="tl-dot"></span>
      <div><h3>{e(s["name"])}</h3><p>{e(s["eraLabel"])} · {e(s["region"])} — {e(s["tagline"])}</p></div></div></a>''' for s in ordered)
    body = f'''<main class="wrap section"><div class="section-head"><p class="eyebrow">Chronology</p><h2>Interactive Timeline</h2>
      <p>From the classical revival to computational design — the styles in sequence. Click any entry to open it.</p></div>
      <div class="tl-axis">{items}</div></main>'''
    return page("Timeline — Architecture Atlas", body, "timeline.html", 0)

def build_compare():
    opts = "".join(f'<option value="{s["slug"]}">{e(s["name"])}</option>' for s in STYLES)
    a, b = STYLES[0], STYLES[1]
    body = f'''<main class="wrap section"><div class="section-head"><p class="eyebrow">Side by side</p><h2>Compare Styles</h2>
      <p>Place two architectural languages next to each other to choose a direction. (Interactive — requires JavaScript.)</p></div>
      <div class="compare-pickers">
        <select class="select-neu" id="cmp-a">{opts}</select>
        <select class="select-neu" id="cmp-b">{opts}</select></div>
      <div class="card" style="padding:8px 20px;overflow-x:auto" id="cmp-table"></div></main>'''
    return page("Compare Styles — Architecture Atlas", body, "compare.html", 0)

def build_favorites():
    body = f'''<main class="wrap section"><div class="section-head"><p class="eyebrow">Your collection</p><h2>Favorites & Bookmarks</h2>
      <p>Styles you've saved — stored privately in your browser.</p></div>
      <div id="fav-results" class="grid cols-3"></div>
      <div id="fav-empty" class="empty"><div class="big">No favorites yet</div><p>Tap the heart on any style to save it here.</p>
        <div class="mt-m"><a class="btn btn-accent" href="styles.html">Browse styles {ICON['arrow']}</a></div></div></main>'''
    return page("Favorites — Architecture Atlas", body, "favorites.html", 0)

# ---------------------------------------------------------------- write
def write(path, content):
    full = os.path.join(DIST, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    open(full, "w", encoding="utf-8").write(content)

def main():
    if os.path.exists(DIST):
        shutil.rmtree(DIST)
    os.makedirs(DIST)
    # copy static assets
    shutil.copytree(os.path.join(ROOT, "assets"), os.path.join(DIST, "assets"))
    # top-level pages
    write("index.html", build_home())
    write("styles.html", build_styles())
    write("schools.html", build_schools())
    write("materials.html", build_materials())
    write("colors.html", build_colors())
    write("prompts.html", build_prompts())
    write("architects.html", build_architects())
    write("buildings.html", build_buildings())
    write("gallery.html", build_gallery())
    write("timeline.html", build_timeline())
    write("compare.html", build_compare())
    write("favorites.html", build_favorites())
    # style detail pages
    for s in STYLES:
        write(f"styles/{s['slug']}.html", build_style(s))
    pages = 12 + len(STYLES)
    print(f"Built {pages} static HTML pages into dist/ ({len(STYLES)} style pages).")

if __name__ == "__main__":
    main()
