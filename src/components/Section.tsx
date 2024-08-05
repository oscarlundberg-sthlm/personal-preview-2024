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

  const inView = useInView(ref, {
    amount: 0.5,
  });
  const inViewForLoadImage = useInView(ref, {
    margin: "0% 100% 0% 100%",
  });

  // useEffect(() => {
  //   if (inView) {

  //   }
  // }, [inView]);

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
      className="relative overflow-hidden w-full pt-[160%] sm:pt-[100%] lg:pt-[180%] border-x-0 border-y sm:border border-current"
    >
      <div className="absolute inset-0 bg-gray-400"></div>
      {/* <div className="absolute inset-0 bg-2025-beige"></div> */}
      {/* bg-[#ffae005b] */}
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
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/0 to-black"></div> */}
      <div className="absolute inset-0">
        {/* <div className="absolute inset-x-0 -top-20 h-32 bg-gradient-to-t from-gray-50 to-gray-50/0"></div>
          <div className="absolute inset-x-0 bottom-0 top-12 bg-gray-50"></div> */}
        <div
          ref={refContent}
          className="text-black flex flex-col justify-between h-full"
        >
          <HeadingTag className="bg-white m-[var(--x-pad)] p-4 sm:p-[var(--x-pad)] font-fraunces font-extrabold leading-none text-[length:calc(var(--font-size)_/_0.5)] word-spacing">
            {heading}
          </HeadingTag>
          {text && (
            <div className="bg-white overflow-hidden m-[var(--x-pad)] p-4 sm:p-[var(--x-pad)] font-sans leading-[1.5em] text-[length:var(--font-size)] 3xl:leading-[1.5em] font-light">
              {text}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Section;
