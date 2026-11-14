# 🔢 Matemáticas 4.º de Primaria · Tema 3: «La Multiplicación»

Aplicación web interactiva, pedagógica y lúdica diseñada especialmente para **Olivia (4.º de Educación Primaria)** para repasar, comprender a fondo los conceptos y sacar un 10 en el examen de Matemáticas sobre el **Tema 3: «La Multiplicación»** (Colección *CLAVES · Construyendo Mundos*, Grazalema–Santillana).

Basada conceptualmente en el libro y en el modelo oficial de examen (Modelo A y Modelo B), pero con **situaciones originales, personajes propios (Olivia, Lucas, Mateo y Valentina) y números variados** para entrenar la comprensión matemática real sin memorizar preguntas de forma mecánica.

---

## 🌟 Características y Módulos Principales (7 Vistas Estándar)

1. **🏠 Inicio (Home):**
   - Hero banner de alto contraste (WCAG AAA) con paleta esmeralda/teal.
   - Resumen del progreso de Olivia con barra visual y contador de estrellas ⭐ acumulables.
   - Accesos directos a todos los módulos interactivos.

2. **🎯 Misiones Didácticas (5 Misiones Secuenciales con 25 Retos Formativos):**
   - **Misión 1: Multiplicaciones de Campeona y Factores con Ceros:** Términos de la multiplicación (factores y producto), ceros finales ($10, 100, 200, 1.000$) y multiplicación por dos cifras con desplazamiento de columna.
   - **Misión 2: Propiedad Conmutativa y el Orden Secreto:** El orden de los factores no altera el producto ($a \times b = b \times a$), comprobaciones con bandejas y cajas, y cálculo mental inteligente.
   - **Misión 3: Propiedad Asociativa y los Tres Factores:** Agrupación con paréntesis de tres factores ($(a \times b) \times c = a \times (b \times c)$) y trucos para elegir los números más fáciles de multiplicar primero.
   - **Misión 4: La Gran Propiedad Distributiva:** Multiplicación por una suma ($a \times (b + c)$) y por una resta ($a \times (b - c)$), y técnica de descomposición en decenas y unidades para calcular de cabeza.
   - **Misión 5: Radar de Estimaciones y Operaciones Combinadas:** Redondeo al orden mayor antes de multiplicar, estimación inversa (pedidos de $1.200$ briks y $480$ yogures) y jerarquía sagrada de operaciones (1.º paréntesis, 2.º multiplicación, 3.º sumas y restas).

3. **🏆 Simulador de Examen:**
   - **Prueba A: El Gran Pedido del Ecomercado (Competencial):** 10 ejercicios prácticos gestionando albaranes de fruta, lácteos de avena, conservas y reparto en furgonetas.
   - **Prueba B: Saberes Oficiales y Retos de Examen (Curricular Formal):** 10 preguntas de conceptos directos de examen, propiedades formales, ceros intermedios y preguntas trampa.
   - **Tipologías Variadas de Preguntas Reales de Papel:**
     - `fill_blanks` (rellenar huecos en oraciones e igualdades con banco de ayuda y chip clicable).
     - `text_input` (escribir respuestas numéricas y nombres de propiedades).
     - `classify_inputs` (clasificar términos e inventario en dos pasos).
     - `multiple_choice` (opciones múltiples con razonamiento).
   - Corrección inteligente y tolerante (admite acentos, mayúsculas y espacios).
   - Informe pedagógico detallado con nota sobre 10, explicaciones de cada fallo, confeti y acceso al diploma.

4. **⚡ Desafío Express (Test Infinito):**
   - Generador aleatorio de preguntas rápidas con contador de racha para entrenar en momentos libres.

5. **🕹️ Arcade de Multiplicación (Contrarreloj de 45 Segundos):**
   - 3 Modalidades contrarreloj:
     1. *Tablas Relámpago y Ceros Mágicos* (Multiplicaciones directas con $10, 20, 80, 200$).
     2. *Caza la Propiedad* (Identifica a toda velocidad si es Conmutativa, Asociativa o Distributiva).
     3. *¿Mayor o Menor que 1.000?* (Estimación mental relámpago).
   - Multiplicadores de combo, aviso sonoro de últimos 5 segundos y récord personal guardado.

6. **🧪 Laboratorio Interactivo / Taller de Multiplicar:**
   - **Demostrador de la Propiedad Conmutativa:** Cuadrícula táctil dinámica de manzanas (filas $\times$ columnas) con botón "🔄 Girar" para comprobar visualmente la igualdad.
   - **Desglosador Distributivo:** Descomposición paso a paso para cálculo mental en decenas y unidades.
   - **Fábrica de Ceros Mágicos:** Selector para ver cómo saltan los ceros al multiplicar por $10, 100, 1.000, 200$.
   - **Fichas «¡Ojo al dato!»:** Curiosidades matemáticas (el truco de los dedos en la tabla del 9, multiplicar por 11 en un segundo, los escribas del antiguo Egipto y el origen del signo '×').

7. **📖 Esquemas Visuales y 🎓 Diploma de Honor:**
   - Resumen esquemático con los 5 bloques clave para repasar antes de entrar al examen.
   - Diploma Oficial personalizado para Olivia con nombre editable, nota obtenida, fecha automática y botón para imprimir en papel (`window.print()`).

8. **🔊 Accesibilidad y Sonido:**
   - Web Audio API sintetizado nativo (sin archivos `.mp3` externos).
   - Síntesis de voz en español para leer preguntas y explicaciones.
   - Lluvia de confeti local en notas altas y misiones superadas.

---

## 🛡️ Blindaje Visual y Técnico

- **Cabecera Anti-Superposición:** Header 100% sólido `#ffffff !important;` (`sticky top-0 z-index: 100`), sin transparencias ni `backdrop-blur`, garantizando que ninguna tarjeta se solape al hacer scroll.
- **Hero Banner WCAG AAA:** Clase `.hero-banner` blindada en `style.css` con fondo esmeralda sólido oscuro y textos de máximo contraste legible.
- **Vanilla SPA sin dependencias pesadas:** HTML5, CSS con Tailwind precompilado localmente y JavaScript modular. Carga instantánea y compatibilidad total con iPad y tablets.

---

## 🚀 Cómo Ejecutar en Local

```bash
cd c:\99_CODIGOFUENTE\Personal\Olivia_4\Matematicas_Tema3
python -m http.server 3000
```
Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

O simplemente haz doble clic sobre el archivo `index.html`.

---

## ☁️ Despliegue en Vercel

1. Repositorio en GitHub: `https://github.com/franggpt-code/olivia-matematicas-4-tema3`.
2. En [vercel.com](https://vercel.com):
   - Haz clic en **"Add New..."** -> **"Project"**.
   - Conecta con tu cuenta de GitHub y selecciona `olivia-matematicas-4-tema3`.
   - Pulsa **"Deploy"**.
3. La aplicación estará activa en: `https://olivia-matematicas-4-tema3.vercel.app`.

---

## 📁 Estructura del Proyecto

```text
Matematicas_Tema3/
├── index.html                           # Interfaz SPA interactiva principal con cabecera sólida
├── css/
│   ├── tailwind.min.css                 # CSS de Tailwind precompilado localmente
│   └── style.css                        # Estilos personalizados, colores y print
├── js/
│   ├── confetti.min.js                  # Motor local de confeti
│   ├── audio.js                         # Web Audio API sintético + SpeechSynthesis
│   ├── data.js                          # Banco curricular completo (misiones, exámenes, arcade, esquemas)
│   └── app.js                           # Controlador SPA, navegación, estrellas y diploma
├── Matematicas_4_Tema3_Claves_Santillana.md # Saberes curriculares oficiales de Santillana CLAVES
├── vercel.json                          # Configuración de despliegue y seguridad
├── package.json                         # Metadatos del proyecto
└── README.md                            # Guía completa
```
