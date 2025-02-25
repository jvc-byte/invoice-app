import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is an {' '}
            <a href="https://invoice-app-eight-chi.vercel.app/" className="text-blue-500">
              Invoice application
            </a>
            , brought to you by {' '} <a href="https://github.com/jvc-byte" className="text-blue-500">
              jvcByte
            </a>
            <p className='text-lg mt-8'>Default Login Email: <span className="text-red-500">user@nextmail.com</span></p>
            <p className='text-lg mt-2'>Default Login Password: <span className="text-red-500">123456</span></p>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Desktop hero image */}
          <Image
            src="/hero-desktop.png"
            alt="Screenshot of the invoice project showing the desktop version"
            width={1000}
            height={760}
            className="hidden md:block"
          />
          {/* Mobile hero image */}
          <Image
            src="/hero-mobile.png"
            alt="Screenshot of the invoice project showing the mobile version"
            width={560}
            height={620}
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
