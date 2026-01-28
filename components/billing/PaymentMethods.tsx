'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const paymentMethods = [
  {
    type: 'card',
    last4: '4242',
    brand: 'Visa',
    expiryMonth: '12',
    expiryYear: '2025',
    isDefault: true,
    holderName: 'John Doe',
  },
  {
    type: 'card',
    last4: '8888',
    brand: 'Mastercard',
    expiryMonth: '08',
    expiryYear: '2026',
    isDefault: false,
    holderName: 'John Doe',
  },
];

export default function PaymentMethods() {
  const [methods, setMethods] = useState(paymentMethods);

  const setAsDefault = (index: number) => {
    setMethods(methods.map((method, i) => ({ ...method, isDefault: i === index })));
  };

  const removeMethod = (index: number) => {
    setMethods(methods.filter((_, i) => i !== index));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-100"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Payment Methods</h3>
          <p className="text-sm text-slate-400 mt-1">Manage your payment methods</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary hover:bg-primary-dark text-slate-900 font-bold px-4 py-2 rounded-xl text-sm shadow-lg shadow-primary/20 transition-all"
        >
          <span className="material-symbols-outlined text-[18px] align-middle mr-1">add</span>
          Add New
        </motion.button>
      </div>
      <div className="space-y-4">
        {methods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-600 text-2xl">credit_card</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">{method.brand}</span>
                  {method.isDefault && (
                    <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 rounded-full border border-emerald-100/50">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-400">•••• •••• •••• {method.last4}</p>
                <p className="text-xs text-slate-500">{method.holderName} • Expires {method.expiryMonth}/{method.expiryYear}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {!method.isDefault && (
                <button
                  onClick={() => setAsDefault(index)}
                  className="text-xs font-bold text-slate-600 hover:text-primary border border-slate-200 hover:border-primary/50 px-3 py-1.5 rounded-lg transition-all"
                >
                  Set as Default
                </button>
              )}
              <button
                onClick={() => removeMethod(index)}
                className="text-xs font-bold text-slate-400 hover:text-red-500 border border-slate-200 hover:border-red-200 px-3 py-1.5 rounded-lg transition-all"
              >
                Remove
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
