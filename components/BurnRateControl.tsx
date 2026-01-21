'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiNetflix, SiSpotify, SiVodafone, SiGoogleplay } from '@icons-pack/react-simple-icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96] as const
    }
  }
};

const statementVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.43, 0.13, 0.23, 0.96] as const
    }
  }
};

export default function BurnRateControl() {
  return (
    <section className="py-24 bg-background-subtle border-t border-slate-100 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Everything you need to control your burn rate
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Stop the chaos. See all your subscriptions in one clear view.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Problem cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {/* Card 1 */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">description</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Multiple Platforms, One Problem</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Your subscriptions are spread across different apps, email receipts, and bank statements. Finding what you're actually paying for takes hours of detective work.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">event</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Hidden Auto-Renewals</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Free trials silently convert to paid subscriptions. Services you stopped using months ago continue charging your card. You only notice when it's too late.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">bar_chart</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Small Amounts, Big Impact</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Individually, each subscription seems affordable. Combined, they add up to hundreds of euros monthly—money that could be saved or invested elsewhere.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Bank statement mockup */}
          <motion.div
            variants={statementVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              {/* Statement Header */}
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Statement of Account</h3>
                  <span className="text-xs text-slate-400">PG 1 OF 1</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">GLOBAL BANK</h4>
              </div>

              {/* Account Info */}
              <div className="px-6 py-4 border-b border-slate-200">
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Account:</span>
                    <span className="font-semibold text-slate-900">****-5402</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Period:</span>
                    <span className="font-semibold text-slate-900">Jan 01 - Jan 31</span>
                  </div>
                </div>
              </div>

              {/* Total Withdrawals */}
              <div className="px-6 py-6 bg-slate-50 border-b border-slate-200">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Total Withdrawals</span>
                  <span className="text-3xl font-black text-slate-900">-€57.96</span>
                </div>
              </div>

              {/* Transactions Table */}
              <div className="px-6 py-4">
                <div className="grid grid-cols-[80px_1fr_100px] gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                  <div>Date</div>
                  <div>Description</div>
                  <div className="text-right">Amount</div>
                </div>

                <div className="space-y-4">
                  {/* Netflix */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="grid grid-cols-[80px_1fr_100px] gap-4 items-center"
                  >
                    <span className="text-sm font-medium text-slate-900">OCT 04</span>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                        <SiNetflix className="w-5 h-5 text-red-500" />
                      </div>
                      <span className="text-sm font-semibold text-slate-900">Netflix</span>
                    </div>
                    <span className="text-sm font-bold text-slate-900 text-right">-€12.99</span>
                  </motion.div>

                  {/* Spotify */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="grid grid-cols-[80px_1fr_100px] gap-4 items-center"
                  >
                    <span className="text-sm font-medium text-slate-900">OCT 12</span>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                        <SiSpotify className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="text-sm font-semibold text-slate-900">Spotify</span>
                    </div>
                    <span className="text-sm font-bold text-slate-900 text-right">-€9.99</span>
                  </motion.div>

                  {/* Vodafone */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="grid grid-cols-[80px_1fr_100px] gap-4 items-center"
                  >
                    <span className="text-sm font-medium text-slate-900">OCT 15</span>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                        <SiVodafone className="w-5 h-5 text-red-600" />
                      </div>
                      <span className="text-sm font-semibold text-slate-900">Vodafone</span>
                    </div>
                    <span className="text-sm font-bold text-slate-900 text-right">-€29.99</span>
                  </motion.div>

                  {/* Google Play */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="grid grid-cols-[80px_1fr_100px] gap-4 items-center"
                  >
                    <span className="text-sm font-medium text-slate-900">OCT 21</span>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                        <SiGoogleplay className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-sm font-semibold text-slate-900">Google Play</span>
                    </div>
                    <span className="text-sm font-bold text-slate-900 text-right">-€4.99</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
