import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export default function Earth() {
  const earthRef = useRef();
  const colorMap = useTexture("/earth_daymap.jpg");

  useFrame(() => {
    earthRef.current.rotation.y += 0.002; // Spin eastward
  });

  return (
    <mesh ref={earthRef} rotation={[0, 0, 0.41]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}
