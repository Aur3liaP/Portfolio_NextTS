import Image from 'next/image';

export default function Description() {
    return (
      <div className="flex justify-end md:justify-center gap-8 ">
            <div className='text-center relative flex flex-col items-center justify-start gap-2 w-[70%] md:w-[50%] mt-[5vh] md:ml-12 lg:max-w-[30%] '>
                <p className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <Image
                src="/draw.svg"
                alt="décor gribouilli"
                width={130}
                height={58}
                className=""
                 />
            </div>
      </div>
    );
  }
  