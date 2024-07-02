import React from "react";

const Box = () => {
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
};

export default Box;
