import { inView } from "framer-motion";
import { RefObject } from "react";

type direction = "y" | "xRight" | "xLeft";

interface Props {
  ref: RefObject<HTMLElement>;
  direction?: direction;
}

const generateTranslateX = (direction: direction, distance: number) => {
  if (direction === "y") {
    return 0;
  }
  if (direction === "xLeft") {
    return distance;
  }
  if (direction === "xRight") {
    return -1 * distance;
  }
};

/**
 * @return function to use in useEffect
 *
 */
const useScrollRevealEffect = ({ ref, direction = "y" }: Props) => {
  const viewportMargin = "-20% 0% -40% 0%";
  const yDistance = 20;
  const xDistance = 20;

  const translateY = direction === "y" ? yDistance : 0;
  const translateX = generateTranslateX(direction, xDistance);

  const setElementState = {
    inViewport: function () {
      if (!ref.current) return;
      ref.current.style.opacity = "1";
      ref.current.style.transform = "translateY(0px) translateX(0px)";
    },
    aboveViewport: function () {
      if (!ref.current) return;
      ref.current.style.opacity = "0";
      ref.current.style.transform = `translateY(-${translateY}px) translateX(${translateX}px)`;
    },
    belowViewport: function () {
      if (!ref.current) return;
      ref.current.style.opacity = "0";
      ref.current.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
    },
  };

  const runEffect = () => {
    if (!ref.current) return;

    // initial settings
    ref.current.style.transition = "opacity 1000ms ease, transform 1000ms ease";

    // initial state
    const rect = ref.current.getBoundingClientRect();
    if (rect.bottom < 0) {
      // element is above screen
      setElementState.aboveViewport();
    } else if (rect.top > window.innerHeight) {
      // element is below screen
      setElementState.belowViewport();
    } else {
      // element is visible
      setElementState.inViewport();
    }

    inView(
      ref.current,
      (entry) => {
        if (!ref.current) return;

        // enter viewport
        setElementState.inViewport();

        // exit viewport
        return (entry) => {
          if (!ref.current) return;
          if (!entry.rootBounds) return;

          if (entry.boundingClientRect.top < entry.rootBounds?.top) {
            // exit up
            setElementState.aboveViewport();
            return;
          }
          if (entry.boundingClientRect.y >= 0) {
            // exit down
            setElementState.belowViewport();
          }

          return;
        };
      },
      {
        margin: viewportMargin,
      }
    );
  };

  return runEffect;
};

export default useScrollRevealEffect;
