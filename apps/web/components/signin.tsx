import Link from 'next/link';
export default function SignIn() {
  return (
    <div className='flex h-full items-center py-16'>
      <div className='relative mx-auto w-full w-full max-w-md max-w-sm overflow-y-auto rounded-3xl bg-gradient-to-b from-indigo-500 via-indigo-500/5 p-6 p-[0.060rem] shadow-2xl'>
        <div className='bg-vulcan-900 rounded-3xl bg-[#151522] p-10'>
          <div className='flex flex-col text-center'>
            <div>
              <p className='text-lg font-medium text-white lg:text-xl'>
                Log in to Koworker.
              </p>
              <div className='py-3'>
                <span className='relative z-0 mt-3 inline-flex w-full'>
                  <button
                    className='bg-vulcan-900 flex h-10 w-full items-center justify-center rounded-xl border border-[#282C43] px-4 py-2 text-sm font-semibold text-white transition-all hover:text-indigo-400'
                    type='button'
                  >
                    <span>Log in with</span>
                    <span className='order-first mr-3'>
                      <svg
                        fill='none'
                        height='24'
                        viewBox='0 0 32 32'
                        width='24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z'
                          fill='#4285F4'
                        ></path>
                        <path
                          d='M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z'
                          fill='#34A853'
                        ></path>
                        <path
                          d='M8.16007 18.7688C7.85848 17.8977 7.68395 16.9643 7.68395 15.9999C7.68395 15.0354 7.85849 14.1021 8.1442 13.231L8.13621 13.0455L3.67126 9.64734L3.52518 9.71544C2.55696 11.6132 2.0014 13.7444 2.0014 15.9999C2.0014 18.2555 2.55696 20.3865 3.52518 22.2843L8.16007 18.7688Z'
                          fill='#FBBC05'
                        ></path>
                        <path
                          d='M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z'
                          fill='#EB4335'
                        ></path>
                      </svg>
                    </span>
                  </button>
                </span>
                <div className='relative py-3'>
                  <div
                    className='absolute inset-0 flex items-center'
                    aria-hidden='true'
                  >
                    <div className='w-full border-t border-white/5'></div>
                  </div>
                  <div className='relative flex justify-center'>
                    <span className='bg-vulcan-900 px-2 text-sm text-white'>
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <form action='#'>
              <input
                name='hidden'
                autoComplete='false'
                style={{ display: 'none' }}
              />
              <input name='_redirect' type='hidden' value='#' />
              <div className='space-y-3'>
                <div className=''>
                  <label
                    htmlFor='name'
                    className='sr-only mb-3 block text-sm font-medium text-white'
                  >
                    First name
                  </label>
                  <input
                    type='email'
                    placeholder='Your email'
                    className='placeholder-vulcan-400 block h-10 w-full appearance-none rounded-xl border border-[#282C43] bg-transparent px-4 py-3 text-indigo-300 focus:border-indigo-300 focus:bg-transparent focus:outline-none focus:ring-indigo-300 sm:text-sm'
                  />
                </div>
                <div className='col-span-full'>
                  <label
                    className='sr-only mb-3 block text-sm font-medium text-white'
                    htmlFor='company'
                  >
                    Password
                  </label>
                  <input
                    className='placeholder-vulcan-400 block h-10 w-full appearance-none rounded-xl border border-[#282C43] bg-transparent px-4 py-3 text-indigo-300 focus:border-indigo-300 focus:bg-transparent focus:outline-none focus:ring-indigo-300 sm:text-sm'
                    placeholder='Type password here'
                    type='password'
                  />
                </div>
                <div className='col-span-full'>
                  <Link
                    className='flex h-10 items-center justify-center rounded-xl bg-gradient-to-b from-indigo-300 via-indigo-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:to-indigo-600'
                    href='http://localhost:3001'
                  >
                    Sign in
                  </Link>
                </div>
              </div>
              <div className='mt-3'>
                <p className='mx-auto text-center text-sm font-medium leading-tight text-white'>
                  Not a have a password?{' '}
                  <a
                    className='text-indigo-300 hover:text-white'
                    href='/sign-up'
                  >
                    Sign up now
                  </a>
                </p>
                <div className='text-sm'>
                  <a
                    className='font-medium text-white hover:text-indigo-300'
                    href='#'
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
