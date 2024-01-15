"use client";

import useScrollRevealEffect from "@/hooks/useScrollRevealEffect";
import { useInView } from "framer-motion";
import { CSSProperties, ReactNode, useEffect, useRef } from "react";

interface HSL {
  h: number;
  s: number;
  l: number;
}

interface Props {
  index: number;
  bgImageSrc: string;
  backgroundPosition?: CSSProperties["backgroundPosition"];
  hsl: HSL;
  heading?: ReactNode;
  text?: ReactNode;
}

function Section({
  index,
  bgImageSrc,
  backgroundPosition,
  hsl,
  heading,
  text,
}: Props) {
  const ref = useRef(null);
  const refContent = useRef(null);
  const contentEffect = useScrollRevealEffect({
    ref: refContent,
    direction: "xLeft",
  });

  const inView = useInView(ref, {
    amount: 0.5,
  });
  const inViewForLoadImage = useInView(ref, {
    margin: "0% 100% 0% 100%",
  });

  useEffect(() => {
    if (inView) {
      document.documentElement.style.setProperty("--activeColorH", hsl.h + "");
      document.documentElement.style.setProperty("--activeColorS", hsl.s + "%");
      document.documentElement.style.setProperty("--activeColorL", hsl.l + "%");
    }
  }, [inView, hsl.h, hsl.s, hsl.l]);

  useEffect(() => {
    contentEffect();
  }, [contentEffect]);

  const HeadingTag = ({
    children,
    ...rest
  }: {
    children?: ReactNode;
  } & React.HTMLProps<HTMLHeadingElement>) =>
    index === 0 ? <h1 {...rest}>{children}</h1> : <h2 {...rest}>{children}</h2>;

  return (
    <section
      ref={ref}
      className="min-h-full max-h-full min-w-full max-w-full shrink-0 relative snap-center overflow-hidden"
    >
      <div
        className="absolute -z-10 w-full h-full"
        style={{
          background:
            index === 0 || inViewForLoadImage ? `url("${bgImageSrc}")` : "#111",
          backgroundSize:
            index === 0 || inViewForLoadImage ? "cover" : undefined,
          backgroundRepeat:
            index === 0 || inViewForLoadImage ? "no-repeat" : undefined,
          backgroundAttachment:
            index === 0 || inViewForLoadImage ? "scroll" : undefined,
          backgroundPosition:
            index === 0 || inViewForLoadImage
              ? backgroundPosition ?? "center"
              : undefined,
        }}
      ></div>
      <div
        // className={classNames(
        //   "mx-auto max-w-[var(--max-width)] h-full flex ",
        //   {
        //     "items-start ": textVertAlign === "top",
        //     "items-center ": textVertAlign === "center",
        //     "items-end ": textVertAlign === "bottom",
        //   }
        // )}
        className="absolute bottom-0 inset-x-0"
      >
        <div className="relative pt-4 pb-[8rem] xl:pb-32 px-[32px] w-full">
          <div ref={refContent}>
            <div className="relative pb-4 ">
              <HeadingTag className=" font-sans-tight font-extrabold leading-none text-[length:calc(var(--font-size)_/_0.5)] text-white word-spacing">
                {heading}
              </HeadingTag>
            </div>
            {text && (
              <div className=" overflow-hidden font-sans text-white leading-[1.5em] text-[length:var(--font-size)] 3xl:leading-[1.5em] font-normal">
                {text}
              </div>
            )}
          </div>
          <div className="bg-gradient-to-t from-black/90 via-black/70 to-black/0 absolute bottom-0 inset-x-0 -top-16 -z-10"></div>
        </div>
      </div>
    </section>
  );
}

export default Section;
