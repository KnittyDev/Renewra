import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardStats from '@/components/dashboard/DashboardStats';
import UpcomingRenewals from '@/components/dashboard/UpcomingRenewals';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import SpendBreakdown from '@/components/dashboard/SpendBreakdown';

export const metadata = {
  title: 'Dashboard - Renewra',
  description: 'Manage and track all your subscriptions in one place.',
};

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full lg:ml-72 relative">
        <DashboardHeader />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 pb-20 bg-background-subtle">
          <div className="max-w-[1400px] mx-auto space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <DashboardStats />
              <UpcomingRenewals />
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <RecentTransactions />
              <SpendBreakdown />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
