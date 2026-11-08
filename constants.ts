import { Project, Achievement, Experience, SkillGroup } from "./types";

export const SOCIAL_LINKS = {
  github: "https://github.com/x01Jin",
  email: "ajph1082@gmail.com",
  facebook: "https://www.facebook.com/Sorry.im.Incognito/",
  discord: "https://discord.com/users/489127925116043265",
};

export const PROFILE = {
  role: "Web Developer",
  company: "Vertex Technologies Corporation",
  companyUrl: "https://www.vertextechcorp.com/",
  startedAt: "Nov 2026",
  education: "BS Computer Science, 2025",
  school: "Universidad de Dagupan",
};

export const PROJECTS: Project[] = [
  {
    name: "warper",
    repo: "warper",
    description:
      "GUI tool for managing Cloudflare WARP connections and cycling exit IPs on Windows.",
    language: "Rust",
    tags: ["Cloudflare WARP", "warp-cli", "Windows"],
    stars: 0,
    link: "https://github.com/x01Jin/warper",
  },
  {
    name: "ytmc",
    repo: "ytmc",
    description:
      "Desktop app that converts YouTube videos to music files, with trimming, metadata tagging, and format conversion.",
    language: "TypeScript",
    tags: ["yt-dlp", "youtube", "music"],
    stars: 2,
    link: "https://github.com/x01Jin/ytmc",
  },
  {
    name: "discord-games-launcher",
    repo: "discord-games-launcher",
    description:
      "Makes Discord show a game as playing without owning it, and finishes quests from the client you already have open.",
    language: "Python",
    tags: ["Discord API", "quests", "Windows"],
    stars: 5,
    link: "https://github.com/x01Jin/discord-games-launcher",
  },
  {
    name: "datamine-game",
    repo: "datamine-game",
    description: "Automation game about mining data, built for the browser.",
    language: "TypeScript",
    tags: ["game", "automation"],
    stars: 0,
    link: "https://github.com/x01Jin/datamine-game",
    demo: "https://x01jin.github.io/datamine-game/",
  },
  {
    name: "dndroll-discord-bot",
    repo: "dndroll-discord-bot",
    description: "A joke D&D dice bot for Discord.",
    language: "Python",
    tags: ["discord.py"],
    stars: 4,
    link: "https://github.com/x01Jin/dndroll-discord-bot",
  },
  {
    name: "openchoreographer",
    repo: "openchoreographer",
    description:
      "OpenCode V2 orchestration plugin with worker and reviewer subagents that adapt to the tools you already have installed.",
    language: "TypeScript",
    tags: ["AI agents", "OpenCode", "TUI"],
    stars: 1,
    link: "https://github.com/x01Jin/openchoreographer",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    title: "Web Developer",
    company: "Vertex Technologies Corporation",
    companyUrl: "https://www.vertextechcorp.com/",
    period: "Nov 2026 – Present",
    current: true,
    details: [
      "Front-end development on Vertex's SaaS platforms for LGUs and enterprises.",
    ],
  },
  {
    title: "IT Employee",
    company: "Natasha Ventures, Urdaneta",
    period: "Dec 2025 – Jul 2026",
    details: [
      "Built internal software to improve workflow operations.",
      "Resolved technical issues through a ticketing system.",
    ],
  },
  {
    title: "Computer Technician",
    company: "RRV Atomy Visionaries",
    period: "Sep 2025 – Nov 2025",
    details: [
      "Built, set up, and repaired computer hardware and software.",
      "Provided technical support and maintenance.",
    ],
  },
  {
    title: "IT Internship",
    company: "Universidad de Dagupan",
    period: "Jul 2024 – Aug 2024",
    details: [
      "Fixed common issues with networks, hardware, and software.",
      "Wrote scripts for workflow automation.",
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "BS Computer Science",
    issuer: "Universidad de Dagupan",
    year: "2025",
  },
  {
    title: "Dean's Lister",
    issuer: "Universidad de Dagupan",
    year: "AY 2022–2023",
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Rust", "SQL"],
  },
  {
    category: "Frameworks & tools",
    items: ["React", "Node.js", "Tailwind CSS", "PyQt6", "Git"],
  },
  {
    category: "AI & data",
    items: ["Local LLMs", "OpenCV", "Machine learning", "Computer vision"],
  },
  {
    category: "Systems",
    items: ["PC troubleshooting", "Networking", "IoT", "Hardware repair"],
  },
];
