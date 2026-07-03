'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

interface PremiumLoaderProps {
  onComplete: () => void;
}

// Tech icon text data to float
const TECH_ICONS = [
  'React', 'Java', 'Python', 'Spring Boot', 'AI', 'Database', 'GitHub', 'TensorFlow', 'MongoDB'
];

/* ─── Math Utils for Logo Points ─── */
function generateLogoPoints(count: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const pointsPerSegment = Math.floor(count / 5);

  // Segment 1: R spine (vertical line from y=-1.2 to 1.2 at x=-1.0)
  for (let i = 0; i < pointsPerSegment; i++) {
    const t = i / (pointsPerSegment - 1);
    points.push(new THREE.Vector3(-1.0, -1.2 + 2.4 * t, 0));
  }

  // Segment 2: R loop (semi-circle on the right of spine, y=0 to 1.2)
  for (let i = 0; i < pointsPerSegment; i++) {
    const theta = -Math.PI / 2 + Math.PI * (i / (pointsPerSegment - 1));
    const x = -1.0 + 0.9 * Math.cos(theta);
    const y = 0.6 + 0.6 * Math.sin(theta);
    points.push(new THREE.Vector3(x, y, 0));
  }

  // Segment 3: R leg (diagonal line from x=-1.0, y=0 to x=0.0, y=-1.2)
  for (let i = 0; i < pointsPerSegment; i++) {
    const t = i / (pointsPerSegment - 1);
    points.push(new THREE.Vector3(-1.0 + 1.0 * t, 0.0 - 1.2 * t, 0));
  }

  // Segment 4: V left leg (diagonal from x=0.3, y=1.2 to x=1.0, y=-1.2)
  for (let i = 0; i < pointsPerSegment; i++) {
    const t = i / (pointsPerSegment - 1);
    points.push(new THREE.Vector3(0.3 + 0.7 * t, 1.2 - 2.4 * t, 0));
  }

  // Segment 5: V right leg (diagonal from x=1.0, y=-1.2 to x=1.7, y=1.2)
  const remaining = count - points.length;
  for (let i = 0; i < remaining; i++) {
    const t = i / (remaining - 1);
    points.push(new THREE.Vector3(1.0 + 0.7 * t, -1.2 + 2.4 * t, 0));
  }

  return points;
}

/* ─── Particle System Component ─── */
function InteractiveParticles({
  timelineProgress,
  mouse,
  logoPoints,
}: {
  timelineProgress: { value: number };
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  logoPoints: THREE.Vector3[];
}) {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = logoPoints.length;

  // Initial random scatter coordinates (corners of screen / deep space)
  const initialPositions = useMemo(() => {
    const pos: number[] = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 15 + Math.random() * 10;
      pos.push(
        radius * Math.cos(theta),
        radius * Math.sin(theta),
        (Math.random() - 0.5) * 10
      );
    }
    return new Float32Array(pos);
  }, [count]);

  // Color gradient (pastel spectrum)
  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#FF8A00'), // orange
      new THREE.Color('#FF007A'), // pink
      new THREE.Color('#9F00FF'), // purple
      new THREE.Color('#00F0FF'), // cyan
      new THREE.Color('#0072FF'), // blue
    ];
    for (let i = 0; i < count; i++) {
      const color = palette[i % palette.length];
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return cols;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const progress = timelineProgress.value;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    const currentPositions = posAttr.array as Float32Array;

    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const target = logoPoints[i];

      // Interpolate between outer scatter and logo vertices
      let tx = target.x;
      let ty = target.y;
      let tz = target.z;

      // Add gentle logo breathing animation when assembled
      if (progress > 0.25 && progress <= 0.85) {
        const breath = 1.0 + Math.sin(time * 4 + target.y * 2) * 0.05;
        tx *= breath;
        ty *= breath;
      }

      // Mouse influence for 3D depth and parallax
      const mouseInfluence = Math.max(0, progress - 0.1) * 0.35;
      tx += mouse.current.x * mouseInfluence * (1.0 + target.y * 0.2);
      ty += mouse.current.y * mouseInfluence * (1.0 + target.x * 0.2);

      // Interpolation logic based on timeline progression phase
      if (progress < 0.3) {
        // Step 1: Particles moving from corners to center
        const t = progress / 0.3;
        const ease = t * t * (3 - 2 * t); // Smooth Hermite interpolation
        currentPositions[idx] = THREE.MathUtils.lerp(initialPositions[idx], tx, ease);
        currentPositions[idx + 1] = THREE.MathUtils.lerp(initialPositions[idx + 1], ty, ease);
        currentPositions[idx + 2] = THREE.MathUtils.lerp(initialPositions[idx + 2], tz, ease);
      } else if (progress < 0.85) {
        // Step 2 & 3: Maintain logo shape and breathe
        currentPositions[idx] = tx;
        currentPositions[idx + 1] = ty;
        currentPositions[idx + 2] = tz;
      } else {
        // Step 6: Expand/scatter across screen to build hero
        const t = (progress - 0.85) / 0.15;
        const easeOut = 1 - Math.pow(1 - t, 3); // cubic ease out
        const scatterDirectionX = (target.x + (Math.random() - 0.5) * 4) * 8;
        const scatterDirectionY = (target.y + (Math.random() - 0.5) * 4) * 8;
        const scatterDirectionZ = (Math.random() - 0.5) * 20;

        currentPositions[idx] = THREE.MathUtils.lerp(tx, scatterDirectionX, easeOut);
        currentPositions[idx + 1] = THREE.MathUtils.lerp(ty, scatterDirectionY, easeOut);
        currentPositions[idx + 2] = THREE.MathUtils.lerp(tz, scatterDirectionZ, easeOut);
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[initialPositions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.075}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ─── Orbiting Ring Component ─── */
function OrbitingRing({
  radius,
  speed,
  color,
  timelineProgress,
  mouse,
}: {
  radius: number;
  speed: number;
  color: string;
  timelineProgress: { value: number };
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const ringRef = useRef<THREE.LineLoop>(null!);

  const points = useMemo(() => {
    const pts = [];
    const count = 64;
    for (let i = 0; i < count; i++) {
      const theta = (i / count) * Math.PI * 2;
      pts.push(new THREE.Vector3(radius * Math.cos(theta), radius * Math.sin(theta), 0));
    }
    return pts;
  }, [radius]);

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  useFrame((state) => {
    if (!ringRef.current) return;
    const progress = timelineProgress.value;

    // Fade in ring between 0.4 and 0.6 progress
    let targetOpacity = 0;
    if (progress >= 0.4 && progress < 0.85) {
      targetOpacity = THREE.MathUtils.mapLinear(progress, 0.4, 0.6, 0, 0.25);
    } else if (progress >= 0.85) {
      targetOpacity = THREE.MathUtils.mapLinear(progress, 0.85, 1.0, 0.25, 0);
    }
    if (ringRef.current.material instanceof THREE.LineBasicMaterial) {
      ringRef.current.material.opacity = targetOpacity;
    }

    // Rotate ring
    ringRef.current.rotation.z = state.clock.getElapsedTime() * speed;

    // Mouse Parallax depth
    ringRef.current.position.x = mouse.current.x * 0.4;
    ringRef.current.position.y = mouse.current.y * 0.4;
  });

  return (
    <lineLoop ref={ringRef} geometry={lineGeometry}>
      <lineBasicMaterial color={color} transparent opacity={0} linewidth={1} />
    </lineLoop>
  );
}

/* ─── Interactive Orbiting Tech Icons / Cubes ─── */
function TechOrbiters({
  timelineProgress,
  mouse,
}: {
  timelineProgress: { value: number };
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const count = TECH_ICONS.length;

  // Initialize random phase offsets and radius for each icon
  const orbiters = useMemo(() => {
    return TECH_ICONS.map((name, i) => {
      const angle = (i / count) * Math.PI * 2;
      return {
        name,
        angle,
        speed: 0.45 + Math.random() * 0.25,
        radius: 2.8 + Math.random() * 0.5,
        color: new THREE.Color().setHSL(i / count, 0.9, 0.65),
      };
    });
  }, [count]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const progress = timelineProgress.value;
    const time = state.clock.getElapsedTime();

    // Staggered visibility transitions
    let globalOpacity = 0;
    if (progress >= 0.55 && progress < 0.75) {
      globalOpacity = THREE.MathUtils.mapLinear(progress, 0.55, 0.68, 0, 1.0);
    } else if (progress >= 0.75 && progress < 0.85) {
      globalOpacity = 1.0;
    } else if (progress >= 0.85) {
      globalOpacity = THREE.MathUtils.mapLinear(progress, 0.85, 1.0, 1.0, 0);
    }

    // Update child mesh positions
    groupRef.current.children.forEach((child, index) => {
      const data = orbiters[index];
      const mesh = child as THREE.Mesh;

      // Orbit math
      const theta = data.angle + time * data.speed;
      const x = data.radius * Math.cos(theta);
      const y = data.radius * Math.sin(theta);

      // Phase 4: Transform to cube & Float Up
      let finalY = y;
      let finalZ = 0;
      if (progress >= 0.75) {
        const floatT = (progress - 0.75) / 0.10; // 0.75 to 0.85
        finalY = THREE.MathUtils.lerp(y, y + floatT * 4.0, Math.min(floatT, 1.0));
        finalZ = THREE.MathUtils.lerp(0, floatT * 3.0, Math.min(floatT, 1.0));
      }

      mesh.position.set(x, finalY, finalZ);

      // Mouse Parallax depth
      mesh.position.x += mouse.current.x * 0.3;
      mesh.position.y += mouse.current.y * 0.3;

      // material properties update
      if (mesh.material instanceof THREE.MeshStandardMaterial) {
        mesh.material.opacity = globalOpacity;
        // Fade emissive during float phase
        if (progress >= 0.75) {
          mesh.material.emissiveIntensity = THREE.MathUtils.mapLinear(progress, 0.75, 0.85, 1.5, 0);
        } else {
          mesh.material.emissiveIntensity = 1.5;
        }
      }
    });
  });

  return (
    <group ref={groupRef}>
      {orbiters.map((data, i) => (
        <mesh key={i}>
          {/* Renders as small glowing technology cubes */}
          <boxGeometry args={[0.16, 0.16, 0.16]} />
          <meshStandardMaterial
            color={data.color}
            emissive={data.color}
            emissiveIntensity={1.5}
            transparent
            opacity={0}
            metalness={0.2}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Glass circle backdrop ─── */
function GlassCircle({ timelineProgress }: { timelineProgress: { value: number } }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (!meshRef.current) return;
    const progress = timelineProgress.value;

    let scale = 0;
    let opacity = 0;

    if (progress >= 0.35 && progress < 0.5) {
      scale = THREE.MathUtils.mapLinear(progress, 0.35, 0.5, 0, 1.0);
      opacity = THREE.MathUtils.mapLinear(progress, 0.35, 0.5, 0, 0.4);
    } else if (progress >= 0.5 && progress < 0.85) {
      scale = 1.0;
      opacity = 0.4;
    } else if (progress >= 0.85) {
      scale = THREE.MathUtils.mapLinear(progress, 0.85, 1.0, 1.0, 1.8);
      opacity = THREE.MathUtils.mapLinear(progress, 0.85, 1.0, 0.4, 0);
    }

    meshRef.current.scale.setScalar(scale);
    if (meshRef.current.material instanceof THREE.MeshStandardMaterial) {
      meshRef.current.material.opacity = opacity;
    }
  });

  return (
    <mesh ref={meshRef}>
      <ringGeometry args={[0, 2.0, 64]} />
      <meshStandardMaterial
        color="#F8FAFC"
        roughness={0.1}
        metalness={0.1}
        transparent
        opacity={0}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ─── Scene Wrapper ─── */
function Scene({
  timelineProgress,
  mouse,
  logoPoints,
}: {
  timelineProgress: { value: number };
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  logoPoints: THREE.Vector3[];
}) {
  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[5, 5, 5]} intensity={2.0} color="#FFFFFF" />

      {/* Steps 1 & 2: Interactive Particles */}
      <InteractiveParticles
        timelineProgress={timelineProgress}
        mouse={mouse}
        logoPoints={logoPoints}
      />

      {/* Step 3: Glass Ring Backdrop & Rings */}
      <GlassCircle timelineProgress={timelineProgress} />
      <OrbitingRing radius={2.1} speed={0.8} color="#9F00FF" timelineProgress={timelineProgress} mouse={mouse} />
      <OrbitingRing radius={2.2} speed={-0.6} color="#FF007A" timelineProgress={timelineProgress} mouse={mouse} />
      <OrbitingRing radius={2.3} speed={0.4} color="#00F0FF" timelineProgress={timelineProgress} mouse={mouse} />

      {/* Steps 4 & 5: Orbiting Tech Icons */}
      <TechOrbiters timelineProgress={timelineProgress} mouse={mouse} />

      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
      </EffectComposer>
    </>
  );
}

/* ─── Main Premium Interactive Loader Component ─── */
export default function PremiumLoader({ onComplete }: PremiumLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [completed, setCompleted] = useState(false);
  const timelineProgress = useRef({ value: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  // Pre-generate stable logo points once
  const logoPoints = useMemo(() => generateLogoPoints(1600), []);

  useEffect(() => {
    // Parallax mouse movements
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Sequence timeline lasting ~2.2 seconds total to preserve performance
    const tl = gsap.timeline({
      onComplete: () => {
        setCompleted(true);
        setTimeout(() => {
          setVisible(false);
          onComplete();
        }, 500); // fade out remainder
      },
    });

    // Animate timeline progress value smoothly
    tl.to(timelineProgress.current, {
      value: 1.0,
      duration: 2.2,
      ease: 'power3.inOut',
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      tl.kill();
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="premium-interactive-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          {/* Full Screen Interactive Canvas */}
          <div className="absolute inset-0 w-full h-full">
            <Canvas
              gl={{ antialias: true, alpha: true }}
              camera={{ position: [0, 0, 6], fov: 50 }}
            >
              <Scene
                timelineProgress={timelineProgress.current}
                mouse={mouse}
                logoPoints={logoPoints}
              />
            </Canvas>
          </div>

          {/* Simple Clean Bottom HUD */}
          <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center justify-center pointer-events-none z-10 select-none">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 font-mono mb-2"
            >
              Building Environment
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-40 h-[1.5px] bg-slate-100 overflow-hidden relative"
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-pink-500 w-full"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
