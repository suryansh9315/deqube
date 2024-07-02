import { Canvas } from "@react-three/fiber";
import React from "react";
import Box from "./Box";

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box />
    </Canvas>
  );
};

export default App;
