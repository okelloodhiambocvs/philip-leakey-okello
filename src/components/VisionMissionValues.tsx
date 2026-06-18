/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Target, Compass, Award, Shield, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function VisionMissionValues() {
  const { t, language } = useLanguage();

  return (
    <section 
      id="vision-mission-values" 
      className="relative py-20 bg-[#FAFBFD] dark:bg-[#07121f] border-t border-b border-navy-dark/10 dark:border-white/10 transition-colors duration-300"
    >
      {/* Structural subtle grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="section-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0F2744" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#section-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center md:text-left">
          {/* Minimalist Editorial Breadcrumb Trail */}
          <div className="mb-6 select-none flex flex-col gap-2 max-w-3xl mx-auto md:mx-0">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-[#718096] dark:text-[#A0AEC0]">
              <span>{t("home")}</span>
              <span className="text-gold-exec font-bold">/</span>
              <span>{t("coordinates")}</span>
              <span className="text-gold-exec font-bold">/</span>
              <span className="text-navy-dark dark:text-white font-semibold">{t("foundations")}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="h-[1px] w-8 bg-gold-exec" />
              <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase">
                {t("strategicFoundations")}
              </span>
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F2744] dark:text-white tracking-tight leading-tight">
            {t("visionMissionTitle")}
          </h2>
          <p className="text-sm font-sans font-light text-[#2D3748] dark:text-slate-300 max-w-2xl mt-4 leading-relaxed">
            {language === "sw"
              ? "Msingi wa kimkakati unaoongoza usimamizi wa kiutendaji wa Philip Leakey Okello, ukihakikisha uaminifu wa taasisi za umma, uwazi kamili, na ubora wa kisheria kote nchini na kanda ya Afrika Mashariki."
              : language === "fr"
              ? "Les piliers stratégiques clés guidant l'autorité administrative de Philip Leakey Okello, garantissant la confiance publique, la transparence nationale et la rigueur légale en Afrique de l'Est."
              : "The core strategic coordinates steering Philip Leakey Okello's executive stewardship, ensuring parastatal trust, sovereign transparency, and legal excellence across East Africa."
            }
          </p>
        </div>

        {/* 3-Column Grid representing the Core Foundations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          
          {/* Card 1: Vision */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-6 md:p-8 bg-white dark:bg-[#0f2744]/40 border border-[#0F2744]/10 dark:border-white/10 hover:border-gold-exec dark:hover:border-gold-exec/85 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            {/* Signature Border Flourish */}
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#0F2744]/20 group-hover:border-gold-exec" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#0F2744]/20 group-hover:border-gold-exec" />

            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#0F2744]/5 dark:border-white/5">
                <div className="p-3 bg-[#FAFBFD] dark:bg-white/5 border border-gold-exec/20 text-gold-exec">
                  <Target className="w-6 h-6" />
                </div>
                <span className="font-mono text-[9px] text-gold-exec font-bold tracking-widest uppercase">
                  Pillar 01
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#0F2744] dark:text-white mb-4">
                Our Vision
              </h3>
              
              <p className="text-sm font-sans font-normal text-[#222222] dark:text-slate-200 leading-relaxed text-justify mb-6">
                To pioneer and champion a highly reliable, frictionless regulatory ecosystem within East Africa, where parastatal institutions leverage digital administration and clear public law to operate at absolute solvency.
              </p>
            </div>

            <div className="bg-[#FAFBFD] dark:bg-white/5 p-4 border border-[#0F2744]/5 dark:border-white/5 mt-auto">
              <span className="block text-[8px] font-mono text-gold-exec uppercase tracking-widest mb-1 font-bold">Strategic Horizon</span>
              <p className="text-xs font-sans text-[#4A5568] dark:text-slate-300 leading-normal">
                Setting parastatal frameworks aligned to dynamic international standards and regional treaty metrics.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Mission */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative p-6 md:p-8 bg-white dark:bg-[#0f2744]/40 border border-[#0F2744]/10 dark:border-white/10 hover:border-gold-exec dark:hover:border-gold-exec/85 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#0F2744]/20 group-hover:border-gold-exec" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#0F2744]/20 group-hover:border-gold-exec" />

            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#0F2744]/5 dark:border-white/5">
                <div className="p-3 bg-[#FAFBFD] dark:bg-white/5 border border-gold-exec/20 text-gold-exec">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="font-mono text-[9px] text-gold-exec font-bold tracking-widest uppercase">
                  Pillar 02
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#0F2744] dark:text-white mb-4">
                Our Mission
              </h3>
              
              <p className="text-sm font-sans font-normal text-[#222222] dark:text-slate-200 leading-relaxed text-justify mb-6">
                To modernize statutory organizations, structure robust fiduciary protection measures under strict Treasury guidelines, and collaborate in drafting forward-looking parastatal acts that secure state and private sector welfare.
              </p>
            </div>

            <div className="bg-[#FAFBFD] dark:bg-white/5 p-4 border border-[#0F2744]/5 dark:border-white/5 mt-auto">
              <span className="block text-[8px] font-mono text-gold-exec uppercase tracking-widest mb-1 font-bold">Action Mandate</span>
              <p className="text-xs font-sans text-[#4A5568] dark:text-slate-300 leading-normal">
                Implementing standardized reporting systems and institutional capacity training for regulatory officers.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-6 md:p-8 bg-white dark:bg-[#0f2744]/40 border border-[#0F2744]/10 dark:border-white/10 hover:border-gold-exec dark:hover:border-gold-exec/85 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#0F2744]/20 group-hover:border-gold-exec" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#0F2744]/20 group-hover:border-gold-exec" />

            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#0F2744]/5 dark:border-white/5">
                <div className="p-3 bg-[#FAFBFD] dark:bg-white/5 border border-gold-exec/20 text-gold-exec">
                  <Award className="w-6 h-6" />
                </div>
                <span className="font-mono text-[9px] text-gold-exec font-bold tracking-widest uppercase">
                  Pillar 03
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#0F2744] dark:text-white mb-4">
                Core Values
              </h3>
              
              <div className="space-y-3 mb-6 text-left">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-gold-exec shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-sans font-bold text-[#0F2744] dark:text-white uppercase tracking-wider">Fiduciary Integrity</h4>
                    <p className="text-[11px] text-[#4A5568] dark:text-slate-300 leading-tight">Strict compliance with anti-corruption acts and absolute budget stewardship.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-exec shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-sans font-bold text-[#0F2744] dark:text-white uppercase tracking-wider">Neutral Constancy</h4>
                    <p className="text-[11px] text-[#4A5568] dark:text-slate-300 leading-tight">Neutral parastatal administration independent of transitionary politics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-gold-exec shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-sans font-bold text-[#0F2744] dark:text-white uppercase tracking-wider">Consensus Governance</h4>
                    <p className="text-[11px] text-[#4A5568] dark:text-slate-300 leading-tight">Co-authoring standards with cross-sector boards and public agencies.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FAFBFD] dark:bg-white/5 p-4 border border-[#0F2744]/5 dark:border-white/5 mt-auto">
              <span className="block text-[8px] font-mono text-gold-exec uppercase tracking-widest mb-1 font-bold">Standard of Oath</span>
              <p className="text-xs font-sans text-[#4A5568] dark:text-slate-300 leading-normal">
                Upholding fiduciary parameters certified by national auditing standards.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
