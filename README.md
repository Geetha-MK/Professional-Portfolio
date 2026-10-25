# Portfolio: software and hardware engineer

React + Vite, dark theme, one deliberate animation. Your details are in `src/data/portfolio.js`. Skills, projects and certifications each have their own file in `src/data/`.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build locally
```

---

## 1. Design plan

**Subject.** A portfolio for a 2026 Electronics and Communication graduate who completed a six-month Java full stack program and is open to both software roles (Java, full stack) and hardware or embedded roles (C, electronics). **Audience:** recruiters and engineering managers hiring freshers on either side. **Job of the page:** make "a graduate who can work on both the software and the hardware side" believable in under ten seconds, and let a recruiter reach the projects, the internship and the certification in two clicks. The electronics background is the memorable detail, not the headline.

### Palette: a dark PCB

| Name | Hex | Use |
|---|---|---|
| Soldermask | `#0e1c1a` | Page background |
| Raised board | `#142726` | Highlighted row, code blocks |
| Trace | `#28403c` | Borders, inactive rail |
| Silkscreen | `#e8efe7` | Primary text |
| Silkscreen dim | `#a3b6ae` | Secondary text |
| Gold pad | `#e3b94b` | Accent: electronics, active state, primary button |
| Signal blue | `#6fb1e6` | Accent: software |

Gold and blue are not decoration. They encode a real axis: **blue is software, gold is electronics**. The project markers, the filter chips, the layer bars and the hero scan line all follow it, so the page quietly shows that most of the work is software with one project that spans both.

### Type

- **Bricolage Grotesque** (variable) for everything. Heavy, tight headlines; regular weight for body. One family, used with weight and size contrast.
- **IBM Plex Mono** for code snippets only, never for decorative labels.
- Scale: 15 / 17 / 21 px, then fluid up to a 72 px hero. Body line length capped at 62ch.

### Layout

Left-aligned throughout. A fixed rail on the left doubles as navigation and progress; content sits in a single 54rem column.

```
┌────────┬──────────────────────────────────────────┐
│ Geetha │  I build Java web applications. I came   │
│ M K    │  to software through electronics.        │
│ ● Intro│  ┌┐┌─┐┌┐┌┐   ← name as a UART waveform    │
│ │      │  G  e  e  t  h  a                        │
│ ○ Skills  0x47 0x65 ...                           │
│ ○ Projects  Java full stack developer, 2026 grad  │
│ ○ Exp. │  [See the projects] [Contact me]         │
│ ○ Contact                                         │
└────────┴──────────────────────────────────────────┘
 Skills     → seven layers from Interface down to Electronics and hardware,
              with C and hardware highlighted
 Projects   → rows that expand in place, filtered by Software / Hardware / C
 Certifications → one row per certificate
 Experience → internship and education timeline
 Contact    → email, copy button, links
```

On screens under 56rem the rail becomes a sticky top bar.

### Principles

1. **One memorable moment.** On load, the scan line draws your name as the bytes a UART would send (start bit, 8 data bits, stop bit), and each character appears with its hex code as the line reaches it. Hover a character to highlight its frame. Nothing else animates on its own.
2. **Structure carries information.** The rail's gold segment runs to the section you are reading. The layer stack really is ordered top to bottom. The timeline is the only numbered-style structure because it is the only real sequence.
3. **No card grid.** Skills are rows, projects are rows. Rows scan faster and avoid the repeated-rounded-card look.
4. **Motion answers a click.** Project rows expand, the plus turns into a cross, filters switch. All motion is removed under `prefers-reduced-motion`.

### What changed during plan review

The first draft was near-black with an acid-green accent, mono-font labels, `01 / 02 / 03` section numbers and a grid of project cards with fade-up on scroll. That is the look most generated developer portfolios share, so it was replaced: soldermask teal-black with gold and blue that mean something, a single sans family, a trace rail instead of numbers, rows instead of cards, and one hero animation instead of per-section reveals.

---

## 2. Folder structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                 entry: fonts, styles, mount
    ├── App.jsx                  page composition
    ├── data/
    │   └── portfolio.js         ALL content: edit this to make it yours
    ├── hooks/
    │   └── useActiveSection.js  which section is in view (IntersectionObserver)
    ├── components/
    │   ├── Rail.jsx             left trace nav / mobile top bar
    │   ├── Hero.jsx             headline + waveform + intro
    │   ├── SignalTrace.jsx      UART waveform of the name
    │   ├── StackLayers.jsx      "screen to silicon" layer stack
    │   ├── Projects.jsx         filter chips + expandable rows
    │   ├── Experience.jsx       timeline
    │   └── Contact.jsx          email, copy button, links
    └── styles/
        ├── tokens.css           colors, type scale, layout variables
        ├── base.css             reset, focus, selection, reduced motion
        └── sections.css         all component styles
```

---

## 3. Implementation stages

Each stage leaves the project in a state that runs, so you can stop and check.

**Stage 1: scaffold.** `npm install`, then `vite.config.js`, `index.html`, `public/favicon.svg`, `src/main.jsx`. Check: `npm run dev` shows a blank dark page without errors once `App.jsx` exists.

**Stage 2: design system.** `styles/tokens.css` and `styles/base.css`. Colors, the type scale and layout widths are CSS variables, so a re-theme is a one-file change. Check: background and font are correct; Tab shows a gold focus outline.

**Stage 3: content.** `data/portfolio.js`. Write your real content first; the components only render what is in this file. Check: nothing visible yet, but the shapes (`profile`, `layers`, `projects`, `jobs`) are settled.

**Stage 4: navigation.** `hooks/useActiveSection.js` and `components/Rail.jsx`. The hook watches a thin band in the middle of the viewport; the rail's gold segment is a CSS height driven by `--step / --steps`. Check: scrolling moves the active node.

**Stage 5: hero.** `SignalTrace.jsx` and `Hero.jsx`. The waveform is a single SVG path built from the character codes; `preserveAspectRatio="none"` plus `vector-effect: non-scaling-stroke` lets it stretch to any width with a constant line weight. The reveal is a CSS `clip-path` animation, with a separate scan line that moves in step. Check: the line draws once on load; hovering a character highlights its frame.

**Stage 6: sections.** `StackLayers.jsx`, `Projects.jsx`, `Experience.jsx`, `Contact.jsx`, then `App.jsx` to compose them. Project rows expand with a `grid-template-rows: 0fr → 1fr` transition and use `inert` while closed so hidden links are not focusable. Check: filters work, rows open and close, "Copy email" shows "Email copied".

**Stage 7: polish.** Test at 390 px and 1360 px, tab through the whole page, and turn on "reduce motion" in your OS to confirm the page is fully visible and still. Run `npm run build`.

---

## 4. Make it yours

Three files hold the lists you will keep adding to. Each starts with a comment explaining the fields. Copy an existing block, paste it at the top of the list, and fill it in.

- **Add a project:** `src/data/projects.js`. Set `categories` to `['software']`, `['hardware']`, `['c']` or a mix. The filter chips are built from the categories in use. To add a new filter, add one line to `categories` at the top of that file.
- **Add a certification:** `src/data/certifications.js`. Only `name` and `issuer` are required. Add `href` to link the certificate or a PDF kept in `public/`.
- **Add a skill:** `src/data/skills.js`. Add it to a group's `tools` list, or add a new group.

Other things in `src/data/portfolio.js`:

1. **Resume.** Export it as `public/resume.pdf` and set `profile.resume` to `'/resume.pdf'`. A download button then appears in the contact section.
2. **LinkedIn.** Uncomment the line in `profile.links` and add your URL.
3. **Gift Store link.** Add a `links` entry in `projects.js` once that repository is public.
4. **Waveform.** `profile.name` drives it. Keep it ASCII and 3 to 10 characters.

## 5. Deploy

`npm run build` creates a static `dist/` folder. It works on Netlify, Vercel and Cloudflare Pages with the defaults (build command `npm run build`, output `dist`). For GitHub Pages at `https://<user>.github.io/<repo>/`, set `base: '/<repo>/'` in `vite.config.js` first.

## 6. Quality checklist

- Keyboard: skip link, visible focus on every control, filters and rows are real buttons with `aria-pressed` / `aria-expanded`.
- Reduced motion: all animation and transitions are disabled.
- Contrast: body text and gold on the board background are well above WCAG AA.
- Responsive: rail becomes a sticky bar under 56rem; timeline and layers collapse to one column under 40rem.
