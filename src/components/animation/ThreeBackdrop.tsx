"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function FloatingParticles() {
  return (
    <group>
      {[...Array(120)].map((_, index) => {
        const angle = (index / 120) * Math.PI * 2;
        const radius = 4 + Math.sin(index) * 0.6;
        return (
          <mesh key={index} position={[Math.cos(angle) * radius, Math.sin(angle) * 0.4, Math.sin(angle) * radius]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#ffffff" emissive="#ec4899" emissiveIntensity={0.4} />
          </mesh>
        );
      })}
    </group>
  );
}

export function ThreeBackdrop() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <Suspense fallback={null}>
          <FloatingParticles />
        </Suspense>
      </Canvas>
    </div>
  );
}
