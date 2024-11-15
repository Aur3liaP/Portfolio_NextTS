import Image from 'next/image';

export default function Tags() {
    return (
      <div className="">
            <Image
                src="/tags round.svg"
                alt="arrondi"
                width={320}
                height={266}
                className=""
             />
            <div className='w-[140px] h-[45px] bg-[var(--clr-dark-purple)] rounded-full flex items-center justify-center text-white'>
                <p className='font-fontTitle text-2xl'>Positive</p>
            </div>
            <div className='w-[140px] h-[45px] bg-[var(--clr-dark-purple)] rounded-full flex items-center justify-center'>
                <p className='font-fontTitle text-2xl'>Collaborative</p>
            </div>
            <div className='w-[140px] h-[45px] bg-[var(--clr-dark-purple)] rounded-full flex items-center justify-center'>
                <p className='font-fontTitle text-2xl'>Adaptabilité</p>
            </div>
      </div>
    );
  }
  