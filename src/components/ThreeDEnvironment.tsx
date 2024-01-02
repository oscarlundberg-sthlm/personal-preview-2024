"use client";
import { ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { AvatarStatuett } from "./AvatarStatuett";
import Camera from "./Camera";
import Light from "./Light";

const ThreeDEnvironment = () => {
  return (
    <Canvas shadows>
      <Camera />
      {/* <ambientLight intensity={1} /> */}

      {/* <Debug> */}
      {/* <Plane position={[0, 0, 0]} /> */}
      {/* <OscarStatuett position={[0, 0, 0]} rotation={[0, rotate(-120), 0]} /> */}
      <AvatarStatuett position={[0, 0, 0]} rotation={[0, 0, 0]} />
      {/* <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[300, 24, 24]} />
        <meshStandardMaterial color={"#3b2b0a"} side={BackSide} />
      </mesh> */}
      <Light />
      {/* </Debug> */}

      <ContactShadows
        scale={20}
        blur={0.4}
        opacity={0.2}
        position={[-0, -1.5, 0]}
      />
      {/* <Environment preset="night" background blur={0.2} /> */}
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default ThreeDEnvironment;
