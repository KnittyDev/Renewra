'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BillingOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-100"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Current Plan</h3>
            <p className="text-sm text-slate-400 mt-1">Manage your subscription</p>
          </div>
          <span className="bg-primary/10 text-teal-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            Active
          </span>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">workspace_premium</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Pro Plan</h4>
                <p className="text-sm text-slate-400">Billed monthly</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-slate-900">€12.00</p>
              <p className="text-xs text-slate-400">per month</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Next billing date</span>
              <span className="font-bold text-slate-900">Nov 15, 2023</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Billing cycle</span>
              <span className="font-bold text-slate-900">Monthly</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Auto-renewal</span>
              <span className="inline-flex items-center px-2.5 py-1 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-full border border-emerald-100/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                Enabled
              </span>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-100 flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-primary hover:bg-primary-dark text-slate-900 font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-primary/20 transition-all"
            >
              Upgrade Plan
            </motion.button>
            <button className="flex-1 bg-white border border-slate-200 text-slate-600 font-bold px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
              Cancel Subscription
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-100"
      >
        <h3 className="text-lg font-bold text-slate-900 mb-6">Billing Summary</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">This month</span>
            <span className="text-lg font-bold text-slate-900">€12.00</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Last month</span>
            <span className="text-lg font-bold text-slate-900">€12.00</span>
          </div>
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-900">Total this year</span>
              <span className="text-xl font-black text-slate-900">€144.00</span>
            </div>
            <p className="text-xs text-slate-400">12 months × €12.00</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
