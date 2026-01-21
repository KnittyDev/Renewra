'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function RegisterSidebar() {
  return (
    <div className="hidden lg:flex flex-1 relative bg-background-subtle border-l border-slate-100 flex-col justify-center items-center px-12 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3"
      ></motion.div>

      <div className="relative max-w-lg w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Trusted by 12,000+ companies
          </motion.div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Join the platform that saves teams{' '}
            <span className="text-primary/90">20% on average</span>
          </h2>

          <ul className="space-y-3 text-base text-slate-600">
            {[
              'Track all software spend in real-time',
              'Automated alerts for renewals & price hikes',
              'Seamless integration with Xero & QuickBooks',
            ].map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </span>
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-6 border-t border-slate-200"
        >
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Powering finance teams at
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-4 opacity-60 grayscale items-center">
            <h3 className="text-lg font-bold text-slate-400 font-sans tracking-tight">ACME Corp</h3>
            <h3 className="text-lg font-bold text-slate-400 font-serif italic">GlobalBank</h3>
            <h3 className="text-lg font-black text-slate-400 font-mono tracking-tighter">SaaS.io</h3>
            <h3 className="text-lg font-bold text-slate-400 flex items-center gap-1">
              <span className="w-3 h-3 bg-slate-400 rounded-full"></span>Circle
            </h3>
          </div>
        </motion.div>

        {/* Floating subscription alert card */}
        <motion.div
          initial={{ x: 50, opacity: 0, rotate: 6 }}
          animate={{ x: 0, opacity: 1, rotate: 6 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute -right-10 top-10 bg-white p-4 rounded-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-100 w-64 hidden xl:block animate-float"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <span className="material-symbols-outlined text-lg">event_repeat</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Subscription Alert</p>
                <p className="text-[10px] text-slate-500">Adobe Creative Cloud</p>
              </div>
            </div>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 w-[85%]"></div>
          </div>
          <div className="mt-2 flex justify-between text-[10px] font-medium">
            <span className="text-slate-500">Renews in 2 days</span>
            <span className="text-slate-900">€52.99</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
