# Vikas Bandaru — Personal Brand & Mission Website (Redesign)

## 1. Project Description
A redesigned personal brand and mission website for Vikas Bandaru — engineering educator, independent builder, and systems thinker. The site communicates a single thesis (learning through building and consequence rather than rote memory), showcases the LogicSims prototype and client builds, surfaces two public YouTube channels, and offers two clear ways to engage (paid work and mission collaboration).

Target audience: educators, engineering faculty, hiring managers, developers, and mission collaborators.

Core value: make a dense, idea-led personal mission legible, credible, and visually distinctive.

## 2. Page Structure
- `/` - Home (single-page narrative, redesigned in this phase — now includes the full Collaborate mission content as an inline section)
- `/ideas` - Ideas & Systems Analysis (future phase)
- `/ideas/:slug` - Idea / essay detail (future phase)
- `/builds` - Body of Work / Builds (future phase)
- `/builds/:slug` - Build detail (future phase)
- `/watch` - Video hub for the two channels (future phase)
- `/work` - Work With Me (paid engagements) (future phase)
- `/about` - About (future phase)
- `/contact` - Contact (future phase)

## 3. Core Features
- [x] Sticky top navigation with anchor navigation and mobile menu
- [x] Editorial hero with mission statement and dual CTAs
- [x] Evidence & problem narrative section
- [x] Interactive pedagogy comparison toggle (Rote Instruction vs. Discovery Simulator)
- [x] "Operating Loop" thinking framework (OBSERVE → SHARE) and idea cards
- [x] Flagship build spotlight + build/experiment grid
- [x] Two-channel video section distinguishing their roles
- [x] Engagement section (Work With Me / Collaborate)
- [x] Collaborate on the Mission section — three participation paths, non-transactional note, and open-idea CTA
- [x] Scroll reveal animations, responsive layout, semantic markup
- [ ] Inner pages for Ideas, Builds, Watch, Work, About (Phase 2)
- [ ] Contact form + email capture (Phase 3)

## 3.1 Design System (current)
- Theme: royal blue — `primary` royal blue, `accent` bright azure, `secondary` cool slate, cool porcelain backgrounds with deep navy ink.
- Typography: Fraunces (headings), Manrope (body), JetBrains Mono (labels).
- Eyebrow labels: removed from standard section headers; kept only where they add real framing/meaning (hero identity badge, "Flagship Experiment" label, card type/role labels, "The Evidence & The Problem").

## 4. Data Model Design
No database required for this phase. The site is editorial/static content driven from local content modules. If a newsletter or contact capture is added later, it will use the built-in Form feature (no database needed).

## 5. Backend / Third-party Integration Plan
- Database: Not needed (static editorial content)
- Shopify: Not needed
- Stripe / Payments: Not needed
- Resend / Email: Not needed for this phase
- Forms: A contact / inquiry form via the built-in Form feature in a later phase
- Analytics: Optional built-in analytics after publishing

## 6. Development Phase Plan

### Phase 1: Home page redesign (current)
- Goal: Deliver a complete, visually distinctive single-page home experience that communicates the mission.
- Deliverable: Design system tokens + fully responsive home page with all sections and working interactions.

### Phase 2: Inner pages
- Goal: Build the Ideas, Builds, Watch, Work, Collaborate, and About pages with shared navigation.
- Deliverable: Routed inner pages reusing shared navigation and footer components.

### Phase 3: Conversion & SEO polish
- Goal: Add the contact form, refine SEO metadata, and publish-ready polish.
- Deliverable: Working contact form, structured metadata, and final QA pass.