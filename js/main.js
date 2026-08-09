/* ==========================================================================
   HUERTALIA LIOFILIZADOS - INTERACTIVE JAVASCRIPT LOGIC
   Senior Healthy Food Marketing & Web Design Standard
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Scroll Glassmorphism effect
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
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

  // 3. Scroll Reveal Observer with IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // 4. Products Data & Modal Manager
  const productsData = [
    {
      id: 'fresas-natural',
      name: 'Fresas Liofilizadas',
      category: 'natural',
      sub: '100% Fruta Real | Crunchy',
      calories: 46,
      weight: '15 g',
      equivalence: '10 Fresas Frescas (1 Taza)',
      desc: 'Fresas seleccionadas en su punto óptimo de madurez, liofilizadas mediante sublimación en frío. Cada bocado crujiente conserva la intensidad de sabor natural, la vitamina C y los antioxidantes intactos.',
      benefits: ['Solo fresa. Nada más.', 'Sin azúcar añadida', 'Sin conservadores ni colorantes', '46 kcal por empaque completo'],
      image: 'assets/images/products/fresas_natural.jpg'
    },
    {
      id: 'manzana-natural',
      name: 'Manzana Liofilizada',
      category: 'natural',
      sub: '100% Fruta Real | Crunchy',
      calories: 67,
      weight: '20 g',
      equivalence: '1 Manzana Entera (3/4 Taza)',
      desc: 'Láminas crujientes de manzana natural sin cáscara ni ceras añadidas. Una fuente pura de fibra dietética y potasio ideal para mantener tus niveles de energía estables durante el día.',
      benefits: ['100% Manzana seleccionada', 'Súper ligera y crujiente', 'Rica en fibra soluble', 'Excelente snack para niños y adultos'],
      image: 'assets/images/products/manzana_natural.jpg'
    },
    {
      id: 'platano-natural',
      name: 'Plátano Liofilizado',
      category: 'natural',
      sub: '100% Fruta Real | Crunchy',
      calories: 98,
      weight: '28 g',
      equivalence: '1 Plátano Entero',
      desc: 'Rodajas de plátano dulce sin aceites ni azúcares añadidos. A diferencia de las fichas de plátano frito tradicional, nuestro proceso de liofilización mantiene cero grasas y 100% del potasio.',
      benefits: ['Sin aceites ni fritos', 'Energía limpia para deportistas', 'Rico en potasio y vitamina B6', '98 kcal de nutrición pura'],
      image: 'assets/images/products/platano_natural.jpg'
    },
    {
      id: 'mango-natural',
      name: 'Mango Liofilizado',
      category: 'natural',
      sub: '100% Fruta Real | Crunchy',
      calories: 80,
      weight: '24 g',
      equivalence: '1 Mango de la Huerta (1 Taza)',
      desc: 'Lajas del más jugoso mango tropical transformadas en un snack super crujiente. Retiene el complejo B, beta-carotenos y todo el sabor vibrante sin una sola gota de almíbar.',
      benefits: ['Solo mango. Nada más.', 'Alto en Vitamina A y C', 'Textura crujiente irresistible', 'Empaque listo para llevar'],
      image: 'assets/images/products/mango_natural.jpg'
    },
    {
      id: 'mango-chamoy',
      name: 'Mango Chamoy',
      category: 'chamoy',
      sub: 'Fruta Real Liofilizada con Chamoy',
      calories: 76,
      weight: '24 g',
      equivalence: '1 Mango entero con Toque Picosito',
      desc: 'La combinación perfecta entre la dulzura tropical del mango liofilizado y una receta artesanal de chamoy sin colorantes ni saborizantes artificiales. Picor suave y adictivo.',
      benefits: ['Chamoy sin azúcar refinada', 'Sabor mexicano auténtico y picosito', 'Solo 76 kcal por paquete', '100% Vegano y libre de gluten'],
      image: 'assets/images/products/mango_chamoy.jpg'
    },
    {
      id: 'manzana-chamoy',
      name: 'Manzana Chamoy',
      category: 'chamoy',
      sub: 'Fruta Real Liofilizada con Chamoy',
      calories: 60,
      weight: '20 g',
      equivalence: '1 Manzana crujiente picosita',
      desc: 'Crujientes trozos de manzana natural cubiertos con una sazón ligera de chile en polvo y chamoy natural. La alternativa saludable perfecta para tus antojos de la tarde.',
      benefits: ['Bajo en calorías (solo 60 kcal)', 'Crujido intenso con toque agridulce', 'Sin conservadores químicos', 'Perfecto snack escolar o de oficina'],
      image: 'assets/images/products/manzana_chamoy.jpg'
    },
    {
      id: 'pina-chamoy',
      name: 'Piña Chamoy',
      category: 'chamoy',
      sub: 'Fruta Real Liofilizada con Chamoy',
      calories: 93,
      weight: '22 g',
      equivalence: '1 Taza de Piña Tropical Picosita',
      desc: 'Bocado tropical agridulce con el nivel exacto de piña natural liofilizada y sazón chamoy. Aporta bromelina natural para una digestión ágil y refrescante.',
      benefits: ['Piña natural con enzimas vivas', 'Sabor agridulce explosivo', 'Libre de glutamato monosódico', 'Equivale a 1 taza completa de fruta'],
      image: 'assets/images/products/pina_chamoy.jpg'
    }
  ];

  // Render Product Catalog
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
      card.className = 'product-card reveal-scale active';
      card.innerHTML = `
        <div class="product-card-banner ${product.category === 'chamoy' ? 'chamoy' : ''}">
          ${product.category === 'chamoy' ? '🌶️ Línea Chamoy' : '🍃 100% Natural'}
        </div>
        <div class="product-img-box">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <span class="product-subtitle">${product.sub}</span>
          <div class="product-metrics">
            <div class="metric-item">
              <span class="metric-val">${product.calories} kcal</span>
              <span class="metric-lbl">Calorías</span>
            </div>
            <div class="metric-item">
              <span class="metric-val">${product.weight}</span>
              <span class="metric-lbl">Contenido</span>
            </div>
          </div>
          <button class="btn btn-secondary product-btn-detail" data-id="${product.id}">
            Ver Detalles <i class="ri-arrow-right-line"></i>
          </button>
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
          <span class="badge-tag" style="margin-bottom: 0.8rem;">
            ${product.category === 'chamoy' ? '🌶️ Edición Chamoy' : '🌿 Fruta 100% Pura'}
          </span>
          <h2 style="font-size: 2rem; margin-bottom: 0.4rem;">${product.name}</h2>
          <p style="color: var(--color-primary); font-weight: 700; margin-bottom: 1.2rem;">Equivale a ${product.equivalence}</p>
          <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.6;">${product.desc}</p>

          <div class="product-metrics" style="margin-bottom: 1.5rem;">
            <div class="metric-item">
              <span class="metric-val" style="color: var(--color-accent-red);">${product.calories} kcal</span>
              <span class="metric-lbl">Calorías por sobre</span>
            </div>
            <div class="metric-item">
              <span class="metric-val">${product.weight}</span>
              <span class="metric-lbl">Peso Neto</span>
            </div>
          </div>

          <h4 style="font-size: 1rem; margin-bottom: 0.6rem;">Beneficios Destacados:</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 2rem;">
            ${product.benefits.map(b => `<li style="font-size: 0.88rem; color: var(--color-text-muted);"><i class="ri-checkbox-circle-fill" style="color: var(--color-primary); margin-right: 0.4rem;"></i>${b}</li>`).join('')}
          </ul>

          <a href="contacto.html" class="btn btn-primary" style="width: 100%;">
            Solicitar Cotización de Mayoreo / Distribución <i class="ri-mail-send-line"></i>
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

  // 5. Interactive Snack Calculator Logic
  const calcSelect = document.getElementById('calc-fruit');
  const calcQty = document.getElementById('calc-qty');
  const qtyValDisplay = document.getElementById('qty-val');
  const calSavedDisplay = document.getElementById('cal-saved');
  const fruitEquivDisplay = document.getElementById('fruit-equiv');

  function updateCalculator() {
    if (!calcSelect || !calcQty) return;
    const selectedProd = productsData.find(p => p.id === calcSelect.value) || productsData[0];
    const qty = parseInt(calcQty.value, 10) || 1;

    if (qtyValDisplay) qtyValDisplay.textContent = `${qty} paquete${qty > 1 ? 's' : ''}`;
    
    // Average unhealthy snack calorie benchmark = 280 kcal per bag (chips/bar)
    const junkCal = 280 * qty;
    const huertaliaCal = selectedProd.calories * qty;
    const calSaved = junkCal - huertaliaCal;

    if (calSavedDisplay) calSavedDisplay.textContent = `-${calSaved} kcal`;
    if (fruitEquivDisplay) fruitEquivDisplay.textContent = `${qty}x de ${selectedProd.name}`;
  }

  if (calcSelect && calcQty) {
    calcSelect.addEventListener('change', updateCalculator);
    calcQty.addEventListener('input', updateCalculator);
    updateCalculator();
  }

  // 6. Hyper-Stylized Interactive Map (Leaflet.js)
  const mapContainer = document.getElementById('map-container');
  if (mapContainer && typeof L !== 'undefined') {
    // Balcones del Campestre, León, Guanajuato
    const leonCoords = [21.1683, -101.6912];
    
    const map = L.map('map-container', {
      center: leonCoords,
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: false
    });

    // Custom stylized Voyager/Positron clean tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OpenStreetMap',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    // Custom Emerald Pin Icon
    const customIcon = L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div style="
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #2D5A27, #386641);
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(45, 90, 39, 0.4);
          border: 3px solid #FFFFFF;
        ">
          <span style="transform: rotate(45deg); color: white; font-weight: bold; font-size: 1.2rem;">🌿</span>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 44],
      popupAnchor: [0, -44]
    });

    L.marker(leonCoords, { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 5px; text-align: center;">
          <h4 style="color: #2D5A27; margin-bottom: 4px; font-weight: 700;">Huertalia Liofilizados</h4>
          <p style="font-size: 0.85rem; color: #57685D; margin: 0;">Colonia Balcones del Campestre</p>
          <p style="font-size: 0.8rem; font-weight: bold; color: #2D5A27; margin-top: 4px;">León, Guanajuato, México 🇲🇽</p>
        </div>
      `)
      .openPopup();
  }
});
