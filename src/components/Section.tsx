"use client";

import { useInView } from "framer-motion";
import { CSSProperties, ReactNode, useRef } from "react";

interface Props {
  index: number;
  bgImageSrc: string;
  backgroundPosition?: CSSProperties["backgroundPosition"];
  heading?: ReactNode;
  text?: ReactNode;
}

function Section({
  index,
  bgImageSrc,
  backgroundPosition,
  heading,
  text,
}: Props) {
  const ref = useRef(null);
  const refContent = useRef(null);

  const inViewForLoadImage = useInView(ref, {
    margin: "0% 100% 0% 100%",
  });

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
      className="relative overflow-hidden w-full pt-[160%] sm:pt-[100%] lg:pt-[160%] xl:pt-[180%] border border-current"
    >
      <div className="absolute inset-0 bg-gray-400"></div>
      <div
        className="absolute inset-0 mix-blend-hard-light"
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
      <div className="absolute inset-0">
        <article
          ref={refContent}
          className="text-black flex flex-col justify-between h-full"
        >
          <HeadingTag className="bg-white m-[var(--x-pad)] p-4 sm:p-[var(--x-pad)] font-fraunces tracking-tighter font-extrabold leading-none text-[length:calc(var(--font-size)_/_0.5)] word-spacing">
            {heading}
          </HeadingTag>
          {text && (
            <div className="bg-white overflow-hidden m-[var(--x-pad)] p-4 sm:p-[var(--x-pad)] font-sans leading-[1.5em] text-[length:var(--font-size)] 3xl:leading-[1.5em] font-normal">
              {text}
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export default Section;
