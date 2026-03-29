import React, { type ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  direction?: 1 | -1;
  viewport?: {
    once?: boolean;
    amount?: number;
  };
  [key: string]: any;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  animation?:
    | "fadeUp"
    | "fadeIn"
    | "scale"
    | "slideLeft"
    | "slideRight"
    | "rotate";
  duration?: number;
  [key: string]: any;
}

// Stagger Container Component
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  className = "",
  direction = 1,
  viewport = { once: true, amount: 0.3 },
  ...props
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
        staggerDirection: direction,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Stagger Item Component
export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = "",
  animation = "fadeUp",
  duration = 0.5,
  ...props
}) => {
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: "easeOut" },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration, ease: "easeOut" },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration, ease: "easeOut" },
      },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, ease: "easeOut" },
      },
    },
    slideRight: {
      hidden: { opacity: 0, x: 30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, ease: "easeOut" },
      },
    },
    rotate: {
      hidden: { opacity: 0, rotateY: -90 },
      visible: {
        opacity: 1,
        rotateY: 0,
        transition: { duration, ease: "easeOut" },
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={animations[animation]}
      {...props}
    >
      {children}
    </motion.div>
  );
};
