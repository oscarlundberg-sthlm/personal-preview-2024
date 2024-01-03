import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  sideSpace?: "both" | "left" | "right";
  className?: string;
  id?: string;
}

function Container({ children, sideSpace = "both", className, id }: Props) {
  return (
    <div
      id={id}
      className={classNames(
        {
          "px-[var(--container-sidespace)]": sideSpace === "both",
          "pl-[var(--container-sidespace)]": sideSpace === "left",
          "pr-[var(--container-sidespace)]": sideSpace === "right",
        },
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
