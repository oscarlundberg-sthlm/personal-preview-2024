"use client";
import { motion } from "framer-motion";

function Hero() {
  // const { scrollY } = useScroll();
  // const videoTransform = useTransform(() => scrollY.get() * 0.5 * -1);

  return (
    <div className="[--header-height:max(40vw,60vh)] relative h-[var(--header-height)] overflow-hidden">
      <div className="bg-gray-900 -z-20 absolute inset-0"></div>
      <motion.div
        className="absolute -bottom-[3vw] sm:-bottom-[2.5vw] lg:-bottom-[2vw] -inset-x-[2.8vw]"
        initial={{
          scaleX: 1.5,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          type: "tween",
          duration: 1,
          ease: "anticipate",
        }}
      >
        <span className=" uppercase font-sans-tight text-white font-bold text-[22.9vw] leading-[0.5] tracking-[-0.08em]">
          <span className="inline-block -translate-x-[0.4vw]">Oscar</span>
          <br />
          <span className="inline-block">Lundberg</span>
        </span>
      </motion.div>
    </div>
  );
}

export default Hero;
