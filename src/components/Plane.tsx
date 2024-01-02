import { rotate } from "@/helpers/threeJs";
import { MeshProps } from "@react-three/fiber";

const Plane = (props: MeshProps) => {
  return (
    <group rotation={[rotate(-90), 0, 0]}>
      <mesh receiveShadow {...props}>
        <planeGeometry args={[2000, 2000]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  );
};

export default Plane;
