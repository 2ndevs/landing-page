"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface BoxFadeInProps {
  className?: string;
  delay?: number;
  duration?: number
  variants?: Variants;
  direction?: "up" | "down" | "none"
  children: ReactNode
}

const directionAxisShift = {
  up: -10,
  down: 10,
  none: 0
}

export default function BoxFadeIn({
  children,
  delay = 0.15,
  duration = 1,
  direction = "up",
  variants,
  className,
}: BoxFadeInProps) {
  return (
    <motion.div
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: { delay, ease: "easeOut", duration },
        },
        hidden: {
          opacity: 0,
          y: directionAxisShift[direction]
        },
        ...variants
      }}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}
