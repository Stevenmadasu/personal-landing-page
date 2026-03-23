# STANDARDS.md — Technical & Design Standards

## Color System
| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0a192f` | Page background |
| `--bg-secondary` | `#112240` | Card backgrounds, nav |
| `--accent` | `#64ffda` | CTAs, links, highlights |
| `--text-primary` | `#ccd6f6` | Body text |
| `--text-bright` | `#e6f1ff` | Headings |
| `--text-secondary` | `#8892b0` | Muted text |

## Typography
- **Headings:** Outfit (Google Fonts) — 700 weight
- **Body:** Inter (Google Fonts) — 400/500 weight
- **Scale:** fluid `clamp()` from mobile to desktop
- **Line height:** 1.7 for body, 1.1 for hero

## Spacing
- Base unit: `1rem` (16px)
- Section padding: `8rem` vertical (desktop), `5rem` (mobile)
- Container max-width: `1100px`

## Responsive Breakpoints
| Breakpoint | Target |
|---|---|
| `768px` | Tablet / mobile layout switch |
| `480px` | Small mobile refinements |

## Accessibility
- WCAG AA contrast ratios on all text
- All images have descriptive `alt` attributes
- Interactive elements keyboard-accessible
- ARIA labels on navigation, buttons
- Semantic HTML5 (`<nav>`, `<section>`, `<article>`, `<footer>`)
- Single `<h1>` per page with logical heading hierarchy

## Performance
- No frameworks — vanilla HTML/CSS/JS
- Google Fonts loaded via `@import` with `display=swap`
- Lighthouse targets: ≥90 Performance, Accessibility, Best Practices
- Lazy animations via IntersectionObserver (no scroll event overhead)

## Code Conventions
- CSS custom properties for all design tokens
- BEM-inspired class naming (`.section-label`, `.project-card`)
- Mobile-first responsive approach
- No inline styles (except minor `style` attributes for spacing overrides)

## SEO
- `<title>` and `<meta description>` on every page
- OpenGraph and Twitter Card meta tags
- Semantic heading structure (`h1` → `h2` → `h3`)
- Descriptive, unique `id` attributes on all interactive elements

## File Structure
```
personal-landing-page/
├── images/headshot.jpg
├── index.html
├── index.css
├── script.js
├── PRD.md
├── STANDARDS.md
└── README.md
```

## W3C Compliance
- Valid HTML5 (no deprecated elements)
- Proper `DOCTYPE`, `lang`, `charset`
- All tags properly closed
- No duplicate IDs
