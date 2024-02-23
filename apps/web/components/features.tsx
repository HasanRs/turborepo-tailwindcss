export default function Features() {
  return (
    <section className='relative scroll-mt-24 bg-[#151522]'>
      <div className='-z-1 absolute left-0 right-0 mx-auto flex h-full w-full flex-row justify-between px-6 lg:h-full lg:max-w-7xl lg:px-0'>
        <div className='h-full w-full border-x border-dashed border-[#f5f5f510]/5'></div>
        <div className='h-full w-full border-x border-dashed border-[#f5f5f510]/5'></div>
        <div className='h-full w-full border-x border-dashed border-[#f5f5f510]/5'></div>
        <div className='h-full w-full border-x border-dashed border-[#f5f5f510]/5'></div>
        <div className='h-full w-full border-x border-dashed border-[#f5f5f510]/5'></div>
        <div className='h-full w-full border-x border-dashed border-[#f5f5f510]/5'></div>
      </div>
      <div className='relative mx-auto max-w-7xl px-8 py-12 md:px-12 lg:px-32 lg:py-24'>
        <div className='max-w-xl'>
          <p className='bg-gradient-to-r from-indigo-300 to-indigo-400 bg-clip-text text-sm uppercase text-transparent'>
            Uninterrupted assistance
          </p>
          <p className='mt-8 text-3xl font-normal tracking-tight text-white'>
            Our platform provides a comprehensive order management and reporting
          </p>
          <p className='mt-4 text-base text-white/70'>
            Experience our unwavering commitment to exceptional customer service
            with round-the-clock support from our dedicated team of
            knowledgeable professionals, ready to assist you with any banking
            inquiries or concerns.
          </p>
        </div>
        <div>
          <ul
            className='mt-6 grid list-none grid-cols-2 gap-8 md:grid-cols-3 lg:mt-24 lg:gap-12'
            role='list'
          >
            <li>
              <div>
                <div className='text-indigo-400'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
                    ></path>
                  </svg>
                </div>
                <p className='mt-5 text-lg font-medium text-white lg:text-xl'>
                  Easy Integration
                </p>
              </div>
              <div className='mt-2 text-base text-white/70'>
                Our baking API allows for seamless integration with your website
                or app.
              </div>
            </li>
            <li>
              <div>
                <div className='text-indigo-400'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                </div>
                <p className='mt-5 text-lg font-medium text-white lg:text-xl'>
                  Customizable Ordering Options
                </p>
              </div>
              <div className='mt-2 text-base text-white/70'>
                Our platform allows for flexible ordering options, including
                bulk ordering.
              </div>
            </li>
            <li>
              <div>
                <div className='text-indigo-400'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z'
                    ></path>
                  </svg>
                </div>
                <p className='mt-5 text-lg font-medium text-white lg:text-xl'>
                  Real-time Order Tracking
                </p>
              </div>
              <div className='mt-2 text-base text-white/70'>
                With real-time order tracking, your users can stay informed
                about the status.
              </div>
            </li>
          </ul>
        </div>
        <div className='mt-12 grid grid-cols-1 items-start gap-12 lg:mt-24 lg:grid-cols-2 lg:gap-32'>
          <div>
            <h2 className='text-3xl font-normal tracking-tight text-white'>
              Secure Payment Processing
            </h2>
            <p className='mt-5 text-base text-white/70'>
              We use industry-standard encryption and security measures to
              ensure that your users' sensitive information is kept safe and
              secure. Our platform supports a variety of payment methods,
              including credit cards and PayPal.
            </p>
            <ul className='mt-12 list-none space-y-10' role='list'>
              <li>
                <div className='text-base text-white/70'>
                  <strong className='text-white'>
                    01. Multiple Locations Support
                  </strong>
                  ― Our platform allows for orders to be placed and fulfilled by
                  multiple locations, making it easy for your users to order
                  from the location closest to them. This feature also allows
                  for regional or seasonal offerings
                </div>
              </li>
              <li>
                <div className='text-base text-white/70'>
                  <strong className='text-white'>
                    02. Support for Custom Recipes and Products
                  </strong>
                  ― Our baking platform allows for custom recipes and products
                  to be added, giving your users the ability to order unique
                  items that are not listed on the menu. This feature is perfect
                  for special events or for accommodating the needs of
                  particular customers
                </div>
              </li>
            </ul>
          </div>
          <div className='border-mercury-400 mt-12 w-full lg:ml-auto lg:mt-0'>
            <img
              src='https://images.unsplash.com/photo-1702134599627-6b74bf1c2688?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Baking'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
