import useScrollTransformThree from "@/hooks/useScrollTransformThree";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Camera() {
  const ref = useRef(null);
  const { getAnimationValue: getPositionZ } = useScrollTransformThree({
    scrollEnd: 800,
    initialPos: 8,
    movement: -2,
  });

  useFrame(() => {
    if (!ref?.current) return;
    // @ts-ignore
    ref.current.position.z = getPositionZ();
  });
  return (
    <PerspectiveCamera
      ref={ref}
      fov={30}
      near={0.1}
      far={1000}
      position={[0, 0.7, 8]}
      rotation={[0, 0, 0]}
      makeDefault
    />
  );
}

export default Camera;
