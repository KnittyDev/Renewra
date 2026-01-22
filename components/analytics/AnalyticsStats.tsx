'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: 'calendar_month',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    label: 'Avg Monthly',
    value: '€845.00',
    trend: '+2.4%',
    trendColor: 'text-teal-600',
    trendIcon: 'arrow_upward',
    comparison: 'vs last month',
  },
  {
    icon: 'account_balance_wallet',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    label: 'YTD Total',
    value: '€10,140.00',
    trend: '+5.1%',
    trendColor: 'text-red-500',
    trendIcon: 'arrow_upward',
    comparison: 'vs last year',
  },
  {
    icon: 'savings',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    label: 'Potential Savings',
    value: '€1,440.00',
    trend: null,
    trendColor: null,
    trendIcon: null,
    comparison: 'Est. annual savings',
  },
];

export default function AnalyticsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center ${stat.iconColor}`}>
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
          </div>
          <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h3>
          <div className="flex items-center gap-2 text-sm">
            {stat.trend && (
              <span className={`${stat.trendColor} font-bold flex items-center`}>
                <span className="material-symbols-outlined text-[16px]">{stat.trendIcon}</span>
                {stat.trend}
              </span>
            )}
            <span className="text-slate-400">{stat.comparison}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
