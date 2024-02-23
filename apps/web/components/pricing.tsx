export default function Pricing() {
  return (
    <section className='relative bg-[#151522]'>
      <div className='relative mx-auto w-full max-w-7xl items-center px-4 py-24 md:px-12 lg:px-16 lg:py-32'>
        <div className='mx-auto grid grid-cols-1 items-start gap-12 md:grid-cols-2 xl:grid-cols-3'>
          <div className='col-span-full mx-auto max-w-xl lg:pr-6 xl:col-span-1'>
            <div>
              <span className='bg-gradient-to-r from-indigo-300 to-indigo-400 bg-clip-text text-sm uppercase text-transparent'>
                pricing
              </span>
              <h2 className='mt-8 text-3xl font-normal tracking-tight text-white'>
                Always know what you’ll pay from day one.
              </h2>
              <div className='mt-3 max-w-lg'>
                <p className='text-sm text-white/70'>
                  Choose a plan that works the best for you and your team. Start
                  small, upgrade when you need to.
                </p>
              </div>
              <ul className='mt-12 list-none space-y-10' role='list'>
                <li>
                  <div className='text-base text-white/70'>
                    <strong className='text-white'>
                      01. Multiple Locations Support
                    </strong>
                    ― Our platform allows for orders to be placed and fulfilled
                    by multiple locations, making it easy for your users to
                    order from the location closest to them. This feature also
                    allows for regional or seasonal offerings
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <section className='shadow-vulcan-950 flex flex-col rounded-3xl bg-gradient-to-b from-slate-800 via-indigo-500/5 p-[0.060rem] shadow-2xl'>
            <div className='bg-vulcan-900 h-full rounded-3xl px-6 sm:px-8 lg:py-8'>
              <h3 className='mt-5 text-xl text-white'>
                <span className='text-3xl'>$FREE</span> — Fun
              </h3>
              <p className='mt-2 text-base text-white/70'>to hang around</p>
              <ul
                role='list'
                className='text-vulcan-200 order-last mt-10 flex flex-col gap-y-3 text-sm'
              >
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-circle-check h-4 w-4 text-white/70'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M9 12l2 2l4 -4'></path>
                  </svg>
                  <span className='ml-4 text-white/70'>
                    Limited number of users (up to 5)
                  </span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-circle-check h-4 w-4 text-white/70'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M9 12l2 2l4 -4'></path>
                  </svg>
                  <span className='ml-4 text-white/70'>
                    Limited storage (1 GB)
                  </span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-circle-check h-4 w-4 text-white/70'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M9 12l2 2l4 -4'></path>
                  </svg>
                  <span className='ml-4 text-white/70'>
                    Basic support (email only)
                  </span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-circle-check h-4 w-4 text-white/70'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M9 12l2 2l4 -4'></path>
                  </svg>
                  <span className='ml-4 text-white/70'>Basic analytics</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-circle-check h-4 w-4 text-white/70'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M9 12l2 2l4 -4'></path>
                  </svg>
                  <span className='ml-4 text-white/70'>
                    Limited integrations
                  </span>
                </li>
              </ul>
              <div className='mt-8'>
                <a
                  className='bg-vulcan-900 flex h-10 items-center justify-center rounded-lg rounded-xl border border-[#5B5EDC] px-4 py-2 text-sm font-semibold text-white transition-all hover:text-indigo-400'
                  aria-label='Big fish tier'
                  href='/register'
                >
                  Get started
                </a>
              </div>
            </div>
          </section>
          <section className='flex flex-col rounded-3xl bg-gradient-to-b from-indigo-500 via-indigo-500/5 p-[0.060rem] shadow-2xl'>
            <div className='bg-vulcan-900 h-full rounded-3xl px-6 sm:px-8 lg:py-8'>
              <h3 className='mt-5 text-xl text-white'>
                <span className='text-3xl'>$12</span> — Pro
              </h3>
              <p className='mt-2 text-base text-white/70'>
                For medium-sized businesses
              </p>
              <ul
                role='list'
                className='order-last mt-10 flex flex-col gap-y-3 text-sm text-white'
              >
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-circle-check h-4 w-4'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M9 12l2 2l4 -4'></path>
                  </svg>
                  <span className='ml-4'> Unlimited users</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-circle-check h-4 w-4'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M9 12l2 2l4 -4'></path>
                  </svg>
                  <span className='ml-4'>Unlimited storage</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-circle-check h-4 w-4'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M9 12l2 2l4 -4'></path>
                  </svg>
                  <span className='ml-4'>
                    Advanced support (email and phone)
                  </span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-circle-check h-4 w-4'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M9 12l2 2l4 -4'></path>
                  </svg>
                  <span className='ml-4'>Advanced analytics</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-circle-check h-4 w-4'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M9 12l2 2l4 -4'></path>
                  </svg>
                  <span className='ml-4'>Multiple integrations</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-circle-check h-4 w-4'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M9 12l2 2l4 -4'></path>
                  </svg>
                  <span className='ml-4'>Customization options</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-circle-check h-4 w-4'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M9 12l2 2l4 -4'></path>
                  </svg>
                  <span className='ml-4'>99.9% SLA</span>
                </li>
              </ul>
              <div className='mt-8'>
                <a
                  className='flex h-10 items-center justify-center rounded-xl bg-gradient-to-b from-indigo-300 via-indigo-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:to-indigo-600'
                  aria-label='Indie hacker tier'
                  href='/register'
                >
                  Get started
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
