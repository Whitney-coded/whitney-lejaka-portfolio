
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const NetworkGrid = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Grid settings
  const gridSize = 3;
  const spacing = 1.5;
  
  // Create grid of points
  const points = [];
  for (let x = -gridSize; x <= gridSize; x++) {
    for (let y = -gridSize; y <= gridSize; y++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        // Only create points at the edges or with some randomness for a less dense center
        if (
          Math.abs(x) === gridSize || 
          Math.abs(y) === gridSize || 
          Math.abs(z) === gridSize ||
          Math.random() > 0.7
        ) {
          points.push([x * spacing, y * spacing, z * spacing]);
        }
      }
    }
  }
  
  // Animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.2;
    }
  });
  
  // Draw connections between nearby points
  const lines = [];
  const connectionThreshold = spacing * 1.8;
  
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const p1 = points[i];
      const p2 = points[j];
      const distance = Math.sqrt(
        Math.pow(p1[0] - p2[0], 2) + 
        Math.pow(p1[1] - p2[1], 2) + 
        Math.pow(p1[2] - p2[2], 2)
      );
      
      if (distance < connectionThreshold) {
        lines.push([...p1, ...p2]);
      }
    }
  }
  
  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {points.map((point, i) => (
        <mesh key={`node-${i}`} position={[point[0], point[1], point[2]]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#00FF66" emissive="#00FF66" emissiveIntensity={0.5} />
        </mesh>
      ))}
      
      {/* Lines connecting nodes */}
      {lines.map((line, i) => {
        const start = new THREE.Vector3(line[0], line[1], line[2]);
        const end = new THREE.Vector3(line[3], line[4], line[5]);
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([start, end]);
        
        return (
          <line key={`line-${i}`} geometry={lineGeometry}>
            <lineBasicMaterial color="#00FF66" opacity={0.4} transparent />
          </line>
        );
      })}
    </group>
  );
};

const ThreeDBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <NetworkGrid />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
