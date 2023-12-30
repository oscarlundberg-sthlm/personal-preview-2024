import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function BgFx() {
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      document.documentElement.style.setProperty("--bg-color", "#202020");
    }
  }, [inView]);
  return <div ref={ref}></div>;
}

export default BgFx;
