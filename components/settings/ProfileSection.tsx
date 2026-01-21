'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ProfileSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-100"
    >
      <h3 className="text-lg font-bold text-slate-900 mb-6">Personal Information</h3>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex flex-col items-center gap-4">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center text-slate-300 border-4 border-white shadow-md overflow-hidden">
              <span className="material-symbols-outlined text-[64px]">person</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-1 right-1 bg-primary text-slate-900 p-2 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">edit</span>
            </motion.button>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <button className="text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg px-4 py-2 hover:bg-slate-50 transition-colors w-full">
              Change Avatar
            </button>
          </div>
        </div>
        <div className="flex-1 w-full space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">First Name</label>
              <input
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                type="text"
                defaultValue="John"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">Last Name</label>
              <input
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                type="text"
                defaultValue="Doe"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2">Email Address</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                mail
              </span>
              <input
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                type="email"
                defaultValue="john@acme.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2">Bio</label>
            <textarea
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none h-24 resize-none"
              placeholder="Tell us a little about yourself..."
            ></textarea>
          </div>
          <div className="pt-4 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-slate-900 font-bold px-6 py-2.5 rounded-xl shadow-lg shadow-primary/20 transition-all"
            >
              Save Changes
            </motion.button>
            <button className="bg-white border border-slate-200 text-slate-600 font-bold px-6 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
