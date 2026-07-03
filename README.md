# Architecture Atlas

A practical, **exterior-focused** architectural design reference — a working encyclopedia of **20 contemporary architectural styles** for design teams. Each style is documented across **12 sections**: Overview, Design Philosophy, Visual Characteristics, Materials, Color Palette, Façade Guide, Lighting, Building Types, Design Checklist, Common Mistakes, AI Prompts and an Image Gallery.

It is a **true static website**: every page is pre-rendered to plain HTML by a generator, so the content works even with JavaScript disabled. No framework, no Node, no backend.

## Editorial rules baked into the content
- **Exterior architecture only** — façades, massing, form, materials. No interiors.
- **No religious buildings or elements** — all examples are secular exteriors.
- Reference imagery comes from **Wikimedia Commons** (public domain / CC). Any missing image renders as an elegant generated *architectural plate*, so the layout never breaks.

## The 20 styles
Modernism · Minimalist · Contemporary · Industrial · Brutalist · Scandinavian · Mid-Century Modern · Japanese Minimalist · Mediterranean Modern · Tropical Modern · Farmhouse Modern · Modern Classic · Neoclassical · Art Deco · Deconstructivism · Parametric / Futuristic · Sustainable / Green · Rustic Contemporary · Coastal Modern · Urban Modern

---

## Run locally

```bash
cd architecture-atlas
python3 serve.py
```

`serve.py` rebuilds the site and serves it at **http://127.0.0.1:8000**.

Or build once and serve the output yourself:

```bash
python3 build.py            # generates ./dist (32 static HTML pages)
cd dist && python3 -m http.server 8000
```

## Deploy (public URL)

`dist/` is a plain static folder — deploy it anywhere, no configuration:

- **Netlify** — drag the `dist` folder onto netlify.com/drop
- **Vercel** — `vercel deploy ./dist`
- **GitHub Pages / Cloudflare Pages / S3 / any host** — upload `dist`

---

## How it works

```
architecture-atlas/
├── assets/
│   ├── css/styles.css       # neumorphism design system (light + dark)
│   └── js/
│       ├── data.js          # CONTENT SOURCE — all 20 styles (edit here)
│       └── enhance.js       # optional progressive enhancement only
├── build.py                 # static site generator  →  dist/
├── serve.py                 # build + serve locally
└── dist/                    # GENERATED static site (deploy this)
```

### Editing content (the "CMS")
All content lives in **`assets/js/data.js`** as one object per style (a `const STYLES = [ … ]` array written in pure JSON). Edit it, then run `python3 build.py`. No other step.

- `build.py` parses `data.js` and pre-renders every page — index, styles index, the 20 style pages, schools, materials, colors, prompts, architects, buildings, gallery, timeline, compare, favorites.
- `enhance.js` only **adds** behaviour on top of finished HTML: dark/light theme, mobile menu, favorites & checklists (localStorage), client-side search/filter on the styles page, prompt copy, the compare tool, scroll-spy, and the broken-image → plate fallback.

Because content is a typed JSON collection, it maps 1:1 to a headless CMS (Decap/Netlify CMS or Sanity) for non-technical editors later.

### Images
Set a Wikimedia Commons file name (or leave `""` for a generated plate) on each `banner`, project `file`, and gallery `file` in `data.js`. To use your own curated photos, drop them in `assets/img/` and point the fields at those paths.
