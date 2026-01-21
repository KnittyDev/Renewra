'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { SiNetflix, SiSpotify, SiSlack, SiGithub } from '@icons-pack/react-simple-icons';

const subscriptions = [
  {
    Icon: SiNetflix,
    iconType: 'simple-icon' as const,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    name: 'Netflix',
    category: 'Entertainment',
    planType: 'Premium 4K',
    nextBilling: 'Oct 24, 2023',
    daysLeft: 'In 2 days',
    daysLeftColor: 'text-orange-500',
    cost: '€15.99',
    period: '/mo',
    status: 'Active',
    statusColor: 'text-emerald-700',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100/50',
    statusDot: 'bg-emerald-500',
  },
  {
    iconName: 'logos:figma',
    iconType: 'iconify' as const,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    name: 'Figma',
    category: 'SaaS',
    planType: 'Professional',
    nextBilling: 'Oct 28, 2023',
    daysLeft: null,
    cost: '€12.00',
    period: '/user',
    status: 'Active',
    statusColor: 'text-emerald-700',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100/50',
    statusDot: 'bg-emerald-500',
  },
  {
    iconName: 'mdi:dropbox',
    iconType: 'iconify' as const,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    name: 'Dropbox',
    category: 'Cloud Storage',
    planType: 'Plus 2TB',
    nextBilling: 'Nov 01, 2023',
    daysLeft: null,
    cost: '€9.99',
    period: '/mo',
    status: 'Paused',
    statusColor: 'text-amber-700',
    statusBg: 'bg-amber-50',
    statusBorder: 'border-amber-100/50',
    statusDot: 'bg-amber-500',
  },
  {
    Icon: SiSlack,
    iconType: 'simple-icon' as const,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    name: 'Slack',
    category: 'SaaS',
    planType: 'Pro',
    nextBilling: 'Nov 05, 2023',
    daysLeft: null,
    cost: '€7.25',
    period: '/user',
    status: 'Active',
    statusColor: 'text-emerald-700',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100/50',
    statusDot: 'bg-emerald-500',
  },
  {
    iconName: 'mdi:adobe',
    iconType: 'iconify' as const,
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    name: 'Adobe CC',
    category: 'SaaS',
    planType: 'All Apps',
    nextBilling: 'Nov 10, 2023',
    daysLeft: null,
    cost: '€22.99',
    period: '/mo',
    status: 'Active',
    statusColor: 'text-emerald-700',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100/50',
    statusDot: 'bg-emerald-500',
  },
  {
    Icon: SiSpotify,
    iconType: 'simple-icon' as const,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    name: 'Spotify',
    category: 'Entertainment',
    planType: 'Duo Plan',
    nextBilling: 'Nov 12, 2023',
    daysLeft: null,
    cost: '€12.99',
    period: '/mo',
    status: 'Active',
    statusColor: 'text-emerald-700',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100/50',
    statusDot: 'bg-emerald-500',
  },
  {
    iconName: 'logos:notion',
    iconType: 'iconify' as const,
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-600',
    name: 'Notion',
    category: 'Productivity',
    planType: 'Plus',
    nextBilling: 'Nov 15, 2023',
    daysLeft: null,
    cost: '€8.00',
    period: '/user',
    status: 'Active',
    statusColor: 'text-emerald-700',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100/50',
    statusDot: 'bg-emerald-500',
  },
  {
    Icon: SiGithub,
    iconType: 'simple-icon' as const,
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-600',
    name: 'GitHub',
    category: 'Dev Tools',
    planType: 'Copilot',
    nextBilling: 'Nov 18, 2023',
    daysLeft: null,
    cost: '€10.00',
    period: '/mo',
    status: 'Paused',
    statusColor: 'text-amber-700',
    statusBg: 'bg-amber-50',
    statusBorder: 'border-amber-100/50',
    statusDot: 'bg-amber-500',
  },
];

export default function SubscriptionsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden flex flex-col"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-slate-500 uppercase border-b border-slate-100 bg-slate-50/80">
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">Plan Type</th>
              <th className="px-6 py-4">Next Billing</th>
              <th className="px-6 py-4">Cost</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-50">
            {subscriptions.map((subscription, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="group hover:bg-slate-50/60 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-xl ${subscription.iconBg} flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform`}>
                      {subscription.iconType === 'iconify' ? (
                        <Icon icon={subscription.iconName} className={`w-5 h-5 ${subscription.iconColor}`} />
                      ) : (
                        <subscription.Icon className={`w-5 h-5 ${subscription.iconColor}`} />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900">{subscription.name}</p>
                      <p className="text-xs text-slate-400">{subscription.category}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-slate-600">{subscription.planType}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-slate-600 font-medium">{subscription.nextBilling}</div>
                  {subscription.daysLeft && (
                    <div className={`text-[10px] ${subscription.daysLeftColor} font-bold`}>
                      {subscription.daysLeft}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-slate-900">{subscription.cost}</span>
                  <span className="text-xs text-slate-400">{subscription.period}</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`inline-flex items-center px-2.5 py-1 text-xs font-bold ${subscription.statusColor} ${subscription.statusBg} rounded-full border ${subscription.statusBorder}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${subscription.statusDot} mr-1.5`}></span>
                    {subscription.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-xs font-bold text-slate-400 hover:text-primary border border-slate-200 hover:border-primary/50 px-3 py-1.5 rounded-lg transition-all">
                    Edit
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">Showing 1-8 of 12 subscriptions</span>
        <div className="flex items-center gap-2">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-white transition-colors disabled:opacity-50"
            disabled
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-slate-900 font-bold text-xs shadow-glow">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-white transition-colors text-xs font-medium">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-white transition-colors">
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
