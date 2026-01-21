'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SecuritySection() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-100"
    >
      <h3 className="text-lg font-bold text-slate-900 mb-6">Change Password</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-2">Current Password</label>
          <div className="relative">
            <input
              type={showCurrentPassword ? 'text' : 'password'}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pr-12 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
              placeholder="Enter current password"
            />
            <button
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <span className="material-symbols-outlined text-[20px]">
                {showCurrentPassword ? 'visibility' : 'visibility_off'}
              </span>
            </button>
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-2">New Password</label>
          <div className="relative">
            <input
              type={showNewPassword ? 'text' : 'password'}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pr-12 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
              placeholder="Enter new password"
            />
            <button
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <span className="material-symbols-outlined text-[20px]">
                {showNewPassword ? 'visibility' : 'visibility_off'}
              </span>
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-2">Must be at least 8 characters</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-2">Confirm New Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pr-12 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
              placeholder="Confirm new password"
            />
            <button
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <span className="material-symbols-outlined text-[20px]">
                {showConfirmPassword ? 'visibility' : 'visibility_off'}
              </span>
            </button>
          </div>
        </div>
        <div className="pt-4 flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-dark text-slate-900 font-bold px-6 py-2.5 rounded-xl shadow-lg shadow-primary/20 transition-all"
          >
            Update Password
          </motion.button>
          <button className="bg-white border border-slate-200 text-slate-600 font-bold px-6 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );
}
