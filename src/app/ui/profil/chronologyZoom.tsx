import React from "react";

interface ChronologyZoomProps {
  text: string;
  style?: string;
}

export default function ChronologyZoom({ text, style }: ChronologyZoomProps) {
  return (
    <div
      className={`overflow-hidden cursor-pointer h-36 w-36 2xl:h-48 2xl:w-48 bg-[var(--clr-light-purple)] rounded-full flex justify-center items-center flex-shrink-0 relative z-[0] group hover:scale-105 m-4 ${style}`}
    >
      <div className="absolute h-[5%] w-48 bg-clrdarkpurple z-[-1] hidden group-hover:block group-hover:animate-spin-slow"></div>
      <div className="h-28 w-28 2xl:h-36 2xl:w-36 bg-[var(--background)] rounded-full flex justify-center items-center">
        <p className="text-center text-sm 2xl:text-base">
          {text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}
