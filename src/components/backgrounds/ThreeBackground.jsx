import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme, themeConfig } from '../../context/ThemeContext';

export default function ThreeBackground() {
  const canvasRef = useRef(null);
  const { activeSection } = useTheme();
  const themeRef = useRef({
    color: new THREE.Color(0x7c6cff),
    target: new THREE.Color(0x7c6cff),
    camZ: 8,
    camZT: 8,
    knotOp: 0.35,
    knotOpT: 0.35
  });

  // Update theme targets when activeSection changes
  useEffect(() => {
    const targetConfig = themeConfig[activeSection] || themeConfig.hero;
    themeRef.current.target.set(targetConfig.color);
    themeRef.current.camZT = targetConfig.camZ;
    themeRef.current.knotOpT = targetConfig.knotOp;
  }, [activeSection]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 8;

    // 1. Particle field
    const COUNT = 1800;
    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 40;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.06,
      color: 0x7c6cff,
      transparent: true,
      opacity: 0.8
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 2. Torus knot & Icosahedron
    const knotGeometry = new THREE.TorusKnotGeometry(1.6, 0.45, 160, 24);
    const knotMaterial = new THREE.MeshStandardMaterial({
      color: 0x7c6cff,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const knot = new THREE.Mesh(knotGeometry, knotMaterial);
    knot.position.set(4, 0, 0);
    scene.add(knot);

    const icoGeometry = new THREE.IcosahedronGeometry(1, 1);
    const icoMaterial = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const ico = new THREE.Mesh(icoGeometry, icoMaterial);
    ico.position.set(4, 0, 0);
    scene.add(ico);

    // 3. Floating 3D shapes
    const shapesGroup = new THREE.Group();
    const shapeGeos = [
      new THREE.OctahedronGeometry(0.5),
      new THREE.TetrahedronGeometry(0.5),
      new THREE.BoxGeometry(0.6, 0.6, 0.6),
      new THREE.TorusGeometry(0.4, 0.15, 12, 30)
    ];

    for (let i = 0; i < 18; i++) {
      const mesh = new THREE.Mesh(
        shapeGeos[i % 4],
        new THREE.MeshStandardMaterial({
          color: 0xffffff,
          wireframe: true,
          transparent: true,
          opacity: 0.25
        })
      );
      mesh.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6 - 2
      );
      mesh.userData = {
        rx: Math.random() * 0.01,
        ry: Math.random() * 0.01,
        fy: Math.random() * Math.PI * 2
      };
      shapesGroup.add(mesh);
    }
    scene.add(shapesGroup);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x22d3ee, 2, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xf472b6, 2, 50);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Mouse and scroll tracking
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const theme = themeRef.current;

      theme.color.lerp(theme.target, 0.03);
      particleMaterial.color.copy(theme.color);
      knotMaterial.color.copy(theme.color);

      theme.camZ += (theme.camZT - theme.camZ) * 0.03;
      theme.knotOp += (theme.knotOpT - theme.knotOp) * 0.04;
      knotMaterial.opacity = theme.knotOp;
      icoMaterial.opacity = theme.knotOp * 1.4;

      particles.rotation.y = t * 0.03 + scrollY * 0.0003;
      particles.rotation.x = scrollY * 0.0002;

      knot.rotation.x = t * 0.3;
      knot.rotation.y = t * 0.2;
      ico.rotation.x = -t * 0.5;
      ico.rotation.y = t * 0.4;
      knot.position.y = Math.sin(t) * 0.3 - scrollY * 0.004;
      ico.position.y = knot.position.y;

      shapesGroup.children.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rx;
        mesh.rotation.y += mesh.userData.ry;
        mesh.position.y += Math.sin(t + mesh.userData.fy) * 0.002;
        mesh.material.color.copy(theme.color);
      });
      shapesGroup.position.y = -scrollY * 0.002;

      camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y * 0.8 - camera.position.y) * 0.05;
      camera.position.z = theme.camZ;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      // Clean disposal
      particleGeometry.dispose();
      particleMaterial.dispose();
      knotGeometry.dispose();
      knotMaterial.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      shapeGeos.forEach((g) => g.dispose());
      shapesGroup.children.forEach((mesh) => mesh.material.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} id="bg-canvas" />
      <div className="vignette" />
    </>
  );
}
