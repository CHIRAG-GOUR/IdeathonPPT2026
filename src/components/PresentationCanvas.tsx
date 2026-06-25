"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, PerspectiveCamera, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles({ activeScene }: { activeScene: number }) {
  const points = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
      points.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Stars 
      ref={points} 
      radius={100} 
      depth={50} 
      count={2000} 
      factor={4} 
      saturation={0} 
      fade 
      speed={1} 
    />
  );
}

function ShootingStars() {
  const starsRef = useRef<THREE.Group>(null!);
  const [lastShootTime, setLastShootTime] = useState(0);
  const [shooting, setShooting] = useState(false);
  
  const starData = useMemo(() => {
    return Array.from({ length: 5 }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 100,
        Math.random() * 40 + 40,
        -40 - Math.random() * 20 
      ),
      speed: Math.random() * 2 + 2,
      active: false
    }));
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Shoot every 5 seconds
    if (time - lastShootTime > 5) {
      setLastShootTime(time);
      setShooting(true);
      
      // Reset positions for active stars
      starData.forEach(star => {
        star.active = true;
        star.position.set(
          (Math.random() - 0.5) * 100,
          Math.random() * 20 + 30,
          -40 - Math.random() * 20
        );
      });
    }

    if (shooting && starsRef.current) {
      let allDone = true;
      starsRef.current.children.forEach((child, i) => {
        if (starData[i].active) {
          allDone = false;
          child.position.y -= starData[i].speed;
          child.position.x -= starData[i].speed;
          
          if (child.position.y < -50) {
            starData[i].active = false;
            // hide it
            child.position.y = 100; 
          }
        }
      });
      if (allDone) setShooting(false);
    }
  });

  return (
    <group ref={starsRef}>
      {starData.map((star, i) => (
        <mesh key={i} position={[0, 100, 0]}>
          <cylinderGeometry args={[0.02, 0.1, 4, 8]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function Planets() {
  const groupRef = useRef<THREE.Group>(null!);
  const satelliteRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
    if (satelliteRef.current) {
      // Orbit around the planet
      satelliteRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Planet 1 */}
      <group position={[15, 5, -25]}>
        <mesh>
          <sphereGeometry args={[4, 24, 24]} />
          <meshStandardMaterial color="#B026FF" roughness={0.7} />
        </mesh>
        {/* Ring for Planet 1 */}
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[6, 0.1, 8, 64]} />
          <meshStandardMaterial color="#00F0FF" roughness={0.4} />
        </mesh>

        {/* Orbiting Satellite */}
        <group ref={satelliteRef}>
          <mesh position={[8, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]} />
            <meshBasicMaterial color="#CCCCCC" />
            <mesh position={[0.8, 0, 0]}>
              <boxGeometry args={[1.2, 0.05, 0.6]} />
              <meshBasicMaterial color="#00F0FF" />
            </mesh>
            <mesh position={[-0.8, 0, 0]}>
              <boxGeometry args={[1.2, 0.05, 0.6]} />
              <meshBasicMaterial color="#00F0FF" />
            </mesh>
          </mesh>
        </group>
      </group>

      {/* Planet 2 */}
      <mesh position={[-20, -10, -30]}>
        <sphereGeometry args={[6, 16, 16]} />
        <meshBasicMaterial color="#00FF66" wireframe />
      </mesh>
    </group>
  );
}

function FloatingShapes({ activeScene }: { activeScene: number }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      const targetY = -activeScene * 5;
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        targetY,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Scene 1 Elements */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[5, 0, -8]}>
        <mesh>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#00F0FF" wireframe />
        </mesh>
      </Float>

      {/* Scene 2 Elements */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[-5, -5, -10]}>
        <mesh>
          <icosahedronGeometry args={[2, 0]} />
          <meshStandardMaterial color="#B026FF" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export default function PresentationCanvas({ activeScene }: { activeScene: number }) {
  return (
    <Canvas performance={{ min: 0.5 }}>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#00F0FF" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#B026FF" />
      
      <Particles activeScene={activeScene} />
      <ShootingStars />
      <Planets />
      <FloatingShapes activeScene={activeScene} />
      
      <fog attach="fog" args={['#050510', 15, 60]} />
    </Canvas>
  );
}
