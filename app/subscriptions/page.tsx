import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import SubscriptionsHeader from '@/components/subscriptions/SubscriptionsHeader';
import SubscriptionsFilters from '@/components/subscriptions/SubscriptionsFilters';
import SubscriptionsTable from '@/components/subscriptions/SubscriptionsTable';

export const metadata = {
  title: 'Subscriptions - Renewra',
  description: 'Manage all your subscriptions in one place.',
};

export default function SubscriptionsPage() {
  return (
    <div className="flex h-screen w-full">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full lg:ml-72 relative">
        <SubscriptionsHeader />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 pb-20 bg-background-subtle">
          <div className="max-w-[1400px] mx-auto space-y-6">
            <SubscriptionsFilters />
            <SubscriptionsTable />
          </div>
        </div>
      </main>
    </div>
  );
}
