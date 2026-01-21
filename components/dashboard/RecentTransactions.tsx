'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiSpotify, SiZoom, SiGithub, SiVercel } from '@icons-pack/react-simple-icons';

const transactions = [
  {
    Icon: SiSpotify,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    name: 'Spotify',
    plan: 'Family Plan',
    category: 'Entertainment',
    categoryColor: 'text-purple-700',
    categoryBg: 'bg-purple-50',
    date: 'Oct 18, 2023',
    amount: '€16.99',
    status: 'Paid',
    statusColor: 'text-emerald-600',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100',
  },
  {
    Icon: SiZoom,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    name: 'Zoom',
    plan: 'Pro License',
    category: 'SaaS',
    categoryColor: 'text-teal-700',
    categoryBg: 'bg-teal-50',
    date: 'Oct 16, 2023',
    amount: '€14.99',
    status: 'Paid',
    statusColor: 'text-emerald-600',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100',
  },
  {
    Icon: SiGithub,
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-600',
    name: 'GitHub',
    plan: 'Team',
    category: 'SaaS',
    categoryColor: 'text-teal-700',
    categoryBg: 'bg-teal-50',
    date: 'Oct 15, 2023',
    amount: '€4.00',
    status: 'Pending',
    statusColor: 'text-slate-500',
    statusBg: 'bg-slate-100',
    statusBorder: 'border-slate-200',
  },
  {
    Icon: SiVercel,
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    name: 'Vercel',
    plan: 'Pro',
    category: 'Infrastructure',
    categoryColor: 'text-orange-700',
    categoryBg: 'bg-orange-50',
    date: 'Oct 12, 2023',
    amount: '€20.00',
    status: 'Paid',
    statusColor: 'text-emerald-600',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100',
  },
];

export default function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="lg:col-span-8 bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden flex flex-col"
    >
      <div className="px-6 py-5 border-b border-slate-50 flex justify-between items-center">
        <h3 className="font-bold text-slate-900">Recent Transactions</h3>
        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-[20px]">filter_list</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-slate-500 uppercase border-b border-slate-50 bg-slate-50/50">
              <th className="px-6 py-3">Service</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-50">
            {transactions.map((transaction, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${transaction.iconBg} flex items-center justify-center mr-3`}>
                      <transaction.Icon className={`w-4 h-4 ${transaction.iconColor}`} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900">{transaction.name}</p>
                      <p className="text-xs text-slate-400">{transaction.plan}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-semibold leading-tight ${transaction.categoryColor} ${transaction.categoryBg} rounded-full`}>
                    {transaction.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">{transaction.date}</td>
                <td className="px-6 py-4 text-sm font-bold text-slate-900">{transaction.amount}</td>
                <td className="px-6 py-4 text-right">
                  <span className={`px-2.5 py-1 text-xs font-bold ${transaction.statusColor} ${transaction.statusBg} rounded-lg border ${transaction.statusBorder}`}>
                    {transaction.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
