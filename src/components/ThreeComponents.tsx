import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial, PresentationControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function CinematicSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.2}>
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0}
          metalness={0.8}
          clearcoat={1}
        />
      </Sphere>
    </Float>
  );
}

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <CinematicSphere />
        <Environment preset="city" />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.2} scale={10} blur={2} far={4.5} />
      </Canvas>
    </div>
  );
};

function FloatingElement({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
    </mesh>
  );
}

export const Stats3D = () => {
  return (
    <div className="h-[300px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <PresentationControls global rotation={[0, 0.3, 0]} polar={[-0.4, 0.2]} azimuth={[-0.4, 0.4]}>
          <FloatingElement position={[-2, 0, 0]} color="#D71920" />
          <FloatingElement position={[0, 0, 0]} color="#E5E4E2" />
          <FloatingElement position={[2, 0, 0]} color="#C0C0C0" />
        </PresentationControls>
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

function LuxuryGear({ position, speed = 0.5, color = "#E5E4E2" }: { position: [number, number, number], speed?: number, color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * speed;
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusKnotGeometry args={[0.5, 0.15, 128, 32]} />
      <meshPhysicalMaterial 
        color={color} 
        metalness={1} 
        roughness={0.05} 
        reflectivity={1}
        clearcoat={1}
      />
    </mesh>
  );
}

export const HowItWorks3D = () => {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <LuxuryGear position={[-1.8, 0.5, 0]} speed={0.4} />
        <LuxuryGear position={[0, -0.5, 0]} speed={-0.6} color="#D71920" />
        <LuxuryGear position={[1.8, 0.5, 0]} speed={0.8} />
        <Environment preset="warehouse" />
        <ContactShadows position={[0, -2, 0]} opacity={0.1} scale={10} blur={3} />
      </Canvas>
    </div>
  );
};

export const Icon3D = ({ type }: { type: 'shield' | 'target' | 'zap' }) => {
  return (
    <div className="w-16 h-16">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} intensity={2} />
        <Float speed={4} rotationIntensity={1} floatIntensity={1}>
          {type === 'shield' && (
            <mesh>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#D71920" metalness={0.8} roughness={0.2} />
            </mesh>
          )}
          {type === 'target' && (
            <mesh>
              <torusGeometry args={[0.7, 0.2, 16, 100]} />
              <meshStandardMaterial color="#1A1A1A" metalness={0.9} roughness={0.1} />
            </mesh>
          )}
          {type === 'zap' && (
            <mesh rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.2, 1.5, 0.2]} />
              <meshStandardMaterial color="#E5E4E2" metalness={1} roughness={0} />
            </mesh>
          )}
        </Float>
      </Canvas>
    </div>
  );
};

export const PageBackground3D = () => {
  return (
    <div className="fixed inset-0 -z-20 opacity-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={[5, 5, -5]}>
            <torusGeometry args={[4, 0.1, 16, 100]} />
            <meshStandardMaterial color="#C0C0C0" transparent opacity={0.3} />
          </mesh>
          <mesh position={[-5, -5, -2]}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial color="#D71920" transparent opacity={0.1} />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
};


