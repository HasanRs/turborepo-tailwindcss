export default function HeaderAlert() {
  return (
    <div className='relative isolate flex items-center gap-x-6 overflow-hidden bg-gradient-to-b from-indigo-300 via-indigo-400 to-indigo-500 px-6 py-1.5 text-center transition-all hover:to-indigo-600 sm:px-3.5'>
      <div className='relative mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center'>
        <p className='text-sm leading-6 text-white'>
          <span className='font-semibold'>Koworker:</span> The best way to find
          a coworking friends with virtual space.
        </p>
        <a
          className='flex-none rounded-full bg-black px-3.5 py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'
          href='#_'
        >
          How it works <span aria-hidden='true'>→</span>
        </a>
      </div>
    </div>
  );
}
