import React from "react";
import { ScrollA, ScrollB } from "./ui/scroll";

const Source = () => {
  return (
    <div>
      <h1 className="absolute z-20 bg-mobai-black px-4 text-4xl text-mobai-yellow sm:pb-1 sm:text-5xl xl:text-6xl 2xl:text-7xl">
        SOURCE
      </h1>
      <div className="relative z-10">
        <div className="absolute origin-left -skew-y-12 space-y-4 sm:space-y-6">
          {Array.from({ length: 21 }).map((_, index) =>
            index % 2 == 0 ? (
              <ScrollA key={index} message="将您想转换的文件拖放于此" />
            ) : (
              <ScrollB key={index} message="或点击此处选择您想转换的文件" />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Source;
