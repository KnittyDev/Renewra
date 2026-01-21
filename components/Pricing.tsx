'use client';

import React from 'react';
import { motion } from 'framer-motion';

const pricingCardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96] as const
    }
  }
};

export default function Pricing() {
  return (
    <section className="py-24 bg-background-subtle border-t border-slate-100 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Simple, transparent pricing</h2>
          <p className="text-slate-600 text-xl font-light max-w-2xl mx-auto">Start for free and upgrade as you scale. No hidden fees, cancel anytime.</p>
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-slate-700 text-sm font-semibold">Early Bird:</span>
            <span className="text-slate-600 text-sm">Special pricing for first 100 customers</span>
          </motion.div>
          
          {/* Toggle Switch */}
          {/* <div className="flex items-center justify-center gap-4 mt-10">
            <span className="text-sm font-semibold text-slate-500">Monthly</span>
            <div className="relative inline-flex items-center cursor-pointer group">
              <div className="w-14 h-8 bg-slate-200 rounded-full peer-checked:bg-slate-900 transition-colors duration-300"></div>
              <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 group-hover:scale-110"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900">Yearly</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 uppercase tracking-wide">Save 20%</span>
            </div>
          </div> */}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <motion.div 
            variants={pricingCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative group h-full"
          >
            <div className="h-full flex flex-col p-8 lg:p-10 rounded-3xl bg-white/60 backdrop-blur-md border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Free</h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed min-h-[40px]">Perfect for trial users.</p>
              </div>
              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-slate-900 tracking-tighter">€0</span>
                  <span className="text-slate-500 font-medium">/mo</span>
                </div>
              </div>
              <button className="w-full py-4 rounded-xl border border-slate-200 bg-white text-slate-900 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all text-sm mb-10 shadow-sm cursor-pointer">
                Get Started
              </button>
              <div className="flex flex-col gap-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Features</p>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-teal-700 font-bold">check</span>
                  </div>
                  <span className="text-sm text-slate-600">2 Subscription Connections</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-teal-700 font-bold">check</span>
                  </div>
                  <span className="text-sm text-slate-600">Basic Alert System</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-teal-700 font-bold">check</span>
                  </div>
                  <span className="text-sm text-slate-600">Monthly Summary PDF</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Pro Plan (Highlighted) */}
          <motion.div 
            variants={pricingCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="relative group z-10 md:-mt-6"
          >
            <div className="absolute -inset-[2px] bg-gradient-to-b from-primary via-teal-300 to-transparent rounded-[26px] opacity-100 blur-[2px]"></div>
            <div className="relative h-full flex flex-col p-8 lg:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border-t border-white/80 shadow-[0_20px_50px_-12px_rgba(19,236,207,0.3)] transition-transform duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-30 animate-ping"></span>
                  <span className="relative inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest shadow-lg ring-4 ring-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    Most Popular
                  </span>
                </div>
              </div>
              <div className="mb-8 mt-2">
                <h3 className="text-lg font-bold text-primary uppercase tracking-wider">Pro</h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed min-h-[40px]">For power users who need full control.</p>
              </div>
              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">€4.90</span>
                  <span className="text-slate-500 font-medium text-xl">/mo</span>
                </div>
                <div className="mt-3 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-400 line-through">€9.80/mo</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 uppercase tracking-wide">50% OFF</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">Limited to first 100 customers</p>
                </div>
              </div>
              <button className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 shadow-xl shadow-slate-900/10 hover:shadow-slate-900/30 transform hover:-translate-y-0.5 transition-all text-sm mb-10 cursor-pointer">
                Start right now
              </button>
              <div className="flex flex-col gap-5">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">Everything in Starter, plus:</p>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-slate-900 font-bold">check</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Unlimited Subscription Connections</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-slate-900 font-bold">check</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Smart Predictive Alerts</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-slate-900 font-bold">check</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Advanced Analytics & Export</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-slate-900 font-bold">check</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-800">1-Click Cancellation</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Unlimited Plan */}
          <motion.div 
            variants={pricingCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4 }}
            className="relative group h-full"
          >
            <div className="h-full flex flex-col p-8 lg:p-10 rounded-3xl bg-white/60 backdrop-blur-md border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Unlimited</h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed min-h-[40px]">For users who want to manage all their subscriptions in one place.</p>
              </div>
              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-slate-900 tracking-tighter">€49.50</span>
                  <span className="text-slate-500 font-medium">/one time</span>
                </div>
                <div className="mt-3 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-400 line-through">€99/one time</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 uppercase tracking-wide">50% OFF</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">Limited to first 100 customers</p>
                </div>
              </div>
              <button className="w-full py-4 rounded-xl border border-slate-200 bg-white text-slate-900 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all text-sm mb-10 shadow-sm cursor-pointer">
                Get Started
              </button>
              <div className="flex flex-col gap-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Features</p>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-teal-700 font-bold">check</span>
                  </div>
                  <span className="text-sm text-slate-600">Unlimited Subscription Connections</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-teal-700 font-bold">check</span>
                  </div>
                  <span className="text-sm text-slate-600">API Access & Webhooks</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-teal-700 font-bold">check</span>
                  </div>
                  <span className="text-sm text-slate-600">Dedicated Account Manager</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px] text-teal-700 font-bold">check</span>
                  </div>
                  <span className="text-sm text-slate-600">Smart Predictive Alerts</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
