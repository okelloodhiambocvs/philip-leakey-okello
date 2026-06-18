/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "sw" | "fr";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translateText: (text: string, targetLang?: Language) => Promise<string>;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation / General
    biography: "Biography",
    governance: "Governance & Board",
    policy: "Policy Impact",
    publications: "Thought Leadership",
    credentials: "Credentials",
    contact: "Contact",
    requestConsultation: "Request Consultation",
    directLines: "Direct Contact Lines",
    dossierLabel: "EXECUTIVE DOSSIER & STRATEGIC STATEMENT",
    readTime: "Read Time",
    minRead: "Min Read",
    backToTop: "Back to Top",
    home: "Home",
    dossier: "Dossier",
    coordinates: "Coordinates",
    foundations: "Foundations",
    oversight: "Oversight",
    frameworks: "Frameworks",
    nationalBlueprint: "National Blueprint",
    regulatoryReforms: "REGULATORY REFORMS",

    // Section Titles
    visionMissionTitle: "Vision, Mission & Core Values",
    strategicFoundations: "STRATEGIC FOUNDATIONS",
    leadershipProfile: "LEADERSHIP PROFILE",
    biographyNarrative: "Biography Narratives",
    executiveStats: "EXECUTIVE STATISTICS",
    metricsOfLeadership: "Metrics of Leadership",
    boardPerformance: "BOARD PERFORMANCE & FIDUCIARY STANDARD",
    governanceBoardTitle: "Governance & Board Experience",
    policyRegulatoryTitle: "Policy & Regulatory Innovation",
    academicProfile: "ACADEMIC PROFILE & AFFILIATIONS",
    credentialsTitle: "Credentials & Board Membership",
    mediaEngagement: "MEDIA & SPEAKING ENGAGEMENTS",
    curatedMoments: "Curated Professional Events",
    verifiedHotlines: "VERIFIED HOTLINES & INQUIRIES",
    directHandshakes: "Direct Professional Contact",
    newsletterBrief: "ELEGANT EXECUTIVE BRIEFING",
    subscribeTitle: "Subscribe to Strategic Insights",
    complianceFootnote: "Audit indices align with public records of the Kenya National Treasury",

    // Hero Text
    heroSubtitle: "Systemic Reform, Regulatory Rigor, and Unyielding Institutional Modernization.",
    heroTitle: "Philip Leakey Okello",
    heroDesc: "A nearly two-decade state-level architect regulatory leader overseeing the private security sector, deploying national security integration and public accountability.",
    viewDossier: "View Executive Dossier",
    viewCv: "View Official CV",

    // Descriptions & Content Summaries
    achievementsDesc: "True leadership registers itself in measurable institutional stability. Philip Leakey Okello’s record is defined by consistent fiduciary balance sheets, scaled security enforcement registries, and a massive corps of trained and vetted public-sector personnel.",
    philosophyTitle: "The Philosophy of Regulatory Governance",
    philosophyBody: "True governance is not merely the enforcement of rules, but the creation of an environment where integrity becomes a natural default, and public services operate with predictable excellence.",
    newsletterDesc: "Receive exclusive quarterly analyses, regulatory summaries, and strategic policy updates on corporate governance, African capital markets, and defense oversight.",
    emailAddress: "Official Email Address",
    subscribeButton: "Request Subscription",
    subscribing: "Registering...",
    subscribedSuccess: "Thank you. Your request for the executive briefings has been registered.",
  },
  sw: {
    // Navigation / General
    biography: "Wasifu",
    governance: "Utawala & Halmashauri",
    policy: "Athari za Sera",
    publications: "Uongozi wa Fikra",
    credentials: "Vyeti & Sifa",
    contact: "Mawasiliano",
    requestConsultation: "Omba Mashauriano",
    directLines: "Nambari za Mawasiliano",
    dossierLabel: "JALADA LA UTENDAJI & TAARIFA YA MKAKATI",
    readTime: "Muda wa Kusoma",
    minRead: "Kusoma kwa Dakika",
    backToTop: "Nenda Juu",
    home: "Mwanzo",
    dossier: "Jalada",
    coordinates: "Kuratibu",
    foundations: "Misingi",
    oversight: "Usimamizi",
    frameworks: "Mifumo",
    nationalBlueprint: "Blueprint ya Kitaifa",
    regulatoryReforms: "MAGEUZI YA UDHIBITI",

    // Section Titles
    visionMissionTitle: "Maono, Dhamira & Maadili ya Msingi",
    strategicFoundations: "MISINGI YA MKAKATI",
    leadershipProfile: "WASIFU WA UONGOZI",
    biographyNarrative: "Simulizi za Wasifu",
    executiveStats: "TAKWIMU ZA UTENDAJI",
    metricsOfLeadership: "Vipimo vya Uongozi",
    boardPerformance: "UTENDAJI WA BODI & VIWANGO VYA UDHAMINI",
    governanceBoardTitle: "Uzoefu wa Utawala & Bodi",
    policyRegulatoryTitle: "Sera & Ubunifu wa Udhibiti",
    academicProfile: "WASIFU WA JUMUIYA NA VYETI",
    credentialsTitle: "Vyeti vya Elimu na Ushiriki wa Bodi",
    mediaEngagement: "VYOMBO VYA HABARI NA HOTUBA",
    curatedMoments: "Matukio Maalum ya Kitaaluma",
    verifiedHotlines: "MAWASILIANO YALIYOTHIBITISHWA & MASWALI",
    directHandshakes: "Mawasiliano ya Moja kwa Moja ya Kitaaluma",
    newsletterBrief: "HABARI MAALUM KWA WAKURUGENZI",
    subscribeTitle: "Jiandikishe kwa Mafunzo ya Kimkakati",
    complianceFootnote: "Takwimu za ukaguzi zinalingana na rekodi za Hazina ya Kitaifa ya Kenya",

    // Hero Text
    heroSubtitle: "Mageuzi ya Kisitiri, Ukali wa Udhibiti, na Uboreshaji wa Kitaasisi Usioyumba.",
    heroTitle: "Philip Leakey Okello",
    heroDesc: "Mbunifu wa ngazi ya kitaifa kwa karibu miongo miwili anayesimamia sekta ya usalama wa kibinafsi, akiimarisha muungano wa usalama wa taifa na uwajibikaji wa umma.",
    viewDossier: "Soma Jalada la Utendaji",
    viewCv: "Soma CV Rasmi",

    // Descriptions & Content Summaries
    achievementsDesc: "Uongozi wa kweli unadhihirika kupitia uimara wa taasisi unaopimika. Rekodi ya Philip Leakey Okello inafafanuliwa na urari wa fedha wenye tija, mifumo salama ya usajili, na asasi kubwa ya wataalamu waliohitimu.",
    philosophyTitle: "Falsafa ya Utawala wa Udhibiti",
    philosophyBody: "Udhibiti wa kweli sio tu kulazimisha sheria, bali ni kuweka mazingira ambayo uadilifu unakuwa mazoea ya kawaida, na huduma za umma zinatekelezwa kwa ubora wa kutabirika.",
    newsletterDesc: "Pokea ripoti maalum ya kila robo mwaka, muhtasari wa kanuni, na updates za kikakati za uongozi, masoko ya mtaji ya Afrika, na usimamizi wa ulinzi.",
    emailAddress: "Barua Pepe Rasmi",
    subscribeButton: "Omba Kujiandikisha",
    subscribing: "Kusajili...",
    subscribedSuccess: "Asante. Ombi lako pacha la usajili wa habari maalum limepokelewa.",
  },
  fr: {
    // Navigation / General
    biography: "Biographie",
    governance: "Gouvernance & Conseil",
    policy: "Impact Politique",
    publications: "Leadership d'Opinion",
    credentials: "Références & Titres",
    contact: "Contact",
    requestConsultation: "Demander Conseil",
    directLines: "Lignes de Contact Direct",
    dossierLabel: "DOSSIER EXÉCUTIF ET DÉCLARATION STRATÉGIQUE",
    readTime: "Temps de lecture",
    minRead: "Min de lecture",
    backToTop: "Retour en Haut",
    home: "Accueil",
    dossier: "Dossier",
    coordinates: "Coordonnées",
    foundations: "Fondations",
    oversight: "Surveillance",
    frameworks: "Cadres",
    nationalBlueprint: "Schéma National",
    regulatoryReforms: "RÉFORMES RÉGLEMENTAIRES",

    // Section Titles
    visionMissionTitle: "Vision, Mission & Valeurs Fondamentales",
    strategicFoundations: "FONDATIONS STRATÉGIQUES",
    leadershipProfile: "PROFIL DE LEADERSHIP",
    biographyNarrative: "Récits Biographiques",
    executiveStats: "STATISTIQUES EXÉCUTIVES",
    metricsOfLeadership: "Mesures du Leadership",
    boardPerformance: "PERFORMANCE DU CONSEIL & NORMES FIDUCIAIRES",
    governanceBoardTitle: "Gouvernance & Expérience du Conseil",
    policyRegulatoryTitle: "Politique & Innovation Réglementaire",
    academicProfile: "PROFIL ACADÉMIQUE & AFFILIATIONS",
    credentialsTitle: "Certifications et Membre du Conseil",
    mediaEngagement: "PRESSE & CONFÉRENCES",
    curatedMoments: "Événements Professionnels Sélectionnés",
    verifiedHotlines: "LIGNES DIRECTES VERIFIÉES & DEMANDES",
    directHandshakes: "Contact Professionnel Direct",
    newsletterBrief: "BULLETIN EXÉCUTIF ÉLÉGANT",
    subscribeTitle: "Abonnez-vous aux Perspectives Stratégiques",
    complianceFootnote: "Les indices d'audit s'alignent sur les rapports publics du Trésor National du Kenya",

    // Hero Text
    heroSubtitle: "Réforme Systémique, Rigueur Réglementaire et Modernisation Institutionnelle.",
    heroTitle: "Philip Leakey Okello",
    heroDesc: "Architecte d'État de près de deux décennies, dirigeant réglementaire de premier plan supervisant le secteur de la sécurité privée, alliant intégration sécuritaire et transparence publique.",
    viewDossier: "Consulter le Dossier Executif",
    viewCv: "Consulter le CV Officiel",

    // Descriptions & Content Summaries
    achievementsDesc: "Le véritable leadership se traduit par une stabilité institutionnelle mesurable. Le bilan de Philip Leakey Okello se caractérise par des perspectives financières rigoureuses, des registres certifiés et de solides équipes formées aux standards.",
    philosophyTitle: "La Philosophie de la Gouvernance Réglementaire",
    philosophyBody: "La véritable gouvernance ne réside pas dans la simple application de règles, mais dans la création d'un environnement propice où l'intégrité devient naturelle et le service public brille d'une excellence prévisible.",
    newsletterDesc: "Recevez nos rapports trimestriels exclusifs, résumés réglementaires et stratégies de gouvernance des marchés de capitaux africains et de la surveillance publique.",
    emailAddress: "Adresse E-mail Officielle",
    subscribeButton: "S'abonner au Bulletin",
    subscribing: "Inscription...",
    subscribedSuccess: "Merci. Votre demande d'inscription au bulletin exécutif a bien été enregistrée.",
  }
};

const getInitialCache = (): Record<string, string> => {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("g_translation_cache");
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Failed to read translation cache", e);
    }
  }
  return {};
};

const translationCache: Record<string, string> = getInitialCache();

const saveCache = () => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("g_translation_cache", JSON.stringify(translationCache));
    } catch (e) {
      console.warn("Failed to save translation cache", e);
    }
  }
};

const requestQueues: Record<string, { text: string; resolve: (val: string) => void; reject: (err: any) => void }[]> = {};
const timers: Record<string, any> = {};

const processQueue = async (target: string) => {
  const queue = requestQueues[target] || [];
  if (queue.length === 0) return;
  
  // Clear the queue for this language to avoid double-processing
  requestQueues[target] = [];
  
  // De-duplicate texts to minimize translation work & conserve quota
  const uniqueTexts = Array.from(new Set(queue.map(q => q.text)));
  
  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texts: uniqueTexts, targetLanguage: target }),
    });
    const data = await response.json();
    
    if (data.success && Array.isArray(data.translatedTexts)) {
      const translationMap: Record<string, string> = {};
      uniqueTexts.forEach((text, index) => {
        const translated = data.translatedTexts[index] || text;
        translationMap[text] = translated;
        const cacheKey = `${target}:${text}`;
        translationCache[cacheKey] = translated;
      });
      saveCache();
      
      queue.forEach((req) => {
        req.resolve(translationMap[req.text] || req.text);
      });
    } else {
      // Fallback
      queue.forEach((req) => {
        req.resolve(req.text);
      });
    }
  } catch (error) {
    console.warn("Batch translation request failed:", error);
    queue.forEach((req) => {
      req.resolve(req.text);
    });
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") as Language;
      if (savedLang === "en" || savedLang === "sw" || savedLang === "fr") {
        return savedLang;
      }
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const langDict = translations[language];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // Fallback to English
    return translations.en[key] || key;
  };

  const translateText = async (text: string, targetLang?: Language): Promise<string> => {
    const target = targetLang || language;
    if (target === "en" || !text.trim()) return text;

    const cacheKey = `${target}:${text}`;
    if (translationCache[cacheKey]) {
      return translationCache[cacheKey];
    }

    if (!requestQueues[target]) {
      requestQueues[target] = [];
    }

    return new Promise<string>((resolve, reject) => {
      requestQueues[target].push({ text, resolve, reject });
      
      if (timers[target]) {
        clearTimeout(timers[target]);
      }
      timers[target] = setTimeout(() => {
        delete timers[target];
        processQueue(target);
      }, 50);
    });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translateText }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

interface TranslateProps {
  children: string;
  className?: string;
  as?: string;
}

export function Translate({ children, className, as: Component = "span" }: TranslateProps) {
  const { language, translateText } = useLanguage();
  const [translated, setTranslated] = useState(children);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;
    if (language === "en" || !children) {
      setTranslated(children);
      return;
    }

    // If cache already has it, use it instantly to avoid flicker & logging loader
    const cacheKey = `${language}:${children}`;
    if (translationCache[cacheKey]) {
      setTranslated(translationCache[cacheKey]);
      setLoading(false);
      return;
    }

    setLoading(true);
    translateText(children, language).then((result) => {
      if (active) {
        setTranslated(result || children);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, [children, language, translateText]);

  const Tag = Component as any;

  return (
    <Tag className={`${className} ${loading ? "animate-pulse opacity-70" : "transition-all duration-300"}`}>
      {translated}
    </Tag>
  );
}
