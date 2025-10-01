import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function TornadoScene({ isMobile = false }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0b0f18");

    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 1.5, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00d8ff, 1.2, 100);
    pointLight1.position.set(2, 3, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa78bfa, 0.8, 100);
    pointLight2.position.set(-2, 2, 3);
    scene.add(pointLight2);

    // Tornado funnel geometry - multiple cones for realistic shape
    const tornadoGroup = new THREE.Group();
    
    // Main tornado funnel
    const mainConeGeometry = new THREE.ConeGeometry(0.8, 2.5, 32);
    const mainConeMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a5568,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide
    });
    const mainCone = new THREE.Mesh(mainConeGeometry, mainConeMaterial);
    mainCone.position.y = 1.2;
    tornadoGroup.add(mainCone);

    // Secondary inner funnel
    const innerConeGeometry = new THREE.ConeGeometry(0.5, 2.2, 32);
    const innerConeMaterial = new THREE.MeshStandardMaterial({
      color: 0x2d3748,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    });
    const innerCone = new THREE.Mesh(innerConeGeometry, innerConeMaterial);
    innerCone.position.y = 1.1;
    tornadoGroup.add(innerCone);

    // Core funnel (darkest)
    const coreConeGeometry = new THREE.ConeGeometry(0.3, 2.0, 32);
    const coreConeMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a202c,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide
    });
    const coreCone = new THREE.Mesh(coreConeGeometry, coreConeMaterial);
    coreCone.position.y = 1.0;
    tornadoGroup.add(coreCone);

    // Debris particles
    const debrisGeometry = new THREE.SphereGeometry(0.02, 8, 6);
    const debrisMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xef4444,
      emissiveIntensity: 0.3
    });
    
    const debrisParticles = new THREE.Group();
    const particleCount = isMobile ? 25 : 50;
    for (let i = 0; i < particleCount; i++) {
      const debris = new THREE.Mesh(debrisGeometry, debrisMaterial);
      
      // Random positions around the tornado
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.3 + Math.random() * 0.4;
      const height = Math.random() * 2.5;
      
      debris.position.x = Math.cos(angle) * radius;
      debris.position.y = height;
      debris.position.z = Math.sin(angle) * radius;
      
      debris.userData = {
        angle: angle,
        radius: radius,
        speed: 0.02 + Math.random() * 0.03,
        height: height,
        bobSpeed: Math.random() * 0.05 + 0.02
      };
      
      debrisParticles.add(debris);
    }
    tornadoGroup.add(debrisParticles);

    // Dust cloud at base
    const dustGeometry = new THREE.CylinderGeometry(1.2, 0.8, 0.3, 32);
    const dustMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b7355,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const dustCloud = new THREE.Mesh(dustGeometry, dustMaterial);
    dustCloud.position.y = 0.1;
    tornadoGroup.add(dustCloud);

    scene.add(tornadoGroup);

    // Lightning effect
    const lightningGroup = new THREE.Group();
    const lightningGeometry = new THREE.BufferGeometry();
    const lightningPositions = new Float32Array([
      0, 2, 0,
      -0.2, 1.5, 0.1,
      0.1, 1, -0.1,
      -0.3, 0.5, 0.2,
      0.2, 0.2, -0.2
    ]);
    lightningGeometry.setAttribute('position', new THREE.BufferAttribute(lightningPositions, 3));
    
    const lightningMaterial = new THREE.LineBasicMaterial({
      color: 0x00d8ff,
      transparent: true,
      opacity: 0.8
    });
    
    const lightning = new THREE.Line(lightningGeometry, lightningMaterial);
    lightningGroup.add(lightning);
    scene.add(lightningGroup);

    // Animation variables
    let time = 0;
    let lightningFlash = 0;

    // Animation loop
    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      time += 0.01;
      
      // Rotate tornado
      tornadoGroup.rotation.y += 0.008;
      
      // Animate debris particles
      debrisParticles.children.forEach((debris) => {
        const data = debris.userData;
        data.angle += data.speed;
        data.height += Math.sin(time * data.bobSpeed) * 0.001;
        
        debris.position.x = Math.cos(data.angle) * data.radius;
        debris.position.y = data.height + Math.sin(time * 2) * 0.1;
        debris.position.z = Math.sin(data.angle) * data.radius;
        
        debris.rotation.x += 0.01;
        debris.rotation.y += 0.02;
      });

      // Animate lightning
      lightningFlash += 0.1;
      if (lightningFlash > Math.PI * 2) lightningFlash = 0;
      
      lightning.material.opacity = Math.sin(lightningFlash) > 0.7 ? 0.8 : 0.1;
      lightningGroup.rotation.y = Math.sin(time * 0.5) * 0.2;
      
      // Slight camera movement for dynamism
      camera.position.x = Math.sin(time * 0.3) * 0.1;
      camera.position.z = 4 + Math.sin(time * 0.2) * 0.05;
      camera.lookAt(0, 1.5, 0);

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
      [mainConeGeometry, innerConeGeometry, coreConeGeometry, debrisGeometry, dustGeometry, lightningGeometry].forEach(geo => geo.dispose());
      [mainConeMaterial, innerConeMaterial, coreConeMaterial, debrisMaterial, dustMaterial, lightningMaterial].forEach(mat => mat.dispose());
      
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: "100%", 
        height: 450, 
        borderRadius: 12, 
        overflow: "hidden",
        background: "linear-gradient(135deg, #0b0f18 0%, #111827 100%)"
      }} 
    />
  );
}
