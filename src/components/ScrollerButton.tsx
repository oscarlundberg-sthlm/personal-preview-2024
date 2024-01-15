"use client";
import { useScrollRefContext } from "@/contexts/ScrollRefContext";
import { SyntheticEvent, useEffect, useState } from "react";
import Button from "./Button";

interface Props {
  direction: "left" | "right";
}

function ScrollerButton({ direction }: Props) {
  const { ref } = useScrollRefContext();
  const [hideLeftButton, setHideLeftButton] = useState<boolean>(true);
  const [hideRightButton, setHideRightButton] = useState<boolean>(false);

  const handleHideButton = (element: HTMLElement) => {
    if (element.scrollLeft < element.clientWidth) {
      setHideLeftButton(true);
    } else {
      setHideLeftButton(false);
    }
    if (element.scrollLeft > element.scrollWidth - element.clientWidth * 2) {
      setHideRightButton(true);
    } else {
      setHideRightButton(false);
    }
  };

  useEffect(() => {
    if (!ref?.current) return;

    const handleScrollLeft = function (this: HTMLElement, ev: Event) {
      handleHideButton(this);
    };

    const button = ref.current;
    handleHideButton(button);
    button.addEventListener("scroll", handleScrollLeft);
    return () => {
      button.removeEventListener("scroll", handleScrollLeft);
    };
  }, [ref]);

  const handleClick = (direction: Props["direction"]) => {
    if (!ref?.current) return;

    const scrollElement = ref?.current;

    const newScrollX =
      scrollElement.scrollLeft +
      (direction === "left" ? -1 : 1) * scrollElement.clientWidth;

    scrollElement.scrollTo({
      left: newScrollX,
      behavior: "smooth",
    });
  };

  if (direction === "left") {
    return (
      <Button
        icon="arrowLeft"
        onClick={(e: SyntheticEvent) => handleClick(direction)}
        invisible={hideLeftButton}
        aria-label="Go to previous slide"
      />
    );
  }
  return (
    <Button
      icon="arrowRight"
      onClick={(e: SyntheticEvent) => handleClick(direction)}
      invisible={hideRightButton}
      aria-label="Go to next slide"
    />
  );
}

export default ScrollerButton;
