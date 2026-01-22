'use client';

import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import AnalyticsHeader from '@/components/analytics/AnalyticsHeader';
import AnalyticsStats from '@/components/analytics/AnalyticsStats';
import SpendingTrendsChart from '@/components/analytics/SpendingTrendsChart';
import SpendByCategory from '@/components/analytics/SpendByCategory';
import SavingsOpportunities from '@/components/analytics/SavingsOpportunities';
import TopSpendersTable from '@/components/analytics/TopSpendersTable';

export default function AnalyticsPage() {
  return (
    <div className="flex h-screen w-full">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full lg:ml-72 relative">
        <AnalyticsHeader />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 pb-20 bg-background-subtle">
          <div className="max-w-[1400px] mx-auto space-y-8">
            <AnalyticsStats />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <SpendingTrendsChart />
              <SpendByCategory />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <SavingsOpportunities />
              <TopSpendersTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
