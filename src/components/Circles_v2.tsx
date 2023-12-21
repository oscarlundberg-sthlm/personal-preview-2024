"use client";

import skillsList from "@/data/skills";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Circles() {
  const skillsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: skillsRef,
    offset: ["start end", "end start"],
  });
  const skillTransform = useTransform(
    () => -1 * scrollYProgress.get() * 300 - 300
  );

  const Skills = () => (
    <motion.div
      ref={skillsRef}
      style={{
        x: skillTransform,
      }}
    >
      {skillsList.map((skill, i, array) => (
        <span className="inline-block" key={"skillsListInCircles1" + skill + i}>
          <span className="">{skill}&ensp;</span>
        </span>
      ))}
    </motion.div>
  );

  return (
    <div className="relative h-[56.85vw] overflow-hidden">
      <div className=" absolute inset-0 mask-circles bg-white"></div>
      <div className=" absolute inset-0 mask-circles-invert bg-gradient-radial from-white to-black mix-blend-multiply"></div>
      <div className="absolute inset-0 mask-circles-invert">
        <div className="relative h-full flex items-center text-white big-text whitespace-nowrap">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default Circles;
