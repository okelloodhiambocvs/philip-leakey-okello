/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, Calendar, BookOpen, Podcast, Newspaper, FileText, CheckSquare, 
  HelpCircle, Shield, AlertTriangle, Video, Send, Check, Sparkles, Download, Play, MessageSquare, Clipboard, RotateCcw
} from "lucide-react";

export type FooterModalType = 
  | "book-philip" | "books" | "podcasts" | "press-room" 
  | "articles" | "toolkits" | "videos" 
  | "privacy-policy" | "cookie-policy" | "terms" | "return-refund" | "media-release"
  | null;

interface FooterResourceModalProps {
  type: FooterModalType;
  onClose: () => void;
}

export default function FooterResourceModal({ type, onClose }: FooterResourceModalProps) {
  const [activeTab, setActiveTab] = useState(type);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    org: "",
    email: "",
    date: "",
    scope: "Keynote Address",
    budget: "KSh 500k - 1.5M",
    description: ""
  });

  // Checklist states for toolkits
  const [auditChecklist, setAuditChecklist] = useState({
    pfmRegs: false,
    treasuryCirculars: false,
    unqualifiedLedger: false,
    payrollAudited: false,
    assetRegisterUpdated: false,
    boardCharterVetted: false,
  });

  // Security calculator state
  const [securityCal, setSecurityCal] = useState({
    totalGuards: "50",
    hasTrainingCert: "yes",
    biometricSync: "no",
    minimumWageCompliant: "no"
  });

  useEffect(() => {
    if (type) {
      setActiveTab(type);
      setBookingSubmitted(false);
    }
  }, [type]);

  if (!type || !activeTab) return null;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const calculateRiskIndex = () => {
    let score = 100;
    const guards = parseInt(securityCal.totalGuards) || 0;
    if (guards > 200) score -= 15;
    if (securityCal.hasTrainingCert === "no") score -= 35;
    if (securityCal.biometricSync === "no") score -= 25;
    if (securityCal.minimumWageCompliant === "no") score -= 25;
    return score;
  };

  const getRiskLabel = (score: number) => {
    if (score >= 80) return { label: "EXCELLENT COMPLIANCE", color: "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/5" };
    if (score >= 50) return { label: "MODERATE RISK - REMEDIATION REQUIRED", color: "text-amber-600 dark:text-amber-400 border-amber-500/20 bg-amber-500/5" };
    return { label: "CRITICAL REGULATORY THREAT - ACTION MANDATORY", color: "text-rose-600 dark:text-rose-400 border-rose-500/20 bg-rose-500/5" };
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 print:hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-slate-gray dark:bg-[#07121f] border border-gold-exec/30 dark:border-white/10 w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl"
      >
        {/* Dynamic Editorial Header */}
        <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-navy-dark/15 dark:border-white/10 bg-white dark:bg-[#0c1a2c]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-exec animate-pulse" />
            <div>
              <span className="block text-[10px] font-mono tracking-[0.25em] text-gold-exec font-bold uppercase">
                EXECUTIVE RESOURCE PORTAL & PUBLIC OFFICE
              </span>
              <h4 className="font-serif text-lg font-bold text-navy-dark dark:text-white capitalize">
                {activeTab.replace("-", " ")}
              </h4>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 border border-navy-dark/10 dark:border-white/10 text-navy-dark/70 dark:text-white/60 hover:text-gold-exec dark:hover:text-gold-exec hover:border-gold-exec dark:hover:border-gold-exec cursor-pointer transition-all"
            aria-label="Close resource modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Main Layout: Internal Navigation on Side + Detailed Content Main Panel */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Internal Sidebar */}
          <div className="w-full md:w-64 bg-white/70 dark:bg-[#0f2744]/20 border-r border-[#000000]/5 dark:border-white/5 overflow-y-auto p-4 flex flex-col space-y-1.5 shrink-0">
            <span className="block text-[9px] font-mono font-bold text-navy-dark/50 dark:text-slate-gray/50 uppercase tracking-widest pl-2 mb-2">
              Quick Navigation Links
            </span>

            <button 
              onClick={() => { setActiveTab("book-philip"); setBookingSubmitted(false); }}
              className={`w-full py-2 px-3 text-left text-xs font-sans font-medium flex items-center gap-2.5 transition-all rounded-none border-l-2 cursor-pointer ${
                activeTab === "book-philip" 
                  ? "border-gold-exec bg-gold-exec/10 text-navy-dark dark:text-gold-exec font-bold pl-4" 
                  : "border-transparent text-navy-dark/80 dark:text-slate-100/70 hover:text-gold-exec hover:bg-white/40 dark:hover:bg-[#0f2744]/30"
              }`}
            >
              <Calendar className="w-4 h-4" /> Book Philip Leakey
            </button>

            <button 
              onClick={() => setActiveTab("books")}
              className={`w-full py-2 px-3 text-left text-xs font-sans font-medium flex items-center gap-2.5 transition-all rounded-none border-l-2 cursor-pointer ${
                activeTab === "books" 
                  ? "border-gold-exec bg-gold-exec/10 text-navy-dark dark:text-gold-exec font-bold pl-4" 
                  : "border-transparent text-navy-dark/80 dark:text-slate-100/70 hover:text-gold-exec hover:bg-white/40 dark:hover:bg-[#0f2744]/30"
              }`}
            >
              <BookOpen className="w-4 h-4" /> Books & Manuscripts
            </button>

            <button 
              onClick={() => setActiveTab("podcasts")}
              className={`w-full py-2 px-3 text-left text-xs font-sans font-medium flex items-center gap-2.5 transition-all rounded-none border-l-2 cursor-pointer ${
                activeTab === "podcasts" 
                  ? "border-gold-exec bg-gold-exec/10 text-navy-dark dark:text-gold-exec font-bold pl-4" 
                  : "border-transparent text-navy-dark/80 dark:text-slate-100/70 hover:text-gold-exec hover:bg-white/40 dark:hover:bg-[#0f2744]/30"
              }`}
            >
              <Podcast className="w-4 h-4" /> Advisory Podcasts
            </button>

            <button 
              onClick={() => setActiveTab("press-room")}
              className={`w-full py-2 px-3 text-left text-xs font-sans font-medium flex items-center gap-2.5 transition-all rounded-none border-l-2 cursor-pointer ${
                activeTab === "press-room" 
                  ? "border-gold-exec bg-gold-exec/10 text-navy-dark dark:text-gold-exec font-bold pl-4" 
                  : "border-transparent text-navy-dark/80 dark:text-slate-100/70 hover:text-gold-exec hover:bg-white/40 dark:hover:bg-[#0f2744]/30"
              }`}
            >
              <Newspaper className="w-4 h-4" /> Media & Press Room
            </button>

            <div className="h-[1px] bg-navy-dark/10 dark:bg-white/5 my-3" />

            <span className="block text-[9px] font-mono font-bold text-navy-dark/50 dark:text-slate-gray/50 uppercase tracking-widest pl-2 mb-2">
              Corporate Resources
            </span>

            <button 
              onClick={() => setActiveTab("articles")}
              className={`w-full py-2 px-3 text-left text-xs font-sans font-medium flex items-center gap-2.5 transition-all rounded-none border-l-2 cursor-pointer ${
                activeTab === "articles" 
                  ? "border-gold-exec bg-gold-exec/10 text-navy-dark dark:text-gold-exec font-bold pl-4" 
                  : "border-transparent text-navy-dark/80 dark:text-slate-100/70 hover:text-gold-exec hover:bg-white/40 dark:hover:bg-[#0f2744]/30"
              }`}
            >
              <FileText className="w-4 h-4" /> Long-form Articles
            </button>

            <button 
              onClick={() => setActiveTab("toolkits")}
              className={`w-full py-2 px-3 text-left text-xs font-sans font-medium flex items-center gap-2.5 transition-all rounded-none border-l-2 cursor-pointer ${
                activeTab === "toolkits" 
                  ? "border-gold-exec bg-gold-exec/10 text-navy-dark dark:text-gold-exec font-bold pl-4" 
                  : "border-transparent text-navy-dark/80 dark:text-slate-100/70 hover:text-gold-exec hover:bg-white/40 dark:hover:bg-[#0f2744]/30"
              }`}
            >
              <CheckSquare className="w-4 h-4" /> Auditing Toolkits
            </button>

            <button 
              onClick={() => setActiveTab("videos")}
              className={`w-full py-2 px-3 text-left text-xs font-sans font-medium flex items-center gap-2.5 transition-all rounded-none border-l-2 cursor-pointer ${
                activeTab === "videos" 
                  ? "border-gold-exec bg-gold-exec/10 text-navy-dark dark:text-gold-exec font-bold pl-4" 
                  : "border-transparent text-navy-dark/80 dark:text-slate-100/70 hover:text-gold-exec hover:bg-white/40 dark:hover:bg-[#0f2744]/30"
              }`}
            >
              <Video className="w-4 h-4" /> Governance Videos
            </button>

            <div className="h-[1px] bg-navy-dark/10 dark:bg-white/5 my-3" />

            <span className="block text-[9px] font-mono font-bold text-navy-dark/50 dark:text-slate-gray/50 uppercase tracking-widest pl-2 mb-2">
              Legal Information
            </span>

            <button 
              onClick={() => setActiveTab("privacy-policy")}
              className={`w-full py-2 px-3 text-left text-2xs font-mono uppercase tracking-wider transition-all rounded-none border-l-2 cursor-pointer ${
                activeTab === "privacy-policy" 
                  ? "border-gold-exec bg-gold-exec/10 text-navy-dark dark:text-gold-exec font-bold pl-4" 
                  : "border-transparent text-navy-dark/80 dark:text-slate-100/70 hover:text-gold-exec hover:bg-white/40 dark:hover:bg-[#0f2744]/30"
              }`}
            >
              <Shield className="w-3.5 h-3.5" /> Privacy Policy
            </button>

            <button 
              onClick={() => setActiveTab("cookie-policy")}
              className={`w-full py-2 px-3 text-left text-2xs font-mono uppercase tracking-wider transition-all rounded-none border-l-2 cursor-pointer ${
                activeTab === "cookie-policy" 
                  ? "border-gold-exec bg-gold-exec/10 text-navy-dark dark:text-gold-exec font-bold pl-4" 
                  : "border-transparent text-navy-dark/80 dark:text-slate-100/70 hover:text-gold-exec hover:bg-white/40 dark:hover:bg-[#0f2744]/30"
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" /> Cookie Policy
            </button>

            <button 
              onClick={() => setActiveTab("terms")}
              className={`w-full py-2 px-3 text-left text-2xs font-mono uppercase tracking-wider transition-all rounded-none border-l-2 cursor-pointer ${
                activeTab === "terms" 
                  ? "border-gold-exec bg-gold-exec/10 text-navy-dark dark:text-gold-exec font-bold pl-4" 
                  : "border-transparent text-navy-dark/80 dark:text-slate-100/70 hover:text-gold-exec hover:bg-white/40 dark:hover:bg-[#0f2744]/30"
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" /> Terms & Conditions
            </button>

            <button 
              onClick={() => setActiveTab("return-refund")}
              className={`w-full py-2 px-3 text-left text-2xs font-mono uppercase tracking-wider transition-all rounded-none border-l-2 cursor-pointer ${
                activeTab === "return-refund" 
                  ? "border-gold-exec bg-gold-exec/10 text-navy-dark dark:text-gold-exec font-bold pl-4" 
                  : "border-transparent text-navy-dark/80 dark:text-slate-100/70 hover:text-gold-exec hover:bg-white/40 dark:hover:bg-[#0f2744]/30"
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" /> Return & Refund Policy
            </button>

            <button 
              onClick={() => setActiveTab("media-release")}
              className={`w-full py-2 px-3 text-left text-2xs font-mono uppercase tracking-wider transition-all rounded-none border-l-2 cursor-pointer ${
                activeTab === "media-release" 
                  ? "border-gold-exec bg-gold-exec/10 text-navy-dark dark:text-gold-exec font-bold pl-4" 
                  : "border-transparent text-navy-dark/80 dark:text-slate-100/70 hover:text-gold-exec hover:bg-white/40 dark:hover:bg-[#0f2744]/30"
              }`}
            >
              <FileText className="w-3.5 h-3.5" /> Media Release Policy
            </button>
          </div>

          {/* Main Panel Content (Scrollable with Wordy Prose) */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-100 dark:bg-[#08121f] text-navy-dark dark:text-slate-200">
            
            <AnimatePresence mode="wait">
              
              {/* BOOK PHILIP TAB */}
              {activeTab === "book-philip" && (
                <motion.div 
                  key="book-philip"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-l-4 border-gold-exec pl-4">
                    <span className="text-[10px] font-mono text-gold-exec uppercase tracking-widest block font-bold">STATE REFORM & EXECUTIVE KEYNOTES</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold dark:text-white mt-1">Book Philip Leakey Okello</h3>
                  </div>

                  <p className="text-xs leading-relaxed text-charcoal-wood/80 dark:text-slate-300">
                    If you are organizing an international summit on regulatory harmonization, a parastatal board retreat, or a security modernization roundtable within sub-Saharan Africa, you can formally request a presentation, keynote address, or administrative consulting residency from Philip Leakey Okello.
                  </p>

                  {bookingSubmitted ? (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-emerald-500/5 border border-emerald-500/20 p-6 text-center space-y-4"
                    >
                      <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 flex items-center justify-center rounded-full mx-auto">
                        <Check className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">INQUIRY DISPATCHED</h4>
                        <p className="text-xs text-charcoal-wood/70 dark:text-slate-400 mt-1">
                          The administrative secretary has logged your booking reservation under docket ID: <strong className="text-navy-dark dark:text-white">OKR-{Math.floor(Math.random() * 90000) + 10000}</strong>. A response will be dispatched within 48 state hours.
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleBookingSubmit} className="space-y-4 border border-navy-dark/5 dark:border-white/5 bg-white dark:bg-[#0c1a2c]/50 p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] font-mono text-navy-dark/70 dark:text-white/60 uppercase tracking-widest mb-1.5 font-bold">Your Name / Agent</label>
                          <input 
                            type="text" 
                            required
                            value={bookingForm.name}
                            onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                            placeholder="DIPLOMATIC ENVOY" 
                            className="w-full bg-slate-100 dark:bg-[#07121f] text-xs font-mono p-3 border border-navy-dark/10 dark:border-white/10 uppercase tracking-widest focus:outline-none focus:border-gold-exec"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-mono text-navy-dark/70 dark:text-white/60 uppercase tracking-widest mb-1.5 font-bold">Institution / Corporate Body</label>
                          <input 
                            type="text" 
                            required
                            value={bookingForm.org}
                            onChange={(e) => setBookingForm({...bookingForm, org: e.target.value})}
                            placeholder="STATE REFORM MINISTRY" 
                            className="w-full bg-slate-100 dark:bg-[#07121f] text-xs font-mono p-3 border border-navy-dark/10 dark:border-white/10 uppercase tracking-widest focus:outline-none focus:border-gold-exec"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] font-mono text-navy-dark/70 dark:text-white/60 uppercase tracking-widest mb-1.5 font-bold">Official Registry Contact Email</label>
                          <input 
                            type="email" 
                            required
                            value={bookingForm.email}
                            onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                            placeholder="SECRETARY@ORGANIZATION.GOV" 
                            className="w-full bg-slate-100 dark:bg-[#07121f] text-xs font-mono p-3 border border-navy-dark/10 dark:border-white/10 uppercase tracking-widest focus:outline-none focus:border-gold-exec"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-mono text-navy-dark/70 dark:text-white/60 uppercase tracking-widest mb-1.5 font-bold">Proposed Calendar Date</label>
                          <input 
                            type="date" 
                            required
                            value={bookingForm.date}
                            onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                            className="w-full bg-slate-100 dark:bg-[#07121f] text-xs font-mono p-3 border border-navy-dark/10 dark:border-white/10 focus:outline-none focus:border-gold-exec"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] font-mono text-navy-dark/70 dark:text-white/60 uppercase tracking-widest mb-1.5 font-bold">Scope of Engagement</label>
                          <select 
                            value={bookingForm.scope}
                            onChange={(e) => setBookingForm({...bookingForm, scope: e.target.value})}
                            className="w-full bg-slate-100 dark:bg-[#07121f] text-xs font-mono p-3 border border-navy-dark/10 dark:border-white/10 text-navy-dark dark:text-white focus:outline-none focus:border-gold-exec"
                          >
                            <option>Keynote Address</option>
                            <option>Audit Advisory Residency</option>
                            <option>Parastatal Structural Overhaul</option>
                            <option>Private Security Taskforce Panel</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[9px] font-mono text-navy-dark/70 dark:text-white/60 uppercase tracking-widest mb-1.5 font-bold">Proposed Honorarium Range</label>
                          <select 
                            value={bookingForm.budget}
                            onChange={(e) => setBookingForm({...bookingForm, budget: e.target.value})}
                            className="w-full bg-slate-100 dark:bg-[#07121f] text-xs font-mono p-3 border border-navy-dark/10 dark:border-white/10 text-navy-dark dark:text-white focus:outline-none focus:border-gold-exec"
                          >
                            <option>KSh 500k - 1.5M</option>
                            <option>KSh 1.5M - 3.0M</option>
                            <option>USD 25,000+</option>
                            <option>Waived (State Bilateral Mission)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[9px] font-mono text-navy-dark/70 dark:text-white/60 uppercase tracking-widest mb-1.5 font-bold">Detailed Intent Description</label>
                        <textarea 
                          rows={3}
                          required
                          value={bookingForm.description}
                          onChange={(e) => setBookingForm({...bookingForm, description: e.target.value})}
                          placeholder="OUTLINE THE STRATEGIC VALUE OF THE ENGAGEMENT FOR THE GOVERNED MASSES AND EXECUTIVE OPERATORS..."
                          className="w-full bg-slate-100 dark:bg-[#07121f] text-xs font-sans p-3 border border-navy-dark/10 dark:border-white/10 focus:outline-none focus:border-gold-exec resize-none"
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-navy-dark hover:bg-gold-exec dark:bg-gold-exec dark:hover:bg-gold-exec/80 text-white dark:text-navy-dark py-3 text-xs font-sans font-bold uppercase tracking-widest cursor-pointer transition-all flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" /> Dispatch Official Request
                      </button>
                    </form>
                  )}
                </motion.div>
              )}

              {/* BOOKS TAB */}
              {activeTab === "books" && (
                <motion.div 
                  key="books"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-l-4 border-gold-exec pl-4">
                    <span className="text-[10px] font-mono text-gold-exec uppercase tracking-widest block font-bold">LITERARY COMPLIANCE ARTIFACTS</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold dark:text-white mt-1">Sovereign Literature & Monographs</h3>
                  </div>

                  <p className="text-xs leading-relaxed text-charcoal-wood/80 dark:text-slate-300">
                    A collection of high-caliber published books and legislative analyses authored by Philip Leakey Okello, documenting the structural modernization of East African sovereign registries, regulatory mechanics, and public treasury oversight.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    
                    {/* Book 1 */}
                    <div className="bg-white dark:bg-[#0c1a2c] p-6 border border-navy-dark/10 dark:border-white/5 space-y-4 flex flex-col justify-between">
                      <div>
                        <div className="w-full h-48 bg-slate-100 dark:bg-[#07121f] flex flex-col items-center justify-center border border-dashed border-gold-exec/30 mb-4 p-4 text-center">
                          <span className="text-[9px] font-mono text-gold-exec uppercase font-bold tracking-widest">VOLUME I</span>
                          <h4 className="font-serif text-xs font-bold uppercase mt-2 text-navy-dark dark:text-slate-200">The Sovereign Vanguard</h4>
                          <span className="text-[8px] font-mono text-slate-gray/50 uppercase mt-4">University of Nairobi Press</span>
                        </div>
                        <h4 className="font-serif text-sm font-bold text-navy-dark dark:text-slate-200">The Sovereign Vanguard: Modernizing Public Security Corporations in East Africa</h4>
                        <p className="text-[11px] text-charcoal-wood/70 dark:text-slate-400 mt-2 leading-relaxed">
                          A 380-page masterclass on public sector transformations. Discusses details on regulatory frameworks, legal limits of delegating policing authority, and digital security integrations under parliamentary scrutiny.
                        </p>
                      </div>
                      <button className="w-full text-center py-2 bg-slate-100 hover:bg-gold-exec text-navy-dark dark:bg-[#07121f] dark:hover:bg-gold-exec hover:text-navy-dark text-[10px] font-mono uppercase tracking-widest border border-navy-dark/10 dark:border-white/10 transition-all font-bold">
                        Request Academic Abstract
                      </button>
                    </div>

                    {/* Book 2 */}
                    <div className="bg-white dark:bg-[#0c1a2c] p-6 border border-navy-dark/10 dark:border-white/5 space-y-4 flex flex-col justify-between">
                      <div>
                        <div className="w-full h-48 bg-slate-100 dark:bg-[#07121f] flex flex-col items-center justify-center border border-dashed border-gold-exec/30 mb-4 p-4 text-center">
                          <span className="text-[9px] font-mono text-gold-exec uppercase font-bold tracking-widest">VOLUME II</span>
                          <h4 className="font-serif text-xs font-bold uppercase mt-2 text-navy-dark dark:text-slate-200">Auditing the Treasury</h4>
                          <span className="text-[8px] font-mono text-slate-gray/50 uppercase mt-4">ICPAK Academic Editions</span>
                        </div>
                        <h4 className="font-serif text-sm font-bold text-navy-dark dark:text-slate-200">Auditing the Treasury: A Board Director's Manual on the PFM Act 2012</h4>
                        <p className="text-[11px] text-charcoal-wood/70 dark:text-slate-400 mt-2 leading-relaxed">
                          An authoritative guide for compliance officers, public accountants, and treasury audits. Breaks down legal and administrative procedures to secure clean audit certificates.
                        </p>
                      </div>
                      <button className="w-full text-center py-2 bg-slate-100 hover:bg-gold-exec text-navy-dark dark:bg-[#07121f] dark:hover:bg-gold-exec hover:text-navy-dark text-[10px] font-mono uppercase tracking-widest border border-navy-dark/10 dark:border-white/10 transition-all font-bold">
                        Request Academic Abstract
                      </button>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* PODCASTS TAB */}
              {activeTab === "podcasts" && (
                <motion.div 
                  key="podcasts"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-l-4 border-gold-exec pl-4">
                    <span className="text-[10px] font-mono text-gold-exec uppercase tracking-widest block font-bold">DIPLOMATIC TALKS & BROADCASTS</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold dark:text-white mt-1">The Governance Broadcast Podcasts</h3>
                  </div>

                  <p className="text-xs leading-relaxed text-charcoal-wood/80 dark:text-slate-300">
                    Listen to recorded podcasts, cabinet advisory files, panel reviews, and academic discussions led by Chief Executive Officer Philip Leakey Okello.
                  </p>

                  <div className="space-y-4 pt-2">
                    
                    {/* Ep 1 */}
                    <div className="bg-white dark:bg-[#0c1a2c] p-4 border border-navy-dark/10 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gold-exec/10 text-gold-exec flex items-center justify-center rounded-full shrink-0">
                          <Play className="w-4 h-4 fill-current" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-gold-exec uppercase font-bold tracking-widest">EPISODE 41 (May 2024 Vetting Special)</span>
                          <h4 className="font-serif text-xs font-bold text-navy-dark dark:text-slate-250 mt-0.5">Biometric Identification and National Security Integration limits</h4>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-slate-gray/60 dark:text-white/40 uppercase bg-slate-150 dark:bg-[#07121f] px-2 py-1">24 Mins</span>
                    </div>

                    {/* Ep 2 */}
                    <div className="bg-white dark:bg-[#0c1a2c] p-4 border border-navy-dark/10 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gold-exec/10 text-gold-exec flex items-center justify-center rounded-full shrink-0">
                          <Play className="w-4 h-4 fill-current" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-gold-exec uppercase font-bold tracking-widest">EPISODE 38 (January 2024 State Special)</span>
                          <h4 className="font-serif text-xs font-bold text-navy-dark dark:text-slate-250 mt-0.5">Enforcing Living Wage Protocols inside Competitive Security Corporates</h4>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-slate-gray/60 dark:text-white/40 uppercase bg-slate-150 dark:bg-[#07121f] px-2 py-1">42 Mins</span>
                    </div>

                    {/* Ep 3 */}
                    <div className="bg-white dark:bg-[#0c1a2c] p-4 border border-navy-dark/10 dark:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gold-exec/10 text-gold-exec flex items-center justify-center rounded-full shrink-0">
                          <Play className="w-4 h-4 fill-current" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-gold-exec uppercase font-bold tracking-widest">EPISODE 29 (September 2023 Executive Brief)</span>
                          <h4 className="font-serif text-xs font-bold text-navy-dark dark:text-slate-250 mt-0.5">Automating Public Treasuries under Section 41 of PFM Mandate</h4>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-slate-gray/60 dark:text-white/40 uppercase bg-slate-150 dark:bg-[#07121f] px-2 py-1">31 Mins</span>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* PRESS ROOM TAB */}
              {activeTab === "press-room" && (
                <motion.div 
                  key="press-room"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-l-4 border-gold-exec pl-4">
                    <span className="text-[10px] font-mono text-gold-exec uppercase tracking-widest block font-bold">GAZETTED PRESS COMMUNIQUE</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold dark:text-white mt-1">Press Room & Gazettes</h3>
                  </div>

                  <p className="text-xs leading-relaxed text-charcoal-wood/80 dark:text-slate-300">
                    Official press statements and municipal releases clarifying cabinet directives, training policies, minimum wage guidelines, and biometric registry compliance.
                  </p>

                  <div className="space-y-4 pt-2">
                    
                    {/* PR 1 */}
                    <div className="bg-white dark:bg-[#0c1a2c] p-6 border border-navy-dark/10 dark:border-white/5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-mono uppercase bg-gold-exec/10 text-gold-exec px-2 py-0.5 font-bold">STATE PARLIAMENTARY BRIEF</span>
                        <span className="text-[10px] font-mono text-slate-gray/50">12th May 2024</span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-navy-dark dark:text-slate-200">Clarification On The Licensing Vetting Schedule For International Joint Security Agencies</h4>
                      <p className="text-2xs text-charcoal-wood/70 dark:text-slate-400 leading-relaxed">
                        Following discussions in the House Committee on Security, the Chief Executive Officer directed that all security entities applying for foreign certification must compile full biometric registers and submit original tax compliance dockets by the end of current fiscal term.
                      </p>
                      <button className="text-[9px] font-mono text-gold-exec hover:underline flex items-center gap-1 cursor-pointer">
                        <Download className="w-3" /> Download Sovereign Press Document (PDF)
                      </button>
                    </div>

                    {/* PR 2 */}
                    <div className="bg-white dark:bg-[#0c1a2c] p-6 border border-navy-dark/10 dark:border-white/5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-mono uppercase bg-gold-exec/10 text-gold-exec px-2 py-0.5 font-bold">MINISTERIAL REGISTRY PRESS</span>
                        <span className="text-[10px] font-mono text-slate-gray/50">28th January 2024</span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-navy-dark dark:text-slate-200">Enforcement of Standard Minimum Wage Indices for Guards inside Vetted Registry</h4>
                      <p className="text-2xs text-charcoal-wood/70 dark:text-slate-400 leading-relaxed">
                        In coordination with the Ministry of Labor, the Private Security Regulatory Authority confirms that the mandated living index is non-negotiable. Auditing frameworks will audit corporate books quarterly starting from initial quarter of next fiscal year.
                      </p>
                      <button className="text-[9px] font-mono text-gold-exec hover:underline flex items-center gap-1 cursor-pointer">
                        <Download className="w-3" /> Download Sovereign Press Document (PDF)
                      </button>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* ARTICLES TAB */}
              {activeTab === "articles" && (
                <motion.div 
                  key="articles"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-l-4 border-gold-exec pl-4">
                    <span className="text-[10px] font-mono text-gold-exec uppercase tracking-widest block font-bold">LONG-FORM POLICY ANALYSIS</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold dark:text-white mt-1">Sovereign Governance Articles</h3>
                  </div>

                  <p className="text-xs leading-relaxed text-charcoal-wood/80 dark:text-slate-300">
                    Extensive scholastic articles and political economy examinations authored by Philip Leakey Okello, published across regional public administration journals.
                  </p>

                  <div className="space-y-6 pt-2">
                    <div className="p-6 bg-white dark:bg-[#0c1a2c] border border-navy-dark/10 dark:border-white/5">
                      <span className="text-[9px] font-mono text-gold-exec uppercase block font-bold">EAST AFRICAN JOURNAL OF STATE ADMINISTRATION</span>
                      <h4 className="font-serif text-base font-bold text-navy-dark dark:text-white mt-1">The Digital Paradigm of Sovereign Safety: Security registries and Corporate Modernization</h4>
                      <p className="text-xs text-charcoal-wood/70 dark:text-slate-400 mt-3 leading-relaxed">
                        This paper documents the design and execution of Kenya's biometric guard registration index under the PSRA. By integrating state-administered algorithms and biometric audits into physical safety networks, Philip argues that we can turn standard private contractors into helpful strategic partners during emergency crisis containment.
                      </p>
                      <p className="text-xs text-charcoal-wood/70 dark:text-slate-400 mt-2 leading-relaxed">
                        The systematic deployment of such integrated databases reduces regional security anomalies while keeping real-time legal supervision fully optimized.
                      </p>
                    </div>

                    <div className="p-6 bg-white dark:bg-[#0c1a2c] border border-navy-dark/10 dark:border-white/5">
                      <span className="text-[9px] font-mono text-gold-exec uppercase block font-bold">ICPAK GOVERNANCE DIGEST</span>
                      <h4 className="font-serif text-base font-bold text-navy-dark dark:text-white mt-1">PFM Act Compliance: Navigating Sovereign Accounting Risks in Parastatal Auditing</h4>
                      <p className="text-xs text-charcoal-wood/70 dark:text-slate-400 mt-3 leading-relaxed">
                        An examination of systematic risk vectors in sub-Saharan public treasury units. Recommeding structural approaches to digital cash auditing, invoice registries, and strategic allocation controls that satisfy aggressive oversight structures.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TOOLKITS TAB */}
              {activeTab === "toolkits" && (
                <motion.div 
                  key="toolkits"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-l-4 border-gold-exec pl-4">
                    <span className="text-[10px] font-mono text-gold-exec uppercase tracking-widest block font-bold">INTERACTIVE RISK ASSESSMENTS</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold dark:text-white mt-1">Executive Auditing Toolkits</h3>
                  </div>

                  <p className="text-xs leading-relaxed text-charcoal-wood/80 dark:text-slate-300">
                    Evaluate your public corporation's audit readiness or test your safety firm's licensing risk profile using Philip's interactive calculation systems.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    
                    {/* Toolkit 1: Checklist */}
                    <div className="bg-white dark:bg-[#0c1a2c] p-6 border border-navy-dark/10 dark:border-white/5 space-y-4">
                      <div>
                        <h4 className="font-serif text-sm font-bold text-navy-dark dark:text-slate-200 uppercase tracking-wide">Interactive Audit Readiness Checklist</h4>
                        <p className="text-2xs text-charcoal-wood/60 dark:text-slate-400 mt-1">Test your parastatal against state accounting protocols:</p>
                      </div>

                      <div className="space-y-2">
                        {Object.entries(auditChecklist).map(([key, value]) => (
                          <label key={key} className="flex items-start gap-2.5 p-2 bg-slate-50 dark:bg-[#07121f] rounded-none cursor-pointer hover:bg-gold-exec/5">
                            <input 
                              type="checkbox"
                              checked={value}
                              onChange={() => setAuditChecklist({ ...auditChecklist, [key]: !value })}
                              className="mt-0.5"
                            />
                            <span className="text-2xs font-mono uppercase tracking-wider text-charcoal-wood/80 dark:text-slate-300">
                              {key === "pfmRegs" && "PFM Regulations aligned"}
                              {key === "treasuryCirculars" && "Annual treasury circulars filed"}
                              {key === "unqualifiedLedger" && "Unqualified general ledger structure"}
                              {key === "payrollAudited" && "Biometric payroll registry verified"}
                              {key === "assetRegisterUpdated" && "Sovereign asset registry compiled"}
                              {key === "boardCharterVetted" && "Board charter approved by treasury"}
                            </span>
                          </label>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-navy-dark/5 dark:border-white/5 flex justify-between items-center text-2xs font-mono text-gold-exec">
                        <span>Items Checked: {Object.values(auditChecklist).filter(Boolean).length} / 6</span>
                        <span>
                          {Object.values(auditChecklist).filter(Boolean).length === 6 ? "🏆 READY FOR AUDIT" : "⚠️ UNPREPARED"}
                        </span>
                      </div>
                    </div>

                    {/* Toolkit 2: Calculator */}
                    <div className="bg-white dark:bg-[#0c1a2c] p-6 border border-navy-dark/10 dark:border-white/5 space-y-4">
                      <div>
                        <h4 className="font-serif text-sm font-bold text-navy-dark dark:text-slate-200 uppercase tracking-wide">Security Licensing Risk Index</h4>
                        <p className="text-2xs text-charcoal-wood/60 dark:text-slate-400 mt-1">Evaluate compliance indicators for private security providers:</p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-[9px] font-mono text-navy-dark/70 dark:text-white/60 uppercase tracking-widest mb-1 font-bold">Total Vetted Guards</label>
                          <input 
                            type="number"
                            value={securityCal.totalGuards}
                            onChange={(e) => setSecurityCal({ ...securityCal, totalGuards: e.target.value })}
                            className="w-full bg-slate-100 dark:bg-[#07121f] text-xs font-mono p-2 border border-navy-dark/10 dark:border-white/10 text-navy-dark dark:text-white"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <div>
                            <label className="block text-[8px] font-mono text-navy-dark/70 dark:text-white/60 uppercase tracking-widest mb-1 font-bold">Vetted Curriculum</label>
                            <select 
                              value={securityCal.hasTrainingCert}
                              onChange={(e) => setSecurityCal({ ...securityCal, hasTrainingCert: e.target.value })}
                              className="w-full bg-slate-100 dark:bg-[#07121f] text-xs font-mono p-2 border border-navy-dark/10 dark:border-white/10 text-navy-dark dark:text-white"
                            >
                              <option value="yes">YES</option>
                              <option value="no">NO</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[8px] font-mono text-navy-dark/70 dark:text-white/60 uppercase tracking-widest mb-1 font-bold">Biometric Sync</label>
                            <select 
                              value={securityCal.biometricSync}
                              onChange={(e) => setSecurityCal({ ...securityCal, biometricSync: e.target.value })}
                              className="w-full bg-slate-100 dark:bg-[#07121f] text-xs font-mono p-2 border border-navy-dark/10 dark:border-white/10 text-navy-dark dark:text-white"
                            >
                              <option value="yes">YES</option>
                              <option value="no">NO</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[8px] font-mono text-navy-dark/70 dark:text-white/60 uppercase tracking-widest mb-1 font-bold">Wage Compliant</label>
                            <select 
                              value={securityCal.minimumWageCompliant}
                              onChange={(e) => setSecurityCal({ ...securityCal, minimumWageCompliant: e.target.value })}
                              className="w-full bg-slate-100 dark:bg-[#07121f] text-xs font-mono p-2 border border-navy-dark/10 dark:border-white/10 text-navy-dark dark:text-white"
                            >
                              <option value="yes">YES</option>
                              <option value="no">NO</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Display Score */}
                      {(() => {
                        const score = calculateRiskIndex();
                        const risk = getRiskLabel(score);
                        return (
                          <div className={`p-4 border ${risk.color} text-center space-y-1`}>
                            <span className="block text-[9px] font-mono uppercase tracking-widest font-bold">Compliance Index Score</span>
                            <span className="block text-xl font-bold font-mono">{score} / 100</span>
                            <span className="block text-[8px] font-mono uppercase tracking-widest font-bold">{risk.label}</span>
                          </div>
                        );
                      })()}
                    </div>

                  </div>
                </motion.div>
              )}

              {/* VIDEOS TAB */}
              {activeTab === "videos" && (
                <motion.div 
                  key="videos"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-l-4 border-gold-exec pl-4">
                    <span className="text-[10px] font-mono text-gold-exec uppercase tracking-widest block font-bold">SPEECHES & BROADCAST KEYNOTES</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold dark:text-white mt-1">Keynote Broadcast Videos</h3>
                  </div>

                  <p className="text-xs leading-relaxed text-charcoal-wood/80 dark:text-slate-300">
                    Watch highlights of Philip Leakey Okello's state press conferences, television commentary, and governance panels.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    
                    {/* Vid 1 */}
                    <div className="bg-white dark:bg-[#0c1a2c] border border-navy-dark/10 dark:border-white/5 overflow-hidden group">
                      <div className="w-full h-44 bg-slate-250 dark:bg-[#07121f] flex flex-col items-center justify-center relative cursor-pointer">
                        <div className="w-12 h-12 bg-gold-exec text-navy-dark flex items-center justify-center rounded-full group-hover:scale-110 transition-transform shadow-lg">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                        <span className="absolute bottom-3 right-3 text-[8px] font-mono tracking-widest uppercase bg-navy-dark text-white px-2 py-0.5">KTN News Live</span>
                      </div>
                      <div className="p-4 space-y-1">
                        <span className="text-[8px] font-mono text-gold-exec uppercase font-bold tracking-widest">STATE TV COMMENTARY (May 2024)</span>
                        <h4 className="font-serif text-xs font-bold text-navy-dark dark:text-slate-205">Standardizing Private Security Operations across Municipal Districts</h4>
                      </div>
                    </div>

                    {/* Vid 2 */}
                    <div className="bg-white dark:bg-[#0c1a2c] border border-navy-dark/10 dark:border-white/5 overflow-hidden group">
                      <div className="w-full h-44 bg-slate-250 dark:bg-[#07121f] flex flex-col items-center justify-center relative cursor-pointer">
                        <div className="w-12 h-12 bg-gold-exec text-navy-dark flex items-center justify-center rounded-full group-hover:scale-110 transition-transform shadow-lg">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                        <span className="absolute bottom-3 right-3 text-[8px] font-mono tracking-widest uppercase bg-navy-dark text-white px-2 py-0.5">Citizen TV Live</span>
                      </div>
                      <div className="p-4 space-y-1">
                        <span className="text-[8px] font-mono text-gold-exec uppercase font-bold tracking-widest">EXECUTIVE SUMMIT DIALOGUE (Nov 2023)</span>
                        <h4 className="font-serif text-xs font-bold text-navy-dark dark:text-slate-205">Establishing Biometric Vetting Records & Guard Registry Systems</h4>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* PRIVACY POLICY */}
              {activeTab === "privacy-policy" && (
                <motion.div 
                  key="privacy-policy"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-l-4 border-gold-exec pl-4">
                    <span className="text-[10px] font-mono text-gold-exec uppercase tracking-widest block font-bold">CONSTITUTIONAL PRIVACY MANDATES</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold dark:text-white mt-1">Privacy Policy Directive</h3>
                  </div>

                  <div className="space-y-4 text-xs leading-relaxed text-charcoal-wood/80 dark:text-slate-300">
                    <p>
                      <strong>1. Operational Stewardship of Registry Databases:</strong> In strict alignment with the Data Protection Act of the Republic of Kenya, the Office of Philip Leakey Okello commits to safeguarding all private stakeholder databases, executive portfolios, and audit correspondence records. Any information entered into our registry or translated via server-side secure channels remains fully encrypted.
                    </p>
                    <p>
                      <strong>2. Information Collection & Biometric Security Guides:</strong> We collect and process your contact credentials, official email subscriptions, and licensing booking records solely to facilitate official parastatal communications, compliance briefs, and authorized corporate calendar planning. We do not distribute, sell, or allocate your data registry to third-party advertising companies or non-vetted organizations.
                    </p>
                    <p>
                      <strong>3. Digital Logs and Transparency Provisions:</strong> Our servers capture operational telemetry logs and visitor access patterns in order to prevent security anomalies and trace fraudulent requests. These security files are reviewed monthly in absolute compliance with national cybersecurity standards and are stored within secure hosting platforms located in sovereign data territories.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* COOKIE POLICY */}
              {activeTab === "cookie-policy" && (
                <motion.div 
                  key="cookie-policy"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-l-4 border-gold-exec pl-4">
                    <span className="text-[10px] font-mono text-gold-exec uppercase tracking-widest block font-bold">STATE REVOLUTIONS REGISTRY</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold dark:text-white mt-1">Cookie Policy & Consent Guide</h3>
                  </div>

                  <div className="space-y-4 text-xs leading-relaxed text-charcoal-wood/80 dark:text-slate-300">
                    <p>
                      <strong>1. Purpose of Cookie Deployments:</strong> This portal utilizes essential cookies and temporary storage tokens to authenticate session coordinates, retain language selection preferences (English, Swahili, French), and optimize the performance of interactive auditing toolkits.
                    </p>
                    <p>
                      <strong>2. Non-tracking Integrity Standards:</strong> Our cookie parameters are strictly administrative. We do not use persistent tracking web beacons or corporate advertisement pixels to monitor your behavioral coordinates outside of this educational parastatal website.
                    </p>
                    <p>
                      <strong>3. Consumer Control & Choice Frameworks:</strong> Visitors can disable administrative cookies via their browser preferences. However, doing so may restrict access to several functional utilities, such as the global outreach translator and the interactive risk assessment indices.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* TERMS & CONDITIONS */}
              {activeTab === "terms" && (
                <motion.div 
                  key="terms"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-l-4 border-gold-exec pl-4">
                    <span className="text-[10px] font-mono text-gold-exec uppercase tracking-widest block font-bold">PUBLIC CHARTER AGREEMENTS</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold dark:text-white mt-1">Terms & Conditions of Service</h3>
                  </div>

                  <div className="space-y-4 text-xs leading-relaxed text-charcoal-wood/80 dark:text-slate-300">
                    <p>
                      <strong>1. Sovereign Indemnification Guidelines:</strong> By utilizing this resource portal, diagnostic calculators, or downloading scholastic briefs, you acknowledge that all materials represent the professional opinion of the Office of Philip Leakey Okello and do not constitute formal constitutional legal defense. Users must verify their municipal obligations before initiating state enterprise contracts.
                    </p>
                    <p>
                      <strong>2. IP & Copyright Accords:</strong> The intellectual contents of Philip's published monographs, policy curricula, standard administrative training manuals, and interactive risk assessment spreadsheets are the exclusive properties of Philip Leakey Okello and the Private Security Regulatory Authority (PSRA) and are legally protected under regional intellectual laws. All rights are reserved globally.
                    </p>
                    <p>
                      <strong>3. Acceptable Use Vetting:</strong> You agree not to exploit this database, perform automated scraping operations, or initiate malicious DDoS attacks on the state translation proxy `/api/translate`. Violation of these provisions triggers reporting coordinates to national cybersecurity law units.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* RETURN & REFUND POLICY */}
              {activeTab === "return-refund" && (
                <motion.div 
                  key="return-refund"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-l-4 border-gold-exec pl-4">
                    <span className="text-[10px] font-mono text-gold-exec uppercase tracking-widest block font-bold">STATE FINANCIAL RECONCILIATIONS</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold dark:text-white mt-1">Return & Refund Policy</h3>
                  </div>

                  <div className="space-y-4 text-xs leading-relaxed text-charcoal-wood/80 dark:text-slate-300">
                    <p>
                      <strong>1. State Tariffs and Application Fees:</strong> All developmental registration fees structure, corporate compliance license tariffs, and municipal security vetting fees processed via this registry or parastatal portals are legally subject to the Public Finance Management (PFM) Act 2012 of the National Treasury. Once processed, all state collections are legally non-refundable.
                    </p>
                    <p>
                      <strong>2. Scholastic Literature Purchases:</strong> Academic monographs, research papers, abstract access keys, and educational resources purchased directly via ICPAK or local university presses are final. In cases of physical damage during shipping transit coordinates, we will replace the damaged publications with authenticated replacement copies.
                    </p>
                    <p>
                      <strong>3. Speaking Honorariums and Cancellations:</strong> Executive speaking retainers and seminar honorariums are subject to bilateral agreements. If the Office of Philip Leakey Okello postpones an engagement due to national emergency crises, the retainer will be reprogrammed to the subsequent available calendar slots.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* MEDIA RELEASE POLICY */}
              {activeTab === "media-release" && (
                <motion.div 
                  key="media-release"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-l-4 border-gold-exec pl-4">
                    <span className="text-[10px] font-mono text-gold-exec uppercase tracking-widest block font-bold">STATE RELATION AND COMMUNICATION ACCORDS</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold dark:text-white mt-1">Media Release Policy</h3>
                  </div>

                  <div className="space-y-4 text-xs leading-relaxed text-charcoal-wood/80 dark:text-slate-300">
                    <p>
                      <strong>1. Mandated Media Use Permissions:</strong> Public broadcasting corporations, journals, television networks, and journalists are allowed to reference and quote excerpts of Philip Leakey Okello's policy monographs and press communiques, provided they include clear citations referencing the "Private Security Regulatory Authority (PSRA)" and "Philip Leakey Okello".
                    </p>
                    <p>
                      <strong>2. Video and Audio Broadcasting Archives:</strong> Broadcasters are forbidden from editing or splicing video keynotes, speech recordings, or audio podcasts in ways that distort the original diplomatic context, structural policy meaning, or regulatory positions.
                    </p>
                    <p>
                      <strong>3. Dynamic Press Office Requests:</strong> All inquiries on TV panel booking, exclusive journal interviews, and parliamentary committee statements must be channeled formally via <strong className="text-navy-dark dark:text-gold-exec font-mono">info@philipleakeyokello.com</strong>.
                    </p>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>

        {/* Modal Info Footer Bar */}
        <div className="px-6 py-4 bg-white/90 dark:bg-[#0c1a2c] border-t border-navy-dark/15 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-slate-gray">
          <span>Office of Philip Leakey Okello • State Administration & Board Compliance</span>
          <span className="mt-2 sm:mt-0 text-gold-exec font-bold">SECURE ENCRYPTED PORTAL</span>
        </div>

      </motion.div>
    </div>
  );
}
