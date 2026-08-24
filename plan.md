# Portfolio Website — Build Context for Google Antigravity IDE

## Who this is for

I'm Vikas Bandaru — an engineering educator turned independent builder. 11 years in engineering education (7 in academia as Assistant Professor, 4 in technical training management), now working as an independent AI educator, learning architect, and self-taught full-stack developer. Salesforce Certified App Builder and Platform Developer I, with 1.5 years teaching those certifications. I run a coding/tech YouTube channel for Indian developers, and I'm the owner and lead developer of LogicSims — a discovery-based edtech platform I'm building from scratch.

## The mission this site exists to serve

The Indian education system is overly focused on test-based, score-oriented rote learning — and it shows: graduates with high scores routinely underperform in job roles. I believe real reform means personalized, problem-solving-based learning, where building things and solving real problems makes learning meaningful, and jobs become a byproduct of that experience rather than the goal itself. Reformers like Sugata Mitra and Sonam Wangchuk have proposed directions here; other countries have tried models worth studying and localizing for Indian context.

LogicSims is my proposed solution and proof-of-concept — but this isn't just about LogicSims succeeding commercially. The point is spreading these ideas to people who need them, and inviting others to join or build something similar.

This site is the platform for that argument — not a resume, not a lead-gen page.

## Architecture: hub-and-spoke

**This build = the HUB** (a separate LogicSims product site is a different spoke, built separately, linked from here — don't build LogicSims features into this repo).

### Hub sitemap

- `/` **Home**
  - Mission statement — the rote-learning-vs-real-problem-solving argument, in specific personal language, not generic "About Me" copy
  - LogicSims as evidence — short pitch, links out to the LogicSims spoke
  - Flagship teaching clip (embedded video)
  - One restrained interactive element (not competing with the clip for attention — a small proof-of-thinking moment, not a gimmick)
  - Snapshot links to: Blog, Speaking, Teaching/YouTube, Consulting, LogicSims
  - Closing CTA — an invitation to join/collaborate/subscribe, not a generic contact form
- `/about` — Fuller story tying educator/builder/creator together — specific enough that it couldn't be copy-pasted by anyone else
- `/blog` — Education reform writing, articles, essays, filterable by topic; `/blog/[slug]` for individual posts
- `/speaking` — Past talks/speeches at organizations, available topics, booking contact
- `/teaching` — YouTube section: featured videos, playlists, channel link (not a full mirror); plus an online training consulting offering with two tracks — **train the student** (direct instruction) and **train the trainer** (helping other educators/trainers build their own teaching capability)
- `/consulting` — Salesforce/dev consulting, plus recent hands-on web development experience: built traits.co.in (an e-commerce site) using readdy.ai integrated with Supabase and edge functions for DB operations, as part of a small web-dev venture taking on client engagements
- `/contact` — Simple, direct: email/social, mailing list signup

## Design direction

Minimalist, content-first — closer to a "digital garden" than a flashy portfolio. No motion-heavy design, no gimmicky animation, no skill-bar/percentage-chart widgets, no bravado language ("10x", "master of X"). The site's job is to demonstrate clarity of thinking, which is the actual differentiator here — so the design should get out of the way of the writing rather than compete with it.

Reference points for inspiration (not to copy pixel-for-pixel): Julia Evans (jvns.ca), Josh W. Comeau (joshwcomeau.com), swyx (swyx.io), Paul Graham (paulgraham.com).

## Content/copy tone

Write in natural Indian English — humanized, conversational, relatable to an Indian audience. Not corporate-speak, not overly formal, not robotic. Read every section aloud before finalizing: if it sounds like a press release or could apply to any generic educator by swapping nouns, rewrite it. The mission statement and About page especially need to sound like an actual person with an actual argument, not a templated bio.

Apply these rules to every piece of copy generated for this site, not just the mission statement:

- Vary section structure — don't give every page/section the same shape or a neat wrap-up line at the end. Let some sections run short, some run long.
- Cut inflated/promotional language: pivotal, testament, evolving landscape, vibrant, boasts, showcases, groundbreaking, must-visit, in the heart of. Replace puffery with a specific, concrete fact.
- Avoid AI-flavored vocabulary entirely: delve, landscape (metaphorical), tapestry, leverage (verb), harness, navigate (metaphorical), realm, myriad, plethora, multifaceted, revolutionize, synergy, ecosystem (non-technical), resonate, streamline, embark on a journey. Words like robust, seamless, cutting-edge, innovative, comprehensive, pivotal, nuanced, compelling, transformative are fine alone but a red flag in clusters of 3+.
- Avoid copula avoidance ("serves as / stands as / represents / functions as" instead of plain "is") and fake-depth "-ing" phrases ("highlighting...", "underscoring...") tacked onto sentences.
- Vary sentence rhythm — mix short and long sentences, allow fragments occasionally, limit em dashes to roughly one per 3-4 paragraphs.
- Cut hedging/filler openers ("It's important to note that...", "It's worth mentioning..."), vague sourcing ("experts say"), and generic upbeat closers ("the future looks bright").
- Avoid overused transitions ("Moreover," "Furthermore," "In conclusion," "When it comes to") — often no transition is needed at all.
- Include real voice and opinion where it fits naturally, rather than flat neutral reporting — this is a thought-leadership site, the writing should read like someone with actual convictions, not a brochure.
- Keep technical accuracy, proper nouns, and the underlying argument intact — these rules are about phrasing and structure, not content.

## Tech stack

- Next.js (App Router) + TypeScript — matches the stack already used for LogicSims
- Tailwind CSS
- Supabase for the mailing list / contact form backend
- MDX or a simple headless CMS approach for the blog — whichever keeps content editing simple, since this will be updated regularly
- Deploy target: Vercel

## Skills to use from the wondel.ai library

Load and apply these during the build:

- **StoryBrand Messaging** — for framing the Home page mission statement and hero section so the argument is clear and story-structured, not a generic "About Me"
- **Made to Stick** — for making the reform-thesis messaging memorable (apply the SUCCESs framework to the mission statement and section headers)
- **Web Typography** — for getting the typography right on a content-heavy, minimalist site where the writing has to carry the page
- **Design of Everyday Things** — for keeping the one interactive element on Home clear and purposeful (affordances, signifiers, feedback) rather than decorative
- **UX Heuristics** — usability-first simplicity pass; complements the design review below with "make what's left obvious"
- **Steve Jobs Design Review** — final ruthless-simplicity pass on every page before shipping: cut anything that doesn't earn its place

Optionally, orchestrate the whole build with the **Create a Website** metaskill (`Use create-website skill.`) if a phase-by-phase guided flow is preferred over building page-by-page manually.

## What NOT to do

- No skill percentage bars or quantitative self-ratings
- No stock "passionate about technology" language
- No motion/animation as decoration — only where it serves a real interaction
- Don't build LogicSims product features here — this repo is the hub only, LogicSims links out