"use client";
import Media from "@/types/media";
import classNames from "classnames";
import { motion } from "framer-motion";
import { ReactNode } from "react";

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
  return (
    <div className="relative z-20">
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
            "col-span-2 relative z-10 border-x border-b border-gray-800 bg-gray-900 sm:border sm:border-gray-800 p-[var(--container-sidespace)]",
            {
              "-order-1": flipX,
            }
          )}
        >
          {suffendix && (
            <>
              <div className="font-rocksalt text-gold text-[clamp(14px,1.5vw,28px)] ">
                {suffendix}
              </div>
              <div className="border-b border-gray-800"></div>
            </>
          )}
          {heading && (
            <div
              className={classNames(
                "big-text text-gray-50 mt-[calc(var(--container-sidespace)*2)] sm:mt-[var(--container-sidespace)]",
                {}
              )}
            >
              {heading}
            </div>
          )}
          {text && (
            <div className="text-[clamp(20px,2.2vw,32px)] leading-[1.2em] mt-[clamp(20px,2.2vw,32px)] mr-[calc(var(--container-sidespace))] font-sans-tight text-gray-300">
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
