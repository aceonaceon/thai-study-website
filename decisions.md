# Design Decisions

- Entry mode: Surprise me
- Genre: Whimsical drama / journey film
- Director: Wes Anderson
- Film: The Darjeeling Limited (2007)
- Niche: Thai study abroad — universities, international schools, summer camps
- Pages: Home, Thai University list/detail, Thai Program list/detail, Thai School list/detail, Thai Camp list/detail, Blog list/detail, About
- Major page roles: Landing (Home), Catalog (list pages), Article (detail pages), Editorial (Blog), Narrative (About)
- Image placeholders: No — generate with fal.ai and use directly
- Sub-agent delegation plan: Parallel implementation of independent page files

## Demo Uniqueness Audit

- Previous-work audit: The existing site uses a generic SaaS/education template pattern — gradient hero (orange→blue), centered text over stock photo, card grids with hover lift, standard 4-column footer. Every section follows Hero→Features→Stats→CTA.
- Recurring traits to avoid: gradient overlays on hero images, card-grid-only layouts, generic hover translateY(-4px), orange-to-blue gradient identity, centered-text-over-photo hero
- Shell-ban list: [gradient hero overlay, 3-column card grid as primary composition, standard SaaS section cadence, pill metadata rows, translateY hover cards]
- Primary composition family: Compartment corridor — horizontal rooms viewed through framed openings, like looking into train compartments
- Why this family differs from the most recent output: Previous site was a vertical card-stack. New site uses framed horizontal compartments inspired by the train cross-section view.
- Wireframe-level uniqueness test: Remove color and type — the compartment framing, centered symmetry, and lateral flow are structurally distinct from any card grid.

## Research Notes

### Research Boundary
- Film research is observational input, not a spec: The Darjeeling Limited provides emotional and compositional vocabulary, not literal UI
- What is being translated into web language: symmetry, warm materiality, journey rhythm, framed compartments, curated-clutter density, ornamental restraint
- What must not be flattened into product-template logic: The sense of discovery and passage through spaces

### Film Palette
- Primary: Dusty teal `#2E8B8B` (train interior walls)
- Secondary: Warm brass/gold `#C5A55A` (fixtures, warmth)
- Accent: Saffron/marigold `#E8A317` (flowers, energy)
- Shadow: Warm charcoal `#3A3530` (never cold grey)
- Background: Warm cream `#F5ECD7` (aged paper, filtered light)
- Text: Dark warm brown `#2A2520`

### Director Signatures
1. Centered symmetry + planimetric framing → center-aligned layouts, symmetrical grids, flat aesthetic
2. Lateral tracking shots → horizontal scroll for journey sections, step-by-step flows
3. Curated clutter within ornamental frames → dense but organized info within decorative borders

### Film Translation Notes
- Framing: Characters framed by doorways, windows, train compartments — translate to content framed by decorative borders and containers
- Rhythm: Slow contemplative baseline punctuated by brief energetic bursts — generous whitespace with occasional bold moments
- Lighting: Warm filtered natural light, never cold — warm-toned shadows, cream backgrounds, amber overlays
- Space: Train compartments create intimate, organized spaces — content sections feel like distinct rooms
- Materiality: Indian textiles, brass fixtures, aged wood, handwritten notes — fabric-pattern backgrounds, warm shadows, paper textures
- What should stay ambiguous or restrained: No literal train imagery in UI, no kitsch "vintage travel" treatment

### Niche References
- ef.com: Photo-driven credibility, warm tones, clear CTA hierarchy
- semesteratsea.org: Journey metaphor as structure, premium feel through restraint
