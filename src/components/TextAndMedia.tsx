"use client";
import useScrollRevealEffect from "@/hooks/useScrollRevealEffect";
import Media from "@/types/media";
import classNames from "classnames";
import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  heading?: ReactNode;
  text?: ReactNode;
  suffendix?: ReactNode;
  appendix?: ReactNode;
  media?: Media;
  flipX?: boolean;
}

function TextAndMedia({
  heading,
  text,
  suffendix,
  appendix,
  media,
  flipX = false,
}: Props) {
  const refHeading = useRef(null);
  const effectHeading = useScrollRevealEffect({
    ref: refHeading,
  });
  const refText = useRef(null);
  const effectText = useScrollRevealEffect({
    ref: refText,
  });
  const refImage = useRef(null);
  const effectImage = useScrollRevealEffect({
    ref: refImage,
    // direction: flipX ? "xLeft" : "xRight",
  });

  useEffect(() => {
    effectHeading();
    effectText();
    effectImage();
  }, [effectHeading, effectText, effectImage]);

  return (
    <div className="relative z-20">
      <div className="sm:grid grid-cols-3 gap-[var(--container-sidespace)] ">
        <div>
          <div ref={refImage} className="relative overflow-hidden pt-[100%]">
            {!!media &&
              (media.isVideo ? (
                <></>
              ) : (
                <div className="absolute inset-0 bg-blue-800">
                  <Image
                    src={media.src}
                    alt={media.alt}
                    width={media.width}
                    height={media.height}
                    className="w-full h-full origin-center"
                  />
                  {/* <div className=" bg-gold absolute inset-0 mix-blend-hard-light"></div> */}
                </div>
              ))}
          </div>
        </div>
        <div
          className={classNames("col-span-2 relative z-10", {
            "-order-1": flipX,
          })}
        >
          {suffendix && (
            <div className="text-[clamp(14px,1.5vw,28px)]">
              <div className="font-rocksalt text-gold mt-[1.3em] sm:mt-0 ">
                {suffendix}
              </div>
              <div className="border-b border-gold/30 mt-[0.2em]"></div>
            </div>
          )}
          {heading && (
            <div
              ref={refHeading}
              className="big-text text-gray-50 mt-[calc(var(--container-sidespace)*2)] sm:mt-[var(--container-sidespace)] transition-all duration-500"
            >
              {heading}
            </div>
          )}
          {text && (
            <div
              ref={refText}
              className="text-[clamp(22px,2.2vw,32px)] leading-[1.2em] mt-[clamp(20px,2.2vw,32px)] mr-[calc(var(--container-sidespace))] font-sans-tight text-gray-300 transition-all duration-500"
            >
              {text}
            </div>
          )}
          {appendix && (
            <div className="font-rocksalt text-gray-600 text-[clamp(14px,1.5vw,28px)] mt-[clamp(14px,1.5vw,28px)]">
              {appendix}
            </div>
          )}
          <div className="mb-[calc(var(--container-sidespace)*2)] sm:mb-[clamp(20px,2.2vw,32px)]"></div>
        </div>
      </div>
    </div>
  );
}

export default TextAndMedia;
