import skillsList from "@/data/skills";
import useScrollRevealEffect from "@/hooks/useScrollRevealEffect";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

function Skills() {
  const ref = useRef(null);
  const effect = useScrollRevealEffect({ ref: ref });

  useEffect(() => {
    effect();
  }, [effect]);

  return (
    <div className="overflow-hidden sm:pt-[calc(var(--container-sidespace)*1)] pt-[calc(var(--container-sidespace)*4)] pb-[calc(8*var(--container-sidespace))] sm:pb-[calc(3*var(--container-sidespace))]">
      <div ref={ref}>
        <div className="-rotate-2">
          <div className="relative mx-[var(--container-sidespace)] bg-gray-900 font-sans-tight text-gold font-light inline-block  px-2.5 -skew-x-3 text-[clamp(16px,1.5vw,28px)]">
            Professional experience
          </div>
          <div className=" border-y-2 border-gold/70 overflow-hidden">
            <Marquee
              loop={0}
              speed={25}
              pauseOnHover={false}
              direction="right"
              className="font-rocksalt font-semibold text-gray-50 text-lg py-[1em]"
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
    </div>
  );
}

export default Skills;
