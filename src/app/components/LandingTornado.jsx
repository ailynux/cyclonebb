import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function LandingTornado() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    // Create a gradient background that matches the landing page
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    const gradient = context.createLinearGradient(0, 0, 256, 0);
    gradient.addColorStop(0, '#0b0f18');
    gradient.addColorStop(0.3, '#111827');
    gradient.addColorStop(0.6, '#1a202c');
    gradient.addColorStop(1, '#0b0f18');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
    
    const texture = new THREE.CanvasTexture(canvas);
    scene.background = texture;

    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 2, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Dramatic lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Multiple colored lights for dramatic effect
    const stormLight1 = new THREE.PointLight(0x00d8ff, 2.0, 100);
    stormLight1.position.set(3, 4, 2);
    scene.add(stormLight1);

    const stormLight2 = new THREE.PointLight(0xa78bfa, 1.5, 100);
    stormLight2.position.set(-3, 3, 3);
    scene.add(stormLight2);

    const stormLight3 = new THREE.PointLight(0xf59e0b, 1.0, 100);
    stormLight3.position.set(0, 5, -2);
    scene.add(stormLight3);

    // Create a massive tornado system
    const tornadoSystem = new THREE.Group();
    
    // Main tornado - much larger and more dramatic
    const mainConeGeometry = new THREE.ConeGeometry(1.2, 4.0, 64);
    const mainConeMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a5568,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const mainCone = new THREE.Mesh(mainConeGeometry, mainConeMaterial);
    mainCone.position.y = 2.0;
    tornadoSystem.add(mainCone);

    // Secondary funnel
    const innerConeGeometry = new THREE.ConeGeometry(0.8, 3.5, 64);
    const innerConeMaterial = new THREE.MeshStandardMaterial({
      color: 0x2d3748,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide
    });
    const innerCone = new THREE.Mesh(innerConeGeometry, innerConeMaterial);
    innerCone.position.y = 1.75;
    tornadoSystem.add(innerCone);

    // Core funnel
    const coreConeGeometry = new THREE.ConeGeometry(0.5, 3.0, 64);
    const coreConeMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a202c,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    });
    const coreCone = new THREE.Mesh(coreConeGeometry, coreConeMaterial);
    coreCone.position.y = 1.5;
    tornadoSystem.add(coreCone);

    // Massive debris cloud - much more particles
    const debrisGeometry = new THREE.SphereGeometry(0.03, 8, 6);
    const debrisMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xef4444,
      emissiveIntensity: 0.5
    });
    
    const debrisCloud = new THREE.Group();
    for (let i = 0; i < 100; i++) {
      const debris = new THREE.Mesh(debrisGeometry, debrisMaterial);
      
      // Random positions in a much larger area
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.5 + Math.random() * 0.8;
      const height = Math.random() * 4.0;
      
      debris.position.x = Math.cos(angle) * radius;
      debris.position.y = height;
      debris.position.z = Math.sin(angle) * radius;
      
      debris.userData = {
        angle: angle,
        radius: radius,
        speed: 0.015 + Math.random() * 0.025,
        height: height,
        bobSpeed: Math.random() * 0.03 + 0.01,
        rotationSpeed: Math.random() * 0.05 + 0.02
      };
      
      debrisCloud.add(debris);
    }
    tornadoSystem.add(debrisCloud);

    // Large dust cloud at base
    const dustGeometry = new THREE.CylinderGeometry(2.0, 1.5, 0.5, 32);
    const dustMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b7355,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide
    });
    const dustCloud = new THREE.Mesh(dustGeometry, dustMaterial);
    dustCloud.position.y = 0.2;
    tornadoSystem.add(dustCloud);

    // Additional atmospheric particles
    const atmosphereGeometry = new THREE.SphereGeometry(0.01, 6, 4);
    const atmosphereMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
      emissive: 0x00d8ff,
      emissiveIntensity: 0.3
    });
    
    const atmosphereParticles = new THREE.Group();
    for (let i = 0; i < 200; i++) {
      const particle = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.0 + Math.random() * 3.0;
      const height = Math.random() * 5.0;
      
      particle.position.x = Math.cos(angle) * radius;
      particle.position.y = height;
      particle.position.z = Math.sin(angle) * radius;
      
      particle.userData = {
        angle: angle,
        radius: radius,
        speed: 0.005 + Math.random() * 0.01,
        height: height,
        bobSpeed: Math.random() * 0.02 + 0.005
      };
      
      atmosphereParticles.add(particle);
    }
    tornadoSystem.add(atmosphereParticles);

    scene.add(tornadoSystem);

    // Multiple lightning strikes
    const lightningGroup = new THREE.Group();
    
    for (let l = 0; l < 3; l++) {
      const lightningGeometry = new THREE.BufferGeometry();
      const points = [];
      
      // Create jagged lightning path
      for (let i = 0; i < 8; i++) {
        const x = (Math.random() - 0.5) * 0.4;
        const y = 4 - (i * 0.5);
        const z = (Math.random() - 0.5) * 0.3;
        points.push(new THREE.Vector3(x, y, z));
      }
      
      lightningGeometry.setFromPoints(points);
      
      const lightningMaterial = new THREE.LineBasicMaterial({
        color: l === 0 ? 0x00d8ff : l === 1 ? 0xffffff : 0xa78bfa,
        transparent: true,
        opacity: 0.8
      });
      
      const lightning = new THREE.Line(lightningGeometry, lightningMaterial);
      lightning.position.x = (Math.random() - 0.5) * 2;
      lightning.position.z = (Math.random() - 0.5) * 2;
      lightning.userData = { flashSpeed: Math.random() * 0.05 + 0.02 };
      
      lightningGroup.add(lightning);
    }
    
    scene.add(lightningGroup);

    // Animation variables
    let time = 0;

    // Animation loop
    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      time += 0.008;
      
      // Rotate tornado system
      tornadoSystem.rotation.y += 0.005;
      
      // Animate debris particles
      debrisCloud.children.forEach((debris) => {
        const data = debris.userData;
        data.angle += data.speed;
        data.height += Math.sin(time * data.bobSpeed) * 0.002;
        
        debris.position.x = Math.cos(data.angle) * data.radius;
        debris.position.y = data.height + Math.sin(time * 1.5) * 0.15;
        debris.position.z = Math.sin(data.angle) * data.radius;
        
        debris.rotation.x += data.rotationSpeed;
        debris.rotation.y += data.rotationSpeed * 1.5;
      });

      // Animate atmosphere particles
      atmosphereParticles.children.forEach((particle) => {
        const data = particle.userData;
        data.angle += data.speed;
        data.height += Math.sin(time * data.bobSpeed) * 0.001;
        
        particle.position.x = Math.cos(data.angle) * data.radius;
        particle.position.y = data.height + Math.sin(time * 0.8) * 0.1;
        particle.position.z = Math.sin(data.angle) * data.radius;
      });

      // Animate lightning
      lightningGroup.children.forEach((lightning, index) => {
        const flash = Math.sin(time * 10 + index * 2);
        lightning.material.opacity = flash > 0.5 ? 0.8 : 0.1;
        lightning.rotation.y = Math.sin(time * 0.3 + index) * 0.1;
      });
      
      // Dynamic camera movement for cinematic effect
      camera.position.x = Math.sin(time * 0.2) * 0.3;
      camera.position.y = 2 + Math.sin(time * 0.15) * 0.2;
      camera.position.z = 6 + Math.sin(time * 0.1) * 0.2;
      camera.lookAt(0, 2, 0);

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
      
      // Dispose of geometries and materials
      [
        mainConeGeometry, innerConeGeometry, coreConeGeometry, 
        debrisGeometry, dustGeometry, atmosphereGeometry
      ].forEach(geo => geo.dispose());
      
      [
        mainConeMaterial, innerConeMaterial, coreConeMaterial,
        debrisMaterial, dustMaterial, atmosphereMaterial
      ].forEach(mat => mat.dispose());
      
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: "100%", 
        height: "100%", 
        borderRadius: 12, 
        overflow: "hidden",
        background: "linear-gradient(90deg, #0b0f18 0%, #111827 30%, #1a202c 60%, #0b0f18 100%)"
      }} 
    />
  );
}
