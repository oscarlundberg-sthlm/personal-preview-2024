"use client";

import classNames from "classnames";
import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

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
  const bgImageDivRef = useRef<HTMLDivElement>(null);
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  const imagesPath = "/content/img";
  const extensionDeleteRegex = /\..*/g;
  const imageFilename = bgImageSrc.replace(extensionDeleteRegex, "");
  const preloadImageSrc = `${imagesPath}/preloads/${imageFilename}_preview.jpg`;

  useEffect(() => {
    if (!bgImageDivRef?.current) {
      return;
    }

    // Load full image
    const highResImage = new Image();
    highResImage.src = `${imagesPath}/${bgImageSrc}`;

    const imageLoadFunction = (e: Event) => {
      if (!bgImageDivRef?.current) {
        return;
      }
      setBgImageLoaded(true);
    };

    highResImage.addEventListener("load", imageLoadFunction);

    return () => {
      highResImage.removeEventListener("load", imageLoadFunction);
    };
  }, [bgImageDivRef, bgImageSrc]);

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
      className="relative overflow-hidden w-full pt-[160%] sm:pt-[100%] lg:pt-[160%] xl:pt-[180%] border border-current bg-gray-900"
    >
      <div
        className="absolute inset-0 blur-lg"
        style={{
          backgroundImage: `url("${preloadImageSrc}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          backgroundPosition: backgroundPosition ?? "center",
        }}
      ></div>
      <div
        className={classNames(
          "flex items-center justify-center absolute inset-0",
          {
            hidden: bgImageLoaded,
          }
        )}
      >
        <div className="rounded-full w-10 h-10 border-4 border-b-transparent border-gray-600 animate-spin"></div>
      </div>
      <div
        ref={bgImageDivRef}
        className={classNames("absolute inset-0 opacity-0", {
          "fade-in": bgImageLoaded,
        })}
        style={{
          backgroundImage: `url("${imagesPath}/${bgImageSrc}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          backgroundPosition: backgroundPosition ?? "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-gray-400 mix-blend-overlay"></div>
      <div className="absolute inset-0">
        <article
          ref={refContent}
          className="text-black flex flex-col justify-between h-full"
        >
          <HeadingTag className="bg-white m-[var(--x-pad)] p-4 sm:p-[var(--x-pad)] font-fraunces tracking-tighter font-extrabold leading-none text-[length:calc(var(--font-size)_/_0.6)] sm:text-[length:calc(var(--font-size)_/_0.5)] word-spacing">
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
