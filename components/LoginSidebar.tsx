'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiNetflix } from '@icons-pack/react-simple-icons';

export default function LoginSidebar() {
  return (
    <div className="hidden md:flex relative items-center justify-center bg-gradient-to-br from-[#f0fffc] to-[#dcfce7] overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-pulse"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-emerald-300/20 rounded-full blur-[80px]"
      ></motion.div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMxM2VjY2YiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative z-10 w-full max-w-lg px-8">
        {/* Floating Netflix card */}
        <motion.div
          initial={{ x: 50, opacity: 0, rotate: 6 }}
          animate={{ x: 0, opacity: 1, rotate: 6 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute -top-16 -right-8 w-64 bg-white rounded-xl shadow-glow p-4 transform border border-slate-100 hidden lg:block animate-[bounce_4s_infinite] z-20"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="size-10 rounded-full bg-red-50 flex items-center justify-center">
              <SiNetflix className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Netflix Premium</p>
              <p className="text-[10px] text-slate-400">Monthly Plan</p>
            </div>
            <span className="ml-auto text-xs font-bold text-slate-900">€19.99</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="w-[85%] h-full bg-red-500 rounded-full"></div>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 text-right">Renews in 2 days</p>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-effect p-8 md:p-10 rounded-2xl shadow-xl border border-white/50 relative z-10"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="material-symbols-outlined text-primary text-5xl absolute -top-6 left-8 bg-white rounded-full p-2 shadow-sm"
          >
            format_quote
          </motion.span>

          <div className="flex gap-1 text-yellow-400 mb-6 mt-2">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                className="material-symbols-outlined fill-current text-sm"
              >
                star
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed mb-8"
          >
            "We were bleeding money on unused SaaS licenses. Renewra helped us identify and cut our wasted spend by{' '}
            <span className="font-bold text-primary bg-slate-900/5 px-1 rounded">20% in the first month</span> alone. It's indispensable."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-4 border-t border-slate-200/60 pt-6"
          >
            <div className="size-12 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 border-2 border-white shadow-sm flex items-center justify-center text-slate-400 font-bold text-lg">
              SJ
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Sarah Jenkins</h4>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">CTO at TechFlow</p>
            </div>
            <div className="ml-auto opacity-50 grayscale">
              <div className="flex items-center gap-1">
                <div className="size-3 rounded-full bg-slate-400"></div>
                <span className="text-sm font-bold text-slate-400">TechFlow</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating savings alert */}
        <motion.div
          initial={{ x: -50, opacity: 0, rotate: -3 }}
          animate={{ x: 0, opacity: 1, rotate: -3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute -bottom-10 -left-4 w-56 bg-white rounded-xl shadow-lg p-3 transform border border-slate-100 hidden lg:flex items-center gap-3 animate-[pulse_5s_infinite]"
        >
          <div className="size-8 rounded-full bg-green-50 flex items-center justify-center text-green-500">
            <span className="material-symbols-outlined text-[18px]">savings</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">Savings Alert</p>
            <p className="text-[10px] text-slate-500">You saved €450 this month</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
