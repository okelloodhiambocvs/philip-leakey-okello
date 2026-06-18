/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { biographyNarrative } from "../data";
import { Award, Shield, FileSpreadsheet, Group, Clock } from "lucide-react";
import { useLanguage, Translate } from "../context/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  return (
    <section id="biography" className="relative py-24 md:py-32 bg-white dark:bg-[#07121f] overflow-hidden transition-colors duration-300">
      {/* Decorative background watermark */}
      <div className="absolute right-0 top-1/4 select-none pointer-events-none opacity-[0.015] dark:opacity-[0.025]">
        <span className="font-serif text-[380px] leading-none font-bold text-navy-dark dark:text-white tracking-widest">
          GOVERN
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Heading, Subtitle, Key Values */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="sticky top-28">
              {/* Minimalist Editorial Breadcrumb Trail */}
              <div className="mb-6 select-none flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-[#718096] dark:text-[#A0AEC0]">
                  <span>{t("home")}</span>
                  <span className="text-gold-exec font-bold">/</span>
                  <span>{t("dossier")}</span>
                  <span className="text-gold-exec font-bold">/</span>
                  <span className="text-navy-dark dark:text-white font-semibold">{t("leadershipProfile")}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-[1px] w-8 bg-gold-exec" />
                    <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase">
                      {t("biographyNarrative")}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-gold-exec dark:text-gold-exec/90 uppercase tracking-wider bg-gold-exec/5 dark:bg-gold-exec/10 px-2.5 py-0.5 border border-gold-exec/20">
                    <Clock className="w-3 h-3 text-gold-exec" />
                    <span>5 {t("minRead")}</span>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark dark:text-white leading-tight tracking-tight mb-8">
                {language === "sw"
                  ? "Muundo wa Imani ya Umma"
                  : language === "fr"
                  ? "L'Anatomie de la Confiance Publique"
                  : "The Anatomy of Public Trust"
                }
              </h2>

              <p className="text-base font-serif italic text-[#222222] dark:text-slate-200 mb-10 leading-relaxed border-l-2 border-gold-exec pl-6">
                &ldquo;{language === "sw"
                  ? "Utawala wa kweli si tu kulazimisha sheria, bali ni kuweka mazingira ambayo uadilifu unakuwa msingi wa kawaida, na huduma za umma zinatekelezwa kwa ubora vya kutabirika."
                  : language === "fr"
                  ? "La véritable gouvernance ne consiste pas simplement à appliquer des règles, mais à créer un environnement où l'intégrité devient un réflexe naturel et où les services publics fonctionnent avec une excellence prévisible."
                  : biographyNarrative.legacyQuote
                }&rdquo;
              </p>

              {/* Little institutional value items */}
              <div className="flex flex-col gap-6 pt-4 border-t border-navy-dark/10 dark:border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-gray dark:bg-white/5 flex items-center justify-center border border-navy-dark/5 dark:border-white/10">
                    <Shield className="w-5 h-5 text-navy-dark dark:text-gold-exec" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold text-navy-dark dark:text-white uppercase tracking-wider">
                      <Translate>Regulatory Independence</Translate>
                    </h4>
                    <p className="text-xs text-[#222222] dark:text-slate-200 leading-normal">
                      <Translate>Upholding legal codes with absolute administrative neutrality.</Translate>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-gray dark:bg-white/5 flex items-center justify-center border border-navy-dark/5 dark:border-white/10">
                    <FileSpreadsheet className="w-5 h-5 text-navy-dark dark:text-gold-exec" />
                  </div>
                  <div>
                    <h4 className="text-xs font-sans font-bold text-navy-dark dark:text-white uppercase tracking-wider">
                      <Translate>Fiduciary Transparency</Translate>
                    </h4>
                    <p className="text-xs text-[#222222] dark:text-slate-200 leading-normal">
                      <Translate>Decades of clean audit sheets under Parliamentary oversight.</Translate>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7">
            <div className="prose max-w-none text-[#2D3748] dark:text-slate-200 space-y-8 font-sans font-light text-base leading-relaxed">
              <p className="text-lg font-serif font-normal text-navy-dark dark:text-slate-100 leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-gold-exec first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                <Translate>{biographyNarrative.intro}</Translate>
              </p>

              <div className="h-[1px] w-full bg-navy-dark/5 dark:bg-white/10 my-8" />

              <h3 className="text-xs font-sans tracking-[0.2em] font-bold text-navy-dark dark:text-white uppercase mb-4">
                <Translate>The Career Path to Sovereign Regulation</Translate>
              </h3>

              {biographyNarrative.journey.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l border-l-navy-dark/10 dark:border-l-white/10 pb-8 last:pb-0">
                  {/* Symmetrical step circle */}
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white dark:bg-[#07121f] border border-gold-exec rounded-none flex items-center justify-center">
                    <div className="w-1 h-1 bg-gold-exec" />
                  </div>
                  
                  <span className="block text-[10px] font-mono tracking-wider text-gold-exec uppercase font-bold mb-1">
                    <Translate>{item.phase}</Translate>
                  </span>
                  
                  <h4 className="text-lg font-serif font-bold text-navy-dark dark:text-white mb-3">
                    <Translate>{item.title}</Translate>
                  </h4>
                  
                  <p className="text-sm font-sans font-normal text-[#222222] dark:text-slate-300 leading-relaxed mb-4 text-justify font-sans">
                    <Translate>{item.description}</Translate>
                  </p>
                </div>
              ))}

              <div className="p-6 bg-slate-gray dark:bg-white/5 border border-navy-dark/5 dark:border-white/10 mt-8">
                <p className="text-xs font-mono text-navy-dark dark:text-white uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold-exec" /> <Translate>Governance Advisory Standard</Translate>
                </p>
                <p className="text-xs font-sans text-[#222222] dark:text-slate-300 leading-relaxed">
                  <Translate>Philip advises numerous state ministries, public policy think tanks, and commercial corporate boards on matters concerning regulatory compliance architectures, fraud detours, and operational restructuring.</Translate>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
