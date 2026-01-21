'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LogoStrip() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-10 border-y border-slate-100 bg-background-subtle"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">Trusted by fast-growing teams</p>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
          {/* Text based logos for simplicity and robustness */}
          <h3 className="text-xl font-bold text-slate-400 font-sans tracking-tight">ACME Corp</h3>
          <h3 className="text-xl font-bold text-slate-400 font-serif italic">GlobalBank</h3>
          <h3 className="text-xl font-black text-slate-400 font-mono tracking-tighter">SaaS.io</h3>
          <h3 className="text-xl font-bold text-slate-400 flex items-center gap-1">
            <span className="w-4 h-4 bg-slate-400 rounded-full"></span>Circle
          </h3>
          <h3 className="text-xl font-bold text-slate-400 tracking-wide">STRATUM</h3>
        </div>
      </div>
    </motion.section>
  );
}
