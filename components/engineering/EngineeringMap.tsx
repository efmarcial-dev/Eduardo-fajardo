"use client";

import { useState, useCallback, useRef } from "react";
import { useScrollReveal } from "@/lib/animations";
import {
  Server,
  Monitor,
  Cloud,
  Network,
  Shield,
  Brain,
  Cpu,
  X,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface Branch {
  id: string;
  code: string;
  label: string;
  icon: React.ElementType;
  color: string;
  technologies: string[];
  capabilities: string[];
  projects: { name: string; slug: string }[];
  description: string;
}

const branches: Branch[] = [
  {
    id: "backend",
    code: "BE-01",
    label: "Backend Engineering",
    icon: Server,
    color: "#2563eb",
    technologies: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis", "REST APIs"],
    capabilities: [
      "High-Throughput API Architecture",
      "Relational & Key-Value Database Modeling",
      "Asynchronous Task Execution",
      "Production Service Resilience",
    ],
    projects: [
      { name: "Enterprise Engineering", slug: "enterprise-engineering" },
      { name: "NovaDev", slug: "novadev" },
      { name: "Omni Care Oasis", slug: "omni-care-oasis" },
      { name: "BioGuard AI", slug: "bioguard-ai" },
    ],
    description:
      "Designing fault-tolerant, scalable server-side systems, service boundaries, and transactional data pipelines engineered for enterprise scale.",
  },
  {
    id: "cloud",
    code: "CI-02",
    label: "Cloud & Infrastructure",
    icon: Cloud,
    color: "#0891b2",
    technologies: ["AWS", "Terraform", "Docker", "CI/CD Workflows", "ECS/Fargate", "VPC"],
    capabilities: [
      "Declarative Infrastructure as Code (IaC)",
      "Multi-AZ High Availability Architecture",
      "Container Orchestration & Deployment Pipelines",
      "Security Hardening & Cost Optimization",
    ],
    projects: [
      { name: "Enterprise Engineering", slug: "enterprise-engineering" },
      { name: "NovaDev", slug: "novadev" },
      { name: "Omni Care Oasis", slug: "omni-care-oasis" },
    ],
    description:
      "Automating reproducible cloud environments and distributed infrastructure through code with zero-downtime deployment strategies.",
  },
  {
    id: "ai",
    code: "ML-03",
    label: "AI & Machine Learning",
    icon: Brain,
    color: "#7c3aed",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "OpenAI API", "NLP"],
    capabilities: [
      "Clinical Biomarker Feature Engineering",
      "Reproducible Machine Learning Pipelines",
      "LLM Agent & Workflow Orchestration",
      "Data Normalization & Outlier Detection",
    ],
    projects: [
      { name: "Foxly AI", slug: "foxly-ai" },
      { name: "BioGuard AI", slug: "bioguard-ai" },
      { name: "Omni Care Oasis", slug: "omni-care-oasis" },
    ],
    description:
      "Integrating machine learning models and intelligent workflows into production applications with validated metrics and strict data hygiene.",
  },
  {
    id: "distributed",
    code: "DS-04",
    label: "Distributed Systems",
    icon: Network,
    color: "#ea580c",
    technologies: ["Kafka", "Event-Driven Architecture", "Message Queues", "Microservices", "Pub/Sub"],
    capabilities: [
      "Event-Driven Streaming Architecture",
      "Distributed Message Handling & Idempotency",
      "System Integration Across Boundaries",
      "Audit & Telemetry Log Aggregation",
    ],
    projects: [
      { name: "Enterprise Engineering", slug: "enterprise-engineering" },
      { name: "Foxly AI", slug: "foxly-ai" },
    ],
    description:
      "Architecting loosely coupled, event-driven backbones capable of reliably streaming and synchronizing state across distributed boundaries.",
  },
  {
    id: "identity",
    code: "ID-05",
    label: "Identity & Security",
    icon: Shield,
    color: "#059669",
    technologies: ["SAML 2.0", "OpenID Connect", "OAuth 2.0", "SSO", "RBAC / ABAC"],
    capabilities: [
      "Enterprise Identity Provider Federation",
      "Single Sign-On (SSO) Integration",
      "Fine-Grained Role-Based Access Controls",
      "Security Auditing & Token Lifecycle",
    ],
    projects: [
      { name: "Enterprise Engineering", slug: "enterprise-engineering" },
    ],
    description:
      "Implementing standards-based enterprise authentication, authorization, and federated identity protocols satisfying stringent security requirements.",
  },
  {
    id: "product",
    code: "FE-06",
    label: "Product Engineering",
    icon: Monitor,
    color: "#e11d48",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "GSAP", "Server Components"],
    capabilities: [
      "Modern Editorial Frontend Architecture",
      "Accessible & Responsive Web Applications",
      "Sub-Second Page Load Optimization",
      "Fluid Animation & Micro-Interactions",
    ],
    projects: [
      { name: "NovaDev", slug: "novadev" },
      { name: "Foxly AI", slug: "foxly-ai" },
      { name: "Omni Care Oasis", slug: "omni-care-oasis" },
    ],
    description:
      "Bridging systems architecture with polished, high-performance user interfaces that turn complex backend capabilities into intuitive products.",
  },
  {
    id: "embedded",
    code: "EM-07",
    label: "Embedded Systems",
    icon: Cpu,
    color: "#d97706",
    technologies: ["C/C++", "ESP32", "LoRa (SX1262)", "Arduino", "PlatformIO", "SSD1306 OLED"],
    capabilities: [
      "Microcontroller Firmware & Interrupts",
      "Sub-GHz Long-Range RF Packet Protocol",
      "Hardware / Software Peripheral Integration",
      "Low-Power Consumption Modes",
    ],
    projects: [
      { name: "LoRa / ESP32", slug: "lora-esp32" },
    ],
    description:
      "Developing low-level microcontroller firmware and radio transceiver protocols for off-grid, hardware-integrated communication networks.",
  },
];

function BlueprintDetail({
  branch,
  onClose,
}: {
  branch: Branch;
  onClose: () => void;
}) {
  return (
    <div
      key={branch.id}
      className="mt-8 rounded-2xl border-2 border-foreground/10 bg-white p-6 sm:p-8 shadow-lg relative overflow-hidden transition-all duration-200"
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{ backgroundColor: branch.color }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${branch.color}15` }}
          >
            <branch.icon className="h-6 w-6" style={{ color: branch.color }} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                DISCIPLINE // {branch.code}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mt-0.5">
              {branch.label}
            </h3>
          </div>
        </div>

        <button
          onClick={onClose}
          className="self-end sm:self-center p-2 rounded-lg text-gray-400 hover:text-foreground hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Close detail panel"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <p className="text-base text-gray-600 leading-relaxed max-w-3xl mb-8">
        {branch.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Technologies */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: branch.color }}
            />
            Core Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {branch.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-block text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200/50 rounded-full px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: branch.color }}
            />
            Key Capabilities
          </h4>
          <ul className="space-y-2">
            {branch.capabilities.map((cap) => (
              <li key={cap} className="text-xs text-gray-600 flex items-start gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-gray-400 shrink-0" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Associated Projects */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: branch.color }}
            />
            Verified Case Studies
          </h4>
          <div className="space-y-2">
            {branch.projects.map((proj) => (
              <Link
                key={proj.slug}
                href={`/projects/${proj.slug}`}
                className="group flex items-center justify-between p-2.5 rounded-lg border border-gray-200 bg-gray-50/50 hover:border-accent hover:bg-white transition-all text-xs font-medium text-foreground"
              >
                <span>{proj.name}</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EngineeringMap() {
  const [activeBranch, setActiveBranch] = useState<string>("backend");
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 25 });
  const detailRef = useRef<HTMLDivElement>(null);

  const selectedBranch = branches.find((b) => b.id === activeBranch);

  const handleBranchClick = useCallback((id: string) => {
    setActiveBranch((prev) => (prev === id ? id : id));
  }, []);

  const handleClose = useCallback(() => {
    setActiveBranch("");
  }, []);

  return (
    <section className="py-24 md:py-32 bg-gray-50/60 border-y border-gray-200/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={sectionRef} className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold px-2 py-0.5 bg-accent/5 rounded border border-accent/20">
              SIGNATURE ARCHITECTURE // BLUEPRINT
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Interactive engineering map.
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">
            An architectural blueprint visualizing how engineering disciplines converge.
            Select any discipline to inspect integrated technologies, capabilities, and associated implementations.
          </p>
        </div>

        {/* Blueprint Visualizer Container */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle blueprint grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Central Hub & Branch Graph */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Central Node: EDUARDO — ENGINEERING */}
            <div className="mb-10 text-center">
              <div className="inline-flex flex-col items-center justify-center rounded-2xl border-2 border-foreground bg-white px-8 py-5 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </span>
                  <span className="text-xs font-mono font-semibold text-accent uppercase tracking-widest">
                    CENTRAL ARCHITECTURE CORE
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
                  EDUARDO // ENGINEERING
                </h3>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Full-Lifecycle Systems & Products
                </p>
              </div>
            </div>

            {/* Connecting Circuit / Branches */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {branches.map((branch) => {
                const isActive = activeBranch === branch.id;
                return (
                  <button
                    key={branch.id}
                    onClick={() => handleBranchClick(branch.id)}
                    className={`group relative text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "border-accent bg-accent/[0.04] shadow-sm ring-2 ring-accent"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/70"
                    }`}
                    aria-pressed={isActive}
                    aria-label={`Select ${branch.label} branch`}
                  >
                    {/* Active discipline indicator */}
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
                        style={{
                          backgroundColor: isActive
                            ? `${branch.color}20`
                            : "#f3f4f6",
                        }}
                      >
                        <branch.icon
                          className="h-5 w-5 transition-colors"
                          style={{
                            color: isActive ? branch.color : "#4b5563",
                          }}
                        />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold">
                        {branch.code}
                      </span>
                    </div>

                    <h4
                      className={`text-sm font-bold transition-colors ${
                        isActive ? "text-foreground" : "text-gray-800"
                      }`}
                    >
                      {branch.label}
                    </h4>

                    <p className="text-xs text-gray-400 mt-1 line-clamp-1 font-mono">
                      {branch.technologies.slice(0, 3).join(" · ")}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px]">
                      <span className="text-gray-400">
                        {branch.projects.length} case{" "}
                        {branch.projects.length === 1 ? "study" : "studies"}
                      </span>
                      <span
                        className="font-medium transition-colors"
                        style={{ color: isActive ? branch.color : "#9ca3af" }}
                      >
                        {isActive ? "Viewing" : "Explore →"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Detail Drawer */}
            <div ref={detailRef} className="w-full">
              {selectedBranch ? (
                <BlueprintDetail
                  branch={selectedBranch}
                  onClose={handleClose}
                />
              ) : (
                <div className="mt-8 p-6 text-center text-sm text-gray-400 border border-dashed border-gray-200 rounded-xl">
                  Select an engineering discipline above to inspect its architecture and capabilities.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
