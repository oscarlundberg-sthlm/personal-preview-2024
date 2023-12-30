import skillsList from "@/data/skills";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div className="overflow-hidden sm:pt-0 pt-[calc(var(--container-sidespace)*2)] pb-[calc(5*var(--container-sidespace))] sm:pb-[calc(3*var(--container-sidespace))]">
      <div className="-rotate-2">
        <div className="relative mx-[var(--container-sidespace)] bg-gray-900 font-sans-tight text-gray-400 font-light inline-block border-t border-x border-gray-800 px-2.5 -skew-x-3 text-[clamp(16px,1.5vw,28px)]">
          Some techniques I&apos;ve worked with
        </div>
        <div className="border-y border-gray-800 bg-gray-900 overflow-hidden">
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
  );
}

export default Skills;
