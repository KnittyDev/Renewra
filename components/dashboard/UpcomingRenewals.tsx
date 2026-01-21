'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { SiNetflix, SiSlack } from '@icons-pack/react-simple-icons';

const renewals = [
  {
    Icon: SiNetflix,
    iconType: 'simple-icon' as const,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    name: 'Netflix Premium',
    date: 'Tomorrow',
    amount: '€15.99',
    period: 'Monthly',
  },
  {
    Icon: SiSlack,
    iconType: 'simple-icon' as const,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
    name: 'Slack Pro',
    date: 'In 3 days',
    amount: '€7.25',
    period: 'Per user',
  },
  {
    iconName: 'mdi:adobe',
    iconType: 'iconify' as const,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    name: 'Adobe CC',
    date: 'In 5 days',
    amount: '€22.99',
    period: 'Monthly',
  },
  {
    iconName: 'mdi:aws',
    iconType: 'iconify' as const,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    name: 'AWS',
    date: 'Oct 24',
    amount: '€45.20',
    period: 'Usage based',
  },
];

export default function UpcomingRenewals() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="lg:col-span-4 bg-white rounded-2xl p-6 shadow-soft border border-slate-100 flex flex-col h-full"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-900">Upcoming Renewals</h3>
        <a className="text-xs font-bold text-primary hover:text-primary/80 transition-colors" href="#">
          View All
        </a>
      </div>
      <div className="flex-1 space-y-1">
        {renewals.map((renewal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="group flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100"
          >
            <div className={`w-10 h-10 rounded-lg ${renewal.iconBg} flex items-center justify-center shadow-sm`}>
              {renewal.iconType === 'iconify' ? (
                <Icon icon={renewal.iconName} className={`w-5 h-5 ${renewal.iconColor}`} />
              ) : (
                <renewal.Icon className={`w-5 h-5 ${renewal.iconColor}`} />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-900">{renewal.name}</p>
              <p className="text-xs text-slate-500 font-medium">{renewal.date}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900">{renewal.amount}</p>
              <p className="text-[10px] text-slate-400">{renewal.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
