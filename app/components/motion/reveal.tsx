import { useEffect, useRef, type JSX } from "react";
import { motion, useInView, useAnimation, easeIn } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  children: JSX.Element;
  delay?: number;
  duration?: number;
  className?: string;
  filter?: boolean;
}

export const Reveal = ({
  children,
  delay,
  duration = 0.5,
  className,
  filter = false,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 10,
            filter: filter ? "blur(10px)" : "none",
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: filter ? "blur(0px)" : "none",
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={cn("", className)}
      >
        {children}
      </motion.div>
    </div>
  );
};
