export default function Footer() {
  return (
    <footer className='relative  border-t border-white/5 bg-[#151723]'>
      <svg
        className='absolute right-0 opacity-80 blur-3xl'
        width='50%'
        height='100%'
        viewBox='0 0 400 400'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_17_60)'>
          <g filter='url(#filter0_f_17_60)'>
            <path
              d='M128.6 0H0V322.2L332.5 211.5L128.6 0Z'
              fill='#4D07E3'
            ></path>
            <path
              d='M0 322.2V400H240H320L332.5 211.5L0 322.2Z'
              fill='#4C00FF'
            ></path>
            <path
              d='M320 400H400V78.75L332.5 211.5L320 400Z'
              fill='#7fcef3'
            ></path>
            <path
              d='M400 0H128.6L332.5 211.5L400 78.75V0Z'
              fill='#7fcef3'
            ></path>
          </g>
        </g>
        <defs>
          <filter
            id='filter0_f_17_60'
            x='-159.933'
            y='-159.933'
            width='719.867'
            height='719.867'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix'></feFlood>
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            ></feBlend>
            <feGaussianBlur
              stdDeviation='79.9667'
              result='effect1_foregroundBlur_17_60'
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
      <div className='relative mx-auto max-w-7xl px-8 py-12 md:px-12 lg:px-32 lg:py-24'>
        <div className='xl:grid xl:grid-cols-4 xl:gap-8'>
          <div className='text-white'>
            <div className='inline-flex items-center gap-3'>
              <p className=''>Koworker</p>
            </div>
            <p className='mt-2 text-sm text-white/70'>
              <span className='mt-6 text-sm font-normal text-white/70'>
                © 2024 Koworker All rights reserved
              </span>
            </p>
          </div>
          <div className='grid grid-cols-2 gap-8 xl:col-span-3'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-white'>Navigation</h3>
                <ul role='list' className='mt-4 space-y-2'>
                  <li>
                    <a
                      className='inline-flex items-center text-sm text-white/70 hover:text-white'
                      href='/system/overview'
                    >
                      Carrier
                      <span className='ml-4 inline-flex items-center rounded-full bg-indigo-800 px-3 py-0.5 text-xs font-medium text-indigo-400'>
                        +9 Available
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='/components/overview'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href='/components/overview'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href='/system/styleguide'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Sign in
                    </a>
                  </li>
                  <li>
                    <a
                      href='/system/styleguide'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Sign up
                    </a>
                  </li>
                  <li>
                    <a
                      href='/system/styleguide'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Forgot password
                    </a>
                  </li>
                  <li>
                    <a
                      href='/system/styleguide'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-white'>Utilities</h3>
                <ul role='list' className='mt-4 space-y-2'>
                  <li>
                    <a
                      href='#'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Changelog
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Case Study
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Method
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Data Process Agreement
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Terms Of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-white'>Other</h3>
                <ul role='list' className='mt-4 space-y-2'>
                  <li>
                    <a
                      href='https://www.lexingtonthemes.com/license'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Stay updated
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.lexingtonthemes.com/documentation'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.lexingtonthemes.com/documentation'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Brand
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-white'>Socials</h3>
                <ul role='list' className='mt-4 space-y-2'>
                  <li>
                    <a
                      href='/'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Twitter
                      <span className='ml-4 inline-flex items-center rounded-full bg-indigo-800 px-3 py-0.5 text-xs font-medium text-indigo-400'>
                        @koworker
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Instagram
                      <span className='ml-4 inline-flex items-center rounded-full bg-indigo-800 px-3 py-0.5 text-xs font-medium text-indigo-400'>
                        @kowork
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='text-sm text-white/70 hover:text-white'
                    >
                      Dribbble
                      <span className='ml-4 inline-flex items-center rounded-full bg-indigo-800 px-3 py-0.5 text-xs font-medium text-indigo-400'>
                        @koworker
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
