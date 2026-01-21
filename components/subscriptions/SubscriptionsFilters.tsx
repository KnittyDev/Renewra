'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SubscriptionsFilters() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 rounded-2xl shadow-soft border border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between"
    >
      <div className="relative w-full md:w-96 group">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
          filter_list
        </span>
        <input
          className="pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm w-full focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all placeholder-slate-400 outline-none"
          placeholder="Filter by name..."
          type="text"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
        <div className="relative">
          <select className="appearance-none bg-slate-50 border-none text-sm font-medium text-slate-600 rounded-xl py-3 pl-4 pr-10 hover:bg-slate-100 cursor-pointer focus:ring-2 focus:ring-primary/50 transition-colors outline-none">
            <option>All Categories</option>
            <option>SaaS</option>
            <option>Entertainment</option>
            <option>Utilities</option>
            <option>Infrastructure</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[20px]">
            expand_more
          </span>
        </div>
        <div className="relative">
          <select className="appearance-none bg-slate-50 border-none text-sm font-medium text-slate-600 rounded-xl py-3 pl-4 pr-10 hover:bg-slate-100 cursor-pointer focus:ring-2 focus:ring-primary/50 transition-colors outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Paused</option>
            <option>Cancelled</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[20px]">
            expand_more
          </span>
        </div>
        <div className="relative">
          <select className="appearance-none bg-slate-50 border-none text-sm font-medium text-slate-600 rounded-xl py-3 pl-4 pr-10 hover:bg-slate-100 cursor-pointer focus:ring-2 focus:ring-primary/50 transition-colors outline-none">
            <option>Price Range</option>
            <option>Under €10</option>
            <option>€10 - €50</option>
            <option>€50 - €100</option>
            <option>Over €100</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[20px]">
            expand_more
          </span>
        </div>
      </div>
    </motion.div>
  );
}
