'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SiApple } from '@icons-pack/react-simple-icons';

export default function LoginForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-md space-y-8"
    >
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Welcome back</h1>
        <p className="text-slate-500">Please enter your details to access your dashboard.</p>
      </div>

      <form action="#" className="space-y-6" method="POST">
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700" htmlFor="email">
              Email address
            </label>
            <div className="relative">
              <input
                autoComplete="email"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                id="email"
                name="email"
                placeholder="name@company.com"
                required
                type="email"
              />
              <span className="material-symbols-outlined absolute right-4 top-3.5 text-slate-400 text-[20px] pointer-events-none">
                mail
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                autoComplete="current-password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                type="password"
              />
              <span className="material-symbols-outlined absolute right-4 top-3.5 text-slate-400 text-[20px] pointer-events-none">
                lock
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                id="remember-me"
                name="remember-me"
                type="checkbox"
              />
              <label className="ml-2 block text-sm text-slate-600" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <Link
              className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
              href="#"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98, y: 0 }}
          className="w-full py-3.5 px-4 flex justify-center items-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-slate-900 font-bold text-base shadow-lg shadow-primary/20 transition-all"
          type="button"
        >
          Sign In
        </motion.button>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-slate-400">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-medium text-slate-700 text-sm"
            type="button"
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M12.0003 20.45c4.6667 0 8.45-3.7833 8.45-8.45 0-4.6667-3.7833-8.45-8.45-8.45-4.6667 0-8.45 3.7833-8.45 8.45 0 4.6667 3.7833 8.45 8.45 8.45Z"
                fill="#fff"
              ></path>
              <path
                d="M20.5501 12c0-.6085-.0546-1.1965-.1527-1.7667H12.0001v3.3392h4.793c-.2067 1.1147-.8353 2.0594-1.7794 2.6912v2.2367h2.8812c1.6854-1.5516 2.6552-3.8359 2.6552-6.5004Z"
                fill="#4285F4"
              ></path>
              <path
                d="M12.0001 20.6667c2.4047 0 4.4223-.7974 5.8947-2.1564l-2.8812-2.2367c-.7974.5342-1.8174.8502-3.0135.8502-2.3201 0-4.2839-1.567-4.9856-3.673H4.0747v2.308c1.464 2.909 4.475 4.9079 7.9254 4.9079Z"
                fill="#34A853"
              ></path>
              <path
                d="M7.0145 13.4507c-.1767-.5304-.2778-1.0963-.2778-1.6833 0-.5871.1011-1.153.2778-1.6834V7.776H4.0747c-.6049 1.2057-.949 2.569-.949 4.0173 0 1.4484.3441 2.8117.949 4.0174l2.9398-2.36Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12.0001 7.1661c1.3079 0 2.4827.4497 3.4055 1.3314l2.5357-2.5357C16.4174 4.5262 14.3999 3.6667 12.0001 3.6667 8.55 3.6667 5.5389 5.6657 4.0747 8.5746l2.9398 2.3081c.7017-2.106 2.6655-3.673 4.9856-3.673Z"
                fill="#EA4335"
              ></path>
            </svg>
            Google
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-medium text-slate-700 text-sm"
            type="button"
          >
            <SiApple className="h-5 w-5" />
            Apple
          </motion.button>
        </div>
      </form>

      <p className="text-center text-sm text-slate-500">
        Don't have an account?{' '}
        <Link className="font-bold text-slate-900 hover:text-primary transition-colors" href="/register">
          Sign up
        </Link>
      </p>
    </motion.div>
  );
}
