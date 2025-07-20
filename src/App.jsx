/*import { useState } from 'react';
import AppRoutes from './routes';
import css from './index.css';

function App() {
  return (App);
}

export default App;*/

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Earth from "./Earth";

function App() {
  return (
    <Canvas style={{ height: "100vh", background: "black" }}>
      <ambientLight intensity={1.2} castShadow="false" color="white"/>
      <directionalLight position={[5, 5, 5]} />
      <Stars radius={100} depth={50} count={5000} />
      <Earth />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
