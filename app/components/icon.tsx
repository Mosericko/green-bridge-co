import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
}

export const Icon = ({ name, className, ...props }: Props) => (
  <span
    className={cn("dark:text-default-500 size-6 fill-current", name, className)}
    {...props}
  />
);
export default Icon;
