/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Linkedin, Facebook, ArrowUp } from "lucide-react";
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
import MediaGallery from "./components/MediaGallery";
import Contact from "./components/Contact";
import OutreachPortal from "./components/OutreachPortal";
import ExecutiveCv from "./components/ExecutiveCv";
import ExportDocs from "./components/ExportDocs";
import NewsletterBrief from "./components/NewsletterBrief";
import FooterResourceModal, { FooterModalType } from "./components/FooterResourceModal";

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

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isExportDocsOpen, setIsExportDocsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeFooterModal, setActiveFooterModal] = useState<FooterModalType>(null);

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
    <div className="min-h-screen bg-white dark:bg-[#07121f] text-charcoal-wood dark:text-slate-100 transition-colors duration-300 relative">
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
      />

      {/* Main Editorial Canvas */}
      <main id="executive-canvas" className="overflow-x-hidden">
        {/* Hero Segment */}
        <Hero onOpenCv={() => setIsCvOpen(true)} />

        <SectionSeparator />

        {/* Vision, Mission, and Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <VisionMissionValues />
        </motion.div>

        <SectionSeparator />

        {/* Narrative Biography segment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <About />
        </motion.div>

        <SectionSeparator />

        {/* Interactive Achievements Counters in Slate-Gray background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Achievements />
        </motion.div>

        <SectionSeparator />

        {/* Career Progressive Timeline with specific impacts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Timeline />
        </motion.div>

        <SectionSeparator />

        {/* Boardroom-Style Governance panel in Navy and Gold */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Governance />
        </motion.div>

        <SectionSeparator />

        {/* Editorial Grand Philosophy Quote segment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Philosophy />
        </motion.div>

        <SectionSeparator />

        {/* Legislation, reform, and inter-agency structures */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <PolicyImpact />
        </motion.div>

        <SectionSeparator />

        {/* Thought Leadership publications registry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Publications />
        </motion.div>

        <SectionSeparator />

        {/* Academic Profile & Affiliations certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Education />
        </motion.div>

        <SectionSeparator />

        {/* Speaking engagements & curated professional event moments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <MediaGallery />
        </motion.div>

        <SectionSeparator />

        {/* Global Governance Diplomatic Outreach and Broadcast Translation Portal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <OutreachPortal />
        </motion.div>

        <SectionSeparator />

        {/* Verified Hotlines, phone calls, and direct prefilled handshakes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Contact />
        </motion.div>

        <SectionSeparator />

        {/* Elegant Executive Newsletter Briefing signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <NewsletterBrief />
        </motion.div>
      </main>

      {/* Executive Footer (Vusi Thembekwayo Editorial Format) */}
      <footer className="bg-[#09101d] text-white pt-24 pb-16 border-t border-gold-exec/20 print:hidden relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-exec/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-dark/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
            
            {/* Column 1: Brand & Logo (Signature style) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-3">
                <div className="font-signature text-3xl md:text-4xl text-gold-exec leading-none select-none pb-2 border-b border-gold-exec/15 inline-block">
                  Philip Leakey Okello
                </div>
                <div className="text-[10px] font-mono tracking-[0.25em] text-white/50 uppercase font-bold">
                  MEMBER ACIC • EXECUTIVE COMPLIANCE
                </div>
              </div>
              <p className="text-xs font-sans text-slate-400 leading-relaxed max-w-sm">
                An elite state-level administrator, corporate auditor, and security policy architect. Philip serves as an expert on parastatal boards, championing unqualified audit registries, biometric civil databases, and living wage frameworks.
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

            {/* Column 2: QUICK LINKS */}
            <div className="lg:col-span-2 space-y-6">
              <h5 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gold-exec">
                QUICK LINKS
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
                    Books
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
              </ul>
            </div>

            {/* Column 3: RESOURCES */}
            <div className="lg:col-span-2 space-y-6">
              <h5 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gold-exec">
                RESOURCES
              </h5>
              <ul className="space-y-3.5 text-xs text-slate-400 font-sans font-medium">
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
                    Toolkits
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

            {/* Column 4: INFORMATION */}
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

