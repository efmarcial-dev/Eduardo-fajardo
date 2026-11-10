"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ArchitectureDiagramProps {
  slug: string;
}

export default function ArchitectureDiagram({ slug }: ArchitectureDiagramProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  switch (slug) {
    case "novadev":
      return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                SYS-ARCH // 01
              </span>
              <h3 className="text-base font-bold text-foreground">
                Cloud-Native Multi-Service Architecture
              </h3>
            </div>
            <span className="text-xs text-gray-400 font-mono hidden sm:inline">
              AWS · Terraform · Next.js · Python
            </span>
          </div>

          <div className="relative w-full overflow-x-auto pb-4">
            <svg
              viewBox="0 0 760 220"
              className="w-full min-w-[640px] text-xs font-sans select-none"
            >
              {/* Grid background */}
              <defs>
                <pattern
                  id="grid-novadev"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1" fill="#e5e7eb" />
                </pattern>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#2563eb" />
                </marker>
              </defs>

              <rect width="760" height="220" fill="url(#grid-novadev)" opacity="0.6" />

              {/* Connecting paths */}
              <path
                d="M 140 110 L 220 110"
                stroke="#2563eb"
                strokeWidth="2"
                strokeDasharray="4 2"
                markerEnd="url(#arrow)"
              />
              <path
                d="M 360 110 L 440 110"
                stroke="#2563eb"
                strokeWidth="2"
                strokeDasharray="4 2"
                markerEnd="url(#arrow)"
              />
              <path
                d="M 580 110 L 630 110"
                stroke="#2563eb"
                strokeWidth="2"
                markerEnd="url(#arrow)"
              />

              {/* Node 1: Edge & Client */}
              <g
                className="cursor-pointer transition-transform hover:scale-105"
                onMouseEnter={() => setActiveStep(1)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <rect
                  x="20"
                  y="65"
                  width="120"
                  height="90"
                  rx="8"
                  fill="#ffffff"
                  stroke={activeStep === 1 ? "#2563eb" : "#d1d5db"}
                  strokeWidth={activeStep === 1 ? "2" : "1"}
                  className="filter drop-shadow-sm"
                />
                <text x="80" y="95" textAnchor="middle" fontWeight="bold" fill="#111827">
                  Client & Edge
                </text>
                <text x="80" y="115" textAnchor="middle" fill="#6b7280" fontSize="10">
                  Next.js Web
                </text>
                <text x="80" y="132" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="500">
                  CloudFront / SSL
                </text>
              </g>

              {/* Node 2: API Gateway & Load Balancer */}
              <g
                className="cursor-pointer transition-transform hover:scale-105"
                onMouseEnter={() => setActiveStep(2)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <rect
                  x="220"
                  y="65"
                  width="140"
                  height="90"
                  rx="8"
                  fill="#ffffff"
                  stroke={activeStep === 2 ? "#2563eb" : "#d1d5db"}
                  strokeWidth={activeStep === 2 ? "2" : "1"}
                  className="filter drop-shadow-sm"
                />
                <text x="290" y="95" textAnchor="middle" fontWeight="bold" fill="#111827">
                  Routing & Ingress
                </text>
                <text x="290" y="115" textAnchor="middle" fill="#6b7280" fontSize="10">
                  AWS ALB
                </text>
                <text x="290" y="132" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="500">
                  Rate Limiting & Auth
                </text>
              </g>

              {/* Node 3: Microservices Cluster */}
              <g
                className="cursor-pointer transition-transform hover:scale-105"
                onMouseEnter={() => setActiveStep(3)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <rect
                  x="440"
                  y="45"
                  width="140"
                  height="130"
                  rx="8"
                  fill="#f8fafc"
                  stroke={activeStep === 3 ? "#2563eb" : "#94a3b8"}
                  strokeWidth={activeStep === 3 ? "2" : "1"}
                  className="filter drop-shadow-sm"
                />
                <text x="510" y="75" textAnchor="middle" fontWeight="bold" fill="#111827">
                  Compute Layer
                </text>
                <rect x="455" y="90" width="110" height="30" rx="4" fill="#ffffff" stroke="#e2e8f0" />
                <text x="510" y="110" textAnchor="middle" fill="#1e293b" fontSize="10">
                  Python Backend API
                </text>
                <rect x="455" y="130" width="110" height="30" rx="4" fill="#ffffff" stroke="#e2e8f0" />
                <text x="510" y="150" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="500">
                  Docker / ECS Tasks
                </text>
              </g>

              {/* Node 4: Persistence */}
              <g
                className="cursor-pointer transition-transform hover:scale-105"
                onMouseEnter={() => setActiveStep(4)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <rect
                  x="630"
                  y="65"
                  width="110"
                  height="90"
                  rx="8"
                  fill="#ffffff"
                  stroke={activeStep === 4 ? "#2563eb" : "#d1d5db"}
                  strokeWidth={activeStep === 4 ? "2" : "1"}
                  className="filter drop-shadow-sm"
                />
                <text x="685" y="95" textAnchor="middle" fontWeight="bold" fill="#111827">
                  Persistence
                </text>
                <text x="685" y="115" textAnchor="middle" fill="#6b7280" fontSize="10">
                  RDS PostgreSQL
                </text>
                <text x="685" y="132" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="500">
                  S3 Storage
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600 flex items-center justify-between">
            <span>
              <strong>Deployment:</strong> Provisioned via Terraform infrastructure-as-code with automated GitHub Actions CI/CD workflows.
            </span>
            <span className="text-accent font-medium flex items-center gap-1">
              Zero-Downtime Rolling <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      );

    case "foxly-ai":
      return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                SYS-ARCH // 02
              </span>
              <h3 className="text-base font-bold text-foreground">
                AI Executive Assistant Event & Processing Pipeline
              </h3>
            </div>
            <span className="text-xs text-gray-400 font-mono hidden sm:inline">
              Webhooks · OpenAI API · Redis · Next.js
            </span>
          </div>

          <div className="relative w-full overflow-x-auto pb-4">
            <svg
              viewBox="0 0 760 220"
              className="w-full min-w-[640px] text-xs font-sans select-none"
            >
              <defs>
                <marker
                  id="arrow2"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#2563eb" />
                </marker>
              </defs>

              <path d="M 140 85 L 210 85" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow2)" />
              <path d="M 140 145 L 210 120" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow2)" />
              <path d="M 330 110 L 400 110" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow2)" />
              <path d="M 520 110 L 590 110" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrow2)" />

              {/* Ingestion sources */}
              <g>
                <rect x="20" y="55" width="120" height="50" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
                <text x="80" y="78" textAnchor="middle" fontWeight="bold" fill="#0f172a">
                  Google Workspace
                </text>
                <text x="80" y="94" textAnchor="middle" fill="#64748b" fontSize="9">
                  Gmail & Calendar APIs
                </text>

                <rect x="20" y="125" width="120" height="50" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
                <text x="80" y="148" textAnchor="middle" fontWeight="bold" fill="#0f172a">
                  Microsoft 365
                </text>
                <text x="80" y="164" textAnchor="middle" fill="#64748b" fontSize="9">
                  Graph API & Outlook
                </text>
              </g>

              {/* Ingestion layer */}
              <g>
                <rect x="210" y="70" width="120" height="80" rx="8" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
                <text x="270" y="98" textAnchor="middle" fontWeight="bold" fill="#111827">
                  Sync & Webhooks
                </text>
                <text x="270" y="118" textAnchor="middle" fill="#4b5563" fontSize="10">
                  Event Deduplication
                </text>
                <text x="270" y="134" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="500">
                  Redis Queue
                </text>
              </g>

              {/* AI Core */}
              <g>
                <rect x="400" y="60" width="120" height="100" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
                <text x="460" y="90" textAnchor="middle" fontWeight="bold" fill="#1e3a8a">
                  AI Prioritization
                </text>
                <text x="460" y="110" textAnchor="middle" fill="#1d4ed8" fontSize="10">
                  Context Extraction
                </text>
                <text x="460" y="126" textAnchor="middle" fill="#1d4ed8" fontSize="10">
                  Urgency Scoring
                </text>
                <text x="460" y="144" textAnchor="middle" fill="#2563eb" fontSize="9" fontWeight="bold">
                  OpenAI Models
                </text>
              </g>

              {/* Client Interface */}
              <g>
                <rect x="590" y="70" width="140" height="80" rx="8" fill="#ffffff" stroke="#10b981" strokeWidth="1.5" />
                <text x="660" y="98" textAnchor="middle" fontWeight="bold" fill="#065f46">
                  Unified Executive UI
                </text>
                <text x="660" y="118" textAnchor="middle" fill="#4b5563" fontSize="10">
                  Smart Task Feeds
                </text>
                <text x="660" y="134" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="500">
                  Autonomous Scheduling
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600 flex items-center justify-between">
            <span>
              <strong>Key Capability:</strong> Cross-platform email & calendar normalization with LLM-driven urgency scoring and conflict resolution.
            </span>
          </div>
        </div>
      );

    case "bioguard-ai":
      return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                SYS-ARCH // 03
              </span>
              <h3 className="text-base font-bold text-foreground">
                Healthcare Biomarker Machine Learning Pipeline
              </h3>
            </div>
            <span className="text-xs text-gray-400 font-mono hidden sm:inline">
              Python · scikit-learn · Pandas · FastAPI
            </span>
          </div>

          <div className="relative w-full overflow-x-auto pb-4">
            <svg
              viewBox="0 0 760 200"
              className="w-full min-w-[640px] text-xs font-sans select-none"
            >
              <defs>
                <marker
                  id="arrow3"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#7c3aed" />
                </marker>
              </defs>

              <path d="M 140 100 L 200 100" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow3)" />
              <path d="M 320 100 L 380 100" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow3)" />
              <path d="M 500 100 L 560 100" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrow3)" />

              <g>
                <rect x="20" y="60" width="120" height="80" rx="8" fill="#ffffff" stroke="#cbd5e1" />
                <text x="80" y="90" textAnchor="middle" fontWeight="bold" fill="#0f172a">
                  Clinical Data
                </text>
                <text x="80" y="110" textAnchor="middle" fill="#64748b" fontSize="10">
                  Raw Biomarkers
                </text>
                <text x="80" y="126" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="500">
                  CSV / Parquet / HL7
                </text>
              </g>

              <g>
                <rect x="200" y="60" width="120" height="80" rx="8" fill="#ffffff" stroke="#7c3aed" strokeWidth="1.5" />
                <text x="260" y="90" textAnchor="middle" fontWeight="bold" fill="#0f172a">
                  Feature Pipeline
                </text>
                <text x="260" y="110" textAnchor="middle" fill="#64748b" fontSize="10">
                  NumPy / Pandas ETL
                </text>
                <text x="260" y="126" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="500">
                  Outlier Filtering
                </text>
              </g>

              <g>
                <rect x="380" y="50" width="120" height="100" rx="8" fill="#faf5ff" stroke="#9333ea" strokeWidth="2" />
                <text x="440" y="80" textAnchor="middle" fontWeight="bold" fill="#581c87">
                  ML Inference
                </text>
                <text x="440" y="100" textAnchor="middle" fill="#7e22ce" fontSize="10">
                  scikit-learn Models
                </text>
                <text x="440" y="116" textAnchor="middle" fill="#7e22ce" fontSize="10">
                  Ensemble Classifier
                </text>
                <text x="440" y="134" textAnchor="middle" fill="#9333ea" fontSize="9" fontWeight="bold">
                  Cross-Validation
                </text>
              </g>

              <g>
                <rect x="560" y="60" width="150" height="80" rx="8" fill="#ffffff" stroke="#10b981" strokeWidth="1.5" />
                <text x="635" y="90" textAnchor="middle" fontWeight="bold" fill="#065f46">
                  Research API Service
                </text>
                <text x="635" y="110" textAnchor="middle" fill="#64748b" fontSize="10">
                  FastAPI REST Endpoints
                </text>
                <text x="635" y="126" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="500">
                  Validated Reports
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600 flex items-center justify-between">
            <span>
              <strong>Scientific Rigor:</strong> Reproducible machine learning workflows with strict data hygiene, deterministic train/test splits, and validated performance metrics.
            </span>
          </div>
        </div>
      );

    case "omni-care-oasis":
      return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                SYS-ARCH // 04
              </span>
              <h3 className="text-base font-bold text-foreground">
                Healthcare Suite & Quality-Control Platform
              </h3>
            </div>
            <span className="text-xs text-gray-400 font-mono hidden sm:inline">
              QC Automation · FFT Signal Processing · Django
            </span>
          </div>

          <div className="relative w-full overflow-x-auto pb-4">
            <svg
              viewBox="0 0 760 220"
              className="w-full min-w-[640px] text-xs font-sans select-none"
            >
              <defs>
                <marker
                  id="arrow4"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#0284c7" />
                </marker>
              </defs>

              <path d="M 150 110 L 220 110" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow4)" />
              <path d="M 360 85 L 430 65" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow4)" />
              <path d="M 360 110 L 430 110" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow4)" />
              <path d="M 360 135 L 430 155" stroke="#0284c7" strokeWidth="2" markerEnd="url(#arrow4)" />

              <g>
                <rect x="20" y="70" width="130" height="80" rx="8" fill="#ffffff" stroke="#cbd5e1" />
                <text x="85" y="100" textAnchor="middle" fontWeight="bold" fill="#0f172a">
                  Clinical Web Portal
                </text>
                <text x="85" y="120" textAnchor="middle" fill="#64748b" fontSize="10">
                  Next.js / TypeScript
                </text>
                <text x="85" y="136" textAnchor="middle" fill="#0284c7" fontSize="10" fontWeight="500">
                  Role-Based Dashboards
                </text>
              </g>

              <g>
                <rect x="220" y="60" width="140" height="100" rx="8" fill="#f0f9ff" stroke="#0284c7" strokeWidth="2" />
                <text x="290" y="90" textAnchor="middle" fontWeight="bold" fill="#075985">
                  Platform Core
                </text>
                <text x="290" y="110" textAnchor="middle" fill="#0369a1" fontSize="10">
                  Django Backend
                </text>
                <text x="290" y="126" textAnchor="middle" fill="#0369a1" fontSize="10">
                  PostgreSQL Data Hub
                </text>
                <text x="290" y="144" textAnchor="middle" fill="#0284c7" fontSize="9" fontWeight="bold">
                  HIPAA-Compliant Bus
                </text>
              </g>

              {/* Sub-products */}
              <g>
                <rect x="430" y="40" width="280" height="45" rx="6" fill="#ffffff" stroke="#38bdf8" />
                <text x="445" y="65" fontWeight="bold" fill="#0c4a6e" fontSize="11">
                  Omni AssuranceView QC
                </text>
                <text x="445" y="78" fill="#64748b" fontSize="9">
                  Automated Clinical Quality-Control Auditing Engine
                </text>

                <rect x="430" y="95" width="280" height="45" rx="6" fill="#ffffff" stroke="#38bdf8" />
                <text x="445" y="120" fontWeight="bold" fill="#0c4a6e" fontSize="11">
                  BioGuard AI Module
                </text>
                <text x="445" y="133" fill="#64748b" fontSize="9">
                  Biomarker Classification & Predictive Analysis
                </text>

                <rect x="430" y="150" width="280" height="45" rx="6" fill="#ffffff" stroke="#38bdf8" />
                <text x="445" y="175" fontWeight="bold" fill="#0c4a6e" fontSize="11">
                  FFT Enhanced
                </text>
                <text x="445" y="188" fill="#64748b" fontSize="9">
                  Fast Fourier Transform Digital Signal Processing
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600 flex items-center justify-between">
            <span>
              <strong>Platform Synergy:</strong> Unified backend serving multiple healthcare applications with shared telemetry, compliance guardrails, and audit trails.
            </span>
          </div>
        </div>
      );

    case "lora-esp32":
      return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                SYS-ARCH // 05
              </span>
              <h3 className="text-base font-bold text-foreground">
                Embedded Hardware & Dual-Stack Wireless Architecture
              </h3>
            </div>
            <span className="text-xs text-gray-400 font-mono hidden sm:inline">
              Heltec LoRa 32 V3 · ESP32-S3 · SX1262 · C++
            </span>
          </div>

          <div className="relative w-full overflow-x-auto pb-4">
            <svg
              viewBox="0 0 760 220"
              className="w-full min-w-[640px] text-xs font-sans select-none"
            >
              <defs>
                <marker
                  id="arrow5"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#ca8a04" />
                </marker>
              </defs>

              <path d="M 230 85 L 290 85" stroke="#ca8a04" strokeWidth="2" markerEnd="url(#arrow5)" />
              <path d="M 230 135 L 290 135" stroke="#ca8a04" strokeWidth="2" markerEnd="url(#arrow5)" />
              <path d="M 450 110 L 520 85" stroke="#ca8a04" strokeWidth="2" markerEnd="url(#arrow5)" />
              <path d="M 450 110 L 520 135" stroke="#ca8a04" strokeWidth="2" markerEnd="url(#arrow5)" />

              {/* Hardware module container */}
              <rect x="20" y="40" width="430" height="145" rx="10" fill="#fefce8" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x="35" y="60" fontWeight="bold" fill="#713f12" fontSize="10">
                HELTEC LORA 32 V3 BOARD
              </text>

              {/* MCU */}
              <g>
                <rect x="40" y="70" width="190" height="95" rx="8" fill="#ffffff" stroke="#ca8a04" strokeWidth="2" />
                <text x="135" y="98" textAnchor="middle" fontWeight="bold" fill="#111827">
                  ESP32-S3 Dual-Core
                </text>
                <text x="135" y="118" textAnchor="middle" fill="#6b7280" fontSize="10">
                  FreeRTOS / C++ Firmware
                </text>
                <text x="135" y="136" textAnchor="middle" fill="#ca8a04" fontSize="10" fontWeight="500">
                  Packet Queue & Power States
                </text>
                <text x="135" y="152" textAnchor="middle" fill="#4b5563" fontSize="9">
                  OLED Driver (SSD1306)
                </text>
              </g>

              {/* Radio Transceiver */}
              <g>
                <rect x="290" y="70" width="140" height="95" rx="8" fill="#ffffff" stroke="#ca8a04" strokeWidth="2" />
                <text x="360" y="98" textAnchor="middle" fontWeight="bold" fill="#111827">
                  SX1262 LoRa RF
                </text>
                <text x="360" y="118" textAnchor="middle" fill="#6b7280" fontSize="10">
                  915 MHz Long-Range
                </text>
                <text x="360" y="136" textAnchor="middle" fill="#ca8a04" fontSize="10" fontWeight="500">
                  Spreading Factor & CRC
                </text>
                <text x="360" y="152" textAnchor="middle" fill="#4b5563" fontSize="9">
                  SPI Interface
                </text>
              </g>

              {/* Dual outputs */}
              <g>
                <rect x="520" y="60" width="200" height="50" rx="6" fill="#ffffff" stroke="#cbd5e1" />
                <text x="535" y="82" fontWeight="bold" fill="#0f172a">
                  Long-Range LoRa Mesh
                </text>
                <text x="535" y="98" fill="#64748b" fontSize="9">
                  Sub-GHz Off-Grid Sensor Network
                </text>

                <rect x="520" y="120" width="200" height="50" rx="6" fill="#ffffff" stroke="#cbd5e1" />
                <text x="535" y="142" fontWeight="bold" fill="#0f172a">
                  Wi-Fi Gateway (802.11)
                </text>
                <text x="535" y="158" fill="#64748b" fontSize="9">
                  MQTT / HTTP Cloud Uplink
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600 flex items-center justify-between">
            <span>
              <strong>Practical Engineering:</strong> Bare-metal embedded programming, power budget management, SPI bus timing, and resilient radio packet error detection.
            </span>
          </div>
        </div>
      );

    case "enterprise-engineering":
      return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                SYS-ARCH // 06
              </span>
              <h3 className="text-base font-bold text-foreground">
                Enterprise Federated Identity & Event-Driven Backbone
              </h3>
            </div>
            <span className="text-xs text-gray-400 font-mono hidden sm:inline">
              SAML · OIDC · Kafka · AWS · Django
            </span>
          </div>

          <div className="relative w-full overflow-x-auto pb-4">
            <svg
              viewBox="0 0 760 230"
              className="w-full min-w-[640px] text-xs font-sans select-none"
            >
              <defs>
                <marker
                  id="arrow6"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#1e3a8a" />
                </marker>
              </defs>

              <path d="M 140 115 L 210 115" stroke="#1e3a8a" strokeWidth="2" markerEnd="url(#arrow6)" />
              <path d="M 350 115 L 420 115" stroke="#1e3a8a" strokeWidth="2" markerEnd="url(#arrow6)" />
              <path d="M 560 115 L 620 115" stroke="#1e3a8a" strokeWidth="2" markerEnd="url(#arrow6)" />

              {/* Identity layer */}
              <g>
                <rect x="20" y="65" width="120" height="100" rx="8" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
                <text x="80" y="95" textAnchor="middle" fontWeight="bold" fill="#1e3a8a">
                  Identity Federation
                </text>
                <text x="80" y="115" textAnchor="middle" fill="#4b5563" fontSize="10">
                  SAML 2.0 / SSO
                </text>
                <text x="80" y="132" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="500">
                  OpenID Connect
                </text>
                <text x="80" y="150" textAnchor="middle" fill="#6b7280" fontSize="9">
                  Enterprise IdP
                </text>
              </g>

              {/* Core Application */}
              <g>
                <rect x="210" y="55" width="140" height="120" rx="8" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
                <text x="280" y="85" textAnchor="middle" fontWeight="bold" fill="#0f172a">
                  Core Backend
                </text>
                <text x="280" y="105" textAnchor="middle" fill="#475569" fontSize="10">
                  Django / Python
                </text>
                <text x="280" y="122" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="500">
                  RBAC & ABAC Auth
                </text>
                <text x="280" y="140" textAnchor="middle" fill="#64748b" fontSize="9">
                  Enterprise API Layer
                </text>
                <text x="280" y="156" textAnchor="middle" fill="#64748b" fontSize="9">
                  Next.js Portal
                </text>
              </g>

              {/* Kafka Mesh */}
              <g>
                <rect x="420" y="65" width="140" height="100" rx="8" fill="#fff7ed" stroke="#ea580c" strokeWidth="2" />
                <text x="490" y="95" textAnchor="middle" fontWeight="bold" fill="#9a3412">
                  Event Streaming
                </text>
                <text x="490" y="115" textAnchor="middle" fill="#ea580c" fontSize="10" fontWeight="bold">
                  Apache Kafka Mesh
                </text>
                <text x="490" y="132" textAnchor="middle" fill="#4b5563" fontSize="10">
                  Audit & Telemetry Logs
                </text>
                <text x="490" y="150" textAnchor="middle" fill="#c2410c" fontSize="9">
                  Pub/Sub Topics
                </text>
              </g>

              {/* AWS Infrastructure */}
              <g>
                <rect x="620" y="65" width="120" height="100" rx="8" fill="#ffffff" stroke="#059669" strokeWidth="1.5" />
                <text x="680" y="95" textAnchor="middle" fontWeight="bold" fill="#065f46">
                  AWS Cloud Infra
                </text>
                <text x="680" y="115" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="500">
                  Terraform IaC
                </text>
                <text x="680" y="132" textAnchor="middle" fill="#4b5563" fontSize="10">
                  Multi-AZ High Avail
                </text>
                <text x="680" y="150" textAnchor="middle" fill="#6b7280" fontSize="9">
                  VPC Isolation
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600 flex items-center justify-between">
            <span>
              <strong>Enterprise Scale:</strong> High-throughput, resilient architecture meeting rigorous federal and institutional security standards without downtime.
            </span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
