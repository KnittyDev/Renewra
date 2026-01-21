'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100"
    >
      <div className="px-6 md:px-10 lg:px-20 py-4 flex items-center justify-between max-w-[1400px] mx-auto w-full">
        <div className="flex items-center gap-3 text-slate-900 cursor-pointer">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined !text-[32px] font-bold">donut_small</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Renewra</h2>
        </div>
        <nav className="hidden md:flex flex-1 justify-center gap-10">
          <a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">Features</a>
          <a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">Pricing</a>
          <a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">Resources</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:flex text-slate-900 hover:text-primary text-sm font-semibold transition-colors">
            Log In
          </Link>
          <button className="flex h-10 px-5 items-center justify-center rounded-xl bg-primary hover:bg-primary/90 text-slate-900 text-sm font-bold shadow-soft transition-all transform hover:scale-105 active:scale-95 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </motion.header>
  );
}
