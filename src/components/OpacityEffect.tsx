import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  children?: ReactNode;
  inline?: boolean;
  duration?: string;
}

function OpacityEffect({ children, inline, duration = "500ms" }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "-20% 0% -20% 0%",
  });

  if (!inline) {
    return (
      <motion.div
        className="transition-opacity duration-300"
        style={{
          opacity: inView ? 1 : 0.3,
          transitionDuration: duration,
        }}
        ref={ref}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.span
      className="transition-opacity duration-300"
      style={{
        opacity: inView ? 1 : 0.3,
        transitionDuration: duration,
      }}
      ref={ref}
    >
      {children}
    </motion.span>
  );
}

export default OpacityEffect;
