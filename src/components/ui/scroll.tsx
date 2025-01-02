import React from "react";

type scrollProps = {
  message: string;
};

export const ScrollA: React.FC<scrollProps> = ({ message }) => {
  return (
    <ul className="flex translate-y-12 animate-infinate-scroll-negative whitespace-nowrap text-xl sm:text-2xl md:text-3xl">
      <li className="flex space-x-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <p key={index}>{message}</p>
        ))}
      </li>
    </ul>
  );
};

export const ScrollB: React.FC<scrollProps> = ({ message }) => {
  return (
    <ul className="flex translate-y-12 animate-infinate-scroll-positive whitespace-nowrap text-xl sm:text-2xl md:text-3xl">
      <li className="flex space-x-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <p key={index}>{message}</p>
        ))}
      </li>
    </ul>
  );
};
