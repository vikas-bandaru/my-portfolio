export type MaturityStatus = "live" | "building" | "vision";

export interface IdeaSection {
  heading?: string;
  subheading?: string;
  paragraphs: string[];
  callout?: {
    type: "lens" | "observation" | "principle";
    text: string;
    attribution?: string;
  };
}

export interface IdeaItem {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  category: "Reform" | "Pedagogy" | "Engineering";
  excerpt: string;
  readTime: string;
  status: MaturityStatus;
  reviewStatus: "draft" | "published";
  crossPostLinks?: {
    medium?: string;
    linkedin?: string;
  };
  sections: IdeaSection[];
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
    slug: "collapse-of-syntax-first-cs",
    title: "The Collapse of Syntax-First CS",
    subtitle: "What Happens When Code Generation Costs Near-Zero?",
    date: "October 02, 2026",
    category: "Reform",
    excerpt: "For two decades, technical education equated coding fluency with typing syntax. Now that LLMs emit boilerplate instantly, we face an acute diagnostic crisis in our classrooms and hiring loops.",
    readTime: "8 min read",
    status: "building",
    reviewStatus: "published",
    crossPostLinks: {
      // Hidden on website reader until published via CMS
      medium: "",
      linkedin: "",
    },
    relatedBuildSlug: "logicsims",
    relatedChannel: "official",
    sections: [
      {
        heading: "1. The Grand Illusion of Fluency",
        paragraphs: [
          "For more than a decade standing before university lecture halls and mentoring junior developers, I watched the same pattern play out: students who scored top marks on paper programming exams froze the moment they were asked to debug an unhandled null pointer in a multi-threaded process.",
          "We spent twenty years equating computer science with syntax fluency. If a student could memorize the exact parameter order of a library function or regurgitate a binary tree traversal from memory onto a whiteboard, we stamped them as 'competent'. We built entire placement training funnels around LeetCode pattern matching.",
          "In 2026, generative AI shattered that entire premise. When an LLM can emit syntactically flawless boilerplate in three seconds, the market value of syntax recall drops to zero. Yet, when I sit with learners today, a startling paradox emerges: their code looks cleaner than ever, but their mental model of what is actually executing in runtime memory is more fragile than it has ever been."
        ],
        callout: {
          type: "observation",
          text: "When code synthesis is friction-free, we risk producing 'epistemic learned helplessness'—engineers who can stitch together massive systems but cannot reason about failure boundaries when things break.",
        }
      },
      {
        heading: "2. The AI Trust Crisis in Engineering Loops",
        paragraphs: [
          "Talk to engineering directors and tech leads at Global Capability Centers (GCCs) in Bengaluru, Hyderabad, or Pune right now, and you will hear a consistent complaint: the entry-level hiring pipeline is broken. Resumes look immaculate. Take-home projects have pristine README files and comprehensive test suites generated in minutes.",
          "Then comes the live diagnostic round. When an interviewer introduces a subtle race condition or injects unexpected latency into a distributed queue, the candidate freezes. They know what the code says, but they don't know what the system does.",
          "This is not a failure of intelligence; it is a failure of pedagogical architecture. By treating programming as the act of 'writing code' rather than 'managing state transitions under constraints', our educational systems optimized for the very skill that machines now automate best."
        ]
      },
      {
        heading: "3. The Shift to Inductive Diagnosis",
        paragraphs: [
          "How do we fix this? In my experiments with LogicSims, the answer has been to invert the classroom completely: take syntax off the screen first.",
          "Instead of teaching loops and memory allocation through PowerPoint slides or syntax cheat sheets, we put learners inside interactive visual simulations. We introduce broken state, starvation, and memory leaks. We ask them to observe what happens before showing them how to fix it.",
          "When learners manipulate variables directly and observe the immediate consequence on execution buffers, they build an intuitive, physical feel for computation. Syntax then becomes what it was always meant to be: merely a secondary notation for expressing a mental model that already exists clearly in the mind."
        ],
        callout: {
          type: "principle",
          text: "True engineering is not the emission of code. It is the ability to construct, stress-test, and verify a mental model of dynamic state under real-world constraints.",
          attribution: "Pedagogical Note — Vikas Bandaru"
        }
      }
    ]
  },
  {
    slug: "proof-of-work-for-the-mind",
    title: "Proof of Work for the Mind",
    subtitle: "How I Think About Learning Sciences in the Post-AI Era",
    date: "September 18, 2026",
    category: "Pedagogy",
    excerpt: "When paper degrees and LeetCode ranks lose all epistemic credibility, how do we verify genuine comprehension? Lessons from Ausubel, Kolb, and Paivio applied to simulation-driven learning.",
    readTime: "10 min read",
    status: "building",
    reviewStatus: "published",
    crossPostLinks: {
      medium: "",
      linkedin: "",
    },
    relatedBuildSlug: "logicsims",
    relatedChannel: "official",
    sections: [
      {
        heading: "1. When Static Credentials Lose Meaning",
        paragraphs: [
          "In the pre-AI era, a university degree or a verified online certificate served as a rough heuristic for intellectual effort. It implied that someone sat through hours of study, wrote assignments, and passed supervised assessments.",
          "Today, that signal has collapsed. When any homework prompt can be synthesized into an essay, and any coding challenge can be resolved by a reasoning model running in a background tab, static submissions tell us almost nothing about what has actually taken root in a learner's mind.",
          "This led me to a central question that has driven my work on the LogicSims ecosystem: What constitutes an honest 'Proof of Work for the Mind'?"
        ]
      },
      {
        heading: "2. The Cognitive Foundations: Anchors, Cycles, and Dual Channels",
        paragraphs: [
          "To design a learning environment that builds verifiable intuition rather than surface memorization, I turned to the learning sciences. Rather than inventing novelty for its own sake, I found that the answers were already articulated by foundational cognitive theorists—we just had never built software engines that respected them.",
          "First is David Ausubel’s Meaningful Reception Theory. Ausubel argued that learners do not absorb isolated facts; new knowledge must be 'subsumed' into existing cognitive anchors. This is why LogicSims organizes subjects as a Directed Acyclic Graph (DAG) rather than a linear syllabus. Before exposing a student to asynchronous callbacks, we must explicitly anchor their mental schema to synchronous queues.",
          "Second is David Kolb’s Experiential Learning Cycle. Traditional classrooms start with the formula (abstract conceptualization) and ask students to confirm it. We flip this: the learner starts with Concrete Experience in a simulator, reflects on the state telemetry, extracts the rule inductively, and only then tests their model against novel edge cases."
        ],
        callout: {
          type: "lens",
          text: "Drawing on Allan Paivio's Dual-Coding Theory: human working memory is easily choked when tracking mutable program state purely through textual syntax. By pairing code with visual, spatial state transitions in real time, the brain encodes concepts across both verbal and spatial channels simultaneously.",
          attribution: "Applied Cognitive Science"
        }
      },
      {
        heading: "3. Socratic Scaffolding Over Instant Answers",
        paragraphs: [
          "A crucial component of this architecture is how artificial intelligence is deployed. In mainstream edtech, AI is marketed as a personal tutor that writes explanations or generates code for the student. In practice, this often acts as an intellectual crutch, removing the friction necessary for deep learning.",
          "In our Socratic design, the AI is deliberately constrained. When a student encounters a runtime error or an unexpected state, the system is forbidden from providing the fix. Instead, it acts as a diagnostic auditor: 'Look at the value of pointer `p` on step 4. What did you expect to happen when the buffer filled up?'",
          "By forcing the learner to debug their own reasoning, we preserve the 'zone of proximal development' that psychologist Lev Vygotsky described. The proof of competence is not the finished code—it is the learner's recorded diagnostic reasoning and post-mortem breakdown."
        ]
      }
    ]
  },
  {
    slug: "curriculum-as-life-toolkit",
    title: "Curriculum as a Life Toolkit",
    subtitle: "Why We Must Teach Systems Logic Beyond the Degree Factory",
    date: "August 24, 2026",
    category: "Pedagogy",
    excerpt: "Engineering education is not vocational training for temporary tech stacks. Concurrency, state transitions, and error budgets are cognitive lenses for navigating real-world life decisions.",
    readTime: "7 min read",
    status: "building",
    reviewStatus: "published",
    crossPostLinks: {
      medium: "",
      linkedin: "",
    },
    relatedBuildSlug: "logicsims",
    relatedChannel: "official",
    sections: [
      {
        heading: "1. The Syllabus Trap",
        paragraphs: [
          "Every semester, I speak with engineering students who are deeply anxious. They ask which framework they should memorize: 'Sir, should I learn React 19, or should I switch to Next.js? Will Flutter still get me a job in two years?'",
          "This hyper-fixation on ephemeral vendor tools is a tragedy of modern technical education. We have turned engineering schools into vocational boot camps designed to train graduates for specific, short-lived industry slots.",
          "When a technology shifts or an automated tool streamlines that workflow, students feel abandoned. They believe their education has expired, because they were taught tools rather than fundamental systems logic."
        ]
      },
      {
        heading: "2. The Universal Physics Engine of Systems",
        paragraphs: [
          "The truth that great engineers discover is that computational concepts are universal principles of reality:",
          "A buffer overflow is not just an error in C; it is a universal lesson in recognizing unseen capacity boundaries and the perils of unconstrained trust.",
          "A race condition is not just a multithreading bug; it is what happens in human teams, traffic bottlenecks, and financial systems when two dependent actions assume exclusive access without synchronization.",
          "An error budget in site reliability engineering is the exact mathematical formulation of emotional resilience and personal risk tolerance."
        ],
        callout: {
          type: "lens",
          text: "As cognitive scientists Derek and Laura Cabrera demonstrated in their DSRP theory, all human understanding resolves into Distinctions, Systems, Relationships, and Perspectives. Software engineering happens to be the most accessible digital sandbox for training these cognitive muscles.",
          attribution: "Cabrera Research Lab & Systems Thinking"
        }
      },
      {
        heading: "3. Educating for Life Agency",
        paragraphs: [
          "When we teach curriculum as an intellectual toolkit rather than an exam cram sheet, the student transforms. They stop asking what will appear on tomorrow's test and start looking at their own daily challenges as manageable systems.",
          "They can look at a confusing personal budget, an overwhelming schedule, or an ambiguous team conflict, break it down into variables, identify the feedback loops, and find the highest-leverage point of intervention.",
          "Our responsibility as educators is not to produce compliant platform consumers. It is to graduate independent human thinkers equipped with the cognitive tools to build, evaluate, and navigate an unpredictable world."
        ]
      }
    ]
  },
  {
    slug: "death-of-middle-tier-it",
    title: "The Shift in Tech Careers",
    subtitle: "Observations on India's 2026 Hiring Reality and Campus Transformation",
    date: "July 30, 2026",
    category: "Reform",
    excerpt: "The mass campus recruitment era that defined Indian IT for twenty years is over. GCC insourcing and AI copilots demand a radical shift toward systems autonomy and active faculty mentorship.",
    readTime: "9 min read",
    status: "building",
    reviewStatus: "published",
    crossPostLinks: {
      medium: "",
      linkedin: "",
    },
    relatedBuildSlug: "logicsims",
    relatedChannel: "official",
    sections: [
      {
        heading: "1. The End of an Era",
        paragraphs: [
          "For anyone who spent the last two decades in Indian engineering education, the annual campus placement season had a familiar rhythm. Large IT service delivery giants would arrive in convoys of buses at engineering colleges, conduct aptitude tests, and issue offer letters in batches of hundreds.",
          "That model was built on global cost arbitrage and routine application maintenance. In 2026, that era has definitively closed.",
          "Routine code migration, boilerplate scripting, manual unit testing, and basic documentation tasks—the traditional proving ground of fresh graduates—are now handled seamlessly by autonomous developer tools and code copilots. The entry-level pyramid has permanently contracted."
        ],
        callout: {
          type: "observation",
          text: "Between 2024 and 2026, while legacy IT service hiring flattened to single-digit additions, Global Capability Centers (GCCs) in India expanded aggressively, demanding autonomous problem solvers over rote coders.",
        }
      },
      {
        heading: "2. The Rise of Capability-Led Engineering",
        paragraphs: [
          "The jobs haven't vanished; they have transformed. Over 2,100 Global Capability Centers in India have shifted from back-office support into primary global product ownership nodes. They are hiring engineers who understand cloud infrastructure, relational constraints, security postures, and edge deployments.",
          "The tragedy is that most college curricula have not adapted. While Tier-1 institutions retain their industry advantages through alumni networks and brand equity, Tier-2 and Tier-3 colleges face an existential turning point. Teaching students textbook definitions of 10-year-old frameworks leaves them functionally unhirable in a market that prioritizes immediate systems autonomy."
        ]
      },
      {
        heading: "3. What Must Happen Next: Faculty Empowerment",
        paragraphs: [
          "The answer is neither commercial bootcamps promising 6-week magic transitions nor panic-driven bans on AI tools in college labs. The real leverage point in the Indian ecosystem is our college faculty.",
          "In my work conducting Faculty Development Programs (Train-the-Trainer), I find that professors are just as frustrated by outdated syllabi as the students are. But when faculty are given pedagogical scaffolding—interactive simulators, problem-first rubrics, and diagnostic assessment designs—they transform.",
          "India possesses the most passionate demographic of young technical talent in the world. If we equip our educators to replace lecture-broadcast classrooms with active discovery labs, our graduates will not merely survive this transition; they will lead it."
        ]
      }
    ]
  }
];

export const BUILDS: BuildItem[] = [
  {
    slug: "logicsims",
    title: "LogicSims",
    tagline: "Discovery-based learning environment — with LogicSims Java as the first public prototype",
    category: "Experiment",
    status: "live",
    liveUrl: "https://logic-sims-java.vercel.app/",
    techStack: ["React", "Next.js", "TypeScript", "State Machines", "Interactive Visualizers"],
    summary: "LogicSims is a broader vision and evolving architecture for learning through consequence, experimentation, and systems thinking. LogicSims Java serves as its first live, public prototype — an early experiment exploring how programming concepts can be mastered through interactive simulation.",
    outcomes: [
      "First practical public prototype (LogicSims Java) deployed and accessible for real learners",
      "Interactive mental modeling of code execution flow, state variables, and failure constraints",
      "Active feedback loop: observing learner interactions in online classes to inform future iterations"
    ],
    highlights: [
      {
        label: "First Public Experiment",
        description: "LogicSims Java provides a hands-on simulator where learners manipulate code state and observe real-time execution consequences."
      },
      {
        label: "Direct Learner Feedback",
        description: "Being introduced into online classes to gather empirical observation and learner feedback on simulation mechanics."
      },
      {
        label: "Evolving Systems Vision",
        description: "The broader LogicSims framework continues to develop toward multi-domain system modeling, Socratic auditing, and capstone stress-testing."
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
