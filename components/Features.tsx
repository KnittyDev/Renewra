'use client';

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Features() {
  return (
    <section className="py-24 bg-white px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Everything you need to control your burn rate</h2>
            <p className="text-slate-600 text-lg">Our platform integrates directly with 12,000+ financial institutions to give you a 360-degree view of your recurring payments.</p>
          </div>
          <a className="text-primary font-bold hover:underline flex items-center gap-1 cursor-pointer" href="#">
            View all features <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Feature 1 */}
          <motion.div variants={itemVariants} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">account_balance</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Tracking</h3>
            <p className="text-slate-500 leading-relaxed">Connect banks instantly to sync transactions and identify subscriptions automatically.</p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div variants={itemVariants} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">notifications_active</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Instant Alerts</h3>
            <p className="text-slate-500 leading-relaxed">Get notified before a charge happens. Never miss a payment or a price hike again.</p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div variants={itemVariants} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">monitoring</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Deep Analytics</h3>
            <p className="text-slate-500 leading-relaxed">Visualize your spending patterns and categorize expenses with custom charts.</p>
          </motion.div>
          
          {/* Feature 4 */}
          <motion.div variants={itemVariants} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">autorenew</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Auto Renewals</h3>
            <p className="text-slate-500 leading-relaxed">Detect free trials ending soon and auto-cancel unwanted services with one click.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
