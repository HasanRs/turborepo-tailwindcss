'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <section className='relative sticky top-0 z-10 overflow-hidden border-b border-white/10 bg-[#151522]/[.6] backdrop-blur-lg'>
      <div className='relative mx-auto w-full max-w-7xl'>
        <div
          className='relative mx-auto flex w-full flex-col p-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-16'
          x-data='{ open: false }'
        >
          <div className='flex flex-row items-center justify-between text-sm text-white lg:justify-start'>
            <Link href='/'>Koworker </Link>
            <button
              onClick={() => {}}
              className='inline-flex items-center justify-center p-2 text-white hover:text-white focus:text-white/50 focus:outline-none md:hidden'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  className='inline-flex'
                  d='M4 6h16M4 12h16M4 18h16'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                ></path>
                <path
                  className='hidden'
                  d='M6 18L18 6M6 6l12 12'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                ></path>
              </svg>
            </button>
          </div>
          <nav className='hidden flex-grow flex-col items-center md:flex md:flex-row md:justify-end md:pb-0'>
            <Link
              href='/sign-in'
              className='focus:shadow-outline mt-2 block px-4 py-2 text-sm text-white hover:text-white/50 focus:outline-none md:mt-0'
            >
              Sign in
            </Link>
            <Link
              href='/sign-up'
              className='active:text-#fff group inline-flex items-center justify-center rounded-xl bg-[#687af0]/10 px-4 py-2 text-sm text-white hover:bg-[#687af0]/5 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#687af0] active:bg-[#687af0]'
            >
              Sign up
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
