/**
 * SRINIVAS ECOMMERCE - INTERACTIVE 3D ENGINE
 * Mouse Perspective 3D Card Tilt, Three.js Hero Canvas & Interactive 3D Rotatable Product Model
 */

document.addEventListener('DOMContentLoaded', () => {
  init3DCardsTilt();
  initThreeJSHeroCanvas();
});

/* ==========================================================================
   1. 3D CARD TILT & PARALLAX EFFECT
   ========================================================================== */
function init3DCardsTilt() {
  const cards = document.querySelectorAll('.product-card, .category-card, .stat-card, .hero-slider');

  cards.forEach(card => {
    card.classList.add('tilt-3d-element');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12; // Rotate up/down max 12deg
      const rotateY = ((x - centerX) / centerX) * 12;  // Rotate left/right max 12deg

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)`;
      card.style.transition = 'transform 0.5s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });
}

/* ==========================================================================
   2. THREE.JS 3D CANVAS HERO BACKGROUND
   ========================================================================== */
function initThreeJSHeroCanvas() {
  const heroWrap = document.querySelector('.hero-image-wrap');
  if (!heroWrap || typeof THREE === 'undefined') return;

  // Insert 3D Canvas
  heroWrap.innerHTML = '<div id="hero-3d-canvas-container" style="width:300px; height:300px; position:relative;"></div>';
  const container = document.getElementById('hero-3d-canvas-container');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(300, 300);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Add 3D Glowing Geometry (Torus Knot)
  const geometry = new THREE.TorusKnotGeometry(1.2, 0.38, 128, 32);
  const material = new THREE.MeshStandardMaterial({
    color: 0x2563eb,
    roughness: 0.2,
    metalness: 0.8,
    wireframe: false
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x38bdf8, 2, 50);
  pointLight1.position.set(5, 5, 5);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xf59e0b, 2, 50);
  pointLight2.position.set(-5, -5, -5);
  scene.add(pointLight2);

  // Mouse Interactivity
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
  });

  // Render Loop
  function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.008;
    mesh.rotation.y += 0.012;

    mesh.rotation.x += mouseY * 0.05;
    mesh.rotation.y += mouseX * 0.05;

    renderer.render(scene, camera);
  }

  animate();
}

/* ==========================================================================
   3. INTERACTIVE 3D PRODUCT VIEWER MODAL
   ========================================================================== */
function open3DProductViewer(productName) {
  let modal = document.getElementById('modal-3d-viewer');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modal-3d-viewer';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-card" style="text-align:center; max-width:550px;">
      <button class="modal-close" onclick="document.getElementById('modal-3d-viewer').classList.remove('active')"><i class="bi bi-x-lg"></i></button>
      <h3 style="font-size:1.3rem; font-weight:800; color:var(--text-main); margin-bottom:0.5rem;">3D Interactive Model View</h3>
      <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">Drag with your mouse to rotate 3D view of <strong>${productName}</strong></p>
      <div id="product-3d-canvas-wrap" style="width:100%; height:320px; background:var(--bg-subtle); border-radius:var(--radius-md); overflow:hidden;"></div>
    </div>
  `;

  modal.classList.add('active');

  const canvasWrap = document.getElementById('product-3d-canvas-wrap');
  if (typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, canvasWrap.clientWidth / 320, 0.1, 1000);
  camera.position.z = 4.5;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(canvasWrap.clientWidth, 320);
  canvasWrap.appendChild(renderer.domElement);

  // 3D Gem / Product Shape
  const geometry = new THREE.IcosahedronGeometry(1.4, 1);
  const material = new THREE.MeshPhysicalMaterial({
    color: 0x3b82f6,
    roughness: 0.1,
    transmission: 0.9, // Glass-like 3D effect
    thickness: 1.2
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(2, 2, 5);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0xffffff, 0.8));

  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  renderer.domElement.addEventListener('mousedown', (e) => {
    isDragging = true;
  });

  renderer.domElement.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaMove = { x: e.offsetX - previousMousePosition.x, y: e.offsetY - previousMousePosition.y };

    mesh.rotation.y += deltaMove.x * 0.01;
    mesh.rotation.x += deltaMove.y * 0.01;

    previousMousePosition = { x: e.offsetX, y: e.offsetY };
  });

  document.addEventListener('mouseup', () => { isDragging = false; });

  function render3D() {
    if (!modal.classList.contains('active')) return;
    requestAnimationFrame(render3D);
    if (!isDragging) mesh.rotation.y += 0.005;
    renderer.render(scene, camera);
  }

  render3D();
}
