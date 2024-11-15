import Image from 'next/image';

export default function Tags() {
    return (
      <div className="relative max-w-[320px] hidden md:block">
            <Image
                src="/tags round.svg"
                alt="arrondi"
                width={320}
                height={266}
                className=""
             />
            <div className='w-[140px] h-[45px] bg-[var(--clr-dark-purple)] rounded-full flex items-center justify-center text-white absolute -left-10 top-24 rotate-12'>
                <p className='font-fontTitle text-2xl'>Positive</p>
            </div>
            <div className='w-[140px] h-[45px] bg-[var(--clr-yellow)] rounded-full flex items-center justify-center absolute -right-10 top-16 -rotate-12'>
                <p className='font-fontTitle text-2xl'>Collaborative</p>
            </div>
            <div className='w-[140px] h-[45px] bg-[var(--clr-light-purple)] rounded-full flex items-center justify-center absolute right-8 bottom-4'>
                <p className='font-fontTitle text-2xl'>Adaptabilité</p>
            </div>
      </div>
    );
  }
  