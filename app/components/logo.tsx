import { cn } from "@heroui/react";
import React from "react";
import { Link } from "react-router";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant: "light" | "dark";
}

export default function Logo({ variant, className, ...props }: Props) {
  return (
    <Link
      className={cn(
        variant === "light" ? "text-white" : "text-primary-500",
        "font-heading cursor-pointer text-xl font-bold tracking-tight select-none md:text-2xl 2xl:text-3xl",
      )}
      to="/"
    >
      Green Bridge
    </Link>
  );
}
