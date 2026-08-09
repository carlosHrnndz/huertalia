/* ==========================================================================
   HUERTALIA LIOFILIZADOS - V4 INTERACTIVE LOGIC
   Desire-First Luxury Editorial Brand Experience
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation Scroll Backdrop & Theme Detection
  const headerWrapper = document.querySelector('.site-header-wrapper');
  if (headerWrapper) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 50) {
        // Check if we are over light or dark section
        headerWrapper.classList.add('scrolled');
      } else {
        headerWrapper.classList.remove('scrolled', 'scrolled-light');
      }
    });
  }

  // 2. Mobile Navigation Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('mobile-active') 
          ? 'ri-close-line' 
          : 'ri-menu-3-line';
      }
    });
  }

  // 3. Scroll Reveal & Number Counter Observer
  const revealElements = document.querySelectorAll('.reveal, .reveal-scale');
  const countElements = document.querySelectorAll('.count-number');

  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 1600;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * target);

      el.textContent = `${prefix}${currentVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `${prefix}${target}${suffix}`;
      }
    }

    requestAnimationFrame(step);
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');

        const counts = entry.target.querySelectorAll('.count-number');
        counts.forEach(c => {
          if (!c.classList.contains('counted')) {
            c.classList.add('counted');
            animateCount(c);
          }
        });

        if (entry.target.classList.contains('count-number') && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          animateCount(entry.target);
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
  countElements.forEach(el => revealObserver.observe(el));

  // 4. Parallax Scroll Effect on Floating Fruits
  const floatingFruits = document.querySelectorAll('.floating-fruit');
  if (floatingFruits.length > 0) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      floatingFruits.forEach((fruit, idx) => {
        const factor = (idx % 2 === 0 ? 1 : -1) * (0.035 + (idx * 0.015));
        fruit.style.transform = `translateY(${scrolled * factor}px) rotate(${scrolled * 0.02}deg)`;
      });
    });
  }

  // 5. Products Collection Data
  const productsData = [
    {
      id: 'fresas-natural',
      name: 'Fresas Liofilizadas',
      category: 'natural',
      sub: 'Sweet. Intense. Crunchy.',
      calories: 46,
      weight: '15 g',
      equivalence: '10 Fresas Frescas (1 Taza)',
      desc: 'Fresas seleccionadas en su punto óptimo de madurez, liofilizadas mediante sublimación en frío. Cada bocado crujiente conserva la intensidad de sabor natural y el 98% de los nutrientes intactos.',
      benefits: ['Solo fresa. Nada más.', 'Sin azúcar añadida', 'Sin conservadores ni colorantes', '46 kcal por empaque completo'],
      image: 'assets/images/products/packshot_fresas.jpg'
    },
    {
      id: 'manzana-natural',
      name: 'Manzana Liofilizada',
      category: 'natural',
      sub: 'Crisp. Clean. Pure.',
      calories: 67,
      weight: '20 g',
      equivalence: '1 Manzana Entera (3/4 Taza)',
      desc: 'Láminas crujientes de manzana natural sin cáscara ni ceras añadidas. Una fuente pura de fibra dietética ideal para mantener tus niveles de energía estables durante el día.',
      benefits: ['100% Manzana seleccionada', 'Súper ligera y crujiente', 'Rica en fibra soluble', 'Excelente snack diario'],
      image: 'assets/images/products/packshot_manzana.jpg'
    },
    {
      id: 'platano-natural',
      name: 'Plátano Liofilizado',
      category: 'natural',
      sub: 'Rich. Golden. Natural.',
      calories: 98,
      weight: '28 g',
      equivalence: '1 Plátano Entero',
      desc: 'Rodajas de plátano dulce sin aceites ni azúcares añadidos. A diferencia de las fichas de plátano frito tradicional, nuestro proceso mantiene cero grasas y 100% del potasio.',
      benefits: ['Sin aceites ni fritos', 'Energía limpia y portátil', 'Rico en potasio y vitamina B6', '98 kcal de nutrición pura'],
      image: 'assets/images/products/packshot_platano.jpg'
    },
    {
      id: 'mango-natural',
      name: 'Mango Liofilizado',
      category: 'natural',
      sub: 'Tropical. Vibrant. Exotic.',
      calories: 80,
      weight: '24 g',
      equivalence: '1 Mango de la Huerta (1 Taza)',
      desc: 'Lajas del más jugoso mango tropical transformadas en un snack super crujiente. Retiene beta-carotenos y todo el sabor vibrante sin una sola gota de almíbar.',
      benefits: ['Solo mango. Nada más.', 'Alto en Vitamina A y C', 'Textura crujiente irresistible', 'Empaque listo para llevar'],
      image: 'assets/images/products/packshot_mango.jpg'
    },
    {
      id: 'mango-chamoy',
      name: 'Mango Chamoy',
      category: 'chamoy',
      sub: 'Bold. Spicy. Wild.',
      calories: 76,
      weight: '24 g',
      equivalence: '1 Mango entero con Toque Picosito',
      desc: 'La combinación perfecta entre la dulzura tropical del mango liofilizado y una receta artesanal de chamoy sin colorantes ni saborizantes artificiales. Picor suave y adictivo.',
      benefits: ['Chamoy sin azúcar refinada', 'Sabor mexicano auténtico', 'Solo 76 kcal por paquete', '100% Vegano y libre de gluten'],
      image: 'assets/images/products/packshot_mango_chamoy.jpg'
    },
    {
      id: 'manzana-chamoy',
      name: 'Manzana Chamoy',
      category: 'chamoy',
      sub: 'Tangy. Crunchy. Addictive.',
      calories: 60,
      weight: '20 g',
      equivalence: '1 Manzana crujiente picosita',
      desc: 'Crujientes trozos de manzana natural cubiertos con una sazón ligera de chile en polvo y chamoy natural. La alternativa saludable perfecta para tus antojos.',
      benefits: ['Bajo en calorías (solo 60 kcal)', 'Crujido intenso agridulce', 'Sin conservadores químicos', 'Perfecto snack portátil'],
      image: 'assets/images/products/packshot_manzana_chamoy.jpg'
    },
    {
      id: 'pina-chamoy',
      name: 'Piña Chamoy',
      category: 'chamoy',
      sub: 'Zesty. Tropical. Fire.',
      calories: 93,
      weight: '22 g',
      equivalence: '1 Taza de Piña Tropical Picosita',
      desc: 'Bocado tropical agridulce con el nivel exacto de piña natural liofilizada y sazón chamoy. Aporta bromelina natural para una digestión ágil.',
      benefits: ['Piña natural con enzimas vivas', 'Sabor agridulce explosivo', 'Libre de glutamato monosódico', 'Equivale a 1 taza completa de fruta'],
      image: 'assets/images/products/packshot_pina_chamoy.jpg'
    }
  ];

  // Render Collection
  const productsGrid = document.getElementById('products-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderProducts(filter = 'all') {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    
    const filtered = filter === 'all' 
      ? productsData 
      : productsData.filter(p => p.category === filter);
      
    filtered.forEach(product => {
      const card = document.createElement('div');
      card.className = 'editorial-product-card reveal-scale active';
      card.innerHTML = `
        <div class="editorial-img-box">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="editorial-info-box">
          <h3 class="editorial-product-title">${product.name}</h3>
          <p class="editorial-product-desc">${product.sub}</p>
          
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; border-top: 1px solid var(--border-light); padding-top: 1rem;">
            <span style="font-family: var(--font-serif); font-weight: 800; font-size: 1.1rem; color: var(--color-primary);">${product.calories} kcal</span>
            <button class="btn btn-outline-dark product-btn-detail" data-id="${product.id}" style="padding: 0.6rem 1.2rem; font-size: 0.78rem;">
              EXPLORE <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });

    // Attach event listeners to detail buttons
    document.querySelectorAll('.product-btn-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodId = e.currentTarget.getAttribute('data-id');
        openModal(prodId);
      });
    });
  }

  renderProducts();

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderProducts(filterValue);
    });
  });

  // Modal Functionality
  const modalOverlay = document.getElementById('product-modal');
  const modalContainer = document.getElementById('modal-content');
  const modalCloseBtn = document.getElementById('modal-close');

  function openModal(id) {
    const product = productsData.find(p => p.id === id);
    if (!product || !modalOverlay || !modalContainer) return;

    modalContainer.innerHTML = `
      <div class="modal-content-grid">
        <div class="modal-img-area">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-details-area">
          <span class="wild-badge" style="margin-bottom: 0.8rem; width: fit-content;">
            ${product.category === 'chamoy' ? '🌶️ WILD CHAMOY' : '🌿 100% PURE FRUIT'}
          </span>
          <h2 style="font-family: var(--font-serif); font-size: 2.4rem; margin-bottom: 0.4rem; color: var(--color-primary);">${product.name}</h2>
          <p style="color: var(--color-primary-muted); font-weight: 700; margin-bottom: 1.2rem;">Equivale a ${product.equivalence}</p>
          <p style="color: var(--color-text-muted); font-size: 0.98rem; margin-bottom: 1.8rem; line-height: 1.6;">${product.desc}</p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background: var(--bg-alt); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.8rem;">
            <div>
              <span style="font-family: var(--font-serif); font-weight: 800; font-size: 1.3rem; color: var(--color-accent-red);">${product.calories} kcal</span>
              <span style="display: block; font-size: 0.7rem; text-transform: uppercase; font-weight: 700; color: var(--color-text-muted);">Calorías / Sobre</span>
            </div>
            <div>
              <span style="font-family: var(--font-serif); font-weight: 800; font-size: 1.3rem; color: var(--color-primary);">${product.weight}</span>
              <span style="display: block; font-size: 0.7rem; text-transform: uppercase; font-weight: 700; color: var(--color-text-muted);">Contenido Neto</span>
            </div>
          </div>

          <a href="contacto.html" class="btn btn-luxury-dark" style="width: 100%;">
            BECOME A DISTRIBUTOR / ORDER <i class="ri-mail-send-line"></i>
          </a>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // 6. Interactive Premium Calculator Data Visualization Logic
  const calcSelect = document.getElementById('calc-fruit');
  const calcQty = document.getElementById('calc-qty');
  const qtyValDisplay = document.getElementById('qty-val');
  const calSavedDisplay = document.getElementById('cal-saved');
  const fruitEquivDisplay = document.getElementById('fruit-equiv');
  const barJunk = document.getElementById('bar-junk');
  const barHuertalia = document.getElementById('bar-huertalia');
  const valJunk = document.getElementById('val-junk');
  const valHuertalia = document.getElementById('val-huertalia');

  function updateCalculator() {
    if (!calcSelect || !calcQty) return;
    const selectedProd = productsData.find(p => p.id === calcSelect.value) || productsData[0];
    const qty = parseInt(calcQty.value, 10) || 1;

    if (qtyValDisplay) qtyValDisplay.textContent = `${qty} porción${qty > 1 ? 'es' : ''}/semana`;
    
    const junkCal = 280 * qty;
    const huertaliaCal = selectedProd.calories * qty;
    const calSaved = junkCal - huertaliaCal;

    if (calSavedDisplay) calSavedDisplay.textContent = `-${calSaved} kcal`;
    if (fruitEquivDisplay) fruitEquivDisplay.textContent = `${qty}x de ${selectedProd.name}`;

    if (barJunk && barHuertalia) {
      const huertaliaPct = Math.round((huertaliaCal / junkCal) * 100);
      barJunk.style.width = '100%';
      barHuertalia.style.width = `${huertaliaPct}%`;

      if (valJunk) valJunk.textContent = `${junkCal} kcal`;
      if (valHuertalia) valHuertalia.textContent = `${huertaliaCal} kcal (${huertaliaPct}%)`;
    }
  }

  if (calcSelect && calcQty) {
    calcSelect.addEventListener('change', updateCalculator);
    calcQty.addEventListener('input', updateCalculator);
    updateCalculator();
  }

  // 7. Interactive Map (Leaflet.js)
  const mapContainer = document.getElementById('map-container');
  if (mapContainer && typeof L !== 'undefined') {
    const leonCoords = [21.1683, -101.6912];
    
    const map = L.map('map-container', {
      center: leonCoords,
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; CARTO &copy; OpenStreetMap',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    const customIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div style="
          width: 48px;
          height: 48px;
          background-color: #122317;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
          border: 3px solid #FAF6F0;
        ">
          <span style="transform: rotate(45deg); color: white; font-weight: bold; font-size: 1.2rem;">🌿</span>
        </div>
      `,
      iconSize: [48, 48],
      iconAnchor: [24, 48],
      popupAnchor: [0, -48]
    });

    L.marker(leonCoords, { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 5px; text-align: center;">
          <h4 style="color: #122317; margin-bottom: 4px; font-weight: 800; font-family: 'Fraunces', serif;">Huertalia Liofilizados</h4>
          <p style="font-size: 0.85rem; color: #6B756E; margin: 0;">Colonia Balcones del Campestre</p>
          <p style="font-size: 0.8rem; font-weight: bold; color: #122317; margin-top: 4px;">León, Guanajuato, México 🇲🇽</p>
        </div>
      `)
      .openPopup();
  }
});
