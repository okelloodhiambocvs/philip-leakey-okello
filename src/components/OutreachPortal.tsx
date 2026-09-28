/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, ArrowRight, Clipboard, Check, Sparkles, FileText, Languages, RotateCcw, Shield } from "lucide-react";
import { useLanguage, Language } from "../context/LanguageContext";

export default function OutreachPortal() {
  const { language, translateText } = useLanguage();
  const [inputText, setInputText] = useState("");
  const [targetLang, setTargetLang] = useState<Language>("sw");
  const [translatedResult, setTranslatedResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const templates = [
    {
      id: "compliance",
      label: "Regulatory Directive",
      text: "Notice is hereby given to all private security companies operating in Kenya that all personnel must be registered with the authority, complete the security training manuals, and abide by the human-rights operating models immediately to ensure public trust.",
    },
    {
      id: "cooperation",
      label: "Bilateral Accord",
      text: "We propose a technical partnership with regional parastatal operators to standardize digital certifications and accelerate security audit cycles, thereby fostering cross-border investment trust.",
    },
    {
      id: "fiduciary",
      label: "Fiduciary Assurance",
      text: "The board takes its fiduciary duty to public sector administration with supreme seriousness. Real-time auditing schedules align completely with national treasury directives and constitutional provisions.",
    }
  ];

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    setTranslatedResult("");
    setStatusMessage("Connecting to State Translation Service via Gemini...");

    // Staggered status messages for premium user experience
    const statusIntervals = [
      setTimeout(() => setStatusMessage("Analyzing linguistic registry and terminology..."), 1000),
      setTimeout(() => setStatusMessage("Structuring professional, academic, and elegant tone..."), 2200),
      setTimeout(() => setStatusMessage("Finalizing diplomatic grammar check..."), 3500)
    ];

    try {
      const result = await translateText(inputText, targetLang);
      setTranslatedResult(result);
    } catch (e) {
      console.error(e);
      setTranslatedResult("An error occurred during translation. Please check your credentials.");
    } finally {
      statusIntervals.forEach(clearTimeout);
      setIsLoading(false);
      setStatusMessage("");
    }
  };

  const handleCopyToClipboard = () => {
    if (!translatedResult) return;
    navigator.clipboard.writeText(translatedResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const applyTemplate = (text: string) => {
    setInputText(text);
    setTranslatedResult("");
  };

  return (
    <section id="outreach-portal" className="py-24 md:py-32 bg-slate-gray/30 dark:bg-[#0c1a2c]/65 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-exec/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-dark/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Title */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-gold-exec" />
            <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase flex items-center gap-2">
              <Globe className="w-3 h-3 animate-pulse" /> GLOBAL OUTREACH PORTAL & TRANSLATOR
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-dark dark:text-white tracking-tight leading-snug">
            Outreach Broadcast Translator
          </h2>
          <p className="text-sm font-sans text-charcoal-wood/80 dark:text-slate-300 mt-4 leading-relaxed">
            Expand African parastatal collaboration and international diplomatic relationships. Prepare and translate state directives, board briefs, and stakeholder memorandum instantly between English, Swahili, and French.
          </p>
        </div>

        {/* Translation Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Input Console & Action Center */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-white dark:bg-[#0f2744]/40 p-6 md:p-8 border border-navy-dark/10 dark:border-white/10 shadow-sm flex flex-col h-full rounded-none">
              
              <div className="flex items-center justify-between mb-4 border-b border-navy-dark/5 dark:border-white/5 pb-3">
                <span className="text-xs font-mono font-bold text-navy-dark dark:text-gold-exec uppercase tracking-widest flex items-center gap-2">
                  <Languages className="w-4 h-4 text-gold-exec" /> 1. Input Document Brief
                </span>
                <button 
                  onClick={() => { setInputText(""); setTranslatedResult(""); }}
                  className="text-navy-dark/40 dark:text-white/40 hover:text-gold-exec transition-colors text-[10px] font-mono uppercase tracking-widest flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Clear
                </button>
              </div>

              {/* Quick Preset Buttons */}
              <div className="mb-4">
                <span className="block text-[9px] font-mono text-navy-dark/60 dark:text-white/40 uppercase tracking-widest mb-2 font-bold">
                  Quick Diplomatic Templates
                </span>
                <div className="flex flex-wrap gap-2">
                  {templates.map((temp) => (
                    <button
                      key={temp.id}
                      onClick={() => applyTemplate(temp.text)}
                      className="px-3 py-1.5 border border-navy-dark/10 dark:border-white/10 bg-slate-gray/30 dark:bg-[#07121f]/60 text-[10px] font-sans hover:border-gold-exec dark:hover:border-gold-exec text-navy-dark dark:text-slate-200 transition-all cursor-pointer font-medium uppercase tracking-wider"
                    >
                      {temp.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Input Block */}
              <div className="flex-1 relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter or paste credentials, press statements, regulatory updates, or diplomatic summaries in English..."
                  className="w-full h-44 md:h-52 lg:h-64 p-4 bg-slate-gray/20 dark:bg-[#07121f] text-xs font-sans text-navy-dark dark:text-white border border-navy-dark/10 dark:border-white/10 focus:outline-none focus:border-gold-exec dark:focus:border-gold-exec resize-none placeholder-navy-dark/40 dark:placeholder-white/20 transition-all"
                />
                <span className="absolute bottom-3 right-3 text-[10px] font-mono text-navy-dark/30 dark:text-white/30 uppercase tracking-widest">
                  {inputText.length} Characters
                </span>
              </div>

              {/* Translation controls */}
              <div className="mt-6 pt-5 border-t border-navy-dark/5 dark:border-white/5 space-y-4">
                <div>
                  <span className="block text-[10px] font-mono text-navy-dark/70 dark:text-white/60 uppercase tracking-widest mb-3 font-bold">
                    2. Select Outreach Target Language
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setTargetLang("en")}
                      className={`py-2 px-3 text-[10px] font-mono uppercase tracking-widest border transition-all cursor-pointer font-bold ${
                        targetLang === "en"
                          ? "border-gold-exec bg-gold-exec text-navy-dark"
                          : "border-navy-dark/15 dark:border-white/10 bg-transparent text-navy-dark dark:text-white/80 hover:border-gold-exec"
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setTargetLang("sw")}
                      className={`py-2 px-3 text-[10px] font-mono uppercase tracking-widest border transition-all cursor-pointer font-bold ${
                        targetLang === "sw"
                          ? "border-gold-exec bg-gold-exec text-navy-dark"
                          : "border-navy-dark/15 dark:border-white/10 bg-transparent text-navy-dark dark:text-white/80 hover:border-gold-exec"
                      }`}
                    >
                      Swahili
                    </button>
                    <button
                      onClick={() => setTargetLang("fr")}
                      className={`py-2 px-3 text-[10px] font-mono uppercase tracking-widest border transition-all cursor-pointer font-bold ${
                        targetLang === "fr"
                          ? "border-gold-exec bg-gold-exec text-navy-dark"
                          : "border-navy-dark/15 dark:border-white/10 bg-transparent text-navy-dark dark:text-white/80 hover:border-gold-exec"
                      }`}
                    >
                      French
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleTranslate}
                  disabled={isLoading || !inputText.trim()}
                  className="w-full group bg-navy-dark hover:bg-gold-exec dark:bg-gold-exec dark:hover:bg-gold-exec/80 text-white dark:text-navy-dark text-xs font-sans font-bold tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-all active:scale-[0.99]"
                >
                  {isLoading ? "Executing Translation..." : "Perform Diplomatic Translation"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>

          {/* Right: Output Viewport styled like an official parchment sheet / ledger */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-white dark:bg-[#07121f]/50 border border-navy-dark/10 dark:border-white/10 shadow-sm p-6 md:p-8 flex flex-col h-full rounded-none relative">
              
              <div className="flex items-center justify-between mb-4 border-b border-navy-dark/5 dark:border-white/5 pb-3">
                <span className="text-xs font-mono font-bold text-navy-dark dark:text-gold-exec uppercase tracking-widest flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gold-exec" /> Diplomatic Broadcast Draft
                </span>
                {translatedResult && (
                  <button
                    onClick={handleCopyToClipboard}
                    className="text-navy-dark/60 dark:text-white/60 hover:text-gold-exec dark:hover:text-gold-exec transition-colors text-[10px] font-mono uppercase tracking-widest flex items-center gap-1 bg-slate-gray/30 dark:bg-[#0f2744]/40 px-2 py-1 border border-navy-dark/5 dark:border-white/5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" /> Copied!
                      </>
                    ) : (
                      <>
                        <Clipboard className="w-3.5 h-3.5" /> Copy Draft
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Status and output viewports */}
              <div className="flex-1 flex flex-col justify-center min-h-[220px]">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-10"
                    >
                      <div className="w-10 h-10 border-2 border-gold-exec border-t-transparent animate-spin rounded-full mx-auto mb-4" />
                      <p className="text-[11px] font-mono text-navy-dark/70 dark:text-white/60 uppercase tracking-widest animate-pulse max-w-sm mx-auto">
                        {statusMessage}
                      </p>
                    </motion.div>
                  ) : translatedResult ? (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-amber-50/5 dark:bg-[#07121f]/90 p-4 md:p-6 border border-amber-900/10 dark:border-white/5 h-full flex flex-col justify-between"
                    >
                      <p className="text-xs font-sans text-navy-dark dark:text-slate-100 leading-relaxed italic whitespace-pre-line">
                        {translatedResult}
                      </p>
                      
                      <div className="mt-6 pt-4 border-t border-navy-dark/5 dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-[#718096] dark:text-slate-gray/50">
                        <span className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-gold-exec animate-pulse" /> Verified translation
                        </span>
                        <span>Target: {targetLang.toUpperCase()}</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-16 text-navy-dark/30 dark:text-white/20"
                    >
                      <Globe className="w-12 h-12 stroke-[1] mx-auto mb-3 opacity-60 text-gold-exec" />
                      <p className="text-xs font-sans max-w-xs mx-auto leading-normal">
                        Select a preset directive template or draft custom memorandum on the left, select your target audience, and trigger the diplomatic translation.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Fiduciary Stature Footer Note */}
              <div className="mt-6 text-[10px] font-mono text-navy-dark/45 dark:text-white/35 uppercase tracking-widest text-center flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-gold-exec inline-block shrink-0" />
                <span>Verified by National Security & Corporate Compliance Directives</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
