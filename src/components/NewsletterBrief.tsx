/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, ArrowRight, ShieldCheck, CornerDownRight, Lock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function NewsletterBrief() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const { t, language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "Your credentials have been verified. You are now registered.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Registration failed. Please provide a valid email.");
      }
    } catch (error) {
      console.error("[ERROR] Newsletter subscribe failure:", error);
      setStatus("error");
      setMessage("Connection interrupted. Please try again.");
    }
  };

  return (
    <section 
      id="executive-newsletter" 
      className="relative py-20 bg-white dark:bg-[#07121f] border-t border-navy-dark/10 dark:border-white/10 transition-colors duration-300"
    >
      {/* Dynamic Background Geometry */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFD]/50 to-white dark:from-[#0a1b2d]/30 dark:to-[#07121f] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core Brief Card Container */}
        <div className="relative p-8 md:p-12 bg-[#FAFBFD] dark:bg-[#0f2744]/30 border border-navy-dark/15 dark:border-white/10 shadow-lg flex flex-col justify-between overflow-hidden">
          
          {/* Subtle Accent Borders */}
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold-exec/80" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold-exec/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(201,162,39,0.06),transparent_60%)] pointer-events-none" />

          {/* Form Header */}
          <div className="max-w-2xl mb-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <CornerDownRight className="w-4 h-4 text-gold-exec" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-gold-exec font-bold uppercase">
                  {language === "sw"
                    ? "UTUMAJI WA KIKAKATI"
                    : language === "fr"
                    ? "DÉPÊCHE DE RENSEIGNEMENT"
                    : "INTELLIGENCE DISPATCH"
                  }
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0F2744] dark:text-white tracking-tight leading-snug">
                {language === "sw"
                  ? "Muhtasari wa Utendaji"
                  : language === "fr"
                  ? "Le Bulletin Exécutif"
                  : "The Executive Brief"
                }
              </h3>
              <p className="text-xs font-sans font-normal text-[#2D3748] dark:text-slate-300 mt-2 leading-relaxed">
                {language === "sw"
                  ? "Pokea muhtasari wa robo mwaka wa udhibiti, ufahamu wa kisheria wa mashirika ya umma ya Afrika Mashariki, ukaguzi wa utawala wa sekta ya umma, na waraka za uongozi zilizojumuishwa na Ofisi ya Philip Leakey Okello."
                  : language === "fr"
                  ? "Recevez les synthèses réglementaires trimestrielles, les analyses législatives sur les parastataux d'Afrique de l'Est, les audits de gouvernance publique et les circulaires de direction compilés par le Cabinet de Philip Leakey Okello."
                  : "Receive quarterly regulatory digests, legislative insights on East African parastatals, public sector governance audits, and leadership circulars compiled by the Office of Philip Leakey Okello."
                }
              </p>
            </div>
          </div>

          {/* Interactive Form & Response States */}
          <div className="relative z-15 w-full">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col md:flex-row items-center gap-4 bg-emerald-500/10 border border-emerald-500/30 p-5 w-full"
                >
                  <div className="p-2.5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-none shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-sans font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-widest">
                      {language === "sw"
                        ? "HATI YA USAJILI IMEKAMILIKA"
                        : language === "fr"
                        ? "SERMENT D'ACCRÉDITATION COMPLÉTÉ"
                        : "OATH OF ACCREDITATION COMPLETE"
                      }
                    </h5>
                    <p className="text-xs text-[#222222] dark:text-slate-200 font-sans mt-0.5 leading-normal">
                      {language === "sw"
                        ? "Asante. Barua pepe yako imesajiliwa kikamilifu katika hifadhidata yetu ya kiutendaji ya serikali."
                        : language === "fr"
                        ? "Merci. Votre adresse e-mail a été enregistrée avec succès dans nos rapports de conformité de l'administration d'État."
                        : "Thank you. Your email was safely enrolled in the state administration compliance briefs."
                      }
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="flex flex-col md:flex-row gap-3 w-full"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#718096] dark:text-slate-gray/60">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      disabled={status === "loading"}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={language === "sw"
                        ? "INGIZA BARUA PEPE ILIYOSAJILIWA KAWAIDA"
                        : language === "fr"
                        ? "ENTRER L'ADRESSE E-MAIL ENREGISTRÉE"
                        : "ENTER REGISTERED PUBLIC EMAIL"
                      }
                      aria-label="Registered Executive Email Address"
                      className="w-full pl-10 pr-4 py-3.5 bg-white dark:bg-[#07121f] text-xs font-mono border border-navy-dark/15 dark:border-white/10 text-[#0F2744] dark:text-white placeholder-charcoal-wood/40 dark:placeholder-white/30 focus:outline-none focus:border-gold-exec dark:focus:border-gold-exec/85 focus:ring-1 focus:ring-gold-exec/30 transition-all rounded-none uppercase tracking-widest"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group bg-navy-dark hover:bg-gold-exec dark:bg-gold-exec dark:hover:bg-gold-exec/85 text-white dark:text-navy-dark text-xs font-sans font-semibold tracking-widest uppercase px-8 py-3.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] disabled:opacity-50"
                  >
                    {status === "loading" 
                      ? (language === "sw" ? "Inasindika..." : language === "fr" ? "Traitement..." : "Processing...") 
                      : (language === "sw" ? "Jiunge na Briefs" : language === "fr" ? "S'inscrire" : "Enroll Briefs")
                    }
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Error Message */}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-mono text-red-600 dark:text-red-400 uppercase mt-3 tracking-widest"
              >
                * {message}
              </motion.p>
            )}
          </div>

          {/* Privacy and Trust Oath Footnote */}
          <div className="mt-6 pt-4 border-t border-navy-dark/5 dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-[#718096] dark:text-slate-gray/50">
            <span className="uppercase tracking-wider flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-gold-exec shrink-0 inline-block" />
              <span>
                {language === "sw"
                  ? "KIAPO CHA UTAMBULISHO NA MWANZO SALAMA"
                  : language === "fr"
                  ? "SERMENT DE CONFIDENTIALITÉ & INTÉGRITÉ"
                  : "CONFIDENTIALITY INTEGRITY OATH"
                }
              </span>
            </span>
            <span className="uppercase tracking-wider hidden sm:block">
              {language === "sw"
                ? "HAKUNA SPAM • ONDOA MAWASILIANO WAKATI WOWOTE"
                : language === "fr"
                ? "SANS SPAM • DESINCRIPTION POSSIBLE À TOUT MOMENT"
                : "NO SPAM • UNSUBSCRIBE CORRESPONDENCE AT ANY TIME"
              }
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
