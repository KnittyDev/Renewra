'use client';

import React from 'react';
import { motion } from 'framer-motion';

const breakdown = [
  { label: 'SaaS', percentage: '44%', color: 'bg-primary' },
  { label: 'Entertainment', percentage: '28%', color: 'bg-indigo-500' },
  { label: 'Utilities', percentage: '17%', color: 'bg-amber-500' },
  { label: 'Other', percentage: '11%', color: 'bg-slate-300' },
];

export default function SpendBreakdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="lg:col-span-4 bg-white rounded-2xl p-6 shadow-soft border border-slate-100 flex flex-col"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-900">Spend Breakdown</h3>
        <span className="text-slate-400 material-symbols-outlined text-sm cursor-help">info</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div
          className="relative w-48 h-48 rounded-full"
          style={{
            background: `conic-gradient(
              #13eccf 0deg 160deg,
              #6366f1 160deg 260deg,
              #f59e0b 260deg 320deg,
              #cbd5e1 320deg 360deg
            )`,
          }}
        >
          <div className="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center z-10">
            <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">Total</span>
            <span className="text-2xl font-black text-slate-900">€248.50</span>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4">
        {breakdown.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            className="flex items-center gap-2"
          >
            <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
            <div>
              <p className="text-xs text-slate-500">{item.label}</p>
              <p className="text-sm font-bold text-slate-900">{item.percentage}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
