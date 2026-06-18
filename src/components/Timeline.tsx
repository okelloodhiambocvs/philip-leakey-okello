/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { careerTimeline } from "../data";
import { ArrowRight, Landmark, BadgeCheck, Network, TrendingUp } from "lucide-react";
import { useLanguage, Translate } from "../context/LanguageContext";

export default function Timeline() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const { language } = useLanguage();

  // Helper icons to map roles to specific graphical highlights
  const roleIcons = [
    <Landmark className="w-5 h-5 text-gold-exec" key="ceo" />,
    <BadgeCheck className="w-5 h-5 text-gold-exec" key="act" />,
    <Network className="w-5 h-5 text-gold-exec" key="dir" />,
    <TrendingUp className="w-5 h-5 text-gold-exec" key="fin" />,
  ];

  return (
    <section id="timeline" className="relative py-24 md:py-32 bg-slate-gray dark:bg-[#07121f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-8 bg-gold-exec" />
              <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase">
                <Translate>EXECUTIVE IMPACT RECORD</Translate>
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark dark:text-white tracking-tight">
              <Translate>A History of Systemic Impact</Translate>
            </h2>
          </div>
          <p className="text-sm font-sans font-normal text-[#222222] dark:text-slate-200 max-w-md mt-4 md:mt-0 leading-relaxed">
            <Translate>Leading significant operational expansions, legislative transformations, and digital modernization routines within East African state portfolios.</Translate>
          </p>
        </div>

        {/* Dynamic Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Role Selector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-[10px] font-mono tracking-widest text-navy-dark dark:text-white/80 uppercase mb-2 font-bold">
              <Translate>Select Tenure Period</Translate>
            </span>
            
            {careerTimeline.map((role, idx) => {
              const isActive = activeRoleIndex === idx;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRoleIndex(idx)}
                  className={`w-full text-left p-6 flex items-start gap-4 transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? "bg-navy-dark text-white border-l-4 border-gold-exec shadow-md"
                      : "bg-white dark:bg-[#0f2744]/40 text-navy-dark dark:text-white hover:bg-white/85 dark:hover:bg-[#0f2744]/60 border-l-4 border-transparent border-b border-navy-dark/10 dark:border-white/10"
                  }`}
                >
                  <div className={`p-2 shrink-0 ${isActive ? "bg-white/10" : "bg-slate-gray dark:bg-white/5"}`}>
                    {roleIcons[idx] || <Landmark className="w-5 h-5 animate-pulse" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-serif text-lg font-bold">
                        <Translate>{role.role}</Translate>
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-gold-exec" />
                      )}
                    </div>
                    <p className={`text-xs font-sans font-bold uppercase tracking-wider ${isActive ? "text-gold-exec" : "text-navy-dark/90 dark:text-white/80"}`}>
                      <Translate>{role.organization}</Translate>
                    </p>
                    <p className={`text-[11px] font-mono mt-2 ${isActive ? "text-white/65" : "text-[#222222] dark:text-slate-200"}`}>
                      <Translate>{role.period}</Translate>
                    </p>
                  </div>
                  
                  {/* Subtle right arrow hover effect */}
                  {!isActive && (
                    <ArrowRight className="w-4 h-4 text-navy-dark/40 dark:text-white/40 group-hover:translate-x-1 group-hover:text-gold-exec transition-all absolute right-4 top-1/2 -translate-y-1/2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Impact Card (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0f2744]/40 p-8 md:p-12 border border-navy-dark/10 dark:border-white/10 relative min-h-[460px] flex flex-col justify-between shadow-sm transition-colors duration-300">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoleIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Scope metadata */}
                  <div className="flex justify-between items-center pb-6 border-b border-navy-dark/15 dark:border-white/15 mb-8">
                    <div>
                      <span className="block text-[10px] font-mono text-gold-exec uppercase tracking-widest mb-1 font-bold">
                        <Translate>ORGANIZATIONAL RESPONSIBILITY</Translate>
                      </span>
                      <span className="block font-serif text-2xl font-bold text-navy-dark dark:text-white">
                        <Translate>{careerTimeline[activeRoleIndex].organization}</Translate>
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold bg-[#F5F7FA] dark:bg-white/10 text-navy-dark dark:text-white py-1.5 px-3 border border-navy-dark/15 dark:border-white/15 whitespace-nowrap">
                      <Translate>{careerTimeline[activeRoleIndex].period}</Translate>
                    </span>
                  </div>

                  {/* Summary Narrative */}
                  <div className="mb-8">
                    <p className="text-sm font-sans font-normal text-[#222222] dark:text-slate-100 leading-relaxed italic">
                      <Translate>{careerTimeline[activeRoleIndex].description}</Translate>
                    </p>
                  </div>

                  {/* Core Strategic Impacts */}
                  <div>
                    <h4 className="text-xs font-sans tracking-[0.2em] font-bold text-navy-dark dark:text-white uppercase mb-4">
                      <Translate>Primary Institutional Accomplishments</Translate>
                    </h4>
                    <ul className="space-y-4">
                      {careerTimeline[activeRoleIndex].keyImpacts.map((impact, impIdx) => (
                        <motion.li
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: impIdx * 0.1 }}
                          key={impIdx}
                          className="flex items-start gap-4 text-xs font-sans font-normal text-[#222222] dark:text-slate-300"
                        >
                          <div className="w-5 h-5 bg-[#FAF0D7] dark:bg-[#FAF0D7]/10 border border-gold-exec/20 text-gold-exec text-[10px] font-mono font-bold shrink-0 mt-0.5 flex items-center justify-center">
                            {impIdx + 1}
                          </div>
                          <span className="leading-relaxed text-justify">
                            <Translate>{impact}</Translate>
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footnote stating structural authenticity */}
                <div className="mt-12 pt-6 border-t border-navy-dark/10 dark:border-white/10 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-exec" />
                  <span className="text-[10px] font-mono text-navy-dark/80 dark:text-white/80 uppercase tracking-widest font-semibold">
                    <Translate>Formal accountability records verified to board standards</Translate>
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
