import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FooterBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#1a1a1a");

    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Create floating weather particles - more subtle and elegant
    const particleCount = 80;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Initialize particle positions and properties
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random positions across the footer area
      positions[i3] = (Math.random() - 0.5) * 25; // x
      positions[i3 + 1] = (Math.random() - 0.5) * 3; // y
      positions[i3 + 2] = Math.random() * 2; // z

      // Subtle color variation (mostly green with some brown)
      const colorIntensity = Math.random();
      if (Math.random() > 0.7) {
        // Brown particles (30% chance)
        colors[i3] = 0.55 + colorIntensity * 0.2; // r
        colors[i3 + 1] = 0.35 + colorIntensity * 0.1; // g
        colors[i3 + 2] = 0.17 + colorIntensity * 0.1; // b
      } else {
        // Green particles (70% chance)
        colors[i3] = 0.06 + colorIntensity * 0.3; // r
        colors[i3 + 1] = 0.73 + colorIntensity * 0.2; // g
        colors[i3 + 2] = 0.51 + colorIntensity * 0.2; // b
      }

      sizes[i] = Math.random() * 0.015 + 0.005;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Create particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Create subtle floating weather elements
    const weatherElements = new THREE.Group();
    
    // Floating clouds (subtle)
    for (let i = 0; i < 6; i++) {
      const cloudGeometry = new THREE.SphereGeometry(0.08, 16, 16);
      const cloudMaterial = new THREE.MeshStandardMaterial({
        color: 0x404040,
        transparent: true,
        opacity: 0.2,
        emissive: 0x10b981,
        emissiveIntensity: 0.1
      });
      
      const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
      cloud.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 2,
        Math.random() * 1.5
      );
      
      cloud.userData = {
        speed: Math.random() * 0.005 + 0.002,
        amplitude: Math.random() * 0.3 + 0.1,
        phase: Math.random() * Math.PI * 2
      };
      
      weatherElements.add(cloud);
    }

    // Floating raindrops
    for (let i = 0; i < 15; i++) {
      const rainGeometry = new THREE.CylinderGeometry(0.005, 0.005, 0.1, 6);
      const rainMaterial = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0.3,
        emissive: 0x10b981,
        emissiveIntensity: 0.2
      });
      
      const raindrop = new THREE.Mesh(rainGeometry, rainMaterial);
      raindrop.position.set(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 2.5,
        Math.random() * 1
      );
      
      raindrop.userData = {
        fallSpeed: Math.random() * 0.01 + 0.005,
        drift: Math.random() * 0.002 + 0.001,
        phase: Math.random() * Math.PI * 2
      };
      
      weatherElements.add(raindrop);
    }

    scene.add(weatherElements);

    // Add subtle lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x10b981, 0.3, 100);
    pointLight1.position.set(-3, 0, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5a2b, 0.2, 100);
    pointLight2.position.set(3, 0, 3);
    scene.add(pointLight2);

    // Animation variables
    let time = 0;

    // Animation loop
    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      time += 0.005;

      // Animate particles with gentle floating motion
      const positions = particleSystem.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Gentle floating motion
        positions[i3 + 1] += Math.sin(time + i * 0.1) * 0.0005;
        positions[i3] += Math.cos(time * 0.3 + i * 0.05) * 0.0003;
        
        // Reset particles that go too far
        if (positions[i3] > 12.5) positions[i3] = -12.5;
        if (positions[i3] < -12.5) positions[i3] = 12.5;
        if (positions[i3 + 1] > 1.5) positions[i3 + 1] = -1.5;
        if (positions[i3 + 1] < -1.5) positions[i3 + 1] = 1.5;
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      // Animate weather elements
      weatherElements.children.forEach((element, index) => {
        if (element.userData.speed) {
          // Floating clouds
          element.position.y += Math.sin(time * element.userData.speed + element.userData.phase) * 0.0005;
          element.rotation.y += 0.002;
        }
        
        if (element.userData.fallSpeed) {
          // Falling raindrops
          element.position.y -= element.userData.fallSpeed;
          element.position.x += Math.sin(time * 2 + index) * element.userData.drift;
          
          // Reset raindrops that fall too far
          if (element.position.y < -1.5) {
            element.position.y = 1.5;
            element.position.x = (Math.random() - 0.5) * 18;
          }
        }
      });

      // Very subtle camera movement
      camera.position.x = Math.sin(time * 0.05) * 0.1;
      camera.position.y = Math.sin(time * 0.08) * 0.05;

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
      weatherElements.children.forEach(child => {
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
