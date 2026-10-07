export const navLinks = [
  { label: "Ideas", href: "#ideas" },
  { label: "Builds", href: "#builds" },
  { label: "Watch", href: "#watch" },
  { label: "Work With Me", href: "#work" },
  { label: "Collaborate", href: "#collaborate" },
  { label: "About", href: "#about" },
];

export const heroStats = [
  { value: "10+", label: "Years teaching engineering education" },
  { value: "02", label: "Public YouTube channels" },
  { value: "01", label: "Live learning prototype" },
];

export const evidenceParagraphs = [
  "Over a decade spent teaching in engineering education and managing technical training programs revealed a recurring structural failure: graduates routinely score top marks on theoretical exams, yet struggle to debug an asynchronous failure or build a functional software system.",
  "When learning happens in isolated subject silos, students memorize abstract syntax without forming conceptual mental models. Real reform requires shifting from passive recall to empirical consequence — where building things makes learning meaningful, and employment becomes a natural byproduct of genuine capability.",
];

export const aboutSignals = [
  { icon: "ri-graduation-cap-line", text: "Engineering education & technical training programs" },
  { icon: "ri-code-s-slash-line", text: "Full-stack application engineering & agentic workflows" },
  { icon: "ri-flow-chart", text: "Simulation, systems thinking & consequence-driven learning" },
  { icon: "ri-megaphone-line", text: "Public writing & build-in-public video" },
];

export const pedagogyModes = [
  {
    key: "rote",
    label: "Rote Instruction",
    heading: "Rote Method — Traditional Classroom",
    summary: "Content is delivered once, memorized for an exam, and rarely revisited once the grade is posted.",
    points: [
      "Lecture: \"A Promise represents a future value. Remember the definition for the exam.\"",
      "Outcome: Surface recall that collapses the moment the problem changes shape.",
      "Result: Brittle confidence with no transferable mental model.",
    ],
  },
  {
    key: "discovery",
    label: "Discovery Simulator",
    heading: "Discovery Method — LogicSims Consequence Engine",
    summary: "Students manipulate a live system, watch consequences unfold, and build durable intuition.",
    points: [
      "Simulation: \"Here is a live state machine dropping 15% of packets. Manipulate the event loop buffer and observe where execution starves.\"",
      "Outcome: A deep mental model of state transitions, empirical debugging intuition, and transferable problem-solving confidence.",
      "Result: Capability that survives contact with real systems and real deadlines.",
    ],
  },
];

export const loopSteps = [
  "Observe",
  "Translate",
  "Connect",
  "Question",
  "Imagine",
  "Experiment",
  "Build",
  "Share",
];

export const loopArticles = [
  {
    category: "Reform",
    badge: "Working Draft",
    title: "Why High Exam Scores Fail in Software Roles (And How Discovery Learning Fixes It)",
    excerpt:
      "An analysis of why traditional score-oriented technical education in India creates brittle graduates, and how simulation-based learning restores practical capability.",
    readTime: "9 min read",
    href: "#ideas",
    image:
      "https://readdy.ai/api/search-image?query=Minimal%20editorial%20illustration%20of%20an%20empty%20examination%20hall%20with%20rows%20of%20desks%20and%20a%20single%20glowing%20azure%20light%2C%20cool%20royal%20blue%20and%20slate%20tones%20on%20a%20pale%20blue%20background%2C%20soft%20grain%20texture%2C%20abstract%20conceptual%20art%20for%20an%20essay%20on%20education%20reform&width=800&height=600&seq=vb-idea-01&orientation=landscape&nocache=true",
  },
  {
    category: "Pedagogy",
    badge: "Working Draft",
    title: "Train the Trainer: Building Capability Beyond the Slide Deck",
    excerpt:
      "How to coach engineering faculty to shift from lecturing syntax to guiding open-ended technical discovery.",
    readTime: "7 min read",
    href: "#ideas",
    image:
      "https://readdy.ai/api/search-image?query=Abstract%20cool%20editorial%20illustration%20of%20two%20figures%20collaborating%20around%20a%20floating%20diagram%20of%20connected%20nodes%2C%20royal%20blue%20and%20azure%20tones%20on%20a%20pale%20background%2C%20soft%20grain%20texture%2C%20conceptual%20art%20about%20mentoring%20and%20teaching&width=800&height=600&seq=vb-idea-02&orientation=landscape&nocache=true",
  },
  {
    category: "Engineering",
    badge: "Working Draft",
    title: "Teaching Mental Models Over Syntax: The Async Execution Case Study",
    excerpt:
      "Why memorizing event loop rules fails under pressure, and how visual state machines teach asynchronous logic intuitively to developers.",
    readTime: "11 min read",
    href: "#ideas",
    image:
      "https://readdy.ai/api/search-image?query=Abstract%20editorial%20illustration%20of%20a%20flowing%20loop%20of%20interconnected%20azure%20particles%20and%20timeline%20arcs%20representing%20an%20event%20loop%2C%20sapphire%20blue%20and%20slate%20tones%20on%20a%20pale%20blue%20background%2C%20soft%20grain%20texture%2C%20conceptual%20systems%20art&width=800&height=600&seq=vb-idea-03&orientation=landscape&nocache=true",
  },
];

export const flagshipBuild = {
  eyebrow: "Flagship Experiment",
  status: "Live Prototype",
  title: "LogicSims — Discovery-Based Simulation Environment",
  description:
    "LogicSims is the broader vision for learning through simulation, experimentation, consequence, and systems thinking. LogicSims Java is the first public prototype — an early experiment exploring how programming concepts can be learned through an interactive simulator-based environment.",
  primaryCta: "Explore the LogicSims Prototype",
  primaryHref: "https://logic-sims-java.vercel.app/",
  secondaryCta: "Explore the LogicSims Vision",
};

export const buildCards = [
  {
    type: "Experiment",
    status: "Live",
    title: "LogicSims",
    description:
      "LogicSims is a broader vision and evolving architecture for learning through consequence, experimentation, and systems thinking. LogicSims Java serves as its first live, public prototype — an early experiment exploring how programming concepts can be mastered through interactive simulation.",
    tags: ["React", "Next.js", "TypeScript", "State Machines"],
    image:
      "https://readdy.ai/api/search-image?query=Dark%20cool%20editorial%20visual%20of%20a%20glowing%20state%20machine%20diagram%20with%20azure%20nodes%20and%20curved%20connections%20floating%20over%20a%20deep%20navy%20background%2C%20soft%20grain%20texture%2C%20cinematic%20lighting%2C%20abstract%20technology%20illustration&width=1200&height=800&seq=vb-build-logicsims&orientation=landscape&nocache=true",
  },
  {
    type: "Client Build",
    status: "Live",
    title: "Traits E-Commerce Platform",
    description:
      "Architected and delivered a production e-commerce platform using rapid agentic development workflows, paired with a Supabase relational backend, row-level security (RLS), and serverless edge functions for secure transactions.",
    tags: ["React 19", "TypeScript", "Vite", "TailwindCSS v3"],
    image:
      "https://readdy.ai/api/search-image?query=Cool%20minimal%20editorial%20visual%20of%20stacked%20shopping%20and%20commerce%20interface%20panels%20in%20royal%20blue%20and%20pale%20slate%20tones%20on%20a%20soft%20blue%20background%2C%20clean%20geometric%20composition%2C%20soft%20grain%20texture%2C%20product%20design%20illustration&width=1200&height=800&seq=vb-build-traits&orientation=landscape&nocache=true",
  },
];

export const channels = [
  {
    role: "Translate + Legitimize",
    status: "Launching / In Preparation",
    title: "Vikas Bandaru (Official Channel)",
    description:
      "Broader systems thinking, Indian education policy, future of work, AI-washing critique, and what developing nations can build for their own conditions. Mission video content is currently in preparation.",
    audience: "Educators, decision-makers, parents, and systems thinkers.",
    cta: "Visit Official Channel",
    href: "https://www.youtube.com/@VikasBandaruOfficial",
    image:
      "https://readdy.ai/api/search-image?query=Warm%20editorial%20photo%20of%20a%20minimal%20studio%20podcast%20setup%20with%20a%20microphone%20and%20an%20empty%20wooden%20chair%2C%20amber%20and%20cream%20lighting%2C%20soft%20shadows%2C%20conceptual%20about%20public%20thinking%20and%20broadcasting&width=1200&height=800&seq=vb-ch-watch-official&orientation=landscape",
  },
  {
    role: "Enable + Implement",
    status: "Publishing Weekly",
    title: "Vikas Bandaru Tech1",
    description:
      "Technical how-tos, programming breakdowns, Salesforce / Agentforce implementation, LogicSims engine development, and build-in-public logs.",
    audience: "Software engineers, aspiring builders, and hands-on developers.",
    cta: "Visit Tech Channel",
    href: "https://www.youtube.com/@VikasBandaruTech1",
    image:
      "https://readdy.ai/api/search-image?query=Warm%20editorial%20photo%20of%20a%20developer%20desk%20with%20a%20laptop%20showing%20colorful%20code%20and%20technical%20diagrams%2C%20amber%20and%20olive%20tones%2C%20soft%20natural%20light%2C%20conceptual%20about%20engineering%20tutorials&width=1200&height=800&seq=vb-ch-watch-tech&orientation=landscape",
  },
];

export const engagementCards = [
  {
    id: "work",
    icon: "ri-briefcase-4-line",
    title: "Work With Me (Paid Engagements)",
    description:
      "Legitimate professional services: technical mentorship, faculty development workshops, full-stack web application engineering, and keynotes.",
    cta: "Explore Professional Tracks",
    href: "#work",
    tone: "primary",
  },
  {
    id: "collaborate",
    icon: "ri-hand-heart-line",
    title: "Collaborate (Mission Participation)",
    description:
      "Non-transactional avenues: contribute domain variables to LogicSims, run experimental active learning pilots in your institution, or explore research questions.",
    cta: "Join the Mission",
    href: "#collaborate",
    tone: "accent",
  },
];

export const footerSocials = [
  { label: "YouTube (Official)", href: "https://www.youtube.com/@VikasBandaruOfficial" },
  { label: "YouTube (Tech)", href: "https://www.youtube.com/@VikasBandaruTech1" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vikas-bandaru/" },
  { label: "Instagram", href: "https://www.instagram.com/thoughts.in.beta" },
];

export const collabPaths = [
  {
    icon: "ri-node-tree",
    bubble: "bg-primary-100 text-primary-800",
    title: "LogicSims & Domain Modeling",
    intro:
      "LogicSims will eventually expand beyond software engineering into complex real-world domains such as agriculture, public transit, supply chains, and local economics.",
    contribute:
      "If you are a domain specialist (agronomist, urban planner, economist, engineer), help extract variables, map constraints, and define real-world state machines for new simulation nodes.",
    cta: "Propose a Domain Model",
    href: "#work",
  },
  {
    icon: "ri-graduation-cap-line",
    bubble: "bg-accent-100 text-accent-800",
    title: "Classroom & Sandbox Pilots",
    intro:
      "Are you a forward-thinking college professor, department head, or academy lead willing to experiment with discovery-based learning in your classroom?",
    contribute:
      "Run active learning trials using LogicSims prototypes with your student cohorts and share empirical feedback, student debugging observations, and learning curve telemetry.",
    cta: "Inquire to Run a Pilot",
    href: "#work",
  },
  {
    icon: "ri-search-eye-line",
    bubble: "bg-secondary-100 text-secondary-800",
    title: "Research & Systems Exploration",
    intro:
      "Investigating questions around Indian technical education outcomes, developing nation technology adoption, and human agency in the age of AI.",
    contribute:
      "Share empirical datasets, co-investigate case studies, or provide constructive critical critique on published essays.",
    cta: "Start a Research Discussion",
    href: "#work",
  },
];

export const operatingMotto = "Learning in public · Building for consequence";