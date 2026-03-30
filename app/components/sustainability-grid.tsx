"use client";

import { RemixImage } from "./remix-image";
interface CardProps {
  imgSrc: string;
}

const SustainabiltyGrid = () => {
  return (
    <div className="flex flex-col gap-y-4 px-5 lg:px-0">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <XLGridCard imgSrc="/sust/turbines.jpg" />

        <div className="flex h-full flex-col justify-end">
          <SMGridCard imgSrc="/sust/sustainability-1.jpg" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <SMGridCard imgSrc="/sust/plant.jpg" />

        <XLGridCard imgSrc="/sust/sustainable-poster.jpg" />
      </div>
    </div>
  );
};

function XLGridCard({ imgSrc }: CardProps) {
  return (
    <div className="relative h-87.5 w-full overflow-hidden rounded-xl">
      <RemixImage
        layout="fullWidth"
        alt="collaborate"
        src={`${imgSrc}`}
        className="size-full object-cover object-center"
      />
    </div>
  );
}

function SMGridCard({ imgSrc }: CardProps) {
  return (
    <div className="relative h-62.5 w-full overflow-hidden rounded-xl md:h-full xl:h-[70%]">
      <RemixImage
        layout="fullWidth"
        alt="collaborate"
        src={`${imgSrc}`}
        className="size-full object-cover object-center"
      />
    </div>
  );
}

export default SustainabiltyGrid;
