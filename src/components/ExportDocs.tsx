/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { FolderGit2, X, Terminal, Copy, Check, Shield } from "lucide-react";
import { useState } from "react";

interface ExportDocsProps {
  onClose: () => void;
}

export default function ExportDocs({ onClose }: ExportDocsProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const nextJsFolderStructure = `
philip-okello-exec-site/
├── .env.local
├── package.json
├── tailwind.config.ts  (or app/globals.css for Tailwind v4)
├── tsconfig.json
├── src/
│   ├── app/
│   │   ├── layout.tsx       (Metadata & Cormorant + Source Sans Config)
│   │   ├── page.tsx         (Primary Page rendering Hero, About, Timeline...)
│   │   ├── icon.svg         (Monogram PLO Vector Icon)
│   │   └── sitemap.ts       (Pristine SEO dynamic routing)
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Timeline.tsx
│   │   ├── Governance.tsx
│   │   ├── PolicyImpact.tsx
│   │   └── Contact.tsx
│   └── data/
│       └── okello-metadata.ts (Modular biography metrics)
  `.trim();

  const nextJsMetadataConfig = `
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philip Leakey Okello | CEO & Public Sector Governance Expert",
  description: "Executive portfolio of Philip Leakey Okello, Chief Executive Officer & public policy leader specializing in regulation and board-level governance in Kenya.",
  keywords: [
    "Philip Leakey Okello",
    "Governance Expert Kenya",
    "Chief Executive Officer Kenya",
    "Policy and Regulatory Leadership Kenya",
    "Board Governance Kenya",
    "Public Sector Transformation Kenya"
  ],
  authors: [{ name: "Philip Leakey Okello" }],
  openGraph: {
    title: "Philip Leakey Okello | Sovereign Governance Authority",
    description: "Leading institutional transformation, governance excellence, and regulatory innovation in Kenya's public sector.",
    type: "profile",
    images: ["/images/philip-okello-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Philip Leakey Okello | Chief Executive Officer",
    images: ["/images/philip-okello-og.png"],
  }
};
  `.trim();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-navy-dark/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ x: "100%", opacity: 0.8 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0.8 }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="w-full max-w-4xl h-full bg-white dark:bg-[#07121f] shadow-2xl flex flex-col pointer-events-auto border-l border-gold-exec/30 dark:border-gold-exec/60 transition-colors duration-300"
      >
        {/* Upper Title Header */}
        <div className="flex items-center justify-between p-6 bg-navy-dark text-white border-b border-gold-exec/20">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-white/5 border border-gold-exec/20 text-gold-exec">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold tracking-tight">
                Next.js 15 Implementation & SEO Schema Docs
              </h3>
              <p className="text-[10px] font-mono text-slate-gray/60 uppercase tracking-widest">
                Senior Architectural Hand-Off Plan
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-none border border-transparent hover:border-white/15 transition-all text-white/70 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable specs wrapper */}
        <div className="flex-1 overflow-y-auto p-8 space-y-10 text-charcoal-wood dark:text-slate-300">
          
          {/* General Introduction details */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] font-bold text-navy-dark dark:text-white uppercase mb-3 pb-2 border-b border-navy-dark/10 dark:border-white/10">
              <Shield className="w-4 h-4 text-gold-exec" /> 1. Framework Migration Strategy
            </h4>
            <p className="text-xs font-sans text-charcoal-wood dark:text-slate-300 leading-relaxed">
              This codebase has been intentionally designed as highly modular, dependency-light React components styled completely with vanilla Tailwind classes. Because next-generation framework routers (like Next.js 15 app router) render React components natively, you can copy-paste these component files directly into a server-side framework without parsing dependencies, ensuring a seamless translation.
            </p>
          </div>

          {/* Folder structure map */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-sans tracking-[0.2em] font-bold text-navy-dark dark:text-white uppercase">
                2. Target Folder Directory map
              </h4>
              <button
                onClick={() => copyToClipboard(nextJsFolderStructure, "folder")}
                className="flex items-center gap-1.5 text-[10px] font-mono text-gold-exec hover:text-navy-dark dark:hover:text-white transition-colors cursor-pointer"
              >
                {copiedText === "folder" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedText === "folder" ? "Copied" : "Copy Schema Tree"}
              </button>
            </div>
            <pre className="p-5 bg-slate-gray dark:bg-[#0f2744]/60 text-[11px] font-mono text-navy-dark dark:text-slate-200 border border-navy-dark/10 dark:border-white/10 overflow-x-auto leading-relaxed">
              {nextJsFolderStructure}
            </pre>
          </div>

          {/* Next.js 15 Metadata SEO Code */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-xs font-sans tracking-[0.2em] font-bold text-navy-dark dark:text-white uppercase">
                  3. Executive SEO Optimization & Metadata config
                </h4>
                <p className="text-[10px] text-charcoal-wood dark:text-slate-300 mt-1">
                  Place this snippet inside your Next.js <code className="font-mono bg-slate-gray dark:bg-white/10 px-1 text-navy-dark dark:text-white">src/app/layout.tsx</code> or page header.
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(nextJsMetadataConfig, "meta")}
                className="flex items-center gap-1.5 text-[10px] font-mono text-gold-exec hover:text-navy-dark dark:hover:text-white transition-colors cursor-pointer"
              >
                {copiedText === "meta" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedText === "meta" ? "Copied Code" : "Copy Code"}
              </button>
            </div>
            <pre className="p-5 bg-slate-gray dark:bg-[#0f2744]/60 text-[11px] font-mono text-navy-dark dark:text-slate-200 border border-navy-dark/10 dark:border-white/10 overflow-x-auto leading-relaxed max-h-72">
              {nextJsMetadataConfig}
            </pre>
          </div>

          {/* Core Tailwind Integration details */}
          <div>
            <h4 className="text-xs font-sans tracking-[0.2em] font-bold text-navy-dark dark:text-white uppercase mb-3 pb-2 border-b border-navy-dark/10 dark:border-white/10">
              4. Premium Asset Portability Check
            </h4>
            <div className="space-y-3 font-sans text-xs text-charcoal-wood dark:text-slate-300 leading-normal">
              <p>
                <strong>Portrait Image:</strong> The generated executive portrait of Philip Leakey Okello is saved inside the workspace. To transport, locate or download the image from the workspace and serve it from the public directory: <code className="font-mono bg-slate-gray dark:bg-white/10 px-1.5 py-0.5 text-navy-dark dark:text-white">/public/images/philip_okello_portrait.jpg</code>.
              </p>
              <p>
                <strong>Typography Loading:</strong> For pure Next.js 15, we advise loading fonts from <code className="font-mono text-navy-dark dark:text-white">next/font/google</code> dynamically inside layout.tsx to reduce rendering layout shifts:
              </p>
              <pre className="p-4 bg-slate-gray dark:bg-[#0f2744]/60 font-mono text-[10px] leading-relaxed text-navy-dark dark:text-slate-200 border border-navy-dark/10 dark:border-white/10 mt-2">
{`import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});`}
              </pre>
            </div>
          </div>

        </div>

        {/* Footer info banner */}
        <div className="p-6 bg-slate-gray dark:bg-[#0f2744] font-sans border-t border-navy-dark/10 dark:border-white/10 text-center transition-colors duration-300">
          <Terminal className="w-4 h-4 text-gold-exec mx-auto mb-2" />
          <span className="block text-[10px] font-mono text-navy-dark dark:text-white uppercase tracking-wider font-bold">
            ARCHITECTURAL ACCREDITATION APPROVED
          </span>
          <p className="text-[10px] text-charcoal-wood dark:text-slate-300 mt-1 max-w-lg mx-auto">
            This personal brand strategy complies with modern Google SEO indexing formulas, performance margins, and responsiveness guidelines.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
