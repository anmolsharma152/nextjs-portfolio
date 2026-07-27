'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { useTheme } from '@/context/ThemeContext';

export default function ThreeSphereBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerEl.appendChild(renderer.domElement);

    // Wireframe Icosahedron Sphere
    const geometry = new THREE.IcosahedronGeometry(2.5, 2);
    const sphereColor = theme === 'dark' ? 0x6366f1 : 0x2563eb;
    const material = new THREE.MeshBasicMaterial({
      color: sphereColor,
      wireframe: true,
      transparent: true,
      opacity: theme === 'dark' ? 0.45 : 0.35,
    });
    const sphereMesh = new THREE.Mesh(geometry, material);
    scene.add(sphereMesh);

    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 1.2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 1.2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      sphereMesh.rotation.x += 0.002;
      sphereMesh.rotation.y += 0.003;
      sphereMesh.rotation.x += (targetY * 0.3 - sphereMesh.rotation.x) * 0.05;
      sphereMesh.rotation.y += (targetX * 0.3 - sphereMesh.rotation.y) * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerEl && renderer.domElement) {
        containerEl.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none opacity-60" />;
}
