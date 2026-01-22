'use client';

import React from 'react';
import { motion } from 'framer-motion';

const opportunities = [
  {
    icon: 'warning',
    iconColor: 'text-orange-500',
    title: 'Unused Subscription',
    description: 'Adobe XD hasn\'t been used in 45 days.',
    savings: '€9.99/mo',
  },
  {
    icon: 'content_copy',
    iconColor: 'text-blue-500',
    title: 'Duplicate Features',
    description: 'Spotify and Apple Music overlap.',
    savings: '€10.99/mo',
  },
  {
    icon: 'trending_up',
    iconColor: 'text-purple-500',
    title: 'Plan Upgrade Avail.',
    description: 'Switch Zoom to annual for 15% off.',
    savings: '€45/yr',
  },
];

export default function SavingsOpportunities() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="lg:col-span-1 bg-white rounded-2xl shadow-soft border border-slate-100 flex flex-col overflow-hidden"
    >
      <div className="p-6 border-b border-slate-50 bg-gradient-to-r from-teal-50/50 to-white">
        <div className="flex items-center gap-3 mb-1">
          <div className="bg-teal-100 text-teal-700 p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-xl">tips_and_updates</span>
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Savings Opportunities</h3>
        </div>
        <p className="text-xs text-slate-500 ml-11">We found 3 ways to optimize costs</p>
      </div>
      <div className="p-4 space-y-3">
        {opportunities.map((opportunity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            className="flex gap-4 p-3 rounded-xl border border-slate-100 hover:border-teal-200 hover:shadow-sm transition-all bg-white group cursor-pointer"
          >
            <div className="flex-shrink-0 mt-1">
              <span className={`material-symbols-outlined ${opportunity.iconColor}`}>{opportunity.icon}</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900">{opportunity.title}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{opportunity.description}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs font-bold text-slate-900">Save {opportunity.savings}</span>
                <button className="text-[10px] font-bold text-primary hover:text-primary-dark uppercase tracking-wide ml-auto">
                  Review
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-auto p-4 border-t border-slate-50 bg-slate-50/50 text-center">
        <button className="text-xs font-bold text-slate-600 hover:text-primary transition-colors">
          View All Insights
        </button>
      </div>
    </motion.div>
  );
}
