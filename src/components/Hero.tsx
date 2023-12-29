"use client";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Logo from "./Logo";

function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "-49% 0px -49% 0px",
  });

  useEffect(() => {
    if (inView) {
      document.documentElement.style.setProperty("--bg-color", "#e94f37");
      document.documentElement.style.setProperty("--border-color", "#e94f37");
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="[--header-height:var(--full-screen-h)] relative h-[var(--header-height)] overflow-hidden border-t-2 sm:border-t-0 border-x-2 border-[var(--border-color)] transition-colors duration-1000"
    >
      <h1 className="hidden">Oscar Lundberg - Creative coder</h1>
      <div className="text-right text-[var(--border-color)] mt-[var(--container-sidespace)] mx-[var(--container-sidespace)] font-sans-tight text-[clamp(24px,3.30687831vw,56px)] leading-[1.1em] font-medium">
        Development <br />& design
      </div>
      <div className="absolute -bottom-px inset-x-0 top-0 flex flex-col justify-end">
        <Logo className="w-full relative -bottom-px shrink-0 text-[var(--bg-color)] transition-colors duration-1000" />
        <div className=" h-[var(--container-sidespace)] bg-[var(--bg-color)] transition-colors duration-1000"></div>
      </div>
    </div>
  );
}

export default Hero;
