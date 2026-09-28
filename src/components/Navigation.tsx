/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Phone, Sun, Moon, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface NavigationProps {
  onNextJsDocOpen: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ 
  onNextJsDocOpen, 
  isDarkMode = false, 
  onToggleDarkMode,
  activePage,
  onNavigate
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    if (!isLangOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const container = document.getElementById("lang-switcher-container");
      if (container && !container.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isLangOpen]);

  const navLinks = [
    { id: "home", label: language === "sw" ? "Mwanzo" : language === "fr" ? "Accueil" : "Home" },
    { id: "biography", label: t("biography") },
    { id: "governance", label: language === "sw" ? "Utawala & Bodi" : language === "fr" ? "Gouvernance & Conseil" : "Governance & Board" },
    { id: "policy", label: t("policy") },
    { id: "leadership", label: language === "sw" ? "Uongozi wa Kifikra" : language === "fr" ? "Leadership Pensé" : "Thought Leadership" },
    { id: "credentials", label: t("credentials") },
  ];

  return (
    <>
      <header
        id="main-nav-container"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || activePage !== "home"
            ? "bg-white/95 dark:bg-[#07121f]/95 backdrop-blur-md border-b border-navy-dark/10 dark:border-white/10 shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Executive Signature Logo */}
          <button
            onClick={() => onNavigate("home")}
            id="nav-logo-link"
            className={`font-signature text-2xl md:text-3xl leading-none select-none pb-1 border-b border-gold-exec/20 active:scale-[0.98] transition-all duration-300 whitespace-nowrap cursor-pointer text-left ${
              isScrolled || activePage !== "home"
                ? "text-navy-dark dark:text-gold-exec hover:text-gold-exec" 
                : "text-gold-exec hover:text-[#F3D778]"
            }`}
          >
            Philip L. Okello
          </button>

          {/* Desktop Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`relative text-xs font-sans font-semibold tracking-widest uppercase transition-all duration-300 group py-1 cursor-pointer ${
                    isActive
                      ? "text-gold-exec font-bold"
                      : isScrolled || activePage !== "home"
                      ? "text-navy-dark/80 dark:text-white/80 hover:text-gold-exec dark:hover:text-gold-exec" 
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-gold-exec transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} 
                  />
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA / Tech Doc Badge Trigger */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Elegant Theme Toggle */}
            <button
              onClick={onToggleDarkMode}
              className={`p-2 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center ${
                isScrolled || activePage !== "home"
                  ? "text-navy-dark dark:text-white hover:text-gold-exec"
                  : "text-white hover:text-gold-exec"
              }`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-gold-exec" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Selector Dropdown */}
            <div className="relative inline-block text-left" id="lang-switcher-container">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1.5 text-[11px] font-sans tracking-widest font-bold uppercase border px-2.5 py-1.5 transition-all duration-300 cursor-pointer ${
                  isScrolled || activePage !== "home"
                    ? "border-navy-dark/15 dark:border-white/20 text-navy-dark/80 dark:text-white hover:border-gold-exec hover:text-gold-exec"
                    : "border-white/20 text-white/90 hover:border-gold-exec hover:text-gold-exec"
                }`}
                aria-label="Change Language"
                aria-expanded={isLangOpen}
              >
                <Globe className="w-3.5 h-3.5 text-gold-exec" />
                <span>{language.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? "rotate-180" : "rotate-0"}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-32 origin-top-right bg-white dark:bg-[#0c1e33] border border-navy-dark/10 dark:border-white/10 shadow-lg ring-1 ring-black/5 focus:outline-none z-[100] p-1.5"
                  >
                    <div className="flex flex-col gap-0.5">
                      {[
                        { code: "en" as const, label: "English" },
                        { code: "sw" as const, label: "Kiswahili" },
                        { code: "fr" as const, label: "Français" },
                      ].map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 text-[11px] font-sans font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                            language === lang.code
                              ? "bg-gold-exec/10 text-gold-exec"
                              : "text-navy-dark dark:text-white/80 hover:bg-slate-gray/10 dark:hover:bg-white/5 hover:text-gold-exec"
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => onNavigate("contact")}
              className={`group flex items-center gap-2 text-xs font-sans tracking-widest uppercase font-semibold px-5 py-2.5 transition-all duration-300 cursor-pointer ${
                activePage === "contact"
                  ? "bg-gold-exec text-navy-dark"
                  : isScrolled || activePage !== "home"
                  ? "bg-navy-dark dark:bg-gold-exec hover:bg-gold-exec dark:hover:bg-gold-exec/80 text-white dark:text-navy-dark"
                  : "bg-gold-exec hover:bg-white hover:text-navy-dark text-navy-dark"
              }`}
            >
              {t("contact")}
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Action */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Elegant Mobile Theme Toggle */}
            <button
              onClick={onToggleDarkMode}
              className={`p-1.5 transition-all duration-300 flex items-center justify-center ${
                isScrolled || activePage !== "home" ? "text-navy-dark dark:text-white" : "text-white"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-gold-exec" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="mobile-nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors focus:outline-none cursor-pointer ${
                isScrolled || activePage !== "home" ? "text-navy-dark dark:text-white hover:text-gold-exec" : "text-white hover:text-gold-exec"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#07121f] pt-24 px-8 flex flex-col justify-between pb-12 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => {
                const isActive = activePage === link.id;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`font-serif text-2xl font-semibold text-left transition-colors py-1 cursor-pointer flex items-center justify-between ${
                      isActive 
                        ? "text-gold-exec font-bold"
                        : "text-navy-dark dark:text-white hover:text-gold-exec dark:hover:text-gold-exec"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-gold-exec" />}
                  </motion.button>
                );
              })}
            </div>

            <div className="flex flex-col gap-5 border-t border-navy-dark/10 dark:border-white/10 pt-6 mt-8">
              {/* Mobile Language Switcher Row */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-mono tracking-[0.2em] font-bold text-navy-dark/40 dark:text-white/40 uppercase">
                  Language / Lugha / Langue
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { code: "en" as const, label: "EN" },
                    { code: "sw" as const, label: "SW" },
                    { code: "fr" as const, label: "FR" },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                      }}
                      className={`py-2 text-[10px] font-mono font-bold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                        language === lang.code
                          ? "border-gold-exec bg-gold-exec/10 text-gold-exec font-bold"
                          : "border-navy-dark/10 dark:border-white/10 text-navy-dark/60 dark:text-white/60 hover:text-gold-exec hover:border-gold-exec/40"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-mono tracking-[0.2em] font-bold text-navy-dark/40 dark:text-white/40 uppercase">
                  {t("directLines")}
                </span>
                <a
                  href="tel:+254726140245"
                  className="flex items-center gap-3 text-sm font-medium text-navy-dark dark:text-white hover:text-gold-exec transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-exec" />
                  +254 726 140 245
                </a>
              </div>

              <button
                onClick={() => {
                  onNavigate("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-navy-dark dark:bg-gold-exec dark:text-navy-dark hover:bg-gold-exec text-white text-xs font-sans tracking-widest uppercase font-medium py-3.5 transition-colors cursor-pointer"
              >
                {t("requestConsultation")}
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
