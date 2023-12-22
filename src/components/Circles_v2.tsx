"use client";

import skillsList from "@/data/skills";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function Circles() {
  const skillsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skillsRef,
    offset: ["start end", "end start"],
  });
  const skillTransform = useTransform(() => scrollYProgress.get() * 200 - 200);
  const binocularsVelocity = useSpring(scrollYProgress, {
    damping: 20,
  });
  const binocularsTransformPrep = useTransform(() => {
    const initialXOffset = 133;
    return binocularsVelocity.get() * 133 - initialXOffset;
  });
  const binocularsTransform = useTransform(
    binocularsTransformPrep,
    (value) => `${value}vw`
  );

  const Skills = () => (
    <motion.div
      ref={skillsRef}
      style={{
        x: skillTransform,
      }}
    >
      {[...Array(10).fill(skillsList).flat()].map((skill, i, array) => (
        <span className="inline-block" key={"skillsListInCircles1" + skill + i}>
          <span className="">{skill}&ensp;</span>
        </span>
      ))}
    </motion.div>
  );

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 inset-x-0">
        <div className="relative h-full flex items-center text-white font-sans-tight text-xl font-medium whitespace-nowrap">
          <Skills />
        </div>
      </div>

      <div className="bg-black/50 backdrop-blur-sm h-[10vw]"></div>

      <motion.div
        className="flex w-[233vw] h-[15.8059273416vw]"
        style={{
          x: binocularsTransform,
        }}
      >
        <div className="bg-black/50 backdrop-blur-sm grow"></div>
        <div className="bg-black/50 backdrop-blur-sm shrink-0 min-w-[33vw] max-w-[33vw] mask-binoculars"></div>
        <div className="bg-black/50 backdrop-blur-sm grow"></div>
      </motion.div>

      <div className="bg-black/50 backdrop-blur-sm h-[10vw]"></div>

      <div className="absolute bg-white inset-y-0 left-0 w-[var(--container-sidespace)]"></div>
      <div className="absolute bg-white inset-y-0 right-0 w-[var(--container-sidespace)]"></div>
    </div>
  );
}

export default Circles;
