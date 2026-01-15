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
      "A software made with pyqt6 for managing laboratory inventory items and requisitions.",
    tech: ["Python", "PyQt6", "SQLite"],
    link: "https://github.com/x01Jin/inventory-manager",
  },
  {
    name: "ProctorAI",
    description:
      "An AI Computer Vision-powered proctoring system assistant for proctors in monitoring and detecting potential academic misconduct.",
    tech: ["Python", "PyQt6", "Computer Vision", "Roboflow"],
    link: "https://github.com/x01Jin/ProctorAI",
  },
  {
    name: "maimaimai",
    description:
      "A Peer-to-Peer (P2P) queue management tool designed specifically for Maimai arcade sessions.",
    tech: ["TypeScript", "React", "PeerJS", "Tailwind CSS"],
    link: "https://github.com/x01Jin/maimaimai",
  },
  {
    name: "Ascend OS",
    description:
      "Ascend OS is an experimental incremental exploration game that lets you tinker with a desktop environment as you mine Data, trace signals, and find the way to ascend on a procedurally generated file explorer.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    link: "https://github.com/x01Jin/ascend-os",
  },
  {
    name: "dndroll discord bot",
    description: "A simple Discord bot providing dice rolls and D&D utilities.",
    tech: ["Python", "Discord.py"],
    link: "https://github.com/x01Jin/dndroll-discord-bot",
  },
  {
    name: "Project Apollo",
    description:
      "A simple browser based game about maintaining a dying ship until you are rescued.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/x01Jin/project-apollo",
  },
];

export const PROFILE = {
  name: "Alexander James Soriano",
  role: "Junior Developer & CS Graduate",
  objective:
    "Junior Developer with hands-on experience in software development and a strong background in PC troubleshooting and maintenance. Looking to contribute by building efficient applications and ensuring smooth IT operations for the company.",
  summary:
    "Proficient in Python, JavaScript, Node.js, and React for building efficient and user-friendly applications. Experienced with GitHub for version control, collaboration, and project management. Knowledgeable in AI, machine learning, and LLMs/local LLMs with practical development experience. Strong problem-solving skills and adaptable in both software development and PC support tasks.",
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
      "2024: “The future InSITE: ai Transforming Vision and Education”",
      "2025: “Emerging Technologies: Shaping the Future of Digital Innovation”",
    ],
  },
];

export const SEMINARS: string[] = [
  "Synergizing IOT and Robotics: unleashing the Power of Intelligence (2023)",
  "Seminar on Quality, Productivity, & Employability (2025)",
];
