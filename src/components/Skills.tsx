import skillsList from "@/data/skills";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "-49% 0px -49% 0px",
  });

  useEffect(() => {
    if (inView) {
      document.documentElement.style.setProperty("--bg-color", "#202020");
      document.documentElement.style.setProperty("--border-color", "#ffffff");
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="overflow-hidden sm:pt-0 pt-[calc(var(--container-sidespace)*2)] pb-[calc(5*var(--container-sidespace))] sm:pb-[calc(3*var(--container-sidespace))]"
    >
      <div className="-rotate-2">
        <div className="relative mx-[var(--container-sidespace)] bg-white font-sans-tight text-gray-600 font-light inline-block border-t border-x border-gray-900 px-2.5 -skew-x-3 text-[clamp(14px,1.5vw,28px)]">
          Some techniques I've worked with
        </div>
        <div className="border-y border-gray-900 bg-white overflow-hidden">
          <Marquee
            loop={0}
            speed={25}
            pauseOnHover={false}
            direction="right"
            className="font-rocksalt font-semibold text-gray-900 text-lg py-[1em]"
          >
            {[...Array(10).fill(skillsList).flat()].map((skill, i, array) => (
              <div key={"skillsListInCircles1" + skill + i}>
                {skill}&emsp;&emsp;
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
