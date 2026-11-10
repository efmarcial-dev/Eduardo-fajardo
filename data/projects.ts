export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  links?: { label: string; url: string }[];
  highlights: string[];
  challenge: string;
  approach: string;
  architecture: string;
  impact: string;
}

export const projects: Project[] = [
  {
    slug: "novadev",
    number: "01",
    title: "NovaDev / Nova IT Solutions",
    subtitle: "Technology Company & Engineering Operations",
    category: "Company Building",
    description:
      "A technology company focused on software engineering and technology solutions. Built from the ground up, encompassing software architecture, technical leadership, application development, cloud infrastructure, and engineering operations.",
    role: "Founder / CTO",
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "AWS",
      "Docker",
      "Terraform",
      "PostgreSQL",
      "REST APIs",
    ],
    links: [
      { label: "novadev.solutions", url: "https://novadev.solutions" },
      {
        label: "nova-it-solutions.vercel.app",
        url: "https://nova-it-solutions.vercel.app",
      },
    ],
    highlights: [
      "Company building and business operations",
      "End-to-end software architecture",
      "Technical leadership and team coordination",
      "Full-stack application development",
      "Cloud infrastructure design and deployment",
      "Engineering operations and delivery workflows",
    ],
    challenge:
      "Building a technology company from inception, establishing engineering processes, and delivering production-grade software solutions across multiple client engagements.",
    approach:
      "Established a modern engineering stack with emphasis on scalable architecture, automated deployment pipelines, and maintainable codebases. Combined enterprise engineering practices with startup agility.",
    architecture:
      "Multi-service architecture leveraging cloud-native deployment patterns, containerized applications, and infrastructure-as-code for repeatable and reliable environments.",
    impact:
      "Successfully built and operated a technology company delivering engineering solutions, establishing technical credibility across multiple domains and client organizations.",
  },
  {
    slug: "foxly-ai",
    number: "02",
    title: "Foxly AI",
    subtitle: "AI-Powered Executive Assistant Platform",
    category: "AI / Product",
    description:
      "An AI-powered executive assistant and productivity platform featuring intelligent task prioritization, multi-inbox integration, calendar synchronization, and AI-assisted productivity workflows.",
    role: "Founder / Lead Engineer",
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "OpenAI API",
      "Google APIs",
      "Microsoft Graph API",
      "PostgreSQL",
      "Redis",
    ],
    links: [
      { label: "foxly-ai.vercel.app", url: "https://foxly-ai.vercel.app" },
    ],
    highlights: [
      "AI-powered task prioritization engine",
      "Google and Outlook inbox integrations",
      "Calendar synchronization across providers",
      "Intelligent task management system",
      "AI-assisted productivity workflows",
      "Product architecture and full implementation",
    ],
    challenge:
      "Designing and building an AI-powered productivity platform that integrates with multiple email providers and calendar systems while maintaining a coherent, intelligent user experience.",
    approach:
      "Built a modular integration layer for connecting with Google and Microsoft APIs. Implemented an AI prioritization engine that learns from user behavior and context to surface the most important tasks and communications.",
    architecture:
      "Event-driven architecture connecting multiple third-party API integrations through a unified data layer. AI processing pipeline handles classification, prioritization, and intelligent scheduling.",
    impact:
      "Delivered a functional AI productivity platform demonstrating full-stack AI product development capabilities, from system design through implementation and deployment.",
  },
  {
    slug: "bioguard-ai",
    number: "03",
    title: "BioGuard AI",
    subtitle: "Healthcare Research & Biomarker Analysis Platform",
    category: "AI / Healthcare",
    description:
      "An AI-driven healthcare research and biomarker analysis platform. Utilizes Python-based machine learning for biomarker analysis, healthcare data processing, and scientific data workflows.",
    role: "Lead Engineer",
    technologies: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    links: [],
    highlights: [
      "Python-based machine learning pipelines",
      "Biomarker analysis workflows",
      "Healthcare data processing systems",
      "Model architecture and training",
      "Scientific data workflow automation",
      "Research-oriented AI infrastructure",
    ],
    challenge:
      "Building reliable machine learning pipelines for healthcare biomarker analysis that handle complex scientific data while maintaining accuracy and reproducibility.",
    approach:
      "Designed modular ML pipelines with emphasis on data quality, feature engineering, and model validation. Implemented reproducible scientific workflows with comprehensive data processing capabilities.",
    architecture:
      "Pipeline-based architecture with staged data ingestion, processing, feature extraction, model training, and analysis reporting. Containerized for reproducible execution environments.",
    impact:
      "Developed a functional biomarker analysis platform demonstrating competency in healthcare AI, scientific data processing, and machine learning engineering.",
  },
  {
    slug: "omni-care-oasis",
    number: "04",
    title: "Omni Care Oasis",
    subtitle: "Healthcare Technology & Quality-Control Platform",
    category: "Healthcare Tech",
    description:
      "Healthcare technology platform development encompassing AI-powered quality-control workflows, data processing, and healthcare technology integrations. Includes BioGuard AI, Omni AssuranceView QC, and FFT Enhanced products.",
    role: "Technical Architect",
    technologies: [
      "Python",
      "Django",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Docker",
      "REST APIs",
    ],
    links: [],
    highlights: [
      "Healthcare software architecture",
      "AI-powered quality-control workflows",
      "Multi-product platform development",
      "Healthcare data processing systems",
      "Platform architecture and integration design",
      "Healthcare technology compliance workflows",
    ],
    challenge:
      "Architecting a healthcare technology platform that supports multiple products with shared infrastructure while meeting the unique requirements of healthcare data processing and quality control.",
    approach:
      "Designed a shared platform architecture supporting multiple healthcare products. Implemented quality-control workflows with AI-powered automation and comprehensive data processing capabilities.",
    architecture:
      "Platform-based architecture with shared services layer supporting multiple product verticals. Includes BioGuard AI for biomarker analysis, Omni AssuranceView QC for quality control, and FFT Enhanced for signal processing.",
    impact:
      "Built a multi-product healthcare technology platform demonstrating the ability to architect and implement complex domain-specific software systems.",
  },
  {
    slug: "lora-esp32",
    number: "05",
    title: "LoRa / ESP32",
    subtitle: "Embedded Systems & Wireless Communication",
    category: "Embedded Systems",
    description:
      "An embedded systems and wireless communication project utilizing Heltec LoRa 32 V3, ESP32, SX1262, OLED display, Wi-Fi, and LoRa communication protocols for practical engineering applications.",
    role: "Engineer",
    technologies: [
      "C/C++",
      "Arduino",
      "ESP32",
      "LoRa (SX1262)",
      "Wi-Fi",
      "OLED (SSD1306)",
      "PlatformIO",
    ],
    links: [],
    highlights: [
      "Embedded development on Heltec LoRa 32 V3",
      "LoRa wireless communication implementation",
      "Microcontroller programming and firmware",
      "Hardware/software integration",
      "OLED display interface development",
      "Wi-Fi and LoRa dual-communication setup",
    ],
    challenge:
      "Implementing reliable long-range wireless communication between embedded devices while managing power constraints, display interfaces, and dual communication protocols.",
    approach:
      "Developed firmware for the Heltec LoRa 32 V3 platform, implementing both Wi-Fi and LoRa communication stacks. Built an OLED display interface for real-time device status and communication monitoring.",
    architecture:
      "Embedded firmware architecture with modular communication handlers for Wi-Fi and LoRa protocols, display management layer, and sensor data processing pipeline running on ESP32 hardware.",
    impact:
      "Demonstrated practical embedded systems engineering capabilities including hardware/software integration, wireless protocol implementation, and microcontroller development.",
  },
  {
    slug: "enterprise-engineering",
    number: "06",
    title: "Enterprise Engineering",
    subtitle: "Enterprise-Scale Backend & Infrastructure",
    category: "Enterprise",
    description:
      "Enterprise engineering experience spanning backend development, cloud infrastructure, identity management, and distributed systems. Includes work with Python, Django, Next.js, AWS, Terraform, Kafka, and enterprise authentication protocols.",
    role: "Senior Developer",
    technologies: [
      "Python",
      "Django",
      "Next.js",
      "AWS",
      "Terraform",
      "Kafka",
      "SAML",
      "OpenID Connect",
      "Docker",
      "PostgreSQL",
    ],
    links: [],
    highlights: [
      "Enterprise backend development",
      "Cloud infrastructure with AWS and Terraform",
      "Event-driven systems with Kafka",
      "SAML and OpenID Connect SSO integrations",
      "Enterprise-grade API development",
      "Infrastructure-as-code workflows",
    ],
    challenge:
      "Operating within enterprise engineering environments that demand high reliability, security compliance, scalable architecture, and integration with complex identity and access management systems.",
    approach:
      "Applied enterprise engineering practices including infrastructure-as-code, comprehensive testing, security-first design, and event-driven architecture patterns for scalable and maintainable systems.",
    architecture:
      "Distributed service architecture with event-driven communication via Kafka, infrastructure managed through Terraform, identity federation via SAML/OIDC, and containerized deployments on AWS.",
    impact:
      "Contributed to enterprise-scale systems serving large user populations, demonstrating ability to operate within complex engineering organizations and deliver reliable, secure software.",
  },
];
