'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type TabType = 'profile' | 'notifications' | 'security' | 'integrations';

interface SettingsTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function SettingsTabs({ activeTab, onTabChange }: SettingsTabsProps) {
  const tabs = [
    { id: 'profile' as TabType, label: 'Profile', icon: 'person' },
    { id: 'notifications' as TabType, label: 'Notifications', icon: 'notifications' },
    { id: 'security' as TabType, label: 'Security', icon: 'security' },
    { id: 'integrations' as TabType, label: 'Integrations', icon: 'integration_instructions' },
  ];

  return (
    <div className="border-b border-slate-200">
      <nav aria-label="Tabs" className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`whitespace-nowrap py-4 px-1 border-b-2 text-sm flex items-center gap-2 transition-colors ${
              activeTab === tab.id
                ? 'border-primary text-primary font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 font-medium'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
