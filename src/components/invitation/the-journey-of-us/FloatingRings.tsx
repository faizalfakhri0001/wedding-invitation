"use client";

import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Color } from "three";
import { cn } from "@/lib/utils";

interface FloatingRingsProps {
  className?: string;
}

function Ring({ color = "#fbcfe8", position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <mesh position={position as [number, number, number]} rotation={rotation as [number, number, number]}>
      <torusGeometry args={[2, 0.12, 48, 160]} />
      <meshStandardMaterial color={new Color(color)} metalness={0.8} roughness={0.3} />
    </mesh>
  );
}

export function FloatingRings({ className }: FloatingRingsProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
        <ambientLight intensity={0.45} />
        <directionalLight intensity={0.6} position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Float floatIntensity={1.4} rotationIntensity={0.35} speed={1.6}>
            <Ring color="#f8b4d9" position={[0, 0, 0]} rotation={[Math.PI / 2.8, Math.PI / 6, 0]} />
          </Float>
          <Float floatIntensity={1.2} rotationIntensity={0.2} speed={1.2}>
            <Ring color="#f9c6d5" position={[0.8, -0.4, -0.5]} rotation={[Math.PI / 3.1, -Math.PI / 4, Math.PI / 6]} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
