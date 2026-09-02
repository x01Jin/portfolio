import { Project, Achievement } from "./types";

export const SOCIAL_LINKS = {
  github: "https://github.com/x01Jin",
  email: "ajph1082@gmail.com",
  facebook: "https://www.facebook.com/Sorry.im.Incognito/",
  discord: "x02jin",
};

export const PROJECTS: Project[] = [
  {
    name: "Laboratory Inventory Manager",
    description:
      "A portable software for managing laboratory inventory items and requisitions. 2-person team project featuring inventory tracking and requisition management.",
    tech: ["Python", "PyQt6", "SQLite"],
    link: "https://github.com/x01Jin/inventory-manager",
  },
  {
    name: "ProctorAI",
    description:
      "An AI Computer Vision-powered proctoring system assistant using YOLO-based Roboflow models for monitoring and detecting potential academic misconduct.",
    tech: ["Python", "PyQt6", "Computer Vision", "YOLO", "Roboflow"],
    link: "https://github.com/x01Jin/ProctorAI",
  },
  {
    name: "MaiMaiMai",
    description:
      "A Peer-to-Peer (P2P) queue management tool designed for arcade sessions and general queueing using CRDT-based P2P technology.",
    tech: ["TypeScript", "React", "Yjs", "WebRTC"],
    link: "https://github.com/x01Jin/maimaimai",
  },
  {
    name: "Ascend OS",
    description:
      "An experimental incremental exploration game with procedurally generated file explorer. Mine data, trace signals, and uncover the path to ascension.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    link: "https://github.com/x01Jin/ascend-os",
  },
  {
    name: "dndroll Discord Bot",
    description:
      "A Discord bot providing dice rolls and D&D utilities for tabletop gaming communities.",
    tech: ["Python", "Discord.py"],
    link: "https://github.com/x01Jin/dndroll-discord-bot",
  },
  {
    name: "Project Apollo",
    description:
      "A browser-based game about maintaining a dying ship until rescue. Test your resource management and decision-making skills.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/x01Jin/project-apollo",
  },
];

export const PROFILE = {
  name: "Alexander James Soriano",
  role: "Junior Developer & CS Graduate",
  objective:
    "Junior Developer with hands-on experience in software development and a strong background in PC troubleshooting and maintenance. Looking to contribute by building efficient projects and ensuring smooth IT operations for the company.",
  summary:
    "Proficient in Python, JavaScript/TypeScript, Node.js, and React for building efficient and user-friendly applications. Experienced with Git for version control, collaboration, and project management. Knowledgeable in AI, machine learning, and LLMs/local LLMs with practical development experience. Strong problem-solving skills and adaptable in both software development and technical tasks.",
  education: "BSCS, Computer Science (2025) - Universidad de Dagupan",
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "CERTIFICATE OF EXCELLENCE (DEAN'S LISTER)",
    issuer: "Universidad de Dagupan",
    details: ["Academic Year 2022-2023"],
  },
  {
    title: "CERTIFICATE OF PARTICIPATION",
    issuer: "Universidad de Dagupan - SITE Knowledge Festival",
    details: [
      "2024: The future InSITE: AI Transforming Vision and Education",
      "2025: Emerging Technologies: Shaping the Future of Digital Innovation",
    ],
  },
];

export const SEMINARS: string[] = [
  "Synergizing IoT and Robotics: Unleashing the Power of Intelligence (2023)",
  "Seminar on Quality, Productivity, & Employability (2025)",
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  details: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    title: "Technical Assistant II",
    company: "DepED Regional Office - Region I",
    period: "March 8, 2026 - Current",
    details: [
      "Assisting in setting up computer networks and servers",
      "Managing IT infrastructure and technical operations",
    ],
  },
  {
    title: "Computer Technician",
    company: "RRV Atomy Visionaries",
    period: "September 8 - November 18, 2025",
    details: [
      "Building, setting up, and fixing computer hardware and software",
      "Provided technical support and maintenance",
    ],
  },
  {
    title: "IT Internship",
    company: "Universidad de Dagupan",
    period: "July 10 - August 17, 2024",
    details: [
      "Fixed common technical issues (Internet, Computer hardware and software)",
      "Wrote scripts for workflow automation",
    ],
  },
];

export interface Skill {
  category: string;
  items: string[];
}

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks & Tools",
    items: [
      "React",
      "Node.js",
      "PyQt6",
      "Git/GitHub",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "AI & Data",
    items: ["OpenCV", "LLMs (Local)", "Machine Learning", "Computer Vision"],
  },
  {
    category: "Hardware",
    items: ["PC Troubleshooting", "PC Maintenance", "IoT", "Network Setup"],
  },
];

export const CORE_SKILLS = [
  "Programming",
  "Agentic Workflows",
  "Project Management",
];
