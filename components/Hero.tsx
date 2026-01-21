'use client';

import React from 'react';
import { motion } from 'framer-motion';
import DashboardPreview from './DashboardPreview';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 px-6 md:px-10 overflow-hidden">
      {/* Background decorative blob */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"
      ></motion.div>
      
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-slate-900 text-xs font-semibold uppercase tracking-wider mb-2 border border-primary/20"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          New: Smart Banking Integration
        </motion.div>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] max-w-4xl text-slate-900"
        >
          Manage all your subscriptions <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">in one place</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-500 text-sm md:text-base font-medium"
        >
          No bank connection required. No credit card needed.
        </motion.p>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-2xl"
        >
          Stop wasting money on unused services. Track, optimize, and control your monthly recurring spend with our intelligent dashboard.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
        >
          <button className="flex h-12 px-8 items-center justify-center rounded-xl bg-primary hover:bg-[#0fdcc0] text-slate-900 text-base font-bold shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 cursor-pointer">
            Start for Free
          </button>
          <button className="flex h-12 px-8 items-center justify-center rounded-xl bg-white border border-slate-200 hover:border-primary/50 text-slate-900 text-base font-bold transition-all hover:bg-slate-50 gap-2 group cursor-pointer">
            <motion.span
              animate={{
                scaleY: [1, 0.1, 1],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="material-symbols-outlined group-hover:text-primary transition-colors"
            >
              visibility
            </motion.span>
            View Demo
          </button>
        </motion.div>
        
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}
