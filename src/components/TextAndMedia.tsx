"use client";
import Media from "@/types/media";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";
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
    <div ref={ref} className="relative z-20">
      <div className="sm:grid grid-cols-3 gap-[var(--container-sidespace)]">
        <div>
          <div className="relative overflow-hidden pt-[100%] border">
            {!!media &&
              (media.isVideo ? (
                <></>
              ) : (
                <div className="absolute inset-0">
                  <motion.img
                    src={media.src}
                    alt={media.alt}
                    width={media.width}
                    height={media.height}
                    className="w-full h-full origin-center"
                  />
                </div>
              ))}
          </div>
        </div>
        <div
          className={classNames(
            "col-span-2 relative z-10 border-x border-b border-gray-900 bg-white sm:border p-[var(--container-sidespace)]",
            {
              "-order-1": flipX,
            }
          )}
        >
          {suffendix && (
            <>
              <div className="font-rocksalt text-gray-600 text-[clamp(14px,1.5vw,28px)] ">
                {suffendix}
              </div>
              <div className="border-b border-gray-300"></div>
            </>
          )}
          {heading && (
            <div
              className={classNames(
                "big-text mt-[calc(var(--container-sidespace)*2)] sm:mt-[var(--container-sidespace)]",
                {}
              )}
            >
              {heading}
            </div>
          )}
          {text && (
            <div className="text-[clamp(20px,2.2vw,32px)] leading-[1.2em] mt-[clamp(20px,2.2vw,32px)] mr-[calc(var(--container-sidespace))] font-sans-tight text-gray-800">
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
