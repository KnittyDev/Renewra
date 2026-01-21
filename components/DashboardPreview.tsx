'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiSpotify, SiNetflix } from '@icons-pack/react-simple-icons';

export default function DashboardPreview() {
  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="relative mt-16 w-full max-w-5xl group perspective-1000"
    >
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="relative rounded-2xl overflow-hidden border border-slate-200/60 bg-white shadow-glow transform transition-transform duration-700"
      >
        {/* Mockup Header */}
        <div className="h-12 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          <div className="w-3 h-3 rounded-full bg-slate-300"></div>
        </div>
        
        {/* Mockup Content Image */}
        <div className="relative bg-slate-50 min-h-[400px] md:min-h-[550px] w-full">
          <div className="p-6 md:p-8 grid gap-8">
            {/* Top Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
                <span className="text-sm text-slate-500 font-medium">Total Monthly Spend</span>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-slate-900">€1,240.50</span>
                  <span className="text-xs text-emerald-500 font-bold mb-1 bg-emerald-50 px-1.5 py-0.5 rounded">+12%</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2">
                <span className="text-sm text-slate-500 font-medium">Active Subscriptions</span>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-slate-900">14</span>
                  <span className="text-xs text-slate-400 mb-1">Services</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-2 relative overflow-hidden">
                <span className="text-sm text-slate-500 font-medium">Budget Usage</span>
                <div className="flex items-end relative z-10">
                  <span className="text-3xl font-bold text-slate-900">82%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-primary w-[82%]"></div>
                </div>
              </div>
            </div>
            
            {/* Main Chart Area (Abstracted) */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm min-h-[240px] flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-900">Spending Trends</h3>
                <div className="flex gap-2">
                  <span className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-100">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-100">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </span>
                </div>
              </div>
              
              {/* CSS Graph Representation */}
              <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2 mt-4 border-b border-slate-100 relative">
                {/* Vertical grid lines */}
                <div className="absolute inset-0 w-full h-full flex justify-between pointer-events-none z-0">
                  <div className="w-px h-full bg-slate-50"></div><div className="w-px h-full bg-slate-50"></div><div className="w-px h-full bg-slate-50"></div><div className="w-px h-full bg-slate-50"></div><div className="w-px h-full bg-slate-50"></div><div className="w-px h-full bg-slate-50"></div><div className="w-px h-full bg-slate-50"></div>
                </div>
                
                {/* Bars */}
                <div className="w-full bg-primary/20 rounded-t-sm h-[40%] relative z-10 group hover:bg-primary/40 transition-colors"></div>
                <div className="w-full bg-primary/20 rounded-t-sm h-[55%] relative z-10 group hover:bg-primary/40 transition-colors"></div>
                <div className="w-full bg-primary/20 rounded-t-sm h-[35%] relative z-10 group hover:bg-primary/40 transition-colors"></div>
                <div className="w-full bg-primary/20 rounded-t-sm h-[70%] relative z-10 group hover:bg-primary/40 transition-colors"></div>
                <div className="w-full bg-primary rounded-t-sm h-[90%] relative z-10 shadow-[0_0_15px_rgba(19,236,207,0.4)]"></div>
                <div className="w-full bg-slate-100 rounded-t-sm h-[60%] relative z-10"></div> {/* Future projection */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating Elements for visual flair */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        className="absolute -right-12 top-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden lg:flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
          <SiSpotify className="w-6 h-6 text-green-500" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900">Spotify</p>
          <p className="text-[10px] text-slate-500">Renewing tomorrow</p>
        </div>
        <span className="text-xs font-bold text-slate-900 ml-2">€15.99</span>
      </motion.div>
      
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        whileHover={{ scale: 1.05 }}
        className="absolute -left-8 bottom-32 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden lg:flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
          <SiNetflix className="w-6 h-6 text-red-500" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900">Netflix</p>
          <p className="text-[10px] text-slate-500">Usage alert: 80%</p>
        </div>
        <span className="text-xs font-bold text-slate-900 ml-2">€12.99</span>
      </motion.div>
    </motion.div>
  );
}
