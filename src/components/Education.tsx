/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { educatorMemberships } from "../data";
import { GraduationCap, Award, ShieldCheck, ChevronRight } from "lucide-react";

export default function Education() {
  return (
    <section id="credentials" className="py-24 md:py-32 bg-[#F5F7FA] dark:bg-[#07121f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-gold-exec" />
            <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase">
              CREDENTIALS & AFFILIATIONS
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark dark:text-white tracking-tight">
            Qualifications & Memberships
          </h2>
        </div>

        {/* Binary Column System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Academic Education (6 cols) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 pb-4 border-b border-navy-dark/15 dark:border-white/10 mb-8">
              <GraduationCap className="w-5 h-5 text-gold-exec" />
              <h3 className="text-xs font-sans tracking-[0.2em] font-bold text-navy-dark dark:text-white uppercase">
                Academic Background
              </h3>
            </div>

            <div className="space-y-6">
              {educatorMemberships.education.map((edu, idx) => (
                <div key={idx} className="bg-white dark:bg-[#0f2744]/40 p-6 md:p-8 border-l-2 border-gold-exec border-r border-t border-b border-navy-dark/10 dark:border-white/10 shadow-sm group hover:scale-[1.01] transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-medium text-navy-dark/80 dark:text-white/80">
                      {edu.period}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest bg-slate-gray dark:bg-[#07121f] px-2 py-0.5 border border-navy-dark/10 dark:border-white/10 text-navy-dark/80 dark:text-white/80 font-bold uppercase">
                      VERIFIED DIRECTIVE
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-navy-dark dark:text-white mb-2 leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-sans font-bold text-gold-exec">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Professional Memberships & Charters (6 cols) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 pb-4 border-b border-navy-dark/15 dark:border-white/10 mb-8">
              <Award className="w-5 h-5 text-gold-exec" />
              <h3 className="text-xs font-sans tracking-[0.2em] font-bold text-navy-dark dark:text-white uppercase">
                Professional Memberships
              </h3>
            </div>

            <div className="space-y-4">
              {educatorMemberships.memberships.map((mem, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#0f2744]/40 p-5 md:p-6 border border-navy-dark/10 dark:border-white/10 shadow-sm flex items-start gap-4 hover:border-gold-exec dark:hover:border-gold-exec transition-all"
                >
                  <div className="p-2 bg-slate-gray dark:bg-[#07121f] border border-gold-exec/20 dark:border-gold-exec/40 text-gold-exec">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-base font-bold text-navy-dark dark:text-white">
                      {mem.title}
                    </h4>
                    <p className="text-xs font-sans font-normal text-[#222222] dark:text-slate-200 leading-normal">
                      {mem.organization}
                    </p>
                    {"idNumber" in mem && (
                      <span className="inline-block mt-2 text-[10px] font-mono bg-amber-50 dark:bg-amber-950/20 text-gold-exec px-2 py-0.5 border border-gold-exec/20">
                        {mem.idNumber}
                      </span>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-navy-dark/40 dark:text-white/40 self-center hidden sm:block" />
                </div>
              ))}
            </div>

            {/* Fiduciary compliance guarantee footnote */}
            <div className="mt-8 p-6 bg-navy-dark dark:bg-[#0b1b2b] text-white shadow-md relative overflow-hidden transition-colors duration-300">
              <div className="relative z-10">
                <span className="block text-[10px] font-mono text-gold-exec tracking-widest uppercase mb-1 font-bold">
                  FIDUCIARY STANDARDS INTEGRITY
                </span>
                <p className="text-xs font-sans font-light leading-relaxed text-slate-gray/90">
                  Philip Leakey Okello maintains an active, fully paid status with the Institute of Certified Public Accountants of Kenya (ICPAK). He is bound by and executes all duties according to the official ICPAK corporate governance guidelines.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
