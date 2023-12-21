"use client";
import Media from "@/types/media";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  text?: ReactNode;
  media?: Media;
}

function TextAndMedia({ text, media }: Props) {
  return (
    <div className="relative z-20">
      <div className="grid grid-cols-3">
        <div>
          <div className="relative overflow-hidden rounded-full pt-[100%]">
            {!!media &&
              (media.isVideo ? (
                <></>
              ) : (
                <div
                  className="absolute inset-0" /* style={{ transform: `translateY(-${imageDistance}px)` }} */
                >
                  <motion.img
                    src={media.src}
                    alt={media.alt}
                    width={media.width}
                    height={media.height}
                    className="w-full origin-center"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="flex items-center col-span-2 relative z-10">
          {text && (
            <div className="big-text -ml-[6vw] max-w-[60vw]">{text}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextAndMedia;
