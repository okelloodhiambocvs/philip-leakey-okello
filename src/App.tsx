/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Linkedin, Facebook, ArrowUp, ArrowRight, FileText, Download, Award, Shield, CheckCircle2 } from "lucide-react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import VisionMissionValues from "./components/VisionMissionValues";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Governance from "./components/Governance";
import PolicyImpact from "./components/PolicyImpact";
import Achievements from "./components/Achievements";
import Philosophy from "./components/Philosophy";
import Publications from "./components/Publications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import OutreachPortal from "./components/OutreachPortal";
import ExecutiveCv from "./components/ExecutiveCv";
import ExportDocs from "./components/ExportDocs";
import NewsletterBrief from "./components/NewsletterBrief";
import FooterResourceModal, { FooterModalType } from "./components/FooterResourceModal";

type PageId = "home" | "biography" | "governance" | "policy" | "leadership" | "credentials" | "contact";

const SectionSeparator = () => (
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-center select-none opacity-80 dark:opacity-60">
    <div className="w-full flex items-center justify-between">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-navy-dark/15 to-navy-dark/15 dark:via-white/10 dark:to-white/10" />
      <div className="flex items-center gap-2 px-5">
        <div className="w-1.5 h-1.5 bg-gold-exec rotate-45 transition-colors duration-300" />
        <div className="w-1 h-1 bg-gold-exec/45 rotate-45 transition-colors duration-300" />
        <div className="w-1.5 h-1.5 bg-gold-exec rotate-45 transition-colors duration-300" />
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-navy-dark/15 to-navy-dark/15 dark:via-white/10 dark:to-white/10" />
    </div>
  </div>
);

const PageHeader = ({
  label,
  title,
  subtitle,
  bgImage,
  photoCaption,
  onNavigateHome,
}: {
  label: string;
  title: string;
  subtitle: string;
  bgImage?: string;
  photoCaption?: string;
  onNavigateHome: () => void;
}) => (
  <div className="pt-32 pb-16 relative overflow-hidden border-b border-navy-dark/10 dark:border-white/10 transition-colors duration-300">
    {/* Page-specific photo background at 50% visibility - sharp and unblurred */}
    {bgImage && (
      <>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 dark:opacity-50 transition-all duration-700 pointer-events-none"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
        {/* Balanced overlay ensuring 50% image visibility while keeping text crisp and legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/40 dark:from-[#060e18]/90 dark:via-[#07121f]/70 dark:to-[#07121f]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40 dark:from-[#07121f]/80 dark:via-transparent dark:to-[#060e18]/50 pointer-events-none" />
      </>
    )}

    {/* Atmospheric ambient lighting */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-gold-exec/10 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left side: Breadcrumb, label, title, subtitle */}
        <div className={bgImage ? "lg:col-span-8" : "lg:col-span-12"}>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#718096] dark:text-[#A0AEC0] mb-4">
            <button
              onClick={onNavigateHome}
              className="hover:text-gold-exec transition-colors cursor-pointer"
            >
              HOME
            </button>
            <span className="text-gold-exec font-bold">/</span>
            <span className="text-navy-dark dark:text-white font-semibold">{label}</span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <div className="h-[1px] w-8 bg-gold-exec" />
            <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase">
              {label}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark dark:text-white tracking-tight mb-4 leading-tight">
            {title}
          </h1>

          <p className="text-sm md:text-base font-sans font-normal text-charcoal-wood/90 dark:text-slate-200 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Right side: Prominent framed portrait badge showcasing the photo */}
        {bgImage && (
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <div className="relative w-72 aspect-[4/3] border-2 border-gold-exec/40 bg-navy-dark shadow-2xl overflow-hidden group">
              <img
                src={bgImage}
                alt={title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/30 to-transparent pointer-events-none" />
              {photoCaption && (
                <div className="absolute bottom-2.5 left-3 right-3">
                  <span className="block text-[8px] font-mono text-gold-exec uppercase font-bold tracking-widest">
                    OFFICIAL DOSSIER
                  </span>
                  <span className="block text-[11px] font-serif text-white font-semibold truncate">
                    {bgImage.includes("philip_biography_leadership_469138863.jpg")
                      ? "Leadership & Security Sector Deliberation"
                      : photoCaption}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  </div>
);

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isExportDocsOpen, setIsExportDocsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeFooterModal, setActiveFooterModal] = useState<FooterModalType>(null);

  // Read initial page from hash if present
  const getPageFromHash = (): PageId => {
    if (typeof window === "undefined") return "home";
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (hash === "biography" || hash === "about") return "biography";
    if (hash === "governance" || hash === "board" || hash === "governance-and-board") return "governance";
    if (hash === "policy" || hash === "impact" || hash === "policy-impact") return "policy";
    if (hash === "leadership" || hash === "publications" || hash === "thoughtful-leadership" || hash === "thought-leadership") return "leadership";
    if (hash === "credentials" || hash === "credential" || hash === "education") return "credentials";
    if (hash === "contact" || hash === "outreach") return "contact";
    return "home";
  };

  const [activePage, setActivePage] = useState<PageId>(getPageFromHash);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setActivePage(page);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    const targetPage = (
      page === "home" ? "home" :
      page === "biography" ? "biography" :
      page === "governance" ? "governance" :
      page === "policy" ? "policy" :
      page === "leadership" ? "leadership" :
      page === "credentials" ? "credentials" :
      page === "contact" ? "contact" : "home"
    ) as PageId;

    setActivePage(targetPage);
    window.location.hash = targetPage === "home" ? "" : targetPage;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize theme from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") return true;
      if (savedTheme === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Toggle active class on HTML document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white dark:bg-[#07121f] text-charcoal-wood dark:text-slate-100 transition-colors duration-300 relative flex flex-col justify-between">
      {/* Elegant Scroll Depth Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gold-exec origin-left z-[9999] pointer-events-none print:hidden shadow-[0_1px_4px_rgba(201,130,20,0.3)]"
        style={{ scaleX }}
      />

      {/* Editorial Structural Borders representing executive binder margins */}
      <div className="fixed inset-y-0 left-0 w-1 bg-navy-dark dark:bg-gold-exec/40 z-50 print:hidden" />
      <div className="fixed inset-y-0 right-0 w-1 bg-navy-dark dark:bg-gold-exec/40 z-50 print:hidden" />

      {/* Main Navigation Bar */}
      <Navigation 
        onNextJsDocOpen={() => setIsExportDocsOpen(true)} 
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Main Editorial Canvas with Isolated Page Views */}
      <main id="executive-canvas" className="overflow-x-hidden flex-1">
        
        {/* ================= PAGE 1: HOME ================= */}
        {activePage === "home" && (
          <motion.div
            key="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Landing Hero Segment with Philip's Photo */}
            <Hero 
              onOpenCv={() => setIsCvOpen(true)} 
              onNavigate={handleNavigate}
            />

            <SectionSeparator />

            {/* Vision, Mission, and Core Values Section */}
            <VisionMissionValues />

            <SectionSeparator />

            {/* Quick Strategic Portal Links to Major Dossiers */}
            <section className="py-16 bg-slate-50/60 dark:bg-[#060e18] border-y border-navy-dark/10 dark:border-white/10">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-gold-exec uppercase font-bold tracking-widest block mb-1">
                      EXECUTIVE DOSSIER DIRECTORY
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-navy-dark dark:text-white">
                      Explore Sector Leadership Pillars
                    </h3>
                  </div>
                  <p className="text-xs font-sans text-charcoal-wood/70 dark:text-slate-400 max-w-md">
                    Access dedicated analytical pages detailing Philip Leakey Okello's career arc, state corporation boards, legislative policy impact, and published monographs.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Card 1: Biography */}
                  <button
                    onClick={() => handleNavigate("biography")}
                    className="p-6 bg-white dark:bg-[#0c1a2c] border border-navy-dark/10 dark:border-white/10 hover:border-gold-exec dark:hover:border-gold-exec transition-all text-left group shadow-sm cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] font-mono text-gold-exec uppercase font-bold tracking-wider">PILLAR I</span>
                      <h4 className="font-serif text-xl font-bold text-navy-dark dark:text-white group-hover:text-gold-exec transition-colors mt-1 mb-2">
                        Biography & Leadership Arc
                      </h4>
                      <p className="text-xs text-charcoal-wood/75 dark:text-slate-400 leading-relaxed font-sans">
                        Two decades of systemic reform, fiscal treasury discipline, and parastatal regulatory leadership.
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-navy-dark/5 dark:border-white/5 flex items-center justify-between text-xs font-mono font-semibold text-gold-exec">
                      <span>OPEN BIOGRAPHY</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  {/* Card 2: Governance & Board */}
                  <button
                    onClick={() => handleNavigate("governance")}
                    className="p-6 bg-white dark:bg-[#0c1a2c] border border-navy-dark/10 dark:border-white/10 hover:border-gold-exec dark:hover:border-gold-exec transition-all text-left group shadow-sm cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] font-mono text-gold-exec uppercase font-bold tracking-wider">PILLAR II</span>
                      <h4 className="font-serif text-xl font-bold text-navy-dark dark:text-white group-hover:text-gold-exec transition-colors mt-1 mb-2">
                        Governance & Board Stewardship
                      </h4>
                      <p className="text-xs text-charcoal-wood/75 dark:text-slate-400 leading-relaxed font-sans">
                        Boardroom governance, ICPAK certified accounting frameworks, risk mitigation, and parastatal audits.
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-navy-dark/5 dark:border-white/5 flex items-center justify-between text-xs font-mono font-semibold text-gold-exec">
                      <span>OPEN GOVERNANCE</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  {/* Card 3: Policy Impact */}
                  <button
                    onClick={() => handleNavigate("policy")}
                    className="p-6 bg-white dark:bg-[#0c1a2c] border border-navy-dark/10 dark:border-white/10 hover:border-gold-exec dark:hover:border-gold-exec transition-all text-left group shadow-sm cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] font-mono text-gold-exec uppercase font-bold tracking-wider">PILLAR III</span>
                      <h4 className="font-serif text-xl font-bold text-navy-dark dark:text-white group-hover:text-gold-exec transition-colors mt-1 mb-2">
                        Policy & Regulatory Impact
                      </h4>
                      <p className="text-xs text-charcoal-wood/75 dark:text-slate-400 leading-relaxed font-sans">
                        National security integration grids, 300,000+ biometric guard registrations, and living wage laws.
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-navy-dark/5 dark:border-white/5 flex items-center justify-between text-xs font-mono font-semibold text-gold-exec">
                      <span>OPEN POLICY IMPACT</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  {/* Card 4: Thought Leadership */}
                  <button
                    onClick={() => handleNavigate("leadership")}
                    className="p-6 bg-white dark:bg-[#0c1a2c] border border-navy-dark/10 dark:border-white/10 hover:border-gold-exec dark:hover:border-gold-exec transition-all text-left group shadow-sm cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] font-mono text-gold-exec uppercase font-bold tracking-wider">PILLAR IV</span>
                      <h4 className="font-serif text-xl font-bold text-navy-dark dark:text-white group-hover:text-gold-exec transition-colors mt-1 mb-2">
                        Thought Leadership & Monograph Archive
                      </h4>
                      <p className="text-xs text-charcoal-wood/75 dark:text-slate-400 leading-relaxed font-sans">
                        Executive philosophies, published treatises, policy whitepapers, and verified symposium photo galleries.
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-navy-dark/5 dark:border-white/5 flex items-center justify-between text-xs font-mono font-semibold text-gold-exec">
                      <span>OPEN THOUGHT LEADERSHIP</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  {/* Card 5: Credentials */}
                  <button
                    onClick={() => handleNavigate("credentials")}
                    className="p-6 bg-white dark:bg-[#0c1a2c] border border-navy-dark/10 dark:border-white/10 hover:border-gold-exec dark:hover:border-gold-exec transition-all text-left group shadow-sm cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] font-mono text-gold-exec uppercase font-bold tracking-wider">PILLAR V</span>
                      <h4 className="font-serif text-xl font-bold text-navy-dark dark:text-white group-hover:text-gold-exec transition-colors mt-1 mb-2">
                        Credentials & Academic Profile
                      </h4>
                      <p className="text-xs text-charcoal-wood/75 dark:text-slate-400 leading-relaxed font-sans">
                        Academic degrees, ICPAK certifications, professional appointments, and downloadable executive CV.
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-navy-dark/5 dark:border-white/5 flex items-center justify-between text-xs font-mono font-semibold text-gold-exec">
                      <span>OPEN CREDENTIALS</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>

                  {/* Card 6: Contact */}
                  <button
                    onClick={() => handleNavigate("contact")}
                    className="p-6 bg-white dark:bg-[#0c1a2c] border border-navy-dark/10 dark:border-white/10 hover:border-gold-exec dark:hover:border-gold-exec transition-all text-left group shadow-sm cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] font-mono text-gold-exec uppercase font-bold tracking-wider">PILLAR VI</span>
                      <h4 className="font-serif text-xl font-bold text-navy-dark dark:text-white group-hover:text-gold-exec transition-colors mt-1 mb-2">
                        Official Communications & Registry
                      </h4>
                      <p className="text-xs text-charcoal-wood/75 dark:text-slate-400 leading-relaxed font-sans">
                        Chambers hotline, confidential inquiry channel, and automated diplomatic translation portal.
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-navy-dark/5 dark:border-white/5 flex items-center justify-between text-xs font-mono font-semibold text-gold-exec">
                      <span>CONNECT DIRECTLY</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
              </div>
            </section>

            <SectionSeparator />

            {/* Elegant Executive Newsletter Briefing signup */}
            <NewsletterBrief />
          </motion.div>
        )}

        {/* ================= PAGE 2: BIOGRAPHY ================= */}
        {activePage === "biography" && (
          <motion.div
            key="biography-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <PageHeader
              label="EXECUTIVE BIOGRAPHY"
              title="Biography & Leadership Arc"
              subtitle="Tracing two decades of systemic reform, fiscal oversight under parliamentary audits, and parastatal regulatory transformation in East Africa."
              bgImage="/src/assets/images/philip_biography_leadership_469138863.jpg"
              photoCaption="Executive Chambers Desk • Nairobi, Kenya"
              onNavigateHome={() => handleNavigate("home")}
            />

            {/* Narrative Biography segment */}
            <About />

            <SectionSeparator />

            {/* Interactive Achievements Counters */}
            <Achievements />

            <SectionSeparator />

            {/* Career Progressive Timeline */}
            <Timeline />
          </motion.div>
        )}

        {/* ================= PAGE 3: GOVERNANCE AND BOARD ================= */}
        {activePage === "governance" && (
          <motion.div
            key="governance-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <PageHeader
              label="CORPORATE GOVERNANCE & BOARD STEWARDSHIP"
              title="Governance & Boardroom Oversight"
              subtitle="Setting the gold standard for parastatal fiduciary responsibility, board self-evaluations, ICPAK compliance, and constitutional public resource stewardship."
              bgImage="/src/assets/images/philip_board_deliberate_1790608656532.jpg"
              photoCaption="Strategic Boardroom Deliberation & Governance Oversight"
              onNavigateHome={() => handleNavigate("home")}
            />

            {/* Boardroom-Style Governance panel */}
            <Governance />
          </motion.div>
        )}

        {/* ================= PAGE 4: POLICY IMPACT ================= */}
        {activePage === "policy" && (
          <motion.div
            key="policy-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <PageHeader
              label="POLICY & REGULATORY TRANSFORMATION"
              title="Policy Impact & Legislative Directives"
              subtitle="Architecting national private security regulations, gazetted training curricula, biometric civil database integrations, and living wage frameworks."
              bgImage="/src/assets/images/philip_state_blue_1790608619748.jpg"
              photoCaption="National Regulatory Delegation & State Leadership"
              onNavigateHome={() => handleNavigate("home")}
            />

            {/* Legislation, reform, and inter-agency structures */}
            <PolicyImpact />
          </motion.div>
        )}

        {/* ================= PAGE 5: THOUGHT LEADERSHIP ================= */}
        {activePage === "leadership" && (
          <motion.div
            key="leadership-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <PageHeader
              label="THOUGHT LEADERSHIP & PUBLICATIONS"
              title="Thought Leadership & Scholarly Works"
              subtitle="Published monographs on public administration, statutory manuals, keynote recordings, and verified diplomatic press archives."
              bgImage="/src/assets/images/philip_podium_address_1790608633190.jpg"
              photoCaption="Addressing Civic Assemblies & Leadership Forums"
              onNavigateHome={() => handleNavigate("home")}
            />

            {/* Grand Philosophy Quote segment */}
            <Philosophy />

            <SectionSeparator />

            {/* Thought Leadership publications registry */}
            <Publications />

            <SectionSeparator />

          </motion.div>
        )}

        {/* ================= PAGE 6: CREDENTIALS ================= */}
        {activePage === "credentials" && (
          <motion.div
            key="credentials-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <PageHeader
              label="CREDENTIALS & AFFILIATIONS"
              title="Credentials, Education & Certifications"
              subtitle="Academic qualifications, Institute of Certified Public Accountants of Kenya (ICPAK) membership, and comprehensive executive dossier."
              bgImage="/src/assets/images/philip_board_speech_1790608644844.jpg"
              photoCaption="ICPAK Member Reg. 7183 • Fiduciary Excellence"
              onNavigateHome={() => handleNavigate("home")}
            />

            {/* Academic Profile & Affiliations certifications */}
            <Education />

            <SectionSeparator />

            {/* Executive CV Callout Card */}
            <section className="py-12 bg-white dark:bg-[#07121f]">
              <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="p-8 bg-slate-50 dark:bg-[#0c1a2c] border border-navy-dark/15 dark:border-gold-exec/30 relative overflow-hidden shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-gold-exec uppercase font-bold tracking-widest block">
                        AUTHENTICATED EXECUTIVE RECORD
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-navy-dark dark:text-white">
                        Curriculum Vitae & Verified Career Dossier
                      </h3>
                      <p className="text-xs text-charcoal-wood/70 dark:text-slate-300 max-w-lg leading-relaxed font-sans">
                        Full comprehensive dossier featuring parliamentary appointments, public finance portfolios, board audit committee histories, and academic references.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                      <button
                        onClick={() => setIsCvOpen(true)}
                        className="flex items-center justify-center gap-2 bg-navy-dark dark:bg-gold-exec dark:text-navy-dark hover:bg-gold-exec text-white text-xs font-sans font-bold uppercase tracking-widest px-6 py-3.5 transition-colors cursor-pointer"
                      >
                        <FileText className="w-4 h-4" />
                        Preview CV Dossier
                      </button>
                      <a
                        href="/api/generate-cv-pdf"
                        download="Philip_Leakey_Okello_CV.pdf"
                        className="flex items-center justify-center gap-2 border border-navy-dark/20 dark:border-white/20 hover:border-gold-exec text-navy-dark dark:text-white text-xs font-sans font-bold uppercase tracking-widest px-6 py-3.5 transition-colors"
                      >
                        <Download className="w-4 h-4 text-gold-exec" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* ================= PAGE 7: CONTACT ================= */}
        {activePage === "contact" && (
          <motion.div
            key="contact-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <PageHeader
              label="OFFICIAL CONTACT & INQUIRIES"
              title="Official Communications & Chambers"
              subtitle="Direct connection with the Office of the Chief Executive Officer for board appointments, keynote speaking, and parastatal consulting."
              bgImage="/src/assets/images/philip_executive_desk_1790608609248.jpg"
              photoCaption="Office of the CEO • PSRA Executive Chambers"
              onNavigateHome={() => handleNavigate("home")}
            />

            {/* Verified Hotlines, phone calls, and direct contact form */}
            <Contact />

            <SectionSeparator />

            {/* Global Governance Diplomatic Outreach and Broadcast Translation Portal */}
            <OutreachPortal />
          </motion.div>
        )}

      </main>

      {/* Executive Footer */}
      <footer className="bg-[#09101d] text-white pt-20 pb-16 border-t border-gold-exec/20 print:hidden relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-exec/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-dark/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
            
            {/* Column 1: Brand & Logo */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-3">
                <button
                  onClick={() => handleNavigate("home")}
                  className="font-signature text-3xl md:text-4xl text-gold-exec leading-none select-none pb-2 border-b border-gold-exec/15 inline-block text-left cursor-pointer"
                >
                  Philip Leakey Okello
                </button>
                <div className="text-[10px] font-mono tracking-[0.25em] text-white/50 uppercase font-bold">
                  MEMBER ICPAK (REG. 7183) • STATE REGULATOR
                </div>
              </div>
              <p className="text-xs font-sans text-slate-400 leading-relaxed max-w-sm">
                Chief Executive Officer, state parastatal administrator, and security policy architect. Philip champions unqualified audit registries, biometric civil databases, and living wage frameworks.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="https://www.linkedin.com/in/phillip-leakey/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-exec hover:border-gold-exec hover:bg-gold-exec/5 hover:scale-105 active:scale-95 transition-all duration-300"
                  aria-label="LinkedIn profile connection"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.facebook.com/spartacus.jamach" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-exec hover:border-gold-exec hover:bg-gold-exec/5 hover:scale-105 active:scale-95 transition-all duration-300"
                  aria-label="Facebook page connection"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: PAGES NAVIGATION */}
            <div className="lg:col-span-2 space-y-6">
              <h5 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gold-exec">
                PAGES
              </h5>
              <ul className="space-y-3 text-xs text-slate-400 font-sans font-medium">
                <li>
                  <button 
                    onClick={() => handleNavigate("home")}
                    className={`hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer ${
                      activePage === "home" ? "text-gold-exec font-bold" : ""
                    }`}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate("biography")}
                    className={`hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer ${
                      activePage === "biography" ? "text-gold-exec font-bold" : ""
                    }`}
                  >
                    Biography
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate("governance")}
                    className={`hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer ${
                      activePage === "governance" ? "text-gold-exec font-bold" : ""
                    }`}
                  >
                    Governance & Board
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate("policy")}
                    className={`hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer ${
                      activePage === "policy" ? "text-gold-exec font-bold" : ""
                    }`}
                  >
                    Policy Impact
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate("leadership")}
                    className={`hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer ${
                      activePage === "leadership" ? "text-gold-exec font-bold" : ""
                    }`}
                  >
                    Thought Leadership
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate("credentials")}
                    className={`hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer ${
                      activePage === "credentials" ? "text-gold-exec font-bold" : ""
                    }`}
                  >
                    Credentials
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate("contact")}
                    className={`hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer ${
                      activePage === "contact" ? "text-gold-exec font-bold" : ""
                    }`}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: QUICK LINKS & MEDIA (MODALS) */}
            <div className="lg:col-span-2 space-y-6">
              <h5 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gold-exec">
                MEDIA & BRIEFS
              </h5>
              <ul className="space-y-3.5 text-xs text-slate-400 font-sans font-medium">
                <li>
                  <button 
                    onClick={() => setActiveFooterModal("book-philip")}
                    className="hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer"
                  >
                    Book Philip
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveFooterModal("books")}
                    className="hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer"
                  >
                    Books & Monographs
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveFooterModal("podcasts")}
                    className="hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer"
                  >
                    Podcasts
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveFooterModal("press-room")}
                    className="hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer"
                  >
                    Press Room
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveFooterModal("articles")}
                    className="hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer"
                  >
                    Articles
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveFooterModal("toolkits")}
                    className="hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer"
                  >
                    Audit Toolkits
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveFooterModal("videos")}
                    className="hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer"
                  >
                    Videos
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: INFORMATION (MODALS) */}
            <div className="lg:col-span-2 space-y-6">
              <h5 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gold-exec">
                INFORMATION
              </h5>
              <ul className="space-y-3.5 text-xs text-slate-400 font-sans font-medium">
                <li>
                  <button 
                    onClick={() => setActiveFooterModal("privacy-policy")}
                    className="hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer text-2xs uppercase tracking-wider font-mono"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveFooterModal("cookie-policy")}
                    className="hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer text-2xs uppercase tracking-wider font-mono"
                  >
                    Cookie Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveFooterModal("terms")}
                    className="hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer text-2xs uppercase tracking-wider font-mono"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveFooterModal("return-refund")}
                    className="hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer text-2xs uppercase tracking-wider font-mono"
                  >
                    Return & Refund Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveFooterModal("media-release")}
                    className="hover:text-gold-exec text-left transition-all hover:translate-x-1 flex items-center gap-1.5 cursor-pointer text-2xs uppercase tracking-wider font-mono"
                  >
                    Media Release Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 5: CONTACT */}
            <div className="lg:col-span-2 space-y-6">
              <h5 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gold-exec">
                CONTACT
              </h5>
              <ul className="space-y-4 text-xs text-slate-400 font-mono">
                <li className="space-y-1">
                  <span className="block text-[9px] text-[#718096] uppercase tracking-wider">OFFICIAL INQUIRIES</span>
                  <a 
                    href="mailto:info@philipleakeyokello.com" 
                    className="hover:text-gold-exec transition-colors block font-semibold text-white tracking-wide"
                  >
                    info@philipleakeyokello.com
                  </a>
                </li>
                <li className="space-y-1">
                  <span className="block text-[9px] text-[#718096] uppercase tracking-wider">REGISTRY HOTLINE</span>
                  <a 
                    href="tel:+254726140245" 
                    className="hover:text-gold-exec transition-colors block font-semibold text-white tracking-wide"
                  >
                    +254 726 140 245
                  </a>
                </li>
                <li className="space-y-1">
                  <span className="block text-[9px] text-[#718096] uppercase tracking-wider">OFFICE CHAMBERS</span>
                  <span className="block text-slate-400 leading-normal text-2xs uppercase">
                    PSRA Executive Chambers,<br />Nairobi, Kenya
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Row: Copyright notices styled symmetrically */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            <span>
              © {new Date().getFullYear()} Philip Leakey Okello. All public sector resources and audits are validated under regional treasury protocols.
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Sovereign Registry Online
            </span>
          </div>

        </div>
      </footer>

      {/* Premium CV Overlay Layer */}
      <AnimatePresence>
        {isCvOpen && (
          <ExecutiveCv onClose={() => setIsCvOpen(false)} />
        )}
      </AnimatePresence>

      {/* Developer Export & Schema Guidelines drawer */}
      <AnimatePresence>
        {isExportDocsOpen && (
          <ExportDocs onClose={() => setIsExportDocsOpen(false)} />
        )}
      </AnimatePresence>

      {/* Interactive Footer Resource Modal */}
      <AnimatePresence>
        {activeFooterModal && (
          <FooterResourceModal 
            type={activeFooterModal} 
            onClose={() => setActiveFooterModal(null)} 
          />
        )}
      </AnimatePresence>

      {/* Discreet gold-accented Back to Top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-[999] p-3 rounded-full bg-white dark:bg-[#0F2744] border-2 border-gold-exec text-gold-exec hover:bg-gold-exec hover:text-white dark:hover:bg-gold-exec dark:hover:text-navy-dark shadow-[0_4px_20px_rgba(201,162,39,0.3)] transition-all duration-300 cursor-pointer focus:outline-none"
            aria-label="Back to Top"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
