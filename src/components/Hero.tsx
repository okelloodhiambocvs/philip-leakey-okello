/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, Award, Shield, FileText, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onOpenCv: () => void;
  onNavigate?: (page: string) => void;
}

export default function Hero({ onOpenCv, onNavigate }: HeroProps) {
  const { t, language } = useLanguage();

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] bg-white dark:bg-[#07121f] text-[#0F2744] dark:text-white pt-28 pb-16 flex items-center overflow-hidden transition-colors duration-300"
    >
      {/* 50% Visible Executive Portrait Background - Sharp & Clear */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50 dark:opacity-50 pointer-events-none transition-all duration-700"
        style={{ backgroundImage: `url('/src/assets/images/philip_executive_desk_1790608609248.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/40 dark:from-[#07121f]/90 dark:via-[#07121f]/70 dark:to-[#07121f]/40 pointer-events-none" />

      {/* Decorative Traditional Symmetrical Vector Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A227" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Symmetrical Left Monogram Watermark behind text */}
      <div className="absolute -left-24 bottom-12 select-none pointer-events-none opacity-[0.015] dark:opacity-[0.02]">
        <span className="font-serif text-[450px] leading-none font-bold text-navy-dark dark:text-white tracking-widest">
          PLO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Slogan and Text Columns - take up 7 columns out of 12 */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Elegant upper subtitle label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-[1px] w-8 bg-gold-exec" />
              <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase">
                {t("dossierLabel")}
              </span>
            </motion.div>

            {/* Main Title heading  */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-navy-dark dark:text-white mb-6 leading-[1.1]"
            >
              {t("heroTitle")}
            </motion.h1>

            {/* Subtitle / Roles */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl font-serif text-gold-exec tracking-wide font-medium mb-6 leading-relaxed"
            >
              {language === "sw" 
                ? "Afisa Mtendaji Mkuu | Mtaalamu wa Utawala | Sera & Kiongozi wa Udhibiti"
                : language === "fr"
                ? "Directeur Général | Expert en Gouvernance | Leader des Politiques & Réglementations"
                : "Chief Executive Officer | Governance Expert | Policy & Regulatory Leader"
              }
            </motion.p>

            {/* Positioning Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg font-sans font-light text-[#2D3748] dark:text-slate-gray/80 max-w-xl mb-10 leading-relaxed border-l-2 border-gold-exec/30 pl-5"
            >
              {t("heroDesc")}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 md:gap-6 mb-12"
            >
              <button
                onClick={() => onNavigate ? onNavigate("biography") : (window.location.hash = "biography")}
                className="bg-gold-exec hover:bg-[#B59120] hover:scale-[1.02] active:scale-[0.98] text-white dark:text-navy-dark text-xs font-sans tracking-widest font-semibold uppercase px-8 py-4 transition-all duration-300 cursor-pointer shadow-md"
              >
                {t("viewDossier")}
              </button>
              
              <button
                onClick={onOpenCv}
                className="group flex items-center gap-2 border border-navy-dark/20 dark:border-white/20 hover:border-gold-exec bg-navy-dark/5 hover:bg-navy-dark/10 dark:bg-white/5 dark:hover:bg-white/10 text-navy-dark dark:text-white text-xs font-sans tracking-widest font-semibold uppercase px-8 py-4 transition-all duration-300 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-gold-exec" />
                {t("viewCv")}
              </button>

              <button
                onClick={() => onNavigate ? onNavigate("contact") : (window.location.hash = "contact")}
                className="text-xs font-sans text-[#2D3748]/70 dark:text-slate-gray/70 hover:text-navy-dark dark:hover:text-white uppercase tracking-widest underline decoration-gold-exec underline-offset-8 transition-colors py-2 cursor-pointer"
              >
                Connect Directly
              </button>
            </motion.div>

            {/* Trust Badges - institutional parameters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-navy-dark/10 dark:border-white/10 w-full"
            >
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-gold-exec shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-sans font-bold tracking-wider text-navy-dark dark:text-white uppercase">State Oversight</h4>
                  <p className="text-[11px] font-sans text-charcoal-wood/65 dark:text-slate-gray/50">Statutory Regulatory Enforcement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-gold-exec shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-sans font-bold tracking-wider text-navy-dark dark:text-white uppercase">Board Leadership</h4>
                  <p className="text-[11px] font-sans text-charcoal-wood/65 dark:text-slate-gray/50">Certified Accountant (ICPAK)</p>
                </div>
              </div>
              <div className="hidden lg:flex items-start gap-3">
                <div className="w-5 h-5 rounded-none border border-gold-exec/40 flex items-center justify-center font-mono text-[9px] text-gold-exec shrink-0 font-bold">RE</div>
                <div>
                  <h4 className="text-xs font-sans font-bold tracking-wider text-navy-dark dark:text-white uppercase">Policy Reform</h4>
                  <p className="text-[11px] font-sans text-charcoal-wood/65 dark:text-slate-gray/50">National Legislative Strategist</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Replaced Mandate Table with Official Executive Portrait */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[440px] group"
            >
              {/* Outer decorative borders matching executive dossier frame */}
              <div className="absolute -inset-2.5 border border-gold-exec/30 dark:border-gold-exec/40 pointer-events-none z-20" />
              <div className="absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-gold-exec pointer-events-none z-20" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-gold-exec pointer-events-none z-20" />

              {/* Main Photo Card Container */}
              <div className="relative aspect-[3/4] bg-[#0c1a2c] overflow-hidden border border-navy-dark/20 dark:border-gold-exec/20 shadow-2xl">
                <img
                  src="/src/assets/images/philip_executive_desk_1790608609248.jpg"
                  alt="Philip Leakey Okello, Chief Executive Officer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/30 to-transparent" />

                {/* Top Badge: Office of the CEO */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="bg-navy-dark/90 dark:bg-[#07121f]/90 backdrop-blur-sm border border-gold-exec/30 px-3 py-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-exec animate-pulse" />
                    <span className="text-[9px] font-mono tracking-[0.2em] text-white uppercase font-bold">
                      OFFICE OF THE CEO
                    </span>
                  </div>
                  <div className="bg-navy-dark/90 dark:bg-[#07121f]/90 backdrop-blur-sm border border-white/10 px-2.5 py-1">
                    <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" /> ACTIVE
                    </span>
                  </div>
                </div>

                {/* Brass Executive Nameplate Overlay at Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-10 bg-gradient-to-t from-[#091524] via-[#091524]/90 to-transparent">
                  <div className="border-t border-gold-exec/40 pt-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                          Philip Leakey Okello
                        </h3>
                        <p className="text-[11px] font-mono text-gold-exec uppercase tracking-widest mt-0.5 font-semibold">
                          Chief Executive Officer • Governance Expert
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-gold-exec/10 border border-gold-exec/40 flex items-center justify-center shrink-0">
                        <span className="font-signature text-gold-exec text-sm font-bold">PLO</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-3 pt-2 border-t border-white/10 text-[9px] font-mono text-slate-300">
                      <span>ICPAK Reg: 7183</span>
                      <span>•</span>
                      <span>State Parastatal Oversight</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Inline Section Anchoring Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <button
          onClick={() => onNavigate ? onNavigate("biography") : (window.location.hash = "biography")}
          className="flex flex-col items-center gap-1.5 text-[10px] font-sans tracking-[0.25em] text-[#2D3748]/60 dark:text-slate-gray/40 hover:text-gold-exec transition-colors uppercase cursor-pointer"
        >
          <span>Explore Dossier</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-gold-exec" />
        </button>
      </div>
    </section>
  );
}
