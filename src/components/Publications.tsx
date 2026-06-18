/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { publicationsArchive } from "../data";
import { FileDown, Newspaper, Compass, BookOpen, Clock, HeartHandshake } from "lucide-react";

export default function Publications() {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  
  // Custom suggestion state simulating the future blog architectural system
  const [showTopicSuggestion, setShowTopicSuggestion] = useState(false);
  const [suggestedTopic, setSuggestedTopic] = useState("");
  const [suggestionSubmitted, setSuggestionSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Derive unique tags for filters
  const allTags = ["All", "Regulation", "Finance", "National Security", "State Corporations"];

  const filteredPubs = selectedTag === "All"
    ? publicationsArchive
    : publicationsArchive.filter(pub => pub.tags.includes(selectedTag) || pub.type === selectedTag);

  const handleSuggestionSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (suggestedTopic.trim() !== "") {
      setSuggestionSubmitted(true);
      setTimeout(() => {
        setSuggestionSubmitted(false);
        setSuggestedTopic("");
        setShowTopicSuggestion(false);
      }, 3000);
    }
  };

  return (
    <section id="publications" className="py-24 md:py-32 bg-white dark:bg-[#07121f] transition-colors duration-300 relative">
      {/* Editorial side watermark */}
      <div className="absolute left-0 bottom-1/4 select-none pointer-events-none opacity-[0.015] dark:opacity-[0.025]">
        <span className="font-serif text-[380px] leading-none font-bold text-navy-dark dark:text-white tracking-widest">
          STUDY
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-navy-dark/10 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-8 bg-gold-exec" />
              <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase">
                THOUGHT LEADERSHIP & POLICY WRITING
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark dark:text-white tracking-tight">
              Intellectual Footprint
            </h2>
          </div>
          <p className="text-sm font-sans font-normal text-[#222222] dark:text-slate-200 max-w-sm mt-4 md:mt-0 leading-relaxed">
            Formulating academic guidelines and industry briefings designed to standardize institutional administration.
          </p>
        </div>

        {/* Filter Toolbar for Future Blog Architecture */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-2.5">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 text-xs font-sans tracking-wider uppercase font-medium border transition-all duration-300 cursor-pointer ${
                  selectedTag === tag
                    ? "bg-navy-dark dark:bg-gold-exec text-white dark:text-navy-dark border-navy-dark dark:border-gold-exec"
                    : "bg-slate-gray dark:bg-white/5 text-navy-dark dark:text-white border-navy-dark/10 dark:border-white/10 hover:border-gold-exec dark:hover:border-gold-exec"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowTopicSuggestion(!showTopicSuggestion)}
            className="text-xs font-sans text-gold-exec hover:text-navy-dark dark:hover:text-white underline decoration-gold-exec decoration-2 underline-offset-4 font-bold tracking-wider uppercase flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4" /> Suggest Research Topic
          </button>
        </div>

        {/* Future Blog Ready Suggestion Form Drawer */}
        <AnimatePresence>
          {showTopicSuggestion && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-gray dark:bg-[#0f2744]/30 border border-gold-exec/20 dark:border-white/10 p-8 mb-12 overflow-hidden"
            >
              <h4 className="font-serif text-lg font-bold text-navy-dark dark:text-white mb-2">
                Co-Authoring & Advisory Inquiry
              </h4>
              <p className="text-xs text-[#222222] dark:text-slate-200 mb-6 leading-relaxed max-w-2xl">
                Are you looking for expert academic insight on an upcoming civil policy draft or state corp evaluation? Propose a research vertical below, and Philip’s advisory team will consider adding it to the future public publication roadmap.
              </p>

              {suggestionSubmitted ? (
                <div className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/25 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
                  <HeartHandshake className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>Topic submitted successfully. Philip Okello’s research assistants have flagged this advisory proposal.</span>
                </div>
              ) : (
                <form onSubmit={handleSuggestionSubmit} className="flex flex-col sm:flex-row gap-4 items-stretch max-w-3xl">
                  <input
                    type="text"
                    required
                    value={suggestedTopic}
                    onChange={(e) => setSuggestedTopic(e.target.value)}
                    placeholder="e.g., Implementing Sovereign Ledger-Audits in Parastatals"
                    className="flex-1 px-4 py-3 bg-white dark:bg-[#07121f] text-navy-dark dark:text-white text-xs border border-navy-dark/10 dark:border-white/10 focus:outline-none focus:border-gold-exec"
                  />
                  <button
                    type="submit"
                    className="bg-navy-dark dark:bg-gold-exec hover:bg-gold-exec dark:hover:bg-gold-exec/80 text-white dark:text-navy-dark text-xs font-sans font-semibold tracking-widest uppercase px-6 py-3 transition-colors cursor-pointer"
                  >
                    Submit Topic
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {filteredPubs.map((pub, idx) => (
              <motion.div
                layout
                key={pub.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex flex-col justify-between bg-[#F5F7FA] dark:bg-[#0f2744]/40 border border-navy-dark/10 dark:border-white/10 p-8 relative hover:bg-white dark:hover:bg-[#0f2744]/60 hover:shadow-xl hover:border-navy-dark/15 dark:hover:border-white/15 transition-all duration-300"
              >
                <div>
                  {/* Category and Read Time details */}
                  <div className="flex items-center justify-between pb-4 border-b border-navy-dark/10 dark:border-white/10 mb-6">
                    <span className="text-[10px] font-mono tracking-widest font-bold text-gold-exec uppercase">
                      {pub.type}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-mono text-navy-dark dark:text-white/80">
                      <Clock className="w-3.5 h-3.5" />
                      {pub.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy-dark dark:text-white mb-4 leading-snug hover:text-gold-exec dark:hover:text-gold-exec transition-colors">
                    {pub.title}
                  </h3>

                  <p className="text-xs font-sans font-normal text-[#222222] dark:text-slate-200 leading-relaxed mb-6 text-justify">
                    {pub.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {pub.tags.map(t => (
                      <span key={t} className="text-[9px] font-mono bg-white dark:bg-[#07121f] text-navy-dark/80 dark:text-white/80 px-2 py-0.5 border border-navy-dark/10 dark:border-white/10">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-navy-dark/10 dark:border-white/10">
                    <span className="text-[10px] font-sans font-semibold tracking-wider text-navy-dark dark:text-white/80 uppercase">
                      {pub.publisher}
                    </span>
                    
                    {/* Simulated download trigger of professional draft */}
                    <button
                      onClick={() => triggerToast(`Academic request sent. Draft copy of "${pub.title}" requested from ICPAK reserves.`)}
                      className="text-navy-dark dark:text-white hover:text-gold-exec dark:hover:text-gold-exec p-1.5 hover:bg-slate-gray dark:hover:bg-white/5 rounded-none border border-transparent hover:border-navy-dark/15 dark:hover:border-white/15 transition-all cursor-pointer"
                      title="Request Academic Draft"
                    >
                      <FileDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Future Publications Placeholder Block */}
        <div className="mt-12 text-center p-6 bg-slate-gray dark:bg-[#0f2744]/20 border border-navy-dark/10 dark:border-white/10">
          <BookOpen className="w-6 h-6 text-gold-exec mx-auto mb-2" />
          <span className="block text-[10px] font-mono text-navy-dark dark:text-white uppercase tracking-widest mb-1 font-bold">
            Archival repository status
          </span>
          <p className="text-xs text-[#222222] dark:text-slate-200 max-w-md mx-auto font-sans leading-relaxed">
            Philip Leakey Okello contributes regular commentary columns to the Business Daily Africa and the East African. New opinion pieces populate here dynamically.
          </p>
        </div>

      </div>

      {/* Floating Gold-rimmed Advisory Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-[10000] max-w-sm bg-navy-dark text-white p-4 shadow-xl border border-gold-exec/40 flex items-start gap-3"
          >
            <div className="w-5 h-5 rounded-none border border-gold-exec/45 text-gold-exec flex items-center justify-center font-mono text-[9px] font-bold shrink-0 mt-0.5">
              PLO
            </div>
            <div className="flex-1">
              <span className="block text-[10px] font-mono text-gold-exec uppercase tracking-widest font-bold mb-1">REGISTRY DESK</span>
              <p className="text-xs font-sans text-slate-gray/90 leading-relaxed font-light">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
