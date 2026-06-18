/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { boardCompetencies } from "../data";
import { Scale, Eye, TrendingUp, ShieldAlert, CheckCircle, Award } from "lucide-react";

export default function Governance() {
  const compIcons = [
    <Scale className="w-6 h-6 text-gold-exec" key="gov" />,
    <Eye className="w-6 h-6 text-gold-exec" key="aud" />,
    <ShieldAlert className="w-6 h-6 text-gold-exec" key="risk" />,
    <TrendingUp className="w-6 h-6 text-gold-exec" key="strat" />,
  ];

  return (
    <section id="governance" className="relative py-24 md:py-32 bg-white dark:bg-navy-dark text-[#0F2744] dark:text-white transition-colors duration-300 overflow-hidden">
      
      {/* Structural Vector Symmetrical Watermark lines */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="50" x2="100%" y2="50" stroke="#C9A227" strokeWidth="1" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#C9A227" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          {/* Minimalist Editorial Breadcrumb Trail */}
          <div className="mb-6 select-none flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-[#718096] dark:text-[#A0AEC0]">
              <span>Dossier</span>
              <span className="text-gold-exec font-bold">/</span>
              <span>Oversight</span>
              <span className="text-gold-exec font-bold">/</span>
              <span className="text-navy-dark dark:text-white font-semibold">Governance & Board</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-8 bg-gold-exec" />
              <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase">
                BOARD PERFORMANCE & FIDUCIARY STANDARD
              </span>
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Governance & Board Experience
          </h2>
          <p className="text-base font-sans font-light text-[#2D3748] dark:text-slate-gray/70 leading-relaxed">
            As a certified regulatory specialist and fiscal custodian, Philip offers strategic board counsel that balances constitutional compliance with commercial viability, creating resilient operating structures for state-owned and private institutions alike.
          </p>
        </div>

        {/* Boardroom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {boardCompetencies.map((comp, idx) => (
            <div
              key={comp.title}
              className="group relative p-8 md:p-10 bg-[#FAFBFD] dark:bg-[#0F2744] hover:bg-[#F2F5F9] dark:hover:bg-[#133054] border border-[#0F2744]/10 dark:border-gold-exec/20 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Corner accent vectors representing board binder frames */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#0F2744]/15 dark:border-gold-exec/30 group-hover:border-gold-exec transition-colors" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#0F2744]/15 dark:border-gold-exec/30 group-hover:border-gold-exec transition-colors" />

              <div>
                {/* Competency Icon and Upper Title Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-navy-dark/5 dark:border-white/5">
                  <div className="p-3 bg-[#0F2744]/5 dark:bg-white/5 border border-gold-exec/15">
                    {compIcons[idx] || <Scale className="w-6 h-6" />}
                  </div>
                  <span className="font-mono text-[9px] text-gold-exec/80 dark:text-gold-exec/60 tracking-widest font-bold uppercase">
                    OVERSIGHT VERTICAL {idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold mb-4 tracking-tight text-navy-dark dark:text-white group-hover:text-gold-exec transition-colors">
                  {comp.title}
                </h3>
                
                <p className="text-sm font-sans font-light text-[#2D3748] dark:text-slate-gray/70 mb-8 leading-relaxed">
                  {comp.description}
                </p>
              </div>

              {/* Action / Detail Checklist items */}
              <div>
                <span className="block text-[10px] font-mono text-gold-exec uppercase tracking-widest mb-3 font-bold">
                  Core Mandate Deliverables
                </span>
                <ul className="space-y-3">
                  {comp.details.map((detail, detIdx) => (
                    <li key={detIdx} className="flex items-start gap-3.5 text-xs text-[#2D3748] dark:text-slate-gray/80 font-sans font-normal dark:font-light">
                      <CheckCircle className="w-4 h-4 text-gold-exec shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Symmetrical Board Quote block */}
        <div className="mt-20 p-8 md:p-12 border border-[#0F2744]/10 dark:border-gold-exec/30 bg-[#FAFBFD] dark:bg-white/5 text-center max-w-4xl mx-auto transition-colors duration-300">
          <Award className="w-8 h-8 text-gold-exec mx-auto mb-6" />
          <p className="font-serif text-xl italic text-[#2D3748] dark:text-slate-gray/90 max-w-2xl mx-auto leading-relaxed">
            &ldquo;Philip&apos;s financial pedigree coupled with regulatory expertise establishes immediate credibility in committees managing risk or supervising national fiscal transitions.&rdquo;
          </p>
          <span className="block font-sans text-[11px] font-bold text-gold-exec tracking-widest uppercase mt-4">
            - REGULATORY AUDIT & COMPLIANCE COMMITTEE SYNDICATE
          </span>
        </div>

      </div>
    </section>
  );
}
