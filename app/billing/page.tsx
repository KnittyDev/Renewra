'use client';

import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import BillingHeader from '@/components/billing/BillingHeader';
import BillingOverview from '@/components/billing/BillingOverview';
import PaymentMethods from '@/components/billing/PaymentMethods';
import BillingHistory from '@/components/billing/BillingHistory';

export default function BillingPage() {
  return (
    <div className="flex h-screen w-full">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full lg:ml-72 relative">
        <BillingHeader />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 pb-20 bg-background-subtle">
          <div className="max-w-[1400px] mx-auto space-y-8">
            <BillingOverview />
            <PaymentMethods />
            <BillingHistory />
          </div>
        </div>
      </main>
    </div>
  );
}
