/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { policyImpacts } from "../data";
import { FileText, Users, Share2, Shuffle, Clock } from "lucide-react";

export default function PolicyImpact() {
  const policyIcons = [
    <FileText className="w-8 h-8 text-gold-exec" key="file" />,
    <Users className="w-8 h-8 text-gold-exec" key="users" />,
    <Share2 className="w-8 h-8 text-gold-exec" key="share" />,
    <Shuffle className="w-8 h-8 text-gold-exec" key="shuffle" />,
  ];

  return (
    <section id="policy" className="py-24 md:py-32 bg-white dark:bg-[#07121f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-6">
            {/* Minimalist Editorial Breadcrumb Trail */}
            <div className="mb-6 select-none flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-[#718096] dark:text-[#A0AEC0]">
                <span>Dossier</span>
                <span className="text-gold-exec font-bold">/</span>
                <span>Frameworks</span>
                <span className="text-gold-exec font-bold">/</span>
                <span className="text-navy-dark dark:text-white font-semibold">National Blueprint</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-[1px] w-8 bg-gold-exec" />
                  <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase">
                    REGULATORY REFORMS
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-gold-exec dark:text-gold-exec/90 uppercase tracking-wider bg-gold-exec/5 dark:bg-gold-exec/10 px-2.5 py-0.5 border border-gold-exec/20">
                  <Clock className="w-3 h-3 text-gold-exec" />
                  <span>4 Min Read</span>
                </div>
              </div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark dark:text-white tracking-tight">
              Policy & Regulatory Innovation
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-6">
            <p className="text-sm font-sans font-normal text-[#222222] dark:text-slate-200 leading-relaxed">
              Oversight is secondary to policy layout. Over his career, Philip has advised and shaped complex regulatory mandates that govern hundreds of corporate companies, streamlining regulatory frameworks, minimum wage standards, and national registry interfaces.
            </p>
          </div>
        </div>

        {/* Dynamic Editorial Infographics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {policyImpacts.map((dimension, idx) => (
            <div
              key={dimension.title}
              className="relative p-8 bg-slate-gray dark:bg-[#0f2744]/40 border border-navy-dark/10 dark:border-white/10 flex flex-col justify-between h-80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Upper Icon Frame */}
                <div className="mb-6 flex justify-between items-center">
                  <div className="p-2 border border-navy-dark/10 dark:border-white/10 bg-white dark:bg-[#07121f]">
                    {policyIcons[idx] || <FileText className="w-8 h-8" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-navy-dark dark:text-white">
                    MANDATE {idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-navy-dark dark:text-white mb-3 tracking-tight">
                  {dimension.title}
                </h3>
                
                <p className="text-xs font-sans font-normal text-[#0F2744] dark:text-slate-200 leading-relaxed text-justify">
                  {dimension.description}
                </p>
              </div>

              {/* High-End Symmetrical Metric Output inside each card */}
              <div className="pt-6 border-t border-navy-dark/10 dark:border-white/10 flex items-baseline justify-between">
                <span className="text-3xl font-serif font-black text-navy-dark dark:text-white tracking-tight">
                  {dimension.stat}
                </span>
                <span className="text-[10px] font-mono tracking-wider font-bold text-gold-exec uppercase text-right max-w-[140px]">
                  {dimension.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparative Public-Sector Regulatory Timeline Banner */}
        <div className="mt-16 bg-navy-dark dark:bg-[#0b1b2b] text-white p-8 md:p-12 border border-gold-exec/20 dark:border-gold-exec/30 transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4">
              <span className="block text-[10px] font-mono text-gold-exec tracking-widest uppercase mb-1 font-bold">
                REGULATORY COOPERATION
              </span>
              <h4 className="font-serif text-2xl font-bold leading-tight">
                Stakeholder & Public Sector Consensus
              </h4>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans">
              
              <div className="p-4 border-l-2 border-gold-exec/40 bg-white/5">
                <h5 className="text-xs font-bold uppercase tracking-wider mb-1 text-gold-exec">Union Advocacy</h5>
                <p className="text-[11px] text-slate-gray/80 leading-normal">Coordinating with guard associations and private operators on security wage safety.</p>
              </div>

              <div className="p-4 border-l-2 border-gold-exec/40 bg-white/5">
                <h5 className="text-xs font-bold uppercase tracking-wider mb-1 text-gold-exec">Cabinet Liaisons</h5>
                <p className="text-[11px] text-slate-gray/80 leading-normal">Informing government ministers & security councils on regulatory alignments.</p>
              </div>

              <div className="p-4 border-l-2 border-gold-exec/40 bg-white/5">
                <h5 className="text-xs font-bold uppercase tracking-wider mb-1 text-gold-exec">Audit Committees</h5>
                <p className="text-[11px] text-slate-gray/80 leading-normal">Defending policy implementation costs, structures and revenue yields in state audits.</p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
