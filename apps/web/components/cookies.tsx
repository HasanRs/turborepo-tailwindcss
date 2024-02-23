export default function Cookies() {
  return (
    <div
      id='cookies-with-stacked-buttons'
      className='fixed bottom-0 end-0 z-[60] mx-auto w-full p-6 sm:max-w-sm'
    >
      <div className='rounded-xl bg-slate-900/[.6] p-4 shadow-2xl shadow-black/[.7] backdrop-blur-lg'>
        <div className='flex items-center justify-between gap-x-5 sm:gap-x-10'>
          <h2 className='font-semibold text-white'>Cookie Settings</h2>
          <button
            type='button'
            className='inline-flex rounded-xl p-2 text-gray-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
            data-hs-remove-element='#cookies-with-stacked-buttons'
          >
            <span className='sr-only'>Dismiss</span>
            <svg
              className='h-4 w-4 flex-shrink-0'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M18 6 6 18'></path>
              <path d='m6 6 12 12'></path>
            </svg>
          </button>
        </div>
        <p className='mt-2 text-sm text-gray-200'>
          We use cookies to improve your experience and for marketing. Visit our{' '}
          <a
            className='inline-flex items-center gap-x-1.5 font-medium text-blue-600 decoration-2 hover:underline'
            href='#'
          >
            Cookies Policy
          </a>{' '}
          to learn more.
        </p>
        <div className='mb-2 mt-5 flex w-full gap-x-2'>
          <div className='grid w-full'>
            <button
              type='button'
              className='inline-flex items-center justify-center gap-x-2 rounded-xl bg-gradient-to-b from-indigo-300 via-indigo-400 to-indigo-500 px-6 py-3 text-center text-sm text-white transition-all duration-200 hover:bg-[#687af0]/5 hover:to-indigo-600 hover:text-[#fff] focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto'
            >
              Allow all
            </button>
          </div>
          <div className='grid w-full'>
            <button
              type='button'
              className='inline-flex items-center justify-center gap-x-2 rounded-xl bg-gradient-to-b from-red-300 via-red-400 to-red-500 px-6 py-3 text-center text-sm text-white transition-all duration-200 hover:bg-[#687af0]/5 hover:to-gray-600 hover:text-[#fff] focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto'
            >
              Reject all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
