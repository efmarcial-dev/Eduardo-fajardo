export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
  relatedProjects: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    description:
      "Building reliable server-side systems, APIs, and data-driven applications with production-grade architecture.",
    skills: [
      "Python",
      "Django",
      "FastAPI",
      "API Architecture",
      "Backend Services",
      "Database Design",
      "PostgreSQL",
      "Redis",
    ],
    relatedProjects: [
      "Enterprise Engineering",
      "NovaDev",
      "Omni Care Oasis",
      "BioGuard AI",
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Product Engineering",
    description:
      "Designing and building modern web applications with attention to performance, accessibility, and user experience.",
    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Modern Web APIs",
      "Responsive Design",
      "Performance Optimization",
    ],
    relatedProjects: ["NovaDev", "Foxly AI", "Omni Care Oasis"],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description:
      "Designing scalable cloud architecture and automating infrastructure for reliable, repeatable deployments.",
    skills: [
      "AWS",
      "Terraform",
      "Docker",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Cloud Architecture",
      "Deployment Workflows",
    ],
    relatedProjects: ["Enterprise Engineering", "NovaDev", "Omni Care Oasis"],
  },
  {
    id: "distributed",
    title: "Distributed Systems & Integration",
    description:
      "Building event-driven architectures and integrating complex systems across organizational boundaries.",
    skills: [
      "Kafka",
      "Event-Driven Architecture",
      "System Integration",
      "API Design",
      "Message Queues",
      "Microservices",
    ],
    relatedProjects: ["Enterprise Engineering", "Foxly AI"],
  },
  {
    id: "identity",
    title: "Identity & Access Management",
    description:
      "Implementing enterprise authentication and authorization systems with standards-based identity protocols.",
    skills: [
      "SAML",
      "OpenID Connect",
      "SSO",
      "OAuth 2.0",
      "Authentication Architecture",
      "Authorization Design",
    ],
    relatedProjects: ["Enterprise Engineering"],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "Building AI-powered applications and machine learning pipelines for data processing and intelligent automation.",
    skills: [
      "Python",
      "scikit-learn",
      "Machine Learning Pipelines",
      "AI Application Development",
      "Data Processing",
      "LLM Integration",
      "NLP",
    ],
    relatedProjects: ["Foxly AI", "BioGuard AI", "Omni Care Oasis"],
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    description:
      "Developing firmware and hardware-software integrations for microcontroller-based communication systems.",
    skills: [
      "C/C++",
      "Arduino",
      "ESP32",
      "LoRa",
      "Wi-Fi",
      "PlatformIO",
      "Hardware Integration",
    ],
    relatedProjects: ["LoRa / ESP32"],
  },
];
