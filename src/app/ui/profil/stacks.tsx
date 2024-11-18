import Image from 'next/image';
import { Stack, frontStacks, backStacks, otherStacks } from './stacksArray';

interface StackGroupProps {
    title: string;
    stacks: Stack[];
  }

export default function Stacks() {
  const stacksGroups = [
    { title: 'Front-end', data: frontStacks },
    { title: 'Back-end', data: backStacks },
    { title: 'Autres', data: otherStacks },
  ];

  return (
    <div className="pt-[10vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stacksGroups.map((group, index) => (
        <StackGroup key={index} title={group.title} stacks={group.data} />
      ))}
    </div>
  );
}

function StackGroup({ title, stacks }: StackGroupProps) {
    return (
      <div className="border-4 border-[var(--clr-dark-purple)] rounded-2xl h-72 w-72 flex flex-col justify-between p-4 items-center">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <div className="h-[70%] grid grid-cols-3 gap-4 justify-items-center w-full">
          {stacks.map((stack, index) => (
            <div key={index} className="relative group">
              <Image
                src={stack.src}
                alt={`${stack.name} Logo`}
                width={35}
                height={35}
                className="hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-w-max">
                {stack.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
