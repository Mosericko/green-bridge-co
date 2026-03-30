import { cn } from "@/lib/utils";
import { type ReactNode } from "react";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Container = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        className,
        "container mx-auto p-5 lg:p-8 2xl:max-w-7xl 2xl:p-0",
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
