"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Emoji = () => {
  const emoji = useGLTF("./react_logo/scene.glb");

  return (
    <primitive object={emoji.scene} scale={1} position-y={0} rotation-y={0} />
  );
};

const EmojiCanvas = () => {
  return (
    <Canvas
      camera={{
        fov: 70,
        near: 0.1,
        far: 200,
        position: [-5, 2, 0],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={8.0}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Emoji />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EmojiCanvas;
