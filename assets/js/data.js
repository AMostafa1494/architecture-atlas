/* ARCHITECTURE ATLAS — Content Layer ("the CMS") — 30 styles, exterior-focused.
   Exterior architecture only. Modern styles secular; historical styles may show
   religious exteriors where defining. Images: Unsplash/Pexels URLs (free license)
   or Wikimedia file names; blank/broken -> generated architectural plate. */
const STYLES =
[
 {
  "slug": "modern",
  "name": "Modern",
  "era": 1925,
  "eraLabel": "1920s – 1970s",
  "region": "Europe → Global",
  "mood": "Rational · Light · Honest",
  "tagline": "Clean lines, functional forms, no ornament.",
  "banner": "Mies van der Rohe Barcelona Pavilion.JPG",
  "overview": {
   "definition": "Modernism reduces the building to volume, structure, light and proportion — flat roofs, open façades and an honest expression of concrete, steel and glass, free of historical ornament.",
   "history": "Born from industrialisation and post-war reform, Modernism rejected 19th-century revivalism. New materials freed the wall from load, opening the plan and the façade to light and air.",
   "origin": "1920s Germany, France and the Netherlands; codified as the 'International Style' (MoMA, 1932).",
   "timeline": [
    {
     "year": "1923",
     "event": "Le Corbusier, 'Vers une architecture'"
    },
    {
     "year": "1929",
     "event": "Barcelona Pavilion — 'less is more'"
    },
    {
     "year": "1931",
     "event": "Villa Savoye realises the Five Points"
    },
    {
     "year": "1958",
     "event": "Seagram Building defines the corporate tower"
    }
   ],
   "architects": [
    "Le Corbusier",
    "Mies van der Rohe",
    "Walter Gropius",
    "Richard Neutra",
    "Oscar Niemeyer"
   ],
   "projects": [
    {
     "name": "Barcelona Pavilion",
     "architect": "Mies van der Rohe",
     "year": "1929",
     "location": "Barcelona, Spain",
     "file": "Mies van der Rohe Barcelona Pavilion.JPG"
    },
    {
     "name": "Farnsworth House",
     "architect": "Mies van der Rohe",
     "year": "1951",
     "location": "Plano, USA",
     "file": "Farnsworth House Plano-9995.jpg"
    },
    {
     "name": "Seagram Building",
     "architect": "Mies van der Rohe",
     "year": "1958",
     "location": "New York, USA",
     "file": "Seagram Building Nov 2025 06.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Form follows function",
    "Truth to materials",
    "Free plan & free façade",
    "Volume over mass",
    "No ornament"
   ],
   "thinking": "The building is a clear diagram of its purpose. Structure is expressed, space flows, and the wall becomes a thin skin. Beauty lives in proportion and the honest assembly of parts.",
   "values": [
    "Honesty",
    "Universality",
    "Efficiency",
    "Light & air for all"
   ],
   "why": "A moral and social project — a healthier, more democratic world built with the machine age, replacing aristocratic ornament with universal order."
  },
  "visual": {
   "massing": "Clean orthogonal volumes, often lifted on slender pilotis so the ground flows beneath; expressive cantilevers.",
   "form": "Pure prismatic geometry — cube, slab, cylinder — with no applied decoration.",
   "composition": "Asymmetrical balance on a structural grid; solids and voids weighed like a Mondrian.",
   "proportion": "Mathematical systems — the Modulor, golden section, repeating bays.",
   "geometry": "Rectilinear and planar; curves rare and deliberate.",
   "rhythm": "Regular structural bays produce a steady façade beat.",
   "symmetry": "Predominantly asymmetrical — balance by composition, not mirroring.",
   "scale": "Human in housing, abstract and monumental in civic/corporate work.",
   "roofs": "Flat roofs, often as accessible terraces or roof gardens.",
   "windows": "Horizontal ribbon windows and floor-to-ceiling glazing.",
   "entrance": "Recessed, understated, integrated into the volume.",
   "facade": "The curtain wall — a taut thin membrane of glass and infill panels expressing the frame behind."
  },
  "materials": [
   {
    "name": "Reinforced concrete",
    "hex": "#b8b3a8",
    "why": "Enables the free plan, cantilevers and pilotis."
   },
   {
    "name": "Structural steel",
    "hex": "#6f7479",
    "why": "Slender frames carry load so walls dissolve into glass."
   },
   {
    "name": "Plate glass",
    "hex": "#a8bcc4",
    "why": "Dissolves the inside/outside boundary; admits light."
   },
   {
    "name": "White render",
    "hex": "#eceae3",
    "why": "A pure abstract skin emphasising volume and shadow."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Architectural White",
     "hex": "#f2efe8"
    },
    {
     "name": "Concrete Grey",
     "hex": "#b8b3a8"
    }
   ],
   "accent": [
    {
     "name": "Primary Red",
     "hex": "#b5352b"
    },
    {
     "name": "Cobalt",
     "hex": "#2f5e8c"
    },
    {
     "name": "Ochre",
     "hex": "#caa14a"
    }
   ],
   "material": [
    {
     "name": "Glass Blue",
     "hex": "#a8bcc4"
    },
    {
     "name": "Steel",
     "hex": "#6f7479"
    }
   ],
   "combos": [
    "White + glass + thin black steel",
    "White render with primary-colour accent planes"
   ],
   "mood": "Crisp, optimistic, luminous — colour as sparing punctuation on a neutral field."
  },
  "facadeGuide": {
   "window": "Continuous horizontal bands or full-height glazing aligned to the grid; keep mullions thin.",
   "emphasis": "Horizontal — read the building as stacked floor planes.",
   "shading": "Brise-soleil concrete fins for sun control — functional, not decorative.",
   "balconies": "Cantilevered slabs with thin steel rails as floating horizontal planes.",
   "frames": "Minimal, flush, painted dark to recede.",
   "openings": "Large, repetitive, grid-aligned; avoid arched or punched single windows.",
   "details": "Reveals and shadow gaps replace mouldings — the detail is the absence of detail.",
   "ornament": "None — interest comes from proportion, material and light."
  },
  "lighting": {
   "natural": "Maximise daylight through ribbon and curtain-wall glazing; deep overhangs control glare.",
   "artificial": "Concealed, even architectural lighting — no decorative fixtures.",
   "night": "The glass box glows from within, revealing the frame as a luminous grid.",
   "recommendations": "Wash flat surfaces evenly; cool-neutral 3500–4000K; graze concrete to reveal texture."
  },
  "buildingTypes": [
   "Villas",
   "Office towers",
   "Cultural institutions",
   "Housing",
   "Universities",
   "Mixed-use"
  ],
  "checklist": [
   "Lift the volume on pilotis or express a clear frame",
   "Use a flat roof — consider a roof terrace",
   "Design a free, open plan",
   "Specify ribbon windows or a full curtain wall",
   "Eliminate all applied ornament",
   "Set a consistent structural grid",
   "Detail thin, flush, dark window frames",
   "Use colour only as sparse accent"
  ],
  "mistakes": [
   "Decorative cornices, mouldings or 'classical' details",
   "Pitched or busy roofs fighting the flat-volume language",
   "Thick, divided muntins breaking the glazing plane",
   "Random window placement instead of a grid",
   "Busy multi-colour façades"
  ],
  "prompts": {
   "exterior": "Modernist villa exterior, white rendered prismatic volume on slender pilotis, horizontal ribbon windows, flat roof, free façade, lawn, soft daylight, architectural photography, 35mm --ar 3:2 --style raw",
   "facade": "Modernist curtain-wall façade, thin black steel mullions, floor-to-ceiling glass, regular structural grid, white spandrel panels, frontal elevation, clean shadows",
   "night": "International Style glass tower exterior at dusk, glowing structure, reflective curtain wall, deep blue sky, long exposure, architectural night photography",
   "aerial": "Aerial of a Modernist campus, orthogonal white slabs on a green podium, flat roofs, geometric clarity, drone photography, morning light",
   "street": "Street-level Modernist apartment slab, pilotis at ground, ribbon windows above, pedestrian scale, documentary architectural photography",
   "masterplan": "Masterplan of a Modernist district, free-standing slabs in parkland, orthogonal grid, axonometric, muted palette"
  },
  "gallery": [
   {
    "file": "Mies van der Rohe Barcelona Pavilion.JPG",
    "caption": "Barcelona Pavilion exterior"
   },
   {
    "file": "Farnsworth House Plano-9995.jpg",
    "caption": "Farnsworth House"
   },
   {
    "file": "Seagram Building Nov 2025 06.jpg",
    "caption": "Seagram Building"
   },
   {
    "file": "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2",
    "caption": "Massing study"
   },
   {
    "file": "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab",
    "caption": "Façade rhythm"
   },
   {
    "file": "",
    "caption": "Pilotis & ground plane"
   }
  ],
  "related": [
   "mid-century-modern",
   "contemporary",
   "minimalism"
  ]
 },
 {
  "slug": "contemporary",
  "name": "Contemporary",
  "era": 2005,
  "eraLabel": "2000s – present",
  "region": "Global",
  "mood": "Current · Mixed · Balanced",
  "tagline": "Current trends, evolving — mixed materials, clean geometry.",
  "banner": "Beijing Daxing International Airport 33.jpg",
  "overview": {
   "definition": "Contemporary architecture is the living language of now — a confident mix of materials (glass, metal, concrete, stone), clean geometry and balanced, often asymmetric exteriors that resist a single dogma.",
   "history": "Rather than one movement, Contemporary absorbs Modernist clarity, parametric form and sustainable thinking into a pluralist present.",
   "origin": "Global; defined by leading practices rather than a region.",
   "timeline": [
    {
     "year": "2000",
     "event": "Digital tools mainstream complex form"
    },
    {
     "year": "2008",
     "event": "Iconic cultural buildings reshape skylines"
    },
    {
     "year": "2015",
     "event": "Sustainability becomes a baseline"
    },
    {
     "year": "2020",
     "event": "Hybrid, mixed-material exteriors dominate"
    }
   ],
   "architects": [
    "Herzog & de Meuron",
    "Renzo Piano",
    "BIG",
    "Foster + Partners",
    "Snøhetta"
   ],
   "projects": [
    {
     "name": "Beijing Daxing Airport",
     "architect": "ZHA / ADP",
     "year": "2019",
     "location": "Beijing, China",
     "file": "Beijing Daxing International Airport 33.jpg"
    },
    {
     "name": "Elbphilharmonie",
     "architect": "Herzog & de Meuron",
     "year": "2017",
     "location": "Hamburg, Germany",
     "file": "Elbphilharmonie Hamburg.jpg"
    },
    {
     "name": "The Shard",
     "architect": "Renzo Piano",
     "year": "2012",
     "location": "London, UK",
     "file": "The Shard from the Sky Garden 2015.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Material mix",
    "Clean geometry",
    "Contextual response",
    "Balanced contrast",
    "Performance"
   ],
   "thinking": "Contemporary work prizes resolution over style — combining materials and geometries that suit site, climate and brief, balanced with restraint and a clear formal idea.",
   "values": [
    "Adaptability",
    "Innovation",
    "Context",
    "Quality"
   ],
   "why": "It emerged as architecture matured past single ideologies, free to borrow and synthesise toward the best resolution for each project."
  },
  "visual": {
   "massing": "Composed volumes mixing solid and glazed blocks; balanced asymmetry.",
   "form": "Clean geometry with occasional sculptural or folded gestures.",
   "composition": "Layered planes and material changes that articulate programme.",
   "proportion": "Considered and contextual; human-scaled at the base.",
   "geometry": "Predominantly orthogonal with selective curves or angles.",
   "rhythm": "Varied bays and material bands create measured interest.",
   "symmetry": "Usually asymmetrical and dynamic.",
   "scale": "From house to tower; resolved at every scale.",
   "roofs": "Flat, terraced or gently sculptural; often green or accessible.",
   "windows": "Large glazing combined with solid framed openings; balanced ratio.",
   "entrance": "Clear, generous, often double-height and transparent.",
   "facade": "Mixed-material composition — glass, metal panel, concrete, stone — in balanced contrast."
  },
  "materials": [
   {
    "name": "Glass",
    "hex": "#a6c0c8",
    "why": "Transparency, lightness and daylight."
   },
   {
    "name": "Metal panel",
    "hex": "#9aa0a4",
    "why": "Crisp, precise, contemporary cladding."
   },
   {
    "name": "Concrete",
    "hex": "#b3aea4",
    "why": "Structure and sculptural solidity."
   },
   {
    "name": "Stone",
    "hex": "#c4b9a6",
    "why": "Warmth, weight and contextual grounding."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Neutral Grey",
     "hex": "#b9b4ab"
    },
    {
     "name": "Warm White",
     "hex": "#eee9e0"
    }
   ],
   "accent": [
    {
     "name": "Charcoal",
     "hex": "#34322e"
    },
    {
     "name": "Bronze",
     "hex": "#9c7b40"
    }
   ],
   "material": [
    {
     "name": "Glass",
     "hex": "#a6c0c8"
    },
    {
     "name": "Metal",
     "hex": "#9aa0a4"
    }
   ],
   "combos": [
    "Neutrals + glass + one warm accent",
    "Grey/white with bronze or timber"
   ],
   "mood": "Balanced, refined, neutral with a controlled accent."
  },
  "facadeGuide": {
   "window": "Balance large glazed zones with solid framed openings; align to a clear order.",
   "emphasis": "Balanced — combine horizontal and vertical to articulate volumes.",
   "shading": "Integrated fins, deep reveals and projecting frames for performance.",
   "balconies": "Recessed loggias or framed projections, composed with the façade.",
   "frames": "Crisp, slim, often as expressed framing elements.",
   "openings": "Composed groups varying with programme; avoid randomness.",
   "details": "Clean material transitions, reveals and shadow lines.",
   "ornament": "None — articulation comes from material change and geometry."
  },
  "lighting": {
   "natural": "Generous glazing with engineered shading; daylight balanced against glare.",
   "artificial": "Layered architectural lighting grazing material changes.",
   "night": "Selective glow from glazed zones; solids read in shadow.",
   "recommendations": "Highlight material seams; neutral 3000–3500K; uplight key volumes."
  },
  "buildingTypes": [
   "Offices",
   "Cultural buildings",
   "Mixed-use",
   "Residential",
   "Hotels",
   "Airports"
  ],
  "checklist": [
   "Choose a clear formal idea, then mix materials to support it",
   "Balance glazed and solid zones",
   "Articulate volumes with material change",
   "Integrate shading for performance",
   "Compose openings to programme",
   "Keep a neutral palette with one accent",
   "Resolve clean material transitions",
   "Ground the base at human scale"
  ],
  "mistakes": [
   "Material mix with no governing idea (visual chaos)",
   "Trend-chasing detail that dates quickly",
   "Ignoring context and climate",
   "Over-glazing without shading",
   "Cheap finishes undermining the composition"
  ],
  "prompts": {
   "exterior": "Contemporary house exterior, mixed materials of glass, metal panel and stone, clean balanced geometry, large glazing, flat roof, dusk, architectural photography --ar 3:2 --style raw",
   "facade": "Contemporary façade, balanced solid and glazed zones, expressed slim frames, material seams, neutral palette with bronze accent, frontal elevation",
   "night": "Contemporary building exterior at night, selective glowing glazed zones, solids in shadow, refined, architectural night photography",
   "aerial": "Aerial of a contemporary mixed-use block, composed volumes, green roof terraces, mixed cladding, drone photography, daylight",
   "street": "Street view of a contemporary office exterior, transparent double-height entrance, mixed materials, pedestrian plaza, documentary photography",
   "masterplan": "Contemporary masterplan, varied composed blocks, public realm, green spaces, balanced grid, axonometric, neutral palette"
  },
  "gallery": [
   {
    "file": "Beijing Daxing International Airport 33.jpg",
    "caption": "Daxing Airport exterior"
   },
   {
    "file": "Elbphilharmonie Hamburg.jpg",
    "caption": "Elbphilharmonie"
   },
   {
    "file": "The Shard from the Sky Garden 2015.jpg",
    "caption": "The Shard"
   },
   {
    "file": "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    "caption": "Mixed-material study"
   },
   {
    "file": "https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0",
    "caption": "Balanced massing"
   },
   {
    "file": "",
    "caption": "Façade seams"
   }
  ],
  "related": [
   "modern",
   "minimalism",
   "scandinavian"
  ]
 },
 {
  "slug": "minimalism",
  "name": "Minimalism",
  "era": 1990,
  "eraLabel": "1980s – present",
  "region": "Global",
  "mood": "Pure · Quiet · Essential",
  "tagline": "Simplicity — 'less is more'.",
  "banner": "2005-08-06-Therme-Vals-Peter-Zumthor 05.jpg",
  "overview": {
   "definition": "Minimalist architecture pares the exterior to pure volumes and clean monolithic surfaces — concrete, glass and stone — where proportion and light do the work ornament once did.",
   "history": "Rooted in Modernism, De Stijl and Japanese restraint, Minimalism matured through the 1980s–90s into a global language of reduction and craft.",
   "origin": "Europe and Japan; a worldwide luxury idiom today.",
   "timeline": [
    {
     "year": "1986",
     "event": "Minimalist white-volume houses proliferate"
    },
    {
     "year": "1996",
     "event": "Therme Vals — monolithic stone exterior"
    },
    {
     "year": "2005",
     "event": "Minimalism becomes a luxury vernacular"
    },
    {
     "year": "2015",
     "event": "Global standard for galleries and villas"
    }
   ],
   "architects": [
    "Tadao Ando",
    "John Pawson",
    "Peter Zumthor",
    "Álvaro Siza",
    "SANAA"
   ],
   "projects": [
    {
     "name": "Therme Vals",
     "architect": "Peter Zumthor",
     "year": "1996",
     "location": "Vals, Switzerland",
     "file": "2005-08-06-Therme-Vals-Peter-Zumthor 05.jpg"
    },
    {
     "name": "Casa Gilardi",
     "architect": "Luis Barragán",
     "year": "1976",
     "location": "Mexico City",
     "file": "Casa Gilardi de Luis Barragán, 2024.jpg"
    },
    {
     "name": "Rolex Learning Center",
     "architect": "SANAA",
     "year": "2010",
     "location": "Lausanne, Switzerland",
     "file": "EPFL Rolex Learning Center @ EPFL @ Lausanne (36112479383).jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Reduction to essence",
    "Monolithic surface",
    "Perfection of the few",
    "Light & shadow",
    "The craft of the junction"
   ],
   "thinking": "Remove everything inessential so the remaining surface, proportion and aperture can be felt fully. The empty plane is as important as the built mass; the detail is invisible perfection.",
   "values": [
    "Serenity",
    "Purity",
    "Discipline",
    "Restraint"
   ],
   "why": "A reaction against visual noise and excess — a search for calm and focus in an over-stimulated world."
  },
  "visual": {
   "massing": "Calm single volumes or pure geometric prisms; one clear gesture.",
   "form": "Reductive geometry — the rectangle, the line, the plane.",
   "composition": "Asymmetric calm; large blank surfaces balanced by a single element.",
   "proportion": "Exquisitely tuned; proportion replaces ornament.",
   "geometry": "Orthogonal and precise; occasional pure curve.",
   "rhythm": "Sparse — long pauses of blank surface.",
   "symmetry": "Usually asymmetrical but perfectly balanced.",
   "scale": "Intimate to serene-monumental; always human-aware.",
   "roofs": "Flat or hidden; the silhouette stays pure.",
   "windows": "Few, large, precisely placed apertures framing light and view.",
   "entrance": "Understated, sometimes concealed — discovery over announcement.",
   "facade": "Monolithic single-material planes with near-invisible junctions and shadow-gap reveals."
  },
  "materials": [
   {
    "name": "Fair-faced concrete",
    "hex": "#c3beb4",
    "why": "A single continuous silky surface with precise tie-holes."
   },
   {
    "name": "Natural stone",
    "hex": "#cabfaf",
    "why": "Solid, timeless, in large unbroken planes."
   },
   {
    "name": "Frameless glass",
    "hex": "#b6c6cb",
    "why": "Dissolves boundaries with minimal interruption."
   },
   {
    "name": "Lime render",
    "hex": "#e8e3d8",
    "why": "Soft matte monolithic surface for light to play across."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Warm White",
     "hex": "#ece8df"
    },
    {
     "name": "Concrete Grey",
     "hex": "#c3beb4"
    }
   ],
   "accent": [
    {
     "name": "Charcoal",
     "hex": "#3a3934"
    },
    {
     "name": "Muted Oak",
     "hex": "#c2a072"
    }
   ],
   "material": [
    {
     "name": "Stone",
     "hex": "#cabfaf"
    },
    {
     "name": "Glass",
     "hex": "#b6c6cb"
    }
   ],
   "combos": [
    "White + concrete + timber",
    "Monochrome greys with one warm wood accent"
   ],
   "mood": "Calm, neutral, meditative — colour from material and light, not pigment."
  },
  "facadeGuide": {
   "window": "Few, generous, precisely framed apertures; each a deliberate gesture.",
   "emphasis": "Neutral — the plane itself is the subject.",
   "shading": "Deep reveals, screens and overhangs integrated invisibly into the volume.",
   "balconies": "Recessed or absent; carved cleanly from the mass.",
   "frames": "Minimal to frameless; shadow-gap reveals instead of trims.",
   "openings": "Sparse and large; resist adding more.",
   "details": "Flush transitions, hidden fixings, shadow gaps, perfect alignment.",
   "ornament": "None — light, shadow, proportion and texture only."
  },
  "lighting": {
   "natural": "Sculpt the exterior with controlled daylight; let a single aperture or slot read against blank surface.",
   "artificial": "Invisible sources; light the surface, not the fitting; warm and gentle.",
   "night": "Soft glowing planes; one luminous element in calm darkness.",
   "recommendations": "Hidden linear LED in shadow gaps; 2700–3000K; prize the quality of shadow."
  },
  "buildingTypes": [
   "Villas",
   "Galleries",
   "Boutiques",
   "Spas",
   "Luxury residential",
   "Pavilions"
  ],
  "checklist": [
   "Reduce to a single clear volume",
   "Limit to one or two perfectly finished materials",
   "Tune proportions with extreme care",
   "Place few, generous, deliberate openings",
   "Detail shadow-gap reveals and hidden fixings",
   "Treat blank surface as a positive element",
   "Keep colour neutral",
   "Sculpt the form with controlled light"
  ],
  "mistakes": [
   "Adding 'one more' element — clutter kills minimalism",
   "Visible trims, frames and surface-mounted fittings",
   "Too many competing materials",
   "Sloppy junctions — minimalism is unforgiving",
   "Any applied decoration"
  ],
  "prompts": {
   "exterior": "Minimalist concrete villa exterior, single pure volume, smooth fair-faced concrete, one large frameless window, reflecting pool, soft diffuse light, serene, architectural photography --ar 3:2 --style raw",
   "facade": "Minimalist façade, monolithic smooth concrete plane, shadow-gap reveals, single precise aperture, soft raking light, extreme restraint, frontal elevation",
   "night": "Minimalist house exterior at night, single glowing window in a dark concrete plane, calm, subtle warm light, contemplative architectural night photography",
   "aerial": "Aerial of a minimalist retreat, pure geometric volumes in landscape, flat roofs, reflecting pool, restrained palette, drone photography",
   "street": "Street view of a minimalist boutique exterior, blank stone façade, single recessed entrance, quiet luxury, documentary photography, diffuse light",
   "masterplan": "Minimalist masterplan, sparse pavilions in landscape, generous voids, calm geometry, abundant negative space, axonometric"
  },
  "gallery": [
   {
    "file": "2005-08-06-Therme-Vals-Peter-Zumthor 05.jpg",
    "caption": "Therme Vals — stone exterior"
   },
   {
    "file": "Casa Gilardi de Luis Barragán, 2024.jpg",
    "caption": "Casa Gilardi façade"
   },
   {
    "file": "EPFL Rolex Learning Center @ EPFL @ Lausanne (36112479383).jpg",
    "caption": "Rolex Learning Center"
   },
   {
    "file": "https://images.unsplash.com/photo-1622396481322-3b83d186701b",
    "caption": "Monolithic plane study"
   },
   {
    "file": "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    "caption": "Single aperture"
   },
   {
    "file": "",
    "caption": "Shadow-gap detail"
   }
  ],
  "related": [
   "modern",
   "contemporary",
   "scandinavian"
  ]
 },
 {
  "slug": "scandinavian",
  "name": "Scandinavian",
  "era": 1950,
  "eraLabel": "1950s – present",
  "region": "Nordic Europe",
  "mood": "Simple · Functional · Natural",
  "tagline": "Simplicity, functionality, nature.",
  "banner": "Oslo Opera House.jpg",
  "overview": {
   "definition": "Scandinavian architecture pairs clean, functional forms with natural materials and a deep connection to landscape and light — restrained exteriors of timber, glass and pale render under pitched or simple roofs.",
   "history": "Rooted in Nordic functionalism and craft traditions, it balances Modernist clarity with warmth, daylight and the realities of a northern climate.",
   "origin": "Denmark, Sweden, Norway, Finland.",
   "timeline": [
    {
     "year": "1950",
     "event": "Nordic functionalism matures with Aalto & Jacobsen"
    },
    {
     "year": "1970",
     "event": "Timber-and-glass houses spread"
    },
    {
     "year": "2008",
     "event": "Snøhetta's Oslo Opera House"
    },
    {
     "year": "2015",
     "event": "Global popularity of the Scandinavian house"
    }
   ],
   "architects": [
    "Alvar Aalto",
    "Arne Jacobsen",
    "Snøhetta",
    "Jensen & Skodvin"
   ],
   "projects": [
    {
     "name": "Oslo Opera House",
     "architect": "Snøhetta",
     "year": "2008",
     "location": "Oslo, Norway",
     "file": "Oslo Opera House.jpg"
    },
    {
     "name": "Finlandia Hall",
     "architect": "Alvar Aalto",
     "year": "1971",
     "location": "Helsinki, Finland",
     "file": "Finlandia-talo.jpg"
    },
    {
     "name": "Juvet Landscape Hotel",
     "architect": "Jensen & Skodvin",
     "year": "2008",
     "location": "Norway",
     "file": ""
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Functional simplicity",
    "Natural materials",
    "Daylight",
    "Connection to nature",
    "Understated craft"
   ],
   "thinking": "Form serves everyday life with quiet care; exteriors are calm and warm, designed around scarce northern light and the surrounding landscape.",
   "values": [
    "Comfort",
    "Honesty",
    "Sustainability",
    "Democratic design"
   ],
   "why": "Shaped by climate, long winters and a craft culture valuing modest, useful, beautiful things."
  },
  "visual": {
   "massing": "Compact, human-scaled volumes, sometimes gabled, settled into the land.",
   "form": "Clean forms with pitched or simple flat roofs; gentle, unfussy.",
   "composition": "Calm asymmetry; large openings toward light and view.",
   "proportion": "Modest, comfortable, human.",
   "geometry": "Orthogonal with the archetypal gable silhouette.",
   "rhythm": "Quiet timber cladding rhythm and regular windows.",
   "symmetry": "Mostly asymmetrical, balanced.",
   "scale": "Domestic and intimate.",
   "roofs": "Pitched gables or simple flat roofs; clean eaves.",
   "windows": "Large windows to capture daylight; generous glazing to views.",
   "entrance": "Simple, sheltered, understated.",
   "facade": "Timber cladding (often painted or charred), pale render and large glazing under clean roofs."
  },
  "materials": [
   {
    "name": "Timber cladding",
    "hex": "#c2a877",
    "why": "Warm, renewable, local — the signature Nordic skin."
   },
   {
    "name": "Glass",
    "hex": "#aec4c8",
    "why": "Captures scarce daylight and frames landscape."
   },
   {
    "name": "Light concrete",
    "hex": "#cfc9bd",
    "why": "Quiet, durable base material."
   },
   {
    "name": "Charred/painted wood",
    "hex": "#3a3631",
    "why": "Black or deep-toned timber for contrast and protection."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Pale Timber",
     "hex": "#d6bd92"
    },
    {
     "name": "Soft White",
     "hex": "#efece4"
    }
   ],
   "accent": [
    {
     "name": "Charcoal Wood",
     "hex": "#3a3631"
    },
    {
     "name": "Forest Green",
     "hex": "#46584b"
    }
   ],
   "material": [
    {
     "name": "Glass",
     "hex": "#aec4c8"
    },
    {
     "name": "Light Concrete",
     "hex": "#cfc9bd"
    }
   ],
   "combos": [
    "Pale timber + white + glass",
    "Charred black timber + warm wood"
   ],
   "mood": "Light, warm, natural — soft neutrals grounded by dark timber."
  },
  "facadeGuide": {
   "window": "Large, generous openings oriented to light and view; clean frames.",
   "emphasis": "Horizontal timber cladding lines; calm and quiet.",
   "shading": "Deep eaves and timber screens; modest solar control.",
   "balconies": "Simple timber decks and terraces blending indoors and out.",
   "frames": "Slim timber or dark metal frames.",
   "openings": "Generous but composed; framing the landscape.",
   "details": "Crisp timber joinery, clean eaves, honest fixings.",
   "ornament": "None — the grain and rhythm of timber is the decoration."
  },
  "lighting": {
   "natural": "Designed around low northern sun — big south glazing, light shelves, bright surfaces.",
   "artificial": "Warm, layered, low-glare lighting echoing cosy interiors onto terraces.",
   "night": "Warm timber-framed glow; gentle and inviting.",
   "recommendations": "Warm 2700K; light timber to keep warmth; emphasise sheltered entrances."
  },
  "buildingTypes": [
   "Houses & cabins",
   "Cultural buildings",
   "Schools",
   "Hotels & retreats",
   "Offices",
   "Libraries"
  ],
  "checklist": [
   "Use natural timber cladding",
   "Maximise daylight with large windows",
   "Keep clean pitched or simple roofs",
   "Settle the form into the landscape",
   "Detail crisp timber joinery and eaves",
   "Use a soft neutral palette with dark-wood accent",
   "Add sheltered decks/terraces",
   "Keep everything understated and functional"
  ],
  "mistakes": [
   "Fussy ornament or heavy detailing",
   "Small windows that ignore daylight needs",
   "Synthetic finishes replacing natural timber",
   "Ostentatious scale breaking the domestic calm",
   "Cold palettes with no warmth"
  ],
  "prompts": {
   "exterior": "Scandinavian house exterior, warm timber cladding, large windows, clean gabled roof, set in a forest landscape, soft northern daylight, architectural photography --ar 3:2 --style raw",
   "facade": "Scandinavian façade, horizontal timber cladding, generous glazing, slim dark frames, charred-wood accent, clean eaves, frontal elevation, soft light",
   "night": "Scandinavian house exterior at night, warm glow through large windows, timber façade, snow, cosy and inviting, architectural night photography",
   "aerial": "Aerial of a Scandinavian retreat, timber-clad volumes amid forest and water, pitched roofs, natural palette, drone photography",
   "street": "Street view of a Scandinavian home exterior, timber cladding, sheltered entrance, large windows, calm, documentary photography, natural light",
   "masterplan": "Scandinavian masterplan, timber houses settled along terrain and water, generous green space, pitched roofs, axonometric, natural palette"
  },
  "gallery": [
   {
    "file": "Oslo Opera House.jpg",
    "caption": "Oslo Opera House — Snøhetta"
   },
   {
    "file": "Finlandia-talo.jpg",
    "caption": "Finlandia Hall — Aalto"
   },
   {
    "file": "https://images.unsplash.com/photo-1609495059028-7336a644dbca",
    "caption": "Timber cladding study"
   },
   {
    "file": "https://images.unsplash.com/photo-1671879506639-446e1e224d65",
    "caption": "Gable massing"
   },
   {
    "file": "",
    "caption": "Daylight openings"
   },
   {
    "file": "",
    "caption": "Charred-wood detail"
   }
  ],
  "related": [
   "mid-century-modern",
   "modern",
   "contemporary"
  ]
 },
 {
  "slug": "japanese-minimalism",
  "name": "Japanese Minimalism",
  "era": 1995,
  "eraLabel": "1990s – present",
  "region": "Japan",
  "mood": "Harmonious · Quiet · Natural",
  "tagline": "Harmony, simplicity, nature.",
  "banner": "Towada Art Center.jpg",
  "overview": {
   "definition": "Japanese Minimalism distils the exterior to clean lines and natural materials in delicate harmony with nature and light — restrained timber, concrete and glass volumes with deep thresholds.",
   "history": "Drawing on traditional Japanese spatial sensibility filtered through Modernism, contemporary Japanese architects refined an exquisite, light, nature-attuned minimalism.",
   "origin": "Japan.",
   "timeline": [
    {
     "year": "1995",
     "event": "A new generation refines spatial minimalism"
    },
    {
     "year": "2007",
     "event": "21_21 Design Sight opens"
    },
    {
     "year": "2011",
     "event": "House NA (Sou Fujimoto)"
    },
    {
     "year": "2016",
     "event": "Global influence of Japanese minimalism"
    }
   ],
   "architects": [
    "Tadao Ando",
    "Sou Fujimoto",
    "SANAA",
    "Kengo Kuma"
   ],
   "projects": [
    {
     "name": "Towada Art Center",
     "architect": "Ryue Nishizawa (SANAA)",
     "year": "2008",
     "location": "Towada, Japan",
     "file": "Towada Art Center.jpg"
    },
    {
     "name": "21_21 Design Sight",
     "architect": "Tadao Ando",
     "year": "2007",
     "location": "Tokyo, Japan",
     "file": "21 21 DESIGN SIGHT.jpg"
    },
    {
     "name": "Sunny Hills",
     "architect": "Kengo Kuma",
     "year": "2013",
     "location": "Tokyo, Japan",
     "file": "Sunny Hills by Kengo Kuma.JPG"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Harmony with nature",
    "Simplicity",
    "Natural materials",
    "Threshold & layering",
    "Light & shadow"
   ],
   "thinking": "The building negotiates gently between inside and out through layered thresholds, restrained materials and a deep sensitivity to light, season and landscape.",
   "values": [
    "Harmony",
    "Restraint",
    "Craft",
    "Impermanence"
   ],
   "why": "A fusion of traditional Japanese aesthetics with modern reduction, attuned to dense cities and the natural world."
  },
  "visual": {
   "massing": "Quiet, low or compact volumes; sometimes delicate and lattice-like.",
   "form": "Clean geometry softened by timber screens and deep eaves.",
   "composition": "Layered planes and thresholds; calm and balanced.",
   "proportion": "Fine, delicate, human; tatami-derived order.",
   "geometry": "Orthogonal with refined slender members.",
   "rhythm": "Repetition of slender timber elements and screens.",
   "symmetry": "Asymmetrical, balanced.",
   "scale": "Intimate and human.",
   "roofs": "Low flat or gently pitched; deep overhanging eaves.",
   "windows": "Large openings filtered by timber screens and verandas.",
   "entrance": "Through a sequence of thresholds — gate, court, veranda.",
   "facade": "Timber lattices and screens, smooth concrete or render, generous glazing within deep shade."
  },
  "materials": [
   {
    "name": "Timber (slats & screens)",
    "hex": "#c2a274",
    "why": "Lattices and screens filter light and express craft."
   },
   {
    "name": "Smooth concrete",
    "hex": "#c4bfb5",
    "why": "Calm monolithic planes in the Ando manner."
   },
   {
    "name": "Glass",
    "hex": "#b3c6cb",
    "why": "Generous but filtered openings to garden and light."
   },
   {
    "name": "Natural stone",
    "hex": "#bdb3a2",
    "why": "Grounds the building and thresholds."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Natural Timber",
     "hex": "#c2a274"
    },
    {
     "name": "Soft Grey",
     "hex": "#cdc8be"
    }
   ],
   "accent": [
    {
     "name": "Charcoal Sumi",
     "hex": "#33312c"
    },
    {
     "name": "Moss Green",
     "hex": "#5a6a4a"
    }
   ],
   "material": [
    {
     "name": "Concrete",
     "hex": "#c4bfb5"
    },
    {
     "name": "Stone",
     "hex": "#bdb3a2"
    }
   ],
   "combos": [
    "Timber + concrete + greenery",
    "White render + charred timber"
   ],
   "mood": "Quiet, earthy, natural — restrained neutrals tied to garden and light."
  },
  "facadeGuide": {
   "window": "Generous openings filtered by timber screens; frame specific garden views.",
   "emphasis": "Horizontal — deep eaves and veranda thresholds.",
   "shading": "Timber lattices, deep overhangs and verandas.",
   "balconies": "Veranda thresholds mediating inside and out.",
   "frames": "Slender timber or fine dark metal.",
   "openings": "Layered behind screens; calibrated to light and privacy.",
   "details": "Refined joinery, screen rhythms, careful junctions.",
   "ornament": "None applied — pattern emerges from timber screens and shadow."
  },
  "lighting": {
   "natural": "Filtered, dappled light through timber screens; deep eaves soften and shade.",
   "artificial": "Warm, low, lantern-like; glowing screens at night.",
   "night": "Timber screens glow softly, casting woven shadow; intimate.",
   "recommendations": "Warm 2400–2700K; backlight screens for pattern; emphasise thresholds."
  },
  "buildingTypes": [
   "Houses",
   "Galleries & museums",
   "Boutiques",
   "Garden pavilions",
   "Cultural buildings",
   "Cafés"
  ],
  "checklist": [
   "Layer thresholds between inside and out",
   "Use timber screens and lattices",
   "Add deep overhanging eaves",
   "Keep delicate, refined proportions",
   "Filter light rather than flood it",
   "Frame specific garden views",
   "Use natural materials and greenery",
   "Detail exquisite joinery"
  ],
  "mistakes": [
   "Heavy, bulky massing breaking the delicacy",
   "Unfiltered glare with no screening",
   "Synthetic materials replacing natural timber",
   "Ignoring threshold and garden relationship",
   "Applied ornament instead of screen pattern"
  ],
  "prompts": {
   "exterior": "Japanese minimalist house exterior, timber lattice screens, smooth concrete, deep overhanging eaves, garden and greenery, soft filtered light, Kengo Kuma influence, architectural photography --ar 3:2 --style raw",
   "facade": "Japanese minimalist façade, slender timber screen rhythm, generous filtered glazing, veranda threshold, charred-timber accent, frontal elevation, soft light",
   "night": "Japanese minimalist house exterior at night, glowing timber screens casting woven shadows, warm intimate light, garden, architectural night photography",
   "aerial": "Aerial of a Japanese minimalist house, low timber-screened volumes around a garden court, deep eaves, greenery, drone photography",
   "street": "Street view of a Japanese minimalist building exterior, timber lattice façade, threshold gate, greenery, refined, documentary photography, filtered light",
   "masterplan": "Japanese minimalist masterplan, low screened pavilions around gardens and water, layered thresholds, greenery, axonometric, natural palette"
  },
  "gallery": [
   {
    "file": "Towada Art Center.jpg",
    "caption": "Towada Art Center — SANAA"
   },
   {
    "file": "21 21 DESIGN SIGHT.jpg",
    "caption": "21_21 Design Sight — Ando"
   },
   {
    "file": "Sunny Hills by Kengo Kuma.JPG",
    "caption": "Timber screen study"
   },
   {
    "file": "https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb",
    "caption": "Deep-eave threshold"
   },
   {
    "file": "https://images.unsplash.com/photo-1576224817388-be5edde4bb0d",
    "caption": "Veranda threshold"
   },
   {
    "file": "",
    "caption": "Filtered light detail"
   }
  ],
  "related": [
   "scandinavian",
   "tropical-modern",
   "modern"
  ]
 },
 {
  "slug": "mediterranean-contemporary",
  "name": "Mediterranean Contemporary",
  "era": 1985,
  "eraLabel": "1980s – present",
  "region": "Mediterranean · Global",
  "mood": "Warm · Relaxed · Timeless",
  "tagline": "Warm, relaxed, timeless — stucco walls and clean forms.",
  "banner": "Utzon Can Lis.jpg",
  "overview": {
   "definition": "Mediterranean Modern reinterprets the sun-washed coastal villa — white or sand stucco walls, clean cubic forms, arched or framed openings and shaded outdoor rooms tuned to a warm climate.",
   "history": "It distils traditional Mediterranean building (thick walls, courtyards, shade) into a clean, contemporary, indoor–outdoor language for warm regions.",
   "origin": "Spain, Italy, Greece and the wider Mediterranean; global in warm climates.",
   "timeline": [
    {
     "year": "1980",
     "event": "Modern coastal villas refine the vernacular"
    },
    {
     "year": "2000",
     "event": "Indoor–outdoor luxury villa boom"
    },
    {
     "year": "2015",
     "event": "Global warm-climate residential standard"
    }
   ],
   "architects": [
    "Mediterranean residential practices",
    "Regional villa specialists"
   ],
   "projects": [
    {
     "name": "Can Lis",
     "architect": "Jørn Utzon",
     "year": "1971",
     "location": "Mallorca, Spain",
     "file": "Can Lis2.jpg"
    },
    {
     "name": "Hillside whitewashed house",
     "architect": "—",
     "year": "—",
     "location": "Aegean",
     "file": ""
    },
    {
     "name": "Courtyard villa",
     "architect": "—",
     "year": "—",
     "location": "Southern Spain",
     "file": ""
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Response to sun & heat",
    "Indoor–outdoor living",
    "Thick protective walls",
    "Courtyards & shade",
    "Timeless warmth"
   ],
   "thinking": "Clean white masses, deep shade and seamless terraces make warm-climate living gracious; the exterior is shaped by sun, breeze and the sea.",
   "values": [
    "Relaxation",
    "Hospitality",
    "Climate comfort",
    "Timelessness"
   ],
   "why": "A modern answer to the enduring logic of Mediterranean shelter — mass, shade and the outdoor room."
  },
  "visual": {
   "massing": "Clean white cubic volumes stepping with the terrain; courtyards carved within.",
   "form": "Simple stucco masses with arches, terraces and pergolas.",
   "composition": "Solid walls punctuated by framed openings and shaded voids.",
   "proportion": "Human, generous, grounded.",
   "geometry": "Orthogonal with arched and rounded accents.",
   "rhythm": "Repeated openings, arches and pergola beams.",
   "symmetry": "Often asymmetrical, organised around courtyards.",
   "scale": "Domestic and gracious.",
   "roofs": "Flat terraces or low clay-tiled pitches.",
   "windows": "Deep-set openings, arches, shaded loggias; framed views to the sea.",
   "entrance": "Through a shaded threshold or courtyard.",
   "facade": "White/sand stucco, stone trim, clay tile, timber pergolas and deep shade."
  },
  "materials": [
   {
    "name": "Stucco / lime render",
    "hex": "#ece3d2",
    "why": "Reflective white/sand walls that stay cool and timeless."
   },
   {
    "name": "Natural stone",
    "hex": "#c9b79a",
    "why": "Local stone for base, trim and walls."
   },
   {
    "name": "Clay tile",
    "hex": "#b5633a",
    "why": "Terracotta roofs of the region."
   },
   {
    "name": "Timber",
    "hex": "#b78d57",
    "why": "Pergolas, shutters and shading."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Whitewash",
     "hex": "#efe9dd"
    },
    {
     "name": "Sand Stucco",
     "hex": "#dbcab0"
    }
   ],
   "accent": [
    {
     "name": "Terracotta",
     "hex": "#b5633a"
    },
    {
     "name": "Aegean Blue",
     "hex": "#2f6f8c"
    },
    {
     "name": "Olive",
     "hex": "#6c7048"
    }
   ],
   "material": [
    {
     "name": "Stone",
     "hex": "#c9b79a"
    },
    {
     "name": "Timber",
     "hex": "#b78d57"
    }
   ],
   "combos": [
    "White + terracotta + timber",
    "Whitewash + Aegean blue"
   ],
   "mood": "Warm, sun-bleached, relaxed — earthy neutrals with sea-blue accents."
  },
  "facadeGuide": {
   "window": "Deep-set framed openings and arches; shutters and loggias for shade.",
   "emphasis": "Solid-wall dominant with carved shaded voids.",
   "shading": "Pergolas, deep reveals, loggias and brise-soleil.",
   "balconies": "Stone-edged terraces and shaded loggias for outdoor living.",
   "frames": "Timber shutters and stone surrounds.",
   "openings": "Generous toward views, protected from sun.",
   "details": "Arches, stone trim, pergola beams, lime-plaster texture.",
   "ornament": "Minimal — arches, shadow and material warmth provide character."
  },
  "lighting": {
   "natural": "Bright reflective white surfaces; deep shade for relief; framed sea light.",
   "artificial": "Warm, soft, layered; lanterns and uplit textured walls.",
   "night": "Warm glow on white stucco; lit pergolas and terraces.",
   "recommendations": "Warm 2700K; graze textured plaster; light pergolas and outdoor rooms."
  },
  "buildingTypes": [
   "Villas",
   "Resorts & hotels",
   "Beach houses",
   "Restaurants",
   "Boutique residential",
   "Wineries"
  ],
  "checklist": [
   "Use white/sand stucco masses",
   "Carve courtyards and shaded terraces",
   "Add pergolas and deep loggias",
   "Frame openings toward views, shade from sun",
   "Use stone trim and clay tile",
   "Keep clean cubic forms with arched accents",
   "Apply warm earthy palette with blue accents",
   "Blend indoor and outdoor living"
  ],
  "mistakes": [
   "Over-ornate 'faux-Tuscan' pastiche",
   "Unshaded glazing in a hot climate",
   "Cold grey palettes that deny the warmth",
   "Ignoring courtyards and outdoor rooms",
   "Heavy dark masses absorbing heat"
  ],
  "prompts": {
   "exterior": "Mediterranean modern villa exterior, white stucco cubic volumes, arched openings, timber pergola, stone terrace, sea view, warm sunlight, architectural photography --ar 3:2 --style raw",
   "facade": "Mediterranean modern façade, whitewashed stucco, deep-set arched openings, timber shutters, stone trim, pergola shade, frontal elevation, warm light",
   "night": "Mediterranean modern villa exterior at night, warm glow on white stucco, lit pergola terrace, sea beyond, architectural night photography",
   "aerial": "Aerial of a Mediterranean modern villa, white volumes stepping down to the sea, courtyards, pool, terracotta accents, drone photography",
   "street": "Street view of a Mediterranean modern house exterior, whitewashed walls, arched gate, bougainvillea, warm light, documentary photography",
   "masterplan": "Mediterranean modern resort masterplan, white courtyard villas stepping to coast, shaded streets, pools, axonometric, warm palette"
  },
  "gallery": [
   {
    "file": "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    "caption": "Whitewashed massing"
   },
   {
    "file": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    "caption": "Arched openings"
   },
   {
    "file": "",
    "caption": "Pergola terrace"
   },
   {
    "file": "",
    "caption": "Stone trim detail"
   },
   {
    "file": "",
    "caption": "Courtyard shade"
   },
   {
    "file": "",
    "caption": "Sea-view loggia"
   }
  ],
  "related": [
   "tropical-modern",
   "modern",
   "contemporary"
  ]
 },
 {
  "slug": "tropical-modern",
  "name": "Tropical Modern",
  "era": 1990,
  "eraLabel": "1990s – present",
  "region": "Tropics · Global",
  "mood": "Open · Shaded · Organic",
  "tagline": "Indoor–outdoor living, climate responsive.",
  "banner": "Kandalama Hotel, Dambulla-Arch.GeoffreyBawa-SriLanka.jpg",
  "overview": {
   "definition": "Tropical Modern shapes the exterior around heat, humidity and rain — open façades, deep shade, natural ventilation and natural materials that merge architecture with lush landscape.",
   "history": "Pioneered by architects like Geoffrey Bawa, it married Modernism with tropical climate logic and local craft to create breezy, shaded, landscape-fused buildings.",
   "origin": "South & Southeast Asia; warm humid regions worldwide.",
   "timeline": [
    {
     "year": "1990",
     "event": "Bawa's tropical modernism matures"
    },
    {
     "year": "2000",
     "event": "Resort architecture adopts the language"
    },
    {
     "year": "2013",
     "event": "Green tropical towers emerge"
    },
    {
     "year": "2020",
     "event": "Climate-responsive design mainstreams"
    }
   ],
   "architects": [
    "Geoffrey Bawa",
    "WOHA",
    "Kerry Hill",
    "Jean-Michel Gathy"
   ],
   "projects": [
    {
     "name": "Heritance Kandalama",
     "architect": "Geoffrey Bawa",
     "year": "1994",
     "location": "Dambulla, Sri Lanka",
     "file": "Kandalama Hotel, Dambulla-Arch.GeoffreyBawa-SriLanka.jpg"
    },
    {
     "name": "Parkroyal Collection Pickering",
     "architect": "WOHA",
     "year": "2013",
     "location": "Singapore",
     "file": "Hotel Park Royal on Pickering from Hong Lim Park in Singapore.jpg"
    },
    {
     "name": "Tropical courtyard villa",
     "architect": "—",
     "year": "—",
     "location": "Tropics",
     "file": ""
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Climate response",
    "Natural ventilation",
    "Deep shade",
    "Indoor–outdoor merging",
    "Landscape integration"
   ],
   "thinking": "The exterior is a climate device — open to breeze, shaded from sun and rain, dissolving into greenery so building and landscape become one.",
   "values": [
    "Comfort without machines",
    "Sustainability",
    "Sensory richness",
    "Place"
   ],
   "why": "A modern, low-energy answer to hot, humid climates — comfort through shade, air and water."
  },
  "visual": {
   "massing": "Open, layered pavilions and verandas; volumes broken for airflow.",
   "form": "Light, shaded forms with broad overhanging roofs and screened openings.",
   "composition": "Layered thresholds, courtyards and shaded outdoor rooms.",
   "proportion": "Generous, airy, human.",
   "geometry": "Orthogonal pavilions softened by landscape.",
   "rhythm": "Repetitive columns, louvres and roof rafters.",
   "symmetry": "Asymmetrical, organised to breeze and view.",
   "scale": "Domestic to resort; always grounded in landscape.",
   "roofs": "Broad overhanging pitched or flat roofs for sun and rain.",
   "windows": "Large open or louvred openings; screens for ventilation.",
   "entrance": "Through shaded verandas and planted courts.",
   "facade": "Natural stone, timber and concrete with louvres, deep eaves and abundant greenery."
  },
  "materials": [
   {
    "name": "Natural stone",
    "hex": "#b8a88c",
    "why": "Roots the building and weathers in humidity."
   },
   {
    "name": "Timber (louvres & screens)",
    "hex": "#b8915c",
    "why": "Shades, ventilates and warms the exterior."
   },
   {
    "name": "Concrete",
    "hex": "#b3aea2",
    "why": "Durable structure for broad shaded roofs."
   },
   {
    "name": "Greenery / planting",
    "hex": "#5a7048",
    "why": "Living façades and shade integral to the design."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Warm Stone",
     "hex": "#bcab8e"
    },
    {
     "name": "Timber",
     "hex": "#b8915c"
    }
   ],
   "accent": [
    {
     "name": "Foliage Green",
     "hex": "#5a7048"
    },
    {
     "name": "Charcoal",
     "hex": "#34322c"
    }
   ],
   "material": [
    {
     "name": "Concrete",
     "hex": "#b3aea2"
    },
    {
     "name": "Water Blue",
     "hex": "#4f7e86"
    }
   ],
   "combos": [
    "Stone + timber + foliage",
    "Concrete + greenery + water"
   ],
   "mood": "Warm, organic, lush — natural tones woven with green."
  },
  "facadeGuide": {
   "window": "Large open or louvred openings sized for cross-ventilation and view.",
   "emphasis": "Horizontal — deep overhanging roofs and shade lines.",
   "shading": "Broad eaves, timber louvres, screens and pergolas are essential.",
   "balconies": "Deep verandas and terraces as shaded outdoor rooms.",
   "frames": "Timber or slim metal; often operable.",
   "openings": "Generous and screened; open to breeze, shut from sun/rain.",
   "details": "Expressed rafters, louvre rhythms, planters and water.",
   "ornament": "Minimal — louvre pattern, timber and planting are the richness."
  },
  "lighting": {
   "natural": "Filtered, shaded daylight; deep eaves cut glare; courtyards bring light in.",
   "artificial": "Warm, layered, lantern-like; lit landscape and water.",
   "night": "Warm glow through louvres; lit greenery and reflecting water.",
   "recommendations": "Warm 2700K; light landscape and water; backlight screens for pattern."
  },
  "buildingTypes": [
   "Resorts & hotels",
   "Villas",
   "Wellness retreats",
   "Green towers",
   "Restaurants",
   "Campuses"
  ],
  "checklist": [
   "Design for shade, breeze and rain first",
   "Use broad overhanging roofs and deep eaves",
   "Add timber louvres and screens",
   "Open façades for cross-ventilation",
   "Integrate greenery and water",
   "Layer verandas and courtyards",
   "Use natural stone and timber",
   "Merge building with landscape"
  ],
  "mistakes": [
   "Sealed glass boxes needing heavy air-conditioning",
   "Shallow roofs that fail against sun and rain",
   "Ignoring ventilation and orientation",
   "Hard, treeless settings with no greenery",
   "Cold synthetic materials denying the tropics"
  ],
  "prompts": {
   "exterior": "Tropical modern villa exterior, broad overhanging roof, timber louvres, natural stone, open shaded verandas, lush greenery and water, warm light, Geoffrey Bawa influence, architectural photography --ar 3:2 --style raw",
   "facade": "Tropical modern façade, timber louvre screens, deep eaves casting shade, stone base, abundant planting, frontal elevation, warm filtered light",
   "night": "Tropical modern resort exterior at night, warm glow through louvres, lit palms and reflecting pool, architectural night photography",
   "aerial": "Aerial of a tropical modern resort, shaded pavilions among trees and water, broad roofs, green façades, drone photography",
   "street": "Street view of a tropical modern building exterior, louvred façade, planted veranda threshold, lush greenery, documentary photography, dappled light",
   "masterplan": "Tropical modern resort masterplan, shaded pavilions woven through landscape and water, green corridors, axonometric, earthy-green palette"
  },
  "gallery": [
   {
    "file": "Kandalama Hotel, Dambulla-Arch.GeoffreyBawa-SriLanka.jpg",
    "caption": "Heritance Kandalama — Bawa"
   },
   {
    "file": "Hotel Park Royal on Pickering from Hong Lim Park in Singapore.jpg",
    "caption": "Parkroyal Pickering — WOHA"
   },
   {
    "file": "https://images.unsplash.com/photo-1745761320791-5ae142edee8c",
    "caption": "Louvre & shade study"
   },
   {
    "file": "",
    "caption": "Veranda threshold"
   },
   {
    "file": "",
    "caption": "Green façade"
   },
   {
    "file": "",
    "caption": "Broad-roof massing"
   }
  ],
  "related": [
   "modern",
   "contemporary",
   "minimalism"
  ]
 },
 {
  "slug": "desert-modernism",
  "name": "Desert Modernism",
  "era": 1945,
  "eraLabel": "1940s – 1970s",
  "region": "USA Southwest",
  "mood": "Warm · Open · Climate-tuned",
  "tagline": "Mid-century modernism shaped by sun, heat and the desert.",
  "banner": "Kaufman Desert Home cropped.jpg",
  "overview": {
   "definition": "Desert Modernism adapts mid-century modern clarity to arid climates — flat planes, deep overhangs, walls of glass shaded against the sun, and a seamless link to the desert landscape.",
   "history": "Flourishing around Palm Springs in the post-war decades, it tuned the glass-and-steel house to extreme heat with brise-soleil, breeze-blocks and broad roofs.",
   "origin": "Palm Springs and the American Southwest, 1940s–70s.",
   "timeline": [
    {
     "year": "1946",
     "event": "Kaufmann Desert House, Neutra"
    },
    {
     "year": "1947",
     "event": "Albert Frey's desert experiments"
    },
    {
     "year": "1963",
     "event": "Steel Development Houses, Krisel"
    },
    {
     "year": "1965",
     "event": "Palm Springs becomes the desert-modern capital"
    }
   ],
   "architects": [
    "Richard Neutra",
    "Albert Frey",
    "William Krisel",
    "E. Stewart Williams"
   ],
   "projects": [
    {
     "name": "Kaufmann Desert House",
     "architect": "Richard Neutra",
     "year": "1946",
     "location": "Palm Springs, USA",
     "file": "Kaufman Desert Home cropped.jpg"
    },
    {
     "name": "Frey House II",
     "architect": "Albert Frey",
     "year": "1964",
     "location": "Palm Springs, USA",
     "file": ""
    },
    {
     "name": "Tramway Gas Station",
     "architect": "Albert Frey",
     "year": "1965",
     "location": "Palm Springs, USA",
     "file": ""
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Climate-tuned modernism",
    "Indoor–outdoor flow",
    "Deep shade",
    "Flat planes",
    "Honest structure"
   ],
   "thinking": "Mid-century glass-and-steel clarity is recalibrated for the desert: broad shading roofs, sun screens and breeze-blocks let the house open fully to the landscape while staying cool.",
   "values": [
    "Openness",
    "Optimism",
    "Climate comfort",
    "Connection to nature"
   ],
   "why": "Post-war prosperity, abundant sun and new materials produced a relaxed modern house perfectly tuned to desert living."
  },
  "visual": {
   "massing": "Low horizontal volumes hugging the desert floor, with floating roof planes.",
   "form": "Crisp rectilinear forms with deep cantilevered overhangs.",
   "composition": "Open asymmetric composition of glass walls and solid screens.",
   "proportion": "Long, low, strongly horizontal proportions.",
   "geometry": "Orthogonal post-and-beam.",
   "rhythm": "Regular structure and decorative breeze-block screens.",
   "symmetry": "Asymmetrical and relaxed.",
   "scale": "Domestic and human.",
   "roofs": "Flat roofs with very broad shading overhangs.",
   "windows": "Floor-to-ceiling glass walls shaded by deep eaves and screens.",
   "entrance": "Sheltered, recessed beneath the roof plane.",
   "facade": "Glass walls, breeze-block screens, stone and steel under floating roofs."
  },
  "materials": [
   {
    "name": "Steel & aluminium",
    "hex": "#9aa0a4",
    "why": "Slender, strong structure that frees and frames the façade."
   },
   {
    "name": "Glass",
    "hex": "#abc4c9",
    "why": "Admits light and dissolves the wall between inside and out."
   },
   {
    "name": "Desert stone",
    "hex": "#bca583",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Breeze-block (concrete)",
    "hex": "#d8d2c4",
    "why": "Structural and sculptural — shapes bold exterior form."
   },
   {
    "name": "Warm timber",
    "hex": "#bf9a63",
    "why": "Warm, renewable and tactile — softens and clads the exterior."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Sun White",
     "hex": "#efe9dd"
    },
    {
     "name": "Desert Sand",
     "hex": "#d8c3a0"
    }
   ],
   "accent": [
    {
     "name": "Turquoise",
     "hex": "#3aa0a0"
    },
    {
     "name": "Burnt Orange",
     "hex": "#b5633a"
    },
    {
     "name": "Cactus Green",
     "hex": "#6c7a4a"
    }
   ],
   "material": [
    {
     "name": "Steel",
     "hex": "#9aa0a4"
    },
    {
     "name": "Stone",
     "hex": "#bca583"
    }
   ],
   "combos": [
    "Sand + white + turquoise accent",
    "Stone + glass + steel"
   ],
   "mood": "Warm, sun-bleached and optimistic with a bold mid-century accent."
  },
  "facadeGuide": {
   "window": "Full-height glass walls deeply shaded by overhangs and screens.",
   "emphasis": "Strongly horizontal — long rooflines and shade lines.",
   "shading": "Deep cantilevered eaves, brise-soleil and decorative breeze-block screens are essential.",
   "balconies": "Terraces and decks extending the floor into the desert.",
   "frames": "Slim steel or timber.",
   "openings": "Large glazed bays alternating with solid screen walls.",
   "details": "Floating roof planes, breeze-block patterns, expressed beams.",
   "ornament": "None — pattern comes from breeze-block screens and structure."
  },
  "lighting": {
   "natural": "Deep overhangs and screens cut intense sun while glass walls frame the desert.",
   "artificial": "Warm, low, integrated lighting spilling onto terraces.",
   "night": "Glass walls glow warmly; the floating roof reads as a lit plane.",
   "recommendations": "Warm 2700K; uplight the roof plane; light terraces and pools."
  },
  "buildingTypes": [
   "Houses",
   "Boutique hotels",
   "Clubhouses",
   "Visitor centres",
   "Pavilions",
   "Spas"
  ],
  "checklist": [
   "Keep massing low and horizontal",
   "Use broad shading overhangs",
   "Open walls to glass, shaded",
   "Add breeze-block sun screens",
   "Extend floors to desert terraces",
   "Use warm stone and steel",
   "Add one bold mid-century accent colour",
   "Tune everything to the sun path"
  ],
  "mistakes": [
   "Unshaded glazing that overheats",
   "Tall bulky massing breaking the horizontal calm",
   "Ignoring orientation and the desert sun",
   "Heavy ornament",
   "Cold, sealed glass boxes"
  ],
  "prompts": {
   "exterior": "Desert modernism house exterior, low horizontal massing, floating flat roof with deep overhangs, glass walls, breeze-block screen, desert and mountains, warm sun, architectural photography --ar 3:2 --style raw",
   "facade": "Desert modern façade, glass wall shaded by deep eave, decorative breeze-block screen, steel posts, frontal elevation, hard desert light",
   "night": "Desert modern house exterior at night, glowing glass walls, floating lit roof plane, warm terrace light, desert dusk, architectural night photography",
   "aerial": "Aerial of a desert modern house, low roof, pool and terraces in arid landscape, drone photography, warm light",
   "street": "Street view of a desert modern house exterior, breeze-block screen, carport, glass and stone, palms and mountains, documentary photography",
   "masterplan": "Desert modern masterplan, low houses with pools in arid landscape, shaded courts, axonometric, sand-and-turquoise palette"
  },
  "gallery": [
   {
    "file": "Kaufman Desert Home cropped.jpg",
    "caption": "Kaufmann Desert House"
   },
   {
    "file": "https://images.unsplash.com/photo-1561065091-4908548ee638",
    "caption": "Floating roof study"
   },
   {
    "file": "https://images.unsplash.com/photo-1631645033513-15144f920557",
    "caption": "Breeze-block screen"
   },
   {
    "file": "",
    "caption": "Glass wall & shade"
   },
   {
    "file": "",
    "caption": "Desert massing"
   },
   {
    "file": "",
    "caption": "Pool terrace"
   }
  ],
  "related": [
   "mid-century-modern",
   "modern",
   "mediterranean-contemporary"
  ]
 },
 {
  "slug": "organic",
  "name": "Organic Architecture",
  "era": 1935,
  "eraLabel": "1900s – present",
  "region": "USA · Global",
  "mood": "Natural · Flowing · Integrated",
  "tagline": "Building and landscape as one continuous whole.",
  "banner": "Fallingwater - DSC05639.JPG",
  "overview": {
   "definition": "Organic Architecture grows buildings from their site — form, structure and materials in harmony with nature, so the building seems to belong to its landscape rather than sit upon it.",
   "history": "Championed by Frank Lloyd Wright, it rejects imposed styles for forms derived from nature, materials and place, integrating structure and ornament into one idea.",
   "origin": "USA, early 20th century; an enduring global philosophy.",
   "timeline": [
    {
     "year": "1911",
     "event": "Taliesin begins"
    },
    {
     "year": "1935",
     "event": "Fallingwater designed"
    },
    {
     "year": "1937",
     "event": "Taliesin West"
    },
    {
     "year": "1959",
     "event": "Marin County Civic Center"
    }
   ],
   "architects": [
    "Frank Lloyd Wright",
    "Bruce Goff",
    "Imre Makovecz",
    "Bart Prince"
   ],
   "projects": [
    {
     "name": "Fallingwater",
     "architect": "Frank Lloyd Wright",
     "year": "1935",
     "location": "Mill Run, USA",
     "file": "Fallingwater - DSC05639.JPG"
    },
    {
     "name": "Taliesin West",
     "architect": "Frank Lloyd Wright",
     "year": "1937",
     "location": "Scottsdale, USA",
     "file": ""
    },
    {
     "name": "Marin County Civic Center",
     "architect": "Frank Lloyd Wright",
     "year": "1962",
     "location": "San Rafael, USA",
     "file": ""
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Harmony with site",
    "Form from nature",
    "Continuity of inside & out",
    "Truth to materials",
    "Integral ornament"
   ],
   "thinking": "The building is conceived as a living organism rooted in its place: cantilevers echo rock ledges, materials come from the land, and structure, space and ornament are one.",
   "values": [
    "Unity",
    "Belonging",
    "Naturalness",
    "Timelessness"
   ],
   "why": "A reaction against imposed historical styles — a search for an authentically modern architecture grown from nature, site and material."
  },
  "visual": {
   "massing": "Forms that grow from the site — cantilevered terraces, sheltering roofs, anchored masses.",
   "form": "Flowing, asymmetric forms echoing natural geometry.",
   "composition": "Interlocking horizontal planes married to the terrain.",
   "proportion": "Human-scaled, grounded, with sweeping horizontals.",
   "geometry": "Orthogonal and natural geometries; occasional curves.",
   "rhythm": "Layered horizontal terraces and bands.",
   "symmetry": "Asymmetrical, site-driven.",
   "scale": "Intimate and grounded.",
   "roofs": "Broad sheltering low-pitched or flat roofs with deep eaves.",
   "windows": "Ribbon and corner windows dissolving the wall to landscape.",
   "entrance": "Compressed, indirect, leading from outside in.",
   "facade": "Local stone, warm timber, cantilevered concrete and ribbon glazing fused with the land."
  },
  "materials": [
   {
    "name": "Local stone",
    "hex": "#a9967a",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Concrete (cantilever)",
    "hex": "#cbc6ba",
    "why": "Structural and sculptural — shapes bold exterior form."
   },
   {
    "name": "Timber",
    "hex": "#b98a55",
    "why": "Warm, renewable and tactile — softens and clads the exterior."
   },
   {
    "name": "Glass",
    "hex": "#aec1c5",
    "why": "Admits light and dissolves the wall between inside and out."
   },
   {
    "name": "Copper / bronze",
    "hex": "#9c7b40",
    "why": "Rich metal for doors, trim and ornamental enrichment."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Stone Ochre",
     "hex": "#bca583"
    },
    {
     "name": "Warm Beige",
     "hex": "#ddcdb4"
    }
   ],
   "accent": [
    {
     "name": "Cherokee Red",
     "hex": "#9c4a35"
    },
    {
     "name": "Forest Green",
     "hex": "#46584b"
    },
    {
     "name": "Copper",
     "hex": "#9c7b40"
    }
   ],
   "material": [
    {
     "name": "Timber",
     "hex": "#b98a55"
    },
    {
     "name": "Glass",
     "hex": "#aec1c5"
    }
   ],
   "combos": [
    "Stone + timber + foliage",
    "Cherokee red + ochre + copper"
   ],
   "mood": "Earthy, warm and rooted — colours drawn directly from the surrounding land."
  },
  "facadeGuide": {
   "window": "Ribbon and corner windows dissolving walls toward the landscape.",
   "emphasis": "Horizontal — terraces, bands and broad eaves.",
   "shading": "Deep sheltering eaves and cantilevers; the form self-shades.",
   "balconies": "Cantilevered terraces echoing natural ledges.",
   "frames": "Slim timber or metal; often mitered glass corners.",
   "openings": "Bands of glazing tucked under deep overhangs.",
   "details": "Integral ornament from material and structure; patterned masonry.",
   "ornament": "Integral, never applied — derived from material, geometry and nature."
  },
  "lighting": {
   "natural": "Filtered, layered daylight through ribbon windows and deep eaves; light shaped by the land.",
   "artificial": "Warm, concealed, integral lighting echoing natural sources.",
   "night": "Warm glow from ribbon windows; cantilevers lit from beneath.",
   "recommendations": "Warm 2700K; light cantilevers and terraces; graze stone."
  },
  "buildingTypes": [
   "Houses",
   "Civic buildings",
   "Cultural centres",
   "Visitor centres",
   "Campuses",
   "Retreats"
  ],
  "checklist": [
   "Derive the form from the specific site",
   "Use local natural materials",
   "Cantilever and terrace into the land",
   "Dissolve walls with ribbon/corner glazing",
   "Shelter under broad deep eaves",
   "Make ornament integral to material",
   "Keep an earthy, site-drawn palette",
   "Compress then release the entry sequence"
  ],
  "mistakes": [
   "Imposing a generic style on the site",
   "Applied, non-integral ornament",
   "Ignoring terrain and orientation",
   "Synthetic materials denying the natural idea",
   "Fighting the landscape instead of joining it"
  ],
  "prompts": {
   "exterior": "Organic architecture house exterior, cantilevered stone-and-concrete terraces over a waterfall, ribbon windows, deep eaves, forest setting, Frank Lloyd Wright influence, architectural photography --ar 3:2 --style raw",
   "facade": "Organic architecture façade, local stone masses, cantilevered concrete terraces, ribbon glazing, integral pattern, frontal elevation, dappled light",
   "night": "Organic architecture house exterior at night, warm glow from ribbon windows, cantilevers lit from below, forest, architectural night photography",
   "aerial": "Aerial of an organic building integrated into terrain, terraces and stone masses among trees and water, drone photography",
   "street": "Street view of an organic architecture house, low stone walls, deep eaves, ribbon windows, lush setting, documentary photography",
   "masterplan": "Organic architecture masterplan, buildings woven into terrain, terraces following contours, water and trees, axonometric, earthy palette"
  },
  "gallery": [
   {
    "file": "Fallingwater - DSC05639.JPG",
    "caption": "Fallingwater"
   },
   {
    "file": "https://images.unsplash.com/photo-1489058535093-8f530d789c3b",
    "caption": "Cantilever study"
   },
   {
    "file": "",
    "caption": "Stone & ribbon glazing"
   },
   {
    "file": "",
    "caption": "Deep eave"
   },
   {
    "file": "",
    "caption": "Integral masonry"
   },
   {
    "file": "",
    "caption": "Site integration"
   }
  ],
  "related": [
   "biophilic",
   "prairie",
   "mid-century-modern"
  ]
 },
 {
  "slug": "biophilic",
  "name": "Biophilic",
  "era": 2010,
  "eraLabel": "2010s – present",
  "region": "Global",
  "mood": "Green · Living · Restorative",
  "tagline": "Architecture woven with living nature.",
  "banner": "Il Bosco Verticale Milano Px (137734459).jpeg",
  "overview": {
   "definition": "Biophilic design puts living nature at the centre of the exterior — green walls, planted terraces, water and natural materials that reconnect people with the living world and improve wellbeing.",
   "history": "Building on sustainability and Edward Wilson's 'biophilia', it turned greenery, daylight and natural texture into primary design elements for healthier cities.",
   "origin": "Global; advanced by tropical and European practices.",
   "timeline": [
    {
     "year": "2014",
     "event": "Bosco Verticale's vertical forest"
    },
    {
     "year": "2013",
     "event": "Parkroyal Pickering's sky-gardens"
    },
    {
     "year": "2018",
     "event": "WELL/biophilic standards spread"
    },
    {
     "year": "2021",
     "event": "Green high-rise mainstream"
    }
   ],
   "architects": [
    "Stefano Boeri",
    "WOHA",
    "Jean Nouvel",
    "Patrick Blanc"
   ],
   "projects": [
    {
     "name": "Bosco Verticale",
     "architect": "Stefano Boeri",
     "year": "2014",
     "location": "Milan, Italy",
     "file": "Il Bosco Verticale Milano Px (137734459).jpeg"
    },
    {
     "name": "Parkroyal Collection Pickering",
     "architect": "WOHA",
     "year": "2013",
     "location": "Singapore",
     "file": "Hotel Park Royal on Pickering from Hong Lim Park in Singapore.jpg"
    },
    {
     "name": "One Central Park",
     "architect": "Jean Nouvel",
     "year": "2014",
     "location": "Sydney, Australia",
     "file": "One Central Park Sydney.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Living nature first",
    "Greenery & water",
    "Natural materials & light",
    "Wellbeing",
    "Habitat & biodiversity"
   ],
   "thinking": "The façade becomes a living system — planted, watered and textured — dissolving the boundary between building and ecosystem to restore people's connection with nature.",
   "values": [
    "Wellbeing",
    "Restoration",
    "Biodiversity",
    "Harmony"
   ],
   "why": "Rising urban density and evidence that contact with nature improves health drove nature to the centre of architecture."
  },
  "visual": {
   "massing": "Terraced, layered volumes shaped to hold planting and bring in light.",
   "form": "Clean forms softened and overgrown by living greenery.",
   "composition": "Planted balconies, terraces and green walls articulate the façade.",
   "proportion": "Human-scaled with deep planted zones.",
   "geometry": "Orthogonal or gently organic, optimised for planting and light.",
   "rhythm": "Repetitive planters, balconies and trees.",
   "symmetry": "Asymmetrical, driven by sun and growth.",
   "scale": "House to high-rise; greenery at every scale.",
   "roofs": "Green roofs, sky-gardens and planted terraces.",
   "windows": "Generous glazing paired with deep planted balconies.",
   "entrance": "Open, planted, daylit thresholds.",
   "facade": "Living green walls, planted terraces, timber and stone with water."
  },
  "materials": [
   {
    "name": "Greenery / planting",
    "hex": "#5a7048",
    "why": "Living planting that cools, shades and reconnects nature."
   },
   {
    "name": "Timber",
    "hex": "#b8915c",
    "why": "Warm, renewable and tactile — softens and clads the exterior."
   },
   {
    "name": "Natural stone",
    "hex": "#bca588",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Water",
    "hex": "#4f7e86",
    "why": "Reflective water that cools and animates the exterior."
   },
   {
    "name": "Glass",
    "hex": "#a6c0c8",
    "why": "Admits light and dissolves the wall between inside and out."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Foliage Green",
     "hex": "#5a7048"
    },
    {
     "name": "Warm Timber",
     "hex": "#b8915c"
    }
   ],
   "accent": [
    {
     "name": "Moss",
     "hex": "#46584b"
    },
    {
     "name": "Water Blue",
     "hex": "#4f7e86"
    }
   ],
   "material": [
    {
     "name": "Stone",
     "hex": "#bca588"
    },
    {
     "name": "Glass",
     "hex": "#a6c0c8"
    }
   ],
   "combos": [
    "Green + timber + water",
    "Foliage + stone + glass"
   ],
   "mood": "Lush, fresh and restorative — greens and earth tones alive with planting."
  },
  "facadeGuide": {
   "window": "Generous glazing paired with deep planted balconies framing greenery and view.",
   "emphasis": "Layered depth — planters, trees and green walls.",
   "shading": "Planting, deep balconies, pergolas and screens provide living shade.",
   "balconies": "Deep planted terraces as habitat and shaded outdoor rooms.",
   "frames": "Timber or recycled-content frames.",
   "openings": "Large, daylit, screened by greenery.",
   "details": "Green walls, irrigation, planters and trellises.",
   "ornament": "Living greenery is the ornament."
  },
  "lighting": {
   "natural": "Daylight filtered and softened by planting; greenery shades and cools.",
   "artificial": "Low-energy, warm, layered; lit greenery and water at night.",
   "night": "Soft glow with illuminated living façades and gardens.",
   "recommendations": "Efficient warm LED; light planting subtly; avoid skyglow; emphasise green layers."
  },
  "buildingTypes": [
   "Residential towers",
   "Offices",
   "Hospitals & wellness",
   "Schools",
   "Hotels",
   "Mixed-use"
  ],
  "checklist": [
   "Make living nature a primary element",
   "Plant balconies, terraces and green walls",
   "Integrate water and natural materials",
   "Pair glazing with deep planted zones",
   "Plan irrigation and maintenance",
   "Maximise daylight and views to greenery",
   "Design for habitat and biodiversity",
   "Keep a green, natural palette"
  ],
  "mistakes": [
   "Token planting on a sealed glass box (greenwashing)",
   "No irrigation or maintenance strategy",
   "Greenery that blocks all daylight",
   "Ignoring habitat and species choice",
   "Synthetic materials denying the natural intent"
  ],
  "prompts": {
   "exterior": "Biophilic residential tower exterior, lush planted balconies and green walls, mature trees on terraces, timber and stone, water features, daylight, architectural photography --ar 2:3 --style raw",
   "facade": "Biophilic façade, deep planted balconies, green wall, timber screens, trees, abundant greenery, frontal elevation, natural light",
   "night": "Biophilic building exterior at night, softly lit living façade and gardens, warm glow, greenery, architectural night photography",
   "aerial": "Aerial of a biophilic building, green roofs and tree-filled terraces, planted courtyards, surrounding parkland, drone photography",
   "street": "Street view of a biophilic building exterior, cascading green balconies, planted entrance, trees, people, documentary photography",
   "masterplan": "Biophilic district masterplan, green roofs, planted streets, water network, tree canopy, blue-green corridors, axonometric, green palette"
  },
  "gallery": [
   {
    "file": "Il Bosco Verticale Milano Px (137734459).jpeg",
    "caption": "Bosco Verticale"
   },
   {
    "file": "https://images.unsplash.com/photo-1556983852-43bf21186b2a",
    "caption": "Green wall study"
   },
   {
    "file": "https://images.unsplash.com/photo-1565599573128-ae3ef5c9f478",
    "caption": "Planted balconies"
   },
   {
    "file": "",
    "caption": "Water & timber"
   },
   {
    "file": "",
    "caption": "Tree terrace"
   },
   {
    "file": "",
    "caption": "Living façade"
   }
  ],
  "related": [
   "sustainable-passive",
   "tropical-modern",
   "organic"
  ]
 },
 {
  "slug": "industrial",
  "name": "Industrial",
  "era": 2000,
  "eraLabel": "1990s – present",
  "region": "Global",
  "mood": "Raw · Urban · Utilitarian",
  "tagline": "Raw, urban, utilitarian — exposed structure, big windows.",
  "banner": "49-52 Bankside and Tate Modern (7327477732).jpg",
  "overview": {
   "definition": "Industrial style turns the language of factories and warehouses into architecture — exposed structure, brick and steel, large multi-pane windows and an honest, utilitarian exterior.",
   "history": "Emerging from loft conversions of disused industrial buildings, the aesthetic of exposed services and robust materials became a deliberate design language for new build.",
   "origin": "Former industrial cities of Europe and North America.",
   "timeline": [
    {
     "year": "1990",
     "event": "Warehouse loft conversions popularise the look"
    },
    {
     "year": "2000",
     "event": "Adaptive reuse of power stations & factories"
    },
    {
     "year": "2012",
     "event": "Industrial exteriors adopted for new build"
    },
    {
     "year": "2020",
     "event": "Hybrid brick-and-steel housing & offices"
    }
   ],
   "architects": [
    "Herzog & de Meuron",
    "Ricardo Bofill (reuse)",
    "Adaptive-reuse practices"
   ],
   "projects": [
    {
     "name": "Tate Modern",
     "architect": "Herzog & de Meuron",
     "year": "2000",
     "location": "London, UK",
     "file": "49-52 Bankside and Tate Modern (7327477732).jpg"
    },
    {
     "name": "Battersea Power Station",
     "architect": "Giles Gilbert Scott (reuse)",
     "year": "2022",
     "location": "London, UK",
     "file": "Battersea Power Station exterior 2024.jpg"
    },
    {
     "name": "Zollverein Complex",
     "architect": "OMA (masterplan)",
     "year": "2001",
     "location": "Essen, Germany",
     "file": "Zeche-Zollverein-Schacht-12-Foerdergeruest-2012.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Exposed structure",
    "Honest materials",
    "Utility as aesthetic",
    "Adaptive reuse",
    "Robustness"
   ],
   "thinking": "Beauty is found in the unfinished and functional — steel frames, brick walls and big industrial glazing left frankly visible rather than dressed.",
   "values": [
    "Authenticity",
    "Durability",
    "Sustainability through reuse",
    "Character"
   ],
   "why": "Born of economical loft living and a taste for patina, it celebrates the dignity of working buildings."
  },
  "visual": {
   "massing": "Strong rectangular sheds and blocks; large simple volumes.",
   "form": "Robust, boxy, functional; saw-tooth or gabled industrial roof profiles.",
   "composition": "Repetitive structural bays and big openings.",
   "proportion": "Generous, tall floor-to-floor; large glazing modules.",
   "geometry": "Orthogonal and direct.",
   "rhythm": "Insistent repetition of steel bays and window grids.",
   "symmetry": "Often regular and symmetrical along the bays.",
   "scale": "Large and urban; warehouse proportions.",
   "roofs": "Flat, saw-tooth (north-light) or shallow gable with exposed steel.",
   "windows": "Large steel-framed multi-pane (Crittall) and warehouse glazing.",
   "entrance": "Functional steel-and-glass openings, sometimes with canopies.",
   "facade": "Exposed brick and steel, visible structure, big industrial windows, weathered metal."
  },
  "materials": [
   {
    "name": "Brick",
    "hex": "#8a5a44",
    "why": "The warm, robust skin of the working building."
   },
   {
    "name": "Structural steel",
    "hex": "#5e6166",
    "why": "Frames and trusses left frankly exposed."
   },
   {
    "name": "Concrete",
    "hex": "#9b9389",
    "why": "Raw columns, panels and floors."
   },
   {
    "name": "Weathered metal",
    "hex": "#7a6f63",
    "why": "Corrugated and patinated cladding for honest character."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Brick Red",
     "hex": "#8a5a44"
    },
    {
     "name": "Iron Grey",
     "hex": "#5e6166"
    }
   ],
   "accent": [
    {
     "name": "Rust",
     "hex": "#9c5a32"
    },
    {
     "name": "Black Steel",
     "hex": "#2c2b29"
    }
   ],
   "material": [
    {
     "name": "Concrete",
     "hex": "#9b9389"
    },
    {
     "name": "Zinc",
     "hex": "#8d9296"
    }
   ],
   "combos": [
    "Brick + black steel + glass",
    "Concrete + rusted metal"
   ],
   "mood": "Raw, earthy, urban — warm brick against cool dark steel."
  },
  "facadeGuide": {
   "window": "Large steel-framed multi-pane grids; repeat across structural bays.",
   "emphasis": "Horizontal banding of big windows between brick piers.",
   "shading": "Deep reveals and projecting steel canopies.",
   "balconies": "Steel galleries, gantries and external stairs as honest add-ons.",
   "frames": "Black or galvanised steel, frankly expressed.",
   "openings": "Big, repetitive, gridded; loading-door references.",
   "details": "Exposed beams, rivets, brackets, downpipes and weathering.",
   "ornament": "None — structure, brick coursing and steelwork are the detail."
  },
  "lighting": {
   "natural": "Big multi-pane glazing and north-light saw-tooth roofs flood interiors; honestly expressed.",
   "artificial": "Exposed industrial fixtures and festoon/wire lighting.",
   "night": "Warm glow behind grid windows; uplit brick reveals texture.",
   "recommendations": "Warm 2700K against brick; graze steelwork; keep fittings visible and utilitarian."
  },
  "buildingTypes": [
   "Lofts & apartments",
   "Offices & studios",
   "Galleries & markets",
   "Breweries",
   "Adaptive reuse",
   "Mixed-use"
  ],
  "checklist": [
   "Expose structure — steel frame and brick",
   "Use large multi-pane steel windows",
   "Keep robust, boxy massing on clear bays",
   "Show services and steelwork honestly",
   "Embrace patina and weathered metal",
   "Add steel galleries/stairs as expressed elements",
   "Keep palette brick + steel + concrete",
   "Reference loading doors and industrial openings"
  ],
  "mistakes": [
   "Faking exposed structure with thin decorative steel",
   "Small domestic windows instead of big industrial glazing",
   "Over-polished finishes that erase honest character",
   "Hiding the brick and steel behind cladding",
   "Pastel colour that contradicts the raw mood"
  ],
  "prompts": {
   "exterior": "Industrial building exterior, exposed brick and black steel structure, large multi-pane Crittall windows, saw-tooth roof, urban setting, overcast light, architectural photography --ar 3:2 --style raw",
   "facade": "Industrial façade, brick piers with big steel-framed window grids, exposed beams and brackets, weathered metal, frontal elevation, raking light",
   "night": "Industrial building exterior at night, warm glow behind grid windows, uplit brick, exposed steel, moody urban architectural night photography",
   "aerial": "Aerial of an industrial-style complex, saw-tooth roofs, brick blocks, steel structure, urban yard, drone photography",
   "street": "Street view of an industrial loft exterior, brick façade, tall steel windows, steel canopy entrance, documentary urban photography",
   "masterplan": "Industrial-district masterplan, repurposed sheds, brick blocks and yards, rail references, axonometric, brick and steel palette"
  },
  "gallery": [
   {
    "file": "49-52 Bankside and Tate Modern (7327477732).jpg",
    "caption": "Tate Modern exterior"
   },
   {
    "file": "Battersea Power Station exterior 2024.jpg",
    "caption": "Battersea Power Station"
   },
   {
    "file": "Zeche-Zollverein-Schacht-12-Foerdergeruest-2012.jpg",
    "caption": "Zollverein"
   },
   {
    "file": "https://images.unsplash.com/photo-1614620304006-504b0d4b37e3",
    "caption": "Brick & steel study"
   },
   {
    "file": "https://images.unsplash.com/photo-1568539314706-f17c0e60d96d",
    "caption": "Window grid"
   },
   {
    "file": "",
    "caption": "Saw-tooth roof"
   }
  ],
  "related": [
   "modern",
   "contemporary",
   "minimalism"
  ]
 },
 {
  "slug": "high-tech",
  "name": "High-Tech",
  "era": 1975,
  "eraLabel": "1970s – present",
  "region": "UK · Global",
  "mood": "Engineered · Exposed · Precise",
  "tagline": "The structure and services are the architecture.",
  "banner": "Centre Pompidou, seen from Tour Montparnasse.jpg",
  "overview": {
   "definition": "High-Tech celebrates engineering as aesthetic — exposing structure, services and circulation as the building's expressive language in steel, glass and bright industrial colour.",
   "history": "Developing from 1970s Britain, it turned the building 'inside out', displaying ducts, trusses and lifts as ornament, later evolving toward sleek sustainable 'eco-tech' towers.",
   "origin": "United Kingdom, 1970s; international by the 1990s.",
   "timeline": [
    {
     "year": "1977",
     "event": "Centre Pompidou opens"
    },
    {
     "year": "1986",
     "event": "Lloyd's of London & HSBC"
    },
    {
     "year": "2004",
     "event": "30 St Mary Axe (Gherkin)"
    },
    {
     "year": "2014",
     "event": "Eco-tech towers mainstream"
    }
   ],
   "architects": [
    "Richard Rogers",
    "Norman Foster",
    "Renzo Piano",
    "Nicholas Grimshaw"
   ],
   "projects": [
    {
     "name": "Centre Pompidou",
     "architect": "Piano & Rogers",
     "year": "1977",
     "location": "Paris, France",
     "file": "Centre Pompidou, seen from Tour Montparnasse.jpg"
    },
    {
     "name": "Lloyd's Building",
     "architect": "Richard Rogers",
     "year": "1986",
     "location": "London, UK",
     "file": "Lloyd's building.jpg"
    },
    {
     "name": "30 St Mary Axe",
     "architect": "Norman Foster",
     "year": "2004",
     "location": "London, UK",
     "file": "30 St Mary Axe.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Structural expression",
    "Services as ornament",
    "Flexibility & modularity",
    "Prefabrication",
    "Honesty of technology"
   ],
   "thinking": "By externalising structure and services, the interior is freed for flexible use and the façade becomes a legible diagram of exactly how the building works.",
   "values": [
    "Innovation",
    "Adaptability",
    "Transparency",
    "Optimism about technology"
   ],
   "why": "Faith in engineering and industrial production to deliver lighter, more flexible, future-proof buildings — architecture as a precise serviceable machine."
  },
  "visual": {
   "massing": "Legible volumes with structure and service towers expressed externally; taut and light.",
   "form": "Rectilinear or sleekly aerodynamic; later smooth curved forms.",
   "composition": "Ordered by structural module; external masts and bracing.",
   "proportion": "Slender, engineered, sized precisely to load.",
   "geometry": "Triangulated trusses, cables, repeated bays.",
   "rhythm": "Crisp mechanical repetition of structure.",
   "symmetry": "Often symmetrical and modular.",
   "scale": "Pavilion to supertall — a precise kit of parts.",
   "roofs": "Exposed trusses, tension structures and glazed atria.",
   "windows": "Large flush glazing between expressed structure.",
   "entrance": "Glazed and transparent, with dramatic external lifts/escalators.",
   "facade": "Glass curtain wall with expressed steel, external bracing, ducts and bright service runs."
  },
  "materials": [
   {
    "name": "Structural steel",
    "hex": "#7c8186",
    "why": "Slender, strong structure that frees and frames the façade."
   },
   {
    "name": "Glass curtain wall",
    "hex": "#a6c0c8",
    "why": "Admits light and dissolves the wall between inside and out."
   },
   {
    "name": "Aluminium panel",
    "hex": "#bcc1c4",
    "why": "Lightweight, precise, factory-finished cladding."
   },
   {
    "name": "Tension cables",
    "hex": "#9a9ea1",
    "why": "Tension cables that express the flow of structural forces."
   },
   {
    "name": "Coloured ducts",
    "hex": "#2f6fae",
    "why": "Externalised services, colour-coded, celebrated as ornament."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Silver Grey",
     "hex": "#aeb3b6"
    },
    {
     "name": "Glass Blue",
     "hex": "#a6c0c8"
    }
   ],
   "accent": [
    {
     "name": "Pompidou Blue",
     "hex": "#2f6fae"
    },
    {
     "name": "Service Red",
     "hex": "#c0392b"
    },
    {
     "name": "Duct Yellow",
     "hex": "#e3b21d"
    }
   ],
   "material": [
    {
     "name": "Steel",
     "hex": "#7c8186"
    },
    {
     "name": "Aluminium",
     "hex": "#bcc1c4"
    }
   ],
   "combos": [
    "Silver + glass + colour-coded services",
    "Monochrome steel with one bold accent"
   ],
   "mood": "Precise, energetic and optimistic — primary colours code function on a metallic field."
  },
  "facadeGuide": {
   "window": "Full-height flush glazing spanning between expressed structural bays.",
   "emphasis": "Expressed structure drives a strong, clear grid.",
   "shading": "External louvres, brise-soleil and deep structure for engineered solar control.",
   "balconies": "Maintenance gantries and walkways expressed as structure.",
   "frames": "Slim, precise, part of the curtain-wall system.",
   "openings": "Large, repetitive, modular; vision glass maximised.",
   "details": "Cast-steel nodes, bolts and cable terminations celebrated.",
   "ornament": "None applied — exposed structure, services and connections are the ornament."
  },
  "lighting": {
   "natural": "Daylight floods through curtain walls and atria; external structure modulates glare.",
   "artificial": "Reveal the skeleton with grazing and accent light; functional task light within.",
   "night": "The transparent envelope glows, exposing the lit skeleton as a working machine.",
   "recommendations": "Light the structure to celebrate it; colour-accent services; keep glazing transparent at night."
  },
  "buildingTypes": [
   "Office towers",
   "Cultural centres",
   "Airports & terminals",
   "Exhibition halls",
   "Stadia",
   "Factories"
  ],
  "checklist": [
   "Express the primary structure externally",
   "Celebrate or externalise services",
   "Use a clear repetitive module",
   "Specify steel, glass and aluminium honestly",
   "Detail nodes, bolts and cables as craft",
   "Maximise transparent flush glazing",
   "Add engineered shading (louvres, brise-soleil)",
   "Colour-code services for legibility"
  ],
  "mistakes": [
   "Faking exposed structure with decorative steel",
   "Hiding the structure and services the style celebrates",
   "Heavy masonry-like massing contradicting lightness",
   "Arbitrary structural rhythm",
   "Neglecting weathering of exposed parts"
  ],
  "prompts": {
   "exterior": "High-tech building exterior, exposed external steel structure, glass curtain wall, colour-coded service ducts, external lift tubes, transparent, precise engineering, architectural photography --ar 3:2 --style raw",
   "facade": "High-tech façade, expressed steel trusses and tension cables, full-height flush glazing, cast-steel nodes, modular bays, frontal elevation, crisp detail",
   "night": "High-tech tower exterior at night, glowing transparent envelope revealing lit steel skeleton, illuminated service runs, sharp reflections, architectural night photography",
   "aerial": "Aerial of a high-tech terminal, vast exposed-truss roof, glazed concourse, modular grid, drone photography, daylight",
   "street": "Street view of a high-tech building exterior, external bright-coloured ducts and glass lifts, plaza, energetic, documentary photography",
   "masterplan": "High-tech masterplan, modular structural grid, flexible pavilions, expressed circulation spines, axonometric, silver-and-primary palette"
  },
  "gallery": [
   {
    "file": "Centre Pompidou, seen from Tour Montparnasse.jpg",
    "caption": "Centre Pompidou"
   },
   {
    "file": "Lloyd's building.jpg",
    "caption": "Lloyd's of London"
   },
   {
    "file": "30 St Mary Axe.jpg",
    "caption": "30 St Mary Axe"
   },
   {
    "file": "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
    "caption": "Cast-steel node"
   },
   {
    "file": "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8",
    "caption": "Truss & cable study"
   },
   {
    "file": "",
    "caption": "Service-run detail"
   }
  ],
  "related": [
   "parametric",
   "deconstructivism",
   "modern"
  ]
 },
 {
  "slug": "parametric",
  "name": "Parametric",
  "era": 2010,
  "eraLabel": "2000s – present",
  "region": "Global",
  "mood": "Fluid · Innovative · Futuristic",
  "tagline": "Fluid, futuristic, innovative — curves and complex geometry.",
  "banner": "Dongdaemun Design Plaza at night, Seoul, Korea.jpg",
  "overview": {
   "definition": "Parametric / Futuristic architecture generates fluid, continuously differentiated, often biomorphic exteriors by algorithm — seamless double-curved skins impossible to draw by hand.",
   "history": "Named by Patrik Schumacher, it matured as software and digital fabrication made complex curved geometry buildable; it seeks smooth continuity beyond the orthogonal grid.",
   "origin": "Global; led by Zaha Hadid Architects and the digital avant-garde.",
   "timeline": [
    {
     "year": "2008",
     "event": "Schumacher names 'Parametricism'"
    },
    {
     "year": "2012",
     "event": "Heydar Aliyev Center"
    },
    {
     "year": "2014",
     "event": "Dongdaemun Design Plaza, Seoul"
    },
    {
     "year": "2019",
     "event": "Beijing Daxing Airport"
    }
   ],
   "architects": [
    "Zaha Hadid",
    "Patrik Schumacher",
    "UNStudio",
    "Greg Lynn"
   ],
   "projects": [
    {
     "name": "Dongdaemun Design Plaza",
     "architect": "Zaha Hadid",
     "year": "2014",
     "location": "Seoul, South Korea",
     "file": "Dongdaemun Design Plaza at night, Seoul, Korea.jpg"
    },
    {
     "name": "Galaxy SOHO",
     "architect": "Zaha Hadid",
     "year": "2014",
     "location": "Beijing, China",
     "file": "Galaxy Soho.jpg"
    },
    {
     "name": "Beijing Daxing Airport",
     "architect": "Zaha Hadid Architects",
     "year": "2019",
     "location": "Beijing, China",
     "file": "Beijing Daxing International Airport 33.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Parametric generation",
    "Continuous differentiation",
    "Fluidity & seamlessness",
    "Field & flow",
    "Adaptive systems"
   ],
   "thinking": "Architecture as a responsive system: parameters drive form so every element varies smoothly within a coherent whole; walls, floors and roofs merge into continuous surfaces.",
   "values": [
    "Innovation",
    "Continuity",
    "Performance",
    "Mass customisation"
   ],
   "why": "The digital revolution — the conviction that computation yields richer, more adaptive, seamlessly complex architecture."
  },
  "visual": {
   "massing": "Flowing seamless volumes merging wall and roof; landscape-like continuity.",
   "form": "Smooth, biomorphic, curvilinear; double-curved surfaces and sweeping voids.",
   "composition": "Continuous fields and gradients rather than discrete parts.",
   "proportion": "Smoothly varying across the whole — no repeated identical element.",
   "geometry": "NURBS surfaces, splines, Voronoi and topological patterns.",
   "rhythm": "Gradient rhythms — elements morph gradually.",
   "symmetry": "Asymmetrical, flowing, often swirling.",
   "scale": "Iconic and immersive.",
   "roofs": "Roof and wall are one continuous shell.",
   "windows": "Fluid ribbons and apertures woven into the curving skin.",
   "entrance": "Drawn into the form as a swirling void.",
   "facade": "Seamless panelised skin (GFRC, composites, metal) following double-curved geometry."
  },
  "materials": [
   {
    "name": "GFRC (glass-fibre concrete)",
    "hex": "#e4e0d7",
    "why": "Cast into smooth double-curved panels."
   },
   {
    "name": "Composite cladding",
    "hex": "#d6d2c8",
    "why": "Lightweight, mouldable panels following curvature."
   },
   {
    "name": "Curved glass",
    "hex": "#a8c2c8",
    "why": "Fluid glazing integrated into the continuous surface."
   },
   {
    "name": "Perforated metal",
    "hex": "#9fa4a7",
    "why": "Parametric perforation that gradates across the façade."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Pure White",
     "hex": "#f1eee7"
    },
    {
     "name": "Soft Grey",
     "hex": "#cfcabf"
    }
   ],
   "accent": [
    {
     "name": "Liquid Silver",
     "hex": "#b3b8bb"
    },
    {
     "name": "Deep Charcoal",
     "hex": "#33322e"
    }
   ],
   "material": [
    {
     "name": "Glass",
     "hex": "#a8c2c8"
    },
    {
     "name": "Metal",
     "hex": "#9fa4a7"
    }
   ],
   "combos": [
    "Seamless monochrome white",
    "White shell with glazing ribbons and metallic accents"
   ],
   "mood": "Futuristic, serene, fluid — mostly white/neutral to read continuity."
  },
  "facadeGuide": {
   "window": "Fluid apertures and glazed ribbons following the curving skin — never a static grid.",
   "emphasis": "Flowing — horizontal and vertical dissolve into lines of motion.",
   "shading": "Parametric perforation and self-shading curvature.",
   "balconies": "Carved smoothly into the shell as flowing recesses.",
   "frames": "Concealed within seamless panel systems.",
   "openings": "Organic, varied, woven into the geometry.",
   "details": "Panelisation, seam patterns and gradient perforation — invisible fixings.",
   "ornament": "None applied — pattern, gradient and flowing form are the ornament."
  },
  "lighting": {
   "natural": "Curved skylights and ribbons draw light along flowing surfaces; soft gradients of light and shadow.",
   "artificial": "Continuous concealed LED tracing the curves.",
   "night": "The shell glows as a continuous luminous landscape.",
   "recommendations": "Concealed linear LED following curvature; smooth gradient light; avoid point sources."
  },
  "buildingTypes": [
   "Cultural centres",
   "Airports & transport hubs",
   "Stadia",
   "Museums",
   "Mixed-use icons",
   "Pavilions"
  ],
  "checklist": [
   "Generate form with parametric tools",
   "Merge floor, wall and roof into a continuous surface",
   "Differentiate elements smoothly",
   "Design a panelisation/seam logic",
   "Weave fluid apertures into the geometry",
   "Use mouldable materials (GFRC, composites)",
   "Integrate parametric shading/perforation",
   "Trace curves with concealed lighting"
  ],
  "mistakes": [
   "'Blobitecture' — arbitrary curves with no logic",
   "Curved cladding forced onto an orthogonal box",
   "Ignoring buildability, drainage and tolerances",
   "Clumsy panel joints breaking the seamless look",
   "Over-busy patterns fighting the form"
  ],
  "prompts": {
   "exterior": "Parametric futuristic cultural centre exterior, flowing seamless white shell merging wall and roof, sweeping curves, fluid glazed ribbons, landscape-like form, soft daylight, architectural photography --ar 3:2 --style raw",
   "facade": "Parametric façade, double-curved white panelised skin, gradient perforation, fluid glazing ribbon, seamless joints, smooth raking light, high detail",
   "night": "Parametric building exterior at night, glowing continuous luminous shell, concealed linear light tracing curves, reflective plaza, futuristic night photography",
   "aerial": "Aerial of a parametric airport, flowing radial roof shell, seamless white surface, fluid skylights, organic geometry, drone view",
   "street": "Street perspective of a parametric building exterior, sweeping cantilevered curve overhead, fluid white surface, pedestrians for scale, futuristic, documentary photography",
   "masterplan": "Parametric masterplan, flowing field of differentiated curved volumes, organic circulation, gradient density, axonometric, white palette"
  },
  "gallery": [
   {
    "file": "Dongdaemun Design Plaza at night, Seoul, Korea.jpg",
    "caption": "Dongdaemun Plaza — Hadid"
   },
   {
    "file": "Galaxy Soho.jpg",
    "caption": "Galaxy SOHO, Beijing"
   },
   {
    "file": "Beijing Daxing International Airport 33.jpg",
    "caption": "Daxing Airport — ZHA"
   },
   {
    "file": "Parametric facade AeroA.jpg",
    "caption": "Gradient panelisation"
   },
   {
    "file": "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    "caption": "Flowing shell study"
   },
   {
    "file": "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c",
    "caption": "Fluid aperture"
   }
  ],
  "related": [
   "deconstructivism",
   "contemporary",
   "modern"
  ]
 },
 {
  "slug": "deconstructivism",
  "name": "Deconstructivism",
  "era": 1990,
  "eraLabel": "1980s – present",
  "region": "Global",
  "mood": "Experimental · Dynamic · Bold",
  "tagline": "Experimental, dynamic, bold — fragmented, non-linear form.",
  "banner": "Guggenheim Bilbao.jpg",
  "overview": {
   "definition": "Deconstructivism is an architecture of fragmentation and dynamic instability — distorted, dislocated, non-rectilinear exteriors that appear in motion or controlled collision.",
   "history": "Crystallised at MoMA's 1988 show, it drew on Russian Constructivism and was made buildable by digital modelling.",
   "origin": "USA and Europe; theorised in the 1980s.",
   "timeline": [
    {
     "year": "1988",
     "event": "MoMA 'Deconstructivist Architecture'"
    },
    {
     "year": "1993",
     "event": "Vitra Fire Station, Zaha Hadid"
    },
    {
     "year": "1997",
     "event": "Guggenheim Bilbao — the 'Bilbao Effect'"
    },
    {
     "year": "2003",
     "event": "Walt Disney Concert Hall"
    }
   ],
   "architects": [
    "Frank Gehry",
    "Zaha Hadid",
    "Daniel Libeskind",
    "Coop Himmelb(l)au"
   ],
   "projects": [
    {
     "name": "Guggenheim Bilbao",
     "architect": "Frank Gehry",
     "year": "1997",
     "location": "Bilbao, Spain",
     "file": "Guggenheim Bilbao.jpg"
    },
    {
     "name": "Walt Disney Concert Hall",
     "architect": "Frank Gehry",
     "year": "2003",
     "location": "Los Angeles, USA",
     "file": "Walt Disney Concert Hall.jpg"
    },
    {
     "name": "Dancing House",
     "architect": "Gehry & Milunić",
     "year": "1996",
     "location": "Prague, Czechia",
     "file": "The Dancing House - Prague - June 2005 - Fred & Ginger Building.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Fragmentation",
    "Non-rectilinear geometry",
    "Controlled instability",
    "Disruption",
    "Form as event"
   ],
   "thinking": "It questions the assumed harmony of structure and form — tilting planes and fracturing volumes to create tension, surprise and frozen movement.",
   "values": [
    "Provocation",
    "Dynamism",
    "Rigour",
    "Intensity"
   ],
   "why": "A critique of pure functionalism, asserting that architecture can express conflict, complexity and the fractured contemporary condition."
  },
  "visual": {
   "massing": "Colliding, tilted, interpenetrating volumes; no stable base.",
   "form": "Warped planes, sharp angles and sweeping curves — sculptural.",
   "composition": "Deliberately unstable; diagonal forces dominate.",
   "proportion": "Distorted and dramatic; abrupt scale shifts.",
   "geometry": "Non-Euclidean, faceted or free-form.",
   "rhythm": "Irregular, syncopated, broken.",
   "symmetry": "Radically asymmetrical.",
   "scale": "Monumental and iconic, made to astonish.",
   "roofs": "Folded, tilted or sculptural; roof and wall merge.",
   "windows": "Irregular slashes and angular cuts following the geometry.",
   "entrance": "Dramatic, carved into the fractured mass.",
   "facade": "Continuous sculptural skin — titanium, steel, zinc — wrapping the fragmented form."
  },
  "materials": [
   {
    "name": "Titanium / metal cladding",
    "hex": "#aeb2b5",
    "why": "A shimmering skin flowing over complex curves."
   },
   {
    "name": "Structural steel",
    "hex": "#5e6368",
    "why": "Enables dramatic cantilevers and irregular geometry."
   },
   {
    "name": "Glass",
    "hex": "#9fb7be",
    "why": "Sharp glazed slashes and faceted walls."
   },
   {
    "name": "Zinc / stainless steel",
    "hex": "#8d9296",
    "why": "Durable fluid cladding for warped surfaces."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Titanium Silver",
     "hex": "#b6babd"
    },
    {
     "name": "Steel Grey",
     "hex": "#5e6368"
    }
   ],
   "accent": [
    {
     "name": "Signal Red",
     "hex": "#b23a2e"
    },
    {
     "name": "Void Black",
     "hex": "#1c1d1f"
    }
   ],
   "material": [
    {
     "name": "Glass Blue",
     "hex": "#9fb7be"
    },
    {
     "name": "Zinc",
     "hex": "#8d9296"
    }
   ],
   "combos": [
    "Monolithic metallic silver",
    "Stark white planes with black slashes"
   ],
   "mood": "Charged, dramatic, otherworldly — metallics and high contrast."
  },
  "facadeGuide": {
   "window": "Irregular angular cuts and ribbons following the warped geometry — never a grid.",
   "emphasis": "Diagonal — tilted planes and dynamic lines drive the eye.",
   "shading": "Geometry self-shades; deep folds and overhangs emerge from the form.",
   "balconies": "Rare; cantilevered at dramatic angles.",
   "frames": "Minimal, hidden within the continuous skin.",
   "openings": "Slashes, fractures, faceted glazing — irregular by design.",
   "details": "Seamless cladding panels, sharp folds, knife-edge junctions.",
   "ornament": "None applied — the warped form is the spectacle."
  },
  "lighting": {
   "natural": "Curved metallic skins animate daylight, shifting through the day; angular cuts throw dramatic shadow.",
   "artificial": "Theatrical uplighting accentuating folds and edges.",
   "night": "The sculptural skin becomes a glowing dynamic landmark.",
   "recommendations": "Graze metal to reveal curvature; cool light enhances the shimmer; light edges."
  },
  "buildingTypes": [
   "Museums & galleries",
   "Concert halls",
   "Cultural landmarks",
   "Flagship retail",
   "Universities",
   "Corporate HQs"
  ],
  "checklist": [
   "Fragment and tilt the massing",
   "Let diagonal forces dominate",
   "Wrap the form in a continuous sculptural skin",
   "Cut irregular angular openings",
   "Use parametric/3D modelling to resolve geometry",
   "Express dramatic cantilevers",
   "Keep palette metallic/monolithic",
   "Detail seamless panels and knife-edge junctions"
  ],
  "mistakes": [
   "Fragmentation as decoration on a conventional box",
   "Regular grids and stable symmetry",
   "Chaos without structural/spatial logic",
   "Busy multi-material façades",
   "Ignoring buildability and watertightness"
  ],
  "prompts": {
   "exterior": "Deconstructivist museum exterior, fragmented titanium-clad volumes, sweeping warped curves colliding, dynamic cantilevers, shimmering metal skin, riverside, golden hour, architectural photography --ar 3:2 --style raw",
   "facade": "Deconstructivist façade, fractured tilted planes, angular glass slashes, continuous metal cladding, diagonal composition, dramatic shadow, sculptural",
   "night": "Deconstructivist landmark exterior at night, glowing warped metal skin, illuminated angular cuts, reflections on water, iconic architectural night photography",
   "aerial": "Aerial of a Deconstructivist cultural complex, colliding sculptural volumes, fragmented roofscape, metallic skin, dynamic geometry, drone view",
   "street": "Street perspective beneath a Deconstructivist cantilever, tilted planes overhead, angular glazing, dynamic scale, documentary architectural photography",
   "masterplan": "Deconstructivist masterplan, fractured angular geometry, diagonal axes cutting the grid, fragmented public spaces, axonometric"
  },
  "gallery": [
   {
    "file": "Guggenheim Bilbao.jpg",
    "caption": "Guggenheim Bilbao — Gehry"
   },
   {
    "file": "Walt Disney Concert Hall.jpg",
    "caption": "Disney Hall — Gehry"
   },
   {
    "file": "The Dancing House - Prague - June 2005 - Fred & Ginger Building.jpg",
    "caption": "Dancing House, Prague"
   },
   {
    "file": "Detail of the Guggenheim Museum titanium façade, Bilbao, Spain (PPL1-Corrected) julesvernex2.jpg",
    "caption": "Titanium skin detail"
   },
   {
    "file": "",
    "caption": "Fragmented massing"
   },
   {
    "file": "",
    "caption": "Angular glazing"
   }
  ],
  "related": [
   "contemporary",
   "modern",
   "minimalism"
  ]
 },
 {
  "slug": "brutalism",
  "name": "Brutalism",
  "era": 1955,
  "eraLabel": "1950s – 1980s",
  "region": "Europe → Global",
  "mood": "Bold · Massive · Sculptural",
  "tagline": "Bold, massive, sculptural — exposed raw concrete.",
  "banner": "Unité d'Habitation de Marseille 4.JPG",
  "overview": {
   "definition": "Brutalism is an architecture of bold, sculptural, monumental masses in exposed raw concrete (béton brut), expressing structure, weight and the texture of construction.",
   "history": "Born in post-war reconstruction, it offered an economical, durable, 'honest' architecture, showing the imprint of its own timber shuttering.",
   "origin": "Britain and France, mid-1950s.",
   "timeline": [
    {
     "year": "1952",
     "event": "Unité d'Habitation, Marseille"
    },
    {
     "year": "1955",
     "event": "'New Brutalism' coined"
    },
    {
     "year": "1968",
     "event": "Boston City Hall"
    },
    {
     "year": "1976",
     "event": "Barbican Estate, London"
    }
   ],
   "architects": [
    "Le Corbusier",
    "Alison & Peter Smithson",
    "Paul Rudolph",
    "Ernő Goldfinger"
   ],
   "projects": [
    {
     "name": "Unité d'Habitation",
     "architect": "Le Corbusier",
     "year": "1952",
     "location": "Marseille, France",
     "file": "Unité d'Habitation de Marseille 4.JPG"
    },
    {
     "name": "Barbican Estate",
     "architect": "Chamberlin, Powell & Bon",
     "year": "1976",
     "location": "London, UK",
     "file": "Barbican Centre London.jpg"
    },
    {
     "name": "Boston City Hall",
     "architect": "Kallmann McKinnell & Knowles",
     "year": "1968",
     "location": "Boston, USA",
     "file": "Boston City Hall.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Truth to materials",
    "Structural honesty",
    "Monumentality",
    "Expression of mass",
    "Function as form"
   ],
   "thinking": "Brutalism refuses disguise. Structure and circulation are made visible and celebrated; the building is an honest sculpted object of weight and texture.",
   "values": [
    "Integrity",
    "Permanence",
    "Social purpose",
    "Directness"
   ],
   "why": "From austerity and idealism — an ethical, affordable, enduring architecture for housing, universities and government."
  },
  "visual": {
   "massing": "Heavy, sculptural, often top-heavy volumes; bold cantilevers casting deep shadow.",
   "form": "Chunky and sculptural — towers, megastructures, interlocking blocks.",
   "composition": "Repetition of strong modular units; dramatic solid/void contrast.",
   "proportion": "Massive and weighty; oversized to read at urban scale.",
   "geometry": "Angular and faceted; occasional powerful curves (ramps).",
   "rhythm": "Insistent repetition of cellular units — balconies, fins.",
   "symmetry": "Often symmetrical and monumental, rugged in surface.",
   "scale": "Monumental, civic, deliberately imposing.",
   "roofs": "Flat, with expressive rooftop plant and sculptural elements.",
   "windows": "Deep-set recessed openings; strong shadow.",
   "entrance": "Elevated, processional — reached by ramps or bridges.",
   "facade": "Board-marked or bush-hammered concrete; formwork texture as ornament."
  },
  "materials": [
   {
    "name": "Béton brut (raw concrete)",
    "hex": "#9a958c",
    "why": "Cast in place, left exposed, carrying its formwork texture."
   },
   {
    "name": "Board-formed concrete",
    "hex": "#a59f94",
    "why": "Timber shuttering imprints a warm grain into the concrete."
   },
   {
    "name": "Brick",
    "hex": "#8a5a44",
    "why": "Warmth and human scale alongside concrete in housing."
   },
   {
    "name": "Exposed aggregate",
    "hex": "#8f8a7e",
    "why": "Rugged texture that weathers and reveals substance."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Raw Concrete",
     "hex": "#9a958c"
    },
    {
     "name": "Shadow Grey",
     "hex": "#6c685f"
    }
   ],
   "accent": [
    {
     "name": "Oxide Red",
     "hex": "#9c4a32"
    },
    {
     "name": "Bottle Green",
     "hex": "#3c5045"
    }
   ],
   "material": [
    {
     "name": "Weathered Brown",
     "hex": "#7a6a55"
    },
    {
     "name": "Aggregate",
     "hex": "#8f8a7e"
    }
   ],
   "combos": [
    "Monolithic concrete greys",
    "Concrete + brick + bold primary accents"
   ],
   "mood": "Sombre, powerful, elemental — relieved by occasional bold accents."
  },
  "facadeGuide": {
   "window": "Deep reveals and recessed glazing for strong shadow; group into cellular modules.",
   "emphasis": "Vertical service towers against horizontal balcony decks.",
   "shading": "The mass shades itself; deep balconies and fins as sun control.",
   "balconies": "Robust projecting concrete balconies as the rhythmic device.",
   "frames": "Recessed and secondary — the structure dominates.",
   "openings": "Repetitive cellular openings; vary to express programme.",
   "details": "Board-marks, drips, expressed beams and waterspouts.",
   "ornament": "None applied — texture and structural rhythm provide richness."
  },
  "lighting": {
   "natural": "Sculptural mass creates dramatic self-shadowing on the exterior.",
   "artificial": "Conceal sources; graze concrete to reveal texture and weight.",
   "night": "Uplighting and grazing make the concrete monumental; recesses read as voids.",
   "recommendations": "Warm grazing 2700–3000K to counter concrete's coolness; emphasise texture."
  },
  "buildingTypes": [
   "Civic & government",
   "Universities",
   "Housing",
   "Cultural centres",
   "Car parks",
   "Libraries"
  ],
  "checklist": [
   "Express raw concrete left exposed",
   "Use board-formed or textured surfaces",
   "Compose bold sculptural masses",
   "Recess windows deeply for shadow",
   "Make ramps, bridges and towers visible",
   "Repeat strong cellular units",
   "Keep palette monolithic; accent sparingly",
   "Detail honest drips and expressed beams"
  ],
  "mistakes": [
   "Painting or cladding over the concrete",
   "Thin, lightweight forms lacking mass",
   "Decorative add-ons or historical reference",
   "Shallow flush windows with no shadow",
   "Pastel colours undermining the gravity"
  ],
  "prompts": {
   "exterior": "Brutalist civic building exterior, raw board-formed concrete, bold cantilevered sculptural mass, deep-set windows, dramatic shadow, monumental, overcast sky, wide-angle architectural photography --ar 3:2 --style raw",
   "facade": "Brutalist concrete façade, board-marked texture, repetitive cellular balcony modules, deep reveals, strong raking light, monochrome, high detail",
   "night": "Brutalist tower exterior at night, concrete grazed by warm uplight revealing formwork, deep recesses in shadow, moody architectural night photography",
   "aerial": "Aerial of a Brutalist megastructure, interlocking concrete blocks and elevated walkways, flat roofs, hard shadows, grey palette, drone view",
   "street": "Street view looking up at a Brutalist housing block, projecting concrete balconies, ramp entrance, dramatic perspective, documentary photography",
   "masterplan": "Brutalist masterplan, megastructure with elevated decks, repetitive slabs, raw concrete, bold geometry, axonometric, monochrome"
  },
  "gallery": [
   {
    "file": "Unité d'Habitation de Marseille 4.JPG",
    "caption": "Unité d'Habitation"
   },
   {
    "file": "Barbican Centre London.jpg",
    "caption": "Barbican Estate"
   },
   {
    "file": "Boston City Hall.jpg",
    "caption": "Boston City Hall"
   },
   {
    "file": "Dingleton Boiler House - detail of board-marked concrete.jpg",
    "caption": "Board-marked concrete"
   },
   {
    "file": "https://images.unsplash.com/photo-1546414701-81cc6963c67f",
    "caption": "Cantilever study"
   },
   {
    "file": "https://images.unsplash.com/photo-1565626424178-c699f6601afd",
    "caption": "Cellular balconies"
   }
  ],
  "related": [
   "industrial",
   "deconstructivism",
   "modern"
  ]
 },
 {
  "slug": "mid-century-modern",
  "name": "Mid-Century Modern",
  "era": 1945,
  "eraLabel": "1945 – 1970",
  "region": "USA · Global",
  "mood": "Open · Warm · Connected",
  "tagline": "Clean lines, indoor–outdoor connection.",
  "banner": "Case Study House No. 22.JPG",
  "overview": {
   "definition": "Mid-Century Modern is the optimistic post-war house language — clean lines, flat or low-pitched roofs, open plans and a seamless connection between the exterior, glass walls and landscape.",
   "history": "Popularised by the American Case Study Houses and West-Coast living, it brought Modernism to the suburban home with warmth and ease.",
   "origin": "USA (especially California), 1945–1970.",
   "timeline": [
    {
     "year": "1945",
     "event": "Case Study House programme begins"
    },
    {
     "year": "1949",
     "event": "Eames House completed"
    },
    {
     "year": "1960",
     "event": "Stahl House (Case Study #22)"
    },
    {
     "year": "1963",
     "event": "Desert modernism peaks in Palm Springs"
    }
   ],
   "architects": [
    "Richard Neutra",
    "Pierre Koenig",
    "Charles & Ray Eames",
    "Craig Ellwood"
   ],
   "projects": [
    {
     "name": "Stahl House (CSH #22)",
     "architect": "Pierre Koenig",
     "year": "1960",
     "location": "Los Angeles, USA",
     "file": "Case Study House No. 22.JPG"
    },
    {
     "name": "Kaufmann Desert House",
     "architect": "Richard Neutra",
     "year": "1946",
     "location": "Palm Springs, USA",
     "file": "Kaufman Desert Home cropped.jpg"
    },
    {
     "name": "Eames House",
     "architect": "Charles & Ray Eames",
     "year": "1949",
     "location": "Los Angeles, USA",
     "file": "Eames House.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Clean lines",
    "Indoor–outdoor flow",
    "Open plan",
    "Honest structure",
    "Optimistic modern living"
   ],
   "thinking": "The post-war house dissolves the boundary between exterior and landscape with glass walls, overhangs and decks, expressing a relaxed, modern way of life.",
   "values": [
    "Openness",
    "Optimism",
    "Accessibility",
    "Connection to nature"
   ],
   "why": "Post-war prosperity, new materials and a sunny climate produced an aspirational yet attainable modern home."
  },
  "visual": {
   "massing": "Low, horizontal, ground-hugging volumes that reach into the landscape.",
   "form": "Clean rectilinear forms with deep overhangs and flat or low-pitched roofs.",
   "composition": "Open, asymmetric; glass and solid bays alternating.",
   "proportion": "Long and low; strong horizontals.",
   "geometry": "Orthogonal with crisp post-and-beam structure.",
   "rhythm": "Regular structural posts and glazed bays.",
   "symmetry": "Asymmetrical, relaxed.",
   "scale": "Domestic, intimate, human.",
   "roofs": "Flat or low-pitched with broad overhanging eaves.",
   "windows": "Floor-to-ceiling glass walls and clerestories.",
   "entrance": "Sheltered under deep eaves; understated.",
   "facade": "Post-and-beam frame, glass walls, warm wood and stone, broad cantilevered roofs."
  },
  "materials": [
   {
    "name": "Wood (beams & cladding)",
    "hex": "#bf9a63",
    "why": "Warm post-and-beam structure and cladding."
   },
   {
    "name": "Glass",
    "hex": "#abc4c9",
    "why": "Full-height walls dissolving indoor/outdoor."
   },
   {
    "name": "Brick & stone",
    "hex": "#9a6a4e",
    "why": "Anchoring walls extending outdoors."
   },
   {
    "name": "Steel",
    "hex": "#6f7479",
    "why": "Slim structure in Case Study houses."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Warm Wood",
     "hex": "#bf9a63"
    },
    {
     "name": "Off-White",
     "hex": "#ece7dc"
    }
   ],
   "accent": [
    {
     "name": "Avocado",
     "hex": "#6c7a3a"
    },
    {
     "name": "Burnt Orange",
     "hex": "#b5633a"
    },
    {
     "name": "Teal",
     "hex": "#2f7a78"
    }
   ],
   "material": [
    {
     "name": "Stone",
     "hex": "#9a8a72"
    },
    {
     "name": "Glass",
     "hex": "#abc4c9"
    }
   ],
   "combos": [
    "Wood + glass + stone",
    "Neutral with retro accent (orange/teal/avocado)"
   ],
   "mood": "Warm, optimistic, relaxed — natural tones with a playful retro accent."
  },
  "facadeGuide": {
   "window": "Full-height glass walls and clerestories; dissolve corners toward the view.",
   "emphasis": "Strongly horizontal — long eaves and low rooflines.",
   "shading": "Broad cantilevered overhangs; vertical fins and screens.",
   "balconies": "Decks and terraces extending the floor plane outdoors.",
   "frames": "Slim wood or steel; minimal.",
   "openings": "Generous glazed bays alternating with solid wood/stone.",
   "details": "Expressed post-and-beam, clean eaves, integrated planters.",
   "ornament": "None — warmth comes from natural material and the play of structure."
  },
  "lighting": {
   "natural": "Deep overhangs control sun while glass walls flood space; clerestories add even light.",
   "artificial": "Warm, low, integrated lighting spilling onto decks.",
   "night": "Glass walls glow warmly; the roof plane floats above light.",
   "recommendations": "Warm 2700K; uplight the roof plane; light decks to extend living outdoors."
  },
  "buildingTypes": [
   "Houses",
   "Small offices",
   "Motels & hospitality",
   "Community buildings",
   "Pavilions"
  ],
  "checklist": [
   "Keep massing low and horizontal",
   "Use deep overhanging eaves",
   "Open the plan and dissolve walls to glass",
   "Express post-and-beam structure",
   "Extend floors to decks and terraces",
   "Use warm wood and stone",
   "Add a restrained retro accent colour",
   "Connect every room to the outdoors"
  ],
  "mistakes": [
   "Tall, bulky massing breaking the horizontal calm",
   "Small windows that block indoor–outdoor flow",
   "Heavy ornament or historical detailing",
   "Cold all-white palettes with no warmth",
   "Hiding the structural frame"
  ],
  "prompts": {
   "exterior": "Mid-century modern house exterior, low horizontal massing, deep flat overhanging roof, full-height glass walls, warm wood and stone, hillside view, golden hour, architectural photography --ar 3:2 --style raw",
   "facade": "Mid-century modern façade, post-and-beam frame, glass walls alternating with wood and stone, broad eaves, frontal elevation, warm light",
   "night": "Mid-century modern house exterior at night, glowing glass walls, floating roof plane, warm deck lighting, hillside, architectural night photography",
   "aerial": "Aerial of a mid-century modern house, long low roof, decks reaching into landscape, pool, drone photography, warm light",
   "street": "Street view of a mid-century modern home exterior, low roofline, carport, glass and wood, palm trees, documentary photography",
   "masterplan": "Mid-century modern neighbourhood masterplan, low horizontal houses, generous gardens, curved streets, axonometric, warm palette"
  },
  "gallery": [
   {
    "file": "Case Study House No. 22.JPG",
    "caption": "Stahl House — Koenig"
   },
   {
    "file": "https://images.unsplash.com/photo-1624501538579-294a267664fe",
    "caption": "Kaufmann Desert House"
   },
   {
    "file": "Eames House.jpg",
    "caption": "Eames House exterior"
   },
   {
    "file": "https://images.unsplash.com/photo-1628744448839-a475cc0e90c3",
    "caption": "Deep-eave study"
   },
   {
    "file": "",
    "caption": "Glass wall & deck"
   },
   {
    "file": "",
    "caption": "Post-and-beam"
   }
  ],
  "related": [
   "scandinavian",
   "tropical-modern",
   "modern"
  ]
 },
 {
  "slug": "prairie",
  "name": "Prairie Style",
  "era": 1900,
  "eraLabel": "1900 – 1920",
  "region": "USA Midwest",
  "mood": "Horizontal · Grounded · Organic",
  "tagline": "Long low horizontals married to the open prairie.",
  "banner": "Frederick C. Robie House.jpg",
  "overview": {
   "definition": "Prairie Style is an early American modern movement of strong horizontal lines, low-pitched roofs with broad eaves and bands of windows that echo the flat Midwestern landscape.",
   "history": "Pioneered by Frank Lloyd Wright and the Prairie School, it broke from Victorian verticality toward open, ground-hugging houses rooted in their site.",
   "origin": "American Midwest, c.1900–1920.",
   "timeline": [
    {
     "year": "1901",
     "event": "Wright's 'A Home in a Prairie Town'"
    },
    {
     "year": "1908",
     "event": "Robie House"
    },
    {
     "year": "1909",
     "event": "Prairie School at its height"
    },
    {
     "year": "1915",
     "event": "Influence spreads nationally"
    }
   ],
   "architects": [
    "Frank Lloyd Wright",
    "George Maher",
    "William Gray Purcell",
    "Marion Mahony Griffin"
   ],
   "projects": [
    {
     "name": "Robie House",
     "architect": "Frank Lloyd Wright",
     "year": "1910",
     "location": "Chicago, USA",
     "file": "Frederick C. Robie House.jpg"
    },
    {
     "name": "Meyer May House",
     "architect": "Frank Lloyd Wright",
     "year": "1909",
     "location": "Grand Rapids, USA",
     "file": ""
    },
    {
     "name": "Westcott House",
     "architect": "Frank Lloyd Wright",
     "year": "1908",
     "location": "Springfield, USA",
     "file": ""
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Horizontality",
    "Connection to the land",
    "Open plan",
    "Integral ornament",
    "Broad sheltering roofs"
   ],
   "thinking": "The house lies low against the prairie: emphatic horizontal bands, deep eaves and ribbon windows tie it to the ground and the open horizon.",
   "values": [
    "Belonging",
    "Openness",
    "Craft",
    "Domesticity"
   ],
   "why": "A break from Victorian fussiness toward an authentically American, ground-rooted, horizontal home for the open Midwest."
  },
  "visual": {
   "massing": "Long, low, ground-hugging masses with strong horizontal banding.",
   "form": "Horizontal extruded forms with broad overhanging hipped roofs.",
   "composition": "Cantilevered eaves and terraces layered horizontally.",
   "proportion": "Emphatically horizontal and human-scaled.",
   "geometry": "Orthogonal with banded geometry.",
   "rhythm": "Continuous horizontal bands of brick, sill and eave.",
   "symmetry": "Often symmetrical about a massive central chimney.",
   "scale": "Domestic and grounded.",
   "roofs": "Low-pitched hipped roofs with very broad overhanging eaves.",
   "windows": "Ribbon windows in horizontal bands; art-glass casements.",
   "entrance": "Sheltered, indirect, tucked beneath the eaves.",
   "facade": "Roman brick, banded sills, broad eaves and ribbon art-glass windows."
  },
  "materials": [
   {
    "name": "Roman brick",
    "hex": "#9a6a4e",
    "why": "Robust, modular and warm — the everyday material of solid walls."
   },
   {
    "name": "Limestone bands",
    "hex": "#d8cdb8",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Stucco",
    "hex": "#e0d8c6",
    "why": "Smooth render that unifies the wall and catches light."
   },
   {
    "name": "Timber trim",
    "hex": "#7a5a3a",
    "why": "Warm, renewable and tactile — softens and clads the exterior."
   },
   {
    "name": "Art glass",
    "hex": "#bcae7a",
    "why": "Admits light and dissolves the wall between inside and out."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Brick Tan",
     "hex": "#b08a64"
    },
    {
     "name": "Warm Ochre",
     "hex": "#caa84a"
    }
   ],
   "accent": [
    {
     "name": "Forest Green",
     "hex": "#46584b"
    },
    {
     "name": "Autumn Gold",
     "hex": "#b58a2a"
    }
   ],
   "material": [
    {
     "name": "Limestone",
     "hex": "#d8cdb8"
    },
    {
     "name": "Timber",
     "hex": "#7a5a3a"
    }
   ],
   "combos": [
    "Roman brick + limestone + green",
    "Ochre + brown + art-glass amber"
   ],
   "mood": "Earthy and warm — autumnal browns, golds and greens of the prairie."
  },
  "facadeGuide": {
   "window": "Ribbon windows in continuous horizontal bands; geometric art glass.",
   "emphasis": "Strongly horizontal — banded brick and broad eaves.",
   "shading": "Very broad overhanging eaves shade the windows.",
   "balconies": "Cantilevered terraces and low planters.",
   "frames": "Timber-trimmed art-glass casements.",
   "openings": "Bands of windows wrapping corners.",
   "details": "Banded brick, limestone copings, geometric art glass.",
   "ornament": "Integral and geometric — abstracted natural motifs in art glass and trim."
  },
  "lighting": {
   "natural": "Deep eaves soften light into banded ribbon windows; warm and sheltered.",
   "artificial": "Warm, low, integral lighting; art-glass lanterns.",
   "night": "Warm glow from ribbon windows beneath dark eaves.",
   "recommendations": "Warm 2700K; light the eave underside; glow the art glass."
  },
  "buildingTypes": [
   "Houses",
   "Clubhouses",
   "Libraries",
   "Banks",
   "Schools",
   "Civic buildings"
  ],
  "checklist": [
   "Make the massing long and low",
   "Use broad overhanging hipped roofs",
   "Band windows horizontally",
   "Anchor with a massive central chimney",
   "Use Roman brick and limestone bands",
   "Add geometric art glass",
   "Cantilever terraces and planters",
   "Keep an earthy autumnal palette"
  ],
  "mistakes": [
   "Vertical, tall proportions",
   "Steep complex roofs",
   "Punched single windows instead of bands",
   "Applied historical ornament",
   "Cold palettes denying the earthy warmth"
  ],
  "prompts": {
   "exterior": "Prairie style house exterior, long low horizontal massing, broad overhanging hipped roof, Roman brick bands, ribbon art-glass windows, central chimney, prairie setting, architectural photography --ar 3:2 --style raw",
   "facade": "Prairie style façade, horizontal brick banding, ribbon windows, broad eaves, limestone copings, geometric art glass, frontal elevation, warm light",
   "night": "Prairie style house exterior at night, warm glow from ribbon windows beneath dark eaves, lit art glass, architectural night photography",
   "aerial": "Aerial of a prairie style house, long low hipped roofs, terraces, gardens, flat landscape, drone photography",
   "street": "Street view of a prairie style house exterior, horizontal banding, broad eaves, art-glass windows, mature trees, documentary photography",
   "masterplan": "Prairie style estate masterplan, low horizontal houses, terraces and gardens on flat land, axonometric, earthy palette"
  },
  "gallery": [
   {
    "file": "Frederick C. Robie House.jpg",
    "caption": "Robie House"
   },
   {
    "file": "https://images.unsplash.com/photo-1729731322197-0d9282935266",
    "caption": "Horizontal banding"
   },
   {
    "file": "https://images.unsplash.com/photo-1729731322182-3e1de0a74d4a",
    "caption": "Ribbon art glass"
   },
   {
    "file": "",
    "caption": "Broad eaves"
   },
   {
    "file": "",
    "caption": "Roman-brick detail"
   },
   {
    "file": "",
    "caption": "Cantilevered terrace"
   }
  ],
  "related": [
   "organic",
   "mid-century-modern",
   "art-deco"
  ]
 },
 {
  "slug": "neo-classical",
  "name": "Neo-Classical",
  "era": 1790,
  "eraLabel": "1750s – 1900s (revived since)",
  "region": "Europe → Global",
  "mood": "Formal · Ordered · Dignified",
  "tagline": "Traditional, formal, symmetrical — columns and proportion.",
  "banner": "British Museum.jpg",
  "overview": {
   "definition": "Neoclassical architecture revives the orders and proportions of Greece and Rome — symmetrical, column-fronted, dignified exteriors of stone expressing reason, permanence and civic authority (secular civic examples only).",
   "history": "Driven by 18th-century archaeology and Enlightenment ideals, it became the language of museums, parliaments, banks and monuments worldwide.",
   "origin": "France, Britain and Italy, mid-18th century.",
   "timeline": [
    {
     "year": "1748",
     "event": "Excavation of Pompeii fuels revival"
    },
    {
     "year": "1830",
     "event": "Greek Revival peaks; Altes Museum"
    },
    {
     "year": "1852",
     "event": "British Museum façade completed"
    },
    {
     "year": "1900",
     "event": "Beaux-Arts civic grandeur worldwide"
    }
   ],
   "architects": [
    "Karl Friedrich Schinkel",
    "Robert Smirke",
    "Claude-Nicolas Ledoux",
    "John Soane"
   ],
   "projects": [
    {
     "name": "British Museum",
     "architect": "Robert Smirke",
     "year": "1852",
     "location": "London, UK",
     "file": "British Museum.jpg"
    },
    {
     "name": "Altes Museum",
     "architect": "Karl Friedrich Schinkel",
     "year": "1830",
     "location": "Berlin, Germany",
     "file": "Altes Museum Berlin.jpg"
    },
    {
     "name": "Brandenburg Gate",
     "architect": "Carl Gotthard Langhans",
     "year": "1791",
     "location": "Berlin, Germany",
     "file": "Brandenburg Gate.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "The classical orders",
    "Symmetry & axiality",
    "Harmonic proportion",
    "Hierarchy & decorum",
    "Permanence"
   ],
   "thinking": "Universal rational rules of beauty inherited from antiquity: proportion governs all, the orders provide a disciplined grammar, and symmetry expresses order and civic virtue.",
   "values": [
    "Reason",
    "Authority",
    "Civic virtue",
    "Timelessness"
   ],
   "why": "Enlightenment rationalism and admiration for Greece and Rome — architecture to embody law, reason and enduring institutions."
  },
  "visual": {
   "massing": "Symmetrical balanced blocks with a dominant central portico and wings.",
   "form": "Clear geometric volumes governed by the columned portico front.",
   "composition": "Strict axial symmetry; base–piano nobile–entablature.",
   "proportion": "From the classical orders; columns set the module.",
   "geometry": "Rectilinear with the pediment triangle and colonnade.",
   "rhythm": "Regular colonnades — measured intercolumniation.",
   "symmetry": "Strict bilateral symmetry about a central axis.",
   "scale": "Monumental and dignified.",
   "roofs": "Low pitched roofs behind parapets; pediments crowning.",
   "windows": "Vertically proportioned, symmetric, often with pediments/architraves.",
   "entrance": "Grand central portico with columns and pediment on a podium.",
   "facade": "Columned orders, entablatures, pediments and pilasters in stone over a rusticated base."
  },
  "materials": [
   {
    "name": "Limestone & marble",
    "hex": "#e2d8c6",
    "why": "Noble, durable, carvable — the medium of the orders."
   },
   {
    "name": "Ashlar stone",
    "hex": "#d3c8b4",
    "why": "Precisely cut blocks expressing refinement."
   },
   {
    "name": "Rusticated stone",
    "hex": "#c1b6a0",
    "why": "Heavy grooved masonry grounding the base."
   },
   {
    "name": "Bronze",
    "hex": "#9c7b40",
    "why": "Doors, statuary and enrichment."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Limestone Cream",
     "hex": "#e4dac6"
    },
    {
     "name": "Marble White",
     "hex": "#efe9dc"
    }
   ],
   "accent": [
    {
     "name": "Verdigris Bronze",
     "hex": "#5e7d6f"
    },
    {
     "name": "Pompeian Red",
     "hex": "#9c3b2e"
    }
   ],
   "material": [
    {
     "name": "Stone Grey",
     "hex": "#c1b6a0"
    },
    {
     "name": "Gold Leaf",
     "hex": "#c8a14a"
    }
   ],
   "combos": [
    "All-stone monochrome with bronze",
    "Cream stone + Pompeian red"
   ],
   "mood": "Dignified, serene, authoritative — warm stone neutrals with noble accents."
  },
  "facadeGuide": {
   "window": "Vertically proportioned, symmetric, in regular bays; crown with pediments/architraves.",
   "emphasis": "Balanced — vertical columns within a horizontal entablature.",
   "shading": "Deep porticoes, colonnades and loggias for shade and shadow.",
   "balconies": "Stone balustraded balconies on the principal floor.",
   "frames": "Stone architraves, pediments and surrounds.",
   "openings": "Symmetrical and hierarchical — grander on the principal floor.",
   "details": "Cornices, dentils, capitals, pilasters per the chosen order.",
   "ornament": "Essential but rule-bound — derived from the orders, correct and hierarchical."
  },
  "lighting": {
   "natural": "Colonnades choreograph light and shadow; symmetric openings give even daylight.",
   "artificial": "Warm light grazing stone; uplit columns.",
   "night": "Floodlit porticoes; columns modelled by uplight; pediment silhouetted.",
   "recommendations": "Warm 2700K to flatter stone; uplight columns and pediment."
  },
  "buildingTypes": [
   "Museums & galleries",
   "Parliaments & courts",
   "Banks",
   "Universities",
   "Memorials",
   "Libraries"
  ],
  "checklist": [
   "Establish strict symmetry about a central axis",
   "Front with a columned portico and pediment",
   "Choose and correctly proportion an order",
   "Organise base–piano nobile–entablature",
   "Raise on a podium with steps",
   "Use stone with carved mouldings",
   "Keep ornament rule-bound and hierarchical",
   "Crown with pediment or balustraded parapet"
  ],
  "mistakes": [
   "Incorrect proportions or mixed orders",
   "Asymmetry breaking the discipline",
   "Thin 'stuck-on' columns with no entablature logic",
   "Over- or under-scaled details",
   "Mirror glass clashing with the language"
  ],
  "prompts": {
   "exterior": "Neoclassical museum exterior, symmetrical limestone façade, grand colonnade and pediment, raised on a podium with steps, blue sky, monumental, frontal architectural photography --ar 3:2 --style raw",
   "facade": "Neoclassical façade elevation, regular colonnade, entablature with dentils, pedimented windows, rusticated base, strict symmetry, stone, high detail",
   "night": "Neoclassical civic building exterior at night, floodlit colonnade, uplit columns casting deep shadow, dignified, architectural night photography",
   "aerial": "Aerial of a Neoclassical civic complex, symmetrical wings around a central portico, axial forecourt, formal gardens, drone view",
   "street": "Street view approaching a Neoclassical museum, grand portico and steps, columns, pedestrians for scale, dignified, documentary photography",
   "masterplan": "Neoclassical civic masterplan, strict axial symmetry, ceremonial boulevard, formal squares, Beaux-Arts plan, stone palette"
  },
  "gallery": [
   {
    "file": "British Museum.jpg",
    "caption": "British Museum portico"
   },
   {
    "file": "Altes Museum Berlin.jpg",
    "caption": "Altes Museum — Schinkel"
   },
   {
    "file": "Brandenburg Gate.jpg",
    "caption": "Brandenburg Gate"
   },
   {
    "file": "https://images.unsplash.com/photo-1523292864699-4dcfd824dae2",
    "caption": "Colonnade study"
   },
   {
    "file": "https://images.unsplash.com/photo-1676517243531-69e3b27276e9",
    "caption": "Entablature detail"
   },
   {
    "file": "",
    "caption": "Pediment & order"
   }
  ],
  "related": [
   "art-deco",
   "modern",
   "contemporary"
  ]
 },
 {
  "slug": "classical",
  "name": "Classical",
  "era": -400,
  "eraLabel": "Antiquity (8th c. BCE – 4th c. CE)",
  "region": "Greece · Rome",
  "mood": "Ordered · Monumental · Eternal",
  "tagline": "The original orders — column, pediment and proportion.",
  "banner": "The Parthenon in Athens.jpg",
  "overview": {
   "definition": "Classical architecture is the architecture of ancient Greece and Rome — the orders (Doric, Ionic, Corinthian), the colonnade and pediment, governed by harmonic proportion and symmetry.",
   "history": "From Greek temples to Roman civic grandeur, it established the columnar grammar, proportion and monumental dignity that the West would revive for two millennia.",
   "origin": "Ancient Greece and Rome.",
   "timeline": [
    {
     "year": "c.447 BCE",
     "event": "The Parthenon, Athens"
    },
    {
     "year": "c.27 BCE",
     "event": "Maison Carrée, Nîmes"
    },
    {
     "year": "c.118 CE",
     "event": "The Pantheon, Rome"
    },
    {
     "year": "c.80 CE",
     "event": "The Colosseum"
    }
   ],
   "architects": [
    "Iktinos & Kallikrates",
    "Apollodorus of Damascus",
    "Vitruvius (theorist)"
   ],
   "projects": [
    {
     "name": "The Parthenon",
     "architect": "Iktinos & Kallikrates",
     "year": "447 BCE",
     "location": "Athens, Greece",
     "file": "The Parthenon in Athens.jpg"
    },
    {
     "name": "The Pantheon",
     "architect": "Apollodorus (attr.)",
     "year": "118 CE",
     "location": "Rome, Italy",
     "file": "Pantheon Rome.jpg"
    },
    {
     "name": "Maison Carrée",
     "architect": "Roman",
     "year": "16 BCE",
     "location": "Nîmes, France",
     "file": "Maison Carree in Nimes (16).jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "The classical orders",
    "Symmetry & axiality",
    "Harmonic proportion",
    "Monumentality",
    "Post-and-lintel order"
   ],
   "thinking": "Beauty arises from a fixed, rational system of orders and proportions; the temple front, colonnade and pediment express civic and sacred dignity through perfect balance.",
   "values": [
    "Order",
    "Reason",
    "Permanence",
    "Civic & sacred dignity"
   ],
   "why": "The foundational search for ideal, rational beauty in built form — a grammar of columns and proportion that defined Western architecture."
  },
  "visual": {
   "massing": "Symmetrical rectangular temple masses ringed or fronted by colonnades.",
   "form": "Clear geometric volumes; the temple, the dome, the arch.",
   "composition": "Strict axial symmetry; base–column–entablature–pediment.",
   "proportion": "Governed by the orders; the column diameter sets the module.",
   "geometry": "Rectilinear with the pediment triangle, arch and dome.",
   "rhythm": "Regular colonnades — measured intercolumniation.",
   "symmetry": "Strict bilateral symmetry.",
   "scale": "Monumental and heroic.",
   "roofs": "Low-pitched gable roofs behind pediments; domes and vaults.",
   "windows": "Few; vertically proportioned within the order.",
   "entrance": "Grand central portico raised on a stepped stylobate.",
   "facade": "Columned orders, entablatures, pediments, triglyphs and friezes in stone and marble."
  },
  "materials": [
   {
    "name": "Marble",
    "hex": "#ece6d8",
    "why": "Noble, fine-grained and carvable — conveys permanence and refinement."
   },
   {
    "name": "Limestone",
    "hex": "#ddd0bb",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Travertine",
    "hex": "#d8c4a8",
    "why": "Warm, textured stone for monumental walls and bases."
   },
   {
    "name": "Bronze",
    "hex": "#9c7b40",
    "why": "Rich metal for doors, trim and ornamental enrichment."
   },
   {
    "name": "Terracotta",
    "hex": "#b5633a",
    "why": "Warm fired clay for tiles, ornament and roofs."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Marble White",
     "hex": "#efe9dc"
    },
    {
     "name": "Limestone Cream",
     "hex": "#e4dac6"
    }
   ],
   "accent": [
    {
     "name": "Pompeian Red",
     "hex": "#9c3b2e"
    },
    {
     "name": "Bronze",
     "hex": "#9c7b40"
    },
    {
     "name": "Verdigris",
     "hex": "#5e7d6f"
    }
   ],
   "material": [
    {
     "name": "Stone",
     "hex": "#ddd0bb"
    },
    {
     "name": "Travertine",
     "hex": "#d8c4a8"
    }
   ],
   "combos": [
    "All-marble monochrome",
    "Stone + Pompeian red + bronze"
   ],
   "mood": "Dignified and eternal — sun-warmed marble and stone with noble accents."
  },
  "facadeGuide": {
   "window": "Few, vertically-proportioned openings disciplined by the order.",
   "emphasis": "Balanced — vertical columns within a horizontal entablature.",
   "shading": "Deep colonnades and porticoes give shade and shadow.",
   "balconies": "Stone galleries between columns.",
   "frames": "Stone architraves and surrounds.",
   "openings": "Symmetrical and hierarchical.",
   "details": "Capitals, triglyphs, metopes, dentils and friezes per the order.",
   "ornament": "Essential and rule-bound — the orders are the ornament."
  },
  "lighting": {
   "natural": "Colonnades choreograph sun and deep shadow; even, balanced daylight.",
   "artificial": "Warm light grazing marble; uplit columns.",
   "night": "Floodlit colonnades; columns modelled by uplight; pediment silhouetted.",
   "recommendations": "Warm 2700K to flatter marble; uplight columns and pediment."
  },
  "buildingTypes": [
   "Temples & monuments",
   "Civic & government",
   "Theatres & amphitheatres",
   "Museums",
   "Memorials",
   "Baths"
  ],
  "checklist": [
   "Choose and correctly proportion an order",
   "Front the building with a colonnade and pediment",
   "Raise it on a stepped stylobate",
   "Keep strict axial symmetry",
   "Use marble or fine stone",
   "Detail the entablature correctly",
   "Organise base–column–entablature–pediment",
   "Keep ornament rule-bound"
  ],
  "mistakes": [
   "Mixing orders incorrectly",
   "Wrong proportions or spacing",
   "Asymmetry breaking the discipline",
   "Thin, flat applied columns",
   "Modern materials clashing with the language"
  ],
  "prompts": {
   "exterior": "Classical Greek temple exterior, symmetrical marble colonnade, Doric columns, pediment, raised on a stepped stylobate, blue sky, monumental, frontal architectural photography --ar 3:2 --style raw",
   "facade": "Classical façade elevation, colonnade with entablature, triglyphs and pediment, marble, strict symmetry, measured proportion, high detail",
   "night": "Classical temple exterior at night, floodlit marble colonnade, uplit columns casting deep shadow, monumental, architectural night photography",
   "aerial": "Aerial of a classical forum, symmetrical colonnaded temple on axis, plaza, drone view, daylight",
   "street": "Street view approaching a classical temple, stepped stylobate and colonnade, columns, people for scale, dignified, documentary photography",
   "masterplan": "Classical civic masterplan, axial symmetry, colonnaded temple, forum and porticoes, plan drawing, marble palette"
  },
  "gallery": [
   {
    "file": "The Parthenon in Athens.jpg",
    "caption": "The Parthenon"
   },
   {
    "file": "Pantheon Rome.jpg",
    "caption": "The Pantheon"
   },
   {
    "file": "Maison Carree in Nimes (16).jpg",
    "caption": "Maison Carrée"
   },
   {
    "file": "https://images.unsplash.com/photo-1531816458010-fb7685eecbcb",
    "caption": "Colonnade study"
   },
   {
    "file": "https://images.unsplash.com/photo-1605707141131-aa742dcf4671",
    "caption": "Capital & entablature"
   },
   {
    "file": "",
    "caption": "Pediment order"
   }
  ],
  "related": [
   "neo-classical",
   "renaissance",
   "beaux-arts"
  ]
 },
 {
  "slug": "renaissance",
  "name": "Renaissance",
  "era": 1450,
  "eraLabel": "15th – 16th century",
  "region": "Italy → Europe",
  "mood": "Harmonious · Proportioned · Humanist",
  "tagline": "The rebirth of classical order and human proportion.",
  "banner": "Villa della Rotonda (Palladio).jpg",
  "overview": {
   "definition": "Renaissance architecture revived classical antiquity through harmony, symmetry and mathematical proportion — ordered façades, rusticated bases, round arches and crowning cornices.",
   "history": "Beginning in 15th-century Florence, architects rediscovered Roman principles and a humanist faith in proportion, creating palazzos, villas and domes of serene balance.",
   "origin": "Florence and Italy, 15th–16th century; spread across Europe.",
   "timeline": [
    {
     "year": "1436",
     "event": "Brunelleschi's Florence dome"
    },
    {
     "year": "1450",
     "event": "Alberti codifies the theory"
    },
    {
     "year": "1567",
     "event": "Palladio's Villa Rotonda"
    },
    {
     "year": "1580",
     "event": "Palladianism spreads"
    }
   ],
   "architects": [
    "Filippo Brunelleschi",
    "Leon Battista Alberti",
    "Andrea Palladio",
    "Donato Bramante"
   ],
   "projects": [
    {
     "name": "Villa La Rotonda",
     "architect": "Andrea Palladio",
     "year": "1567",
     "location": "Vicenza, Italy",
     "file": "Villa della Rotonda (Palladio).jpg"
    },
    {
     "name": "Palazzo Medici Riccardi",
     "architect": "Michelozzo",
     "year": "1460",
     "location": "Florence, Italy",
     "file": "Firenze - Florence - Via Camillo Cavour - View SW on Palazzo Medici Riccardi 1460.jpg"
    },
    {
     "name": "Tempietto",
     "architect": "Donato Bramante",
     "year": "1502",
     "location": "Rome, Italy",
     "file": "Tempietto di San Pietro in Montorio.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Harmonic proportion",
    "Symmetry & order",
    "Classical orders revived",
    "Humanism",
    "Geometric clarity"
   ],
   "thinking": "Façades are composed as balanced mathematical wholes — superimposed orders, rusticated bases and serene symmetry expressing humanist confidence in reason and proportion.",
   "values": [
    "Harmony",
    "Humanism",
    "Reason",
    "Civic pride"
   ],
   "why": "A rebirth of classical learning and proportion, asserting human reason and balance after the medieval era."
  },
  "visual": {
   "massing": "Symmetrical cubic palazzo blocks around courtyards; centrally-planned villas.",
   "form": "Clear geometric volumes governed by proportion and the round arch.",
   "composition": "Tripartite, symmetrical, superimposed orders.",
   "proportion": "Harmonic ratios; storeys diminishing upward.",
   "geometry": "Rectilinear with round arches, domes and circles.",
   "rhythm": "Regular bays of arched windows.",
   "symmetry": "Strict bilateral symmetry.",
   "scale": "Dignified and balanced.",
   "roofs": "Low-pitched or hidden roofs; hemispherical domes; bold cornices.",
   "windows": "Round-arched, pedimented, symmetrically arranged.",
   "entrance": "Central, axial, framed by an order or rustication.",
   "facade": "Rusticated base, pilasters and engaged columns, arched windows and a strong crowning cornice."
  },
  "materials": [
   {
    "name": "Pietra serena / stone",
    "hex": "#b9b0a0",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Stucco",
    "hex": "#e6ddc9",
    "why": "Smooth render that unifies the wall and catches light."
   },
   {
    "name": "Rusticated stone",
    "hex": "#c5b89f",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Terracotta tile",
    "hex": "#b5633a",
    "why": "Warm fired clay for tiles, ornament and roofs."
   },
   {
    "name": "Marble inlay",
    "hex": "#ddd4c4",
    "why": "Noble, fine-grained and carvable — conveys permanence and refinement."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Stone Cream",
     "hex": "#e2d6c1"
    },
    {
     "name": "Warm Stucco",
     "hex": "#e6ddc9"
    }
   ],
   "accent": [
    {
     "name": "Pietra Serena Grey",
     "hex": "#8c8a82"
    },
    {
     "name": "Tuscan Red",
     "hex": "#9c4a3a"
    },
    {
     "name": "Gold",
     "hex": "#c8a14a"
    }
   ],
   "material": [
    {
     "name": "Stone",
     "hex": "#c5b89f"
    },
    {
     "name": "Terracotta",
     "hex": "#b5633a"
    }
   ],
   "combos": [
    "Cream stucco + grey stone trim",
    "Stone + Tuscan red + gold"
   ],
   "mood": "Serene and humanist — warm stone and stucco with restrained noble accents."
  },
  "facadeGuide": {
   "window": "Round-arched and pedimented windows in regular, symmetrical bays.",
   "emphasis": "Balanced — superimposed orders with horizontal storey cornices.",
   "shading": "Deep reveals, loggias and arcaded courtyards.",
   "balconies": "Arcaded loggias and balustraded balconies.",
   "frames": "Stone architraves, pediments and surrounds.",
   "openings": "Symmetrical, hierarchical, diminishing upward.",
   "details": "Rustication, pilasters, string-courses and a bold cornice.",
   "ornament": "Rule-bound classical ornament — orders, arches and cornices, in proportion."
  },
  "lighting": {
   "natural": "Arcaded loggias and courtyards balance light and shade; even symmetrical daylight.",
   "artificial": "Warm light grazing stone; lit loggias and cornices.",
   "night": "Floodlit façades; uplit cornice and dome; arcades in shadow.",
   "recommendations": "Warm 2700K; uplight the cornice and dome; model the rustication."
  },
  "buildingTypes": [
   "Palazzos & villas",
   "Civic & government",
   "Libraries",
   "Museums",
   "Universities",
   "Courtyard buildings"
  ],
  "checklist": [
   "Compose a symmetrical, proportioned façade",
   "Use superimposed classical orders",
   "Rusticate the base",
   "Arrange round-arched windows in regular bays",
   "Crown with a bold cornice",
   "Organise around an arcaded courtyard",
   "Use warm stone and stucco",
   "Keep ornament rule-bound and harmonic"
  ],
  "mistakes": [
   "Asymmetry breaking the harmony",
   "Disproportioned or mixed orders",
   "Flat façades with no base/cornice hierarchy",
   "Over-busy ornament losing the serenity",
   "Modern materials clashing with the stone language"
  ],
  "prompts": {
   "exterior": "Italian Renaissance palazzo exterior, symmetrical stone façade, rusticated base, superimposed orders, round-arched windows, bold crowning cornice, warm light, frontal architectural photography --ar 3:2 --style raw",
   "facade": "Renaissance façade elevation, rusticated base, pilasters, arched pedimented windows, string-courses, strong cornice, symmetry, high detail",
   "night": "Renaissance palazzo exterior at night, floodlit stone façade, uplit cornice and rustication, arcaded loggia in shadow, architectural night photography",
   "aerial": "Aerial of a Renaissance villa, centrally-planned symmetrical block, dome, formal gardens on axis, drone view",
   "street": "Street view of a Renaissance palazzo, rusticated base, arched windows, grand cornice, piazza, documentary photography",
   "masterplan": "Renaissance masterplan, axial symmetry, arcaded piazza, domed centrepiece, formal gardens, plan drawing, stone palette"
  },
  "gallery": [
   {
    "file": "Villa della Rotonda (Palladio).jpg",
    "caption": "Villa La Rotonda"
   },
   {
    "file": "Firenze - Florence - Via Camillo Cavour - View SW on Palazzo Medici Riccardi 1460.jpg",
    "caption": "Palazzo Medici"
   },
   {
    "file": "Tempietto di San Pietro in Montorio.jpg",
    "caption": "Tempietto"
   },
   {
    "file": "https://images.unsplash.com/photo-1525874684015-58379d421a52",
    "caption": "Rusticated base"
   },
   {
    "file": "https://images.unsplash.com/photo-1541513410614-f91348bb4c4f",
    "caption": "Arched-window bay"
   },
   {
    "file": "",
    "caption": "Crowning cornice"
   }
  ],
  "related": [
   "classical",
   "baroque",
   "beaux-arts"
  ]
 },
 {
  "slug": "baroque",
  "name": "Baroque",
  "era": 1600,
  "eraLabel": "17th – 18th century",
  "region": "Italy → Europe",
  "mood": "Dramatic · Dynamic · Ornate",
  "tagline": "Movement, drama and grandeur in stone.",
  "banner": "Chateau de Versailles.jpg",
  "overview": {
   "definition": "Baroque architecture overwhelms with drama and movement — curving façades, bold projections, rich ornament and theatrical play of light and shadow on monumental, dynamic exteriors.",
   "history": "Emerging in 17th-century Rome, the Baroque used undulating walls, sculpture and sweeping geometry to inspire awe in palaces and grand civic ensembles.",
   "origin": "Rome and Italy, 17th century; across Catholic Europe.",
   "timeline": [
    {
     "year": "1656",
     "event": "Bernini's St Peter's Square colonnade"
    },
    {
     "year": "1667",
     "event": "Borromini's dynamic façades"
    },
    {
     "year": "1682",
     "event": "Palace of Versailles expands"
    },
    {
     "year": "1750",
     "event": "Late Baroque across Europe"
    }
   ],
   "architects": [
    "Gian Lorenzo Bernini",
    "Francesco Borromini",
    "Louis Le Vau",
    "Balthasar Neumann"
   ],
   "projects": [
    {
     "name": "Palace of Versailles",
     "architect": "Le Vau & Hardouin-Mansart",
     "year": "1682",
     "location": "Versailles, France",
     "file": "Chateau de Versailles.jpg"
    },
    {
     "name": "St Peter's Square colonnade",
     "architect": "Gian Lorenzo Bernini",
     "year": "1667",
     "location": "Vatican City",
     "file": "Colonnades in Saint Peter's Square-Architecture by Gianlorenzo Bernini.jpg"
    },
    {
     "name": "Würzburg Residence",
     "architect": "Balthasar Neumann",
     "year": "1744",
     "location": "Würzburg, Germany",
     "file": "Würzburg Residenz.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Drama & movement",
    "Curving, dynamic form",
    "Grandeur & scale",
    "Rich ornament",
    "Theatrical light"
   ],
   "thinking": "The exterior is staged for emotional impact — walls undulate, orders break forward and back, and sculpture and light create restless, awe-inspiring movement.",
   "values": [
    "Awe",
    "Power",
    "Splendour",
    "Theatricality"
   ],
   "why": "A bold assertion of authority and faith, using overwhelming grandeur, motion and emotion to inspire and impress."
  },
  "visual": {
   "massing": "Massive dynamic masses with projecting and receding bays; sweeping wings.",
   "form": "Curving, undulating, sculptural forms with bold relief.",
   "composition": "Dynamic, layered, with strong central emphasis and movement.",
   "proportion": "Monumental and exaggerated.",
   "geometry": "Curves, ovals, broken pediments and dramatic diagonals.",
   "rhythm": "Restless, syncopated, advancing-and-retreating.",
   "symmetry": "Symmetrical but dynamic and theatrical.",
   "scale": "Vast and overwhelming.",
   "roofs": "Steep, complex roofs, domes, cupolas and balustraded parapets.",
   "windows": "Tall, richly framed, with broken and segmental pediments.",
   "entrance": "Grand, projecting, sculptural central portal.",
   "facade": "Undulating walls, giant orders, sculpture, broken pediments and lavish carved ornament."
  },
  "materials": [
   {
    "name": "Stone & marble",
    "hex": "#ddd2bf",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Stucco",
    "hex": "#e8dcc4",
    "why": "Smooth render that unifies the wall and catches light."
   },
   {
    "name": "Gilded bronze",
    "hex": "#c8a14a",
    "why": "Rich metal for doors, trim and ornamental enrichment."
   },
   {
    "name": "Travertine",
    "hex": "#d8c4a8",
    "why": "Warm, textured stone for monumental walls and bases."
   },
   {
    "name": "Slate (roofs)",
    "hex": "#5a5d62",
    "why": "Durable dark roofing that crowns the silhouette."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Stone Cream",
     "hex": "#e4dac6"
    },
    {
     "name": "Marble White",
     "hex": "#efe9dc"
    }
   ],
   "accent": [
    {
     "name": "Gold",
     "hex": "#c8a14a"
    },
    {
     "name": "Royal Blue",
     "hex": "#2f4f8c"
    },
    {
     "name": "Deep Red",
     "hex": "#8c2f2f"
    }
   ],
   "material": [
    {
     "name": "Travertine",
     "hex": "#d8c4a8"
    },
    {
     "name": "Bronze",
     "hex": "#9c7b40"
    }
   ],
   "combos": [
    "Cream stone + gold + slate",
    "Stone + royal blue + gilt"
   ],
   "mood": "Opulent and theatrical — warm stone with gold, deep blue and rich accents."
  },
  "facadeGuide": {
   "window": "Tall windows with broken and segmental pediments, richly framed.",
   "emphasis": "Dynamic — projecting central bays and giant orders.",
   "shading": "Deep reveals, projecting cornices and sculpture cast bold shadow.",
   "balconies": "Sculptural balconies on carved consoles.",
   "frames": "Carved stone surrounds with broken pediments.",
   "openings": "Hierarchical, grand at the centre, rhythmically advancing.",
   "details": "Giant orders, sculpture, scrolls, broken pediments, cartouches.",
   "ornament": "Lavish and theatrical — sculpture and carved ornament are essential."
  },
  "lighting": {
   "natural": "Projecting and receding masses create dramatic, restless self-shadowing.",
   "artificial": "Warm, dramatic; gilt and sculpture catch the light.",
   "night": "Floodlit undulating façades; uplit domes and sculpture; deep shadow.",
   "recommendations": "Warm 2700–3000K; dramatise relief and sculpture; silhouette domes."
  },
  "buildingTypes": [
   "Palaces",
   "Civic & government",
   "Theatres & opera",
   "Grand ensembles",
   "Monuments",
   "Universities"
  ],
  "checklist": [
   "Make the façade move — project and recede bays",
   "Use curves, ovals and broken pediments",
   "Add giant orders and sculpture",
   "Stage dramatic light and shadow",
   "Crown with domes, cupolas and steep roofs",
   "Use rich stone with gilt accents",
   "Emphasise a grand central portal",
   "Keep symmetry but make it theatrical"
  ],
  "mistakes": [
   "Flat, static façades with no movement",
   "Timid, sparse ornament",
   "Asymmetry without grandeur",
   "Thin, mean detailing at large scale",
   "Cold palettes denying the opulence"
  ],
  "prompts": {
   "exterior": "Baroque palace exterior, dynamic undulating stone façade, projecting central bay, giant orders, sculpture, domes and steep roofs, dramatic light, monumental, architectural photography --ar 3:2 --style raw",
   "facade": "Baroque façade, projecting and receding bays, giant pilasters, broken pediments, sculpture, rich carved ornament, frontal elevation, dramatic shadow",
   "night": "Baroque palace exterior at night, floodlit undulating façade, uplit dome and sculpture, deep shadow, theatrical architectural night photography",
   "aerial": "Aerial of a Baroque palace ensemble, sweeping symmetrical wings, domes, vast formal gardens on axis, drone view",
   "street": "Street view of a Baroque civic building, projecting sculptural portal, giant orders, broken pediments, plaza, documentary photography",
   "masterplan": "Baroque masterplan, grand axial avenues, sweeping wings, domed centrepiece, formal gardens and fountains, plan drawing, stone-and-gold palette"
  },
  "gallery": [
   {
    "file": "Chateau de Versailles.jpg",
    "caption": "Palace of Versailles"
   },
   {
    "file": "Colonnades in Saint Peter's Square-Architecture by Gianlorenzo Bernini.jpg",
    "caption": "St Peter's colonnade"
   },
   {
    "file": "Würzburg Residenz.jpg",
    "caption": "Würzburg Residence"
   },
   {
    "file": "https://images.unsplash.com/photo-1549895058-36748fa6c6a7",
    "caption": "Undulating façade"
   },
   {
    "file": "https://images.unsplash.com/photo-1640866850167-67501fadf502",
    "caption": "Broken pediment"
   },
   {
    "file": "",
    "caption": "Sculptural portal"
   }
  ],
  "related": [
   "renaissance",
   "beaux-arts",
   "neo-classical"
  ]
 },
 {
  "slug": "art-deco",
  "name": "Art Deco",
  "era": 1925,
  "eraLabel": "1920s – 1940s",
  "region": "France → USA → Global",
  "mood": "Glamorous · Geometric · Decorative",
  "tagline": "Glamorous, geometric, decorative — strong lines and symmetry.",
  "banner": "Chrysler Building - 05.jpg",
  "overview": {
   "definition": "Art Deco is a decorative modern style marrying streamlined geometry with stylised ornament — stepped, symmetrical, vertical exteriors celebrating progress, speed and luxury.",
   "history": "Named for the 1925 Paris Exposition, Deco swept from luxury goods to the great stepped skyscrapers of 1930s America.",
   "origin": "Paris 1925; flourished in New York, Miami and worldwide.",
   "timeline": [
    {
     "year": "1925",
     "event": "Paris Exposition gives the style its name"
    },
    {
     "year": "1930",
     "event": "Chrysler Building completed"
    },
    {
     "year": "1931",
     "event": "Empire State Building tops out"
    },
    {
     "year": "1939",
     "event": "Streamline Moderne peaks"
    }
   ],
   "architects": [
    "William Van Alen",
    "Raymond Hood",
    "Ely Jacques Kahn",
    "Claud Beelman"
   ],
   "projects": [
    {
     "name": "Chrysler Building",
     "architect": "William Van Alen",
     "year": "1930",
     "location": "New York, USA",
     "file": "Chrysler Building - 05.jpg"
    },
    {
     "name": "Empire State Building",
     "architect": "Shreve, Lamb & Harmon",
     "year": "1931",
     "location": "New York, USA",
     "file": "Empire State Building.jpg"
    },
    {
     "name": "Eastern Columbia Building",
     "architect": "Claud Beelman",
     "year": "1930",
     "location": "Los Angeles, USA",
     "file": "Eastern Columbia Building.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Modernity through ornament",
    "Verticality & aspiration",
    "Symmetry & order",
    "Luxury materials",
    "Stylised geometry"
   ],
   "thinking": "Deco disciplines decoration into geometric, machine-inspired motifs, expressing optimism and the romance of technology through controlled ornament and soaring form.",
   "values": [
    "Glamour",
    "Progress",
    "Aspiration",
    "Craftsmanship"
   ],
   "why": "The prosperity and technological exuberance of the 1920s — to look modern and luxurious at once."
  },
  "visual": {
   "massing": "Stepped, setback towers tapering to an ornamental crown; strong vertical thrust.",
   "form": "Geometric, symmetrical, ziggurat profiles.",
   "composition": "Tripartite base–shaft–crown with emphatic vertical piers.",
   "proportion": "Tall and slender; ornament at base and summit.",
   "geometry": "Zigzags, chevrons, sunbursts, stepped forms.",
   "rhythm": "Strong vertical fluting and decorative bands.",
   "symmetry": "Highly symmetrical and axial.",
   "scale": "Monumental and theatrical at the crown.",
   "roofs": "Ornamental stepped crowns, spires and decorative parapets.",
   "windows": "Vertical strips emphasised by raised piers and spandrel ornament.",
   "entrance": "Grand, symmetrical, lavishly decorated portal.",
   "facade": "Vertical piers with decorative metal/terracotta spandrels and carved geometric motifs."
  },
  "materials": [
   {
    "name": "Polished stone & marble",
    "hex": "#d8cabb",
    "why": "Conveys luxury at the base."
   },
   {
    "name": "Stainless steel / chrome",
    "hex": "#b9bfc2",
    "why": "Gleaming machine-age crowns and trim."
   },
   {
    "name": "Glazed terracotta",
    "hex": "#e3d2a8",
    "why": "Colourful, repeatable cast ornament."
   },
   {
    "name": "Bronze & brass",
    "hex": "#9c7b40",
    "why": "Rich metalwork for portals and grilles."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Cream Stone",
     "hex": "#e6dac6"
    },
    {
     "name": "Black",
     "hex": "#1d1b18"
    }
   ],
   "accent": [
    {
     "name": "Gold",
     "hex": "#c8a14a"
    },
    {
     "name": "Jade",
     "hex": "#2f7a6a"
    },
    {
     "name": "Deco Teal",
     "hex": "#1f5f6b"
    }
   ],
   "material": [
    {
     "name": "Chrome",
     "hex": "#b9bfc2"
    },
    {
     "name": "Bronze",
     "hex": "#9c7b40"
    }
   ],
   "combos": [
    "Black + gold + cream",
    "Jade + chrome + black",
    "Coral + teal (Miami)"
   ],
   "mood": "Opulent, theatrical, confident — high contrast with metallic glamour."
  },
  "facadeGuide": {
   "window": "Group vertically between raised piers; emphasise the upward line.",
   "emphasis": "Strongly vertical — continuous piers to an ornamental crown.",
   "shading": "Recessed spandrels; ornament doubles as relief and shadow.",
   "balconies": "Rare; decorative metal railings with geometric patterns.",
   "frames": "Metal frames with chevron or sunburst detail.",
   "openings": "Tall, narrow, repeated, sometimes stepped heads.",
   "details": "Chevrons, zigzags, sunbursts, fluting, stylised motifs.",
   "ornament": "Essential and celebrated — geometric, symmetrical, at base, entrance and crown."
  },
  "lighting": {
   "natural": "Reflective stone and metal animate daylight; deep ornament casts crisp shadow.",
   "artificial": "Hidden cove lighting, neon accents and illuminated crowns.",
   "night": "Floodlit setbacks and a glowing metallic crown; theatrical drama.",
   "recommendations": "Warm gold light on stone; accent crown and entrance; tasteful neon."
  },
  "buildingTypes": [
   "High-rise towers",
   "Cinemas & theatres",
   "Hotels",
   "Civic buildings",
   "Department stores",
   "Terminals"
  ],
  "checklist": [
   "Compose a stepped, setback tower with ornamental crown",
   "Emphasise verticality with continuous piers",
   "Organise base–shaft–crown",
   "Add geometric ornament (chevrons, sunbursts)",
   "Use luxury materials — marble, bronze, chrome",
   "Design a grand symmetrical entrance",
   "Use rich high-contrast colour with metallics",
   "Keep ornament stylised and geometric"
  ],
  "mistakes": [
   "Random or asymmetrical composition",
   "Organic Art-Nouveau ornament instead of geometric",
   "Flat unadorned façades with no crown/base",
   "Cheap finishes undercutting the luxury",
   "Over-ornamenting every surface"
  ],
  "prompts": {
   "exterior": "Art Deco skyscraper exterior, stepped setback tower, vertical limestone piers, ornamental stainless-steel sunburst crown, golden hour, monumental, dramatic upward angle, architectural photography --ar 2:3 --style raw",
   "facade": "Art Deco façade, geometric chevron and sunburst ornament, vertical fluting, glazed terracotta spandrels, bronze entrance, symmetrical elevation, high detail",
   "night": "Art Deco tower crown illuminated at night, glowing chrome sunburst, floodlit setbacks, neon accents, glamorous architectural night photography",
   "aerial": "Aerial of an Art Deco district, stepped towers with ornamental crowns, symmetrical boulevards, golden light, drone photography",
   "street": "Street view of an Art Deco cinema exterior, grand symmetrical entrance, vertical neon sign, marble and bronze, 1930s glamour, documentary photography",
   "masterplan": "Art Deco masterplan, axial symmetrical boulevards, stepped towers, ceremonial plaza, ornamental geometry, gold-and-black palette"
  },
  "gallery": [
   {
    "file": "Chrysler Building - 05.jpg",
    "caption": "Chrysler Building crown"
   },
   {
    "file": "Empire State Building.jpg",
    "caption": "Empire State Building"
   },
   {
    "file": "Eastern Columbia Building.jpg",
    "caption": "Eastern Columbia, LA"
   },
   {
    "file": "700 Washington Road, Art Deco detail, 2020-08-27, 01.jpg",
    "caption": "Deco ornament detail"
   },
   {
    "file": "https://images.unsplash.com/photo-1617594572270-5157e61449b4",
    "caption": "Setback massing"
   },
   {
    "file": "https://images.unsplash.com/photo-1647612728126-9034b22035d3",
    "caption": "Sunburst motif"
   }
  ],
  "related": [
   "modern",
   "contemporary",
   "minimalism"
  ]
 },
 {
  "slug": "art-nouveau",
  "name": "Art Nouveau",
  "era": 1895,
  "eraLabel": "1890 – 1910",
  "region": "Europe",
  "mood": "Organic · Sinuous · Decorative",
  "tagline": "Nature flowing into line, curve and ornament.",
  "banner": "Casa Batllo Facade.jpg",
  "overview": {
   "definition": "Art Nouveau dissolves the wall into flowing, organic ornament — sinuous 'whiplash' curves, botanical motifs and sculpted ironwork inspired by nature, unifying structure and decoration.",
   "history": "A turn-of-the-century reaction against historicism, it embraced new materials (iron, glass) and nature-derived ornament to create a wholly modern decorative language.",
   "origin": "Brussels, Paris, Barcelona, Vienna, c.1890–1910.",
   "timeline": [
    {
     "year": "1893",
     "event": "Horta's Hôtel Tassel"
    },
    {
     "year": "1900",
     "event": "Guimard's Paris Métro entrances"
    },
    {
     "year": "1906",
     "event": "Gaudí's Casa Batlló"
    },
    {
     "year": "1910",
     "event": "Casa Milà completed"
    }
   ],
   "architects": [
    "Victor Horta",
    "Hector Guimard",
    "Antoni Gaudí",
    "Otto Wagner"
   ],
   "projects": [
    {
     "name": "Casa Batlló",
     "architect": "Antoni Gaudí",
     "year": "1906",
     "location": "Barcelona, Spain",
     "file": "Casa Batllo Facade.jpg"
    },
    {
     "name": "Casa Milà (La Pedrera)",
     "architect": "Antoni Gaudí",
     "year": "1910",
     "location": "Barcelona, Spain",
     "file": "Casa Milà - Barcelona, Spain - Jan 2007.jpg"
    },
    {
     "name": "Hôtel Tassel",
     "architect": "Victor Horta",
     "year": "1893",
     "location": "Brussels, Belgium",
     "file": "Hotel Tassel.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Nature as ornament",
    "Sinuous 'whiplash' line",
    "Unity of art & structure",
    "New materials (iron, glass)",
    "Total design"
   ],
   "thinking": "Line itself becomes alive — curving, growing, botanical — as iron, stone and glass are sculpted into a unified organic ornament that erases the line between structure and decoration.",
   "values": [
    "Beauty",
    "Nature",
    "Craft",
    "Modernity"
   ],
   "why": "A reaction against historical revival and industrial ugliness — a fresh, nature-based modern decorative art for a new century."
  },
  "visual": {
   "massing": "Sculptural masses with undulating, plant-like surfaces and soft edges.",
   "form": "Flowing, asymmetric, organic forms; curving walls and balconies.",
   "composition": "Dynamic, asymmetric, growing compositions.",
   "proportion": "Organic and varied; ornament-led.",
   "geometry": "Curves, parabolas, sinuous lines and botanical forms.",
   "rhythm": "Flowing, irregular, plant-like rhythm.",
   "symmetry": "Asymmetrical and naturalistic.",
   "scale": "Intimate to ornate-monumental.",
   "roofs": "Curving, undulating roofs; sculpted parapets and chimneys.",
   "windows": "Irregular organic openings with curving stone and stained-glass.",
   "entrance": "Sculptural, flowing, ornate portal.",
   "facade": "Curving stone, sculpted ironwork, ceramic and stained-glass in flowing botanical ornament."
  },
  "materials": [
   {
    "name": "Wrought iron",
    "hex": "#3a3631",
    "why": "Sculptural metalwork for balconies, grilles and ornament."
   },
   {
    "name": "Carved stone",
    "hex": "#d6cab2",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Stained glass",
    "hex": "#5a8a7a",
    "why": "Admits light and dissolves the wall between inside and out."
   },
   {
    "name": "Ceramic tile (trencadís)",
    "hex": "#5a9bb0",
    "why": "Colourful glazed surface for decorative façade pattern."
   },
   {
    "name": "Stucco",
    "hex": "#e4d8c0",
    "why": "Smooth render that unifies the wall and catches light."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Soft Stone",
     "hex": "#dccfb4"
    },
    {
     "name": "Sage",
     "hex": "#9aa882"
    }
   ],
   "accent": [
    {
     "name": "Peacock Teal",
     "hex": "#2f7a78"
    },
    {
     "name": "Lilac",
     "hex": "#9a7aa8"
    },
    {
     "name": "Gold",
     "hex": "#c8a14a"
    }
   ],
   "material": [
    {
     "name": "Iron Black",
     "hex": "#3a3631"
    },
    {
     "name": "Stained Glass",
     "hex": "#5a8a7a"
    }
   ],
   "combos": [
    "Stone + iron + stained glass",
    "Sage + peacock teal + gold"
   ],
   "mood": "Soft, organic and jewel-toned — muted naturals lit by stained-glass colour."
  },
  "facadeGuide": {
   "window": "Irregular organic openings with curving stone mullions and stained glass.",
   "emphasis": "Flowing — vertical growth softened by sinuous curves.",
   "shading": "Deep organic reveals, balconies and overhangs.",
   "balconies": "Sculptural wrought-iron balconies with botanical motifs.",
   "frames": "Curving stone and sinuous iron frames.",
   "openings": "Organic, varied, plant-like openings.",
   "details": "Whiplash ironwork, carved foliage, ceramic mosaic, stained glass.",
   "ornament": "Central and celebrated — flowing nature-derived ornament unifies the whole façade."
  },
  "lighting": {
   "natural": "Stained glass and organic openings filter coloured, dappled daylight.",
   "artificial": "Warm, sculptural; iron and glass catch the light.",
   "night": "Glowing stained glass and lit ironwork; warm and jewel-like.",
   "recommendations": "Warm 2700K; backlight stained glass; graze sculptural ironwork."
  },
  "buildingTypes": [
   "Townhouses & mansions",
   "Apartment buildings",
   "Department stores",
   "Cafés & restaurants",
   "Pavilions",
   "Metro/transport entrances"
  ],
  "checklist": [
   "Lead with flowing organic ornament",
   "Use sinuous whiplash lines",
   "Sculpt wrought-iron balconies and grilles",
   "Add stained glass and ceramic mosaic",
   "Curve walls, openings and roofline",
   "Unify structure and decoration",
   "Draw motifs from plants and nature",
   "Use soft naturals with jewel accents"
  ],
  "mistakes": [
   "Rigid orthogonal geometry",
   "Sparse, applied ornament with no flow",
   "Historical-revival motifs",
   "Straight, mechanical lines everywhere",
   "Cheap finishes betraying the craft"
  ],
  "prompts": {
   "exterior": "Art Nouveau townhouse exterior, sinuous curving stone façade, organic wrought-iron balconies, botanical ornament, stained glass, undulating roofline, warm light, architectural photography --ar 2:3 --style raw",
   "facade": "Art Nouveau façade, whiplash ironwork, carved foliage, curving stone mullions, stained-glass openings, organic ornament, frontal elevation, high detail",
   "night": "Art Nouveau building exterior at night, glowing stained glass, lit sculptural ironwork, warm jewel tones, architectural night photography",
   "aerial": "Aerial of an Art Nouveau building, undulating sculpted roofscape, organic parapets and chimneys, drone view, warm light",
   "street": "Street view of an Art Nouveau façade, flowing ironwork balconies, organic stone portal, stained glass, café below, documentary photography",
   "masterplan": "Art Nouveau quarter masterplan, sinuous street wall of organic façades, planted boulevard, axonometric, soft natural palette"
  },
  "gallery": [
   {
    "file": "Casa Batllo Facade.jpg",
    "caption": "Casa Batlló"
   },
   {
    "file": "Casa Milà - Barcelona, Spain - Jan 2007.jpg",
    "caption": "Casa Milà"
   },
   {
    "file": "Hotel Tassel.jpg",
    "caption": "Hôtel Tassel"
   },
   {
    "file": "https://images.unsplash.com/photo-1577791265972-25a754ea9217",
    "caption": "Whiplash ironwork"
   },
   {
    "file": "https://images.unsplash.com/photo-1686687997975-0c996ef9e643",
    "caption": "Botanical stone carving"
   },
   {
    "file": "",
    "caption": "Stained-glass detail"
   }
  ],
  "related": [
   "art-deco",
   "victorian",
   "beaux-arts"
  ]
 },
 {
  "slug": "beaux-arts",
  "name": "Beaux-Arts",
  "era": 1860,
  "eraLabel": "1850 – 1920",
  "region": "France → USA",
  "mood": "Grand · Axial · Ornamented",
  "tagline": "Monumental classical grandeur, richly composed.",
  "banner": "Palais Garnier.jpg",
  "overview": {
   "definition": "Beaux-Arts is the grand academic classicism of the École des Beaux-Arts — monumental, symmetrical, axial exteriors with paired columns, sculpture, grand staircases and rich classical ornament.",
   "history": "Taught in 19th-century Paris and exported worldwide, it produced opera houses, terminals, museums and civic palaces of confident, ornate, monumental grandeur.",
   "origin": "Paris and the USA, mid-19th to early-20th century.",
   "timeline": [
    {
     "year": "1875",
     "event": "Palais Garnier opera house"
    },
    {
     "year": "1893",
     "event": "World's Columbian Exposition, Chicago"
    },
    {
     "year": "1913",
     "event": "Grand Central Terminal"
    },
    {
     "year": "1900",
     "event": "Petit Palais, Paris"
    }
   ],
   "architects": [
    "Charles Garnier",
    "McKim, Mead & White",
    "Henri Labrouste",
    "Thomas Hastings"
   ],
   "projects": [
    {
     "name": "Palais Garnier",
     "architect": "Charles Garnier",
     "year": "1875",
     "location": "Paris, France",
     "file": "Palais Garnier.jpg"
    },
    {
     "name": "Grand Central Terminal",
     "architect": "Reed & Stem; Warren & Wetmore",
     "year": "1913",
     "location": "New York, USA",
     "file": "Grand Central Terminal.jpg"
    },
    {
     "name": "Petit Palais",
     "architect": "Charles Girault",
     "year": "1900",
     "location": "Paris, France",
     "file": "Petit Palais @ Paris (34359457345).jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Monumental classicism",
    "Axial symmetry",
    "Hierarchy & grandeur",
    "Rich sculptural ornament",
    "Academic order"
   ],
   "thinking": "Composed by strict academic rules, the exterior projects civic grandeur through symmetry, a hierarchy of grand entrances and staircases, paired columns and abundant sculpture.",
   "values": [
    "Grandeur",
    "Civic pride",
    "Refinement",
    "Permanence"
   ],
   "why": "The professionalisation of classical design — a confident academic language for the great public buildings of the industrial age."
  },
  "visual": {
   "massing": "Monumental symmetrical blocks with projecting pavilions and grand entrances.",
   "form": "Classical volumes enriched with sculpture and paired columns.",
   "composition": "Strict axial symmetry with a clear hierarchy of masses.",
   "proportion": "Monumental, with a richly modelled wall.",
   "geometry": "Rectilinear with arches, domes and grand stairs.",
   "rhythm": "Regular but richly layered colonnades.",
   "symmetry": "Strict bilateral symmetry.",
   "scale": "Grand and civic.",
   "roofs": "Mansard or flat roofs with balustrades, domes and sculpture.",
   "windows": "Tall arched and pedimented windows in ordered bays.",
   "entrance": "Monumental arched portal reached by a grand staircase.",
   "facade": "Paired columns, rusticated base, swags, cartouches, sculpture and balustrades in stone."
  },
  "materials": [
   {
    "name": "Limestone",
    "hex": "#e0d4bd",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Marble",
    "hex": "#ece6d8",
    "why": "Noble, fine-grained and carvable — conveys permanence and refinement."
   },
   {
    "name": "Bronze",
    "hex": "#9c7b40",
    "why": "Rich metal for doors, trim and ornamental enrichment."
   },
   {
    "name": "Slate (mansard)",
    "hex": "#4f5358",
    "why": "Durable dark roofing that crowns the silhouette."
   },
   {
    "name": "Gilded detail",
    "hex": "#c8a14a",
    "why": "A characteristic material of the style's exterior expression."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Limestone Cream",
     "hex": "#e2d6c1"
    },
    {
     "name": "Marble White",
     "hex": "#efe9dc"
    }
   ],
   "accent": [
    {
     "name": "Gold",
     "hex": "#c8a14a"
    },
    {
     "name": "Slate Grey",
     "hex": "#4f5358"
    },
    {
     "name": "Verdigris",
     "hex": "#5e7d6f"
    }
   ],
   "material": [
    {
     "name": "Stone",
     "hex": "#cfc2a8"
    },
    {
     "name": "Bronze",
     "hex": "#9c7b40"
    }
   ],
   "combos": [
    "Cream limestone + slate mansard + gilt",
    "Stone + bronze + verdigris"
   ],
   "mood": "Grand and refined — pale stone with gilt, bronze and slate accents."
  },
  "facadeGuide": {
   "window": "Tall arched and pedimented windows in ordered, hierarchical bays.",
   "emphasis": "Balanced — paired columns and pavilions with horizontal cornices.",
   "shading": "Deep colonnades, loggias and projecting cornices.",
   "balconies": "Balustraded stone balconies on carved consoles.",
   "frames": "Carved stone architraves and pediments.",
   "openings": "Symmetrical and hierarchical, grandest at the centre.",
   "details": "Paired columns, swags, cartouches, sculpture, balustrades.",
   "ornament": "Rich but academically rule-bound — abundant sculptural classical ornament."
  },
  "lighting": {
   "natural": "Colonnades and projecting cornices choreograph light and deep shadow.",
   "artificial": "Warm light; gilt and sculpture glitter.",
   "night": "Floodlit façades; uplit domes, sculpture and grand stairs.",
   "recommendations": "Warm 2700K; uplight columns, sculpture and dome; light the grand stair."
  },
  "buildingTypes": [
   "Opera houses & theatres",
   "Railway terminals",
   "Museums",
   "Civic & government",
   "Banks",
   "Universities"
  ],
  "checklist": [
   "Compose with strict axial symmetry",
   "Use paired columns and projecting pavilions",
   "Provide a grand staircase and portal",
   "Crown with mansards, domes and balustrades",
   "Enrich with sculpture and swags",
   "Use pale stone with bronze and gilt",
   "Hierarchy of grand entrances",
   "Keep ornament academically correct"
  ],
  "mistakes": [
   "Asymmetry breaking the grandeur",
   "Sparse, mean ornament at large scale",
   "Incorrect or clumsy classical detail",
   "Flat roofs with no crowning hierarchy",
   "Cheap materials undermining the monumentality"
  ],
  "prompts": {
   "exterior": "Beaux-Arts opera house exterior, monumental symmetrical limestone façade, paired columns, grand staircase, sculpture, mansard roof and dome, golden light, architectural photography --ar 3:2 --style raw",
   "facade": "Beaux-Arts façade, paired columns, arched pedimented windows, swags and cartouches, rusticated base, balustrade, frontal elevation, high detail",
   "night": "Beaux-Arts terminal exterior at night, floodlit colonnade, uplit sculpture and dome, grand stair, architectural night photography",
   "aerial": "Aerial of a Beaux-Arts civic palace, symmetrical wings and pavilions, domes, axial forecourt and gardens, drone view",
   "street": "Street view approaching a Beaux-Arts museum, grand staircase and arched portal, paired columns, sculpture, documentary photography",
   "masterplan": "Beaux-Arts civic masterplan, grand axial boulevards, monumental pavilions, ceremonial plaza and gardens, Beaux-Arts plan, stone palette"
  },
  "gallery": [
   {
    "file": "Palais Garnier.jpg",
    "caption": "Palais Garnier"
   },
   {
    "file": "Grand Central Terminal.jpg",
    "caption": "Grand Central Terminal"
   },
   {
    "file": "Petit Palais @ Paris (34359457345).jpg",
    "caption": "Petit Palais"
   },
   {
    "file": "https://images.unsplash.com/photo-1656441324831-cd3aa1a694bb",
    "caption": "Paired-column bay"
   },
   {
    "file": "https://images.unsplash.com/photo-1619872978981-e9885a014ba3",
    "caption": "Sculptural ornament"
   },
   {
    "file": "",
    "caption": "Grand staircase"
   }
  ],
  "related": [
   "neo-classical",
   "renaissance",
   "baroque"
  ]
 },
 {
  "slug": "victorian",
  "name": "Victorian",
  "era": 1850,
  "eraLabel": "1837 – 1901",
  "region": "Britain → Global",
  "mood": "Eclectic · Ornate · Picturesque",
  "tagline": "Exuberant eclectic ornament and picturesque silhouettes.",
  "banner": "Carson Mansion.jpg",
  "overview": {
   "definition": "Victorian architecture is an exuberant, eclectic mixing of revived styles — steep gables, bay windows, towers, decorative trim and polychrome brick on richly picturesque exteriors.",
   "history": "During Britain's industrial 19th century, mass-produced ornament and new wealth fuelled a picturesque eclecticism — Gothic, Italianate, Queen Anne and more, often combined freely.",
   "origin": "Britain and the British world, 1837–1901.",
   "timeline": [
    {
     "year": "1851",
     "event": "The Crystal Palace, Great Exhibition"
    },
    {
     "year": "1860",
     "event": "Italianate & Gothic villas spread"
    },
    {
     "year": "1880",
     "event": "Queen Anne revival peaks"
    },
    {
     "year": "1900",
     "event": "Painted-lady terraces worldwide"
    }
   ],
   "architects": [
    "Augustus Pugin",
    "George Gilbert Scott",
    "Richard Norman Shaw",
    "William Butterfield"
   ],
   "projects": [
    {
     "name": "Carson Mansion",
     "architect": "Samuel & Joseph Newsom",
     "year": "1886",
     "location": "Eureka, USA",
     "file": "Carson Mansion.jpg"
    },
    {
     "name": "Painted Ladies (Alamo Square)",
     "architect": "Various",
     "year": "1894",
     "location": "San Francisco, USA",
     "file": "Painted Ladies, Alamo Square.jpg"
    },
    {
     "name": "Royal Albert Hall",
     "architect": "Francis Fowke",
     "year": "1871",
     "location": "London, UK",
     "file": "Royal Albert Hall.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Eclectic revival",
    "Picturesque silhouette",
    "Decorative exuberance",
    "Polychromy",
    "Romantic individuality"
   ],
   "thinking": "The exterior delights in variety and ornament — asymmetrical picturesque massing crowned with towers and gables, every surface enriched with trim, colour and pattern.",
   "values": [
    "Romance",
    "Status",
    "Individuality",
    "Craft & industry"
   ],
   "why": "Industrial wealth and mass-produced ornament let the Victorians indulge a romantic, eclectic taste for richly decorated, picturesque homes and institutions."
  },
  "visual": {
   "massing": "Asymmetrical picturesque masses with towers, turrets, gables and bays.",
   "form": "Irregular, varied, vertical forms with busy silhouettes.",
   "composition": "Asymmetrical, additive, picturesque composition.",
   "proportion": "Tall and varied; vertical emphasis.",
   "geometry": "Steep gables, pointed and round arches, turrets.",
   "rhythm": "Busy, varied, ornamented rhythm.",
   "symmetry": "Deliberately asymmetrical and picturesque.",
   "scale": "Domestic to grand institutional.",
   "roofs": "Steep gabled and turreted roofs with iron cresting.",
   "windows": "Tall sash and bay windows; decorative leaded glass.",
   "entrance": "Ornate porches and decorated doorways.",
   "facade": "Polychrome brick, decorative bargeboards, spindlework, bays, turrets and rich trim."
  },
  "materials": [
   {
    "name": "Polychrome brick",
    "hex": "#9a5a44",
    "why": "Robust, modular and warm — the everyday material of solid walls."
   },
   {
    "name": "Painted timber trim",
    "hex": "#5a6a7a",
    "why": "Warm, renewable and tactile — softens and clads the exterior."
   },
   {
    "name": "Slate roof",
    "hex": "#4f5358",
    "why": "Durable dark roofing that crowns the silhouette."
   },
   {
    "name": "Terracotta",
    "hex": "#b5633a",
    "why": "Warm fired clay for tiles, ornament and roofs."
   },
   {
    "name": "Cast iron",
    "hex": "#3a3631",
    "why": "Sculptural metalwork for balconies, grilles and ornament."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Brick Red",
     "hex": "#9a5a44"
    },
    {
     "name": "Cream Trim",
     "hex": "#e6ddc9"
    }
   ],
   "accent": [
    {
     "name": "Sage Green",
     "hex": "#7a8a6a"
    },
    {
     "name": "Plum",
     "hex": "#6a4a5a"
    },
    {
     "name": "Deep Teal",
     "hex": "#2f5a5a"
    }
   ],
   "material": [
    {
     "name": "Slate",
     "hex": "#4f5358"
    },
    {
     "name": "Terracotta",
     "hex": "#b5633a"
    }
   ],
   "combos": [
    "Brick + cream + sage trim",
    "Polychrome 'painted lady' (3–5 colours)"
   ],
   "mood": "Rich, varied and characterful — deep historic colours with multi-tone trim."
  },
  "facadeGuide": {
   "window": "Tall sash and bay windows with decorative and leaded glass.",
   "emphasis": "Vertical and picturesque — gables, bays and towers.",
   "shading": "Deep porches, bays and overhanging eaves.",
   "balconies": "Ornate balconies and verandas with spindlework and iron lace.",
   "frames": "Decorative timber and stone window surrounds.",
   "openings": "Varied, vertical, richly framed openings.",
   "details": "Bargeboards, finials, brackets, spindlework, polychrome brick patterns.",
   "ornament": "Exuberant and essential — mass-produced trim, pattern and colour everywhere."
  },
  "lighting": {
   "natural": "Bay and leaded windows catch varied light; busy silhouettes throw lively shadow.",
   "artificial": "Warm, decorative; lit porches and lanterns.",
   "night": "Warm glow from bays; lit turrets and porches read picturesquely.",
   "recommendations": "Warm 2700K; light porches, bays and turrets; pick out trim."
  },
  "buildingTypes": [
   "Houses & terraces",
   "Mansions",
   "Town halls",
   "Hotels",
   "Railway stations",
   "Department stores"
  ],
  "checklist": [
   "Compose asymmetric picturesque massing",
   "Add towers, turrets, gables and bays",
   "Use polychrome brick or painted trim",
   "Decorate with bargeboards and spindlework",
   "Add ornate porches and verandas",
   "Use tall sash and leaded windows",
   "Crown with steep roofs and iron cresting",
   "Embrace rich, varied colour"
  ],
  "mistakes": [
   "Flat, symmetrical, undecorated boxes",
   "Sparse trim and plain silhouettes",
   "Monochrome minimalism",
   "Modern materials clashing with the period",
   "Ignoring the picturesque, additive massing"
  ],
  "prompts": {
   "exterior": "Victorian house exterior, asymmetrical picturesque massing, turret and steep gables, polychrome brick, bay windows, ornate porch with spindlework, warm light, architectural photography --ar 2:3 --style raw",
   "facade": "Victorian façade, decorative bargeboards, bay windows, painted timber trim, polychrome brick pattern, ornate porch, frontal elevation, high detail",
   "night": "Victorian house exterior at night, warm glow from bay windows, lit ornate porch and turret, picturesque, architectural night photography",
   "aerial": "Aerial of a Victorian terrace, steep gabled and turreted roofs with iron cresting, bays, chimneys, drone view",
   "street": "Street view of a Victorian 'painted lady' row, polychrome trim, bay windows, ornate porches, mature trees, documentary photography",
   "masterplan": "Victorian neighbourhood masterplan, picturesque terraced streets, gardens, towers and gables, axonometric, polychrome palette"
  },
  "gallery": [
   {
    "file": "Carson Mansion.jpg",
    "caption": "Carson Mansion"
   },
   {
    "file": "Painted Ladies, Alamo Square.jpg",
    "caption": "Painted Ladies"
   },
   {
    "file": "Royal Albert Hall.jpg",
    "caption": "Royal Albert Hall"
   },
   {
    "file": "https://images.unsplash.com/photo-1576525390218-1f9f706684cf",
    "caption": "Bargeboard & trim"
   },
   {
    "file": "https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a",
    "caption": "Bay-window study"
   },
   {
    "file": "",
    "caption": "Turret silhouette"
   }
  ],
  "related": [
   "gothic-revival",
   "art-nouveau",
   "colonial-revival"
  ]
 },
 {
  "slug": "gothic-revival",
  "name": "Gothic Revival",
  "era": 1840,
  "eraLabel": "1740 – 1900",
  "region": "Britain → Global",
  "mood": "Vertical · Pointed · Picturesque",
  "tagline": "Soaring pointed arches and medieval romance reborn.",
  "banner": "Palace of Westminster from the dome on Methodist Central Hall.jpg",
  "overview": {
   "definition": "Gothic Revival reawakened medieval Gothic — pointed arches, soaring verticality, tracery, pinnacles and picturesque silhouettes — for both grand civic monuments and romantic buildings.",
   "history": "An 18th–19th-century romantic reaction against classicism, it revived the medieval Gothic for parliaments, universities, stations and cathedrals, championed by Pugin and Ruskin.",
   "origin": "Britain, 18th–19th century; across the British world.",
   "timeline": [
    {
     "year": "1749",
     "event": "Strawberry Hill begins the revival"
    },
    {
     "year": "1840",
     "event": "Palace of Westminster (Barry & Pugin)"
    },
    {
     "year": "1868",
     "event": "St Pancras station & hotel"
    },
    {
     "year": "1880",
     "event": "Collegiate Gothic spreads"
    }
   ],
   "architects": [
    "A.W.N. Pugin",
    "Charles Barry",
    "George Gilbert Scott",
    "Eugène Viollet-le-Duc"
   ],
   "projects": [
    {
     "name": "Palace of Westminster",
     "architect": "Barry & Pugin",
     "year": "1870",
     "location": "London, UK",
     "file": "Palace of Westminster from the dome on Methodist Central Hall.jpg"
    },
    {
     "name": "St Pancras Renaissance",
     "architect": "George Gilbert Scott",
     "year": "1873",
     "location": "London, UK",
     "file": "St Pancras Railway Station 2012-06-23.jpg"
    },
    {
     "name": "Cologne Cathedral",
     "architect": "Various (completed)",
     "year": "1880",
     "location": "Cologne, Germany",
     "file": "Cologne Cathedral.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Pointed-arch structure",
    "Verticality & aspiration",
    "Tracery & ornament",
    "Picturesque irregularity",
    "Honest medieval craft"
   ],
   "thinking": "Verticality and the pointed arch drive the exterior upward; tracery, pinnacles and rich stone carving create a romantic, aspirational, picturesque silhouette.",
   "values": [
    "Aspiration",
    "Romance",
    "Faith & tradition",
    "Craft"
   ],
   "why": "A romantic, moral reaction against industrial classicism — reviving the medieval Gothic as a more spiritual, honest and national architecture."
  },
  "visual": {
   "massing": "Tall, vertical, picturesquely irregular masses with towers and spires.",
   "form": "Pointed, soaring, intricate forms with steep gables.",
   "composition": "Asymmetrical, picturesque, vertically driven.",
   "proportion": "Tall and slender; emphatic verticality.",
   "geometry": "Pointed arches, tracery, gables, pinnacles.",
   "rhythm": "Insistent vertical rhythm of buttresses and mullions.",
   "symmetry": "Often asymmetrical and picturesque.",
   "scale": "Soaring and monumental.",
   "roofs": "Steep gabled roofs, spires, pinnacles and turrets.",
   "windows": "Tall pointed windows with stone tracery and stained glass.",
   "entrance": "Recessed pointed-arch portal, richly carved.",
   "facade": "Pointed arches, buttresses, tracery, pinnacles and carved stone over a vertical frame."
  },
  "materials": [
   {
    "name": "Stone (ashlar)",
    "hex": "#cdc2ac",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Polychrome brick",
    "hex": "#8a5a44",
    "why": "Robust, modular and warm — the everyday material of solid walls."
   },
   {
    "name": "Slate roof",
    "hex": "#4f5358",
    "why": "Durable dark roofing that crowns the silhouette."
   },
   {
    "name": "Stained glass",
    "hex": "#3a6a7a",
    "why": "Admits light and dissolves the wall between inside and out."
   },
   {
    "name": "Lead & iron",
    "hex": "#5a5d62",
    "why": "Sculptural metalwork for balconies, grilles and ornament."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Stone Grey",
     "hex": "#c5b9a2"
    },
    {
     "name": "Sandstone",
     "hex": "#cbb38c"
    }
   ],
   "accent": [
    {
     "name": "Deep Red",
     "hex": "#8c2f2f"
    },
    {
     "name": "Forest Green",
     "hex": "#34503f"
    },
    {
     "name": "Gold",
     "hex": "#c8a14a"
    }
   ],
   "material": [
    {
     "name": "Slate",
     "hex": "#4f5358"
    },
    {
     "name": "Stained Glass",
     "hex": "#3a6a7a"
    }
   ],
   "combos": [
    "Sandstone + slate + stained glass",
    "Polychrome brick + stone dressings"
   ],
   "mood": "Sombre and romantic — earthy stone with jewel-toned glass accents."
  },
  "facadeGuide": {
   "window": "Tall pointed-arch windows with stone tracery and stained glass.",
   "emphasis": "Strongly vertical — buttresses, mullions, spires.",
   "shading": "Deep reveals, porches and projecting buttresses.",
   "balconies": "Pinnacled stone balconies and oriel windows.",
   "frames": "Carved stone tracery and pointed surrounds.",
   "openings": "Tall, pointed, vertically grouped openings.",
   "details": "Tracery, crockets, finials, gargoyles and carved stone.",
   "ornament": "Rich and structural — tracery, pinnacles and carving express the vertical frame."
  },
  "lighting": {
   "natural": "Tall pointed windows and stained glass cast tall, coloured light; buttresses throw vertical shadow.",
   "artificial": "Warm, dramatic; stained glass glows; spires uplit.",
   "night": "Floodlit towers and spires; glowing stained glass; deep vertical shadow.",
   "recommendations": "Warm 2700K; uplight towers, spires and tracery; backlight stained glass."
  },
  "buildingTypes": [
   "Parliaments & civic halls",
   "Universities & colleges",
   "Railway stations",
   "Cathedrals & churches",
   "Town halls",
   "Libraries"
  ],
  "checklist": [
   "Drive the composition vertically",
   "Use pointed arches and stone tracery",
   "Add towers, spires and pinnacles",
   "Express buttresses and a vertical frame",
   "Carve crockets, finials and gargoyles",
   "Use stained glass in tall windows",
   "Keep a picturesque, irregular silhouette",
   "Use stone or polychrome brick"
  ],
  "mistakes": [
   "Squat, horizontal massing",
   "Round arches instead of pointed",
   "Flat, untextured façades",
   "Sparse, mechanical detailing",
   "Classical symmetry suppressing the picturesque"
  ],
  "prompts": {
   "exterior": "Gothic Revival civic building exterior, soaring pointed arches, stone tracery, tall tower and spires, buttresses, pinnacles, carved stone, dramatic sky, architectural photography --ar 2:3 --style raw",
   "facade": "Gothic Revival façade, pointed-arch windows, stone tracery, buttresses, crockets and finials, vertical composition, frontal elevation, high detail",
   "night": "Gothic Revival building exterior at night, floodlit tower and spires, glowing stained glass, deep vertical shadow, architectural night photography",
   "aerial": "Aerial of a Gothic Revival complex, steep gabled roofs, spires and pinnacles, picturesque silhouette, drone view",
   "street": "Street view of a Gothic Revival station, pointed-arch portal, tower, tracery windows, carved stone, documentary photography",
   "masterplan": "Gothic Revival campus masterplan, picturesque quadrangles, towers and spires, cloisters, axonometric, stone palette"
  },
  "gallery": [
   {
    "file": "Palace of Westminster from the dome on Methodist Central Hall.jpg",
    "caption": "Palace of Westminster"
   },
   {
    "file": "St Pancras Railway Station 2012-06-23.jpg",
    "caption": "St Pancras station"
   },
   {
    "file": "Cologne Cathedral.jpg",
    "caption": "Cologne Cathedral"
   },
   {
    "file": "https://images.unsplash.com/photo-1643447727844-1e2e31544237",
    "caption": "Tracery study"
   },
   {
    "file": "https://images.unsplash.com/photo-1562362898-d1a9d124fd77",
    "caption": "Spire & pinnacle"
   },
   {
    "file": "",
    "caption": "Buttress detail"
   }
  ],
  "related": [
   "romanesque-revival",
   "victorian",
   "neo-classical"
  ]
 },
 {
  "slug": "romanesque-revival",
  "name": "Romanesque Revival",
  "era": 1850,
  "eraLabel": "1840 – 1900",
  "region": "USA · Europe",
  "mood": "Massive · Rounded · Robust",
  "tagline": "Heavy stone, round arches and robust solidity.",
  "banner": "AlleghenyCountyCourthouse.jpg",
  "overview": {
   "definition": "Romanesque Revival recalls medieval Romanesque — massive rusticated stone walls, round arches, short stout columns and powerful, robust exteriors, perfected in America by H.H. Richardson.",
   "history": "A 19th-century revival of pre-Gothic forms, it gave civic buildings, libraries and stations a sense of weight, permanence and rugged strength.",
   "origin": "USA and Europe, mid-to-late 19th century.",
   "timeline": [
    {
     "year": "1855",
     "event": "Smithsonian Castle, Washington"
    },
    {
     "year": "1877",
     "event": "Trinity Church Boston (Richardson)"
    },
    {
     "year": "1888",
     "event": "Allegheny County Courthouse"
    },
    {
     "year": "1890",
     "event": "Richardsonian Romanesque spreads"
    }
   ],
   "architects": [
    "Henry Hobson Richardson",
    "James Renwick Jr.",
    "Frank Furness"
   ],
   "projects": [
    {
     "name": "Allegheny County Courthouse",
     "architect": "H. H. Richardson",
     "year": "1888",
     "location": "Pittsburgh, USA",
     "file": "AlleghenyCountyCourthouse.jpg"
    },
    {
     "name": "Smithsonian Institution Building",
     "architect": "James Renwick Jr.",
     "year": "1855",
     "location": "Washington, USA",
     "file": "Smithsonian Castle.jpg"
    },
    {
     "name": "Trinity Church Boston",
     "architect": "H. H. Richardson",
     "year": "1877",
     "location": "Boston, USA",
     "file": "Trinity Church Boston.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Massive masonry",
    "Round-arch structure",
    "Rugged solidity",
    "Bold simplicity",
    "Powerful entrances"
   ],
   "thinking": "Weight and permanence define the exterior — rusticated stone, deep round-arched openings and squat columns create a robust, grounded, powerful presence.",
   "values": [
    "Strength",
    "Permanence",
    "Dignity",
    "Gravity"
   ],
   "why": "A search for a weighty, permanent, robust civic architecture distinct from delicate Gothic verticality."
  },
  "visual": {
   "massing": "Massive, solid, grounded masses with bold towers and broad arches.",
   "form": "Heavy, rounded, robust forms with deep openings.",
   "composition": "Bold, simple, weighty composition with strong arches.",
   "proportion": "Massive and heavy.",
   "geometry": "Round arches, short columns, drum towers.",
   "rhythm": "Deep, weighty rhythm of round arches.",
   "symmetry": "Often asymmetrical with a dominant tower.",
   "scale": "Robust and monumental.",
   "roofs": "Steep roofs, conical-capped round towers, gables.",
   "windows": "Deep round-arched windows, often grouped in arcades.",
   "entrance": "Massive recessed round-arch portal.",
   "facade": "Rusticated stone, deep round arches, squat columns and bold towers."
  },
  "materials": [
   {
    "name": "Rusticated stone",
    "hex": "#a89a82",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Brownstone",
    "hex": "#7a5a44",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Red sandstone",
    "hex": "#9a5a44",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Slate roof",
    "hex": "#4f5358",
    "why": "Durable dark roofing that crowns the silhouette."
   },
   {
    "name": "Granite",
    "hex": "#8a8680",
    "why": "Hard, durable stone for robust bases and trim."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Brownstone",
     "hex": "#7a5a44"
    },
    {
     "name": "Warm Sandstone",
     "hex": "#a8825e"
    }
   ],
   "accent": [
    {
     "name": "Deep Red",
     "hex": "#8c3a2e"
    },
    {
     "name": "Forest Green",
     "hex": "#34503f"
    },
    {
     "name": "Slate Blue",
     "hex": "#4a5a6a"
    }
   ],
   "material": [
    {
     "name": "Granite",
     "hex": "#8a8680"
    },
    {
     "name": "Slate",
     "hex": "#4f5358"
    }
   ],
   "combos": [
    "Brownstone + slate + deep red",
    "Sandstone + granite trim"
   ],
   "mood": "Earthy, heavy and warm — rich browns and reds with slate accents."
  },
  "facadeGuide": {
   "window": "Deep round-arched windows, often grouped in arcades.",
   "emphasis": "Balanced mass with a dominant tower; horizontal weight.",
   "shading": "Deep reveals and recessed arches give strong shadow.",
   "balconies": "Stone balconies and arcaded loggias.",
   "frames": "Massive stone arch surrounds with short columns.",
   "openings": "Round-arched, grouped, deeply recessed openings.",
   "details": "Carved foliate capitals, corbel tables, rough rustication.",
   "ornament": "Robust and structural — round arches, rustication and squat columns carry the character."
  },
  "lighting": {
   "natural": "Deep round arches and rustication create strong, weighty self-shadowing.",
   "artificial": "Warm, dramatic; rough stone grazed to reveal texture.",
   "night": "Floodlit towers and arcades; deep arches read as dark voids.",
   "recommendations": "Warm 2700K; graze rusticated stone; uplight towers and arcades."
  },
  "buildingTypes": [
   "Courthouses & civic halls",
   "Libraries",
   "Railway stations",
   "Universities",
   "Churches",
   "Warehouses"
  ],
  "checklist": [
   "Use massive rusticated stone walls",
   "Compose around round arches",
   "Add a bold dominant tower",
   "Recess deep round-arched portals",
   "Group windows in arcades",
   "Use short squat columns and carved capitals",
   "Keep weighty, grounded massing",
   "Use earthy stone tones"
  ],
  "mistakes": [
   "Thin, light, delicate massing",
   "Pointed arches (that's Gothic)",
   "Flat smooth walls with no rustication",
   "Tall slender proportions",
   "Sparse detailing at large scale"
  ],
  "prompts": {
   "exterior": "Romanesque Revival courthouse exterior, massive rusticated stone walls, deep round arches, bold tower, arcaded windows, robust and weighty, dramatic light, architectural photography --ar 3:2 --style raw",
   "facade": "Romanesque Revival façade, rusticated stone, deep round-arched portal, grouped arcaded windows, short columns, carved capitals, frontal elevation, high detail",
   "night": "Romanesque Revival building exterior at night, floodlit tower and arcades, deep round arches in shadow, weighty, architectural night photography",
   "aerial": "Aerial of a Romanesque Revival civic building, massive masses, conical-capped tower, steep roofs, drone view",
   "street": "Street view of a Romanesque Revival library, massive round-arch portal, rusticated stone, tower, documentary photography",
   "masterplan": "Romanesque Revival civic masterplan, weighty stone blocks around a square, dominant tower, axonometric, earthy stone palette"
  },
  "gallery": [
   {
    "file": "AlleghenyCountyCourthouse.jpg",
    "caption": "Allegheny Courthouse"
   },
   {
    "file": "Smithsonian Castle.jpg",
    "caption": "Smithsonian Castle"
   },
   {
    "file": "Trinity Church Boston.jpg",
    "caption": "Trinity Church Boston"
   },
   {
    "file": "https://images.unsplash.com/photo-1603644448048-28a7e5122f0a",
    "caption": "Round-arch arcade"
   },
   {
    "file": "https://images.unsplash.com/photo-1597339933958-bae52de73124",
    "caption": "Rustication detail"
   },
   {
    "file": "",
    "caption": "Tower study"
   }
  ],
  "related": [
   "gothic-revival",
   "neo-classical",
   "victorian"
  ]
 },
 {
  "slug": "colonial-revival",
  "name": "Colonial Revival",
  "era": 1880,
  "eraLabel": "1880 – 1955",
  "region": "USA",
  "mood": "Symmetrical · Traditional · Refined",
  "tagline": "Refined symmetry recalling the colonial Georgian house.",
  "banner": "https://images.unsplash.com/photo-1613752555210-36d1976a2f3d",
  "overview": {
   "definition": "Colonial Revival reinterprets early American Georgian and Federal homes — symmetrical brick or clapboard façades, a centred pedimented doorway, multipane windows and restrained classical trim.",
   "history": "A patriotic late-19th-century revival sparked by the 1876 Centennial, it became the enduring template for the dignified, symmetrical American house.",
   "origin": "United States, 1880–1955.",
   "timeline": [
    {
     "year": "1876",
     "event": "Centennial sparks colonial nostalgia"
    },
    {
     "year": "1900",
     "event": "Colonial Revival becomes dominant"
    },
    {
     "year": "1930",
     "event": "Williamsburg restoration popularises it"
    },
    {
     "year": "1950",
     "event": "Suburban standard"
    }
   ],
   "architects": [
    "McKim, Mead & White",
    "Royal Barry Wills",
    "Various residential architects"
   ],
   "projects": [
    {
     "name": "Colonial Revival mansion",
     "architect": "McKim, Mead & White",
     "year": "1890",
     "location": "USA",
     "file": ""
    },
    {
     "name": "Symmetrical brick Georgian-revival house",
     "architect": "—",
     "year": "1915",
     "location": "USA",
     "file": ""
    },
    {
     "name": "Clapboard Federal-revival house",
     "architect": "—",
     "year": "1925",
     "location": "USA",
     "file": ""
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Symmetry & balance",
    "Classical restraint",
    "Traditional materials",
    "Refined proportion",
    "Domestic dignity"
   ],
   "thinking": "The exterior is calm and balanced — a symmetrical façade centred on a refined pedimented entrance, with multipane windows and modest classical trim conveying quiet dignity.",
   "values": [
    "Tradition",
    "Dignity",
    "Comfort",
    "Refinement"
   ],
   "why": "A patriotic, nostalgic return to America's colonial roots — a dignified, symmetrical, comfortable house for the new century."
  },
  "visual": {
   "massing": "Symmetrical rectangular blocks, often with side wings.",
   "form": "Clean rectilinear forms with a centred entrance.",
   "composition": "Strict bilateral symmetry about the front door.",
   "proportion": "Balanced, restrained classical proportion.",
   "geometry": "Orthogonal with classical accents.",
   "rhythm": "Evenly-spaced regular windows.",
   "symmetry": "Strong bilateral symmetry.",
   "scale": "Domestic and dignified.",
   "roofs": "Side-gabled or hipped roofs with dormers; modest cornice.",
   "windows": "Multipane double-hung sash windows with shutters, symmetrically placed.",
   "entrance": "Centred pedimented doorway with pilasters or portico.",
   "facade": "Symmetrical brick or clapboard with a pedimented door, multipane sash and restrained classical trim."
  },
  "materials": [
   {
    "name": "Red brick",
    "hex": "#9a5a44",
    "why": "Robust, modular and warm — the everyday material of solid walls."
   },
   {
    "name": "White clapboard",
    "hex": "#efece4",
    "why": "Traditional painted timber siding for crisp domestic façades."
   },
   {
    "name": "White trim",
    "hex": "#f3efe7",
    "why": "Painted classical trim that frames and refines the façade."
   },
   {
    "name": "Black shutters",
    "hex": "#2c2b29",
    "why": "Operable shutters that shade openings and order the façade."
   },
   {
    "name": "Slate roof",
    "hex": "#4f5358",
    "why": "Durable dark roofing that crowns the silhouette."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Colonial White",
     "hex": "#f1ede4"
    },
    {
     "name": "Brick Red",
     "hex": "#9a5a44"
    }
   ],
   "accent": [
    {
     "name": "Federal Blue",
     "hex": "#2f4a6a"
    },
    {
     "name": "Black",
     "hex": "#2c2b29"
    },
    {
     "name": "Sage",
     "hex": "#7a8a6a"
    }
   ],
   "material": [
    {
     "name": "Slate",
     "hex": "#4f5358"
    },
    {
     "name": "Stone",
     "hex": "#cabfaf"
    }
   ],
   "combos": [
    "Red brick + white trim + black shutters",
    "White clapboard + black shutters"
   ],
   "mood": "Crisp, traditional and refined — white and brick with dark-shutter accents."
  },
  "facadeGuide": {
   "window": "Symmetrical multipane double-hung sash windows with shutters.",
   "emphasis": "Balanced and symmetrical about the centred entrance.",
   "shading": "Shutters, modest cornices and door porticoes.",
   "balconies": "Modest porches and Palladian-window accents.",
   "frames": "White-painted classical surrounds and shutters.",
   "openings": "Evenly-spaced, symmetrical, multipane openings.",
   "details": "Pedimented doorway, dentil cornice, pilasters, fanlight.",
   "ornament": "Restrained and classical — a pedimented door and modest trim, never excessive."
  },
  "lighting": {
   "natural": "Symmetrical openings give even, balanced daylight; modest shadow from trim.",
   "artificial": "Warm, even; lit entrance portico and lantern.",
   "night": "Warm glow from symmetrical windows; lit centred doorway.",
   "recommendations": "Warm 2700K; light the entrance portico; keep it even and calm."
  },
  "buildingTypes": [
   "Houses",
   "Town halls & libraries",
   "Schools & colleges",
   "Inns & clubs",
   "Embassies",
   "Civic buildings"
  ],
  "checklist": [
   "Compose a strictly symmetrical façade",
   "Centre a pedimented entrance",
   "Use multipane sash windows with shutters",
   "Use red brick or white clapboard",
   "Add a dentil cornice and modest trim",
   "Keep classical detail restrained",
   "Use side-gabled or hipped roofs with dormers",
   "Balance every opening about the centre"
  ],
  "mistakes": [
   "Asymmetry breaking the balance",
   "Heavy or excessive ornament",
   "Large undivided modern glazing",
   "Mismatched proportions",
   "Bold non-traditional colours"
  ],
  "prompts": {
   "exterior": "Colonial Revival house exterior, symmetrical red-brick façade, centred white pedimented doorway, multipane sash windows with black shutters, side-gabled roof, dignified, architectural photography --ar 3:2 --style raw",
   "facade": "Colonial Revival façade, symmetrical elevation, pedimented entrance with pilasters, multipane sash, shutters, dentil cornice, frontal elevation, refined light",
   "night": "Colonial Revival house exterior at night, warm glow from symmetrical windows, lit centred portico, dignified, architectural night photography",
   "aerial": "Aerial of a Colonial Revival house, symmetrical block with wings, hipped roof and dormers, formal garden, drone view",
   "street": "Street view of a Colonial Revival home exterior, brick façade, white pedimented doorway, shutters, mature trees, documentary photography",
   "masterplan": "Colonial Revival neighbourhood masterplan, symmetrical houses along tree-lined streets, formal gardens, axonometric, brick-and-white palette"
  },
  "gallery": [
   {
    "file": "https://images.unsplash.com/photo-1594348352384-97fa22a08109",
    "caption": "Symmetrical brick massing"
   },
   {
    "file": "",
    "caption": "Pedimented doorway"
   },
   {
    "file": "",
    "caption": "Multipane sash & shutters"
   },
   {
    "file": "",
    "caption": "Dentil cornice"
   },
   {
    "file": "",
    "caption": "Dormer roof"
   },
   {
    "file": "",
    "caption": "Centred entrance"
   }
  ],
  "related": [
   "neo-classical",
   "victorian",
   "mediterranean-contemporary"
  ]
 },
 {
  "slug": "vernacular",
  "name": "Vernacular",
  "era": 0,
  "eraLabel": "Timeless / pre-modern",
  "region": "Global (place-specific)",
  "mood": "Local · Practical · Rooted",
  "tagline": "Built by tradition from local materials and climate.",
  "banner": "I trulli, Alberobello - Puglia, Italia.jpg",
  "overview": {
   "definition": "Vernacular architecture is the traditional building of a place — shaped by local climate, materials and culture rather than by architects, producing deeply rooted, practical, regionally distinct exteriors.",
   "history": "The world's oldest and most widespread architecture: built by communities over generations using what the land provides, perfectly adapted to local climate and life.",
   "origin": "Everywhere — each region has its own.",
   "timeline": [
    {
     "year": "Antiquity",
     "event": "Adobe, stone and timber traditions form"
    },
    {
     "year": "Medieval",
     "event": "Regional types mature (trulli, riads, longhouses)"
    },
    {
     "year": "1964",
     "event": "'Architecture Without Architects' celebrates it"
    },
    {
     "year": "Today",
     "event": "A model for sustainable, place-based design"
    }
   ],
   "architects": [
    "(Anonymous builders & communities)",
    "Hassan Fathy (advocate)",
    "Bernard Rudofsky (chronicler)"
   ],
   "projects": [
    {
     "name": "Trulli of Alberobello",
     "architect": "Vernacular",
     "year": "traditional",
     "location": "Puglia, Italy",
     "file": "I trulli, Alberobello - Puglia, Italia.jpg"
    },
    {
     "name": "Santorini cave houses",
     "architect": "Vernacular",
     "year": "traditional",
     "location": "Santorini, Greece",
     "file": "Oia Santorini.jpg"
    },
    {
     "name": "Taos Pueblo",
     "architect": "Vernacular",
     "year": "traditional",
     "location": "New Mexico, USA",
     "file": "Taos Pueblo.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Local materials",
    "Climate adaptation",
    "Tradition & craft",
    "Practicality",
    "Rootedness in place"
   ],
   "thinking": "Form follows climate, material and custom: thick walls for heat, steep roofs for snow, courtyards for shade — a practical, evolved architecture deeply of its place.",
   "values": [
    "Adaptation",
    "Community",
    "Sustainability",
    "Identity"
   ],
   "why": "The timeless, universal response to shelter — building with what is local, for the local climate and way of life."
  },
  "visual": {
   "massing": "Clustered, organic, human-scaled masses shaped by terrain and use.",
   "form": "Simple, practical forms following local tradition.",
   "composition": "Additive, organic clustering grown over time.",
   "proportion": "Human-scaled and intuitive.",
   "geometry": "Simple geometries dictated by material and climate.",
   "rhythm": "Repetition of local building units.",
   "symmetry": "Asymmetrical, organic, evolved.",
   "scale": "Intimate and domestic.",
   "roofs": "Climate-driven: flat in dry lands, steep where it snows; domes, vaults, thatch.",
   "windows": "Small, shaded, climate-tuned openings; courtyards for light.",
   "entrance": "Modest, sheltered, practical thresholds.",
   "facade": "Local stone, adobe, timber, brick or thatch, built by hand to suit the climate."
  },
  "materials": [
   {
    "name": "Adobe / earth",
    "hex": "#c19a73",
    "why": "Earth walls with thermal mass drawn straight from the site."
   },
   {
    "name": "Local stone",
    "hex": "#bca588",
    "why": "Solid, durable and rooted in place — a defining exterior material of the style."
   },
   {
    "name": "Timber",
    "hex": "#a8895c",
    "why": "Warm, renewable and tactile — softens and clads the exterior."
   },
   {
    "name": "Whitewash / lime",
    "hex": "#efe9dd",
    "why": "Breathable traditional plaster with a soft, textured finish."
   },
   {
    "name": "Thatch / reed",
    "hex": "#bca36a",
    "why": "Local reed roofing, renewable and climate-suited."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Earth Ochre",
     "hex": "#c19a73"
    },
    {
     "name": "Warm Stone",
     "hex": "#bca588"
    }
   ],
   "accent": [
    {
     "name": "Whitewash",
     "hex": "#efe9dd"
    },
    {
     "name": "Indigo",
     "hex": "#3a5a7a"
    },
    {
     "name": "Terracotta",
     "hex": "#b5633a"
    }
   ],
   "material": [
    {
     "name": "Timber",
     "hex": "#a8895c"
    },
    {
     "name": "Thatch",
     "hex": "#bca36a"
    }
   ],
   "combos": [
    "Adobe + timber + whitewash",
    "Whitewash + indigo (Mediterranean)"
   ],
   "mood": "Earthy, warm and local — colours drawn straight from the regional ground."
  },
  "facadeGuide": {
   "window": "Small, shaded openings tuned to the local climate; courtyards bring light.",
   "emphasis": "Determined by climate and local tradition, not a fixed rule.",
   "shading": "Thick walls, deep reveals, courtyards, screens and overhangs.",
   "balconies": "Simple timber or stone balconies, verandas and loggias.",
   "frames": "Hand-made timber or stone frames and shutters.",
   "openings": "Modest, practical, climate-calibrated openings.",
   "details": "Hand-craft: masonry coursing, carved timber, plaster relief.",
   "ornament": "Sparing and craft-based — pattern from material, weave and making, not applied decoration."
  },
  "lighting": {
   "natural": "The primary medium — small openings, courtyards and screens shape daylight for the climate.",
   "artificial": "Warm, simple, lantern-like; built-in and modest.",
   "night": "Warm glow from small openings; lit courtyards and thresholds.",
   "recommendations": "Warm 2400–2700K; light courtyards and thresholds; keep it modest and local."
  },
  "buildingTypes": [
   "Houses & dwellings",
   "Villages",
   "Markets & granaries",
   "Community buildings",
   "Workshops",
   "Courtyard buildings"
  ],
  "checklist": [
   "Study the local climate, materials and customs first",
   "Use local, natural materials",
   "Adapt the form to sun, wind and rain",
   "Organise around courtyards and shade",
   "Keep human scale and hand-craft",
   "Tune openings to the climate",
   "Cluster organically with the terrain",
   "Interpret tradition — don't copy a foreign style"
  ],
  "mistakes": [
   "Imported placeless materials",
   "Ignoring local climate and orientation",
   "Mechanical, repetitive uniformity",
   "Token 'folk' motifs on a generic box",
   "Losing the human scale and craft"
  ],
  "prompts": {
   "exterior": "Vernacular village house exterior, local stone and adobe, whitewashed walls, small shaded openings, courtyard, terraced into the hillside, warm light, architectural photography --ar 3:2 --style raw",
   "facade": "Vernacular façade, hand-built stone and earth walls, small climate-tuned openings, timber shutters, lime plaster texture, frontal elevation, warm light",
   "night": "Vernacular house exterior at night, warm glow from small windows, lit courtyard, hand-built walls, intimate, architectural night photography",
   "aerial": "Aerial of a vernacular village, clustered earth-and-stone houses following the terrain, courtyards, narrow lanes, drone view",
   "street": "Street view of a vernacular street, whitewashed or stone houses, small windows, shaded thresholds, daily life, documentary photography",
   "masterplan": "Vernacular village masterplan, organically clustered courtyard houses following the land, narrow shaded lanes, axonometric, earthy palette"
  },
  "gallery": [
   {
    "file": "I trulli, Alberobello - Puglia, Italia.jpg",
    "caption": "Trulli of Alberobello"
   },
   {
    "file": "Oia Santorini.jpg",
    "caption": "Santorini cave houses"
   },
   {
    "file": "Taos Pueblo.jpg",
    "caption": "Taos Pueblo"
   },
   {
    "file": "https://images.unsplash.com/photo-1730131255658-c51e724003c2",
    "caption": "Adobe wall study"
   },
   {
    "file": "https://images.unsplash.com/photo-1710966218373-979dc00c370d",
    "caption": "Courtyard shade"
   },
   {
    "file": "",
    "caption": "Hand-built detail"
   }
  ],
  "related": [
   "mediterranean-contemporary",
   "tropical-modern",
   "organic"
  ]
 },
 {
  "slug": "sustainable-passive",
  "name": "Sustainable / Passive",
  "era": 2010,
  "eraLabel": "2000s – present",
  "region": "Global",
  "mood": "Eco · Efficient · Harmonious",
  "tagline": "Eco-friendly, efficient, harmonious — green roofs and living façades.",
  "banner": "Il Bosco Verticale Milano Px (137734459).jpeg",
  "overview": {
   "definition": "Sustainable / Green architecture makes environmental performance the design driver — natural ventilation, shading, green roofs and living façades shaping an exterior that works with climate and integrates planting.",
   "history": "From early bioclimatic design to today's net-zero and biophilic towers, green architecture moved from niche to mainstream as climate concern grew.",
   "origin": "Global; advanced by European and Asian practices.",
   "timeline": [
    {
     "year": "2000",
     "event": "Green-building rating systems spread"
    },
    {
     "year": "2014",
     "event": "Bosco Verticale — vertical forest towers"
    },
    {
     "year": "2019",
     "event": "CopenHill — waste-to-energy with public roof"
    },
    {
     "year": "2021",
     "event": "Net-zero and timber high-rise mainstream"
    }
   ],
   "architects": [
    "Stefano Boeri",
    "BIG",
    "WOHA",
    "Ken Yeang"
   ],
   "projects": [
    {
     "name": "Bosco Verticale",
     "architect": "Stefano Boeri",
     "year": "2014",
     "location": "Milan, Italy",
     "file": "Il Bosco Verticale Milano Px (137734459).jpeg"
    },
    {
     "name": "CopenHill",
     "architect": "BIG",
     "year": "2019",
     "location": "Copenhagen, Denmark",
     "file": "Amager Bakke 2.jpg"
    },
    {
     "name": "One Central Park",
     "architect": "Jean Nouvel",
     "year": "2014",
     "location": "Sydney, Australia",
     "file": "One Central Park Sydney.jpg"
    }
   ]
  },
  "philosophy": {
   "principles": [
    "Performance-led form",
    "Natural ventilation & shading",
    "Living façades",
    "Renewable materials",
    "Harmony with nature"
   ],
   "thinking": "The exterior is an environmental instrument — oriented, shaded, planted and ventilated so the building works with climate, lowers energy and brings nature back into the city.",
   "values": [
    "Responsibility",
    "Efficiency",
    "Wellbeing",
    "Resilience"
   ],
   "why": "The climate imperative — architecture must reduce energy and carbon while improving human and ecological health."
  },
  "visual": {
   "massing": "Shaped to sun, wind and view; terraced for planting and daylight.",
   "form": "Clean contemporary volumes layered with greenery and shading.",
   "composition": "Planted terraces, brise-soleil and louvre systems articulating the façade.",
   "proportion": "Human-scaled, with depth for planting and shade.",
   "geometry": "Orthogonal or gently sculptural, optimised by performance.",
   "rhythm": "Repetitive shading fins, planters and balconies.",
   "symmetry": "Usually asymmetrical, driven by orientation.",
   "scale": "House to high-rise; greenery at every scale.",
   "roofs": "Green/accessible roofs, solar arrays, sky gardens.",
   "windows": "Optimised glazing with deep shading and operable vents.",
   "entrance": "Open, planted, daylit thresholds.",
   "facade": "Living/green façades, timber, recycled materials, brise-soleil and PV integrated."
  },
  "materials": [
   {
    "name": "Greenery / planting",
    "hex": "#5a7048",
    "why": "Living façades and roofs cool, clean air and reconnect nature."
   },
   {
    "name": "Timber (sustainable)",
    "hex": "#b8915c",
    "why": "Renewable, low-carbon structure and cladding."
   },
   {
    "name": "Recycled materials",
    "hex": "#9b9183",
    "why": "Lower embodied carbon and honest texture."
   },
   {
    "name": "Glass (high-performance)",
    "hex": "#a6c0c8",
    "why": "Daylight with thermal control."
   }
  ],
  "colors": {
   "primary": [
    {
     "name": "Foliage Green",
     "hex": "#5a7048"
    },
    {
     "name": "Warm Timber",
     "hex": "#b8915c"
    }
   ],
   "accent": [
    {
     "name": "Earth Brown",
     "hex": "#7a6a55"
    },
    {
     "name": "Sky Glass",
     "hex": "#a6c0c8"
    }
   ],
   "material": [
    {
     "name": "Recycled Grey",
     "hex": "#9b9183"
    },
    {
     "name": "Concrete",
     "hex": "#b3aea2"
    }
   ],
   "combos": [
    "Green + timber + glass",
    "Earth tones with living façade"
   ],
   "mood": "Natural, fresh, harmonious — greens and earth tones."
  },
  "facadeGuide": {
   "window": "Optimised glazing sized to orientation; operable for ventilation; deeply shaded.",
   "emphasis": "Layered depth — planters, balconies and shading fins.",
   "shading": "Brise-soleil, louvres, deep balconies and planting are central.",
   "balconies": "Deep planted terraces as living, shading outdoor rooms.",
   "frames": "Timber or recycled-content; operable.",
   "openings": "Generous but performance-tuned and screened.",
   "details": "Integrated PV, planters, irrigation and louvre systems.",
   "ornament": "Living greenery and shading rhythm provide all the richness."
  },
  "lighting": {
   "natural": "Daylight optimised and shaded; planting filters and softens light.",
   "artificial": "Low-energy, layered, warm; lit greenery at night.",
   "night": "Soft glow with illuminated living façades and terraces.",
   "recommendations": "Efficient warm LED; light planting subtly; avoid skyglow; emphasise green layers."
  },
  "buildingTypes": [
   "Residential towers",
   "Offices",
   "Campuses",
   "Mixed-use",
   "Civic buildings",
   "Schools"
  ],
  "checklist": [
   "Drive form from orientation, sun and wind",
   "Integrate green roofs and living façades",
   "Add brise-soleil and deep shading",
   "Use renewable/recycled materials",
   "Optimise and shade glazing; allow ventilation",
   "Layer planted terraces for depth",
   "Integrate PV and water systems",
   "Keep a natural green-and-earth palette"
  ],
  "mistakes": [
   "'Greenwashing' — token planting on a sealed glass box",
   "Unshaded glazing causing overheating",
   "Ignoring orientation and ventilation",
   "High-carbon materials undercutting the intent",
   "Planting with no irrigation/maintenance strategy"
  ],
  "prompts": {
   "exterior": "Sustainable green residential tower exterior, planted terraces and living façade, timber and recycled materials, brise-soleil shading, integrated solar, lush greenery, daylight, architectural photography --ar 2:3 --style raw",
   "facade": "Green façade, deep planted balconies, timber louvres, brise-soleil, high-performance glazing, abundant planting, frontal elevation, natural light",
   "night": "Sustainable building exterior at night, softly lit living façade and terraces, warm low-energy glow, greenery, architectural night photography",
   "aerial": "Aerial of a green building, green roofs and sky gardens, solar arrays, planted terraces, surrounding landscape, drone photography",
   "street": "Street view of a sustainable building exterior, living green façade, planted entrance, timber shading, people, documentary photography, daylight",
   "masterplan": "Sustainable district masterplan, green roofs, planted streets, solar, water systems, blue-green network, axonometric, green palette"
  },
  "gallery": [
   {
    "file": "Il Bosco Verticale Milano Px (137734459).jpeg",
    "caption": "Bosco Verticale — Boeri"
   },
   {
    "file": "Amager Bakke 2.jpg",
    "caption": "CopenHill — BIG"
   },
   {
    "file": "One Central Park Sydney.jpg",
    "caption": "One Central Park"
   },
   {
    "file": "https://images.unsplash.com/photo-1632164661434-505c7a17b228",
    "caption": "Living façade study"
   },
   {
    "file": "https://images.unsplash.com/photo-1568023905551-0f6247c134f3",
    "caption": "Brise-soleil shading"
   },
   {
    "file": "",
    "caption": "Green roof terrace"
   }
  ],
  "related": [
   "tropical-modern",
   "contemporary",
   "modern"
  ]
 }
]
;
if (typeof window !== "undefined") { window.STYLES = STYLES; }
