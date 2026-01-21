import RegisterHeader from '@/components/RegisterHeader';
import RegisterForm from '@/components/RegisterForm';
import RegisterSidebar from '@/components/RegisterSidebar';

export const metadata = {
  title: 'Create Account - Renewra',
  description: 'Create your Renewra account to start managing your subscriptions.',
};

export default function RegisterPage() {
  return (
    <div className="font-sans bg-background-light text-slate-900 antialiased h-screen flex overflow-hidden">
      {/* Left side - Register Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:w-[45%] xl:w-[40%] bg-white h-full overflow-hidden relative z-10">
        <div className="mx-auto w-full max-w-sm lg:w-[400px] py-6">
          <RegisterHeader />
          <RegisterForm />
        </div>
      </div>

      {/* Right side - Sidebar */}
      <RegisterSidebar />
    </div>
  );
}
