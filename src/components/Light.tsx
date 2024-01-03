import useScrollTransformThree from "@/hooks/useScrollTransformThree";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Light() {
  const ref = useRef(null);
  const { getAnimationValue: getLightIntensity } = useScrollTransformThree({
    scrollEnd: 700,
    initialPos: 50000,
    movement: -49000,
  });

  useFrame(({ pointer }) => {
    if (!ref.current) return;
    // @ts-ignore
    ref.current.position.x = pointer.x * 50;
    // @ts-ignore
    ref.current.intensity = getLightIntensity();
  });
  return (
    <pointLight
      ref={ref}
      position={[-50, 100, 10]}
      color="#ffffff"
      intensity={50000}
    />
  );
}

export default Light;
