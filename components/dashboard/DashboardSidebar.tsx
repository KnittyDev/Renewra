'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardSidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-slate-100 h-full fixed left-0 top-0 z-30">
      {/* Logo */}
      <div className="h-20 flex items-center px-8 border-b border-slate-50">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined !text-[32px] font-bold">donut_small</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">Renewra</h2>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-8 space-y-1 overflow-y-auto">
        <Link
          href="/dashboard"
          className={`sidebar-link flex items-center gap-3 px-4 py-3 text-sm rounded-xl mb-1 ${
            pathname === '/dashboard'
              ? 'active font-semibold text-slate-900'
              : 'font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">grid_view</span>
          Dashboard
        </Link>
        <Link
          href="/subscriptions"
          className={`sidebar-link flex items-center gap-3 px-4 py-3 text-sm rounded-xl mb-1 ${
            pathname === '/subscriptions'
              ? 'active font-semibold text-slate-900'
              : 'font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">subscriptions</span>
          Subscriptions
          <span
            className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${
              pathname === '/subscriptions'
                ? 'bg-primary text-teal-900'
                : 'bg-primary/20 text-teal-800'
            }`}
          >
            12
          </span>
        </Link>
        <Link href="#" className="sidebar-link flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 mb-1">
          <span className="material-symbols-outlined text-[22px]">bar_chart</span>
          Analytics
        </Link>
        <Link href="#" className="sidebar-link flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-50 mb-1">
          <span className="material-symbols-outlined text-[22px]">credit_card</span>
          Billing
        </Link>
        <Link
          href="/settings"
          className={`sidebar-link flex items-center gap-3 px-4 py-3 text-sm rounded-xl mb-1 ${
            pathname === '/settings'
              ? 'active font-semibold text-slate-900'
              : 'font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">settings</span>
          Settings
        </Link>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-50">
        <div className="bg-slate-50 rounded-xl p-4 flex items-center gap-3 mb-2 cursor-pointer hover:bg-slate-100 transition-colors">
          <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
            JD
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-bold text-slate-900 truncate">John Doe</p>
            <p className="text-xs text-slate-500 truncate">john@acme.com</p>
          </div>
          <span className="material-symbols-outlined text-slate-400">logout</span>
        </div>
      </div>
    </aside>
  );
}
