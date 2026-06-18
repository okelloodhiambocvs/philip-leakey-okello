/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { keyAchievements } from "../data";
import { useLanguage } from "../context/LanguageContext";

// Custom single stat counter component
function StatCounter({ value, suffix, label, context }: { key?: string; value: string; suffix: string; label: string; context: string }) {
  const [numValue, setNumValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric parts out of a string (e.g., '3,000' -> 3000, '1.2' -> 1.2, '100' -> 100, '15' -> 15)
    const cleanedValue = value.replace(/,/g, "");
    const targetVal = parseFloat(cleanedValue);
    
    if (isNaN(targetVal)) {
      setNumValue(0);
      return;
    }

    let start = 0;
    const duration = 2000; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const current = easeProgress * targetVal;
      
      setNumValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setNumValue(targetVal);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  // Helper function to format count nicely based on decimal needs
  const formatValue = () => {
    if (value.includes(".")) {
      return numValue.toFixed(1);
    }
    return Math.floor(numValue).toLocaleString();
  };

  return (
    <div ref={ref} className="p-8 md:p-10 bg-white dark:bg-[#0f2744]/40 border border-navy-dark/15 dark:border-white/10 shadow-sm flex flex-col justify-between h-72 group relative transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-navy-dark dark:bg-gold-exec scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      <div>
        {/* Metric Label */}
        <span className="block text-[10px] font-sans text-navy-dark dark:text-white/80 tracking-widest uppercase mb-4 font-bold">
          {label}
        </span>
        
        {/* Animated Big Number */}
        <div className="flex items-baseline font-serif text-4xl md:text-5xl font-black text-navy-dark dark:text-white mb-4 tracking-tight">
          <span>{formatValue()}</span>
          <span className="text-gold-exec ml-1">{suffix}</span>
        </div>
      </div>

      {/* Description Context */}
      <p className="text-xs font-sans font-normal text-[#222222] dark:text-slate-200 leading-relaxed pt-4 border-t border-navy-dark/10 dark:border-white/10">
        {context}
      </p>
    </div>
  );
}

export default function Achievements() {
  const { t, language } = useLanguage();

  // Localized Achievements Data helper mapping descriptions and labels for enriched SW/FR support
  const localizedAchievements = keyAchievements.map(ach => {
    let label = ach.label;
    let context = ach.context;

    if (language === "sw") {
      if (ach.id === "ach-regulated") {
        label = "Mashirika Yaliyodhibitiwa";
        context = "Shughuli za kampuni za usalama zinazofuatiliwa na kudhibitiwa kote nchini ili kudumisha miongozo ya ulinzi ya kitaifa.";
      } else if (ach.id === "ach-budget") {
        label = "Usimamizi wa Bajeti";
        context = "Tathmini ya bajeti iliyopangwa ya fedha za umma iliyosimamiwa kwa uwajibikaji kamili na uzingatiaji wa sheria.";
      } else if (ach.id === "ach-staff") {
        label = "Viongozi Waongozwao";
        context = "Kiongozi wa timu mbalimbali za ukaguzi, usimamizi wa sheria, fedha, na wataalamu wa kiufundi kuelekea malengo ya pamoja.";
      } else if (ach.id === "ach-experience") {
        label = "Miaka ya Uongozi";
        context = "Kuongoza sera na usimamizi wa sekta ya umma chini ya baraza tatu tofauti za kisheria.";
      }
    } else if (language === "fr") {
      if (ach.id === "ach-regulated") {
        label = "Entités Régulées";
        context = "Opérations de sécurité d'entreprise contrôlées, auditées et régulées pour maintenir les directives de sécurité nationale.";
      } else if (ach.id === "ach-budget") {
        label = "Supervision Budgétaire";
        context = "Allocations cumulées de finances publiques gérées et auditées dans le respect absolu de la conformité légale.";
      } else if (ach.id === "ach-staff") {
        label = "Directeurs Dirigés";
        context = "Direction d'équipes interdisciplinaires de juristes, auditeurs, financiers et experts techniques vers des objectifs unifiés.";
      } else if (ach.id === "ach-experience") {
        label = "Années de Gouvernance";
        context = "Orientation des politiques et de l'administration du secteur public sous trois cabinets législatifs distincts.";
      }
    }

    return { ...ach, label, context };
  });

  return (
    <section id="achievements" className="py-24 md:py-32 bg-slate-gray dark:bg-[#08121f]/90 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-8 bg-gold-exec" />
              <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase">
                {t("executiveStats")}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark dark:text-white tracking-tight">
              {t("metricsOfLeadership")}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-6">
            <p className="text-sm font-sans font-normal text-[#222222] dark:text-slate-200 leading-relaxed">
              {t("achievementsDesc")}
            </p>
          </div>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {localizedAchievements.map((ach) => (
            <StatCounter
              key={ach.id}
              value={ach.metric}
              suffix={ach.suffix}
              label={ach.label}
              context={ach.context}
            />
          ))}
        </div>

        {/* Symmetrical Footnote Board Verification */}
        <div className="mt-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 border border-navy-dark/15 dark:border-white/10 bg-white dark:bg-[#0f2744]/40 text-[10px] font-mono text-navy-dark dark:text-white uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block animate-pulse" />
            {t("complianceFootnote")}
          </span>
        </div>

      </div>
    </section>
  );
}
