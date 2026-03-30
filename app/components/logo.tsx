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
        "font-heading cursor-pointer text-2xl font-bold tracking-tight select-none 2xl:text-3xl",
      )}
      to="/"
    >
      Green Bridge
    </Link>
  );
}
