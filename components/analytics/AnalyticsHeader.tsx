'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AnalyticsHeader() {
  return (
    <header className="h-20 bg-white border-b border-slate-100 px-8 flex justify-between items-center sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-slate-900 hidden md:block">Spend Analytics</h1>
        <button className="lg:hidden p-2 text-slate-500">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            className="pl-10 pr-4 py-2.5 bg-slate-50 border-none rounded-xl text-sm w-64 focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all placeholder-slate-400 outline-none"
            placeholder="Search analytics..."
            type="text"
          />
        </div>
        <button className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50 transition-colors text-slate-500 hover:text-slate-900">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <div className="hidden sm:flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export
          </motion.button>
        </div>
      </div>
    </header>
  );
}
