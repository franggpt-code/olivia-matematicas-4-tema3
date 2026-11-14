// =============================================================================
// BANCO PEDAGÓGICO DE DATOS · MATEMÁTICAS 4.º PRIMARIA · TEMA 3
// Proyecto CLAVES / Construyendo Mundos (Grazalema - Santillana)
// "La Multiplicación" · Entrenador Personal de Olivia
// =============================================================================

const MATH_DATA = {
  meta: {
    title: "Matemáticas 4.º Primaria · Tema 3",
    unit: "Tema 3: La Multiplicación",
    subject: "Matemáticas",
    student: "Olivia",
    grade: "4.º Educación Primaria",
    schoolProject: "Proyecto CLAVES · Construyendo Mundos (Santillana)",
    version: "1.0.0"
  },

  // ===========================================================================
  // 5 MISIONES DIDÁCTICAS TEMÁTICAS (5 PREGUNTAS FORMATIVAS CADA UNA = 25 RETOS)
  // ===========================================================================
  missions: [
    {
      id: 1,
      title: "Misión 1: Multiplicaciones de Campeona y Factores con Ceros",
      icon: "📦",
      badge: "Insignia del Almacén",
      description: "Domina el cálculo de productos por 1, 2 y 3 cifras, ceros finales y el cálculo de unidades en cajas.",
      questions: [
        {
          id: "m1_1",
          question: "¿Cuáles son los términos de la multiplicación 125 × 8 = 1.000?",
          options: [
            "125 y 8 son los sumandos, y 1.000 es la suma total.",
            "125 y 8 son los factores, y 1.000 es el producto.",
            "125 es el dividendo, 8 es el divisor y 1.000 el cociente.",
            "125 es el minuendo, 8 el sustraendo y 1.000 la diferencia."
          ],
          correct: 1,
          explanation: "¡Exacto! Los números que se multiplican se llaman FACTORES y el resultado final se llama PRODUCTO."
        },
        {
          id: "m1_2",
          question: "En el almacén ecológico hay 1.305 sobres con 10 lonchas de queso cada uno. ¿Cuántas lonchas hay en total?",
          options: [
            "13.050 lonchas.",
            "1.315 lonchas.",
            "130.500 lonchas.",
            "1.305 lonchas."
          ],
          correct: 0,
          explanation: "¡Brillante! Para multiplicar un número por 10, solo añadimos un cero al final: 1.305 × 10 = 13.050 lonchas."
        },
        {
          id: "m1_3",
          question: "Olivia prepara un pedido con 109 paquetes de 200 servilletas de bambú. ¿Cuántas servilletas hay en total?",
          options: [
            "2.180 servilletas.",
            "21.800 servilletas.",
            "20.900 servilletas.",
            "218.000 servilletas."
          ],
          correct: 1,
          explanation: "¡Excelente! Multiplicamos 109 × 2 = 218 y añadimos los dos ceros del 200: 21.800 servilletas."
        },
        {
          id: "m1_4",
          question: "Lucas y Mateo van a calcular 1.012 × 24. Al multiplicar por las 2 decenas del número 24, ¿dónde deben escribir el primer número?",
          options: [
            "Debajo de las unidades, justo debajo del primer producto.",
            "Desplazado un lugar hacia la izquierda, debajo de la columna de las decenas.",
            "A la derecha del todo, añadiendo una coma.",
            "Arriba del todo junto al 1.012."
          ],
          correct: 1,
          explanation: "¡Regla de oro! Como el 2 vale 20 (2 decenas), se deja libre el hueco de las unidades y se escribe debajo de las decenas: 1.012 × 24 = 24.288."
        },
        {
          id: "m1_5",
          question: "En una furgoneta entran 354 cajas con 82 botes de aceitunas cada una. ¿Cuántos botes de aceitunas transporta en total?",
          options: [
            "28.320 botes.",
            "29.028 botes.",
            "27.842 botes.",
            "30.150 botes."
          ],
          correct: 1,
          explanation: "¡Genial! 354 × 2 = 708; 354 × 80 = 28.320; 708 + 28.320 = 29.028 botes."
        }
      ]
    },

    {
      id: 2,
      title: "Misión 2: Propiedad Conmutativa y el Orden Secreto",
      icon: "🔄",
      badge: "Insignia Conmutativa",
      description: "Descubre por qué cambiar el orden de los factores nunca cambia el resultado de tu compra.",
      questions: [
        {
          id: "m2_1",
          question: "¿Qué dice la Propiedad Conmutativa de la multiplicación?",
          options: [
            "Que al multiplicar por cero el resultado siempre es cero.",
            "Que el orden de los factores no altera el producto (a × b = b × a).",
            "Que siempre hay que sumar antes de multiplicar.",
            "Que solo se pueden multiplicar números pares."
          ],
          correct: 1,
          explanation: "¡Así es! Da igual hacer 16 × 6 que 6 × 16, el resultado siempre es 96."
        },
        {
          id: "m2_2",
          question: "Elena organiza botes de mermelada: tiene 25 cajas con 200 botes cada una. Dice que da lo mismo que tener 200 cajas con 25 botes. ¿Es correcto?",
          options: [
            "No, porque 200 cajas ocupan mucho más espacio.",
            "Sí, porque por la propiedad conmutativa 25 × 200 = 200 × 25 = 5.000 botes.",
            "No, una de las dos formas da 50.000 botes.",
            "Solo si los botes son de fresa."
          ],
          correct: 1,
          explanation: "¡Exacto! 25 × 200 = 5.000 y 200 × 25 = 5.000. El orden no cambia la cantidad total de botes."
        },
        {
          id: "m2_3",
          question: "¿Cuál de estas igualdades representa la PROPIEDAD CONMUTATIVA?",
          options: [
            "4 × (5 + 2) = (4 × 5) + (4 × 2)",
            "(3 × 4) × 5 = 3 × (4 × 5)",
            "18 × 7 = 7 × 18",
            "12 × 1 = 12"
          ],
          correct: 2,
          explanation: "¡Bien visto! En 18 × 7 = 7 × 18 solo se ha cambiado el orden de los dos factores."
        },
        {
          id: "m2_4",
          question: "Completa el término que falta para que se cumpla la igualdad: 45 × 12 = ____ × 45",
          options: [
            "45",
            "12",
            "1",
            "540"
          ],
          correct: 1,
          explanation: "¡Súper! 45 × 12 = 12 × 45. Falta el número 12 para cumplir la propiedad conmutativa."
        },
        {
          id: "m2_5",
          question: "¿Por qué es tan útil la propiedad conmutativa para calcular de cabeza?",
          options: [
            "Porque si nos cuesta calcular 4 × 75, podemos calcular 75 × 4 (75 + 75 = 150, y 150 + 150 = 300) y obtener el mismo resultado.",
            "Porque permite borrar los números que no nos gusten.",
            "Porque convierte las multiplicaciones en restas.",
            "Porque solo funciona con la tabla del 2."
          ],
          correct: 0,
          explanation: "¡Cálculo mental pro! Elegir el orden más fácil nos ahorra tiempo y evita equivocarnos."
        }
      ]
    },

    {
      id: 3,
      title: "Misión 3: Propiedad Asociativa y los Tres Factores",
      icon: "🔗",
      badge: "Insignia Asociativa",
      description: "Aprende a agrupar tres factores con paréntesis de la forma más fácil y rápida.",
      questions: [
        {
          id: "m3_1",
          question: "¿Qué nos enseña la Propiedad Asociativa de la multiplicación?",
          options: [
            "Que para multiplicar tres números, podemos agrupar dos de ellos primero y el resultado multiplicarlo por el tercero: (a × b) × c = a × (b × c).",
            "Que siempre hay que empezar multiplicando por la izquierda obligatoriamente.",
            "Que si sumamos los factores el resultado no cambia.",
            "Que no se pueden usar paréntesis en matemáticas."
          ],
          correct: 0,
          explanation: "¡Correcto! Da igual qué dos factores multipliquemos primero dentro del paréntesis, el producto final no varía."
        },
        {
          id: "m3_2",
          question: "Calcula (3 × 10) × 2 y comprueba si da lo mismo que 3 × (10 × 2):",
          options: [
            "El primero da 30 y el segundo da 60.",
            "Ambos dan exactamente 60: (30 × 2 = 60 y 3 × 20 = 60).",
            "Ambos dan 120.",
            "El primero da 60 y el segundo da 20."
          ],
          correct: 1,
          explanation: "¡Perfecto! (3 × 10) × 2 = 30 × 2 = 60; y 3 × (10 × 2) = 3 × 20 = 60."
        },
        {
          id: "m3_3",
          question: "En una estantería hay 6 filas con 3 paquetes de papel cada una, y cada paquete tiene 24 rollos. ¿Qué operación calcula el total?",
          options: [
            "(6 × 3) × 24 o también 6 × (3 × 24).",
            "6 + 3 + 24.",
            "(6 × 3) + 24.",
            "6 × 3 - 24."
          ],
          correct: 0,
          explanation: "¡Muy bien! (6 × 3) × 24 = 18 × 24 = 432 rollos; y 6 × (3 × 24) = 6 × 72 = 432 rollos."
        },
        {
          id: "m3_4",
          question: "Olivia tiene que multiplicar 5 × 19 × 2. ¿Cómo le conviene asociar los factores para calcular de cabeza al instante?",
          options: [
            "(5 × 19) × 2 = 95 × 2 = 190.",
            "(5 × 2) × 19 = 10 × 19 = 190.",
            "No se puede calcular de cabeza.",
            "(19 × 2) + 5."
          ],
          correct: 1,
          explanation: "¡Truco maestro! Multiplicar primero 5 × 2 = 10 es facilísimo, porque luego 10 × 19 son 190 directos."
        },
        {
          id: "m3_5",
          question: "¿Cuál de las siguientes igualdades es un ejemplo de la PROPIEDAD ASOCIATIVA?",
          options: [
            "24 × (3 × 6) = (24 × 3) × 6",
            "24 × 3 = 3 × 24",
            "24 × (3 + 6) = (24 × 3) + (24 × 6)",
            "24 × 0 = 0"
          ],
          correct: 0,
          explanation: "¡Genial! Los tres números siguen en el mismo orden, solo han cambiado los paréntesis que los agrupan."
        }
      ]
    },

    {
      id: 4,
      title: "Misión 4: La Gran Propiedad Distributiva",
      icon: "✨",
      badge: "Insignia Distributiva",
      description: "Reparte la multiplicación entre la suma y la resta para resolver problemas y calcular como una calculadora humana.",
      questions: [
        {
          id: "m4_1",
          question: "¿En qué consiste la Propiedad Distributiva respecto de la suma?",
          options: [
            "Multiplicar un número por una suma es igual a multiplicar ese número por cada sumando y después sumar los resultados: a × (b + c) = (a × b) + (a × c).",
            "Consiste en restar todos los números.",
            "Consiste en sumar el primer número y olvidar el paréntesis.",
            "Es cambiar el orden de los números."
          ],
          correct: 0,
          explanation: "¡Exacto! El factor de fuera 'se reparte' multiplicando a cada término del interior del paréntesis."
        },
        {
          id: "m4_2",
          question: "Calcula 2 × (8 + 5) aplicando la propiedad distributiva:",
          options: [
            "2 × 8 + 5 = 16 + 5 = 21.",
            "(2 × 8) + (2 × 5) = 16 + 10 = 26.",
            "2 + 8 + 5 = 15.",
            "2 × 40 = 80."
          ],
          correct: 1,
          explanation: "¡Impecable! 2 × (8 + 5) = 2 × 13 = 26; o distribuyendo: (2 × 8) + (2 × 5) = 16 + 10 = 26."
        },
        {
          id: "m4_3",
          question: "¿Cómo se aplica la propiedad distributiva respecto de la RESTA en (82 - 15) × 3?",
          options: [
            "(82 × 3) - (15 × 3) = 246 - 45 = 201.",
            "(82 - 15) + 3 = 67 + 3 = 70.",
            "82 - (15 × 3) = 82 - 45 = 37.",
            "82 × 15 × 3 = 3.690."
          ],
          correct: 0,
          explanation: "¡De diez! El 3 multiplica tanto al 82 como al 15: 246 - 45 = 201 (igual que 67 × 3 = 201)."
        },
        {
          id: "m4_4",
          question: "Olivia quiere calcular 7 × 43 de cabeza. ¿Cómo puede usar la propiedad distributiva?",
          options: [
            "7 × (40 + 3) = (7 × 40) + (7 × 3) = 280 + 21 = 301.",
            "7 × 40 = 280 y se olvida del 3.",
            "7 + 40 + 3 = 50.",
            "7 × 4 × 3 = 84."
          ],
          correct: 0,
          explanation: "¡Magia matemática! Descomponer 43 en 40 + 3 nos permite resolverlo de cabeza en dos segundos."
        },
        {
          id: "m4_5",
          question: "Lucas tiene 3 cajas con 80 manzanas cada una. Si de cada caja se han comido 15 manzanas, ¿qué operación representa las que quedan?",
          options: [
            "3 × 80 - 15.",
            "3 × (80 - 15) = (3 × 80) - (3 × 15) = 240 - 45 = 195 manzanas.",
            "3 + 80 - 15 = 68.",
            "80 - (15 × 3) = 35."
          ],
          correct: 1,
          explanation: "¡Perfecto! En cada una de las 3 cajas quedan (80 - 15) manzanas: 3 × 65 = 195 manzanas."
        }
      ]
    },

    {
      id: 5,
      title: "Misión 5: Radar de Estimaciones y Operaciones Combinadas",
      icon: "🎯",
      badge: "Insignia Estratégica",
      description: "Aprende a redondear antes de multiplicar para anticipar resultados y domina la jerarquía de operaciones.",
      questions: [
        {
          id: "m5_1",
          question: "En una tienda se venden cada día 96 paquetes de yogures. Para estimar cuántos paquetes se venderán en 1 semana (7 días), ¿cómo redondeamos 96?",
          options: [
            "A la decena: 90 × 7 = 630.",
            "A la centena más cercana: 96 se redondea a 100, luego 100 × 7 = 700 paquetes aproximadamente.",
            "Al millar: 1.000 × 7 = 7.000.",
            "No se puede redondear porque termina en 6."
          ],
          correct: 1,
          explanation: "¡Exacto! Como 96 está casi en 100, redondeamos a 100: 100 × 7 = 700 paquetes estimados."
        },
        {
          id: "m5_2",
          question: "Si queremos tener unos 1.200 briks de leche y los paquetes vienen de 6 en 6, ¿cuántos paquetes aproximadamente debemos encargar?",
          options: [
            "Unos 20 paquetes.",
            "Unos 200 paquetes, porque 200 × 6 = 1.200.",
            "Unos 12 paquetes.",
            "Unos 2.000 paquetes."
          ],
          correct: 1,
          explanation: "¡Brillante estimación inversa! 1.200 dividido entre 6 da 200 paquetes exactos."
        },
        {
          id: "m5_3",
          question: "¿Cuál es el orden SAGRADO de las operaciones combinadas?",
          options: [
            "1.º Paréntesis, 2.º Multiplicaciones, 3.º Sumas y restas de izquierda a derecha.",
            "1.º Sumas, 2.º Paréntesis, 3.º Multiplicaciones.",
            "Siempre de derecha a izquierda sin importar los signos.",
            "Primero las restas, luego las multiplicaciones y al final los paréntesis."
          ],
          correct: 0,
          explanation: "¡La regla de oro! Primero resolvemos lo que esté dentro de los paréntesis, después las multiplicaciones y por último sumas y restas."
        },
        {
          id: "m5_4",
          question: "Al almacén ha llegado un camión con 96 paquetes de leche (de 6 briks cada uno). Si ya había 17 paquetes, ¿cuántos briks de leche hay en total?",
          options: [
            "(96 + 17) × 6 = 113 × 6 = 678 briks.",
            "96 + 17 × 6 = 96 + 102 = 198 briks.",
            "96 × 6 + 17 = 576 + 17 = 593 briks.",
            "(96 - 17) × 6 = 474 briks."
          ],
          correct: 0,
          explanation: "¡Impecable! Sumamos todos los paquetes que hay ahora (96 + 17 = 113) y multiplicamos por 6 briks de cada paquete = 678 briks."
        },
        {
          id: "m5_5",
          question: "Valentina tenía en casa 2 paquetes de 24 rollos de papel ecológico. Ha llevado 15 a la autocaravana y gastado 14 en el taller. ¿Cuántos rollos quedan?",
          options: [
            "(2 × 24) - (15 + 14) = 48 - 29 = 19 rollos.",
            "2 × 24 + 15 + 14 = 77 rollos.",
            "24 - 15 - 14 = -5 rollos.",
            "(2 + 24) - 29 = 26 - 29."
          ],
          correct: 0,
          explanation: "¡Súper resuelto! Tenía 48 rollos en total y ha gastado 15 + 14 = 29 rollos. 48 - 29 = 19 rollos restantes."
        }
      ]
    }
  ],

  // ===========================================================================
  // SIMULADOR DE EXAMEN (PRUEBA A COMPETENCIAL Y PRUEBA B CURRICULAR FORMAL)
  // Con fill_blanks, text_input, classify_inputs y multiple_choice
  // ===========================================================================
  exams: {
    // PRUEBA A: El Gran Pedido del Ecomercado (Contextualizado con nuevos personajes)
    testA: {
      title: "Prueba A: El Gran Pedido del Ecomercado",
      description: "Acompaña a Olivia, Lucas y Mateo a gestionar la recepción y distribución de suministros ecológicos en el almacén central.",
      context: "En el Ecomercado llegan palés con cajas de fruta, lácteos de avena, briks de zumo y conservas. El equipo debe revisar albaranes, aplicar propiedades para organizar estanterías y resolver pedidos con operaciones combinadas.",
      questions: [
        {
          id: "ta_1",
          type: "fill_blanks",
          question: "Lucas recibe el primer albarán con productos especiales. Rellena los huecos con el producto total de cada línea:",
          template: "Llegan 125 cajas con 8 tarros de miel artesana, lo que da un total de {0} tarros. Además, llegan 1.305 sobres con 10 lonchas de queso vegetal, que son {1} lonchas en total. Por último, 109 cajas de 200 servilletas de bambú suman {2} servilletas.",
          blanks: [
            { placeholder: "tarros...", accepted: ["1.000", "1000"] },
            { placeholder: "lonchas...", accepted: ["13.050", "13050"] },
            { placeholder: "servilletas...", accepted: ["21.800", "21800"] }
          ],
          wordBank: ["1.000", "13.050", "21.800", "1.250", "13.500", "2.180"],
          explanation: "125 × 8 = 1.000; 1.305 × 10 = 13.050; 109 × 200 = 21.800 (109 × 2 = 218 más dos ceros)."
        },
        {
          id: "ta_2",
          type: "text_input",
          question: "Mateo tiene que calcular una multiplicación de dos cifras para el albarán de conservas: ha recibido 354 cajas con 82 botes de aceitunas cada una. Realiza la multiplicación y escribe los resultados:",
          inputs: [
            { label: "Producto del primer paso (354 × 2 unidades)", placeholder: "Escribe el número...", accepted: ["708"] },
            { label: "Producto del segundo paso (354 × 8 decenas)", placeholder: "Escribe el número (2.832 o 28.320)...", accepted: ["2832", "2.832", "28.320", "28320"] },
            { label: "Resultado final de botes (354 × 82)", placeholder: "Escribe el producto final...", accepted: ["29.028", "29028"] }
          ],
          wordBank: ["708", "2.832", "28.320", "29.028", "27.500"],
          explanation: "354 × 2 = 708; 354 × 80 = 28.320; Suma total: 708 + 28.320 = 29.028 botes de aceitunas."
        },
        {
          id: "ta_3",
          type: "fill_blanks",
          question: "En el expositor de frutas, Olivia coloca 16 bandejas con 6 manzanas en cada una, mientras que Lucas coloca 6 bandejas con 16 manzanas. Completa la explicación matemática:",
          template: "Ambos han colocado el mismo número total de manzanas ({0} manzanas), porque se cumple la propiedad {1}, donde el orden de los factores no cambia el producto.",
          blanks: [
            { placeholder: "total manzanas...", accepted: ["96"] },
            { placeholder: "nombre propiedad...", accepted: ["conmutativa", "conmutativa de la multiplicación"] }
          ],
          wordBank: ["96", "conmutativa", "asociativa", "distributiva", "86", "106"],
          explanation: "16 × 6 = 96 y 6 × 16 = 96. Es la propiedad conmutativa."
        },
        {
          id: "ta_4",
          type: "text_input",
          question: "Para organizar 3 palés que contienen 10 cajas cada uno con 2 garrafas de aceite, calculan: (3 × 10) × 2. Escribe el resultado y la propiedad aplicada:",
          inputs: [
            { label: "Resultado del cálculo: (3 × 10) × 2", placeholder: "Escribe el número...", accepted: ["60"] },
            { label: "Nombre de la propiedad aplicada al agrupar con paréntesis", placeholder: "Escribe el nombre...", accepted: ["asociativa", "propiedad asociativa"] }
          ],
          wordBank: ["60", "asociativa", "conmutativa", "distributiva", "30"],
          explanation: "(3 × 10) × 2 = 30 × 2 = 60 garrafas. Al agrupar tres factores con paréntesis se aplica la propiedad asociativa."
        },
        {
          id: "ta_5",
          type: "fill_blanks",
          question: "Llegan 2 lotes de merienda saludable. Cada lote incluye 8 manzanas fuji y 5 peras de agua. Aplica la propiedad distributiva completando la igualdad:",
          template: "La operación 2 × (8 + 5) es igual a (2 × {0}) + (2 × {1}) = {2} + 10 = {3} piezas de fruta en total.",
          blanks: [
            { placeholder: "primer término...", accepted: ["8"] },
            { placeholder: "segundo término...", accepted: ["5"] },
            { placeholder: "resultado 2x8...", accepted: ["16"] },
            { placeholder: "total fruta...", accepted: ["26"] }
          ],
          wordBank: ["8", "5", "16", "26", "13", "10"],
          explanation: "2 × (8 + 5) = (2 × 8) + (2 × 5) = 16 + 10 = 26 piezas de fruta."
        },
        {
          id: "ta_6",
          type: "text_input",
          question: "El encargado pide calcular cuántas aceitunas quedan en 3 botes de 82 unidades si de cada uno se han retirado 15 aceitunas para degustación. Resuelve (82 - 15) × 3 aplicando la propiedad distributiva:",
          inputs: [
            { label: "Resultado de (82 × 3)", placeholder: "Escribe el número...", accepted: ["246"] },
            { label: "Resultado de (15 × 3)", placeholder: "Escribe el número...", accepted: ["45"] },
            { label: "Diferencia final: 246 - 45", placeholder: "Escribe el resultado final...", accepted: ["201"] }
          ],
          wordBank: ["246", "45", "201", "195", "235"],
          explanation: "(82 - 15) × 3 = (82 × 3) - (15 × 3) = 246 - 45 = 201 aceitunas."
        },
        {
          id: "ta_7",
          type: "fill_blanks",
          question: "Lucas necesita hacer una estimación rápida: cada día se venden unos 96 paquetes de yogures. Completa los pasos para estimar la venta semanal (7 días):",
          template: "Redondea 96 a la centena más próxima, que es {0}. Luego multiplica {1} × 7 = {2} paquetes estimados en la semana.",
          blanks: [
            { placeholder: "centena...", accepted: ["100"] },
            { placeholder: "número redondeado...", accepted: ["100"] },
            { placeholder: "total paquetes...", accepted: ["700"] }
          ],
          wordBank: ["100", "700", "90", "630", "1.000"],
          explanation: "96 está muy cerca de 100. Al redondear a 100: 100 × 7 = 700 paquetes estimados."
        },
        {
          id: "ta_8",
          type: "text_input",
          question: "El almacén necesita tener unos 1.200 briks de leche de avena. Si la leche viene en paquetes de 6 briks, ¿cuántos paquetes deben pedir aproximadamente?",
          inputs: [
            { label: "Número de paquetes estimados necesarios", placeholder: "Escribe el número de paquetes...", accepted: ["200", "200 paquetes"] }
          ],
          wordBank: ["200", "20", "2.000", "120", "600"],
          explanation: "1.200 : 6 = 200 paquetes de leche. (Comprobación: 200 × 6 = 1.200 briks)."
        },
        {
          id: "ta_9",
          type: "multiple_choice",
          question: "Llega un camión de reparto con 96 paquetes de leche entera (de 6 briks cada uno). En el almacén ya tenían 17 paquetes iguales. ¿Qué operación combinada calcula cuántos briks hay ahora para vender?",
          options: [
            "(96 + 17) × 6 = 113 × 6 = 678 briks.",
            "96 + (17 × 6) = 96 + 102 = 198 briks.",
            "(96 × 17) + 6 = 1.632 + 6 = 1.638 briks.",
            "(96 - 17) × 6 = 79 × 6 = 474 briks."
          ],
          correct: 0,
          explanation: "Primero sumamos todos los paquetes: (96 + 17) = 113 paquetes. Luego multiplicamos por 6 briks: 113 × 6 = 678 briks."
        },
        {
          id: "ta_10",
          type: "classify_inputs",
          question: "Valentina revisa el inventario de yogures de la despensa: quedaban 3 yogures sueltos, han comprado 2 paquetes de 8 yogures naturales y 1 paquete de 8 de fresa. La familia ya se ha tomado 5 naturales y 4 de fresa. Clasifica las cantidades del problema:",
          items: [
            { name: "Total de yogures nuevos comprados (3 paquetes de 8)", placeholder: "Escribe la cantidad...", accepted: ["24", "24 yogures"] },
            { name: "Total de yogures consumidos (5 naturales + 4 de fresa)", placeholder: "Escribe la cantidad...", accepted: ["9", "9 yogures"] },
            { name: "Yogures que quedan en total (3 iniciales + 24 - 9)", placeholder: "Escribe la cantidad...", accepted: ["18", "18 yogures"] }
          ],
          explanation: "Nuevos comprados: 3 × 8 = 24. Consumidos: 5 + 4 = 9. Total restante: 3 + 24 - 9 = 27 - 9 = 18 yogures."
        }
      ]
    },

    // PRUEBA B: Saberes Oficiales y Preguntas Trampa (Curricular Formal Santillana)
    testB: {
      title: "Prueba B: Saberes Oficiales y Retos de Examen",
      description: "Prueba de evaluación formal con los saberes curriculares directos de la Unidad 3 de Santillana Construyendo Mundos.",
      context: "Pon a prueba tus conocimientos sobre términos de la multiplicación, propiedades formales, estimaciones al orden adecuado y resolución de operaciones combinadas con paréntesis.",
      questions: [
        {
          id: "tb_1",
          type: "multiple_choice",
          question: "¿Cómo se llama el resultado obtenido al realizar una multiplicación?",
          options: [
            "Producto.",
            "Factor.",
            "Cociente.",
            "Diferencia."
          ],
          correct: 0,
          explanation: "El resultado de una multiplicación es siempre el PRODUCTO. Los números que se multiplican son los FACTORES."
        },
        {
          id: "tb_2",
          type: "fill_blanks",
          question: "Aplica el truco de los ceros finales para completar los siguientes productos directos:",
          template: "25 × 200 = {0} ; 247 × 6 = {1} ; 109 × 200 = {2}",
          blanks: [
            { placeholder: "25 x 200...", accepted: ["5.000", "5000"] },
            { placeholder: "247 x 6...", accepted: ["1.482", "1482"] },
            { placeholder: "109 x 200...", accepted: ["21.800", "21800"] }
          ],
          wordBank: ["5.000", "1.482", "21.800", "500", "1.428", "2.180"],
          explanation: "25 × 2 = 50 y dos ceros: 5.000. 247 × 6 = 1.482. 109 × 2 = 218 y dos ceros: 21.800."
        },
        {
          id: "tb_3",
          type: "text_input",
          question: "Calcula con precisión la siguiente multiplicación de 4 cifras por 2 cifras: 1.012 × 24. Escribe el producto final:",
          inputs: [
            { label: "Producto de 1.012 × 24", placeholder: "Escribe el resultado...", accepted: ["24.288", "24288"] }
          ],
          wordBank: ["24.288", "24.088", "20.248", "24.208"],
          explanation: "1.012 × 4 = 4.048; 1.012 × 20 = 20.240; 4.048 + 20.240 = 24.288."
        },
        {
          id: "tb_4",
          type: "classify_inputs",
          question: "Identifica qué propiedad matemática se está aplicando en cada una de las siguientes igualdades escribiendo 'conmutativa', 'asociativa' o 'distributiva':",
          items: [
            { name: "16 × 6 = 6 × 16", placeholder: "propiedad...", accepted: ["conmutativa"] },
            { name: "(3 × 10) × 2 = 3 × (10 × 2)", placeholder: "propiedad...", accepted: ["asociativa"] },
            { name: "2 × (8 + 5) = (2 × 8) + (2 × 5)", placeholder: "propiedad...", accepted: ["distributiva"] }
          ],
          quickOptions: ["conmutativa", "asociativa", "distributiva"],
          explanation: "16 × 6 = 6 × 16 cambia el orden (conmutativa). (3 × 10) × 2 cambia la agrupación con paréntesis (asociativa). 2 × (8 + 5) distribuye el factor en los sumandos (distributiva)."
        },
        {
          id: "tb_5",
          type: "fill_blanks",
          question: "Completa el factor que falta en cada igualdad para que sea correcta:",
          template: "Propiedad asociativa: 24 × (3 × 6) = (24 × {0}) × {1}. Propiedad conmutativa: 25 × 200 = {2} × 25.",
          blanks: [
            { placeholder: "primer factor...", accepted: ["3"] },
            { placeholder: "segundo factor...", accepted: ["6"] },
            { placeholder: "factor conmutado...", accepted: ["200"] }
          ],
          wordBank: ["3", "6", "200", "24", "18", "25"],
          explanation: "24 × (3 × 6) = (24 × 3) × 6 = 432. 25 × 200 = 200 × 25 = 5.000."
        },
        {
          id: "tb_6",
          type: "text_input",
          question: "¡Cuidado con la trampa! En la operación 15 + 4 × 8, ¿cuál es el resultado correcto respetando la jerarquía?",
          inputs: [
            { label: "Resultado de 15 + 4 × 8", placeholder: "Escribe el resultado...", accepted: ["47"] }
          ],
          wordBank: ["47", "152", "19", "32"],
          explanation: "¡Primero se multiplica! 4 × 8 = 32. Después se suma: 15 + 32 = 47. (Hacer 15 + 4 = 19 y luego 19 × 8 = 152 es el error típico de examen)."
        },
        {
          id: "tb_7",
          type: "fill_blanks",
          question: "Completa la descomposición de la propiedad distributiva respecto de la resta:",
          template: "(82 - 15) × 3 = (82 × {0}) - ({1} × 3) = 246 - {2} = {3}",
          blanks: [
            { placeholder: "multiplicador 1...", accepted: ["3"] },
            { placeholder: "minuendo resta...", accepted: ["15"] },
            { placeholder: "15 x 3...", accepted: ["45"] },
            { placeholder: "resultado...", accepted: ["201"] }
          ],
          wordBank: ["3", "15", "45", "201", "67", "246"],
          explanation: "(82 - 15) × 3 = (82 × 3) - (15 × 3) = 246 - 45 = 201."
        },
        {
          id: "tb_8",
          type: "multiple_choice",
          question: "Para estimar 385 × 6, ¿a qué orden debemos redondear el primer factor (385)?",
          options: [
            "A las centenas: 385 se redondea a 400, luego 400 × 6 = 2.400.",
            "A las decenas: 385 se redondea a 380, luego 380 × 6.",
            "A los millares: 385 se redondea a 1.000.",
            "A las unidades: 385 no se redondea."
          ],
          correct: 0,
          explanation: "El orden mayor de 385 son las centenas. Como la decena es un 8 (mayor que 5), 385 se redondea a 400: 400 × 6 = 2.400."
        },
        {
          id: "tb_9",
          type: "text_input",
          question: "Resuelve paso a paso la siguiente operación combinada con paréntesis: 2 × (14 + 6) - 15. Escribe el resultado final:",
          inputs: [
            { label: "Resultado de 2 × (14 + 6) - 15", placeholder: "Escribe el resultado...", accepted: ["25"] }
          ],
          wordBank: ["25", "40", "13", "35"],
          explanation: "Paso 1 (paréntesis): 14 + 6 = 20. Paso 2 (multiplicación): 2 × 20 = 40. Paso 3 (resta): 40 - 15 = 25."
        },
        {
          id: "tb_10",
          type: "fill_blanks",
          question: "Usa la propiedad distributiva para calcular mentalmente 8 × 23 descomponiendo el 23 en 20 + 3:",
          template: "8 × 23 = 8 × (20 + 3) = (8 × 20) + (8 × 3) = {0} + {1} = {2}",
          blanks: [
            { placeholder: "8 x 20...", accepted: ["160"] },
            { placeholder: "8 x 3...", accepted: ["24"] },
            { placeholder: "suma total...", accepted: ["184"] }
          ],
          wordBank: ["160", "24", "184", "180", "164"],
          explanation: "8 × 20 = 160 y 8 × 3 = 24. 160 + 24 = 184. ¡Un truco infalible de cálculo mental!"
        }
      ]
    }
  },

  // ===========================================================================
  // BANCO DINÁMICO PARA EL DESAFÍO EXPRESS (TEST INFINITO)
  // ===========================================================================
  expressPool: [
    {
      question: "¿Cuánto es 70 × 8?",
      options: ["560", "5.600", "56", "540"],
      correct: 0,
      explanation: "7 × 8 = 56 y añades un cero: 560."
    },
    {
      question: "¿Cuánto es 400 × 5?",
      options: ["2.000", "200", "20.000", "2.400"],
      correct: 0,
      explanation: "4 × 5 = 20 y añades dos ceros: 2.000."
    },
    {
      question: "¿Qué propiedad dice que 15 × 4 = 4 × 15?",
      options: ["Propiedad Conmutativa", "Propiedad Asociativa", "Propiedad Distributiva", "Propiedad Fundamental"],
      correct: 0,
      explanation: "El orden de los factores no altera el producto: propiedad conmutativa."
    },
    {
      question: "En la operación (5 × 2) × 9 = 5 × (2 × 9), ¿qué propiedad se cumple?",
      options: ["Propiedad Asociativa", "Propiedad Conmutativa", "Propiedad Distributiva", "Propiedad Inversa"],
      correct: 0,
      explanation: "Cambia la forma de agrupar los tres factores: propiedad asociativa."
    },
    {
      question: "¿Cuánto es 3 × (10 + 4)?",
      options: ["42", "34", "30", "17"],
      correct: 0,
      explanation: "3 × 14 = 42; o también (3 × 10) + (3 × 4) = 30 + 12 = 42."
    },
    {
      question: "¿Cuánto es 6 × 90?",
      options: ["540", "54", "5.400", "560"],
      correct: 0,
      explanation: "6 × 9 = 54 y añades el 0: 540."
    },
    {
      question: "¿Cuánto es 120 × 10?",
      options: ["1.200", "12.000", "120", "1.210"],
      correct: 0,
      explanation: "Añades un cero: 1.200."
    },
    {
      question: "Si redondeamos 489 a las centenas para estimar un producto, ¿qué número obtenemos?",
      options: ["500", "400", "490", "1.000"],
      correct: 0,
      explanation: "Como la decena es un 8 (≥ 5), redondeamos hacia arriba a 500."
    },
    {
      question: "¿Cuánto es 8 × 200?",
      options: ["1.600", "160", "16.000", "1.800"],
      correct: 0,
      explanation: "8 × 2 = 16 y dos ceros: 1.600."
    },
    {
      question: "En 20 + 5 × 4, ¿qué resultado da?",
      options: ["40", "100", "29", "80"],
      correct: 0,
      explanation: "Primero 5 × 4 = 20, luego 20 + 20 = 40."
    },
    {
      question: "¿Cuánto es 9 × 300?",
      options: ["2.700", "270", "27.000", "2.900"],
      correct: 0,
      explanation: "9 × 3 = 27 y dos ceros: 2.700."
    },
    {
      question: "¿Qué propiedad se usa en 5 × (20 - 2) = (5 × 20) - (5 × 2)?",
      options: ["Distributiva respecto de la resta", "Conmutativa", "Asociativa", "De los ceros"],
      correct: 0,
      explanation: "El 5 se distribuye restando ambos productos: propiedad distributiva."
    },
    {
      question: "¿Cuánto es 11 × 100?",
      options: ["1.100", "110", "11.000", "1.110"],
      correct: 0,
      explanation: "Añades dos ceros: 1.100."
    },
    {
      question: "¿Cuánto es 25 × 4?",
      options: ["100", "75", "125", "90"],
      correct: 0,
      explanation: "25 + 25 + 25 + 25 = 100."
    },
    {
      question: "¿Cuánto es 50 × 60?",
      options: ["3.000", "300", "30.000", "360"],
      correct: 0,
      explanation: "5 × 6 = 30 y añades dos ceros: 3.000."
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
        var base1 = [3, 4, 5, 6, 7, 8, 9, 12, 15, 25];
        var base2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300];
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
              "14 × 5 = 5 × 14",
              "25 × 200 = 200 × 25",
              "109 × 8 = 8 × 109",
              "36 × 7 = 7 × 36",
              "98 × 12 = 12 × 98"
            ]
          },
          {
            prop: "Asociativa",
            eqs: [
              "(4 × 10) × 3 = 4 × (10 × 3)",
              "24 × (3 × 6) = (24 × 3) × 6",
              "(5 × 2) × 18 = 5 × (2 × 18)",
              "7 × (2 × 5) = (7 × 2) × 5"
            ]
          },
          {
            prop: "Distributiva",
            eqs: [
              "3 × (8 + 4) = (3 × 8) + (3 × 4)",
              "5 × (20 - 3) = (5 × 20) - (5 × 3)",
              "(82 - 15) × 3 = (82 × 3) - (15 × 3)",
              "6 × (10 + 5) = 60 + 30"
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
          { q: "48 × 20", prod: 48 * 20 }, // 960 (Menor)
          { q: "52 × 20", prod: 52 * 20 }, // 1.040 (Mayor)
          { q: "125 × 8", prod: 125 * 8 }, // 1.000 (Exacto -> Igual)
          { q: "310 × 4", prod: 310 * 4 }, // 1.240 (Mayor)
          { q: "19 × 50", prod: 19 * 50 }, // 950 (Menor)
          { q: "250 × 5", prod: 250 * 5 }, // 1.250 (Mayor)
          { q: "180 × 5", prod: 180 * 5 }, // 900 (Menor)
          { q: "99 × 10", prod: 99 * 10 }, // 990 (Menor)
          { q: "105 × 10", prod: 105 * 10 }, // 1.050 (Mayor)
          { q: "35 × 30", prod: 35 * 30 }, // 1.050 (Mayor)
          { q: "24 × 40", prod: 24 * 40 }  // 960 (Menor)
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
    tools: [
      {
        id: "grid-conmutativa",
        title: "Demostrador Táctil de la Propiedad Conmutativa",
        desc: "Cambia las filas y columnas o pulsa 'Girar' para ver cómo la cuadrícula demuestra que el total es idéntico."
      },
      {
        id: "desglosador-distributiva",
        title: "Desglosador Visual de la Propiedad Distributiva",
        desc: "Descompón multiplicaciones de dos cifras (como 6 × 14) en suma de decenas y unidades para calcular de cabeza."
      },
      {
        id: "fabrica-ceros",
        title: "La Fábrica de Ceros Mágicos",
        desc: "Multiplica cualquier número por 10, 100, 1.000, 20 o 300 y observa cómo saltan los ceros al resultado final."
      }
    ],
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
  // ESQUEMAS VISUALES DE REPASO
  // ===========================================================================
  cheatsheet: {
    title: "Esquemas Visuales de Repaso · Unidad 3",
    sections: [
      {
        title: "1. Términos de la Multiplicación",
        icon: "📦",
        content: "• <b>Factores:</b> Los números que multiplicamos entre sí.<br>• <b>Producto:</b> El resultado final.<br>• <b>Suma repetida:</b> 6 × 8 = 8 + 8 + 8 + 8 + 8 + 8 = 48."
      },
      {
        title: "2. Las 3 Propiedades Fundamentales",
        icon: "🔄",
        content: "• <b>Conmutativa:</b> El orden de los factores no altera el producto.<br>&nbsp;&nbsp;<i>Ejemplo:</i> 16 × 6 = 6 × 16 = 96.<br>• <b>Asociativa:</b> Para multiplicar tres factores, asociamos dos primero.<br>&nbsp;&nbsp;<i>Ejemplo:</i> (3 × 10) × 2 = 3 × (10 × 2) = 60.<br>• <b>Distributiva:</b> Se multiplica por cada término del paréntesis.<br>&nbsp;&nbsp;<i>Suma:</i> 2 × (8 + 5) = (2 × 8) + (2 × 5) = 16 + 10 = 26.<br>&nbsp;&nbsp;<i>Resta:</i> (82 - 15) × 3 = (82 × 3) - (15 × 3) = 246 - 45 = 201."
      },
      {
        title: "3. La Magia de los Ceros",
        icon: "0️⃣",
        content: "• <b>Por 10, 100, 1.000:</b> Añade 1, 2 o 3 ceros al final.<br>&nbsp;&nbsp;1.305 × 10 = 13.050 &nbsp;|&nbsp; 48 × 100 = 4.800.<br>• <b>Por 20, 200, 300:</b> Multiplica sin ceros y añádelos al final.<br>&nbsp;&nbsp;109 × 200 = 21.800 (109 × 2 = 218 y dos ceros)."
      },
      {
        title: "4. Estimación de Productos",
        icon: "🎯",
        content: "1. Redondea el factor al mayor de sus órdenes (decena o centena).<br>2. Regla del 5: si la cifra siguiente es 5 o mayor, sumas 1 al orden; si es menor, se queda igual.<br>3. Multiplica el número redondeado: 96 × 7 ≈ 100 × 7 = 700."
      },
      {
        title: "5. Jerarquía de Operaciones Combinadas",
        icon: "👑",
        content: "<b>1.º Paréntesis ()</b> siempre en primer lugar.<br><b>2.º Multiplicaciones (×)</b> antes que sumas o restas.<br><b>3.º Sumas y restas (+ -)</b> de izquierda a derecha.<br><i>¡Trampa de examen!</i> En 15 + 4 × 8, primero se hace 4 × 8 = 32, y luego 15 + 32 = 47."
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
