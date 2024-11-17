import Image from 'next/image';

export default function Title() {
    return (
      <div className="flex justify-around items-center gap-8">
        <div className='flex flex-col items-center relative'>
            <Image
                src="/profil.jpg"
                alt="photo de profil"
                width={100}
                height={100}
                className='rounded-full sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px]'
            />
            <Image
                src="/arrow.svg"
                alt="flèche"
                width={77}
                height={69}
                className='sm:w-[92px] sm:h-[83px] md:w-[110px] md:h-[100px] lg:w-[131px] lg:h-[121px] absolute bottom-[-121px] lg:right-2'
            />
        </div>
            <div className='text-center relative flex flex-col min-w-[50%]'>
                <h1 className='text-2xl md:text-6xl lg:text-8xl '>
                    Aurélia PIC
                </h1>
                <h2 className='text-xl md:text-4xl lg:text-7xl tracking-widest font-fontTitle'>
                    Développeuse Web
                </h2>
                <Image
                src="/whool.svg"
                alt="spirale"
                width={42}
                height={24}
                className="absolute right-0 xl:right-[8%] bottom-0 z-[-1] sm:w-[100px] sm:h-[53px] md:w-[120px] md:h-[64px] lg:w-[168px] lg:h-[89px]"
                 />
            </div>
      </div>
    );
  }
  