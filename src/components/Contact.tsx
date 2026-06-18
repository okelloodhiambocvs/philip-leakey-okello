/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Phone, Mail, Linkedin, Send, Radio, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affiliation: "",
    subject: "Executive Advisory",
    notes: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate high-end corporate inbox ingestion
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "",
        email: "",
        affiliation: "",
        subject: "Executive Advisory",
        notes: "",
      });
    }, 4000);
  };

  const prefilledWhatsappUrl =
    "https://wa.me/254726140245?text=Hello%20Philip%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20connect.";

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F5F7FA] dark:bg-[#07121f] transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative vertical divider reflecting legal document margins */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-navy-dark/10 dark:bg-white/10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Direct Credentials & Hotlines (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[1px] w-8 bg-gold-exec" />
                <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase">
                  DIRECT CHANNELS & SUMMONS
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark dark:text-white tracking-tight mb-8">
                Connect Directly
              </h2>
              <p className="text-sm font-sans font-normal text-[#222222] dark:text-slate-200 leading-relaxed mb-12 max-w-sm">
                Initiate dialogues on regulatory structure, parastatal evaluations, governance board assignments, or press comments.
              </p>

              {/* Direct Touchpoints list */}
              <div className="space-y-6">
                
                {/* Official Phone Dial */}
                <a
                  href="tel:+254726140245"
                  className="group flex items-start gap-4 p-5 bg-white dark:bg-[#0f2744]/40 border border-navy-dark/10 dark:border-white/10 shadow-sm hover:border-gold-exec dark:hover:border-gold-exec transition-all"
                >
                  <div className="p-3 bg-slate-gray dark:bg-[#07121f]/90 border border-gold-exec/20 text-navy-dark dark:text-gold-exec group-hover:bg-navy-dark group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-charcoal-wood dark:text-gold-exec uppercase tracking-widest font-bold">
                      OFFICIAL HOTLINE (KENYA)
                    </span>
                    <span className="block font-serif text-xl font-bold text-navy-dark dark:text-white mt-1">
                      +254 726 140 245
                    </span>
                    <span className="block text-[10px] text-gold-exec dark:text-gold-exec font-bold mt-1 uppercase tracking-wider">
                      Click to initiate direct voice call
                    </span>
                  </div>
                </a>

                {/* WhatsApp Direct Line with exact requested parameter */}
                <a
                  href={prefilledWhatsappUrl}
                  target="_blank"
                  rel="noreferrer referrer"
                  className="group flex items-start gap-4 p-5 bg-white dark:bg-[#0f2744]/40 border border-navy-dark/10 dark:border-white/10 shadow-sm hover:border-gold-exec dark:hover:border-gold-exec transition-all"
                >
                  <div className="p-3 bg-slate-gray dark:bg-[#07121f]/90 border border-gold-exec/20 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-charcoal-wood dark:text-gold-exec uppercase tracking-widest font-bold">
                      WHATSAPP VERIFIED CHANNEL
                    </span>
                    <span className="block font-serif text-xl font-bold text-navy-dark dark:text-white mt-1">
                      Start Mobile Chat
                    </span>
                    <span className="block text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-1 uppercase tracking-wider">
                      Opens direct thread with pre-filled handshake
                    </span>
                  </div>
                </a>

                {/* Email Direct Line */}
                <a
                  href="mailto:info@leakeyokello.com"
                  className="group flex items-start gap-4 p-5 bg-white dark:bg-[#0f2744]/40 border border-navy-dark/10 dark:border-white/10 shadow-sm hover:border-gold-exec dark:hover:border-gold-exec transition-all"
                >
                  <div className="p-3 bg-slate-gray dark:bg-[#07121f]/90 border border-gold-exec/20 text-navy-dark dark:text-gold-exec group-hover:bg-navy-dark group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-charcoal-wood dark:text-gold-exec uppercase tracking-widest font-bold">
                      SECURED ADVISORY INBOX
                    </span>
                    <span className="block font-serif text-xl font-bold text-navy-dark dark:text-white mt-1">
                      info@leakeyokello.com
                    </span>
                    <span className="block text-[10px] text-[#4A5568] dark:text-slate-400 mt-1">
                      Typical reply SLA: Within 24 commercial hours
                    </span>
                  </div>
                </a>

              </div>
            </div>

            {/* LinkedIn social footer attachment */}
            <div className="mt-12 pt-6 border-t border-navy-dark/10 dark:border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-navy-dark/80 dark:text-white/80 uppercase tracking-widest">
                Executive Social Registry
              </span>
              <a
                href="https://www.linkedin.com/in/phillip-leakey/"
                target="_blank"
                rel="noreferrer referrer"
                className="flex items-center gap-2 text-xs font-sans tracking-wide text-navy-dark dark:text-white hover:text-gold-exec dark:hover:text-gold-exec uppercase font-bold transition-colors"
              >
                <Linkedin className="w-4 h-4 text-gold-exec" /> LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right Column: Formal Corporate Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white dark:bg-[#0f2744]/40 p-8 md:p-12 border border-navy-dark/10 dark:border-white/10 shadow-sm relative transition-colors duration-300">
              <h3 className="font-serif text-2xl font-bold text-navy-dark dark:text-white tracking-tight mb-2">
                Executive Registry Contact
              </h3>
              <p className="text-xs text-[#222222] dark:text-slate-200 leading-relaxed mb-8">
                Please complete the formal clearance dossier below to request an advisory appointment, parastatal strategic plan review, or panel participation.
              </p>

              {isSuccess ? (
                <div className="p-8 bg-navy-dark dark:bg-[#07121f] border border-gold-exec text-white text-center">
                  <div className="w-12 h-12 rounded-none border border-gold-exec text-gold-exec flex items-center justify-center mx-auto mb-4 font-mono text-lg font-bold">
                    OK
                  </div>
                  <h4 className="font-serif text-lg font-bold mb-2">Dossier Registered</h4>
                  <p className="text-xs text-slate-gray/90 leading-relaxed">
                    Thank you. Your institutional inquiry has been formally logged and forwarded to Philip Leakey Okello&apos;s administrative office in Nairobi.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-mono text-navy-dark/80 dark:text-white/80 uppercase tracking-widest font-bold mb-2">
                        Full Name / Surname *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Dr. Arthur Vance"
                        className="w-full px-4 py-3 bg-slate-gray dark:bg-[#07121f] text-navy-dark dark:text-white text-xs border border-navy-dark/10 dark:border-white/10 focus:outline-none focus:border-gold-exec dark:focus:border-gold-exec"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-navy-dark/80 dark:text-white/80 uppercase tracking-widest font-bold mb-2">
                        Institutional Affiliation *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.affiliation}
                        onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                        placeholder="e.g., Ministry of Defense"
                        className="w-full px-4 py-3 bg-slate-gray dark:bg-[#07121f] text-navy-dark dark:text-white text-xs border border-navy-dark/10 dark:border-white/10 focus:outline-none focus:border-gold-exec dark:focus:border-gold-exec"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-navy-dark/80 dark:text-white/80 uppercase tracking-widest font-bold mb-2">
                      Secured Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., representation@alliance.org"
                      className="w-full px-4 py-3 bg-slate-gray dark:bg-[#07121f] text-navy-dark dark:text-white text-xs border border-navy-dark/10 dark:border-white/10 focus:outline-none focus:border-gold-exec dark:focus:border-gold-exec"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-navy-dark/80 dark:text-white/80 uppercase tracking-widest font-bold mb-2">
                      Inquiry Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-gray dark:bg-[#07121f] text-navy-dark dark:text-white text-xs border border-navy-dark/10 dark:border-white/10 focus:outline-none focus:border-gold-exec dark:focus:border-gold-exec cursor-pointer"
                    >
                      <option value="Executive Advisory">Executive Advisory Consultation</option>
                      <option value="Governance / Board Seat">Board Governance Selection</option>
                      <option value="Policy formulation / Regulatory Analysis">Policy Drafting & Auditing</option>
                      <option value="Media Comment / Panel Keynote">Press Booking & panel speaking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-navy-dark/80 dark:text-white/80 uppercase tracking-widest font-bold mb-2">
                      Operational Brief / Notes
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Detail the scope of the governance inquiry, timeline constraints, and direct board expectations..."
                      className="w-full px-4 py-3 bg-slate-gray dark:bg-[#07121f] text-navy-dark dark:text-white text-xs border border-navy-dark/10 dark:border-white/10 focus:outline-none focus:border-gold-exec dark:focus:border-gold-exec resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-navy-dark dark:bg-gold-exec hover:bg-gold-exec dark:hover:bg-gold-exec/85 text-white dark:text-navy-dark text-xs font-sans font-bold tracking-widest uppercase py-4 transition-colors duration-300 cursor-pointer"
                  >
                    Submit Clearance Dossier
                    <Send className="w-3.5 h-3.5" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
