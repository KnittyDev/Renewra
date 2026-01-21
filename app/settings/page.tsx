'use client';

import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import SettingsHeader from '@/components/settings/SettingsHeader';
import SettingsTabs from '@/components/settings/SettingsTabs';
import ProfileSection from '@/components/settings/ProfileSection';
import NotificationsSection from '@/components/settings/NotificationsSection';
import SecuritySection from '@/components/settings/SecuritySection';
import IntegrationsSection from '@/components/settings/IntegrationsSection';
import { motion } from 'framer-motion';

type TabType = 'profile' | 'notifications' | 'security' | 'integrations';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSection />;
      case 'notifications':
        return (
          <div className="lg:col-span-8">
            <NotificationsSection />
          </div>
        );
      case 'security':
        return <SecuritySection />;
      case 'integrations':
        return <IntegrationsSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="flex h-screen w-full">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full lg:ml-72 relative">
        <SettingsHeader />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 pb-20 bg-background-subtle">
          <div className="max-w-[1400px] mx-auto space-y-6">
            <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
              {activeTab === 'profile' ? (
                <>
                  <div className="lg:col-span-8 space-y-8">
                    {renderTabContent()}
                  </div>
                  <div className="lg:col-span-4 space-y-8">
                    <NotificationsSection />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-primary/5 rounded-2xl p-6 border border-primary/20"
                    >
                      <div className="flex gap-3 mb-2">
                        <span className="material-symbols-outlined text-teal-600">tips_and_updates</span>
                        <h4 className="font-bold text-slate-900">Did you know?</h4>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Completing your profile helps us personalize your subscription recommendations and can improve your monthly savings by up to 15%.
                      </p>
                    </motion.div>
                  </div>
                </>
              ) : (
                <div className="lg:col-span-8 space-y-8">
                  {renderTabContent()}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
