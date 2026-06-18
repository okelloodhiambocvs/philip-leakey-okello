/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { professionalGallery, mediaSpeakingEvents } from "../data";
import { Calendar, MapPin, Play, Radio, Sparkles } from "lucide-react";

export default function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Speaking", "Boardroom", "Official"];

  const filteredGallery = activeCategory === "All"
    ? professionalGallery
    : professionalGallery.filter(item => item.category === activeCategory);

  return (
    <section id="media-gallery" className="py-24 md:py-32 bg-white dark:bg-[#07121f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Upper Grid: Section Intro & Speaking Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-start">
          
          {/* Left Column: Intro (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-8 bg-gold-exec" />
              <span className="text-[11px] font-sans tracking-[0.3em] text-gold-exec font-bold uppercase">
                PUBLIC ENGAGEMENTS & SPEECHES
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark dark:text-white tracking-tight mb-6">
              Media & Speaking
            </h2>
            <p className="text-sm font-sans font-normal text-[#222222] dark:text-slate-200 leading-relaxed mb-8">
              A regular keynote speaker on sovereign finance reforms, public enterprise restructuring, and private security code standardization across major regional congresses and parliamentary assemblies.
            </p>

            <div className="hidden lg:block p-5 bg-slate-gray dark:bg-white/5 border border-navy-dark/10 dark:border-white/10 transition-colors duration-300 shadow-sm">
              <span className="text-[10px] font-mono text-gold-exec font-bold tracking-widest uppercase block mb-1">
                MEDIA INQUIRIES
              </span>
              <p className="text-xs text-[#222222] dark:text-slate-200 leading-relaxed font-sans">
                For panel speaking availability, television interview requests, or press commentary on state corp policy, redirect request to: <span className="font-semibold text-navy-dark dark:text-gold-exec">info@leakeyokello.com</span>.
              </p>
            </div>
          </div>

          {/* Right Column: Speaking Events (7 cols) */}
          <div className="lg:col-span-7">
            <span className="block text-[10px] font-mono text-navy-dark dark:text-white/80 font-bold tracking-widest uppercase mb-4">
              Conference & Press Log
            </span>

            <div className="space-y-4">
              {mediaSpeakingEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="p-6 bg-slate-gray dark:bg-[#0f2744]/40 border border-navy-dark/10 dark:border-white/10 hover:border-gold-exec dark:hover:border-gold-exec transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono bg-navy-dark dark:bg-[#07121f] text-white px-2 py-0.5 border border-navy-dark/10 dark:border-white/10">
                        KEYNOTE
                      </span>
                      <span className="text-[11px] font-mono text-navy-dark/80 dark:text-white/80 font-bold">
                        {evt.date}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-navy-dark dark:text-white mb-1">
                      {evt.title}
                    </h4>
                    <p className="text-xs font-sans font-normal text-[#222222] dark:text-slate-200">
                      {evt.event}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 text-[10px] font-mono text-navy-dark/85 dark:text-white/85 font-semibold uppercase shrink-0 border-t md:border-t-0 md:border-l border-navy-dark/15 dark:border-white/15 pt-3 md:pt-0 md:pl-6">
                    <MapPin className="w-3.5 h-3.5 text-gold-exec" />
                    <span>{evt.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Lower Section: Curved Photo Gallery */}
        <div className="border-t border-navy-dark/10 dark:border-white/10 pt-20">
          
          {/* Gallery Header and Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="block text-[10px] font-mono text-gold-exec font-bold tracking-widest uppercase mb-2">
                VERIFIED PRESS GALLERY
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy-dark dark:text-white tracking-tight">
                Academic & Corporate Forums
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-[10px] font-sans font-bold tracking-widest uppercase border cursor-pointer transition-colors duration-300 ${
                    activeCategory === cat
                      ? "bg-navy-dark dark:bg-gold-exec text-white dark:text-navy-dark border-navy-dark dark:border-gold-exec"
                      : "bg-[#F5F7FA] dark:bg-white/5 text-navy-dark dark:text-white border-navy-dark/10 dark:border-white/10 hover:border-gold-exec dark:hover:border-gold-exec"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Vetted Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {filteredGallery.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group relative aspect-square bg-[#0c1a29] dark:bg-black/40 overflow-hidden border border-navy-dark/10 dark:border-white/10 shadow-sm"
                >
                  {/* Photo with ReferrerPolicy constraint to assure image doesn't fail */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-700 pointer-events-none"
                  />
                  
                  {/* Absolute positioning detail overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/70 to-transparent p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end">
                    <span className="text-[9px] font-mono text-gold-exec tracking-widest uppercase mb-1">
                      {item.event} • {item.year}
                    </span>
                    <h5 className="font-serif text-sm font-bold text-white leading-snug">
                      {item.title}
                    </h5>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
