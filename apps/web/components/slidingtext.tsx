import Marquee from 'react-fast-marquee';

export default function SlidingText() {
  return (
    <section className='flex items-end justify-center border-y border-white/5 bg-[#151522]'>
      <div className='justify-center px-0 py-12 md:px-0 lg:px-0 lg:py-24'>
        <div className='items-center'>
          <div className='justify-center text-center'>
            <span className='justify-center text-center'>
              <span className='bg-gradient-to-r from-indigo-300 to-indigo-400 bg-clip-text text-sm uppercase tracking-wide'>
                <Marquee
                  speed={50}
                  pauseOnHover={true}
                  delay={0}
                  className='text-3xl uppercase text-indigo-300'
                >
                  Preparing a lesson, Practicing the guitar, Learning a new
                  language, Doing a code review, Studying for an exam, Planning
                  day, Meditating, Doing coding exercises, Working out,
                  Responding to email, Reviewing a research paper,
                </Marquee>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
