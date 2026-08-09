/* ==========================================================================
   HUERTALIA LIOFILIZADOS - FINAL QA & BILINGUAL ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. i18n DICTIONARY SYSTEM (100% PURE ESPAÑOL / 100% PURE ENGLISH)
  // ==========================================================================
  const translations = {
    es: {
      seo_title: 'HUERTALIA | Fruta Liofilizada del Corazón del Bajío (León, GTO)',
      seo_meta: 'Huertalia: Fruta real liofilizada nacida en León, Guanajuato en 2022. Conservada mediante sublimación en frío. 100% fruta real, imposiblemente crujiente.',
      
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
      process_subhead: 'Sublimación en frío al vacío para lograr hasta un 98% de retención de nutrientes.',
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

      // Lifestyle
      lifestyle_badge: 'ESTILO DE VIDA CONSCIENTE',
      lifestyle_title: 'LLEVA HUERTALIA <span class="text-italic-accent">CONTIGO.</span>',
      lifestyle_subhead: 'Nutrición pura diseñada para integrarse naturalmente en cada momento de tu día.',
      time1_label: 'ENTRENAR',
      time1_desc: 'Fruta ligera y crujiente para acompañar tu rutina.',
      time2_label: 'TRABAJO',
      time2_desc: 'Una pausa crujiente para acompañar tu día.',
      time3_label: 'PAUSA',
      time3_desc: 'Un pequeño momento de sabor cuando más lo necesitas.',
      time4_label: 'AVENTURA',
      time4_desc: 'Fruta ligera y fácil de llevar allá donde vayas.',

      // Why Huertalia
      why_badge: 'BENEFICIOS COMPROBADOS',
      why_title: 'NADA AÑADIDO.<br><span class="text-italic-accent">TODO CONSERVADO.</span>',
      why_claim1: 'HASTA UN 98% DE RETENCIÓN DE NUTRIENTES',
      why_claim2: 'FRUTA REAL',
      why_claim3: 'AZÚCAR AÑADIDA',
      why_claim4: 'ACEITES AÑADIDOS',

      // Calculator
      calc_badge: 'COMPARATIVA NUTRICIONAL',
      calc_title: 'Compara tu Snack',
      calc_subhead: 'Descubre cómo cambia el aporte calórico de tu snack habitual al elegir fruta liofilizada.',
      calc_label_select: 'SELECCIONA TU FRUTA:',
      calc_label_qty: 'FRECUENCIA DE CONSUMO SEMANAL:',
      calc_unit_min: '1 porción',
      calc_unit_max: '14 porciones',
      calc_label_saved: 'DIFERENCIA ESTIMADA DE CALORÍAS',
      calc_bar_junk: 'Snack Procesado Tradicional',
      calc_bar_huertalia: 'Con Huertalia',
      calc_equiv_label: 'Equiv. a:',

      // Business
      b2b_badge: 'MAYOREO Y DISTRIBUCIÓN',
      b2b_title: 'HUERTALIA PARA<br><span class="text-italic-accent" style="color: var(--color-accent-mango);">NEGOCIOS.</span>',
      b2b_subhead: 'Suministramos a cadenas retail premium, supermercados gourmet, clubes de salud y distribuidores internacionales en América del Norte y Europa.',
      b2b_f1_title: 'Mayoreo y Cajas Mixtas',
      b2b_f1_desc: 'Esquemas de volumen altamente competitivos y entregas programadas.',
      b2b_f2_title: 'Cumplimiento Regulatorio Global',
      b2b_f2_desc: 'Cumplimiento de los requisitos regulatorios aplicables y estándares internacionales.',
      b2b_f3_title: 'Vida Útil de +12 Meses',
      b2b_f3_desc: 'Empaque hermético de alta barrera contra luz y oxígeno.',
      b2b_cta: 'CONVERTIRME EN DISTRIBUIDOR',

      // Final CTA
      final_badge: '¿LISTO PARA EL CRUNCH?',
      final_title: 'READY TO<br><span class="text-italic-accent" style="color: var(--color-accent-mango);">CRUNCH?</span>',
      final_subhead: 'Descubre la fruta liofilizada nacida en el corazón del Bajío. Calidad excepcional para tu estilo de vida o tu negocio.',
      final_cta1: 'DESCUBRE HUERTALIA',
      final_cta2: 'COTIZAR MAYOREO',

      // Contact Page
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
      form_alert_success: '¡Gracias por comunicarte con Huertalia! Tu mensaje ha sido enviado a ventas@huertalia.com.',
      map_badge: 'UBICACIÓN MATRIZ',
      map_title: 'Balcones del Campestre',
      map_sub: 'León, Guanajuato, México.',

      // Footer
      footer_desc: 'Fruta. Reinventada. 100% fruta liofilizada nacida en León, Guanajuato en 2022. Del corazón del Bajío al mundo.',
      footer_col_title: 'COLECCIÓN',
      footer_offices_title: 'OFICINAS MATRIZ',
      footer_contact_link: 'Contacto',
      footer_item_fresas: 'Fresas Liofilizadas',
      footer_item_manzana: 'Manzana Liofilizada',
      footer_item_platano: 'Plátano Liofilizado',
      footer_item_mango: 'Mango Liofilizado',
      footer_item_chamoy: 'Línea Chamoy Salvaje',
      footer_rights: '&copy; 2026 HUERTALIA. Todos los derechos reservados.',
      footer_location: 'León, Guanajuato, México · Desde 2022'
    },

    en: {
      seo_title: 'HUERTALIA | Freeze-Dried Fruit from El Bajío (León, GTO)',
      seo_meta: 'Huertalia: 100% real freeze-dried fruit born in León, Guanajuato in 2022. Preserved through cold vacuum sublimation. Unforgettably crunchy.',
      
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
      process_subhead: 'Cold vacuum sublimation to achieve up to 98% nutrient retention.',
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
      time1_label: 'WORKOUT',
      time1_desc: 'Light and crunchy fruit to accompany your workout routine.',
      time2_label: 'WORK',
      time2_desc: 'A crispy break to accompany your day.',
      time3_label: 'BREAK',
      time3_desc: 'A moment of pure flavor when you need it most.',
      time4_label: 'ADVENTURE',
      time4_desc: 'Lightweight fruit, easy to take wherever you go.',

      // Why Huertalia
      why_badge: 'PROVEN BENEFITS',
      why_title: 'NOTHING ADDED.<br><span class="text-italic-accent">EVERYTHING PRESERVED.</span>',
      why_claim1: 'UP TO 98% NUTRIENT RETENTION',
      why_claim2: 'REAL FRUIT',
      why_claim3: 'ADDED SUGAR',
      why_claim4: 'ADDED OILS',

      // Calculator
      calc_badge: 'NUTRITIONAL COMPARISON',
      calc_title: 'Compare Your Snack',
      calc_subhead: 'See how the caloric intake of your usual snack changes when choosing freeze-dried fruit.',
      calc_label_select: 'SELECT YOUR FRUIT:',
      calc_label_qty: 'WEEKLY CONSUMPTION:',
      calc_unit_min: '1 serving',
      calc_unit_max: '14 servings',
      calc_label_saved: 'ESTIMATED CALORIE DIFFERENCE',
      calc_bar_junk: 'Junk Snack Benchmark',
      calc_bar_huertalia: 'With Huertalia',
      calc_equiv_label: 'Equiv. to:',

      // Business
      b2b_badge: 'WHOLESALE & DISTRIBUTION',
      b2b_title: 'HUERTALIA FOR<br><span class="text-italic-accent" style="color: var(--color-accent-mango);">BUSINESS.</span>',
      b2b_subhead: 'Supplying premium retail chains, gourmet supermarkets, fitness clubs and international distributors across North America and Europe.',
      b2b_f1_title: 'Wholesale & Mixed Cases',
      b2b_f1_desc: 'High-margin volume tiers and scheduled deliveries.',
      b2b_f2_title: 'Global Regulatory Compliance',
      b2b_f2_desc: 'Compliance with applicable regulatory requirements and international standards.',
      b2b_f3_title: '12+ Month Shelf-Life',
      b2b_f3_desc: 'High-barrier oxygen protective packaging.',
      b2b_cta: 'BECOME A DISTRIBUTOR',

      // Final CTA
      final_badge: 'READY TO CRUNCH?',
      final_title: 'READY TO<br><span class="text-italic-accent" style="color: var(--color-accent-mango);">CRUNCH?</span>',
      final_subhead: 'Discover the freeze-dried fruit born in the heart of El Bajío. Exceptional quality for your lifestyle or your business.',
      final_cta1: 'DISCOVER HUERTALIA',
      final_cta2: 'WHOLESALE QUOTE',

      // Contact Page
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
      form_alert_success: 'Thank you for reaching out to Huertalia! Your message has been sent to ventas@huertalia.com.',
      map_badge: 'HEADQUARTERS LOCATION',
      map_title: 'Balcones del Campestre',
      map_sub: 'León, Guanajuato, Mexico.',

      // Footer
      footer_desc: 'Fruit. Reinvented. 100% freeze-dried fruit born in León, Guanajuato in 2022. From the heart of El Bajío to the world.',
      footer_col_title: 'COLLECTION',
      footer_offices_title: 'HEADQUARTERS',
      footer_contact_link: 'Contact',
      footer_item_fresas: 'Freeze-Dried Strawberries',
      footer_item_manzana: 'Freeze-Dried Apple',
      footer_item_platano: 'Freeze-Dried Banana',
      footer_item_mango: 'Freeze-Dried Mango',
      footer_item_chamoy: 'Wild Chamoy Collection',
      footer_rights: '&copy; 2026 HUERTALIA. All rights reserved.',
      footer_location: 'León, Guanajuato, Mexico · Since 2022'
    }
  };

  // Products Data Store (ES & EN)
  const productsData = {
    es: [
      {
        id: 'fresas-natural',
        name: 'Fresas Liofilizadas',
        category: 'natural',
        sub: 'Dulce. Intensa. Crujiente.',
        calories: 46,
        weight: '15 g',
        equivalence: '10 Fresas Frescas (1 Taza)',
        desc: 'Fresas seleccionadas en su punto óptimo de madurez, liofilizadas mediante sublimación en frío. Cada bocado crujiente conserva la intensidad de sabor natural y hasta un 98% de los nutrientes intactos.',
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
        desc: 'Bocado tropical agridulce con el nivel exacto de piña natural liofilizada y sazón chamoy. Aporta fibra natural para una digestión ágil.',
        benefits: ['Piña natural seleccionada', 'Sabor agridulce explosivo', 'Libre de glutamato monosódico', 'Equivale a 1 taza completa de fruta'],
        image: 'assets/images/products/packshot_pina_chamoy.jpg'
      }
    ],
    en: [
      {
        id: 'fresas-natural',
        name: 'Freeze-Dried Strawberries',
        category: 'natural',
        sub: 'Sweet. Intense. Crunchy.',
        calories: 46,
        weight: '15 g',
        equivalence: '10 Fresh Strawberries (1 Cup)',
        desc: 'Selected strawberries picked at peak ripeness, freeze-dried through cold sublimation. Each crunchy bite preserves intense natural flavor and up to 98% of intact nutrients.',
        benefits: ['Just strawberry. Nothing else.', 'No added sugar', 'No preservatives or dyes', '46 kcal per full pack'],
        image: 'assets/images/products/packshot_fresas.jpg'
      },
      {
        id: 'manzana-natural',
        name: 'Freeze-Dried Apple',
        category: 'natural',
        sub: 'Crispy. Clean. Pure.',
        calories: 67,
        weight: '20 g',
        equivalence: '1 Whole Apple (3/4 Cup)',
        desc: 'Crispy slices of unpeeled natural apple with zero added waxes. A pure source of dietary fiber ideal for keeping your energy levels steady throughout your day.',
        benefits: ['100% Selected apple', 'Super light and crispy', 'Rich in soluble fiber', 'Great daily snack'],
        image: 'assets/images/products/packshot_manzana.jpg'
      },
      {
        id: 'platano-natural',
        name: 'Freeze-Dried Banana',
        category: 'natural',
        sub: 'Rich. Golden. Natural.',
        calories: 98,
        weight: '28 g',
        equivalence: '1 Whole Banana',
        desc: 'Sweet banana slices with no added oils or sugars. Unlike traditional fried banana chips, our process retains zero fat and 100% of potassium.',
        benefits: ['No oils or frying', 'Clean portable energy', 'Rich in potassium & Vitamin B6', '98 kcal of pure nutrition'],
        image: 'assets/images/products/packshot_platano.jpg'
      },
      {
        id: 'mango-natural',
        name: 'Freeze-Dried Mango',
        category: 'natural',
        sub: 'Tropical. Vibrant. Exotic.',
        calories: 80,
        weight: '24 g',
        equivalence: '1 Orchard Mango (1 Cup)',
        desc: 'Juicy tropical mango slices turned into a super crispy snack. Retains beta-carotenes and full vibrant flavor without a single drop of syrup.',
        benefits: ['Just mango. Nothing else.', 'High in Vitamin A & C', 'Irresistible crunchy texture', 'Ready-to-go pouch'],
        image: 'assets/images/products/packshot_mango.jpg'
      },
      {
        id: 'mango-chamoy',
        name: 'Mango Chamoy',
        category: 'chamoy',
        sub: 'Bold. Tangy. Wild.',
        calories: 76,
        weight: '24 g',
        equivalence: '1 Whole Mango with Tangy Twist',
        desc: 'The perfect match between freeze-dried mango sweetness and an artisanal chamoy blend with zero artificial colors or flavorings. Smooth addicting kick.',
        benefits: ['Refined sugar-free chamoy', 'Authentic Mexican flavor', 'Only 76 kcal per pouch', '100% Vegan & Gluten-free'],
        image: 'assets/images/products/packshot_mango_chamoy.jpg'
      },
      {
        id: 'manzana-chamoy',
        name: 'Apple Chamoy',
        category: 'chamoy',
        sub: 'Sweet & Sour. Crunchy. Addictive.',
        calories: 60,
        weight: '20 g',
        equivalence: '1 Tangy Crispy Apple',
        desc: 'Crispy natural apple bites coated with a light blend of chili powder and natural chamoy. The ultimate healthy swap for your cravings.',
        benefits: ['Low calorie (only 60 kcal)', 'Intense sweet & sour crunch', 'No chemical preservatives', 'Perfect portable snack'],
        image: 'assets/images/products/packshot_manzana_chamoy.jpg'
      },
      {
        id: 'pina-chamoy',
        name: 'Pineapple Chamoy',
        category: 'chamoy',
        sub: 'Refreshing. Tropical. Bold.',
        calories: 93,
        weight: '22 g',
        equivalence: '1 Cup of Tangy Tropical Pineapple',
        desc: 'Sweet & sour tropical bite with the exact level of natural freeze-dried pineapple and chamoy seasoning. Provides natural fiber for agile digestion.',
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

    // Update document HTML lang attribute dynamically
    document.documentElement.lang = lang;

    // Update SEO Meta title and description
    if (translations[lang].seo_title) document.title = translations[lang].seo_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang].seo_meta) metaDesc.content = translations[lang].seo_meta;

    // Update Language Pill Selector
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Benefits Counter Prefix Update (HASTA / UP TO)
    const retentionCounter = document.querySelector('.claim-item-large .count-number');
    if (retentionCounter) {
      retentionCounter.setAttribute('data-prefix', lang === 'en' ? 'UP TO ' : 'HASTA ');
      if (retentionCounter.classList.contains('counted')) {
        retentionCounter.textContent = (lang === 'en' ? 'UP TO ' : 'HASTA ') + '98%';
      }
    }

    // Dynamic Form Placeholders
    document.querySelectorAll('input[placeholder*="Ana"], input[placeholder*="Jane"]').forEach(input => {
      input.placeholder = lang === 'en' ? 'e.g. Jane Doe' : 'Ej. Ana María Torres';
    });
    document.querySelectorAll('input[placeholder*="tuempresa"], input[placeholder*="company"]').forEach(input => {
      input.placeholder = lang === 'en' ? 'contact@company.com' : 'contacto@tuempresa.com';
    });
    document.querySelectorAll('textarea.form-control').forEach(input => {
      input.placeholder = lang === 'en' ? 'Estimated volumes, target markets or specific product lines...' : 'Volúmenes estimados, mercados de interés o líneas de productos específicas...';
    });

    // Filter Buttons Re-render
    const filterAll = document.querySelector('[data-filter="all"]');
    const filterPure = document.querySelector('[data-filter="natural"]');
    const filterChamoy = document.querySelector('[data-filter="chamoy"]');
    if (filterAll) filterAll.textContent = translations[lang].filter_all;
    if (filterPure) filterPure.textContent = translations[lang].filter_pure;
    if (filterChamoy) filterChamoy.textContent = translations[lang].filter_chamoy;

    // Calculator Select Options Re-render
    const calcSelect = document.getElementById('calc-fruit');
    if (calcSelect) {
      const currentSelectedVal = calcSelect.value;
      calcSelect.innerHTML = '';
      const rawList = productsData[lang] || productsData.es;
      rawList.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.name} (${p.calories} kcal)`;
        if (p.id === currentSelectedVal) opt.selected = true;
        calcSelect.appendChild(opt);
      });
    }

    // Image Alt Text Update across page
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

    const heroImg = document.querySelector('.hero-bg-media');
    if (heroImg) {
      heroImg.alt = lang === 'en' 
        ? 'Huertalia Freeze-Dried Fruit León Guanajuato'
        : 'Fruta Liofilizada Huertalia León Guanajuato';
    }

    const historyImg = document.querySelector('.history-img-box img');
    if (historyImg) {
      historyImg.alt = lang === 'en'
        ? 'Huertalia Agricultural Heritage León Guanajuato'
        : 'Origen agrícola Huertalia León Guanajuato';
    }

    const b2bImg = document.querySelector('.b2b-img-box img');
    if (b2bImg) {
      b2bImg.alt = lang === 'en'
        ? 'Huertalia Global Wholesale Distribution'
        : 'Distribución Global Huertalia';
    }

    // Re-render Products in Active Language
    renderProducts(currentFilter);
    updateCalculator();
  }

  // Attach click listeners to language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

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

  // ==========================================================================
  // 4. PRODUCTS RENDERER (BILINGUAL STORE)
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
          
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; border-top: 1px solid var(--border-light); padding-top: 1rem;">
            <span style="font-family: var(--font-serif); font-weight: 800; font-size: 1.1rem; color: var(--color-primary);">${product.calories} kcal</span>
            <button class="btn btn-outline-dark product-btn-detail" data-id="${product.id}" style="padding: 0.6rem 1.2rem; font-size: 0.78rem;">
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

    modalContainer.innerHTML = `
      <div class="modal-content-grid">
        <div class="modal-img-area">
          <img src="${product.image}" alt="${product.name}" width="350" height="350">
        </div>
        <div class="modal-details-area">
          <span class="wild-badge" style="margin-bottom: 0.8rem; width: fit-content;">
            ${product.category === 'chamoy' ? (currentLang === 'en' ? '🌶️ CHAMOY LINE' : '🌶️ EDICIÓN CHAMOY') : (currentLang === 'en' ? '🌿 100% PURE FRUIT' : '🌿 100% FRUTA PURA')}
          </span>
          <h2 style="font-family: var(--font-serif); font-size: 2.4rem; margin-bottom: 0.4rem; color: var(--color-primary);">${product.name}</h2>
          <p style="color: var(--color-primary-muted); font-weight: 700; margin-bottom: 1.2rem;">${currentLang === 'en' ? 'Equals ' : 'Equivale a '}${product.equivalence}</p>
          <p style="color: var(--color-text-muted); font-size: 0.98rem; margin-bottom: 1.8rem; line-height: 1.6;">${product.desc}</p>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background: var(--bg-alt); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.8rem;">
            <div>
              <span style="font-family: var(--font-serif); font-weight: 800; font-size: 1.3rem; color: var(--color-accent-red);">${product.calories} kcal</span>
              <span style="display: block; font-size: 0.7rem; text-transform: uppercase; font-weight: 700; color: var(--color-text-muted);">${currentLang === 'en' ? 'Calories / Pack' : 'Calorías / Sobre'}</span>
            </div>
            <div>
              <span style="font-family: var(--font-serif); font-weight: 800; font-size: 1.3rem; color: var(--color-primary);">${product.weight}</span>
              <span style="display: block; font-size: 0.7rem; text-transform: uppercase; font-weight: 700; color: var(--color-text-muted);">${currentLang === 'en' ? 'Net Weight' : 'Contenido Neto'}</span>
            </div>
          </div>

          <a href="contacto.html" class="btn btn-luxury-dark" style="width: 100%;">
            ${currentLang === 'en' ? 'REQUEST B2B QUOTE' : 'SOLICITAR COTIZACIÓN B2B'} <i class="ri-mail-send-line"></i>
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
  // 5. CALCULATOR LOGIC ("COMPARA TU SNACK" BILINGUAL)
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
    const rawList = productsData[currentLang] || productsData.es;
    const selectedProd = rawList.find(p => p.id === calcSelect.value) || rawList[0];
    const qty = parseInt(calcQty.value, 10) || 1;

    if (qtyValDisplay) {
      if (currentLang === 'en') {
        qtyValDisplay.textContent = `${qty} serving${qty > 1 ? 's' : ''}/week`;
      } else {
        qtyValDisplay.textContent = `${qty} porción${qty > 1 ? 'es' : ''}/semana`;
      }
    }
    
    const junkCal = 280 * qty;
    const huertaliaCal = selectedProd.calories * qty;
    const calSaved = junkCal - huertaliaCal;

    if (calSavedDisplay) calSavedDisplay.textContent = `-${calSaved} kcal`;
    if (fruitEquivDisplay) fruitEquivDisplay.textContent = `${qty}x ${selectedProd.name}`;

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

  // Apply initial language & renderer
  applyLanguage(currentLang);

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
