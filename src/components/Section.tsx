"use client";

import useScrollRevealEffect from "@/hooks/useScrollRevealEffect";
import { useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface HSL {
  h: number;
  s: number;
  l: number;
}

interface Props {
  bgImageSrc: string;
  hsl: HSL;
  text?: ReactNode;
}

function Section({ bgImageSrc, hsl, text }: Props) {
  const ref = useRef(null);
  const refText = useRef(null);
  const textEffect = useScrollRevealEffect({
    ref: refText,
    direction: "xRight",
  });
  const inView = useInView(ref, {
    amount: 0.6,
  });

  useEffect(() => {
    if (inView) {
      document.documentElement.style.setProperty("--activeColorH", hsl.h + "");
      document.documentElement.style.setProperty("--activeColorS", hsl.s + "%");
      document.documentElement.style.setProperty("--activeColorL", hsl.l + "%");
    }
  }, [inView]);

  useEffect(() => {
    textEffect();
  }, [textEffect]);

  return (
    <section ref={ref} className="h-[100vh] relative">
      <div>
        <div
          className="absolute -z-10 inset-0 bg-fixed bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url("${bgImageSrc}")`,
          }}
        ></div>
      </div>

      <div className="pt-[10vw] px-[10vw]">
        <div className="mx-auto max-w-[var(--max-width)]">
          <div
            ref={refText}
            className="font-sans-tight font-bold leading-[1.33em] text-[38px] text-white word-spacing"
          >
            {text}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
