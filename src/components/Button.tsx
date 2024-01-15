"use client";
import classNames from "classnames";
import { ButtonHTMLAttributes, SyntheticEvent } from "react";

interface Props {
  icon: "arrowLeft" | "arrowRight";
  onClick: (e: SyntheticEvent) => void;
  disabled?: boolean;
  invisible?: boolean;
}

function Button({
  icon,
  onClick,
  disabled = false,
  invisible = false,
  ...rest
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  const iconClassNames = "fill-current h-[1.1em] w-auto";
  const buttonSizeClasses = "text-xl h-[3em] w-[3em] xl:h-[2.5em] xl:w-[2.5em]";

  const Icon = {
    arrowLeft: () => (
      <Arrow className={classNames(iconClassNames, "rotate-180")} />
    ),
    arrowRight: () => <Arrow className={iconClassNames} />,
  }[icon];

  return (
    <button
      type="button"
      onClick={(e) => onClick(e)}
      className={classNames(
        buttonSizeClasses,
        " flex items-center justify-center transition-colors duration-100 ease-linear rounded-full",
        {
          "bg-[hsl(var(--activeColorH),var(--activeColorS),var(--activeColorL),0.2)] hover:bg-[hsl(var(--activeColorH),var(--activeColorS),var(--activeColorL),0.4)]":
            !disabled,
          "bg-gray-700/40 text-gray-600 pointer-events-none": disabled,
          invisible: invisible,
        }
      )}
      {...rest}
    >
      <Icon />
    </button>
  );
}

export default Button;

const Arrow = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 448 512"
    >
      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
  );
};
