"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/3d_number_-_1_one.glb");

  const modelRef = useRef();

  useFrame((_, delta) => {
    modelRef.current.rotation.y += delta * 0.5;
  });

  return (
    <group
      {...props}
      ref={modelRef}
      dispose={null}
      scale={[2, 3, 2]}
      position={[0.25, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Shine_blue_th}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Metal_gray}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.Metal_gray}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/3d_number_-_1_one.glb");
