export interface Experience {
  id: string;
  position: string;
  organization: string;
  type: "employment" | "founding";
  description: string;
  contributions: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "novadev",
    position: "Founder / CTO",
    organization: "NovaDev / Nova IT Solutions",
    type: "founding",
    description:
      "Founded and led a technology company focused on software engineering and technology solutions. Responsible for company strategy, technical architecture, engineering operations, and product delivery.",
    contributions: [
      "Built and scaled a technology company from inception",
      "Defined technical architecture and engineering standards",
      "Led full-stack application development across multiple projects",
      "Designed and implemented cloud infrastructure on AWS",
      "Established engineering workflows and delivery processes",
      "Managed client relationships and technical project scoping",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "Django",
      "AWS",
      "Terraform",
      "Docker",
      "PostgreSQL",
    ],
  },
  {
    id: "hhs",
    position: "Senior Developer",
    organization: "HHS",
    type: "employment",
    description:
      "Enterprise software engineering within a large-scale government technology environment. Contributed to backend development, cloud infrastructure, identity management, and distributed systems.",
    contributions: [
      "Enterprise backend development with Python and Django",
      "Cloud infrastructure design and management on AWS",
      "Identity and access management with SAML and OpenID Connect",
      "Event-driven architecture implementation with Kafka",
      "Infrastructure-as-code with Terraform",
      "Enterprise API development and integration",
    ],
    technologies: [
      "Python",
      "Django",
      "AWS",
      "Terraform",
      "Kafka",
      "SAML",
      "OpenID Connect",
      "Docker",
      "Next.js",
    ],
  },
];
