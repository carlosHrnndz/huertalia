/* ==========================================================================
   HUERTALIA LIOFILIZADOS - V5.5 AUDITED & REFINED ENGINE (ES / EN)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. i18n DICTIONARY SYSTEM (100% PURE ESPAÑOL / 100% PURE ENGLISH)
  // ==========================================================================
  const translations = {
    es: {
      // Nav
      nav_home: 'INICIO',
      nav_history: 'NUESTRA HISTORIA',
      nav_process: 'EL PROCESO',
      nav_products: 'PRODUCTOS',
      nav_lifestyle: 'ESTILO DE VIDA',
      nav_business: 'PARA NEGOCIOS',
      nav_quote: 'COTIZAR',

      // Hero
      hero_tag: 'LEÓN · GUANAJUATO · DESDE 2022',
      hero_title_level1: 'DEL CORAZÓN DEL BAJÍO.',
      hero_title_level2: 'FRUTA LIOFILIZADA PARA EL MUNDO.',
      hero_subhead: '100% fruta real liofilizada para conservar su sabor natural, color vivo y un crujido increíble — sin azúcar añadida ni conservadores.',
      hero_cta_discover: 'DESCUBRE HUERTALIA',
      hero_cta_history: 'NUESTRA HISTORIA',
      claim_1: '100% FRUTA REAL',
      claim_2: 'SIN AZÚCAR AÑADIDA',
      claim_3: 'SIN CONSERVADORES',
      claim_4: 'LIOFILIZACIÓN EN FRÍO',

      // History
      history_badge: 'ORIGEN & AUTENTICIDAD',
      history_title: 'NACIMOS EN EL <span class="text-italic-accent">BAJÍO.</span>',
      history_origin: 'LEÓN, GUANAJUATO · 2022',
      history_quote: '"Nacimos de una tierra que sabe a fruta."',
      history_p1: 'En el corazón del Bajío, donde la tierra fértil alimenta generaciones y la agricultura es orgullo cultural, nació <strong>Huertalia en 2022</strong>.',
      history_p2: 'Nuestra búsqueda comenzó con una pregunta sencilla: <em>¿Y si pudiéramos llevarnos lo mejor de la fruta con nosotros, conservando intactos su sabor, aroma y nutrición?</em>',
      history_p3: 'La liofilización nos permitió encontrar una nueva forma de conservarla: congelar en frío, extraer la humedad bajo vacío y preservar lo esencial. Su textura ligera y su crujido inconfundible.',
      history_p4: 'DE NUESTRA TIERRA. PARA CUALQUIER LUGAR.',
      manifesto_badge: 'MANIFIESTO HUERTALIA',
      manifesto_title: 'DE LA TIERRA. AL CRUNCH.',
      manifesto_text: 'Creemos que la naturaleza ya hizo el trabajo difícil: crear una fruta perfecta.<br>Nosotros solo encontramos una manera de conservarla.<br>Sin añadir. Sin disfrazar. Sin complicarla.<br><strong style="color: #FFFFFF; font-size: 1.3rem;">Solo fruta. Solo Huertalia.</strong>',

      // Process
      process_badge: 'CIENCIA Y TECNOLOGÍA',
      process_title: 'EL PROCESO',
      process_subhead: 'Sublimación en frío al vacío para preservar hasta un 98% de nutrientes conservados.',
      step1_title: 'FRUTA FRESCA',
      step1_desc: 'Cosecha en punto óptimo',
      step2_title: 'CONGELACIÓN',
      step2_desc: 'Congelación rápida a -40°C',
      step3_title: 'VACÍO',
      step3_desc: 'Presión atmosférica baja',
      step4_title: 'SUBLIMACIÓN',
      step4_desc: 'El hielo pasa directamente a vapor',
      step5_title: 'CRUNCH',
      step5_desc: 'Textura crujiente inolvidable',

      // Products
      collection_badge: 'LA COLECCIÓN',
      collection_title: 'ELIGE TU <span class="text-italic-accent">CRUNCH.</span>',
      filter_all: 'TODOS',
      filter_pure: 'FRUTA PURA',
      filter_chamoy: 'LÍNEA CHAMOY',
      btn_details: 'VER DETALLES',

      // Lifestyle (Corrected Spanish: "naturalmente" & Factual, Safe Claims)
      lifestyle_badge: 'ESTILO DE VIDA CONSCIENTE',
      lifestyle_title: 'LLEVA HUERTALIA <span class="text-italic-accent">CONTIGO.</span>',
      lifestyle_subhead: 'Nutrición pura diseñada para integrarse naturalmente en cada momento de tu día.',
      time1_label: 'ENTRENAR',
      time1_desc: 'Un snack ligero y crujiente para acompañar tu rutina de entrenamiento.',
      time2_label: 'TRABAJO',
      time2_desc: 'Una alternativa práctica y crujiente para tus pausas durante el día.',
      time3_label: 'PAUSA',
      time3_desc: 'Bocado crujiente de fruta pura listo en cualquier momento.',
      time4_label: 'AVENTURA',
      time4_desc: 'Nutrición ligera y duradera lista para tus viajes y aventuras.',

      // Why Huertalia (Factual Nutrient Retention Fix)
      why_badge: 'BENEFICIOS COMPROBADOS',
      why_title: 'NADA AÑADIDO.<br><span class="text-italic-accent">TODO CONSERVADO.</span>',
      why_claim1: 'HASTA 98% NUTRIENTES CONSERVADOS',
      why_claim2: 'FRUTA REAL',
      why_claim3: 'AZÚCAR AÑADIDA O ACEITES',
      why_claim4: 'VEGANO Y SIN GLUTEN',

      // Calculator
      calc_badge: 'DIAGNÓSTICO NUTRICIONAL',
      calc_title: 'Calculadora de Impacto Calórico',
      calc_subhead: 'Descubre cuántas calorías vacías ahorras a la semana sustituyendo botanas procesadas por Huertalia.',
      calc_label_select: 'SELECCIONA TU FRUTA:',
      calc_label_qty: 'FRECUENCIA DE CONSUMO SEMANAL:',
      calc_label_saved: 'AHORRO ESTIMADO DE CALORÍAS VACÍAS',
      calc_bar_junk: 'Snack Procesado Tradicional',
      calc_bar_huertalia: 'Con Huertalia',
      calc_equiv_label: 'Equiv. a:',

      // Business
      b2b_badge: 'MAYOREO Y DISTRIBUCIÓN',
      b2b_title: 'HUERTALIA PARA<br><span class="text-italic-accent" style="color: var(--color-accent-mango);">NEGOCIOS.</span>',
      b2b_subhead: 'Suministramos a cadenas retail premium, supermercados gourmet, clubes de salud y distribuidores internacionales en América del Norte y Europa.',
      b2b_f1_title: 'Mayoreo y Cajas Mixtas',
      b2b_f1_desc: 'Esquemas de volumen altamente competitivos y entregas programadas.',
      b2b_f2_title: 'Logística de Exportación Global',
      b2b_f2_desc: 'Cumplimiento estricto de normativas FDA, SAGARPA y estándares internacionales.',
      b2b_f3_title: 'Vida Útil de +12 Meses',
      b2b_f3_desc: 'Empaque hermético de alta barrera contra luz y oxígeno.',
      b2b_cta: 'CONVERTIRME EN DISTRIBUIDOR',

      // Final CTA
      final_badge: '¿LISTO PARA EL CRUNCH?',
      final_title: 'READY TO<br><span class="text-italic-accent" style="color: var(--color-accent-mango);">CRUNCH?</span>',
      final_subhead: 'Descubre la fruta liofilizada nacida en el corazón del Bajío. Calidad excepcional para tu estilo de vida o tu negocio.',
      final_cta1: 'DESCUBRE HUERTALIA',
      final_cta2: 'COTIZAR MAYOREO',

      // Contact Page Specific
      contact_hero_title: 'HABLA CON<br><span class="text-italic-accent" style="color: var(--color-sand);">HUERTALIA.</span>',
      contact_direct_title: 'Canales Directos',
      contact_direct_sub: 'Nuestro centro operativo y logístico se ubica en el corazón del Bajío en León, Guanajuato, México.',
      contact_lbl_address: 'Dirección Matriz:',
      contact_lbl_email: 'Correo Electrónico:',
      contact_lbl_email_sub: 'Respuesta prioritaria en menos de 24 horas.',
      contact_lbl_phone: 'Teléfono & WhatsApp B2B:',
      contact_form_title: 'Enviar Mensaje',
      form_name: 'NOMBRE COMPLETO *',
      form_email: 'CORREO ELECTRÓNICO *',
      form_phone: 'TELÉFONO / WHATSAPP *',
      form_type: 'TIPO DE NEGOCIO / INTERÉS *',
      form_message: 'MENSAJE O DETALLES DE LA SOLICITUD *',
      form_select_default: 'Selecciona una opción...',
      form_opt_wholesale: 'Distribución Nacional al Mayoreo',
      form_opt_export: 'Exportación Internacional',
      form_opt_retail: 'Supermercado / Tienda Saludable / Gimnasio',
      form_opt_bulk: 'Suministro de Fruta Liofilizada a Granel',
      form_btn_submit: 'ENVIAR SOLICITUD A VENTAS',
      map_badge: 'UBICACIÓN MATRIZ',

      // Footer
      footer_desc: 'Fruta. Reinventada. 100% fruta liofilizada nacida en León, Guanajuato en 2022. Del corazón del Bajío al mundo.',
      footer_col_title: 'COLECCIÓN',
      footer_offices_title: 'OFICINAS MATRIZ',
      footer_rights: '&copy; 2026 HUERTALIA. Todos los derechos reservados.',
      footer_location: 'León, Guanajuato, México · Desde 2022'
    },

    en: {
      // Nav
      nav_home: 'HOME',
      nav_history: 'OUR STORY',
      nav_process: 'THE PROCESS',
      nav_products: 'PRODUCTS',
      nav_lifestyle: 'LIFESTYLE',
      nav_business: 'FOR BUSINESS',
      nav_quote: 'GET A QUOTE',

      // Hero
      hero_tag: 'LEÓN · GUANAJUATO · SINCE 2022',
      hero_title_level1: 'FROM THE HEART OF EL BAJÍO.',
      hero_title_level2: 'FREEZE-DRIED FRUIT FOR THE WORLD.',
      hero_subhead: '100% real fruit, freeze-dried to preserve its natural flavor, vibrant color and incredible crunch — with no added sugar or preservatives.',
      hero_cta_discover: 'DISCOVER HUERTALIA',
      hero_cta_history: 'OUR STORY',
      claim_1: '100% REAL FRUIT',
      claim_2: 'NO ADDED SUGAR',
      claim_3: 'NO PRESERVATIVES',
      claim_4: 'COLD FREEZE-DRIED',

      // History
      history_badge: 'ORIGIN & AUTHENTICITY',
      history_title: 'BORN IN <span class="text-italic-accent">EL BAJÍO.</span>',
      history_origin: 'LEÓN, GUANAJUATO · 2022',
      history_quote: '"We were born from a land that knows fruit."',
      history_p1: 'In the heart of El Bajío, where fertile land nourishes generations and agriculture is cultural pride, <strong>Huertalia was born in 2022</strong>.',
      history_p2: 'Our journey began with a simple question: <em>What if we could take the best of fruit with us while keeping its flavor and nutrition intact?</em>',
      history_p3: 'Freeze-drying allowed us to find a new way to preserve it: flash freezing, vacuum water extraction, and locking in the essential. Light texture and unforgettable crunch.',
      history_p4: 'FROM OUR LAND. TO EVERYWHERE.',
      manifesto_badge: 'HUERTALIA MANIFESTO',
      manifesto_title: 'FROM THE EARTH. TO THE CRUNCH.',
      manifesto_text: 'We believe nature already did the hard work: creating perfect fruit.<br>We just found a way to preserve it.<br>Nothing added. Nothing disguised. Nothing complicated.<br><strong style="color: #FFFFFF; font-size: 1.3rem;">Just fruit. Just Huertalia.</strong>',

      // Process
      process_badge: 'SCIENCE & TECHNOLOGY',
      process_title: 'THE PROCESS',
      process_subhead: 'Cold vacuum sublimation to preserve up to 98% of essential nutrients.',
      step1_title: 'FRESH FRUIT',
      step1_desc: 'Harvested at peak ripeness',
      step2_title: 'FREEZING',
      step2_desc: 'Flash frozen at -40°C',
      step3_title: 'VACUUM',
      step3_desc: 'Ultra-low atmospheric pressure',
      step4_title: 'SUBLIMATION',
      step4_desc: 'Ice turns directly into vapor',
      step5_title: 'CRUNCH',
      step5_desc: 'Unforgettable crispy texture',

      // Products
      collection_badge: 'THE COLLECTION',
      collection_title: 'CHOOSE YOUR <span class="text-italic-accent">CRUNCH.</span>',
      filter_all: 'ALL',
      filter_pure: 'PURE FRUIT',
      filter_chamoy: 'CHAMOY LINE',
      btn_details: 'VIEW DETAILS',

      // Lifestyle
      lifestyle_badge: 'CONSCIOUS LIFESTYLE',
      lifestyle_title: 'TAKE HUERTALIA <span class="text-italic-accent">WITH YOU.</span>',
      lifestyle_subhead: 'Pure nutrition designed to fit naturally into every moment of your day.',
      time1_label: 'TRAIN',
      time1_desc: 'A light, crunchy snack to complement your training routine.',
      time2_label: 'WORK',
      time2_desc: 'A convenient, crunchy alternative for your breaks throughout the day.',
      time3_label: 'PAUSE',
      time3_desc: 'Crispy pure fruit bite ready whenever you need it.',
      time4_label: 'ADVENTURE',
      time4_desc: 'Lightweight, durable nutrition ready for your travels and adventures.',

      // Why Huertalia
      why_badge: 'PROVEN BENEFITS',
      why_title: 'NOTHING ADDED.<br><span class="text-italic-accent">EVERYTHING PRESERVED.</span>',
      why_claim1: 'UP TO 98% NUTRIENTS PRESERVED',
      why_claim2: 'REAL FRUIT',
      why_claim3: 'ADDED SUGARS OR OILS',
      why_claim4: 'VEGAN & GLUTEN FREE',

      // Calculator
      calc_badge: 'NUTRITIONAL DIAGNOSTIC',
      calc_title: 'Caloric Impact Calculator',
      calc_subhead: 'See how much empty calories you save weekly by replacing junk snacks with Huertalia.',
      calc_label_select: 'SELECT YOUR FRUIT:',
      calc_label_qty: 'WEEKLY CONSUMPTION:',
      calc_label_saved: 'ESTIMATED SAVED EMPTY CALORIES',
      calc_bar_junk: 'Junk Snack Benchmark',
      calc_bar_huertalia: 'With Huertalia',
      calc_equiv_label: 'Equiv. to:',

      // Business
      b2b_badge: 'WHOLESALE & DISTRIBUTION',
      b2b_title: 'HUERTALIA FOR<br><span class="text-italic-accent" style="color: var(--color-accent-mango);">BUSINESS.</span>',
      b2b_subhead: 'Supplying premium retail chains, gourmet supermarkets, fitness clubs and international distributors across North America and Europe.',
      b2b_f1_title: 'Wholesale & Mixed Cases',
      b2b_f1_desc: 'High-margin volume tiers and scheduled deliveries.',
      b2b_f2_title: 'Global Export Logistics',
      b2b_f2_desc: 'Strict compliance with FDA, SAGARPA and international standards.',
      b2b_f3_title: '12+ Month Shelf-Life',
      b2b_f3_desc: 'High-barrier oxygen protective packaging.',
      b2b_cta: 'BECOME A DISTRIBUTOR',

      // Final CTA
      final_badge: 'READY TO CRUNCH?',
      final_title: 'READY TO<br><span class="text-italic-accent" style="color: var(--color-accent-mango);">CRUNCH?</span>',
      final_subhead: 'Discover the freeze-dried fruit born in the heart of El Bajío. Exceptional quality for your lifestyle or your business.',
      final_cta1: 'DISCOVER HUERTALIA',
      final_cta2: 'WHOLESALE QUOTE',

      // Contact Page Specific
      contact_hero_title: 'TALK TO<br><span class="text-italic-accent" style="color: var(--color-sand);">HUERTALIA.</span>',
      contact_direct_title: 'Direct Channels',
      contact_direct_sub: 'Our central logistics hub is located in the heart of El Bajío in León, Guanajuato, Mexico.',
      contact_lbl_address: 'Headquarters:',
      contact_lbl_email: 'Sales Email:',
      contact_lbl_email_sub: 'Priority response under 24 hours.',
      contact_lbl_phone: 'Phone & WhatsApp B2B:',
      contact_form_title: 'Send a Message',
      form_name: 'FULL NAME *',
      form_email: 'EMAIL *',
      form_phone: 'PHONE / WHATSAPP *',
      form_type: 'BUSINESS TYPE / INTEREST *',
      form_message: 'MESSAGE / REQUEST DETAILS *',
      form_select_default: 'Select an option...',
      form_opt_wholesale: 'National Wholesale Distribution',
      form_opt_export: 'International Export',
      form_opt_retail: 'Supermarket / Health Store / Gym',
      form_opt_bulk: 'Bulk Freeze-Dried Fruit Supply',
      form_btn_submit: 'SUBMIT INQUIRY TO SALES',
      map_badge: 'HEADQUARTERS LOCATION',

      // Footer
      footer_desc: 'Fruit. Reinvented. 100% freeze-dried fruit born in León, Guanajuato in 2022. From the heart of El Bajío to the world.',
      footer_col_title: 'COLLECTION',
      footer_offices_title: 'HEADQUARTERS',
      footer_rights: '&copy; 2026 HUERTALIA. All rights reserved.',
      footer_location: 'León, Guanajuato, Mexico · Since 2022'
    }
  };

  // Determine initial language: Saved preference OR auto-detect from browser locale
  function detectLanguage() {
    const savedLang = localStorage.getItem('huertalia_lang');
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      return savedLang;
    }
    const userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (userLang.startsWith('en')) {
      return 'en';
    }
    return 'es'; // Default to Spanish
  }

  let currentLang = detectLanguage();

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('huertalia_lang', lang);

    // Update Language Pill Selector active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Translate all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Handle Form Placeholders dynamically
    const nameInputs = document.querySelectorAll('input[placeholder*="Ana"], input[placeholder*="Jane"]');
    nameInputs.forEach(input => {
      input.placeholder = lang === 'en' ? 'e.g. Jane Doe' : 'Ej. Ana María Torres';
    });

    const emailInputs = document.querySelectorAll('input[placeholder*="tuempresa"], input[placeholder*="company"]');
    emailInputs.forEach(input => {
      input.placeholder = lang === 'en' ? 'contact@company.com' : 'contacto@tuempresa.com';
    });

    const msgInputs = document.querySelectorAll('textarea.form-control');
    msgInputs.forEach(input => {
      input.placeholder = lang === 'en' ? 'Estimated volumes, target markets or specific product lines...' : 'Volúmenes estimados, mercados de interés o líneas de productos específicas...';
    });

    // Re-render Product Filter Buttons
    const filterAll = document.querySelector('[data-filter="all"]');
    const filterPure = document.querySelector('[data-filter="natural"]');
    const filterChamoy = document.querySelector('[data-filter="chamoy"]');

    if (filterAll) filterAll.textContent = translations[lang].filter_all;
    if (filterPure) filterPure.textContent = translations[lang].filter_pure;
    if (filterChamoy) filterChamoy.textContent = translations[lang].filter_chamoy;

    // Process image alt text update according to language
    const processImgs = document.querySelectorAll('.process-card-imgbox img');
    const processAltTexts = {
      es: [
        'Fruta fresca seleccionada para el proceso de liofilización Huertalia',
        'Congelación rápida a menos 40 grados para congelar el agua contenida',
        'Cámara de vacío de alta presión para reducir la presión atmosférica',
        'Sublimación en frío pasando el hielo congelado directamente a vapor',
        'Fruta liofilizada final con textura crujiente e intensa en nutrientes'
      ],
      en: [
        'Fresh fruit selected for the Huertalia freeze-drying process',
        'Flash freezing at minus 40 degrees to lock in moisture',
        'Low atmospheric pressure vacuum chamber process',
        'Cold sublimation turning frozen ice directly into vapor',
        'Final freeze-dried fruit with incredible crunch and rich nutrients'
      ]
    };
    processImgs.forEach((img, idx) => {
      if (processAltTexts[lang] && processAltTexts[lang][idx]) {
        img.alt = processAltTexts[lang][idx];
      }
    });
  }

  // Attach click listeners to language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

  // Apply initial language
  applyLanguage(currentLang);

  // ==========================================================================
  // 2. NAVIGATION & ACTIVE LINK TRACKER ON SCROLL
  // ==========================================================================
  const headerWrapper = document.querySelector('.site-header-wrapper');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (headerWrapper) {
      if (scrollPos > 50) {
        headerWrapper.classList.add('scrolled');
      } else {
        headerWrapper.classList.remove('scrolled');
      }
    }

    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 130;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}` || (href === 'index.html' && currentSectionId === 'hero')) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Navigation Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-links');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.className = navMenu.classList.contains('mobile-active') 
          ? 'ri-close-line' 
          : 'ri-menu-line';
      }
    });
  }

  // ==========================================================================
  // 3. SCROLL REVEAL & NUMBER COUNTER OBSERVER
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
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

  // Parallax Scroll Effect on Floating Fruits
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

  // ==========================================================================
  // 4. PRODUCTS DATA & RENDERER
  // ==========================================================================
  const productsData = [
    {
      id: 'fresas-natural',
      name: 'Fresas Liofilizadas',
      category: 'natural',
      sub: 'Dulce. Intensa. Crujiente.',
      calories: 46,
      weight: '15 g',
      equivalence: '10 Fresas Frescas (1 Taza)',
      desc: 'Fresas seleccionadas en su punto óptimo de madurez, liofilizadas mediante sublimación en frío. Cada bocado crujiente conserva la intensidad de sabor natural y hasta el 98% de los nutrientes intactos.',
      benefits: ['Solo fresa. Nada más.', 'Sin azúcar añadida', 'Sin conservadores ni colorantes', '46 kcal por empaque completo'],
      image: 'assets/images/products/packshot_fresas.jpg'
    },
    {
      id: 'manzana-natural',
      name: 'Manzana Liofilizada',
      category: 'natural',
      sub: 'Crujiente. Limpia. Pura.',
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
      sub: 'Rico. Dorado. Natural.',
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
      sub: 'Tropical. Vibrante. Exótico.',
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
      sub: 'Audaz. Picosito. Salvaje.',
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
      sub: 'Agridulce. Crujiente. Adictiva.',
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
      sub: 'Refrescante. Tropical. Intenso.',
      calories: 93,
      weight: '22 g',
      equivalence: '1 Taza de Piña Tropical Picosita',
      desc: 'Bocado tropical agridulce con el nivel exacto de piña natural liofilizada y sazón chamoy. Aporta fibra natural y enzimas naturales para una digestión ágil.',
      benefits: ['Piña natural seleccionada', 'Sabor agridulce explosivo', 'Libre de glutamato monosódico', 'Equivale a 1 taza completa de fruta'],
      image: 'assets/images/products/packshot_pina_chamoy.jpg'
    }
  ];

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
              <span data-i18n="btn_details">${translations[currentLang].btn_details}</span> <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });

    document.querySelectorAll('.product-btn-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodId = e.currentTarget.getAttribute('data-id');
        openModal(prodId);
      });
    });
  }

  renderProducts();

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
            ${product.category === 'chamoy' ? '🌶️ EDICIÓN CHAMOY' : '🌿 100% FRUTA PURA'}
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
            SOLICITAR COTIZACIÓN B2B <i class="ri-mail-send-line"></i>
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

  // ==========================================================================
  // 5. CALCULATOR LOGIC
  // ==========================================================================
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

  // ==========================================================================
  // 6. INTERACTIVE MAP (LEAFLET.JS)
  // ==========================================================================
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
