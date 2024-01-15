import { useScrollRefContext } from "@/contexts/ScrollRefContext";
import { inView } from "framer-motion";
import { RefObject, useCallback, useMemo } from "react";

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
  const viewportMargin = "0% 0% 0% 0%";
  const yDistance = 20;
  const xDistance = 20;
  const { ref: scrollContainerRef } = useScrollRefContext();

  const translateY = direction === "y" ? yDistance : 0;
  const translateX = generateTranslateX(direction, xDistance);

  const setElementState = useMemo(
    () => ({
      inViewport: function (element: HTMLElement) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0px) translateX(0px)";
      },
      aboveViewport: function (element: HTMLElement) {
        element.style.opacity = "0";
        element.style.transform = `translateY(-${translateY}px) translateX(${translateX}px)`;
      },
      belowViewport: function (element: HTMLElement) {
        element.style.opacity = "0";
        element.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
      },
      leftOfViewport: function (element: HTMLElement) {
        element.style.opacity = "0";
        element.style.transform = `translateY(${translateY}px) translateX(-${translateX}px)`;
      },
      rightOfViewport: function (element: HTMLElement) {
        element.style.opacity = "0";
        element.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
      },
    }),
    [translateY, translateX]
  );

  const runEffect = useCallback(() => {
    if (!ref?.current || !scrollContainerRef?.current) return;

    const determineAndSetState = (ref: any, containerRef: any) => {
      if (!ref?.current || !scrollContainerRef?.current) return;

      const rect = ref.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      if (rect.bottom <= containerRect.top) {
        // element is above screen
        setElementState.aboveViewport(ref.current);
      } else if (rect.top >= containerRect.bottom) {
        // element is below screen
        setElementState.belowViewport(ref.current);
      } else if (rect.left >= containerRect.right) {
        // element is to the right of the viewport
        setElementState.rightOfViewport(ref.current);
      } else if (rect.right <= containerRect.left) {
        // element is to the left of the viewport
        setElementState.leftOfViewport(ref.current);
      } else {
        // element is visible
        setElementState.inViewport(ref.current);
      }
    };

    // initial settings
    ref.current.style.transition =
      "opacity 700ms ease 125ms, transform 700ms ease 125ms";

    // initial state
    determineAndSetState(ref, scrollContainerRef);

    inView(
      ref.current,
      (entry) => {
        if (!ref.current) return;

        // enter viewport
        setElementState.inViewport(ref.current);

        // exit viewport
        return (entry) => {
          if (!ref?.current || !scrollContainerRef?.current) return;

          determineAndSetState(ref, scrollContainerRef);

          return;
        };
      },
      {
        margin: viewportMargin,
        root: scrollContainerRef?.current,
      }
    );
  }, [ref, scrollContainerRef, setElementState]);

  return runEffect;
};

export default useScrollRevealEffect;
