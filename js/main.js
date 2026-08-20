/* ==========================================================================
   HUERTALIA LIOFILIZADOS - MOBILE EDITORIAL ART DIRECTION & BILINGUAL ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. COMPLETE i18n DICTIONARY SYSTEM (100% PURE ESPAÑOL / 100% PURE ENGLISH)
  // ==========================================================================
  const translations = {
    es: {
      seo_title: 'HUERTALIA | Fruta Liofilizada del Corazón del Bajío (León, GTO)',
      seo_meta: 'Huertalia: Fruta real liofilizada nacida en León, Guanajuato en 2023. Conservada mediante sublimación en frío. 100% fruta real, imposiblemente crujiente.',
      
      // Accessibility ARIA labels
      aria_logo_home: 'HUERTALIA Liofilizados Inicio',
      aria_mobile_menu: 'Abrir menú de navegación',
      aria_close_overlay: 'Cerrar menú móvil',
      aria_lang_es: 'Cambiar idioma a Español',
      aria_lang_en: 'Cambiar idioma a Inglés',
      aria_close_modal: 'Cerrar modal',

      // Nav & Mobile Menu Overlay
      nav_home: 'INICIO',
      nav_history: 'NUESTRA HISTORIA',
      nav_process: 'EL PROCESO',
      nav_products: 'PRODUCTOS',
      nav_lifestyle: 'ESTILO DE VIDA',
      nav_contact: 'CONTACTO',
      nav_quote: 'COTIZAR',

      // Hero
      hero_tag: '— LEÓN · GUANAJUATO · DESDE 2023',
      hero_title_level1: 'DEL CORAZÓN<br>DEL BAJÍO.',
      hero_title_level2: 'FRUTA REAL, LIOFILIZADA<br>PARA DISFRUTARLA DIFERENTE.',
      hero_subhead: '100% fruta real liofilizada para conservar su sabor natural,<br>color y textura crujiente — sin azúcares añadidos<br>ni conservadores.',
      hero_cta_discover: 'DESCUBRE HUERTALIA',
      hero_cta_history: 'NUESTRA HISTORIA',
      claim_1: '100% FRUTA REAL',
      claim_2: 'SIN AZÚCAR AÑADIDA',
      claim_3: 'SIN CONSERVADORES',

      // History & Accordion
      history_badge: 'ORIGEN & AUTENTICIDAD',
      history_title: 'NACIMOS EN EL <span class="text-italic-accent">BAJÍO.</span>',
      history_origin: 'LEÓN, GUANAJUATO · 2023',
      history_quote: '"Nacimos de una tierra que sabe a fruta."',
      history_p1: 'En el corazón del Bajío, donde la tierra fértil alimenta generaciones y la agricultura es orgullo cultural, nació <strong>Huertalia en 2023</strong>.',
      history_p2: 'Nuestra búsqueda comenzó con una pregunta sencilla: <em>¿Y si pudiéramos llevarnos lo mejor de la fruta con nosotros, conservando intactos su sabor, aroma y nutrición?</em>',
      history_p3: 'La liofilización nos permitió encontrar una nueva forma de conservarla: congelar en frío, extraer la humedad bajo vacío y preservar lo esencial. Su textura ligera y su crujido inconfundible.',
      history_p4: 'DE NUESTRA TIERRA. PARA CUALQUIER LUGAR.',
      history_gto: 'En abril de 2026, fuimos honrados con el prestigioso <strong>Distintivo Marca Guanajuato</strong>, el sello oficial de calidad, origen y orgullo de nuestro estado. Un reconocimiento que avala nuestro compromiso inquebrantable con la excelencia agrícola y la nutrición pura.',
      gto_seal_label: 'MARCA GUANAJUATO',
      gto_seal_sub: 'Sello Oficial de Calidad & Origen',
      manifesto_badge: 'MANIFIESTO HUERTALIA',
      manifesto_title: 'DE LA TIERRA. AL CRUNCH.',
      manifesto_text: 'Creemos que la naturaleza ya hizo el trabajo difícil: crear una fruta perfecta.<br>Nosotros solo encontramos una manera de conservarla.<br>Sin añadir. Sin disfrazar. Sin complicarla.<br><strong style="color: #FFFFFF; font-size: 1.3rem;">Solo fruta. Solo Huertalia.</strong>',
      story_accordion_btn: 'CONOCE NUESTRA HISTORIA COMPLETA',
      
      map_section_tag: 'NUESTRO TERRITORIO',
      map_section_title: 'DEL CORAZÓN DEL BAJÍO. <span class="text-italic-accent">PARA MÉXICO.</span>',
      map_section_desc: 'Nacidos en León, Guanajuato en 2023. Una ubicación estratégica en el corazón agrícola de México que conecta el cultivo fresco con mercados nacionales.',

      // Territorio Banner (02.png)
      banner_bajio_tag: 'DESDE EL BAJÍO',
      banner_bajio_title: 'FRUTA CON ORIGEN. DE NUESTRA TIERRA PARA MÉXICO.',

      // Process & Accordion (03.png)
      process_badge: 'CIENCIA Y TECNOLOGÍA',
      process_title: 'EL PROCESO',
      process_subhead: 'Sublimación en frío al vacío para conservar el sabor, textura y características naturales de la fruta — una tecnología utilizada también para desarrollar alimentos destinados a astronautas en misiones espaciales.',
      process_intro_tag: 'LA MATERIA PRIMA',
      process_intro_title: 'DE LA FRUTA FRESCA AL CRUNCH PERFECTO.',
      process_intro_desc: 'Seleccionamos únicamente fruta de la más alta calidad en su punto idóneo de madurez antes de iniciar la sublimación en frío.',
      step1_title: 'FRUTA FRESCA',
      step1_desc: 'Cosecha en punto óptimo',
      step2_title: 'CONGELACIÓN',
      step2_desc: 'Ultra congelación rápida a baja temperatura',
      step3_title: 'VACÍO',
      step3_desc: 'Presión atmosférica baja',
      step4_title: 'SUBLIMACIÓN',
      step4_desc: 'El hielo pasa directamente a vapor',
      step5_title: 'CRUNCH',
      step5_desc: 'Textura crujiente inolvidable',

      // Products & Crunch Moment (04.png)
      collection_badge: 'LA COLECCIÓN',
      collection_title: 'ELIGE TU <span class="text-italic-accent">CRUNCH.</span>',
      filter_all: 'TODOS',
      filter_pure: 'FRUTA NATURAL',
      filter_chamoy: 'EDICIONES CON CHAMOY',
      btn_details: 'VER DETALLES',
      crunch_moment_tag: 'EXPERIENCIA HUERTALIA',
      crunch_moment_title: 'EL CRUNCH DE LA <span class="text-italic-accent">FRUTA REAL.</span>',
      crunch_moment_subhead: 'Imposiblemente crujiente. 100% fruta natural.',

      // Modal Details
      modal_chamoy_badge: '🌶️ EDICIÓN CHAMOY',
      modal_pure_badge: '🌿 100% FRUTA PURA',
      modal_equals: 'Equivale a ',
      modal_cal_label: 'Calorías / Sobre',
      modal_weight_label: 'Contenido Neto',
      modal_b2b_btn: 'COTIZAR',

      // Lifestyle Campaign
      lifestyle_badge: 'ESTILO DE VIDA CONSCIENTE',
      lifestyle_title: 'LLEVA HUERTALIA <span class="text-italic-accent">CONTIGO.</span>',
      lifestyle_subhead: 'Snacks de fruta diseñados para integrarse naturalmente en cada momento de tu día.',
      lifestyle_work_title: 'UNA PAUSA CRUJIENTE <span class="text-italic-accent">PARA TU DÍA.</span>',
      lifestyle_work_desc: 'Nutrición pura para mantener tu enfoque diario sin caídas de energía ni pesadez.',
      lifestyle_adv_title: 'FRUTA LIGERA <span class="text-italic-accent">ALLÁ DONDE VAYAS.</span>',
      lifestyle_adv_desc: 'Empaque ultraligero de alta barrera listo para cualquier trayecto o actividad al aire libre.',
      lifestyle_kids_title: 'PEQUEÑOS SNACKS. <span class="text-italic-accent">GRANDES AVENTURAS.</span>',
      lifestyle_kids_desc: 'Fruta real para acompañarlos mientras juegan, descubren y disfrutan cada momento.',
      lifestyle_tennis_title: 'DONDE EMPIEZA <span class="text-italic-accent">TU PRÓXIMO PUNTO.</span>',
      lifestyle_tennis_desc: 'Un snack de fruta real para acompañarte entre un punto y otro.',
      lifestyle_fitness_title: 'TERMINA TU ENTRENAMIENTO. <span class="text-italic-accent">DISFRUTA TU DÍA.</span>',
      lifestyle_fitness_desc: 'Un snack de fruta real para llevar contigo.',
      lifestyle_travel_title: 'TU SNACK, <span class="text-italic-accent">DONDE QUIERA QUE VAYAS.</span>',
      lifestyle_travel_desc: 'Fruta real, ligera y práctica para llevar contigo.',

      // Final CTA
      final_badge: '¿LISTO PARA EL CRUNCH?',
      final_title: 'READY TO<br><span class="text-italic-accent" style="color: var(--color-accent-mango);">CRUNCH?</span>',
      final_subhead: 'Descubre la fruta liofilizada nacida en el corazón del Bajío. Calidad excepcional para tu estilo de vida o tu negocio.',
      final_cta1: 'DESCUBRE HUERTALIA',
      final_cta2: 'COTIZAR',

      // Contact Page
      b2b_badge: 'CONTACTO & DISTRIBUCIÓN',
      b2b_subhead: '',
      contact_hero_title: 'HABLA CON<br><span class="text-italic-accent" style="color: var(--color-sand);">HUERTALIA.</span>',
      contact_direct_title: 'Canales Directos',
      contact_direct_sub: 'Estamos en León, Guanajuato, México',
      contact_lbl_address: 'Dirección Matriz:',
      contact_address_val: 'Calle Valle de Señora 601 B.<br>Col. Valles del Campestre.<br>C.P. 37150, León, Guanajuato.',
      contact_lbl_email: 'Correo Electrónico:',
      contact_lbl_email_sub: 'Respuesta prioritaria en menos de 24 horas.',
      contact_lbl_phone: 'Teléfono & WhatsApp:',
      contact_form_title: 'Enviar Mensaje',
      form_name: 'NOMBRE COMPLETO *',
      form_email: 'CORREO ELECTRÓNICO *',
      form_phone: 'TELÉFONO / WHATSAPP *',
      form_type: 'TIPO DE NEGOCIO / INTERÉS *',
      form_message: 'MENSAJE O DETALLES DE LA SOLICITUD *',
      form_select_default: 'Selecciona una opción...',
      form_opt_1: 'Tienda saludable / Productos naturales',
      form_opt_2: 'Gimnasio / Estudio fitness',
      form_opt_3: 'Cafetería / Restaurante / Hotel',
      form_opt_4: 'Clínica / Consultorio / Centro de bienestar',
      form_opt_5: 'Tienda boutique / Concept store',
      form_opt_6: 'Emprendimiento / Reventa',
      form_opt_7: 'Consumo personal',
      form_opt_8: 'Compra para regalo / Evento',
      form_btn_submit: 'ENVIAR SOLICITUD',
      form_alert_success: '¡Gracias por comunicarte con Huertalia! Tu mensaje ha sido enviado a contacto@huertalia.com.mx.',
      map_badge: 'UBICACIÓN MATRIZ',
      map_title: 'Valles del Campestre',
      map_sub: 'León, Guanajuato, México.',

      // Footer
      footer_desc: 'Fruta. Reinventada. 100% fruta liofilizada nacida en León, Guanajuato en 2023. Del corazón del Bajío para México.',
      footer_col_title: 'COLECCIÓN',
      footer_offices_title: 'OFICINAS MATRIZ',
      footer_contact_link: 'Contacto',
      footer_item_frutos_rojos: 'Frutos Rojos Liofilizados',
      footer_item_fresas: 'Fresas Liofilizadas',
      footer_item_manzana: 'Manzana Liofilizada',
      footer_item_platano: 'Plátano Liofilizado',
      footer_item_mango: 'Mango Liofilizado',
      footer_item_chamoy: 'Línea Chamoy Salvaje',
      footer_address: 'Calle Valle de Señora 601 B.<br>Col. Valles del Campestre.<br>C.P. 37150, León, Guanajuato.',
      footer_rights: '&copy; 2026 HUERTALIA. Todos los derechos reservados.',
      footer_location: 'León, Guanajuato, México · Desde 2023'
    },

    en: {
      seo_title: 'HUERTALIA | Freeze-Dried Fruit from El Bajío (León, GTO)',
      seo_meta: 'Huertalia: 100% real freeze-dried fruit born in León, Guanajuato in 2023. Preserved through cold vacuum sublimation. Unforgettably crunchy.',
      
      // Accessibility ARIA labels
      aria_logo_home: 'HUERTALIA Freeze-Dried Home',
      aria_mobile_menu: 'Open navigation menu',
      aria_close_overlay: 'Close mobile menu',
      aria_lang_es: 'Switch language to Spanish',
      aria_lang_en: 'Switch language to English',
      aria_close_modal: 'Close modal',

      // Nav & Mobile Menu Overlay
      nav_home: 'HOME',
      nav_history: 'OUR STORY',
      nav_process: 'THE PROCESS',
      nav_products: 'PRODUCTS',
      nav_lifestyle: 'LIFESTYLE',
      nav_contact: 'CONTACT',
      nav_quote: 'GET A QUOTE',

      // Hero
      hero_tag: '— LEÓN · GUANAJUATO · SINCE 2023',
      hero_title_level1: 'FROM THE HEART<br>OF EL BAJÍO.',
      hero_title_level2: 'REAL FRUIT, FREEZE-DRIED<br>TO ENJOY IT DIFFERENTLY.',
      hero_subhead: '100% real freeze-dried fruit to preserve its natural flavor,<br>color and crunchy texture — with no added sugars<br>or preservatives.',
      hero_cta_discover: 'DISCOVER HUERTALIA',
      hero_cta_history: 'OUR STORY',
      claim_1: '100% REAL FRUIT',
      claim_2: 'NO ADDED SUGAR',
      claim_3: 'NO PRESERVATIVES',

      // History & Accordion
      history_badge: 'ORIGIN & AUTHENTICITY',
      history_title: 'BORN IN <span class="text-italic-accent">EL BAJÍO.</span>',
      history_origin: 'LEÓN, GUANAJUATO · 2023',
      history_quote: '"We were born from a land that knows fruit."',
      history_p1: 'In the heart of El Bajío, where fertile land nourishes generations and agriculture is cultural pride, <strong>Huertalia was born in 2023</strong>.',
      history_p2: 'Our journey began with a simple question: <em>What if we could take the best of fruit with us while keeping its flavor and nutrition intact?</em>',
      history_p3: 'Freeze-drying allowed us to find a new way to preserve it: flash freezing, vacuum water extraction, and locking in the essential. Light texture and unforgettable crunch.',
      history_p4: 'FROM OUR LAND. TO EVERYWHERE.',
      history_gto: 'In April 2026, we were honored with the prestigious <strong>Marca Guanajuato Distinction</strong>, the official seal of quality, origin, and state pride. A recognition of our unwavering commitment to agricultural excellence and pure nutrition.',
      gto_seal_label: 'MARCA GUANAJUATO',
      gto_seal_sub: 'Official Seal of Quality & Origin',
      manifesto_badge: 'HUERTALIA MANIFESTO',
      manifesto_title: 'FROM THE EARTH. TO THE CRUNCH.',
      manifesto_text: 'We believe nature already did the hard work: creating perfect fruit.<br>We just found a way to preserve it.<br>Nothing added. Nothing disguised. Nothing complicated.<br><strong style="color: #FFFFFF; font-size: 1.3rem;">Just fruit. Just Huertalia.</strong>',
      story_accordion_btn: 'READ OUR FULL STORY',

      map_section_tag: 'OUR TERRITORY',
      map_section_title: 'FROM THE HEART OF EL BAJÍO. <span class="text-italic-accent">FOR MEXICO.</span>',
      map_section_desc: 'Born in León, Guanajuato in 2023. A strategic location in Mexico\'s agricultural heartland connecting fresh harvests across the country.',

      // Territorio Banner (02.png)
      banner_bajio_tag: 'FROM EL BAJÍO',
      banner_bajio_title: 'FRUIT WITH ORIGIN. FROM OUR LAND FOR MEXICO.',

      // Process & Accordion (03.png)
      process_badge: 'SCIENCE & TECHNOLOGY',
      process_title: 'THE PROCESS',
      process_subhead: 'Cold vacuum sublimation to preserve flavor, texture and natural characteristics of the fruit — a technology also used to develop food for astronauts on space missions.',
      process_intro_tag: 'RAW INGREDIENTS',
      process_intro_title: 'FROM FRESH FRUIT TO THE PERFECT CRUNCH.',
      process_intro_desc: 'We select only top-tier fruit at peak ripeness before entering cold vacuum sublimation.',
      step1_title: 'FRESH FRUIT',
      step1_desc: 'Harvested at peak ripeness',
      step2_title: 'FREEZING',
      step2_desc: 'Ultra flash-freezing at low temperatures',
      step3_title: 'VACUUM',
      step3_desc: 'Ultra-low atmospheric pressure',
      step4_title: 'SUBLIMATION',
      step4_desc: 'Ice turns directly into vapor',
      step5_title: 'CRUNCH',
      step5_desc: 'Unforgettable crispy texture',

      // Products & Crunch Moment (04.png)
      collection_badge: 'THE COLLECTION',
      collection_title: 'CHOOSE YOUR <span class="text-italic-accent">CRUNCH.</span>',
      filter_all: 'ALL',
      filter_pure: 'NATURAL FRUIT',
      filter_chamoy: 'CHAMOY EDITIONS',
      btn_details: 'VIEW DETAILS',
      crunch_moment_tag: 'HUERTALIA EXPERIENCE',
      crunch_moment_title: 'THE CRUNCH OF <span class="text-italic-accent">REAL FRUIT.</span>',
      crunch_moment_subhead: 'Incredibly crunchy. 100% natural fruit.',

      // Modal Details
      modal_chamoy_badge: '🌶️ CHAMOY COLLECTION',
      modal_pure_badge: '🌿 100% PURE FRUIT',
      modal_equals: 'Equals ',
      modal_cal_label: 'Calories / Pack',
      modal_weight_label: 'Net Weight',
      modal_b2b_btn: 'GET A QUOTE',

      // Lifestyle Campaign
      lifestyle_badge: 'CONSCIOUS LIFESTYLE',
      lifestyle_title: 'TAKE HUERTALIA <span class="text-italic-accent">WITH YOU.</span>',
      lifestyle_subhead: 'Fruit snacks designed to fit naturally into every moment of your day.',
      lifestyle_work_title: 'A CRISPY BREAK <span class="text-italic-accent">FOR YOUR DAY.</span>',
      lifestyle_work_desc: 'Pure nutrition to maintain your daily focus without energy crashes or sluggishness.',
      lifestyle_adv_title: 'LIGHTWEIGHT FRUIT <span class="text-italic-accent">WHEREVER YOU GO.</span>',
      lifestyle_adv_desc: 'Ultra-lightweight high-barrier pouch ready for any trail or outdoor activity.',
      lifestyle_kids_title: 'LITTLE SNACKS. <span class="text-italic-accent">BIG ADVENTURES.</span>',
      lifestyle_kids_desc: 'Real fruit to accompany them while playing, discovering and enjoying every moment.',
      lifestyle_tennis_title: 'WHERE YOUR NEXT <span class="text-italic-accent">POINT BEGINS.</span>',
      lifestyle_tennis_desc: 'A real fruit snack to accompany you between one point and the next.',
      lifestyle_fitness_title: 'FINISH YOUR WORKOUT. <span class="text-italic-accent">ENJOY YOUR DAY.</span>',
      lifestyle_fitness_desc: 'A real fruit snack to take with you.',
      lifestyle_travel_title: 'YOUR SNACK, <span class="text-italic-accent">WHEREVER YOU GO.</span>',
      lifestyle_travel_desc: 'Real fruit, lightweight and convenient to carry anywhere.',

      // Final CTA
      final_badge: 'READY TO CRUNCH?',
      final_title: 'READY TO<br><span class="text-italic-accent" style="color: var(--color-accent-mango);">CRUNCH?</span>',
      final_subhead: 'Discover the freeze-dried fruit born in the heart of El Bajío. Exceptional quality for your lifestyle or your business.',
      final_cta1: 'DISCOVER HUERTALIA',
      final_cta2: 'GET A QUOTE',

      // Contact Page
      b2b_badge: 'CONTACT & DISTRIBUTION',
      b2b_subhead: '',
      contact_hero_title: 'TALK TO<br><span class="text-italic-accent" style="color: var(--color-sand);">HUERTALIA.</span>',
      contact_direct_title: 'Direct Channels',
      contact_direct_sub: 'We are located in León, Guanajuato, Mexico',
      contact_lbl_address: 'Headquarters:',
      contact_address_val: 'Calle Valle de Señora 601 B.<br>Col. Valles del Campestre.<br>ZIP 37150, León, Guanajuato, Mexico.',
      contact_lbl_email: 'Contact Email:',
      contact_lbl_email_sub: 'Priority response under 24 hours.',
      contact_lbl_phone: 'Phone & WhatsApp:',
      contact_form_title: 'Send a Message',
      form_name: 'FULL NAME *',
      form_email: 'EMAIL *',
      form_phone: 'PHONE / WHATSAPP *',
      form_type: 'BUSINESS TYPE / INTEREST *',
      form_message: 'MESSAGE / REQUEST DETAILS *',
      form_select_default: 'Select an option...',
      form_opt_1: 'Health Store / Natural Products',
      form_opt_2: 'Gym / Fitness Studio',
      form_opt_3: 'Coffee Shop / Restaurant / Hotel',
      form_opt_4: 'Wellness Clinic / Center',
      form_opt_5: 'Boutique / Concept Store',
      form_opt_6: 'Reseller / Entrepreneur',
      form_opt_7: 'Personal Consumption',
      form_opt_8: 'Gift / Event Purchase',
      form_btn_submit: 'SUBMIT INQUIRY',
      form_alert_success: 'Thank you for reaching out to Huertalia! Your message has been sent to contacto@huertalia.com.mx.',
      map_badge: 'HEADQUARTERS LOCATION',
      map_title: 'Valles del Campestre',
      map_sub: 'León, Guanajuato, Mexico.',

      // Footer
      footer_desc: 'Fruit. Reinvented. 100% freeze-dried fruit born in León, Guanajuato in 2023. From the heart of El Bajío for Mexico.',
      footer_col_title: 'COLLECTION',
      footer_offices_title: 'HEADQUARTERS',
      footer_contact_link: 'Contact',
      footer_item_frutos_rojos: 'Freeze-Dried Red Fruits',
      footer_item_fresas: 'Freeze-Dried Strawberries',
      footer_item_manzana: 'Freeze-Dried Apple',
      footer_item_platano: 'Freeze-Dried Banana',
      footer_item_mango: 'Freeze-Dried Mango',
      footer_item_chamoy: 'Wild Chamoy Collection',
      footer_address: 'Calle Valle de Señora 601 B.<br>Col. Valles del Campestre.<br>ZIP 37150, León, Guanajuato, Mexico.',
      footer_rights: '&copy; 2026 HUERTALIA. All rights reserved.',
      footer_location: 'León, Guanajuato, Mexico · Since 2023'
    }
  };

  // Products Data Store (ES & EN)
  const productsData = {
    es: [
      {
        id: 'frutos-rojos',
        name: 'Frutos Rojos Liofilizados',
        category: 'natural',
        badge: 'pure',
        sub: 'Silvestre. Intenso. Crujiente.',
        calories: 52,
        weight: '20 g',
        equivalence: 'Mix de Fresa, Zarzamora, Mora Azul y Frambuesa (1 Taza)',
        desc: 'Una selección de fresa, zarzamora, mora azul y frambuesa, liofilizadas para crear un mix ligero y crujiente, ideal para disfrutar como snack o incorporar en desayunos, smoothies, bowls o dar un toque especial a tus recetas y postres.',
        benefits: ['Mix 100% frutos rojos seleccionados', 'Alto poder antioxidante natural', 'Sin azúcares añadidos ni conservadores', 'Ideal para bowls, smoothies y postres'],
        image: 'assets/images/products/packshot_frutos_rojos.jpg'
      },
      {
        id: 'fresas-natural',
        name: 'Fresas Liofilizadas',
        category: 'natural',
        badge: 'pure',
        sub: 'Dulce. Intensa. Crujiente.',
        calories: 46,
        weight: '15 g',
        equivalence: '10 Fresas Frescas (1 Taza)',
        desc: 'Fresas seleccionadas en su punto óptimo de madurez, liofilizadas mediante sublimación en frío. Este proceso elimina el agua sin someter la fruta a altas temperaturas, ayudando a conservar gran parte de sus nutrientes, antioxidantes, sabor y color natural.',
        benefits: ['Solo fresa. Nada más.', 'Sin azúcar añadida', 'Sin conservadores ni colorantes', '46 kcal por empaque completo'],
        image: 'assets/images/products/packshot_fresas.jpg'
      },
      {
        id: 'manzana-natural',
        name: 'Manzana Liofilizada',
        category: 'natural',
        badge: null,
        sub: 'Crujiente. Limpia. Pura.',
        calories: 67,
        weight: '20 g',
        equivalence: '1 Manzana Entera',
        desc: 'Láminas crujientes de manzana natural con cáscara, sin ceras añadidas. Liofilizadas para conservar el sabor y las características naturales de la fruta. Utilizamos antioxidantes de origen natural para preservar su color y textura crujiente.',
        benefits: ['100% Manzana seleccionada', 'Súper ligera y crujiente', 'Rica en fibra soluble', 'Excelente snack diario'],
        image: 'assets/images/products/packshot_manzana.jpg'
      },
      {
        id: 'platano-natural',
        name: 'Plátano Liofilizado',
        category: 'natural',
        badge: null,
        sub: 'Rico. Dorado. Natural.',
        calories: 98,
        weight: '28 g',
        equivalence: '1 Plátano Entero',
        desc: 'Rodajas de plátano dulce, sin aceites ni azúcares añadidos. Utilizamos antioxidantes de origen natural para preservar su color y textura crujiente. Aporta electrolitos naturales como potasio y magnesio.',
        benefits: ['Sin aceites ni fritos', 'Energía limpia y portátil', 'Rico en potasio y magnesio', '98 kcal de nutrición pura'],
        image: 'assets/images/products/packshot_platano.jpg'
      },
      {
        id: 'mango-natural',
        name: 'Mango Liofilizado',
        category: 'natural',
        badge: 'pure',
        sub: 'Tropical. Vibrante. Exótico.',
        calories: 80,
        weight: '24 g',
        equivalence: '1 Mango de la Huerta (1 Taza)',
        desc: 'Lajas del más jugoso mango tropical, transformadas en un snack súper crujiente. El mango aporta naturalmente fibra y beta-carotenos, con todo su sabor vibrante y sin una sola gota de almíbar.',
        benefits: ['Solo mango. Nada más.', 'Alto en Vitamina A y C', 'Textura crujiente irresistible', 'Empaque listo para llevar'],
        image: 'assets/images/products/packshot_mango.jpg'
      },
      {
        id: 'mango-chamoy',
        name: 'Mango Chamoy',
        category: 'chamoy',
        badge: 'chamoy',
        sub: 'Audaz. Picosito. Salvaje.',
        calories: 76,
        weight: '24 g',
        equivalence: '1 Mango entero con Toque Picosito',
        desc: 'La combinación perfecta entre la dulzura tropical del mango liofilizado y nuestro chamoy artesanal, elaborado con ingredientes cuidadosamente seleccionados y flor de sal Gourmet, sin azúcar añadida, sin conservadores ni saborizantes artificiales. Un picor suave y equilibrado que complementa el sabor del mango.',
        benefits: ['Chamoy con Flor de Sal Gourmet', 'Sabor mexicano auténtico', 'Solo 76 kcal por paquete', '100% Vegano y libre de gluten'],
        image: 'assets/images/products/packshot_mango_chamoy.jpg'
      },
      {
        id: 'manzana-chamoy',
        name: 'Manzana Chamoy',
        category: 'chamoy',
        badge: 'chamoy',
        sub: 'Agridulce. Crujiente. Adictiva.',
        calories: 60,
        weight: '20 g',
        equivalence: '1 Manzana crujiente picosita',
        desc: 'Crujientes trozos de manzana natural, cubiertos con nuestro chamoy artesanal y una ligera sazón de chile en polvo. Elaborado con ingredientes cuidadosamente seleccionados y flor de sal gourmet, sin azúcar añadida, sin conservadores ni saborizantes artificiales. Un picor suave y equilibrado que realza el sabor de la manzana.',
        benefits: ['Bajo en calorías (solo 60 kcal)', 'Crujido intenso agridulce', 'Sin conservadores químicos', 'Perfecto snack portátil'],
        image: 'assets/images/products/packshot_manzana_chamoy.jpg'
      },
      {
        id: 'pina-chamoy',
        name: 'Piña Chamoy',
        category: 'chamoy',
        badge: 'chamoy',
        sub: 'Refrescante. Tropical. Intenso.',
        calories: 93,
        weight: '22 g',
        equivalence: '1 Taza de Piña Tropical Picosita',
        desc: 'Bocados de piña tropical, dulces y ligeramente ácidos, cubiertos con nuestro chamoy artesanal para crear un contraste irresistible entre lo dulce, lo ácido y lo picosito. Elaborado con ingredientes cuidadosamente seleccionados, flor de sal Gourmet, sin azúcar añadida, sin conservadores ni saborizantes artificiales.',
        benefits: ['Piña natural seleccionada', 'Sabor agridulce explosivo', 'Libre de glutamato monosódico', 'Equivale a 1 taza completa de fruta'],
        image: 'assets/images/products/packshot_pina_chamoy.jpg'
      }
    ],
    en: [
      {
        id: 'frutos-rojos',
        name: 'Freeze-Dried Red Fruits',
        category: 'natural',
        badge: 'pure',
        sub: 'Wild. Intense. Crunchy.',
        calories: 52,
        weight: '20 g',
        equivalence: 'Mix of Strawberry, Blackberry, Blueberry & Raspberry (1 Cup)',
        desc: 'A selection of strawberry, blackberry, blueberry, and raspberry, freeze-dried to create a light and crunchy mix, ideal to enjoy as a snack or add to breakfasts, smoothies, bowls, or give a special touch to your recipes and desserts.',
        benefits: ['100% selected red berries mix', 'High natural antioxidant power', 'No added sugars or preservatives', 'Ideal for bowls, smoothies and desserts'],
        image: 'assets/images/products/packshot_frutos_rojos.jpg'
      },
      {
        id: 'fresas-natural',
        name: 'Freeze-Dried Strawberries',
        category: 'natural',
        badge: 'pure',
        sub: 'Sweet. Intense. Crunchy.',
        calories: 46,
        weight: '15 g',
        equivalence: '10 Fresh Strawberries (1 Cup)',
        desc: 'Selected strawberries at peak ripeness, freeze-dried through cold sublimation. This process removes water without subjecting fruit to high temperatures, preserving most of its nutrients, antioxidants, natural flavor, and color.',
        benefits: ['Just strawberry. Nothing else.', 'No added sugar', 'No preservatives or dyes', '46 kcal per full pack'],
        image: 'assets/images/products/packshot_fresas.jpg'
      },
      {
        id: 'manzana-natural',
        name: 'Freeze-Dried Apple',
        category: 'natural',
        badge: null,
        sub: 'Crispy. Clean. Pure.',
        calories: 67,
        weight: '20 g',
        equivalence: '1 Whole Apple',
        desc: 'Crispy slices of natural apple with peel, with no added waxes. Freeze-dried to preserve natural flavor and fruit characteristics. We use natural-origin antioxidants to preserve color and crispy texture.',
        benefits: ['100% Selected apple', 'Super light and crispy', 'Rich in soluble fiber', 'Great daily snack'],
        image: 'assets/images/products/packshot_manzana.jpg'
      },
      {
        id: 'platano-natural',
        name: 'Freeze-Dried Banana',
        category: 'natural',
        badge: null,
        sub: 'Rich. Golden. Natural.',
        calories: 98,
        weight: '28 g',
        equivalence: '1 Whole Banana',
        desc: 'Sweet banana slices, with no added oils or sugars. We use natural-origin antioxidants to preserve color and crispy texture. Provides natural electrolytes like potassium and magnesium.',
        benefits: ['No oils or frying', 'Clean portable energy', 'Rich in potassium & magnesium', '98 kcal of pure nutrition'],
        image: 'assets/images/products/packshot_platano.jpg'
      },
      {
        id: 'mango-natural',
        name: 'Freeze-Dried Mango',
        category: 'natural',
        badge: 'pure',
        sub: 'Tropical. Vibrant. Exotic.',
        calories: 80,
        weight: '24 g',
        equivalence: '1 Orchard Mango (1 Cup)',
        desc: 'Slices of the juiciest tropical mango, transformed into a super crunchy snack. Mango naturally provides fiber and beta-carotenes, with all its vibrant flavor and not a single drop of syrup.',
        benefits: ['Just mango. Nothing else.', 'High in Vitamin A & C', 'Irresistible crunchy texture', 'Ready-to-go pouch'],
        image: 'assets/images/products/packshot_mango.jpg'
      },
      {
        id: 'mango-chamoy',
        name: 'Mango Chamoy',
        category: 'chamoy',
        badge: 'chamoy',
        sub: 'Bold. Tangy. Wild.',
        calories: 76,
        weight: '24 g',
        equivalence: '1 Whole Mango with Tangy Twist',
        desc: 'The perfect match between freeze-dried tropical mango sweetness and our artisanal chamoy, crafted with carefully selected ingredients and Gourmet fleur de sel, with no added sugar, free of artificial preservatives or flavorings. A smooth, balanced tang that complements the mango flavor.',
        benefits: ['Chamoy with Gourmet Fleur de Sel', 'Authentic Mexican flavor', 'Only 76 kcal per pouch', '100% Vegan & Gluten-free'],
        image: 'assets/images/products/packshot_mango_chamoy.jpg'
      },
      {
        id: 'manzana-chamoy',
        name: 'Apple Chamoy',
        category: 'chamoy',
        badge: 'chamoy',
        sub: 'Sweet & Sour. Crunchy. Addictive.',
        calories: 60,
        weight: '20 g',
        equivalence: '1 Tangy Crispy Apple',
        desc: 'Crispy pieces of natural apple, coated in our artisanal chamoy with a light touch of chili seasoning. Crafted with carefully selected ingredients and gourmet fleur de sel, with no added sugar, free of artificial preservatives or flavorings. A smooth, balanced tang that enhances the apple flavor.',
        benefits: ['Low calorie (only 60 kcal)', 'Intense sweet & sour crunch', 'No chemical preservatives', 'Perfect portable snack'],
        image: 'assets/images/products/packshot_manzana_chamoy.jpg'
      },
      {
        id: 'pina-chamoy',
        name: 'Pineapple Chamoy',
        category: 'chamoy',
        badge: 'chamoy',
        sub: 'Refreshing. Tropical. Bold.',
        calories: 93,
        weight: '22 g',
        equivalence: '1 Cup of Tangy Tropical Pineapple',
        desc: 'Bites of tropical pineapple, sweet and slightly tangy, coated with our artisanal chamoy to create an irresistible contrast between sweet, sour, and spicy. Crafted with carefully selected ingredients, Gourmet fleur de sel, with no added sugar, free of artificial preservatives or flavorings.',
        benefits: ['Selected natural pineapple', 'Explosive sweet-and-sour punch', 'MSG free', 'Equals 1 full cup of fruit'],
        image: 'assets/images/products/packshot_pina_chamoy.jpg'
      }
    ]
  };

  function detectLanguage() {
    const savedLang = localStorage.getItem('huertalia_lang');
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      return savedLang;
    }
    const userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return userLang.startsWith('en') ? 'en' : 'es';
  }

  let currentLang = detectLanguage();
  let currentFilter = 'all';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('huertalia_lang', lang);

    // 1. Update HTML lang metadata
    document.documentElement.lang = lang;

    // 2. Update SEO Meta title & descriptions
    if (translations[lang].seo_title) {
      document.title = translations[lang].seo_title;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.content = translations[lang].seo_title;
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.content = translations[lang].seo_title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang].seo_meta) {
      metaDesc.content = translations[lang].seo_meta;
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.content = translations[lang].seo_meta;
      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.content = translations[lang].seo_meta;
    }

    // 3. Update Language Pill Buttons Active State
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // 4. Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // 5. Translate ARIA labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('aria-label', translations[lang][key]);
      }
    });

    // 6. Dynamic Form Placeholders
    document.querySelectorAll('input[placeholder*="Ana"], input[placeholder*="Jane"]').forEach(input => {
      input.placeholder = lang === 'en' ? 'e.g. Jane Doe' : 'Ej. Ana María Torres';
    });
    document.querySelectorAll('input[placeholder*="tuempresa"], input[placeholder*="company"]').forEach(input => {
      input.placeholder = lang === 'en' ? 'contact@company.com' : 'contacto@tuempresa.com';
    });
    document.querySelectorAll('textarea.form-control').forEach(input => {
      input.placeholder = lang === 'en' ? 'Estimated volumes, target markets or specific product lines...' : 'Volúmenes estimados, mercados de interés o líneas de productos específicas...';
    });

    // 7. Filter Buttons Re-render
    const filterAll = document.querySelector('[data-filter="all"]');
    const filterPure = document.querySelector('[data-filter="natural"]');
    const filterChamoy = document.querySelector('[data-filter="chamoy"]');
    if (filterAll) filterAll.textContent = translations[lang].filter_all;
    if (filterPure) filterPure.textContent = translations[lang].filter_pure;
    if (filterChamoy) filterChamoy.textContent = translations[lang].filter_chamoy;

    // 8. Re-render Products in Active Language
    renderProducts(currentFilter);
  }

  // Attach click listeners to language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

  // ==========================================================================
  // 2. FULLSCREEN MOBILE MENU OVERLAY & ACCESSIBILITY LOGIC
  // ==========================================================================
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileOverlay = document.getElementById('mobile-menu-overlay');
  const overlayCloseBtn = document.getElementById('overlay-close-btn');

  function openMobileOverlay() {
    if (mobileOverlay) {
      mobileOverlay.classList.add('active');
      mobileOverlay.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileOverlay() {
    if (mobileOverlay) {
      mobileOverlay.classList.remove('active');
      mobileOverlay.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileOverlay);
  }

  if (overlayCloseBtn) {
    overlayCloseBtn.addEventListener('click', closeMobileOverlay);
  }

  document.querySelectorAll('.mobile-overlay-link').forEach(link => {
    link.addEventListener('click', closeMobileOverlay);
  });

  // Keyboard Accessibility: Close overlay or modal with ESC key
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeMobileOverlay();
      closeModal();
    }
  });

  // ==========================================================================
  // 3. MOBILE ACCORDIONS & PROCESS SINGLE-STEP EXPAND LOGIC
  // ==========================================================================
  const accordionTriggers = document.querySelectorAll('.mobile-accordion-trigger, .footer-accordion-header');

  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', !isExpanded);
      
      const targetId = trigger.getAttribute('aria-controls');
      const panel = document.getElementById(targetId);
      
      if (panel) {
        panel.classList.toggle('active', !isExpanded);
      }

      const icon = trigger.querySelector('i');
      if (icon) {
        if (trigger.classList.contains('footer-accordion-header')) {
          icon.className = !isExpanded ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line';
        } else {
          icon.className = !isExpanded ? 'ri-subtract-line' : 'ri-add-line';
        }
      }
    });
  });

  // Process Card Click Handling on Mobile
  const processCards = document.querySelectorAll('.process-card-imageled');
  processCards.forEach(card => {
    card.addEventListener('click', () => {
      if (window.innerWidth <= 860) {
        const isCurrentActive = card.classList.contains('mobile-expanded');
        processCards.forEach(c => c.classList.remove('mobile-expanded'));
        if (!isCurrentActive) {
          card.classList.add('mobile-expanded');
        }
      }
    });
  });

  // ==========================================================================
  // 4. NAVIGATION & ACTIVE LINK TRACKER ON SCROLL
  // ==========================================================================
  const headerWrapper = document.querySelector('.site-header-wrapper');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-overlay-link');

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
      const sectionTop = section.offsetTop - 110;
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

  // ==========================================================================
  // 5. SCROLL REVEAL & NUMBER COUNTER OBSERVER
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

  // ==========================================================================
  // 6. PRODUCTS RENDERER (BILINGUAL STORE)
  // ==========================================================================
  const productsGrid = document.getElementById('products-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderProducts(filter = 'all') {
    currentFilter = filter;
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    
    const rawList = productsData[currentLang] || productsData.es;
    const filtered = filter === 'all' 
      ? rawList 
      : rawList.filter(p => p.category === filter);
      
    filtered.forEach(product => {
      const card = document.createElement('div');
      card.className = 'editorial-product-card reveal-scale active';
      card.innerHTML = `
        <div class="editorial-img-box">
          <img src="${product.image}" alt="${product.name}" loading="lazy" width="300" height="300">
        </div>
        <div class="editorial-info-box">
          <h3 class="editorial-product-title">${product.name}</h3>
          <p class="editorial-product-desc">${product.sub}</p>
          
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; border-top: 1px solid var(--border-light); padding-top: 0.8rem;">
            <span style="font-family: var(--font-serif); font-weight: 800; font-size: 1.05rem; color: var(--color-primary);">${product.calories} kcal</span>
            <button class="btn btn-outline-dark product-btn-detail" data-id="${product.id}" style="padding: 0.6rem 1.1rem; font-size: 0.76rem; min-height: 44px;">
              <span>${translations[currentLang].btn_details}</span> <i class="ri-arrow-right-line"></i>
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

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.getAttribute('data-filter'));
    });
  });

  // Modal Functionality
  const modalOverlay = document.getElementById('product-modal');
  const modalContainer = document.getElementById('modal-content');
  const modalCloseBtn = document.getElementById('modal-close');

  function openModal(id) {
    const rawList = productsData[currentLang] || productsData.es;
    const product = rawList.find(p => p.id === id);
    if (!product || !modalOverlay || !modalContainer) return;

    let badgeHtml = '';
    if (product.badge === 'chamoy' || product.category === 'chamoy') {
      badgeHtml = `<span class="wild-badge" style="margin-bottom: 0.8rem; width: fit-content;">${translations[currentLang].modal_chamoy_badge}</span>`;
    } else if (product.badge === 'pure') {
      badgeHtml = `<span class="wild-badge" style="margin-bottom: 0.8rem; width: fit-content;">${translations[currentLang].modal_pure_badge}</span>`;
    }

    modalContainer.innerHTML = `
      <div class="modal-content-grid">
        <div class="modal-img-area">
          <img src="${product.image}" alt="${product.name}" width="350" height="350">
        </div>
        <div class="modal-details-area">
          ${badgeHtml}
          <h2 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 0.4rem; color: var(--color-primary);">${product.name}</h2>
          <p style="color: var(--color-primary-muted); font-weight: 700; margin-bottom: 1.2rem;">${translations[currentLang].modal_equals}${product.equivalence}</p>
          <p style="color: var(--color-text-muted); font-size: 0.98rem; margin-bottom: 1.8rem; line-height: 1.6;">${product.desc}</p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background: var(--bg-alt); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.8rem;">
            <div>
              <span style="font-family: var(--font-serif); font-weight: 800; font-size: 1.3rem; color: var(--color-accent-red);">${product.calories} kcal</span>
              <span style="display: block; font-size: 0.7rem; text-transform: uppercase; font-weight: 700; color: var(--color-text-muted);">${translations[currentLang].modal_cal_label}</span>
            </div>
            <div>
              <span style="font-family: var(--font-serif); font-weight: 800; font-size: 1.3rem; color: var(--color-primary);">${product.weight}</span>
              <span style="display: block; font-size: 0.7rem; text-transform: uppercase; font-weight: 700; color: var(--color-text-muted);">${translations[currentLang].modal_weight_label}</span>
            </div>
          </div>

          <a href="contacto.html" class="btn btn-luxury-dark" style="width: 100%; min-height: 48px; justify-content: center;">
            ${translations[currentLang].modal_b2b_btn} <i class="ri-mail-send-line"></i>
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

  // Lead Form Submission Listener
  const leadForm = document.getElementById('lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(translations[currentLang].form_alert_success);
      leadForm.reset();
    });
  }

  // Apply initial language & renderer IMMEDIATELY
  applyLanguage(currentLang);
});
