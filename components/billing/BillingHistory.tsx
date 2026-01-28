'use client';

import React from 'react';
import { motion } from 'framer-motion';

const invoices = [
  {
    id: 'INV-2023-001',
    date: 'Oct 15, 2023',
    amount: 12.00,
    status: 'Paid',
    statusColor: 'text-emerald-700',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100/50',
    statusDot: 'bg-emerald-500',
    plan: 'Pro Plan',
  },
  {
    id: 'INV-2023-002',
    date: 'Sep 15, 2023',
    amount: 12.00,
    status: 'Paid',
    statusColor: 'text-emerald-700',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100/50',
    statusDot: 'bg-emerald-500',
    plan: 'Pro Plan',
  },
  {
    id: 'INV-2023-003',
    date: 'Aug 15, 2023',
    amount: 12.00,
    status: 'Paid',
    statusColor: 'text-emerald-700',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100/50',
    statusDot: 'bg-emerald-500',
    plan: 'Pro Plan',
  },
  {
    id: 'INV-2023-004',
    date: 'Jul 15, 2023',
    amount: 12.00,
    status: 'Paid',
    statusColor: 'text-emerald-700',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100/50',
    statusDot: 'bg-emerald-500',
    plan: 'Pro Plan',
  },
  {
    id: 'INV-2023-005',
    date: 'Jun 15, 2023',
    amount: 12.00,
    status: 'Paid',
    statusColor: 'text-emerald-700',
    statusBg: 'bg-emerald-50',
    statusBorder: 'border-emerald-100/50',
    statusDot: 'bg-emerald-500',
    plan: 'Pro Plan',
  },
];

export default function BillingHistory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden flex flex-col"
    >
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Billing History</h3>
          <p className="text-sm text-slate-400 mt-1">View and download your invoices</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold px-4 py-2 rounded-xl text-sm transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          Export All
        </motion.button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-slate-500 uppercase border-b border-slate-100 bg-slate-50/80">
              <th className="px-6 py-4">Invoice ID</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Plan</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-50">
            {invoices.map((invoice, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="group hover:bg-slate-50/60 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="font-bold text-sm text-slate-900">{invoice.id}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-600">{invoice.date}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-slate-600">{invoice.plan}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-slate-900">€{invoice.amount.toFixed(2)}</span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`inline-flex items-center px-2.5 py-1 text-xs font-bold ${invoice.statusColor} ${invoice.statusBg} rounded-full border ${invoice.statusBorder}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${invoice.statusDot} mr-1.5`}></span>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-xs font-bold text-slate-400 hover:text-primary border border-slate-200 hover:border-primary/50 px-3 py-1.5 rounded-lg transition-all">
                    Download
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">Showing 1-5 of 12 invoices</span>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-white transition-colors disabled:opacity-50" disabled>
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
