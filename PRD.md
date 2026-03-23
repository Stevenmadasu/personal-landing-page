# Product Requirement Document

**Product:** Steven Madasu — Personal Landing Page
**Author:** Steven Madasu
**Date:** March 23, 2026
**Version:** 1.0

---

## 01 — Problem Statement

Hiring managers and recruiters in Product Management and AI product roles spend an average of 6–10 seconds scanning a candidate's online presence before deciding to dig deeper. For candidates like emerging product builders with cross-functional experience in business analytics, AI, and hands-on product development, a traditional resume or LinkedIn profile alone fails to communicate the full picture — the strategic thinking, the shipped products, and the technical fluency that differentiate them from other applicants.

Steven Madasu is a senior at the University of Iowa studying Business Analytics & Information Systems with real product management experience (CDS Global) and a portfolio of self-initiated AI-driven products (FindAFlight, The Fits, GenieTunes). There is currently no single, branded digital destination that consolidates his professional identity, showcases his product work with context and narrative, and provides recruiters with a frictionless path to engage.

**The core problem:** Without a cohesive personal landing page, Steven's diverse strengths — PM internship experience, AI product builds, and business analytics expertise — remain fragmented across platforms, reducing his discoverability, credibility, and conversion rate with target employers.

---

## 02 — Target Audience

### Primary Audience

| Audience Segment | Description | Key Needs |
|---|---|---|
| **Product Management Recruiters** | Recruiters at tech companies, startups, and consulting firms hiring for APM/PM roles | Quick assessment of PM competency, shipped products, communication skills |
| **Hiring Managers (PM/AI roles)** | Engineering and product leaders evaluating candidates for PM or AI product roles | Evidence of strategic thinking, technical depth, product sense, and execution |
| **Startup Founders** | Early-stage founders looking for product-minded builders who can wear multiple hats | Proof of builder mentality, shipping velocity, comfort with ambiguity |

### Secondary Audience

| Audience Segment | Description | Key Needs |
|---|---|---|
| **University of Iowa Faculty & Career Services** | Professors, advisors, and career coaches evaluating student readiness | Professional presentation, alignment with BAIS program outcomes |
| **Peers & Collaborators** | Fellow students, hackathon teammates, and industry contacts | Understanding Steven's skills, interests, and availability for collaboration |
| **Professional Network (LinkedIn connections)** | Industry contacts who want a deeper look beyond a LinkedIn summary | Narrative context for projects, contact accessibility |

---

## 03 — Goals & Success Metrics

### Product Goals

| # | Goal | Success Metric | Target | Timeframe |
|---|---|---|---|---|
| G1 | Establish a professional digital identity that positions Steven as a technical product builder | Landing page is live, fully functional, and accessible via custom domain | 100% complete | Launch (Week 1) |
| G2 | Clearly communicate PM competency and AI product experience | ≥3 product case studies with problem/solution/outcome framing are visible above the fold or within one scroll | 3 projects showcased | Launch |
| G3 | Drive recruiter engagement and inbound interest | Click-through rate on resume download or contact CTA | ≥15% CTR | First 60 days |
| G4 | Increase discoverability through search and social sharing | Page is indexed by Google; OpenGraph tags render correctly on LinkedIn/Twitter | Indexed + OG preview working | Week 2 |
| G5 | Demonstrate technical capability through the site itself | Site scores ≥90 on Lighthouse Performance, Accessibility, and Best Practices audits | ≥90 on each | Launch |
| G6 | Support ongoing iteration as new projects ship | Content can be updated without full redesign; modular project card structure | New project addable in <30 min | Ongoing |

### Anti-Goals

- This is **not** a blog or content platform — no CMS, no post publishing workflow.
- This is **not** a full portfolio site with deep case study subpages (v1 scope).
- This is **not** an e-commerce or transactional product.

---

## 04 — Required Content

### Hero / Above the Fold

| Priority | Content Element | Description |
|---|---|---|
| **MUST** | Professional headshot | High-quality photo that conveys approachability and professionalism |
| **MUST** | Name and headline | Full name + concise positioning statement (e.g., "Product Builder · AI Enthusiast · Business Analyst") |
| **MUST** | Primary CTA | Clear call-to-action — either "View Resume," "Get in Touch," or both |
| **SHOULD** | Animated or dynamic greeting | Subtle motion or typewriter effect to create visual interest |

### About Section

| Priority | Content Element | Description |
|---|---|---|
| **MUST** | Professional bio | 2–3 sentence summary: University of Iowa senior, BAIS major, PM intern at CDS Global, passion for building AI products |
| **MUST** | Key differentiators | Highlight the intersection of business analytics, product management, and hands-on AI product development |
| **SHOULD** | Education details | University of Iowa, expected graduation, degree program |
| **SHOULD** | Personal touch | A sentence about interests, values, or what drives him beyond the resume |

### Projects / Product Portfolio

| Priority | Content Element | Description |
|---|---|---|
| **MUST** | FindAFlight | Flight decision tool — include one-line description, Steven's role, and the problem it solves |
| **MUST** | The Fits | AI-powered fashion app — include one-line description, Steven's role, and AI/ML angle |
| **MUST** | GenieTunes | AI music generator — include one-line description, Steven's role, and creative AI angle |
| **MUST** | Problem → Solution framing | Each project card must communicate: what problem it solves, what was built, and the outcome or current status |
| **SHOULD** | Links to live demos or repos | Where available, link to GitHub repos, live apps, or demo videos |
| **SHOULD** | Visual assets | Screenshots, mockups, or icons representing each product |

### Experience Section

| Priority | Content Element | Description |
|---|---|---|
| **MUST** | CDS Global PM Internship | Title, company, duration, and 2–3 bullet points highlighting PM contributions (roadmapping, stakeholder alignment, feature delivery) |
| **SHOULD** | Other relevant experience | Any additional roles, leadership positions, or relevant extracurriculars |

### Skills & Competencies

| Priority | Content Element | Description |
|---|---|---|
| **MUST** | Product skills | Product strategy, roadmapping, user research, A/B testing, PRD writing, agile/scrum |
| **MUST** | Technical skills | Python, SQL, data analytics, API integration, prototyping tools |
| **SHOULD** | Tools | Figma, Jira, Notion, Tableau, Git/GitHub |

### Contact & Links

| Priority | Content Element | Description |
|---|---|---|
| **MUST** | LinkedIn profile link | Direct link to Steven's LinkedIn |
| **MUST** | GitHub profile link | Direct link to Steven's GitHub |
| **MUST** | Email or contact form | Professional email address or a simple contact mechanism |
| **MUST** | Resume download | Downloadable PDF resume |
| **SHOULD** | Additional social links | Twitter/X, Medium, or other relevant profiles if applicable |

### Footer

| Priority | Content Element | Description |
|---|---|---|
| **MUST** | Copyright notice | © 2026 Steven Madasu |
| **SHOULD** | "Built by Steven Madasu" | Reinforces the builder narrative — the site itself is a product |

---

## 05 — Scope

### In Scope (v1 — Launch)

- Single-page responsive landing page
- All **MUST** content elements listed in Section 04
- Responsive design that works on desktop, tablet, and mobile viewports
- Custom domain configuration (Azure Static Web Apps)
- GitHub-based version control and deployment pipeline
- Lighthouse audit compliance (Performance, Accessibility, Best Practices ≥ 90)
- OpenGraph and basic SEO meta tags
- Resume download functionality (PDF hosted in repo)

### Out of Scope (v1)

- Multi-page architecture or routing
- Blog, CMS, or dynamic content management
- Backend server or database
- User authentication or login
- Analytics dashboards (basic analytics via tag may be added post-launch)
- Deep-dive case study subpages for each project
- Contact form with backend email integration (mailto: link is sufficient for v1)
- Internationalization / multi-language support

### Future Considerations (v2+)

- Individual project case study pages with detailed write-ups
- Blog or "Building in Public" section
- Integrated analytics (Google Analytics or Plausible)
- Dark/light mode toggle
- Interactive project demos embedded in the page
- Testimonials or recommendations section

---

## 06 — Assumptions & Constraints

### Assumptions

| # | Assumption |
|---|---|
| A1 | Steven has a professional headshot ready for use on the landing page |
| A2 | Steven's resume is available as a downloadable PDF |
| A3 | All three products (FindAFlight, The Fits, GenieTunes) have enough context to write meaningful descriptions, even if not all are fully shipped |
| A4 | Steven has active LinkedIn and GitHub profiles that are up-to-date |
| A5 | The site will be the primary "digital home" link shared with recruiters and on LinkedIn |
| A6 | Recruiters will primarily view the site on desktop, but mobile responsiveness is still critical |
| A7 | The page content will be static and manually updated as needed (no CMS requirement) |

### Constraints

| # | Constraint | Impact |
|---|---|---|
| C1 | **Hosting:** Azure Static Web Apps (required by assignment) | No server-side logic; all content must be client-side rendered |
| C2 | **Version Control:** GitHub repository (required by assignment) | All code changes tracked via Git; deployment triggered by push to main |
| C3 | **Development Environment:** Replit as primary IDE | Development and iteration happen in Replit, with Git push to GitHub |
| C4 | **Timeline:** Must be completed within the current academic semester | Limits scope to v1 features; no time for extended iteration cycles |
| C5 | **No backend services** | Contact form, if any, must use mailto: or a third-party embed (e.g., Formspree) |
| C6 | **Single developer** | Steven is the sole designer, developer, and content author — scope must be realistic for one person |
| C7 | **Must pass W3C validation** | HTML must be standards-compliant; no deprecated tags or structural errors |

---

**Next step:** Save this file as `PRD.md`
