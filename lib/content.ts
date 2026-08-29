export type MaturityStatus = "live" | "building" | "vision";

export interface IdeaItem {
  slug: string;
  title: string;
  date: string;
  category: "Reform" | "Pedagogy" | "Engineering";
  excerpt: string;
  readTime: string;
  status: MaturityStatus;
  reviewStatus: "legacy_pending_review" | "approved";
  content: string[];
  relatedBuildSlug?: string;
  relatedChannel?: "official" | "tech";
}

export interface BuildItem {
  slug: string;
  title: string;
  tagline: string;
  category: "Platform" | "Client Build" | "Experiment";
  status: MaturityStatus;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  summary: string;
  outcomes: string[];
  highlights: {
    label: string;
    description: string;
  }[];
}

export const IDEAS: IdeaItem[] = [
  {
    slug: "rote-to-real-problem-solving",
    title: "Why High Exam Scores Fail in Software Roles (And How Discovery Learning Fixes It)",
    date: "August 18, 2026",
    category: "Reform",
    excerpt: "An analysis of why traditional score-oriented technical education in India creates brittle graduates, and how simulation-based learning restores practical capability.",
    readTime: "6 min read",
    status: "building",
    reviewStatus: "legacy_pending_review",
    relatedBuildSlug: "logicsims",
    relatedChannel: "official",
    content: [
      "In traditional technical education across India, students are evaluated primarily on their ability to recall syntax and reproduce standard algorithmic answers under exam conditions. This system rewards memory retention over diagnostic reasoning.",
      "When these graduates join production software teams, they encounter non-deterministic bugs, complex state dependencies, and ambiguous specs — environments where textbook recall offers zero guidance.",
      "The root problem is structural rather than individual capability. Treating software engineering as an exercise in memorization strips learners of the chance to develop mental models through consequence.",
      "Discovery-based learning flips the lecture model. Rather than providing formulas first and asking students to confirm them, we present students with interactive simulations: broken networks, memory leaks, and unoptimized queries.",
      "By experimenting, breaking things, and observing real-time feedback, learners construct deep conceptual mental models. When they understand why a system behaves a certain way, the syntax becomes trivial to look up and apply."
    ]
  },
  {
    slug: "train-the-trainer-framework",
    title: "Train the Trainer: Building Capability Beyond the Slide Deck",
    date: "July 24, 2026",
    category: "Pedagogy",
    excerpt: "How to coach engineering faculty to shift from lecturing syntax to guiding open-ended technical discovery.",
    readTime: "8 min read",
    status: "building",
    reviewStatus: "legacy_pending_review",
    relatedBuildSlug: "logicsims",
    relatedChannel: "official",
    content: [
      "Most faculty development programs in engineering colleges focus on syllabus coverage and tool adoption. They train teachers on what slides to show, rather than how to facilitate active diagnostic reasoning.",
      "When an instructor is accustomed to lecturing from slides, open-ended student questions can feel disruptive. The traditional lecture is safe because it is completely deterministic.",
      "To build discovery-based classrooms, educators need training in Socratic facilitation and constraint design. An effective educator designs problems where the error message itself becomes the instructor.",
      "By shifting the teacher's role from 'authoritative broadcaster' to 'diagnostic facilitator', students develop self-reliance and the confidence to debug unfamiliar failures without waiting for a ready-made solution."
    ]
  },
  {
    slug: "mental-models-async-javascript",
    title: "Teaching Mental Models Over Syntax: The Async Execution Case Study",
    date: "June 12, 2026",
    category: "Engineering",
    excerpt: "Why memorizing event loop rules fails under pressure, and how visual state machines teach asynchronous logic intuitively to developers.",
    readTime: "5 min read",
    status: "building",
    reviewStatus: "legacy_pending_review",
    relatedBuildSlug: "logicsims",
    relatedChannel: "tech",
    content: [
      "Asynchronous JavaScript is notorious for tripping up beginners and intermediate developers alike. Most tutorials attempt to explain it through textual rules: call stack, web APIs, callback queue, microtask queue.",
      "Students memorize the order of execution for five contrived Promise examples, but fail when debugging an actual race condition in a multi-step user checkout flow.",
      "The failure happens because text rules do not construct an active visual state machine in memory. When developers can manipulate the event loop interactively — pausing microtasks, observing call stack frames pop, and witnessing starvation — the intuition becomes permanent.",
      "This insight is at the core of simulation-based learning: when learners can manipulate variables and observe consequences in real time, complex architectural concepts shift from abstract memorization to empirical intuition."
    ]
  }
];

export const BUILDS: BuildItem[] = [
  {
    slug: "logicsims",
    title: "LogicSims",
    tagline: "Discovery-based learning environment using logic as a first-principles operating system",
    category: "Platform",
    status: "live",
    liveUrl: "https://logicsims.com",
    techStack: ["Next.js", "TypeScript", "State Machines", "Interactive Visualizers"],
    summary: "A proof of concept and learning platform designed to replace passive lectures with interactive, consequence-driven simulations. Built from scratch to help learners construct deep mental models of complex systems.",
    outcomes: [
      "Interactive mental modeling of asynchronous execution, states, and constraints",
      "Learning through consequence rather than passive explanation",
      "Foundation for multi-level problem progression (Macro -> Meso -> Micro -> Capstone)"
    ],
    highlights: [
      {
        label: "First-Principles OS",
        description: "Reduces complex systems to variables, state transitions, constraints, and feedback loops."
      },
      {
        label: "Proof of Work",
        description: "Validates true understanding through stress-testing and debugging rather than multiple-choice quizzes."
      },
      {
        label: "Live Prototype",
        description: "Functional programming & async simulation environment currently accessible online."
      }
    ]
  },
  {
    slug: "traits-ecommerce",
    title: "Traits E-Commerce Platform",
    tagline: "Full-featured modern e-commerce application with serverless edge architecture",
    category: "Client Build",
    status: "live",
    liveUrl: "https://traits.co.in",
    techStack: ["React 19", "TypeScript", "Vite", "TailwindCSS v3", "Supabase PostgreSQL", "Deno Edge Functions", "Razorpay", "Resend"],
    summary: "Architected and delivered a production e-commerce platform using rapid agentic development workflows, paired with Supabase relational backend, row-level security (RLS), and serverless edge functions for secure transactions.",
    outcomes: [
      "Production deployment serving product media via public CDN storage buckets",
      "Secure payment processing via Razorpay signature verification edge functions",
      "Multi-language support via i18next with browser detection"
    ],
    highlights: [
      {
        label: "Frontend Architecture",
        description: "React 19 + TypeScript SPA built with Vite, React Router DOM v7, and styled with TailwindCSS."
      },
      {
        label: "Relational Backend & Security",
        description: "Supabase PostgreSQL with strict Row Level Security (RLS) policies and Email OTP / OAuth authentication."
      },
      {
        label: "Edge Compute & Payments",
        description: "TypeScript/Deno Edge Functions handling Razorpay order verification routines and Resend transactional emails."
      }
    ]
  }
];

export function getIdeas(): IdeaItem[] {
  return IDEAS;
}

export function getIdeaBySlug(slug: string): IdeaItem | undefined {
  return IDEAS.find((item) => item.slug === slug);
}

export function getBuilds(): BuildItem[] {
  return BUILDS;
}

export function getBuildBySlug(slug: string): BuildItem | undefined {
  return BUILDS.find((item) => item.slug === slug);
}
