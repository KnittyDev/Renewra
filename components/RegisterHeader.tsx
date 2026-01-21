'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RegisterHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <Link href="/" className="flex items-center gap-2 group w-fit">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="size-8 text-primary transition-transform"
        >
          <span className="material-symbols-outlined !text-[32px] font-bold">donut_small</span>
        </motion.div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900">Renewra</h2>
      </Link>
    </motion.div>
  );
}
