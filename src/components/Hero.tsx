"use client";

import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(() => (scrollY.get() > 20 ? 0.1 : 1));

  return (
    <div className=" h-[var(--full-screen-h)] relative inset-0 -z-10 flex items-center justify-center">
      <h1>
        <motion.div
          className="text-gray-50 transition-opacity duration-500 font-sans-tight font-bold text-[9vw] sm:text-[7vw] lg:text-[5vw] uppercase leading-[0.8em]"
          style={{
            opacity: opacity,
          }}
        >
          Oscar Lundberg
        </motion.div>
        <motion.div
          className=" font-smooch transition-opacity duration-500 text-gold text-[6vw] sm:text-[4vw] lg:text-[3vw]"
          style={{
            opacity: opacity,
          }}
        >
          creative coder
        </motion.div>
      </h1>
    </div>
  );
}

export default Hero;
