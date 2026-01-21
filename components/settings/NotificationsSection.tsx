'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function NotificationsSection() {
  const [notifications, setNotifications] = useState({
    renewal1Day: false,
    renewal1Week: true,
    budgetAlert: false,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900">Notifications</h3>
        <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
          Preferences
        </span>
      </div>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-400 text-[18px]">update</span>
            Renewal Reminders
          </h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between group">
              <div>
                <p className="text-sm font-medium text-slate-900">1 day before</p>
                <p className="text-xs text-slate-400">Get notified 24h before renewal</p>
              </div>
              <label className="relative inline-block w-11 h-6 align-middle select-none transition duration-200 ease-in cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.renewal1Day}
                  onChange={() => toggleNotification('renewal1Day')}
                  className="sr-only"
                />
                <span
                  className={`block overflow-hidden h-6 rounded-full transition-colors duration-300 ${
                    notifications.renewal1Day ? 'bg-primary' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`absolute block w-5 h-5 rounded-full bg-white border-4 transition-all duration-300 top-0.5 ${
                      notifications.renewal1Day
                        ? 'left-5 border-primary'
                        : 'left-0.5 border-slate-200'
                    }`}
                  ></span>
                </span>
              </label>
            </div>
            <div className="flex items-center justify-between group">
              <div>
                <p className="text-sm font-medium text-slate-900">1 week before</p>
                <p className="text-xs text-slate-400">Weekly heads-up for renewals</p>
              </div>
              <label className="relative inline-block w-11 h-6 align-middle select-none transition duration-200 ease-in cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.renewal1Week}
                  onChange={() => toggleNotification('renewal1Week')}
                  className="sr-only"
                />
                <span
                  className={`block overflow-hidden h-6 rounded-full transition-colors duration-300 ${
                    notifications.renewal1Week ? 'bg-primary' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`absolute block w-5 h-5 rounded-full bg-white border-4 transition-all duration-300 top-0.5 ${
                      notifications.renewal1Week
                        ? 'left-5 border-primary'
                        : 'left-0.5 border-slate-200'
                    }`}
                  ></span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-slate-50"></div>
        <div>
          <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-400 text-[18px]">attach_money</span>
            Budget Alerts
          </h4>
          <div className="flex items-center justify-between group">
            <div>
              <p className="text-sm font-medium text-slate-900">Over budget alert</p>
              <p className="text-xs text-slate-400">When spend exceeds limits</p>
            </div>
            <label className="relative inline-block w-11 h-6 align-middle select-none transition duration-200 ease-in cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.budgetAlert}
                onChange={() => toggleNotification('budgetAlert')}
                className="sr-only"
              />
              <span
                className={`block overflow-hidden h-6 rounded-full transition-colors duration-300 ${
                  notifications.budgetAlert ? 'bg-primary' : 'bg-slate-200'
                }`}
              >
                <span
                  className={`absolute block w-5 h-5 rounded-full bg-white border-4 transition-all duration-300 top-0.5 ${
                    notifications.budgetAlert
                      ? 'left-5 border-primary'
                      : 'left-0.5 border-slate-200'
                  }`}
                ></span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
