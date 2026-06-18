/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Printer, Mail, Phone, MapPin, Award, FileText } from "lucide-react";
import { biographyNarrative, careerTimeline, educatorMemberships, boardCompetencies, publicationsArchive } from "../data";

interface ExecutiveCvProps {
  onClose: () => void;
}

export default function ExecutiveCv({ onClose }: ExecutiveCvProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/70 backdrop-blur-sm p-4 md:p-6 overflow-y-auto">
      
      {/* Printable Sheet Wrapper */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#07121f] text-charcoal-wood dark:text-slate-300 shadow-2xl flex flex-col h-[90vh] border border-gold-exec/20 dark:border-gold-exec/40 transition-colors duration-300">
        
        {/* Controls Ribbon - Hidden during printing */}
        <div className="print:hidden flex items-center justify-between p-4 bg-[#F5F7FA] dark:bg-[#0f2744] border-b border-navy-dark/15 dark:border-white/10">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-gold-exec" />
            <span className="text-xs font-sans tracking-wider font-bold text-navy-dark dark:text-white uppercase">
              Official Executive Dossier & Curriculum Vitae
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-navy-dark dark:bg-gold-exec hover:bg-gold-exec dark:hover:bg-gold-exec/80 text-white dark:text-navy-dark text-xs font-sans font-bold tracking-widest uppercase px-4 py-2 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-navy-dark/5 dark:hover:bg-white/5 border border-navy-dark/10 dark:border-white/10 transition-colors text-navy-dark dark:text-white cursor-pointer"
              title="Close Dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Layout */}
        <div className="flex-1 overflow-y-auto p-8 md:p-16 font-sans text-charcoal-wood dark:text-slate-300 print:overflow-visible print:px-0 print:py-0 print:text-black">
          
          {/* Printable Layout CSS overrides */}
          <style dangerouslySetInnerHTML={{ __html: `
            @media print {
              body {
                background: white !important;
                color: black !important;
              }
              .print\\:hidden {
                display: none !important;
              }
              .shadow-2xl {
                box-shadow: none !important;
              }
              .border {
                border: none !important;
              }
              @page {
                size: portrait;
                margin: 2cm;
              }
            }
          `}} />

          {/* Letterhead Header Section */}
          <div className="border-b-2 border-navy-dark dark:border-white pb-8 mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-navy-dark dark:text-white tracking-tight mb-2 uppercase">
                Philip Leakey Okello, CPA-K
              </h1>
              <p className="text-sm font-serif font-bold text-gold-exec tracking-widest uppercase mb-1">
                Chief Executive Officer | Public Governance Expert
              </p>
              <p className="text-xs text-charcoal-wood/80 dark:text-slate-300 tracking-wider uppercase font-sans">
                Regulatory Affairs • Fiduciary Stewardship • Policy Redesign
              </p>
            </div>

            {/* Direct Core Coordinates */}
            <div className="text-xs space-y-1.5 font-sans font-normal text-charcoal-wood dark:text-slate-300 md:text-right w-full md:w-auto border-t md:border-t-0 border-navy-dark/10 dark:border-white/10 pt-4 md:pt-0">
              <div className="flex items-center md:justify-end gap-2 text-navy-dark dark:text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-gold-exec" />
                <span>Nairobi Registry, Kenya</span>
              </div>
              <div className="flex items-center md:justify-end gap-2 text-navy-dark dark:text-slate-200">
                <Phone className="w-3.5 h-3.5 text-gold-exec" />
                <span>+254 726 140 245</span>
              </div>
              <div className="flex items-center md:justify-end gap-2 text-navy-dark dark:text-slate-200">
                <Mail className="w-3.5 h-3.5 text-gold-exec" />
                <span>info@leakeyokello.com</span>
              </div>
            </div>
          </div>

          {/* Executive Narrative / Biographical Profile */}
          <div className="mb-10">
            <h3 className="text-xs font-sans tracking-[0.2em] font-bold text-navy-dark dark:text-white uppercase border-b border-navy-dark/15 dark:border-white/10 pb-2 mb-4">
              I. Executive Counsel & Profile
            </h3>
            <p className="text-sm font-sans font-light text-charcoal-wood dark:text-slate-300 leading-relaxed text-justify">
              Philip Leakey Okello is a distinguished state corporation chief executive with nearly two decades of executive experience steering major statutory portfolios in East Africa. Expert at restructuring underperforming state corporations, establishing operational legal guidelines, defending parastatal audit plans before parliamentary bodies, and standardizing inter-agency regulatory metrics. A Fellow of ICPAK, his administrative philosophy embeds structural transparency, risk buffers, and clear sovereign accountability models.
            </p>
          </div>

          {/* Professional Work Experience */}
          <div className="mb-10">
            <h3 className="text-xs font-sans tracking-[0.2em] font-bold text-navy-dark dark:text-white uppercase border-b border-navy-dark/15 dark:border-white/10 pb-2 mb-6">
              II. Professional Leadership Chronology
            </h3>

            <div className="space-y-8">
              {careerTimeline.map((role) => (
                <div key={role.id} className="relative pl-6 border-l-2 border-gold-exec/40 dark:border-gold-exec/55">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                    <h4 className="font-serif text-lg font-bold text-navy-dark dark:text-white">
                      {role.role}
                    </h4>
                    <span className="text-xs font-mono font-bold text-gold-exec uppercase">
                      {role.period}
                    </span>
                  </div>
                  <p className="text-xs font-sans font-extrabold text-[#4A5568] dark:text-slate-300 uppercase tracking-wider mb-4">
                    {role.organization}
                  </p>

                  <p className="text-xs font-sans font-light text-charcoal-wood dark:text-slate-300 leading-relaxed mb-4 italic">
                    {role.description}
                  </p>

                  <ul className="space-y-2 mt-2">
                    {role.keyImpacts.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs font-sans font-light">
                        <span className="text-gold-exec font-bold select-none mt-0.5">•</span>
                        <span className="leading-relaxed text-charcoal-wood dark:text-slate-300">{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Boardroom Expertise Verticals */}
          <div className="mb-10 page-break-before">
            <h3 className="text-xs font-sans tracking-[0.2em] font-bold text-navy-dark dark:text-white uppercase border-b border-navy-dark/15 dark:border-white/10 pb-2 mb-4">
              III. Core Board Performance Verticals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {boardCompetencies.map((comp) => (
                <div key={comp.title} className="p-4 bg-slate-gray/5 dark:bg-white/5 border-l-2 border-navy-dark dark:border-white border-r border-t border-b border-navy-dark/10 dark:border-white/10">
                  <h4 className="font-serif text-sm font-bold text-navy-dark dark:text-white mb-1.5">{comp.title}</h4>
                  <p className="text-[11px] text-charcoal-wood dark:text-slate-300 leading-relaxed">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Profile & Credentials */}
          <div className="mb-10">
            <h3 className="text-xs font-sans tracking-[0.2em] font-bold text-navy-dark dark:text-white uppercase border-b border-navy-dark/15 dark:border-white/10 pb-2 mb-6">
              IV. Formal Qualifications & Memberships
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Academics */}
              <div>
                <h4 className="text-xs font-sans font-bold text-navy-dark dark:text-white uppercase tracking-wider mb-4">Academic Credentials</h4>
                <div className="space-y-4">
                  {educatorMemberships.education.map((edu, idx) => (
                    <div key={idx}>
                      <span className="block text-[10px] font-mono text-[#718096] dark:text-slate-300 font-bold">{edu.period}</span>
                      <h5 className="font-serif text-sm font-bold text-navy-dark dark:text-white">{edu.degree}</h5>
                      <span className="block text-xs font-sans text-gold-exec font-bold">{edu.institution}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memberships */}
              <div>
                <h4 className="text-xs font-sans font-bold text-navy-dark dark:text-white uppercase tracking-wider mb-4">Regulatory & Professional Bodies</h4>
                <div className="space-y-4">
                  {educatorMemberships.memberships.map((mem, idx) => (
                    <div key={idx} className="pb-3 border-b border-navy-dark/5 dark:border-white/5 last:border-b-0">
                      <h5 className="font-serif text-sm font-bold text-navy-dark dark:text-white">{mem.title}</h5>
                      <p className="text-xs font-sans text-charcoal-wood dark:text-slate-300">{mem.organization}</p>
                      {"idNumber" in mem && (
                        <span className="text-[10px] font-mono text-gold-exec font-bold">ICPAK Register: {mem.idNumber}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key publications */}
          <div>
            <h3 className="text-xs font-sans tracking-[0.2em] font-bold text-navy-dark dark:text-white uppercase border-b border-navy-dark/15 dark:border-white/10 pb-2 mb-4">
              V. High-Impact Refereed Publications
            </h3>
            <div className="space-y-4">
              {publicationsArchive.slice(0, 2).map((pub) => (
                <div key={pub.id}>
                  <h4 className="font-serif text-xs font-bold text-navy-dark dark:text-white">{pub.title}</h4>
                  <p className="text-[11px] text-[#4A5568] dark:text-slate-300 leading-normal">{pub.summary}</p>
                  <span className="text-[9px] font-mono text-gold-exec tracking-widest uppercase font-bold">{pub.publisher} • {pub.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Symmetrical Footnote Board Verification */}
          <div className="mt-16 text-center border-t border-navy-dark/10 dark:border-white/10 pt-8">
            <span className="block text-[9px] font-mono text-navy-dark/80 dark:text-white/85 uppercase tracking-widest leading-normal mb-1 font-bold">
              REGULATORY REGISTER INDEX CONFIRMED SYNDICATE
            </span>
            <span className="block text-[8px] font-mono text-charcoal-wood dark:text-slate-300 uppercase mt-1 font-semibold">
              PHILIP LEAKEY OKELLO • CEO EXECUTIVE PORTFOLIO DOSSIER 2026/2027
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
