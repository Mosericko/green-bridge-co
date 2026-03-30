import React from "react";
import Icon from "../icon";

interface Props {
  title: string;
  description: string;
  icon: string;
}

export default function Highlight({ title, description, icon }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-black/10 p-5 shadow-xl shadow-black/3">
      <div className="bg-primary-100 flex size-12.5 items-center justify-center rounded-lg">
        <Icon name={icon} className="text-primary" />
      </div>
      <p className="text-lg font-semibold text-black">{title}</p>
      <p className="text-default-500 text-sm">{description}</p>
    </div>
  );
}
