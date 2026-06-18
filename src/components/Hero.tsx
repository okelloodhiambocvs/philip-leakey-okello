/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, Mail, Phone, Award, Shield, FileText, CheckCircle2, Fingerprint, Target, Compass } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onOpenCv: () => void;
}

export default function Hero({ onOpenCv }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'values'>('vision');
  const { t, language } = useLanguage();

  return (
    <section
      id="hero-section"
      className="relative min-h-screen bg-white dark:bg-navy-dark text-[#0F2744] dark:text-white pt-28 pb-16 flex items-center overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Traditional Symmetrical Vector Grid Background (Executive feel, not futuristic neon) */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
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
              <a
                href="#biography"
                className="bg-gold-exec hover:bg-[#B59120] hover:scale-[1.02] active:scale-[0.98] text-white dark:text-navy-dark text-xs font-sans tracking-widest font-semibold uppercase px-8 py-4 transition-all duration-300"
              >
                {t("viewDossier")}
              </a>
              
              <button
                onClick={onOpenCv}
                className="group flex items-center gap-2 border border-navy-dark/20 dark:border-white/20 hover:border-gold-exec bg-navy-dark/5 hover:bg-navy-dark/10 dark:bg-white/5 dark:hover:bg-white/10 text-navy-dark dark:text-white text-xs font-sans tracking-widest font-semibold uppercase px-8 py-4 transition-all duration-300 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-gold-exec" />
                {t("viewCv")}
              </button>

              <a
                href="#contact"
                className="text-xs font-sans text-[#2D3748]/60 dark:text-slate-gray/60 hover:text-navy-dark dark:hover:text-white uppercase tracking-widest underline decoration-gold-exec underline-offset-8 transition-colors py-2"
              >
                Connect Directly
              </a>
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

          {/* Executive Crest, Vision, Mission, and Core Values Frame */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] aspect-[4/5] bg-[#FAFBFD] dark:bg-[#0d1f33] border border-[#0F2744]/10 dark:border-gold-exec/25 p-5 md:p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-colors duration-300"
            >
              {/* Outer decorative borders matching professional cert layout */}
              <div className="absolute inset-3 border border-[#0F2744]/5 dark:border-gold-exec/15 pointer-events-none" />
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gold-exec pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gold-exec pointer-events-none" />
              
              {/* Elegant Guilloche/Grid Vector Accents */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.06)_0%,transparent_75%)] pointer-events-none" />

              {/* Top Compact Monogram and Section Title */}
              <div className="relative flex items-center justify-between border-b border-[#0F2744]/10 dark:border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  {/* Miniature Monogram Crest */}
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-[#12243a] border border-[#0F2744]/10 dark:border-gold-exec/40 flex items-center justify-center shadow-md select-none">
                    <span className="font-signature text-[#0F2744] dark:text-gold-exec text-sm font-bold">PLO</span>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-sans tracking-[0.25em] font-bold text-navy-dark dark:text-white uppercase">EXECUTIVE DOCTRINE</h3>
                    <p className="text-[8px] font-mono text-charcoal-wood/65 dark:text-slate-gray/50 uppercase tracking-widest">Office of the CEO</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 text-[8px] font-mono bg-emerald-500/15 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase font-bold tracking-widest rounded-none">
                    Verified
                  </span>
                </div>
              </div>

              {/* Dynamic Interactive Tabs */}
              <div className="relative flex flex-col flex-1 pt-4 pb-2 z-10">
                {/* Horizontal Tab Buttons */}
                <div className="flex border-b border-[#0F2744]/5 dark:border-white/5 mb-4">
                  <button
                    onClick={() => setActiveTab('vision')}
                    className={`flex-1 pb-2.5 text-[9px] md:text-[10px] font-mono tracking-widest uppercase transition-colors relative cursor-pointer ${
                      activeTab === 'vision' ? 'text-gold-exec font-bold' : 'text-[#2D3748]/50 dark:text-slate-gray/50 hover:text-[#0F2744] dark:hover:text-white'
                    }`}
                  >
                    Vision
                    {activeTab === 'vision' && (
                      <motion.div layoutId="heroActiveTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-exec" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('mission')}
                    className={`flex-1 pb-2.5 text-[9px] md:text-[10px] font-mono tracking-widest uppercase transition-colors relative cursor-pointer ${
                      activeTab === 'mission' ? 'text-gold-exec font-bold' : 'text-[#2D3748]/50 dark:text-slate-gray/50 hover:text-[#0F2744] dark:hover:text-white'
                    }`}
                  >
                    Mission
                    {activeTab === 'mission' && (
                      <motion.div layoutId="heroActiveTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-exec" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('values')}
                    className={`flex-1 pb-2.5 text-[9px] md:text-[10px] font-mono tracking-widest uppercase transition-colors relative cursor-pointer ${
                      activeTab === 'values' ? 'text-gold-exec font-bold' : 'text-[#2D3748]/50 dark:text-slate-gray/50 hover:text-[#0F2744] dark:hover:text-white'
                    }`}
                  >
                    Values
                    {activeTab === 'values' && (
                      <motion.div layoutId="heroActiveTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-exec" />
                    )}
                  </button>
                </div>

                {/* Tab Contents with smooth fade and slide transition */}
                <div className="flex-1 flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {activeTab === 'vision' && (
                      <motion.div
                        key="vision"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col flex-1 justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Target className="w-4 h-4 text-gold-exec shrink-0" />
                            <span className="text-xs font-serif font-bold text-[#0F2744] dark:text-white uppercase tracking-wider">Mandate & Vision Focus</span>
                          </div>
                          <p className="text-[12px] font-sans font-light text-[#2D3748] dark:text-slate-gray/80 leading-relaxed text-justify mb-4 font-normal dark:font-light">
                            To lead and sustain a world-class regulatory ecosystem in East Africa that integrates integrity, digital optimization, and absolute parastatal trust.
                          </p>
                          <div className="bg-white dark:bg-[#0b1b2b] border border-[#0F2744]/5 dark:border-white/5 p-3 rounded-none shadow-sm transition-colors duration-300">
                            <span className="block text-[8px] font-mono text-gold-exec uppercase tracking-widest mb-1 font-bold">STRATEGIC GOAL 2030</span>
                            <p className="text-[10px] font-sans text-charcoal-wood/70 dark:text-slate-gray/50 leading-normal">
                              Establish an automated, paperless, and frictionless compliance registration pipeline for all private sector parastatal frameworks.
                            </p>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-[#0b1b2b]/90 border border-gold-exec/20 p-3 mt-4">
                          <div className="flex justify-between items-center text-[10px]">
                            <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold tracking-widest uppercase animate-pulse">● STRATEGIC MATCH</span>
                            <span className="font-sans text-charcoal-wood/65 dark:text-slate-gray/60 uppercase">Horizon 2030 Roadmap</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'mission' && (
                      <motion.div
                        key="mission"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col flex-1 justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Compass className="w-4 h-4 text-gold-exec shrink-0" />
                            <span className="text-xs font-serif font-bold text-[#0F2744] dark:text-white uppercase tracking-wider">Strategic Mission Statement</span>
                          </div>
                          <p className="text-[12px] font-sans font-light text-[#2D3748] dark:text-slate-gray/80 leading-relaxed text-justify mb-3 font-normal dark:font-light">
                            To deliver premium public sector parastatal modernization, secure fiduciary structures under Treasury guidelines, and co-author progressive legislations supporting national stability.
                          </p>
                          <div className="space-y-2 mt-4">
                            <div className="flex items-start gap-2 text-[10px] font-sans text-charcoal-wood/80 dark:text-slate-gray/70 leading-normal">
                              <span className="text-gold-exec font-bold select-none mt-0.5">•</span>
                              <span>Pioneering digital vetting systems and standardized operating curricula.</span>
                            </div>
                            <div className="flex items-start gap-2 text-[10px] font-sans text-charcoal-wood/80 dark:text-slate-gray/70 leading-normal">
                              <span className="text-gold-exec font-bold select-none mt-0.5">•</span>
                              <span>Modernizing tariff indices to elevate revenue parastatal margins to self-solvency.</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-[#0b1b2b]/90 border border-gold-exec/20 p-3 mt-4">
                          <div className="flex justify-between items-center text-[10px]">
                            <span className="font-mono text-gold-exec font-bold tracking-widest uppercase">REGULATORY COMPLIANCE</span>
                            <span className="font-mono text-navy-dark dark:text-white tracking-widest font-bold">PLO-ACTIVE-2026</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'values' && (
                      <motion.div
                        key="values"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col flex-1 justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Award className="w-4 h-4 text-gold-exec shrink-0" />
                            <span className="text-xs font-serif font-bold text-[#0F2744] dark:text-white uppercase tracking-wider">Executive Core Pillars</span>
                          </div>
                          
                          <div className="grid grid-cols-1 gap-2">
                            <div className="bg-white dark:bg-[#0b1b2b] border border-[#0F2744]/10 dark:border-white/5 p-2 flex items-start gap-2.5 shadow-sm">
                              <Shield className="w-3.5 h-3.5 text-gold-exec shrink-0 mt-0.5" />
                              <div>
                                <h5 className="text-[10px] font-sans font-bold text-navy-dark dark:text-white uppercase tracking-wider">Fiduciary Integrity</h5>
                                <p className="text-[9px] text-charcoal-wood/70 dark:text-slate-gray/50 leading-tight">Uncompromising budgetary discipline and peerless accountability under public law.</p>
                              </div>
                            </div>
                            
                            <div className="bg-white dark:bg-[#0b1b2b] border border-[#0F2744]/10 dark:border-white/5 p-2 flex items-start gap-2.5 shadow-sm">
                              <div className="w-3.5 h-3.5 rounded-none border border-gold-exec/40 flex items-center justify-center font-mono text-[8px] text-gold-exec shrink-0 font-bold mt-0.5">RC</div>
                              <div>
                                <h5 className="text-[10px] font-sans font-bold text-navy-dark dark:text-white uppercase tracking-wider">Regulatory Constancy</h5>
                                <p className="text-[9px] text-charcoal-wood/70 dark:text-slate-gray/50 leading-tight">Neutral parastatal administration independent of transitionary political dynamics.</p>
                              </div>
                            </div>

                            <div className="bg-white dark:bg-[#0b1b2b] border border-[#0F2744]/10 dark:border-white/5 p-2 flex items-start gap-2.5 shadow-sm">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <div>
                                <h5 className="text-[10px] font-sans font-bold text-navy-dark dark:text-white uppercase tracking-wider">Consensus Governance</h5>
                                <p className="text-[9px] text-charcoal-wood/70 dark:text-slate-gray/50 leading-tight">Co-authoring minimum requirements with labor bureaus, state ministries, and partners.</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-[#0b1b2b]/95 border border-gold-exec/20 p-3 mt-4">
                          <div className="flex justify-between items-center text-[10px]">
                            <span className="font-mono text-gold-exec font-bold tracking-widest uppercase">ICPAK MEMBERSHIP</span>
                            <span className="font-mono text-navy-dark dark:text-white tracking-widest font-bold">Reg No. 7183</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Bottom Current Vetting Status Badge */}
              <div className="relative border-t border-[#0F2744]/10 dark:border-white/10 pt-4 mt-auto">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="block text-[8px] font-mono text-gold-exec uppercase tracking-widest mb-0.5 font-bold">VETTING REGISTRY</span>
                    <span className="block text-[10px] font-serif font-bold text-[#0F2744] dark:text-white uppercase tracking-wider">VERIFIED ACTIVE AUTHORITY</span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border border-emerald-950" title="Active Vetting Authority Status" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Inline Section Anchoring Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <a
          href="#biography"
          className="flex flex-col items-center gap-2 text-[10px] font-sans tracking-[0.25em] text-[#2D3748]/60 dark:text-slate-gray/40 hover:text-gold-exec transition-colors uppercase"
        >
          Explore Dossier
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-gold-exec" />
        </a>
      </div>
    </section>
  );
}
