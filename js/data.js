// =============================================================================
// BANCO PEDAGÓGICO DE DATOS · MATEMÁTICAS 4.º PRIMARIA · TEMA 3
// Proyecto CLAVES / Construyendo Mundos (Grazalema - Santillana)
// "La Multiplicación" · Entrenador Personal de Olivia (100% Original)
// =============================================================================

const MATH_DATA = {
  meta: {
    title: "Matemáticas 4.º Primaria · Tema 3",
    unit: "Tema 3: La Multiplicación",
    subject: "Matemáticas",
    student: "Olivia",
    grade: "4.º Educación Primaria",
    schoolProject: "Proyecto CLAVES · Construyendo Mundos (Santillana)",
    version: "2.0.0"
  },

  // ===========================================================================
  // CATÁLOGOS ORIGINALES (SIN REPETIR PRODUCTOS NI NÚMEROS DEL LIBRO)
  // ===========================================================================
  catalogs: {
    papeleria: {
      title: "Catálogo de la Gran Papelería y Taller Creativo",
      items: [
        { icon: "🖍️", name: "Rotuladores", unit: "rotuladores", packLabel: "estuches de 7", qty: 7 },
        { icon: "📓", name: "Cuadernos", unit: "cuadernos", packLabel: "packs de 4", qty: 4 },
        { icon: "📎", name: "Clips de colores", unit: "clips", packLabel: "cajas de 100", qty: 100 },
        { icon: "✏️", name: "Lápices de colores", unit: "lápices", packLabel: "cajas de 18", qty: 18 },
        { icon: "⭐", name: "Pegatinas brillantes", unit: "pegatinas", packLabel: "sobres de 64", qty: 64 },
        { icon: "📄", name: "Folios reciclados", unit: "folios", packLabel: "paquetes de 300", qty: 300 }
      ]
    },
    deportes: {
      title: "Catálogo de la Tienda de Deportes y Campamento",
      items: [
        { icon: "🎾", name: "Pelotas de tenis", unit: "pelotas", packLabel: "tubos de 9", qty: 9 },
        { icon: "🥤", name: "Bidones deportivos", unit: "bidones", packLabel: "packs de 5", qty: 5 },
        { icon: "🏅", name: "Pulseras de equipo", unit: "pulseras", packLabel: "bolsas de 10", qty: 10 },
        { icon: "⚽", name: "Conos de entrenamiento", unit: "conos", packLabel: "cajas de 32", qty: 32 },
        { icon: "🃏", name: "Cromos deportivos", unit: "cromos", packLabel: "cajas de 74", qty: 74 },
        { icon: "🚩", name: "Banderines de pista", unit: "banderines", packLabel: "cajas de 400", qty: 400 }
      ]
    }
  },

  // ===========================================================================
  // 5 MISIONES DIDÁCTICAS TEMÁTICAS (25 RETOS: TEST + ENTRADA CON PISTA)
  // ===========================================================================
  missions: [
    {
      id: 1,
      title: "Misión 1: Multiplicaciones, Catálogo y Ceros",
      icon: "📦",
      badge: "Insignia de la Papelería",
      description: "Domina los términos, multiplicaciones por 1, 2 y 3 cifras y los ceros finales e intermedios.",
      questions: [
        {
          id: "m1_1",
          type: "multiple_choice",
          question: "En la operación 136 × 7 = 952, ¿cómo se llaman los términos?",
          options: [
            "136 y 7 son los sumandos, y 952 es el producto.",
            "136 y 7 son los factores, y 952 es el producto.",
            "136 es el factor mayor, 7 es el cociente y 952 es el resto.",
            "136 es el minuendo, 7 es el sustraendo y 952 es la diferencia."
          ],
          correct: 1,
          explanation: "¡Exacto! Los números que multiplicamos entre sí son los FACTORES (136 y 7), y el resultado final es el PRODUCTO (952)."
        },
        {
          id: "m1_2",
          type: "input",
          question: "En la papelería reciben 248 cajas de clips de colores (cada caja trae 100 clips). ¿Cuántos clips han recibido en total?",
          placeholder: "Escribe el total de clips...",
          accepted: ["24800", "24.800"],
          hint: "Multiplica 248 × 100 añadiendo dos ceros al final de 248.",
          explanation: "¡Genial! Para multiplicar por 100 añadimos dos ceros al final: 248 × 100 = 24.800 clips."
        },
        {
          id: "m1_3",
          type: "input",
          question: "Para preparar los pedidos del colegio, Lucas apila 124 paquetes de folios reciclados (300 folios por paquete). ¿Cuántos folios hay en total?",
          placeholder: "Escribe el total de folios...",
          accepted: ["37200", "37.200"],
          hint: "Multiplica 124 × 3 y añade los dos ceros del 300.",
          explanation: "¡Brillante! 124 × 3 = 372, y al añadir los dos ceros del 300 obtenemos 37.200 folios."
        },
        {
          id: "m1_4",
          type: "multiple_choice",
          question: "Al calcular 235 × 18 en vertical, ¿qué cantidad corresponde al segundo producto parcial (el de la cifra 1 de las decenas) y cuál es el resultado final?",
          options: [
            "235 unidades y resultado final 2.115.",
            "2.350 unidades (escrito desplazado bajo las decenas) y resultado final 4.230.",
            "23.500 unidades y resultado final 25.380.",
            "1.880 unidades y resultado final 2.115."
          ],
          correct: 1,
          explanation: "¡Regla de oro! 235 × 8 = 1.880; luego 235 × 10 = 2.350 (se coloca dejando libre la columna de las unidades). Suma: 1.880 + 2.350 = 4.230."
        },
        {
          id: "m1_5",
          type: "input",
          question: "Reto de 3 cifras con cero intermedio: calcula con papel y lápiz 216 × 204 y escribe el producto final.",
          placeholder: "Escribe el resultado...",
          accepted: ["44064", "44.064"],
          hint: "216 × 4 = 864; como las decenas son 0, salta dos lugares y calcula 216 × 200 = 43.200; suma ambos.",
          explanation: "¡Campeona! 216 × 4 = 864; al haber un 0 en las decenas saltamos a las centenas: 216 × 200 = 43.200. Total: 864 + 43.200 = 44.064."
        }
      ]
    },

    {
      id: 2,
      title: "Misión 2: Propiedades Conmutativa y Asociativa",
      icon: "🔄",
      badge: "Insignia del Equilibrio",
      description: "Comprueba que cambiar el orden o la agrupación de los factores simplifica cualquier cálculo.",
      questions: [
        {
          id: "m2_1",
          type: "multiple_choice",
          question: "Olivia coloca 14 estuches con 7 rotuladores cada uno, y Mateo coloca 7 estuches con 14 rotuladores. ¿Qué propiedad demuestra que ambos tienen 98 rotuladores?",
          options: [
            "Propiedad asociativa.",
            "Propiedad conmutativa: el orden de los factores no altera el producto (14 × 7 = 7 × 14).",
            "Propiedad distributiva respecto de la suma.",
            "Prueba de la multiplicación."
          ],
          correct: 1,
          explanation: "¡Exacto! En la propiedad conmutativa intercambiamos el orden de dos factores y el producto sigue siendo 98."
        },
        {
          id: "m2_2",
          type: "input",
          question: "Aplica la propiedad conmutativa para calcular mentalmente más fácil: 35 × 300 = 300 × 35 = ____",
          placeholder: "Escribe el producto...",
          accepted: ["10500", "10.500"],
          hint: "Multiplica 35 × 3 = 105 y añade los dos ceros del 300.",
          explanation: "¡Perfecto! 35 × 300 = 300 × 35 = 10.500."
        },
        {
          id: "m2_3",
          type: "multiple_choice",
          question: "¿Cómo conviene asociar los factores en 4 × 13 × 25 para resolverla de cabeza al instante?",
          options: [
            "(4 × 13) × 25 = 52 × 25.",
            "(4 × 25) × 13 = 100 × 13 = 1.300.",
            "(13 + 25) × 4 = 38 × 4.",
            "4 × (13 + 25) = 152."
          ],
          correct: 1,
          explanation: "¡Truco maestro! Como 4 × 25 = 100, agrupar esos dos factores primero te permite hacer 100 × 13 = 1.300 en un segundo."
        },
        {
          id: "m2_4",
          type: "input",
          question: "En una librería hay 5 estanterías con 4 cajas en cada una, y cada caja contiene 18 lápices de colores. ¿Cuántos lápices hay en total? Calcula (5 × 4) × 18.",
          placeholder: "Total de lápices...",
          accepted: ["360", "360 lapices", "360 lápices"],
          hint: "Primero calcula el paréntesis 5 × 4 = 20, y después multiplica 20 × 18.",
          explanation: "¡Brillante! (5 × 4) × 18 = 20 × 18 = 360 lápices (y también 5 × (4 × 18) = 5 × 72 = 360)."
        },
        {
          id: "m2_5",
          type: "multiple_choice",
          question: "¿Cuál de estas igualdades representa correctamente la PROPIEDAD ASOCIATIVA?",
          options: [
            "18 × (3 × 4) = (18 × 3) × 4",
            "18 × 4 = 4 × 18",
            "18 × (3 + 4) = (18 × 3) + (18 × 4)",
            "18 × 1 = 18"
          ],
          correct: 0,
          explanation: "¡Muy bien! En la propiedad asociativa los tres factores mantienen su orden y solo cambian los paréntesis que los agrupan (ambos lados dan 216)."
        }
      ]
    },

    {
      id: 3,
      title: "Misión 3: La Gran Propiedad Distributiva",
      icon: "✨",
      badge: "Insignia Distributiva",
      description: "Aplica la distributiva respecto a la suma y la resta por los dos caminos y domina el cálculo mental.",
      questions: [
        {
          id: "m3_1",
          type: "multiple_choice",
          question: "En un pack especial hay 7 rotuladores gruesos y 4 finos. Si compramos 3 packs, ¿cómo se expresa usando la propiedad distributiva?",
          options: [
            "3 × (7 + 4) = (3 × 7) + (3 × 4) = 21 + 12 = 33 rotuladores.",
            "3 × (7 + 4) = (3 × 7) + 4 = 25 rotuladores.",
            "3 + 7 + 4 = 14 rotuladores.",
            "3 × 7 × 4 = 84 rotuladores."
          ],
          correct: 0,
          explanation: "¡Exacto! El 3 se distribuye multiplicando tanto al 7 como al 4: 21 + 12 = 33 (igual que 3 × 11 = 33)."
        },
        {
          id: "m3_2",
          type: "input",
          question: "Aplica la propiedad distributiva respecto de la resta en (64 - 19) × 4 = (64 × 4) - (19 × 4). ¿Cuál es el resultado final?",
          placeholder: "Escribe el resultado...",
          accepted: ["180"],
          hint: "64 × 4 = 256 y 19 × 4 = 76; también puedes hacer primero 64 - 19 = 45 y multiplicar 45 × 4.",
          explanation: "¡Impecable! Por los dos caminos da 180: (64 × 4) - (19 × 4) = 256 - 76 = 180, y 45 × 4 = 180."
        },
        {
          id: "m3_3",
          type: "input",
          question: "Calcula mentalmente 6 × 34 descomponiendo el 34 en (30 + 4) con la propiedad distributiva:",
          placeholder: "Resultado de 6 × 34...",
          accepted: ["204"],
          hint: "Calcula (6 × 30) = 180 y (6 × 4) = 24; luego suma los dos.",
          explanation: "¡Cálculo mental pro! 6 × (30 + 4) = (6 × 30) + (6 × 4) = 180 + 24 = 204."
        },
        {
          id: "m3_4",
          type: "multiple_choice",
          question: "Valentina tenía 5 cajas de 18 lápices, pero de cada caja sacó 6 lápices para clase. ¿Qué pareja de operaciones calcula los lápices que quedan en las cajas?",
          options: [
            "5 × (18 - 6)  y  (5 × 18) - (5 × 6) = 60 lápices.",
            "5 × 18 - 6  y  5 × 12 = 84 lápices.",
            "(18 - 6) + 5  y  18 - 30.",
            "5 × (18 + 6) = 120 lápices."
          ],
          correct: 0,
          explanation: "¡De diez! En cada una de las 5 cajas quedan 12 lápices (5 × 12 = 60), y también es (5 × 18) - (5 × 6) = 90 - 30 = 60."
        },
        {
          id: "m3_5",
          type: "input",
          question: "Usa el mismo truco distributivo para calcular de cabeza 8 × 47:",
          placeholder: "Resultado de 8 × 47...",
          accepted: ["376"],
          hint: "Descompón 47 en 40 + 7: (8 × 40) + (8 × 7) = 320 + 56.",
          explanation: "¡Súper rápido! 8 × (40 + 7) = 320 + 56 = 376."
        }
      ]
    },

    {
      id: 4,
      title: "Misión 4: Radar de Estimaciones y Tablas",
      icon: "🎯",
      badge: "Insignia de la Estimación",
      description: "Estima productos en 1 y 2 pasos, completa tablas de almacén y calcula repartos aproximados.",
      questions: [
        {
          id: "m4_1",
          type: "multiple_choice",
          question: "En la papelería se venden 88 estuches de rotuladores (de 7 unidades) cada día. ¿Cuántos rotuladores se venderán aproximadamente en 6 días?",
          options: [
            "Unos 540 rotuladores (solo multiplicando 90 × 6).",
            "Unos 3.780 rotuladores: primero estimamos los estuches (90 × 6 = 540) y luego multiplicamos por 7 rotuladores (540 × 7 = 3.780).",
            "Unos 480 rotuladores.",
            "Unos 5.600 rotuladores."
          ],
          correct: 1,
          explanation: "¡Atenta a los 2 pasos! Primero redondeamos 88 a 90 y estimamos los estuches en 6 días: 90 × 6 = 540 estuches. Después multiplicamos por 7 rotuladores: 540 × 7 = 3.780 rotuladores."
        },
        {
          id: "m4_2",
          type: "input",
          question: "Para estimar rápidamente 312 × 4 redondeando el primer factor al mayor de sus órdenes (centenas), ¿qué producto estimado obtienes?",
          placeholder: "Producto estimado...",
          accepted: ["1200", "1.200"],
          hint: "312 está más cerca de 300 que de 400. Multiplica 300 × 4.",
          explanation: "¡Correcto! Como la decena de 312 es 1 (menor que 5), redondeamos a 300: 300 × 4 = 1.200."
        },
        {
          id: "m4_3",
          type: "input",
          question: "Estimación inversa: queremos tener unos 1.600 cuadernos en la tienda y vienen en packs de 4. ¿Cuántos packs aproximadamente debemos pedir?",
          placeholder: "Número de packs...",
          accepted: ["400", "400 packs", "400 paquetes"],
          hint: "Busca qué número multiplicado por 4 da 1.600 (pista: 4 × 4 = 16).",
          explanation: "¡Exacto! 400 × 4 = 1.600 cuadernos, así que necesitamos unos 400 packs."
        },
        {
          id: "m4_4",
          type: "multiple_choice",
          question: "Cada día de campamento compran 7 sobres de pegatinas (64 pegatinas por sobre). ¿Cuántas pegatinas comprarán aproximadamente en 8 días?",
          options: [
            "Unas 3.600 pegatinas (8 × 7 = 56 sobres ≈ 60 sobres; 64 ≈ 60 pegatinas → 60 × 60 = 3.600).",
            "Unas 640 pegatinas.",
            "Unas 560 pegatinas.",
            "Unas 360 pegatinas."
          ],
          correct: 0,
          explanation: "¡Razonamiento de 10! En 8 días son 8 × 7 = 56 sobres (redondeado a 60), y cada sobre tiene 64 pegatinas (redondeado a 60): 60 × 60 = 3.600 pegatinas."
        },
        {
          id: "m4_5",
          type: "multiple_choice",
          question: "Llegan 294 packs de cuadernos de cuadros, 112 de rayas y 86 lisos (cada pack tiene 4 cuadernos). Redondeando cada dato a las centenas, ¿cuántos cuadernos estimas que han llegado?",
          options: [
            "Unos 2.000 cuadernos: (300 + 100 + 100) × 4 = 500 × 4 = 2.000.",
            "Unos 1.200 cuadernos.",
            "Unos 500 cuadernos.",
            "Unos 4.000 cuadernos."
          ],
          correct: 0,
          explanation: "¡Perfecto! 294 → 300; 112 → 100; 86 → 100. En total unos 500 packs × 4 cuadernos = 2.000 cuadernos estimados."
        }
      ]
    },

    {
      id: 5,
      title: "Misión 5: Operaciones Combinadas y Doble/Triple",
      icon: "👑",
      badge: "Insignia de Estrategia",
      description: "Domina la jerarquía de paréntesis, sumas, restas y problemas de varios pasos con doble y triple.",
      questions: [
        {
          id: "m5_1",
          type: "input",
          question: "¡Cuidado con la trampa de jerarquía! Calcula el resultado correcto de: 18 + 6 × 7",
          placeholder: "Escribe el resultado...",
          accepted: ["60"],
          hint: "No sumes 18 + 6 primero. Empieza siempre por la multiplicación 6 × 7.",
          explanation: "¡No caíste en la trampa! Primero multiplicamos 6 × 7 = 42, y después sumamos 18 + 42 = 60."
        },
        {
          id: "m5_2",
          type: "multiple_choice",
          question: "A la papelería llega un pedido con 84 packs de cuadernos (de 4 cuadernos cada pack). Si en el estante ya quedaban 23 packs, ¿qué operación combinada da el total de cuadernos?",
          options: [
            "(84 + 23) × 4 = 107 × 4 = 428 cuadernos.",
            "84 + 23 × 4 = 84 + 92 = 176 cuadernos.",
            "84 × 4 + 23 = 336 + 23 = 359 cuadernos.",
            "(84 - 23) × 4 = 61 × 4 = 244 cuadernos."
          ],
          correct: 0,
          explanation: "¡Muy bien! Primero sumamos todos los packs que hay ahora (84 + 23 = 107) y multiplicamos por los 4 cuadernos de cada pack = 428 cuadernos."
        },
        {
          id: "m5_3",
          type: "input",
          question: "Elena tenía 3 cajas de lápices de colores (18 lápices cada una). Ha regalado 12 lápices a su primo y ha gastado 9 en clase de Plástica. ¿Cuántos lápices le quedan?",
          placeholder: "Lápices que quedan...",
          accepted: ["33", "33 lapices", "33 lápices"],
          hint: "Calcula primero cuántos lápices tenía en total (3 × 18 = 54) y luego réstale los 12 y los 9.",
          explanation: "¡Perfecto! 3 × 18 - (12 + 9) = 54 - 21 = 33 lápices quedan."
        },
        {
          id: "m5_4",
          type: "multiple_choice",
          question: "En un tarro de clase hay 26 fichas azules, el DOBLE de fichas rojas que de azules, y 45 fichas amarillas. ¿Cuántas fichas hay en total en el tarro?",
          options: [
            "97 fichas (26 + 26 + 45).",
            "123 fichas: 26 + (26 × 2) + 45 = 26 + 52 + 45 = 123.",
            "116 fichas (26 + 52 + 38).",
            "149 fichas."
          ],
          correct: 1,
          explanation: "¡Súper! El doble de 26 es 26 × 2 = 52 fichas rojas. Sumando todo: 26 + 52 + 45 = 123 fichas en total."
        },
        {
          id: "m5_5",
          type: "input",
          question: "Resuelve esta operación combinada con paréntesis: 4 × (15 + 9) - 16",
          placeholder: "Resultado final...",
          accepted: ["80"],
          hint: "1.º Paréntesis (15 + 9 = 24). 2.º Multiplicación (4 × 24 = 96). 3.º Resta 16.",
          explanation: "¡Excelente jerarquía! 15 + 9 = 24; 4 × 24 = 96; 96 - 16 = 80."
        }
      ]
    }
  ],

  // ===========================================================================
  // SIMULADOR DE EXAMEN (PRUEBA A Y PRUEBA B — 100% ORIGINALES Y SIN PISTAS CHIVATAS)
  // ===========================================================================
  exams: {
    // PRUEBA A: La Gran Papelería y Taller Creativo (Competencial)
    testA: {
      title: "Prueba A: La Gran Papelería y Taller Creativo",
      catalog: "papeleria",
      description: "Usa el catálogo de la papelería para calcular pedidos, completar tablas de almacén, estimar repartos y resolver operaciones combinadas.",
      context: "Olivia, Lucas y Mateo gestionan los pedidos escolares de la papelería. Tienen que revisar albaranes mirando el catálogo, estimar compras semanales y controlar el stock.",
      questions: [
        {
          id: "ta_1",
          type: "text_input",
          question: "Observa el catálogo de la papelería arriba. Realiza las siguientes multiplicaciones e indica qué artículo se calcula en cada caso:",
          inputs: [
            { label: "Resultado de 145 × 7", placeholder: "Escribe el número...", accepted: ["1015", "1.015"] },
            { label: "¿Qué artículo se calcula en 145 × 7?", placeholder: "Ej. folios, clips...", accepted: ["rotuladores", "rotulador", "estuches de rotuladores"] },
            { label: "Resultado de 426 × 100", placeholder: "Escribe el número...", accepted: ["42600", "42.600"] },
            { label: "¿Qué artículo se calcula en 426 × 100?", placeholder: "Nombre del artículo...", accepted: ["clips", "clip", "clips de colores"] },
            { label: "Resultado de 134 × 300", placeholder: "Escribe el número...", accepted: ["40200", "40.200"] },
            { label: "¿Qué artículo se calcula en 134 × 300?", placeholder: "Nombre del artículo...", accepted: ["folios", "folio", "folios reciclados"] }
          ],
          explanation: "145 × 7 = 1.015 rotuladores (vienen en estuches de 7). 426 × 100 = 42.600 clips (cajas de 100). 134 × 300 = 40.200 folios reciclados (paquetes de 300)."
        },
        {
          id: "ta_2",
          type: "text_input",
          question: "Para el almacén llegan 268 cajas de lápices de colores (18 lápices en cada caja). Calcula 268 × 18 en papel y escribe cada paso:",
          inputs: [
            { label: "Primer producto parcial (268 × 8 unidades)", placeholder: "Escribe el número...", accepted: ["2144", "2.144"] },
            { label: "Segundo producto parcial (268 × 1 decena)", placeholder: "268 o 2.680...", accepted: ["268", "2680", "2.680"] },
            { label: "Producto final (268 × 18)", placeholder: "Total de lápices...", accepted: ["4824", "4.824"] }
          ],
          explanation: "268 × 8 = 2.144; 268 × 10 = 2.680 (desplazado a las decenas); suma total: 2.144 + 2.680 = 4.824 lápices de colores."
        },
        {
          id: "ta_3",
          type: "table_estimate",
          question: "Completa la tabla con el número exacto de cuadernos (packs de 4) que han llegado hoy y estima el total redondeando los packs de cada tipo a las centenas:",
          unitSize: 4,
          unitLabel: "N.º de cuadernos (× 4)",
          packsLabel: "N.º de packs",
          columns: [
            { label: "Cuadros", packs: 312, exactAccepted: ["1248", "1.248"] },
            { label: "Rayas", packs: 189, exactAccepted: ["756"] },
            { label: "Lisos", packs: 104, exactAccepted: ["416"] }
          ],
          totalExactAccepted: ["2420", "2.420"],
          totalEstimatedAccepted: ["2400", "2.400"],
          explanation: "Exacto: 312 × 4 = 1.248; 189 × 4 = 756; 104 × 4 = 416; suma total = 2.420 cuadernos. Estimación a centenas: 300 + 200 + 100 = 600 packs → 600 × 4 = 2.400 cuadernos estimados."
        },
        {
          id: "ta_4",
          type: "text_input",
          question: "Piensa y resuelve estimando en DOS pasos: si en la papelería se venden 78 estuches de rotuladores cada día lectivo, ¿cuántos rotuladores se venderán aproximadamente en una semana escolar (5 días)?",
          inputs: [
            { label: "1.º Redondeo de 78 estuches a las decenas", placeholder: "Ej. 70 u 80...", accepted: ["80"] },
            { label: "2.º Estuches estimados en 5 días", placeholder: "Escribe el número...", accepted: ["400"] },
            { label: "3.º Rotuladores estimados en total (× 7 por estuche)", placeholder: "Escribe el total...", accepted: ["2800", "2.800"] }
          ],
          explanation: "78 se redondea a 80 estuches al día. En 5 días son 80 × 5 = 400 estuches. Como cada estuche tiene 7 rotuladores: 400 × 7 = 2.800 rotuladores estimados."
        },
        {
          id: "ta_5",
          type: "fill_blanks",
          question: "En el taller hay 5 baldas y en cada balda caben 4 cajas de lápices de colores (18 lápices por caja). Completa las dos formas de agrupar y escribe qué propiedad aplicas:",
          template: "Forma 1: (5 × 4) × 18 = {0} × 18 = {1}. Forma 2: 5 × (4 × 18) = 5 × {2} = {3}. Propiedad aplicada: {4}.",
          blanks: [
            { placeholder: "5 × 4...", accepted: ["20"] },
            { placeholder: "total 1...", accepted: ["360"] },
            { placeholder: "4 × 18...", accepted: ["72"] },
            { placeholder: "total 2...", accepted: ["360"] },
            { placeholder: "nombre propiedad...", accepted: ["asociativa", "propiedad asociativa"] }
          ],
          wordBank: ["asociativa", "conmutativa", "distributiva"],
          explanation: "(5 × 4) × 18 = 20 × 18 = 360, y 5 × (4 × 18) = 5 × 72 = 360. Al cambiar la agrupación con paréntesis aplicamos la propiedad asociativa."
        },
        {
          id: "ta_6",
          type: "text_input",
          question: "En 4 sobres de pegatinas (64 pegatinas cada sobre) se han usado 19 de cada sobre. Resuelve (64 - 19) × 4 por los DOS caminos (normal y propiedad distributiva) para comprobar que dan lo mismo:",
          inputs: [
            { label: "Camino 1 — Resta dentro del paréntesis (64 - 19)", placeholder: "Resultado...", accepted: ["45"] },
            { label: "Camino 1 — Multiplica por 4", placeholder: "Total...", accepted: ["180"] },
            { label: "Camino 2 (Distributiva) — Resultado de 64 × 4", placeholder: "Resultado...", accepted: ["256"] },
            { label: "Camino 2 (Distributiva) — Resultado de 19 × 4", placeholder: "Resultado...", accepted: ["76"] },
            { label: "Camino 2 — Diferencia final (256 - 76)", placeholder: "Total...", accepted: ["180"] }
          ],
          explanation: "Camino 1: 45 × 4 = 180. Camino 2 (distributiva): (64 × 4) - (19 × 4) = 256 - 76 = 180 pegatinas."
        },
        {
          id: "ta_7",
          type: "estimate_split",
          question: "Queremos tener en la tienda unos 2.100 rotuladores en total (es decir, unos 300 estuches de 7 rotuladores) repartidos entre tres colores. Escribe una combinación posible de estuches de cada color:",
          unitSize: 7,
          targetUnits: 2100,
          targetPacks: 300,
          minSum: 285,
          maxSum: 315,
          items: [
            { label: "Estuches de rotuladores azules", placeholder: "N.º estuches..." },
            { label: "Estuches de rotuladores verdes", placeholder: "N.º estuches..." },
            { label: "Estuches de rotuladores rojos", placeholder: "N.º estuches..." }
          ],
          explanation: "Como 2.100 : 7 = 300 estuches en total, cualquier combinación de 3 cantidades positivas que sume alrededor de 300 estuches (por ejemplo: 120 + 100 + 80 = 300 → 300 × 7 = 2.100 rotuladores) es válida."
        },
        {
          id: "ta_8",
          type: "multiple_choice",
          question: "Ha llegado una furgoneta con 74 packs de cuadernos (de 4 cada pack). Si en la estantería de la papelería ya había 28 packs, ¿cuántos cuadernos hay ahora en total para vender?",
          options: [
            "(74 + 28) × 4 = 102 × 4 = 408 cuadernos.",
            "74 + 28 × 4 = 74 + 112 = 186 cuadernos.",
            "74 × 4 + 28 = 296 + 28 = 324 cuadernos.",
            "(74 - 28) × 4 = 46 × 4 = 184 cuadernos."
          ],
          correct: 0,
          explanation: "Primero sumamos los packs que llegan y los que ya había: 74 + 28 = 102 packs. Después multiplicamos por 4 cuadernos: 102 × 4 = 408 cuadernos."
        },
        {
          id: "ta_9",
          type: "text_input",
          question: "Clara tenía en casa 3 cajas de lápices de colores del catálogo (18 lápices cada caja). Ha regalado 11 lápices a su hermano pequeño y ha gastado otros 13 en un mural del colegio. ¿Cuántos lápices le quedan?",
          inputs: [
            { label: "Lápices que le quedan a Clara", placeholder: "Escribe la cantidad...", accepted: ["30", "30 lapices", "30 lápices"] }
          ],
          explanation: "Operación combinada: (3 × 18) - (11 + 13) = 54 - 24 = 30 lápices le quedan."
        },
        {
          id: "ta_10",
          type: "text_input",
          question: "En el taller de arte quedaban 5 rotuladores sueltos. Compraron 3 estuches de rotuladores azules y 2 estuches de rotuladores rojos (recuerda mirar cuántos trae cada estuche en el catálogo). Durante la semana se secaron 6 azules y 8 rojos. ¿Cuántos rotuladores útiles quedan en total?",
          inputs: [
            { label: "Rotuladores útiles que quedan", placeholder: "Escribe el total...", accepted: ["26", "26 rotuladores"] }
          ],
          explanation: "Compraron (3 + 2) × 7 = 35 rotuladores. Con los 5 que quedaban tenían 5 + 35 = 40. Se secaron 6 + 8 = 14. Quedan 40 - 14 = 26 rotuladores útiles."
        }
      ]
    },

    // PRUEBA B: La Tienda de Deportes y Retos de Examen (Curricular Formal)
    testB: {
      title: "Prueba B: La Tienda de Deportes y Retos de Examen",
      catalog: "deportes",
      description: "Prueba formal basada en el catálogo deportivo: cálculos por 1, 2 y 3 cifras (con ceros intermedios), propiedades, estimaciones, jerarquía y problemas de triple.",
      context: "Revisa el catálogo deportivo para resolver los cálculos de pedidos, identificar propiedades sin pistas numéricas y superar las preguntas trampa típicas del examen.",
      questions: [
        {
          id: "tb_1",
          type: "text_input",
          question: "Observa el catálogo de deportes. Realiza la multiplicación 218 × 9 e indica qué artículo del catálogo se calcula:",
          inputs: [
            { label: "Resultado de 218 × 9", placeholder: "Escribe el producto...", accepted: ["1962", "1.962"] },
            { label: "¿Qué artículo del catálogo tiene 9 unidades por envase?", placeholder: "Nombre del artículo...", accepted: ["pelotas", "pelotas de tenis", "pelota"] }
          ],
          explanation: "218 × 9 = 1.962 pelotas de tenis (vienen en tubos de 9 pelotas)."
        },
        {
          id: "tb_2",
          type: "text_input",
          question: "Calcula mentalmente estos productos con ceros finales:",
          inputs: [
            { label: "34 × 400 (banderines en 34 cajas)", placeholder: "Escribe el número...", accepted: ["13600", "13.600"] },
            { label: "206 × 300", placeholder: "Escribe el número...", accepted: ["61800", "61.800"] },
            { label: "1.420 × 10 (pulseras en 1.420 bolsas)", placeholder: "Escribe el número...", accepted: ["14200", "14.200"] }
          ],
          explanation: "34 × 4 = 136 → 13.600; 206 × 3 = 618 → 61.800; 1.420 × 10 = 14.200."
        },
        {
          id: "tb_3",
          type: "text_input",
          question: "Calcula con papel y lápiz cuántas unidades hay en 415 cajas de conos de entrenamiento (32 conos por caja): 415 × 32.",
          inputs: [
            { label: "Producto de 415 × 32", placeholder: "Escribe el resultado...", accepted: ["13280", "13.280"] }
          ],
          explanation: "415 × 2 = 830; 415 × 30 = 12.450; suma: 830 + 12.450 = 13.280 conos."
        },
        {
          id: "tb_4",
          type: "text_input",
          question: "Multiplicación de 3 cifras con CERO intermedio: calcula 314 × 205 y escribe el resultado final.",
          inputs: [
            { label: "Producto de 314 × 205", placeholder: "Escribe el resultado...", accepted: ["64370", "64.370"] }
          ],
          explanation: "314 × 5 = 1.570; al ser 0 las decenas, saltamos dos lugares: 314 × 200 = 62.800. Suma: 1.570 + 62.800 = 64.370."
        },
        {
          id: "tb_5",
          type: "classify_inputs",
          question: "Identifica qué propiedad se aplica en cada igualdad escribiendo o pulsando 'conmutativa', 'asociativa' o 'distributiva':",
          items: [
            { name: "19 × 5 = 5 × 19", placeholder: "propiedad...", accepted: ["conmutativa"] },
            { name: "(4 × 10) × 3 = 4 × (10 × 3)", placeholder: "propiedad...", accepted: ["asociativa"] },
            { name: "3 × (9 + 6) = (3 × 9) + (3 × 6)", placeholder: "propiedad...", accepted: ["distributiva"] }
          ],
          quickOptions: ["conmutativa", "asociativa", "distributiva"],
          explanation: "19 × 5 = 5 × 19 intercambia el orden (conmutativa). (4 × 10) × 3 cambia los paréntesis (asociativa). 3 × (9 + 6) reparte el 3 sobre la suma (distributiva)."
        },
        {
          id: "tb_6",
          type: "text_input",
          question: "En 5 cajas de cromos (74 por caja) había 16 cromos repetidos en cada caja. Resuelve (74 - 16) × 5 aplicando la propiedad distributiva y comprueba que coincide:",
          inputs: [
            { label: "Camino 1 — Paréntesis primero: 58 × 5", placeholder: "Total...", accepted: ["290"] },
            { label: "Camino 2 (Distributiva) — 74 × 5", placeholder: "Resultado...", accepted: ["370"] },
            { label: "Camino 2 (Distributiva) — 16 × 5", placeholder: "Resultado...", accepted: ["80"] },
            { label: "Camino 2 — Diferencia final: 370 - 80", placeholder: "Total...", accepted: ["290"] }
          ],
          explanation: "Por ambos caminos obtenemos 290 cromos no repetidos: 58 × 5 = 290 y 370 - 80 = 290."
        },
        {
          id: "tb_7",
          type: "text_input",
          question: "¡Pregunta trampa! Respeta la jerarquía de las operaciones combinadas y calcula: 24 + 6 × 9",
          inputs: [
            { label: "Resultado de 24 + 6 × 9", placeholder: "Escribe el resultado...", accepted: ["78"] }
          ],
          explanation: "¡Primero la multiplicación! 6 × 9 = 54, y después sumamos: 24 + 54 = 78. (Hacer 30 × 9 = 270 es el error típico)."
        },
        {
          id: "tb_8",
          type: "multiple_choice",
          question: "Al campamento han llegado 487 packs de bidones deportivos (de 5 bidones cada pack). ¿Cuál es la mejor estimación redondeando los packs a las centenas?",
          options: [
            "487 se redondea a 500 → 500 × 5 = 2.500 bidones aproximadamente.",
            "487 se redondea a 400 → 400 × 5 = 2.000 bidones.",
            "487 se redondea a 480 → 480 × 5 = 2.400 bidones.",
            "487 se redondea a 1.000 → 1.000 × 5 = 5.000 bidones."
          ],
          correct: 0,
          explanation: "La decena de 487 es 8 (mayor o igual que 5), así que la centena más cercana es 500: 500 × 5 = 2.500 bidones."
        },
        {
          id: "tb_9",
          type: "text_input",
          question: "Resuelve paso a paso esta operación combinada: 3 × (16 + 9) - 18",
          inputs: [
            { label: "Resultado final", placeholder: "Escribe el número...", accepted: ["57"] }
          ],
          explanation: "1.º Paréntesis: 16 + 9 = 25. 2.º Multiplicación: 3 × 25 = 75. 3.º Resta: 75 - 18 = 57."
        },
        {
          id: "tb_10",
          type: "text_input",
          question: "En una caja de entrenamiento hay 18 conos azules, el TRIPLE de conos rojos que de azules, y 7 conos amarillos menos que azules. ¿Cuántos conos hay en total en la caja?",
          inputs: [
            { label: "Total de conos en la caja", placeholder: "Escribe el total...", accepted: ["83", "83 conos"] }
          ],
          explanation: "Azules: 18. Rojos (triple): 18 × 3 = 54. Amarillos (7 menos que azules): 18 - 7 = 11. Total: 18 + 54 + 11 = 83 conos."
        }
      ]
    }
  },

  // ===========================================================================
  // BANCO DINÁMICO PARA EL DESAFÍO EXPRESS (18 PREGUNTAS ORIGINALES)
  // ===========================================================================
  expressPool: [
    {
      question: "¿Cuánto es 70 × 8?",
      options: ["560", "5.600", "56", "540"],
      correct: 0,
      explanation: "7 × 8 = 56 y añades un cero: 560."
    },
    {
      question: "¿Cuánto es 400 × 6?",
      options: ["2.400", "240", "24.000", "2.000"],
      correct: 0,
      explanation: "4 × 6 = 24 y añades dos ceros: 2.400."
    },
    {
      question: "¿Qué propiedad dice que 19 × 5 = 5 × 19?",
      options: ["Propiedad Conmutativa", "Propiedad Asociativa", "Propiedad Distributiva", "Prueba de la suma"],
      correct: 0,
      explanation: "El orden de los factores no altera el producto: propiedad conmutativa."
    },
    {
      question: "En la igualdad (5 × 4) × 18 = 5 × (4 × 18), ¿qué propiedad se aplica?",
      options: ["Propiedad Asociativa", "Propiedad Conmutativa", "Propiedad Distributiva", "Propiedad Inversa"],
      correct: 0,
      explanation: "Se cambia la forma de agrupar los tres factores mediante paréntesis: propiedad asociativa."
    },
    {
      question: "¿Cuánto es 4 × (10 + 7)?",
      options: ["68", "47", "40", "21"],
      correct: 0,
      explanation: "4 × 17 = 68; o distribuyendo: (4 × 10) + (4 × 7) = 40 + 28 = 68."
    },
    {
      question: "¿Cuánto es 9 × 70?",
      options: ["630", "63", "6.300", "560"],
      correct: 0,
      explanation: "9 × 7 = 63 y añades un cero: 630."
    },
    {
      question: "¿Cuánto es 142 × 100?",
      options: ["14.200", "1.420", "142.000", "14.020"],
      correct: 0,
      explanation: "Al multiplicar por 100 añadimos dos ceros al final: 14.200."
    },
    {
      question: "Si redondeamos 487 a las centenas para estimar un producto, ¿qué número obtenemos?",
      options: ["500", "400", "490", "1.000"],
      correct: 0,
      explanation: "Como la decena es 8 (mayor o igual que 5), redondeamos hacia arriba a 500."
    },
    {
      question: "¿Cuánto es 102 × 30?",
      options: ["3.060", "306", "30.600", "3.600"],
      correct: 0,
      explanation: "102 × 3 = 306 y añadimos un cero: 3.060."
    },
    {
      question: "En la operación 24 + 6 × 9, ¿qué resultado da?",
      options: ["78", "270", "39", "144"],
      correct: 0,
      explanation: "Primero multiplicamos 6 × 9 = 54, y luego sumamos 24 + 54 = 78."
    },
    {
      question: "¿Cuánto es 8 × 300?",
      options: ["2.400", "240", "24.000", "2.800"],
      correct: 0,
      explanation: "8 × 3 = 24 y dos ceros: 2.400."
    },
    {
      question: "¿Qué propiedad se usa en 4 × (64 - 19) = (4 × 64) - (4 × 19)?",
      options: ["Distributiva respecto de la resta", "Conmutativa", "Asociativa", "De los ceros"],
      correct: 0,
      explanation: "El factor 4 se distribuye multiplicando a los dos términos de la resta."
    },
    {
      question: "¿Cuánto es el TRIPLE de 18?",
      options: ["54", "36", "48", "64"],
      correct: 0,
      explanation: "El triple es multiplicar por 3: 18 × 3 = 54."
    },
    {
      question: "¿Cuánto es 4 × 25 × 7?",
      options: ["700", "175", "7.000", "280"],
      correct: 0,
      explanation: "Asociamos primero 4 × 25 = 100, y luego 100 × 7 = 700."
    },
    {
      question: "¿Cuánto es 50 × 40?",
      options: ["2.000", "200", "20.000", "900"],
      correct: 0,
      explanation: "5 × 4 = 20 y añades los dos ceros: 2.000."
    },
    {
      question: "Al multiplicar 216 × 204 en vertical, ¿qué hacemos al llegar al 0 de las decenas?",
      options: [
        "Saltamos dos lugares a la izquierda para escribir directamente el producto por las centenas.",
        "Lo multiplicamos igual que si fuera un 1.",
        "Ponemos el resultado debajo de las unidades.",
        "Se borra el 4 y solo se multiplica por 200."
      ],
      correct: 0,
      explanation: "Como hay 0 decenas, desplazamos el producto de las centenas dos lugares a la izquierda (hueco de unidades y decenas)."
    },
    {
      question: "Si 1 pack trae 4 cuadernos, ¿cuántos packs necesito para tener unos 1.600 cuadernos?",
      options: ["400 packs", "40 packs", "4.000 packs", "160 packs"],
      correct: 0,
      explanation: "400 × 4 = 1.600 cuadernos."
    },
    {
      question: "¿Cuánto es 3 × (12 + 8) - 10?",
      options: ["50", "34", "60", "30"],
      correct: 0,
      explanation: "Paréntesis: 12 + 8 = 20. Multiplicación: 3 × 20 = 60. Resta: 60 - 10 = 50."
    }
  ],

  // ===========================================================================
  // ARCADE DE MULTIPLICACIÓN (3 MODALIDADES CONTRARRELOJ DE 45 SEGUNDOS)
  // ===========================================================================
  arcadeModes: [
    {
      id: "tablas",
      title: "Tablas Relámpago y Ceros Mágicos",
      icon: "⚡",
      badge: "Maestra del Rayo",
      description: "Resuelve multiplicaciones directas con decenas y centenas netas antes de que se agote el tiempo.",
      generator: function() {
        var base1 = [3, 4, 5, 6, 7, 8, 9, 12, 14, 18, 25];
        var base2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 300, 400];
        var n1 = base1[Math.floor(Math.random() * base1.length)];
        var n2 = base2[Math.floor(Math.random() * base2.length)];
        var prod = n1 * n2;
        var candidates = [
          prod + 10,
          prod + 100,
          (n1 + 1) * n2,
          (n1 - 1) * n2,
          prod * 10,
          Math.max(10, Math.floor(prod / 10)),
          prod + 20
        ];
        var set = new Set([prod]);
        for (var i = 0; i < candidates.length && set.size < 4; i++) {
          if (candidates[i] > 0 && candidates[i] !== prod) {
            set.add(candidates[i]);
          }
        }
        var options = Array.from(set).sort(function() { return 0.5 - Math.random(); });
        var correctIdx = options.indexOf(prod);
        return {
          question: "¿Cuánto es " + n1 + " × " + n2 + "?",
          options: options.map(function(v) { return v.toLocaleString("es-ES"); }),
          correct: correctIdx
        };
      }
    },
    {
      id: "propiedades",
      title: "Caza la Propiedad",
      icon: "🎯",
      badge: "Detective de Propiedades",
      description: "Mira la igualdad matemática y selecciona a toda prisa si es Conmutativa, Asociativa o Distributiva.",
      generator: function() {
        var types = [
          {
            prop: "Conmutativa",
            eqs: [
              "14 × 7 = 7 × 14",
              "35 × 300 = 300 × 35",
              "19 × 5 = 5 × 19",
              "34 × 400 = 400 × 34",
              "68 × 9 = 9 × 68"
            ]
          },
          {
            prop: "Asociativa",
            eqs: [
              "(5 × 4) × 18 = 5 × (4 × 18)",
              "18 × (3 × 4) = (18 × 3) × 4",
              "(4 × 10) × 3 = 4 × (10 × 3)",
              "(4 × 25) × 13 = 4 × (25 × 13)"
            ]
          },
          {
            prop: "Distributiva",
            eqs: [
              "3 × (7 + 4) = (3 × 7) + (3 × 4)",
              "(64 - 19) × 4 = (64 × 4) - (19 × 4)",
              "5 × (18 - 6) = (5 × 18) - (5 × 6)",
              "6 × (30 + 4) = 180 + 24"
            ]
          }
        ];
        var item = types[Math.floor(Math.random() * types.length)];
        var eq = item.eqs[Math.floor(Math.random() * item.eqs.length)];
        var options = ["Conmutativa", "Asociativa", "Distributiva"];
        return {
          question: "¿Qué propiedad es: " + eq + " ?",
          options: options,
          correct: options.indexOf(item.prop)
        };
      }
    },
    {
      id: "estimacion",
      title: "¿Mayor o Menor que 1.000?",
      icon: "⚖️",
      badge: "Ojo de Halcón",
      description: "Estima de cabeza en un parpadeo si el producto supera 1.000 o se queda por debajo.",
      generator: function() {
        var pairs = [
          { q: "48 × 20", prod: 48 * 20 },   // 960
          { q: "52 × 20", prod: 52 * 20 },   // 1.040
          { q: "140 × 8", prod: 140 * 8 },   // 1.120
          { q: "310 × 4", prod: 310 * 4 },   // 1.240
          { q: "19 × 50", prod: 19 * 50 },   // 950
          { q: "250 × 5", prod: 250 * 5 },   // 1.250
          { q: "180 × 5", prod: 180 * 5 },   // 900
          { q: "98 × 10", prod: 98 * 10 },   // 980
          { q: "106 × 10", prod: 106 * 10 }, // 1.060
          { q: "35 × 30", prod: 35 * 30 },   // 1.050
          { q: "24 × 40", prod: 24 * 40 }    // 960
        ];
        var item = pairs[Math.floor(Math.random() * pairs.length)];
        var isMayor = item.prod > 1000;
        var options = ["Mayor que 1.000 (> 1.000)", "Menor o igual a 1.000 (≤ 1.000)"];
        var correct = isMayor ? 0 : 1;
        return {
          question: "¿El producto de " + item.q + " es...?",
          options: options,
          correct: correct
        };
      }
    }
  ],

  // ===========================================================================
  // TALLER INTERACTIVO / LABORATORIO DE MULTIPLICAR
  // ===========================================================================
  lab: {
    title: "Laboratorio Interactivo de Multiplicación",
    funFacts: [
      {
        title: "El truco de los dedos en la Tabla del 9",
        icon: "🖐️",
        text: "Pon tus 10 dedos sobre la mesa. Para calcular 9 × 4, baja el cuarto dedo (el anular izquierdo). A la izquierda te quedan 3 dedos (decenas = 30) y a la derecha te quedan 6 dedos (unidades = 6). ¡El resultado es 36! ¡Funciona siempre del 1 al 10!"
      },
      {
        title: "Multiplicar por 11 en un segundo",
        icon: "⚡",
        text: "Para multiplicar un número de 2 cifras por 11 (por ejemplo, 35 × 11), solo suma sus cifras: 3 + 5 = 8. Coloca ese 8 en medio: ¡385! ¡Pruébalo con 42 × 11: 4 + 2 = 6, el resultado es 462!"
      },
      {
        title: "Los Antiguos Egipcios multiplicaban doblando",
        icon: "🏛️",
        text: "Hace más de 4.000 años, los escribas egipcios no sabían las tablas de multiplicar como nosotros. Calculaban doblando los números una y otra vez (haciendo sumas dobles) y luego sumando las partes que necesitaban."
      },
      {
        title: "¿Sabías que el signo '×' tiene casi 400 años?",
        icon: "✍️",
        text: "El matemático inglés William Oughtred inventó el aspa '×' en el año 1631 porque se parecía a la cruz de San Andrés. En los ordenadores modernos también usamos el asterisco '*' para no confundirlo con la letra 'x'."
      }
    ]
  },

  // ===========================================================================
  // ESQUEMAS VISUALES DE REPASO (SIN NÚMEROS DEL LIBRO)
  // ===========================================================================
  cheatsheet: {
    title: "Esquemas Visuales de Repaso · Unidad 3",
    sections: [
      {
        title: "1. Términos de la Multiplicación",
        icon: "📦",
        content: "• <b>Factores:</b> Los números que multiplicamos entre sí.<br>• <b>Producto:</b> El resultado final.<br>• <b>Ejemplo:</b> En 136 × 7 = 952, <b>136</b> y <b>7</b> son los factores y <b>952</b> es el producto."
      },
      {
        title: "2. Las 3 Propiedades Fundamentales",
        icon: "🔄",
        content: "• <b>Conmutativa:</b> El orden de los factores no altera el producto.<br>&nbsp;&nbsp;<i>Ejemplo:</i> 14 × 7 = 7 × 14 = 98.<br>• <b>Asociativa:</b> Para multiplicar tres factores, asociamos dos primero.<br>&nbsp;&nbsp;<i>Ejemplo:</i> (5 × 4) × 18 = 5 × (4 × 18) = 360.<br>• <b>Distributiva:</b> Se multiplica por cada término del paréntesis.<br>&nbsp;&nbsp;<i>Suma:</i> 3 × (7 + 4) = (3 × 7) + (3 × 4) = 21 + 12 = 33.<br>&nbsp;&nbsp;<i>Resta:</i> (64 - 19) × 4 = (64 × 4) - (19 × 4) = 256 - 76 = 180."
      },
      {
        title: "3. Ceros Finales y Ceros Intermedios",
        icon: "0️⃣",
        content: "• <b>Por 10, 100, 1.000:</b> Añade 1, 2 o 3 ceros al final.<br>&nbsp;&nbsp;1.420 × 10 = 14.200 &nbsp;|&nbsp; 248 × 100 = 24.800.<br>• <b>Por 200, 300, 400:</b> Multiplica sin ceros y añádelos al final.<br>&nbsp;&nbsp;206 × 300 = 61.800 (206 × 3 = 618 y dos ceros).<br>• <b>Cero intermedio (ej. 216 × 204):</b> Multiplica por las unidades (4) y, como hay 0 decenas, salta dos huecos a la izquierda para multiplicar por las centenas (2)."
      },
      {
        title: "4. Estimación de Productos",
        icon: "🎯",
        content: "1. Redondea el factor al mayor de sus órdenes (decena o centena).<br>2. Regla del 5: si la cifra siguiente es 5 o mayor, sumas 1; si es menor que 5, se queda igual.<br>3. Multiplica el número redondeado: 78 × 5 ≈ 80 × 5 = 400."
      },
      {
        title: "5. Jerarquía de Operaciones Combinadas",
        icon: "👑",
        content: "<b>1.º Paréntesis ()</b> siempre en primer lugar.<br><b>2.º Multiplicaciones (×)</b> antes que sumas o restas.<br><b>3.º Sumas y restas (+ -)</b> de izquierda a derecha.<br><i>¡Trampa de examen!</i> En 24 + 6 × 9, primero se hace 6 × 9 = 54, y luego 24 + 54 = 78."
      },
      {
        title: "6. Truco para Doble y Triple",
        icon: "✨",
        content: "• <b>Doble:</b> Multiplicar por <b>2</b> (el doble de 26 es 26 × 2 = 52).<br>• <b>Triple:</b> Multiplicar por <b>3</b> (el triple de 18 es 18 × 3 = 54)."
      }
    ]
  }
};

// Exportar para navegador y Node
if (typeof window !== "undefined") {
  window.MATH_DATA = MATH_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = MATH_DATA;
}
