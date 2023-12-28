import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  sideSpace?: "both" | "left" | "right";
  className?: string;
  bgOptOut?: boolean;
}

function Container({
  children,
  sideSpace = "both",
  className,
  bgOptOut = false,
}: Props) {
  return (
    <div
      className={classNames(
        {
          "px-[var(--container-sidespace)]": sideSpace === "both",
          "pl-[var(--container-sidespace)]": sideSpace === "left",
          "pr-[var(--container-sidespace)]": sideSpace === "right",
          " ": !bgOptOut,
        },
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
