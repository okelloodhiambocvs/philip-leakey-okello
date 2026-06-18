/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Scale, Users, Award, Shield } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Philosophy() {
  const { t, language } = useLanguage();

  const pillars = [
    {
      icon: <Shield className="w-5 h-5 text-gold-exec" />,
      title: language === "sw"
        ? "Uthabiti wa Udhibiti"
        : language === "fr"
        ? "Constance Réglementaire"
        : "Regulatory Constancy",
      desc: language === "sw"
        ? "Viwango havipaswi kuyumba kulingana na mabadiliko ya soko au uratibu wa kisiasa. Kutabirika kwa udhibiti huchochea uaminifu wa uwekezaji."
        : language === "fr"
        ? "Les normes ne doivent pas osciller au gré des marchés ou de la politique. La prévisibilité réglementaire favorise la confiance des investisseurs."
        : "Standards must not waver based on market fluctuations or political coordinates. Regulatory predictability creates investment trust."
    },
    {
      icon: <Users className="w-5 h-5 text-gold-exec" />,
      title: language === "sw"
        ? "Ubunifu kwa Maridhiano"
        : language === "fr"
        ? "Conception par Consensus"
        : "Consensus-First Design",
      desc: language === "sw"
        ? "Sera hufanikiwa tu pale opereta wa viwanda, ofisi za kulinda watumiaji, na taasisi za serikali wanapofanya makubaliano katika kuandika mahitaji ya kimsingi."
        : language === "fr"
        ? "Les politiques ne réussissent que si les acteurs sectoriels, les ligues de consommateurs et l'État co-rédigent les exigences minimales."
        : "Policies succeeded only when industry operators, consumer rights bureaus, and state units co-author the minimum requirements."
    },
    {
      icon: <Scale className="w-5 h-5 text-gold-exec" />,
      title: language === "sw"
        ? "Uwajibikaji wa Udhamini"
        : language === "fr"
        ? "Gérance Fiduciaire"
        : "Fiduciary Stewardship",
      desc: language === "sw"
        ? "Fedha za umma ni amana takatifu. Mifumo ya kifedha lazima iwe dhabiti kustahimili ukaguzi wa kina na misosuko ya mfumo."
        : language === "fr"
        ? "Les fonds publics sont un dépôt sacré. L'architecture financière doit être blindée pour résister aux contrôles et aux chocs systémiques."
        : "Public funds are a sacred trust. Financial architecture must be bulletproof to withstand both scrutiny and system shocks."
    }
  ];

  return (
    <section id="philosophy" className="relative py-24 md:py-32 bg-white dark:bg-navy-dark text-[#0F2744] dark:text-white transition-colors duration-300 overflow-hidden">
      {/* Editorial floating design lines */}
      <div className="absolute top-0 right-1/4 bottom-0 w-[1px] bg-navy-dark/5 dark:bg-gold-exec/5 pointer-events-none" />
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-navy-dark/5 dark:bg-gold-exec/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core Philosophy Editorial Quote layout */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-8 bg-gold-exec" />
            <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase">
              {language === "sw"
                ? "FALSAFA & MSINGI WA UTAWALA"
                : language === "fr"
                ? "DOCTRINE DE GOUVERNANCE & PHILOSOPHIE"
                : "GOVERNANCE DOCTRINE & PHILOSOPHY"
              }
            </span>
            <div className="h-[1px] w-8 bg-gold-exec" />
          </div>

          <span className="font-serif text-8xl line-height-[0] text-gold-exec/20 block -mb-6 italic">
            &ldquo;
          </span>

          <h3 className="font-serif text-3xl md:text-5xl font-light leading-snug tracking-tight mb-8 text-[#2D3748] dark:text-white">
            {language === "sw" ? (
              <>
                Mabadiliko ya kiasasi hayafanikiwi kwa kubadilisha watumishi, bali kwa kuweka <span className="text-gold-exec italic font-normal">sheria thabiti za muundo</span> zinazoishi baada ya watu.
              </>
            ) : language === "fr" ? (
              <>
                La transformation institutionnelle ne réside pas dans le changement de personnel, mais dans l'établissement de <span className="text-gold-exec italic font-normal">règles structurelles rigoureuses</span> immuables aux individus.
              </>
            ) : (
              <>
                Institutional transformation is not achieved by replacing personnel, but by establishing <span className="text-gold-exec italic font-normal">uncompromising structural rules</span> that survive individuals.
              </>
            )}
          </h3>

          <span className="font-serif text-8xl line-height-[0] text-gold-exec/10 block -mt-2 italic">
            &rdquo;
          </span>

          <span className="block font-sans text-[11px] font-bold tracking-[0.25em] text-gold-exec uppercase">
            PHILIP LEAKEY OKELLO, MEMBER ACIC
          </span>
          <span className="block text-[10px] font-mono text-charcoal-wood/60 dark:text-slate-gray/40 uppercase mt-1">
            {language === "sw"
              ? "MAZUNGUMZO YA DOCTRINE YA KIUTENDAJI • 2024"
              : language === "fr"
              ? "DISCOURS SUR LA DOCTRINE EXÉCUTIVE • 2024"
              : "EXECUTIVE DOCTRINE DISCOURSE • 2024"
            }
          </span>
        </div>

        {/* The Three Pillars of Execution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pil, idx) => (
            <div
              key={pil.title}
              className="p-8 bg-[#FAFBFD] dark:bg-white/5 border border-[#0F2744]/10 dark:border-white/10 hover:border-gold-exec dark:hover:border-gold-exec transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-navy-dark/5 dark:bg-white/5 border border-gold-exec/20">
                  {pil.icon}
                </div>
                <span className="font-mono text-xs text-gold-exec/60 dark:text-gold-exec/40 font-bold">
                  PILLAR 0{idx + 1}
                </span>
              </div>

              <h4 className="font-serif text-xl font-bold mb-3 tracking-wide text-navy-dark dark:text-white">
                {pil.title}
              </h4>

              <p className="text-xs font-sans font-light text-[#4A5568] dark:text-slate-gray/70 leading-relaxed">
                {pil.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
