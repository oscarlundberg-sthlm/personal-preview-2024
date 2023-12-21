"use client";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
}

function BigText({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    margin: "0% 0px -20% 0px",
  });

  return (
    <motion.div
      ref={ref}
      className="lg:max-w-[79vw] big-text bg-clip-text bg-diagonal transition-all duration-[2000ms] ease-out"
      style={{
        backgroundPositionX: inView ? "0%" : "100%",
      }}
    >
      {children}
    </motion.div>
  );
}

export default BigText;
