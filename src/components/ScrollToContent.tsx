import { motion, useScroll, useTransform } from "framer-motion";
import { SyntheticEvent } from "react";

function ScrollToContent() {
  const { scrollY } = useScroll();
  const opacity = useTransform(() => (scrollY.get() > 10 ? 0 : 1));

  const clickHandler = (e: SyntheticEvent) => {
    const contentStartElement = document.querySelector("#content-start");
    if (!contentStartElement) return;
    contentStartElement.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="fixed transition-opacity duration-200 w-full bottom-0 h-[var(--full-screen-h)] p-[calc(3*var(--container-sidespace))] sm:p-[calc(2*var(--container-sidespace))] xl:p-[var(--container-sidespace)] flex items-end justify-center pointer-events-none max-w-full sm:max-w-[min(100vw,1800px)] mx-auto"
      style={{
        opacity: opacity,
      }}
    >
      <button
        className=" pointer-events-auto group p-4 -m-4 sm:p-0 sm:m-0"
        onClick={clickHandler}
      >
        <div className="bg-gold-800 relative rounded-full h-10 w-10 flex items-center justify-center transition-colors duration-300 group-hover:bg-gold">
          <svg
            className=" h-[50%] w-auto text-gray-950"
            viewBox="0 0 33 42"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 0H19V34H13V0Z" fill="black" />
            <path d="M32.0646 25.3202L27.822 21.0775L11.7574 37.1422L16 41.3848L32.0646 25.3202Z" />
            <path d="M0 25.3202L4.24264 21.0775L20.3073 37.1422L16 41.3848L0 25.3202Z" />
          </svg>
        </div>
      </button>
    </motion.div>
  );
}

export default ScrollToContent;
