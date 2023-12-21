"use client";
import Media from "@/types/media";
import classNames from "classnames";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  text?: ReactNode;
  media?: Media;
  flipX?: boolean;
}

function TextAndMedia({ text, media, flipX = false }: Props) {
  return (
    <div className="relative z-20 lg:px-[calc(var(--container-sidespace)*2)]">
      <div className="grid grid-cols-3">
        <div>
          <div className="relative overflow-hidden rounded-full pt-[100%]">
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
                    className="w-full origin-center"
                  />
                </div>
              ))}
          </div>
        </div>
        <div
          className={classNames("flex items-center col-span-2 relative z-10", {
            "-order-1 justify-end": flipX,
          })}
        >
          {text && (
            <div
              className={classNames("big-text max-w-[55vw]", {
                "-ml-[6vw]": !flipX,
                "-mr-[6vw]": flipX,
              })}
            >
              {text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextAndMedia;
