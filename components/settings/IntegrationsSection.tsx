'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function IntegrationsSection() {
  const integrations = [
    { name: 'Bank Account', icon: 'account_balance', connected: true, description: 'Connected to 2 accounts' },
    { name: 'Xero', icon: 'receipt_long', connected: true, description: 'Synced' },
    { name: 'QuickBooks', icon: 'calculate', connected: false, description: 'Not connected' },
    { name: 'Stripe', icon: 'payment', connected: false, description: 'Not connected' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-100"
    >
      <h3 className="text-lg font-bold text-slate-900 mb-6">Connected Services</h3>
      <div className="space-y-4">
        {integrations.map((integration, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                integration.connected ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'
              }`}>
                <span className="material-symbols-outlined text-[24px]">{integration.icon}</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{integration.name}</p>
                <p className="text-xs text-slate-400">{integration.description}</p>
              </div>
            </div>
            {integration.connected ? (
              <span className="inline-flex items-center px-3 py-1 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-full border border-emerald-100/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                Connected
              </span>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-slate-900 font-bold px-4 py-2 rounded-xl text-xs shadow-sm transition-all"
              >
                Connect
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
