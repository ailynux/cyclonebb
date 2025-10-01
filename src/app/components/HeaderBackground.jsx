import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeaderBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0b0f18");

    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Create floating particles system
    const particleCount = 150;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Initialize particle positions and properties
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions across the header area
      positions[i3] = (Math.random() - 0.5) * 20; // x
      positions[i3 + 1] = (Math.random() - 0.5) * 2; // y
      positions[i3 + 2] = Math.random() * 0.1; // z

      // Color based on position (teal to purple gradient)
      const colorIntensity = Math.random();
      colors[i3] = 0.0 + colorIntensity * 0.5; // r (teal)
      colors[i3 + 1] = 0.85 + colorIntensity * 0.15; // g
      colors[i3 + 2] = 1.0; // b

      sizes[i] = Math.random() * 0.02 + 0.005;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Create particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Create floating geometric shapes
    const shapes = new THREE.Group();
    
    // Floating orbs
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.SphereGeometry(0.05, 16, 16);
      const material = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x00d8ff : 0xa78bfa,
        transparent: true,
        opacity: 0.3,
        emissive: i % 2 === 0 ? 0x00d8ff : 0xa78bfa,
        emissiveIntensity: 0.2
      });
      
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 1,
        Math.random() * 0.5
      );
      
      sphere.userData = {
        speed: Math.random() * 0.02 + 0.01,
        amplitude: Math.random() * 0.5 + 0.2,
        phase: Math.random() * Math.PI * 2
      };
      
      shapes.add(sphere);
    }

    // Floating rings
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.RingGeometry(0.03, 0.05, 16);
      const material = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
      });
      
      const ring = new THREE.Mesh(geometry, material);
      ring.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 1,
        Math.random() * 0.3
      );
      ring.rotation.x = Math.random() * Math.PI;
      
      ring.userData = {
        rotationSpeed: Math.random() * 0.02 + 0.01,
        floatSpeed: Math.random() * 0.01 + 0.005
      };
      
      shapes.add(ring);
    }

    scene.add(shapes);

    // Add subtle lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00d8ff, 0.8, 100);
    pointLight.position.set(0, 0, 1);
    scene.add(pointLight);

    // Animation variables
    let time = 0;

    // Animation loop
    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      time += 0.01;

      // Animate particles
      const positions = particleSystem.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Gentle floating motion
        positions[i3 + 1] += Math.sin(time + i * 0.1) * 0.001;
        positions[i3] += Math.cos(time * 0.5 + i * 0.05) * 0.0005;
        
        // Reset particles that go too far
        if (positions[i3] > 10) positions[i3] = -10;
        if (positions[i3] < -10) positions[i3] = 10;
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      // Animate shapes
      shapes.children.forEach((shape, index) => {
        if (shape.userData.speed) {
          // Floating spheres
          shape.position.y += Math.sin(time * shape.userData.speed + shape.userData.phase) * 0.001;
          shape.rotation.y += 0.01;
          shape.rotation.x += 0.005;
        }
        
        if (shape.userData.rotationSpeed) {
          // Rotating rings
          shape.rotation.z += shape.userData.rotationSpeed;
          shape.position.y += Math.sin(time * shape.userData.floatSpeed) * 0.0008;
        }
      });

      // Subtle camera movement
      camera.position.x = Math.sin(time * 0.2) * 0.1;
      camera.position.y = Math.sin(time * 0.15) * 0.05;

      renderer.render(scene, camera);
    };

    // Handle resize
    const onResize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);
    onResize();
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      
      particles.dispose();
      particleMaterial.dispose();
      shapes.children.forEach(child => {
        child.geometry.dispose();
        child.material.dispose();
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.3
      }} 
    />
  );
}
