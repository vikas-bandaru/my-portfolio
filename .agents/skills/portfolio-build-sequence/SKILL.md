---
name: portfolio-build-sequence
description: 'Orchestrate design and messaging skills for the Vikas Bandaru portfolio build in a strict 3-phase sequence with mandatory approval stops between phases. Use when building or reviewing pages for this portfolio.'
license: MIT
metadata:
  author: vikas
  version: "1.0.0"
---

# Portfolio Build Sequence

Orchestrate the design and messaging skills for the portfolio build in a fixed, phase-by-phase order with explicit approval gates.

## Core Rules

1. **Strict Phase Isolation**: Never combine phases into a single output or step.
2. **Mandatory Approval Stops**: Never skip the approval stop between phases, even if the next phase seems obvious. Wait for explicit user approval before proceeding to the next phase.
3. **Targeted Redos**: If changes are requested at any stop, redo that phase only — do not cascade unrequested changes into earlier or later phases.
4. **Copy & Tone Adherence**: Always reference and enforce the copy/tone rules and sitemap/mission defined in [`plan.md`](file:///Users/vikas/Documents/vikas-bandaru-portfolio/plan.md).

---

## Phase 1 — Messaging

### Objectives & Skills
- Use **[`storybrand-messaging`](file:///Users/vikas/Documents/vikas-bandaru-portfolio/.agents/skills/storybrand-messaging/SKILL.md)** to draft the Home page mission statement and hero framing. Frame the argument clearly around the rote-learning-vs-real-problem-solving mission rather than a generic "About Me".
- Use **[`made-to-stick`](file:///Users/vikas/Documents/vikas-bandaru-portfolio/.agents/skills/made-to-stick/SKILL.md)** to tighten that messaging using the SUCCESs framework (Simple, Unexpected, Concrete, Credible, Emotional, Stories).
- Ensure all copy complies with the copy/tone rules in [`plan.md`](file:///Users/vikas/Documents/vikas-bandaru-portfolio/plan.md) (natural Indian English, no AI-flavored vocabulary, concrete facts instead of puffery, varied sentence rhythm).

### Output
- Draft copy ONLY. No layout or visual implementation work in this phase.

### Approval Stop
- **STOP.** Present the draft copy clearly and wait for explicit user approval before continuing to Phase 2.

---

## Phase 2 — Structure & Interaction

### Objectives & Skills
- **Prerequisite**: Only start once Phase 1 copy has been explicitly approved.
- Use **[`web-typography`](file:///Users/vikas/Documents/vikas-bandaru-portfolio/.agents/skills/web-typography/SKILL.md)** to establish type scale, line heights, and hierarchy based on the approved Phase 1 copy.
- Use **[`design-everyday-things`](file:///Users/vikas/Documents/vikas-bandaru-portfolio/.agents/skills/design-everyday-things/SKILL.md)** on the single interactive element on the Home page (ensuring clear affordances, signifiers, constraints, and feedback).
- Use **[`ux-heuristics`](file:///Users/vikas/Documents/vikas-bandaru-portfolio/.agents/skills/ux-heuristics/SKILL.md)** to audit navigation, the contact form, and the blog archive for usability and clarity.

### Output
- Page structure and layout implementation (components, routing, typography, interactions), without final aesthetic trimming or ruthless simplification.

### Approval Stop
- **STOP.** Present the structural and interactive implementation result and wait for explicit user approval before continuing to Phase 3.

---

## Phase 3 — Final Simplicity Pass

### Objectives & Skills
- **Prerequisite**: Only start once Phase 2 is approved and all target pages are built.
- Use **[`steve-jobs-design-review`](file:///Users/vikas/Documents/vikas-bandaru-portfolio/.agents/skills/steve-jobs-design-review/SKILL.md)** across every finished page for a ruthless simplicity audit — cut anything that doesn't strictly earn its place.

### Output
- Final reviewed pages along with a detailed list of what was cut and the rationale for each cut.

### Approval Stop
- **STOP.** Present the final reviewed pages and cuts for final user approval.
