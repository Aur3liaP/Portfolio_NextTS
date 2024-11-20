import React from "react";

interface ChronologyZoomProps {
    text: string;
    style?: string;
  }

export default function ChronologyZoom({ text, style }: ChronologyZoomProps) {
    return (
      <div className={`cursor-pointer h-36 w-36 2xl:h-48 2xl:w-48 bg-[var(--clr-light-purple)] rounded-full flex justify-center items-center flex-shrink-0 ${style}`}>
        <div className="h-28 w-28 2xl:h-36 2xl:w-36 bg-[var(--background)] rounded-full flex justify-center items-center">
        <p className="text-center text-sm 2xl:text-base">
          {text.split('\n').map((line, index) => (
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