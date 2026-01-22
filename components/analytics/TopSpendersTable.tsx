'use client';

import React from 'react';
import { motion } from 'framer-motion';

const topSpenders = [
  {
    name: 'Amazon Web Services',
    abbreviation: 'AWS',
    category: 'Infrastructure',
    categoryColor: 'text-orange-700',
    categoryBg: 'bg-orange-50',
    growth: '+12.5%',
    growthColor: 'text-red-500',
    growthIcon: 'trending_up',
    totalSpend: '€4,250.00',
  },
  {
    name: 'Salesforce',
    abbreviation: 'CRM',
    category: 'SaaS',
    categoryColor: 'text-teal-700',
    categoryBg: 'bg-teal-50',
    growth: '0.0%',
    growthColor: 'text-slate-400',
    growthIcon: 'trending_flat',
    totalSpend: '€2,800.00',
  },
  {
    name: 'Slack',
    abbreviation: 'Sl',
    category: 'SaaS',
    categoryColor: 'text-teal-700',
    categoryBg: 'bg-teal-50',
    growth: '-5.0%',
    growthColor: 'text-emerald-500',
    growthIcon: 'trending_down',
    totalSpend: '€1,200.00',
  },
];

const getBgColor = (abbreviation: string) => {
  if (abbreviation === 'AWS') return 'bg-slate-900';
  if (abbreviation === 'CRM') return 'bg-blue-500';
  if (abbreviation === 'Sl') return 'bg-indigo-500';
  return 'bg-slate-500';
};

export default function TopSpendersTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="lg:col-span-2 bg-white rounded-2xl shadow-soft border border-slate-100 flex flex-col"
    >
      <div className="p-6 border-b border-slate-50 flex justify-between items-center">
        <h3 className="font-bold text-slate-900">Top Spenders by Service</h3>
        <button className="text-xs font-bold text-primary hover:text-primary-dark">Full Report</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-slate-500 uppercase border-b border-slate-50 bg-slate-50/50">
              <th className="px-6 py-3">Service</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Growth</th>
              <th className="px-6 py-3 text-right">Total Spend (YTD)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {topSpenders.map((spender, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${getBgColor(spender.abbreviation)} text-white flex items-center justify-center mr-3 font-bold text-xs`}>
                      {spender.abbreviation}
                    </div>
                    <span className="font-bold text-sm text-slate-900">{spender.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-semibold leading-tight ${spender.categoryColor} ${spender.categoryBg} rounded-full`}>
                    {spender.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className={`flex items-center ${spender.growthColor} text-xs font-bold`}>
                    <span className="material-symbols-outlined text-[14px] mr-1">{spender.growthIcon}</span>
                    {spender.growth}
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-sm font-bold text-slate-900">
                  {spender.totalSpend}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
