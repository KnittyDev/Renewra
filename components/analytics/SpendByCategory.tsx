'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'SaaS', value: 380, height: 45, color: 'bg-primary', bgColor: 'bg-teal-50', hoverClass: 'group-hover:bg-teal-100' },
  { name: 'Ent.', value: 540, height: 65, color: 'bg-indigo-500', bgColor: 'bg-indigo-50', hoverClass: 'group-hover:bg-indigo-100' },
  { name: 'Util.', value: 250, height: 30, color: 'bg-orange-400', bgColor: 'bg-orange-50', hoverClass: 'group-hover:bg-orange-100' },
];

export default function SpendByCategory() {
  const [selectedPeriod, setSelectedPeriod] = useState('Last Month');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="lg:col-span-4 bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-100 flex flex-col h-full"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-900">Spend by Category</h3>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="bg-slate-50 border-none text-xs font-semibold text-slate-600 rounded-lg py-1 pl-2 pr-6 focus:ring-primary/50 cursor-pointer outline-none"
        >
          <option>Last Month</option>
          <option>Last 3 Months</option>
        </select>
      </div>
      <div className="flex-1 flex flex-col justify-end gap-6">
        <div className="flex items-end justify-between gap-4 h-48 w-full px-2">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="flex flex-col items-center gap-2 group w-1/3"
            >
              <div className={`relative w-full rounded-t-lg ${category.bgColor} ${category.hoverClass} transition-colors flex items-end justify-center overflow-hidden h-48`}>
                <motion.div
                  className={`w-full ${category.color} rounded-t-lg chart-bar`}
                  style={{ height: `${category.height}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${category.height}%` }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                ></motion.div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  €{category.value}
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-500">{category.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-50">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-500">Most expensive</span>
            <span className="font-bold text-slate-900">Entertainment</span>
          </div>
          <div className="flex justify-between items-center text-sm mt-1">
            <span className="text-slate-500">Fastest growing</span>
            <span className="font-bold text-slate-900">SaaS (+12%)</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
