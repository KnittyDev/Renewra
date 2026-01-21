'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative circle */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -right-[10%] bottom-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"
      ></motion.div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
        >
          Ready to take control of your finances?
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
        >
          Join over 10,000 users who are saving an average of <span className="font-bold text-slate-900">€50/month</span> by cutting unused subscriptions.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 h-14 rounded-xl bg-primary text-slate-900 font-bold text-lg hover:bg-[#0fdcc0] shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-1 cursor-pointer">
            Get Started for Free
          </button>
          <p className="text-sm text-slate-400 sm:hidden mt-2">No credit card required</p>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hidden sm:block text-sm text-slate-400 mt-6"
        >
          No credit card required · Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
