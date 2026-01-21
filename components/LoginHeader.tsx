'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LoginHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="px-6 md:px-10 py-6 flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-3 text-slate-900 cursor-pointer group">
          <motion.div
            whileHover={{ rotate: 12 }}
            className="size-8 text-primary transition-transform"
          >
            <span className="material-symbols-outlined !text-[32px] font-bold">donut_small</span>
          </motion.div>
          <h2 className="text-xl font-bold tracking-tight">Renewra</h2>
        </Link>
      </div>
    </motion.header>
  );
}
