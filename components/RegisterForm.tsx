'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SiApple } from '@icons-pack/react-simple-icons';

export default function RegisterForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create your account</h2>
        <p className="mt-2 text-sm text-slate-600">
          Start optimizing your subscriptions today. No credit card required.
        </p>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-3 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus-visible:outline-offset-0 transition-all"
            type="button"
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M12.0003 20.45c4.6486 0 8.5487-3.1979 9.8967-7.5501h-2.1818c-1.1593 3.1613-4.1953 5.4167-7.7149 5.4167-4.5222 0-8.1997-3.6775-8.1997-8.1997 0-4.5222 3.6775-8.1997 8.1997-8.1997 2.1158 0 4.0454.7981 5.5189 2.112l1.6253-1.6253C16.9206.9455 14.5826 0 12.0003 0 5.3726 0 0 5.3726 0 12c0 6.6274 5.3726 12 12.0003 12Z"
                fill="#EA4335"
                fillOpacity="0"
              ></path>
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            <span className="text-sm font-semibold">Google</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-3 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus-visible:outline-offset-0 transition-all"
            type="button"
          >
            <SiApple className="h-5 w-5" />
            <span className="text-sm font-semibold">Apple</span>
          </motion.button>
        </div>

        <div className="relative mt-4">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-xs font-medium leading-6">
            <span className="bg-white px-4 text-slate-500">Or register with email</span>
          </div>
        </div>

        <form action="#" className="mt-4 space-y-4" method="POST">
          <div>
            <label className="block text-xs font-medium leading-6 text-slate-900" htmlFor="name">
              Full Name
            </label>
            <div className="mt-1.5">
              <input
                autoComplete="name"
                className="block w-full rounded-xl border-0 py-2.5 px-3 text-sm text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary bg-slate-50/50 outline-none transition-all"
                id="name"
                name="name"
                required
                type="text"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium leading-6 text-slate-900" htmlFor="email">
              Work Email
            </label>
            <div className="mt-1.5">
              <input
                autoComplete="email"
                className="block w-full rounded-xl border-0 py-2.5 px-3 text-sm text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary bg-slate-50/50 outline-none transition-all"
                id="email"
                name="email"
                required
                type="email"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium leading-6 text-slate-900" htmlFor="password">
              Password
            </label>
            <div className="mt-1.5">
              <input
                autoComplete="new-password"
                className="block w-full rounded-xl border-0 py-2.5 px-3 text-sm text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary bg-slate-50/50 outline-none transition-all"
                id="password"
                name="password"
                required
                type="password"
              />
            </div>
            <div className="mt-1.5 text-[10px] text-slate-500 flex gap-2 items-center">
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Must be at least 8 characters
            </div>
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input
              className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer mt-0.5"
              id="terms"
              name="terms"
              type="checkbox"
            />
            <label className="block text-xs leading-5 text-slate-600" htmlFor="terms">
              I agree to the{' '}
              <Link className="font-semibold text-slate-900 hover:text-primary hover:underline" href="#">
                Terms
              </Link>{' '}
              and{' '}
              <Link className="font-semibold text-slate-900 hover:text-primary hover:underline" href="#">
                Privacy Policy
              </Link>
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="flex w-full justify-center rounded-xl bg-primary py-2.5 px-3 text-sm font-bold text-slate-900 shadow-soft hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all mt-3"
            type="submit"
          >
            Create Account
          </motion.button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-600">
          Already have an account?{' '}
          <Link className="font-bold text-slate-900 hover:text-primary transition-colors" href="/login">
            Log in
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
