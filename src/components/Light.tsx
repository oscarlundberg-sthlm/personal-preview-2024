import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Light() {
  const ref = useRef(null);

  useFrame(({ pointer }) => {
    if (!ref.current) return;
    // @ts-ignore
    ref.current.position.x = pointer.x * 50;
    // @ts-ignore
    ref.current.position.y = 100 + pointer.y * 30;
  });
  return (
    <pointLight
      ref={ref}
      position={[-50, 100, 10]}
      color="#ffffff"
      intensity={30000}
    />
  );
}

export default Light;
