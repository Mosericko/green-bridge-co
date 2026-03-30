import React from "react";

interface Props {
  title: string;
  description?: string;
  subTitlte: string;
}

export default function SectionHeading({
  title,
  description,
  subTitlte,
}: Props) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-primary text-sm font-bold uppercase">{subTitlte}</p>

      <h2 className="max-w-5xl text-4xl font-bold text-black">{title}</h2>

      <p className="text-default max-w-lg text-base">{description}</p>
    </div>
  );
}
