import LoginHeader from '@/components/LoginHeader';
import LoginForm from '@/components/LoginForm';
import LoginSidebar from '@/components/LoginSidebar';

export const metadata = {
  title: 'Login - Renewra',
  description: 'Sign in to your Renewra account to manage your subscriptions.',
};

export default function LoginPage() {
  return (
    <div className="font-sans bg-background-light text-slate-900 antialiased overflow-hidden h-screen flex flex-col">
      <LoginHeader />
      
      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 h-full pt-20">
        {/* Left side - Login Form */}
        <div className="flex flex-col justify-center items-center px-6 sm:px-12 md:px-16 lg:px-24 bg-white relative z-10">
          <LoginForm />
          
          <div className="absolute bottom-6 text-center w-full">
            <p className="text-xs text-slate-400">© 2023 Renewra Inc.</p>
          </div>
        </div>

        {/* Right side - Sidebar with testimonial */}
        <LoginSidebar />
      </div>
    </div>
  );
}
