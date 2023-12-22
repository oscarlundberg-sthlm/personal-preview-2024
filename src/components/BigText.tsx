"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
}

function BigText({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const transform = useTransform(
    () => 100 + -1 * scrollYProgress.get() * 100 + "%"
  );

  return (
    <motion.div
      ref={ref}
      className="lg:max-w-[79vw] big-text bg-clip-text bg-diagonal transition-all duration-[2000ms] ease-out"
      style={{
        backgroundPositionX: transform,
      }}
    >
      {children}
    </motion.div>
  );
}

export default BigText;
