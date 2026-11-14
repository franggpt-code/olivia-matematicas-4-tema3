// =============================================================================
// CONTROLADOR DE LA APLICACIÓN (SPA) · MATEMÁTICAS 4.º PRIMARIA · TEMA 3
// "La Multiplicación" · Entrenador Pedagógico para Olivia · Santillana CLAVES
// =============================================================================

class MathApp {
  constructor() {
    this.data = window.MATH_DATA;
    this.currentView = "home";
    this.studentName = "Olivia";
    this.stars = 0;
    this.voiceEnabled = false;
    this.soundEnabled = true;

    // Estado de Misiones
    this.missionsState = {
      completed: {}, // id: boolean
      currentMissionId: null,
      currentQuestionIndex: 0,
      score: 0
    };

    // Estado de Exámenes
    this.examState = {
      activeExamId: null, // 'testA' | 'testB'
      currentQuestionIndex: 0,
      answers: [],
      finished: false,
      lastScore: 0
    };
    this.activeBlankIndex = 0;
    this.activeTextInputIndex = 0;

    // Estado de Desafío Express
    this.expressState = {
      currentQuestion: null,
      streak: 0,
      answered: false
    };

    // Estado de Arcade
    this.arcadeState = {
      currentModeId: "tablas",
      score: 0,
      streak: 0,
      highScore: 0,
      timeLeft: 45,
      timerId: null,
      isPlaying: false,
      currentQuestion: null
    };

    // Estado del Laboratorio
    this.labState = {
      gridRows: 4,
      gridCols: 6,
      distribNum: 24,
      distribFactor: 5,
      zerosBase: 48,
      zerosMultiplier: 100
    };

    this.init();
  }

  // Inicialización global
  init() {
    this.loadState();
    this.updateHeaderStats();
    this.renderHome();
    this.renderMissionsList();
    this.renderCheatsheet();
    this.setupLab();
    this.bindEvents();

    if (window.soundManager) {
      window.soundManager.soundEnabled = this.soundEnabled;
      window.soundManager.voiceEnabled = this.voiceEnabled;
    }
  }

  // Persistencia en localStorage
  loadState() {
    try {
      const saved = localStorage.getItem("olivia_matematicas4_tema3_state");
      if (saved) {
        const parsed = JSON.parse(saved);
        this.stars = parsed.stars || 0;
        this.missionsState.completed = parsed.completedMissions || {};
        this.studentName = parsed.studentName || "Olivia";
        if (parsed.voiceEnabled !== undefined) this.voiceEnabled = parsed.voiceEnabled;
        if (parsed.soundEnabled !== undefined) this.soundEnabled = parsed.soundEnabled;
        if (parsed.arcadeHighScore) this.arcadeState.highScore = parsed.arcadeHighScore;
      }
    } catch (e) {
      console.warn("No se pudo cargar el estado guardado", e);
    }
  }

  saveState() {
    try {
      const toSave = {
        stars: this.stars,
        completedMissions: this.missionsState.completed,
        studentName: this.studentName,
        voiceEnabled: this.voiceEnabled,
        soundEnabled: this.soundEnabled,
        arcadeHighScore: this.arcadeState.highScore
      };
      localStorage.setItem("olivia_matematicas4_tema3_state", JSON.stringify(toSave));
    } catch (e) {
      console.warn("No se pudo guardar el estado", e);
    }
  }

  addStars(amount) {
    this.stars += amount;
    this.updateHeaderStats();
    this.saveState();
  }

  updateHeaderStats() {
    const starEl = document.getElementById("star-count");
    if (starEl) starEl.textContent = this.stars;

    const btnVoice = document.getElementById("btn-voice");
    if (btnVoice) {
      btnVoice.classList.toggle("bg-emerald-100", this.voiceEnabled);
      btnVoice.classList.toggle("text-emerald-800", this.voiceEnabled);
    }

    const btnSound = document.getElementById("btn-sound");
    if (btnSound) {
      btnSound.classList.toggle("bg-emerald-100", this.soundEnabled);
      btnSound.classList.toggle("text-emerald-800", this.soundEnabled);
    }
  }

  toggleSound() {
    if (window.soundManager) {
      this.soundEnabled = window.soundManager.toggleSound();
      this.updateHeaderStats();
      this.saveState();
    }
  }

  toggleVoice() {
    if (window.soundManager) {
      this.voiceEnabled = window.soundManager.toggleVoice();
      this.updateHeaderStats();
      this.saveState();
      if (this.voiceEnabled) {
        window.soundManager.speak("Voz de lectura activada. Te acompañaré en cada reto.");
      }
    }
  }

  // Navegación SPA de 7 Vistas
  navigate(viewId) {
    if (window.soundManager) {
      window.soundManager.playClick();
      window.soundManager.stopVoice();
    }

    // Detener timer arcade si salimos de la vista
    if (this.arcadeState.isPlaying && viewId !== 'arcade') {
      this.stopArcadeTimer();
    }

    this.currentView = viewId;
    const views = ['home', 'misiones', 'examen', 'express', 'arcade', 'laboratorio', 'chuleta'];
    views.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) el.classList.toggle("hidden", v !== viewId);

      const navBtn = document.getElementById(`nav-${v}`);
      if (navBtn) {
        if (v === viewId) {
          navBtn.classList.add("text-emerald-700", "bg-emerald-50", "font-black");
          navBtn.classList.remove("text-slate-600");
        } else {
          navBtn.classList.remove("text-emerald-700", "bg-emerald-50", "font-black");
          navBtn.classList.add("text-slate-600");
        }
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewId === 'home') this.renderHome();
    if (viewId === 'express') this.startExpress();
    if (viewId === 'arcade' && !this.arcadeState.isPlaying) this.renderArcadeSetup();
    if (viewId === 'laboratorio') this.renderLabGrid();
  }

  bindEvents() {
    // Tecla Enter para avanzar en inputs
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && this.currentView === 'examen') {
        const nextBtn = document.getElementById("btn-exam-next");
        if (nextBtn) nextBtn.click();
      }
    });
  }

  // ===========================================================================
  // VISTA 1: INICIO (HOME)
  // ===========================================================================
  renderHome() {
    const completedCount = Object.values(this.missionsState.completed).filter(Boolean).length;
    const totalMissions = this.data.missions.length;
    const percent = Math.round((completedCount / totalMissions) * 100);

    const progEl = document.getElementById("home-mission-progress");
    if (progEl) {
      progEl.textContent = `${completedCount} de ${totalMissions} Misiones completadas (${percent}%)`;
    }

    const barEl = document.getElementById("home-progress-bar");
    if (barEl) {
      barEl.style.width = `${percent}%`;
    }
  }

  // ===========================================================================
  // VISTA 2: MISIONES DIDÁCTICAS (5 MISIONES PASO A PASO)
  // ===========================================================================
  renderMissionsList() {
    const container = document.getElementById("missions-list-container");
    if (!container) return;

    const listHtml = this.data.missions.map(m => {
      const isDone = !!this.missionsState.completed[m.id];
      return `
        <div class="card-playful p-6 flex flex-col justify-between gap-4 border-2 ${isDone ? 'border-emerald-400 bg-emerald-50/30' : 'border-slate-200'}">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-3xl">${m.icon}</span>
              <span class="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${isDone ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}">
                ${isDone ? '⭐ Superada' : 'Pendiente'}
              </span>
            </div>
            <h3 class="text-lg font-black text-slate-900 leading-snug mb-1">
              ${m.title}
            </h3>
            <p class="text-xs text-slate-500 font-semibold mb-3">
              ${m.description}
            </p>
            <div class="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg">
              <span>🏅 Medalla:</span>
              <span>«${m.badge}»</span>
            </div>
          </div>
          
          <button onclick="app.startMission(${m.id})" class="btn-bounce w-full py-2.5 rounded-xl font-extrabold text-sm ${isDone ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-emerald-600 text-white hover:bg-emerald-700'} shadow-sm flex items-center justify-center gap-2">
            <span>${isDone ? 'Repetir Misión 🔄' : 'Comenzar Misión 🚀'}</span>
          </button>
        </div>
      `;
    }).join("");

    container.innerHTML = listHtml;
    
    // Ocultar quiz activo y mostrar selector
    const listSection = document.getElementById("missions-overview");
    const quizSection = document.getElementById("mission-active-quiz");
    if (listSection) listSection.classList.remove("hidden");
    if (quizSection) quizSection.classList.add("hidden");
  }

  startMission(missionId) {
    const mission = this.data.missions.find(m => m.id === missionId);
    if (!mission) return;

    this.missionsState.currentMissionId = missionId;
    this.missionsState.currentQuestionIndex = 0;
    this.missionsState.score = 0;

    const listSection = document.getElementById("missions-overview");
    const quizSection = document.getElementById("mission-active-quiz");
    if (listSection) listSection.classList.add("hidden");
    if (quizSection) quizSection.classList.remove("hidden");

    this.renderMissionQuestion();
  }

  renderMissionQuestion() {
    const mission = this.data.missions.find(m => m.id === this.missionsState.currentMissionId);
    const qIndex = this.missionsState.currentQuestionIndex;
    const q = mission.questions[qIndex];
    const totalQ = mission.questions.length;

    const quizContainer = document.getElementById("mission-quiz-container");
    if (!quizContainer) return;

    quizContainer.innerHTML = `
      <div class="card-playful p-6 sm:p-8 animate-pop">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
          <span class="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md">
            ${mission.title}
          </span>
          <span class="text-sm font-black text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
            Pregunta ${qIndex + 1} de ${totalQ}
          </span>
        </div>

        <h3 class="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-3">
          ${q.question}
        </h3>
        
        <button onclick="window.soundManager.speak('${q.question.replace(/'/g, "\\'")}')" class="text-xs text-emerald-700 hover:text-emerald-900 font-bold mb-6 flex items-center gap-1">
          🗣️ Escuchar pregunta
        </button>

        <div class="space-y-3 mb-6" id="mission-options">
          ${q.options.map((opt, i) => `
            <div onclick="app.answerMissionQuestion(${i})" class="quiz-option p-4 flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-800" data-idx="${i}">
              <span class="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center shrink-0">
                ${String.fromCharCode(65 + i)}
              </span>
              <span class="flex-1">${opt}</span>
            </div>
          `).join("")}
        </div>

        <div id="mission-feedback" class="hidden"></div>

        <div class="flex justify-end">
          <button id="btn-next-mission-q" onclick="app.nextMissionQuestion()" class="btn-bounce hidden px-6 py-2.5 rounded-xl font-black text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md">
            ${qIndex === totalQ - 1 ? 'Finalizar Misión 🏅' : 'Siguiente Reto ➡️'}
          </button>
        </div>
      </div>
    `;

    if (this.voiceEnabled && window.soundManager) {
      window.soundManager.speak(q.question);
    }
  }

  answerMissionQuestion(chosenIdx) {
    const mission = this.data.missions.find(m => m.id === this.missionsState.currentMissionId);
    const q = mission.questions[this.missionsState.currentQuestionIndex];
    const isCorrect = (chosenIdx === q.correct);

    const optionCards = document.querySelectorAll("#mission-options .quiz-option");
    optionCards.forEach((card, idx) => {
      card.onclick = null;
      card.classList.remove("hover:border-emerald-500", "cursor-pointer");
      if (idx === q.correct) {
        card.classList.add("correct");
      } else if (idx === chosenIdx) {
        card.classList.add("wrong");
      }
    });

    const feedbackEl = document.getElementById("mission-feedback");
    feedbackEl.classList.remove("hidden");

    if (isCorrect) {
      this.missionsState.score++;
      this.addStars(2);
      if (window.soundManager) window.soundManager.playCorrect();
      feedbackEl.className = "p-4 rounded-2xl mb-6 bg-emerald-50 border border-emerald-200 text-emerald-900";
      feedbackEl.innerHTML = `
        <div class="flex items-center gap-2 font-black text-emerald-800 text-base mb-1">
          <span>🌟 ¡Respuesta Correcta! (+2 estrellas)</span>
        </div>
        <p class="text-xs sm:text-sm leading-relaxed">${q.explanation}</p>
      `;
    } else {
      if (window.soundManager) window.soundManager.playError();
      feedbackEl.className = "p-4 rounded-2xl mb-6 bg-amber-50 border border-amber-200 text-amber-900";
      feedbackEl.innerHTML = `
        <div class="flex items-center gap-2 font-black text-amber-800 text-base mb-1">
          <span>💡 ¡Casi! Repasemos este concepto clave:</span>
        </div>
        <p class="text-xs sm:text-sm leading-relaxed">${q.explanation}</p>
      `;
    }

    if (this.voiceEnabled && window.soundManager) {
      window.soundManager.speak(isCorrect ? "¡Muy bien! " + q.explanation : "Atención. " + q.explanation);
    }

    const nextBtn = document.getElementById("btn-next-mission-q");
    if (nextBtn) nextBtn.classList.remove("hidden");
  }

  nextMissionQuestion() {
    const mission = this.data.missions.find(m => m.id === this.missionsState.currentMissionId);
    this.missionsState.currentQuestionIndex++;

    if (this.missionsState.currentQuestionIndex < mission.questions.length) {
      this.renderMissionQuestion();
    } else {
      this.finishMission(mission);
    }
  }

  finishMission(mission) {
    const quizContainer = document.getElementById("mission-quiz-container");
    const score = this.missionsState.score;
    const total = mission.questions.length;
    const passed = score >= 3;

    if (passed) {
      this.missionsState.completed[mission.id] = true;
      this.addStars(5);
      this.saveState();
      if (window.confetti) {
        window.confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      }
      if (window.soundManager) window.soundManager.playSuccess();
    }

    quizContainer.innerHTML = `
      <div class="card-playful p-8 text-center max-w-xl mx-auto animate-pop">
        <div class="w-20 h-20 mx-auto rounded-3xl ${passed ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'} flex items-center justify-center text-4xl mb-4 shadow-inner">
          ${passed ? '🏆' : '💪'}
        </div>
        <h2 class="text-2xl font-black text-slate-900 mb-2">
          ${passed ? '¡Misión Superada con Éxito!' : '¡Buen entrenamiento, Olivia!'}
        </h2>
        <p class="text-sm text-slate-600 mb-6">
          Has acertado <strong>${score} de ${total}</strong> preguntas conceptuales.
          ${passed ? `<br>Has desbloqueado la medalla: <strong class="text-emerald-700">«${mission.badge}»</strong> y ganado 5 estrellas bonus ⭐` : '<br>Repasa los conceptos y vuelve a intentarlo para conseguir tu medalla.'}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onclick="app.startMission(${mission.id})" class="w-full sm:w-auto px-5 py-2.5 rounded-xl font-extrabold text-sm text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors">
            Repetir para mejorar 🔄
          </button>
          <button onclick="app.renderMissionsList()" class="w-full sm:w-auto btn-bounce px-6 py-2.5 rounded-xl font-extrabold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md">
            Ver todas las misiones 🗺️
          </button>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // VISTA 3: SIMULADOR DE EXAMEN (Prueba A y Prueba B)
  // ===========================================================================
  startExam(examKey) {
    const examData = this.data.exams[examKey];
    if (!examData) return;

    this.examState.activeExamId = examKey;
    this.examState.currentQuestionIndex = 0;
    this.examState.answers = examData.questions.map(q => {
      if (q.type === 'fill_blanks') return new Array(q.blanks.length).fill('');
      if (q.type === 'classify_inputs') return new Array(q.items.length).fill('');
      if (q.type === 'text_input') return new Array(q.inputs ? q.inputs.length : 1).fill('');
      return null; // multiple_choice
    });
    this.examState.finished = false;
    this.activeBlankIndex = 0;
    this.activeTextInputIndex = 0;

    const selectorView = document.getElementById("exam-selector");
    const activeView = document.getElementById("exam-active");
    const resultsView = document.getElementById("exam-results");

    if (selectorView) selectorView.classList.add("hidden");
    if (resultsView) resultsView.classList.add("hidden");
    if (activeView) activeView.classList.remove("hidden");

    this.renderExamQuestion();
  }

  renderExamQuestion() {
    const exam = this.data.exams[this.examState.activeExamId];
    const qIndex = this.examState.currentQuestionIndex;
    const q = exam.questions[qIndex];
    const totalQ = exam.questions.length;
    const currentAns = this.examState.answers[qIndex];

    const container = document.getElementById("exam-question-card");
    if (!container) return;

    let bodyHtml = "";

    // 1. TIPO RELLENAR HUECOS (FILL BLANKS)
    if (q.type === 'fill_blanks') {
      let sentenceHtml = q.template;
      q.blanks.forEach((b, bIdx) => {
        const val = (Array.isArray(currentAns) && currentAns[bIdx]) ? currentAns[bIdx] : '';
        const inputHtml = `<input type="text" id="blank-${bIdx}" data-blank-idx="${bIdx}" value="${val.replace(/"/g, '&quot;')}" placeholder="${b.placeholder || '...'}" oninput="app.recordBlankInput(${bIdx}, this.value)" onfocus="app.setActiveBlank(${bIdx})" class="blank-input ${val ? 'filled' : ''}" autocomplete="off" autocapitalize="none" spellcheck="false">`;
        sentenceHtml = sentenceHtml.replace(`{${bIdx}}`, inputHtml);
      });

      const wordBankHtml = q.wordBank ? `
        <div class="mt-6 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100">
          <p class="text-xs font-black text-emerald-900 mb-2.5 flex items-center gap-1.5">
            <span>💡</span> <span>Banco de ayuda (escribe o pulsa para rellenar en el hueco activo):</span>
          </p>
          <div class="flex flex-wrap gap-2">
            ${q.wordBank.map(w => `
              <button type="button" onclick="app.insertWordToBlank('${w.replace(/'/g, "\\'")}')" class="word-bank-chip">
                <span>✏️</span> <span>${w}</span>
              </button>
            `).join("")}
          </div>
        </div>
      ` : '';

      bodyHtml = `
        <div class="space-y-4 mb-8">
          <div class="p-5 sm:p-6 bg-slate-50/90 rounded-2xl border-2 border-emerald-100">
            <p class="fill-sentence">${sentenceHtml}</p>
          </div>
          ${wordBankHtml}
        </div>
      `;
    }
    // 2. TIPO RESPUESTA ESCRITA (TEXT INPUT)
    else if (q.type === 'text_input') {
      const inputs = q.inputs || [{ label: "Tu respuesta", placeholder: q.placeholder || "Escribe aquí...", accepted: q.accepted }];

      const inputsHtml = inputs.map((inp, iIdx) => {
        const val = (Array.isArray(currentAns) && currentAns[iIdx]) ? currentAns[iIdx] : '';
        return `
          <div class="space-y-1.5">
            <label class="block text-xs font-black uppercase tracking-wider text-slate-700">${inp.label}:</label>
            <input type="text" id="text-input-${iIdx}" data-text-idx="${iIdx}" value="${val.replace(/"/g, '&quot;')}" placeholder="${inp.placeholder || 'Escribe tu respuesta...'}" oninput="app.recordTextInput(${iIdx}, this.value)" onfocus="app.setActiveTextInput(${iIdx})" class="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 text-slate-900 font-bold text-sm sm:text-base bg-white" autocomplete="off" autocapitalize="none" spellcheck="false">
          </div>
        `;
      }).join("");

      const wordBankHtml = q.wordBank ? `
        <div class="mt-4 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100">
          <p class="text-xs font-black text-emerald-900 mb-2.5 flex items-center gap-1.5">
            <span>💡</span> <span>Valores o palabras de ayuda:</span>
          </p>
          <div class="flex flex-wrap gap-2">
            ${q.wordBank.map(w => `
              <button type="button" onclick="app.insertWordToTextInput('${w.replace(/'/g, "\\'")}')" class="word-bank-chip">
                <span>✍️</span> <span>${w}</span>
              </button>
            `).join("")}
          </div>
        </div>
      ` : '';

      bodyHtml = `
        <div class="space-y-4 mb-8">
          <div class="p-5 sm:p-6 bg-slate-50/90 rounded-2xl border-2 border-emerald-100 space-y-4">
            ${inputsHtml}
          </div>
          ${wordBankHtml}
        </div>
      `;
    }
    // 3. TIPO CLASIFICACIÓN ESCRITA (CLASSIFY INPUTS)
    else if (q.type === 'classify_inputs') {
      const itemsHtml = q.items.map((item, itemIdx) => {
        const val = (Array.isArray(currentAns) && currentAns[itemIdx]) ? currentAns[itemIdx] : '';
        return `
          <div class="p-4 bg-white rounded-2xl border-2 border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-emerald-300 transition-colors">
            <span class="text-sm sm:text-base font-bold text-slate-900 flex-1">${item.name}</span>
            <div class="flex items-center gap-2">
              <input type="text" id="classify-input-${itemIdx}" value="${val.replace(/"/g, '&quot;')}" placeholder="${item.placeholder || 'Escribe respuesta...'}" oninput="app.recordClassifyInput(${itemIdx}, this.value)" class="blank-input ${val ? 'filled' : ''} text-xs sm:text-sm !min-w-[170px]" autocomplete="off" autocapitalize="none" spellcheck="false">
            </div>
          </div>
        `;
      }).join("");

      bodyHtml = `
        <div class="space-y-3 mb-8">
          ${itemsHtml}
        </div>
      `;
    }
    // 4. TIPO TEST ESTÁNDAR (MULTIPLE CHOICE)
    else {
      bodyHtml = `
        <div class="space-y-3 mb-8">
          ${q.options.map((opt, i) => `
            <div onclick="app.recordExamAnswer(${i})" class="quiz-option p-4 flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-800 ${currentAns === i ? 'selected' : ''}">
              <span class="w-7 h-7 rounded-lg ${currentAns === i ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'} font-black text-xs flex items-center justify-center shrink-0">
                ${String.fromCharCode(65 + i)}
              </span>
              <span class="flex-1">${opt}</span>
            </div>
          `).join("")}
        </div>
      `;
    }

    const typeBadge = q.type === 'fill_blanks' ? '✍️ Rellenar números / palabras' : q.type === 'classify_inputs' ? '🔢 Clasificación de términos' : q.type === 'text_input' ? '📝 Respuesta escrita' : '🎯 Razonamiento test';

    container.innerHTML = `
      <div class="p-6 sm:p-8 animate-pop">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
          <div>
            <span class="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
              ${exam.title}
            </span>
            <p class="text-xs text-slate-500 mt-1 font-semibold">${typeBadge} · Simulador Oficial de Examen</p>
          </div>
          <span class="text-sm font-black text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
            Pregunta ${qIndex + 1} / ${totalQ}
          </span>
        </div>

        <h3 class="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-3">
          ${q.question}
        </h3>
        <button onclick="window.soundManager.speak('${q.question.replace(/'/g, "\\'")}')" class="text-xs text-emerald-700 hover:text-emerald-900 font-bold mb-6 flex items-center gap-1">
          🗣️ Escuchar en voz alta
        </button>

        ${bodyHtml}

        <div class="flex items-center justify-between pt-4 border-t border-slate-200">
          <button onclick="app.prevExamQuestion()" ${qIndex === 0 ? 'disabled class="opacity-40 cursor-not-allowed text-slate-400 font-bold text-sm px-4 py-2"' : 'class="px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors"'}>
            ⬅️ Anterior
          </button>

          ${qIndex === totalQ - 1 ? `
            <button onclick="app.finishExam()" class="btn-bounce px-6 py-2.5 rounded-xl font-black text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md">
              Corregir Examen Completo 📝
            </button>
          ` : `
            <button onclick="app.nextExamQuestion()" class="btn-bounce px-6 py-2.5 rounded-xl font-black text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md">
              Siguiente ➡️
            </button>
          `}
        </div>
      </div>
    `;

    if (this.voiceEnabled && window.soundManager) {
      window.soundManager.speak(q.question);
    }
  }

  recordExamAnswer(optionIndex) {
    this.examState.answers[this.examState.currentQuestionIndex] = optionIndex;
    if (window.soundManager) window.soundManager.playClick();
    this.renderExamQuestion();
  }

  recordBlankInput(blankIdx, value) {
    const qIndex = this.examState.currentQuestionIndex;
    const q = this.data.exams[this.examState.activeExamId].questions[qIndex];
    if (!Array.isArray(this.examState.answers[qIndex])) {
      this.examState.answers[qIndex] = new Array(q.blanks.length).fill('');
    }
    this.examState.answers[qIndex][blankIdx] = value;
    const el = document.getElementById(`blank-${blankIdx}`);
    if (el) {
      if (value.trim()) el.classList.add('filled');
      else el.classList.remove('filled');
    }
  }

  setActiveBlank(blankIdx) {
    this.activeBlankIndex = blankIdx;
  }

  insertWordToBlank(word) {
    const qIndex = this.examState.currentQuestionIndex;
    const q = this.data.exams[this.examState.activeExamId].questions[qIndex];
    if (!q || q.type !== 'fill_blanks') return;

    if (!Array.isArray(this.examState.answers[qIndex])) {
      this.examState.answers[qIndex] = new Array(q.blanks.length).fill('');
    }

    let targetIdx = this.activeBlankIndex;
    if (targetIdx < 0 || targetIdx >= q.blanks.length) targetIdx = 0;

    this.recordBlankInput(targetIdx, word);
    const inputEl = document.getElementById(`blank-${targetIdx}`);
    if (inputEl) {
      inputEl.value = word;
      inputEl.classList.add('filled');
    }

    if (targetIdx + 1 < q.blanks.length) {
      this.activeBlankIndex = targetIdx + 1;
      const nextInput = document.getElementById(`blank-${targetIdx + 1}`);
      if (nextInput) nextInput.focus();
    }
    if (window.soundManager) window.soundManager.playClick();
  }

  recordTextInput(inputIdx, value) {
    const qIndex = this.examState.currentQuestionIndex;
    const q = this.data.exams[this.examState.activeExamId].questions[qIndex];
    const totalInputs = q.inputs ? q.inputs.length : 1;
    if (!Array.isArray(this.examState.answers[qIndex])) {
      this.examState.answers[qIndex] = new Array(totalInputs).fill('');
    }
    this.examState.answers[qIndex][inputIdx] = value;
  }

  setActiveTextInput(inputIdx) {
    this.activeTextInputIndex = inputIdx;
  }

  insertWordToTextInput(word) {
    const qIndex = this.examState.currentQuestionIndex;
    const q = this.data.exams[this.examState.activeExamId].questions[qIndex];
    if (!q || q.type !== 'text_input') return;

    const totalInputs = q.inputs ? q.inputs.length : 1;
    if (!Array.isArray(this.examState.answers[qIndex])) {
      this.examState.answers[qIndex] = new Array(totalInputs).fill('');
    }

    let targetIdx = this.activeTextInputIndex;
    if (targetIdx < 0 || targetIdx >= totalInputs) targetIdx = 0;

    this.recordTextInput(targetIdx, word);
    const inputEl = document.getElementById(`text-input-${targetIdx}`);
    if (inputEl) inputEl.value = word;

    if (targetIdx + 1 < totalInputs) {
      this.activeTextInputIndex = targetIdx + 1;
      const nextInput = document.getElementById(`text-input-${targetIdx + 1}`);
      if (nextInput) nextInput.focus();
    }
    if (window.soundManager) window.soundManager.playClick();
  }

  recordClassifyInput(itemIdx, value) {
    const qIndex = this.examState.currentQuestionIndex;
    const q = this.data.exams[this.examState.activeExamId].questions[qIndex];
    if (!Array.isArray(this.examState.answers[qIndex])) {
      this.examState.answers[qIndex] = new Array(q.items.length).fill('');
    }
    this.examState.answers[qIndex][itemIdx] = value;
  }

  nextExamQuestion() {
    const exam = this.data.exams[this.examState.activeExamId];
    if (this.examState.currentQuestionIndex < exam.questions.length - 1) {
      this.examState.currentQuestionIndex++;
      this.activeBlankIndex = 0;
      this.activeTextInputIndex = 0;
      this.renderExamQuestion();
    }
  }

  prevExamQuestion() {
    if (this.examState.currentQuestionIndex > 0) {
      this.examState.currentQuestionIndex--;
      this.activeBlankIndex = 0;
      this.activeTextInputIndex = 0;
      this.renderExamQuestion();
    }
  }

  // Normalizador de texto para corrección inteligente y tolerante (sin tildes, signos ni espacios sobrantes)
  normalizeAnswerText(str) {
    if (!str || typeof str !== 'string') return '';
    return str
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,;:¿?¡!]/g, "")
      .replace(/\s+/g, " ");
  }

  checkQuestionCorrectness(q, userAns) {
    if (userAns === undefined || userAns === null) {
      return { isOk: false, scoreRatio: 0, details: [] };
    }

    if (q.type === 'fill_blanks') {
      if (!Array.isArray(userAns)) return { isOk: false, scoreRatio: 0, details: [] };
      let correctBlanks = 0;
      const details = q.blanks.map((b, bIdx) => {
        const val = this.normalizeAnswerText(userAns[bIdx] || '');
        const match = b.accepted.some(acc => this.normalizeAnswerText(acc) === val);
        if (match) correctBlanks++;
        return { user: userAns[bIdx] || '', expected: b.accepted[0], isOk: match };
      });
      const ratio = q.blanks.length > 0 ? (correctBlanks / q.blanks.length) : 0;
      return { isOk: ratio === 1, scoreRatio: ratio, details };
    }

    if (q.type === 'classify_inputs') {
      if (!Array.isArray(userAns)) return { isOk: false, scoreRatio: 0, details: [] };
      let correctItems = 0;
      const details = q.items.map((item, itIdx) => {
        const val = this.normalizeAnswerText(userAns[itIdx] || '');
        const match = item.accepted.some(acc => this.normalizeAnswerText(acc) === val);
        if (match) correctItems++;
        return { name: item.name, user: userAns[itIdx] || '', expected: item.accepted[0], isOk: match };
      });
      const ratio = q.items.length > 0 ? (correctItems / q.items.length) : 0;
      return { isOk: ratio === 1, scoreRatio: ratio, details };
    }

    if (q.type === 'text_input') {
      const inputs = q.inputs || [{ label: "Respuesta", accepted: q.accepted }];
      if (!Array.isArray(userAns)) {
        const val = this.normalizeAnswerText(userAns || '');
        const match = inputs[0].accepted.some(acc => this.normalizeAnswerText(acc) === val);
        return { isOk: match, scoreRatio: match ? 1 : 0, details: [{ label: inputs[0].label, user: userAns || '', expected: inputs[0].accepted[0], isOk: match }] };
      }
      let correctInputs = 0;
      const details = inputs.map((inp, iIdx) => {
        const val = this.normalizeAnswerText(userAns[iIdx] || '');
        const match = inp.accepted.some(acc => this.normalizeAnswerText(acc) === val);
        if (match) correctInputs++;
        return { label: inp.label, user: userAns[iIdx] || '', expected: inp.accepted[0], isOk: match };
      });
      const ratio = inputs.length > 0 ? (correctInputs / inputs.length) : 0;
      return { isOk: ratio === 1, scoreRatio: ratio, details };
    }

    // multiple_choice
    const isOk = (userAns === q.correct);
    return { isOk, scoreRatio: isOk ? 1 : 0, details: [] };
  }

  finishExam() {
    const exam = this.data.exams[this.examState.activeExamId];
    let totalScore = 0;
    let perfectCount = 0;

    exam.questions.forEach((q, idx) => {
      const res = this.checkQuestionCorrectness(q, this.examState.answers[idx]);
      totalScore += res.scoreRatio;
      if (res.isOk) perfectCount++;
    });

    const finalGrade = Math.round((totalScore / exam.questions.length) * 10 * 10) / 10;
    this.examState.lastScore = finalGrade;
    this.examState.finished = true;

    if (finalGrade >= 5) {
      const awardedStars = Math.round(finalGrade * 2);
      this.addStars(awardedStars);
      if (finalGrade >= 8 && window.confetti) {
        window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
      }
      if (window.soundManager) window.soundManager.playSuccess();
    } else {
      if (window.soundManager) window.soundManager.playError();
    }

    const activeView = document.getElementById("exam-active");
    const resultsView = document.getElementById("exam-results");
    if (activeView) activeView.classList.add("hidden");
    if (resultsView) resultsView.classList.remove("hidden");

    this.renderExamResults(finalGrade, perfectCount, exam);
  }

  renderExamResults(grade, perfectCount, exam) {
    const container = document.getElementById("exam-results-container");
    if (!container) return;

    const isPassed = grade >= 5;
    const isSobresaliente = grade >= 9;

    let gradeBadge = isSobresaliente ? '🏆 Sobresaliente' : isPassed ? '⭐ Aprobado con Éxito' : '💪 Hay que repasar';
    let badgeColor = isSobresaliente ? 'bg-amber-100 text-amber-900 border-amber-300' : isPassed ? 'bg-emerald-100 text-emerald-900 border-emerald-300' : 'bg-rose-100 text-rose-900 border-rose-300';

    const breakdownHtml = exam.questions.map((q, idx) => {
      const res = this.checkQuestionCorrectness(q, this.examState.answers[idx]);
      let answerSummary = "";

      if (q.type === 'fill_blanks') {
        answerSummary = res.details.map(d => `
          <div class="text-xs">
            Hueco: <strong>"${d.user || '(vacío)'}"</strong> ${d.isOk ? '✅' : `❌ (Correcto: "${d.expected}")`}
          </div>
        `).join("");
      } else if (q.type === 'text_input') {
        answerSummary = res.details.map(d => `
          <div class="text-xs">
            ${d.label}: <strong>"${d.user || '(vacío)'}"</strong> ${d.isOk ? '✅' : `❌ (Esperado: "${d.expected}")`}
          </div>
        `).join("");
      } else if (q.type === 'classify_inputs') {
        answerSummary = res.details.map(d => `
          <div class="text-xs">
            ${d.name}: <strong>"${d.user || '(vacío)'}"</strong> ${d.isOk ? '✅' : `❌ (Esperado: "${d.expected}")`}
          </div>
        `).join("");
      } else {
        const userChoice = this.examState.answers[idx];
        const userText = userChoice !== null && userChoice !== undefined ? q.options[userChoice] : '(sin responder)';
        const correctText = q.options[q.correct];
        answerSummary = `
          <div class="text-xs">
            Tu respuesta: <strong>"${userText}"</strong> ${res.isOk ? '✅' : `❌ (Correcta: "${correctText}")`}
          </div>
        `;
      }

      return `
        <div class="p-4 rounded-2xl border-2 ${res.isOk ? 'border-emerald-200 bg-emerald-50/40' : 'border-rose-200 bg-rose-50/40'} text-left space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-black uppercase tracking-wider ${res.isOk ? 'text-emerald-700' : 'text-rose-700'}">
              Pregunta ${idx + 1} ${res.isOk ? '✓ Correcta' : '✗ A mejorar'}
            </span>
            <span class="text-xs font-black px-2 py-0.5 rounded-full ${res.isOk ? 'bg-emerald-200 text-emerald-800' : 'bg-rose-200 text-rose-800'}">
              ${Math.round(res.scoreRatio * 10) / 10} / 1 pto
            </span>
          </div>
          <p class="text-sm font-black text-slate-900 leading-snug">${q.question}</p>
          <div class="space-y-1 py-1 text-slate-700">${answerSummary}</div>
          <p class="text-xs text-slate-600 bg-white/80 p-2.5 rounded-xl border border-slate-200 leading-relaxed">
            💡 <strong>Explicación pedagógica:</strong> ${q.explanation}
          </p>
        </div>
      `;
    }).join("");

    container.innerHTML = `
      <div class="card-playful p-6 sm:p-8 text-center max-w-3xl mx-auto animate-pop space-y-6">
        <div>
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase border mb-3 ${badgeColor}">
            ${gradeBadge}
          </span>
          <h2 class="text-3xl sm:text-4xl font-black font-display text-slate-900 mb-1">
            Calificación: <span class="${isPassed ? 'text-emerald-600' : 'text-rose-600'}">${grade}</span> / 10
          </h2>
          <p class="text-sm text-slate-600">
            Has completado <strong>${exam.title}</strong> respondiendo a las 10 cuestiones curriculares.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mx-auto text-center">
          <div class="p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <span class="block text-2xl font-black text-emerald-600">${perfectCount}</span>
            <span class="text-xs text-slate-500 font-bold">100% Perfectas</span>
          </div>
          <div class="p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <span class="block text-2xl font-black text-amber-600">${Math.round(grade * 2)} ⭐</span>
            <span class="text-xs text-slate-500 font-bold">Estrellas ganadas</span>
          </div>
          <div class="p-3 bg-slate-50 rounded-2xl border border-slate-200 col-span-2 sm:col-span-1">
            <span class="block text-2xl font-black text-indigo-600">${Math.round((grade / 10) * 100)}%</span>
            <span class="text-xs text-slate-500 font-bold">Acierto global</span>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button onclick="app.resetExam()" class="px-5 py-2.5 rounded-xl font-extrabold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors">
            Elegir otra prueba 🔄
          </button>
          <button onclick="app.showDiplomaFromExam(${grade})" class="btn-bounce px-6 py-2.5 rounded-xl font-extrabold text-sm text-white bg-amber-500 hover:bg-amber-600 shadow-md">
            Ver Diploma Oficial 🎓
          </button>
        </div>

        <div class="border-t border-slate-200 pt-6">
          <h3 class="text-base font-black text-slate-900 text-left mb-4 flex items-center gap-2">
            <span>📋</span> <span>Desglose Detallado de Preguntas y Explicaciones:</span>
          </h3>
          <div class="space-y-4">
            ${breakdownHtml}
          </div>
        </div>
      </div>
    `;
  }

  resetExam() {
    const selectorView = document.getElementById("exam-selector");
    const activeView = document.getElementById("exam-active");
    const resultsView = document.getElementById("exam-results");

    if (selectorView) selectorView.classList.remove("hidden");
    if (activeView) activeView.classList.add("hidden");
    if (resultsView) resultsView.classList.add("hidden");
  }

  showDiplomaFromExam(grade) {
    this.navigate('chuleta');
    this.updateDiploma(grade);
  }

  // ===========================================================================
  // VISTA 4: DESAFÍO EXPRESS (TEST INFINITO ALEATORIO)
  // ===========================================================================
  startExpress() {
    this.loadExpressQuestion();
  }

  loadExpressQuestion() {
    const pool = this.data.expressPool;
    const randomQ = pool[Math.floor(Math.random() * pool.length)];
    this.expressState.currentQuestion = randomQ;
    this.expressState.answered = false;

    const streakEl = document.getElementById("express-streak");
    if (streakEl) streakEl.textContent = this.expressState.streak;

    const container = document.getElementById("express-card-container");
    if (!container) return;

    container.innerHTML = `
      <div class="card-playful p-6 sm:p-8 animate-pop">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
          <span class="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md">
            ⚡ Desafío Express de Multiplicación
          </span>
          <div class="flex items-center gap-1.5 text-xs font-black text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            <span>🔥 Racha:</span>
            <span id="express-streak-inner">${this.expressState.streak}</span>
          </div>
        </div>

        <h3 class="text-lg sm:text-2xl font-black text-slate-900 leading-snug mb-3">
          ${randomQ.question}
        </h3>
        
        <button onclick="window.soundManager.speak('${randomQ.question.replace(/'/g, "\\'")}')" class="text-xs text-emerald-700 hover:text-emerald-900 font-bold mb-6 flex items-center gap-1">
          🗣️ Escuchar
        </button>

        <div class="space-y-3 mb-6" id="express-options">
          ${randomQ.options.map((opt, i) => `
            <div onclick="app.answerExpressQuestion(${i})" class="quiz-option p-4 flex items-center gap-3 text-sm sm:text-base font-semibold text-slate-800" data-idx="${i}">
              <span class="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center shrink-0">
                ${String.fromCharCode(65 + i)}
              </span>
              <span class="flex-1">${opt}</span>
            </div>
          `).join("")}
        </div>

        <div id="express-feedback" class="hidden"></div>

        <div class="flex justify-end">
          <button id="btn-next-express" onclick="app.loadExpressQuestion()" class="btn-bounce hidden px-6 py-2.5 rounded-xl font-black text-sm text-white bg-amber-500 hover:bg-amber-600 shadow-md">
            Siguiente Pregunta Rápida ⚡
          </button>
        </div>
      </div>
    `;

    if (this.voiceEnabled && window.soundManager) {
      window.soundManager.speak(randomQ.question);
    }
  }

  answerExpressQuestion(chosenIdx) {
    if (this.expressState.answered) return;
    this.expressState.answered = true;

    const q = this.expressState.currentQuestion;
    const isCorrect = (chosenIdx === q.correct);

    const optionCards = document.querySelectorAll("#express-options .quiz-option");
    optionCards.forEach((card, idx) => {
      card.onclick = null;
      card.classList.remove("hover:border-emerald-500", "cursor-pointer");
      if (idx === q.correct) {
        card.classList.add("correct");
      } else if (idx === chosenIdx) {
        card.classList.add("wrong");
      }
    });

    const feedbackEl = document.getElementById("express-feedback");
    feedbackEl.classList.remove("hidden");

    if (isCorrect) {
      this.expressState.streak++;
      this.addStars(1);
      if (window.soundManager) window.soundManager.playCorrect();
      feedbackEl.className = "p-4 rounded-2xl mb-6 bg-emerald-50 border border-emerald-200 text-emerald-900";
      feedbackEl.innerHTML = `
        <div class="flex items-center gap-2 font-black text-emerald-800 text-base mb-1">
          <span>⚡ ¡Acertaste al instante! (+1 estrella)</span>
        </div>
        <p class="text-xs sm:text-sm leading-relaxed">${q.explanation}</p>
      `;
    } else {
      this.expressState.streak = 0;
      if (window.soundManager) window.soundManager.playError();
      feedbackEl.className = "p-4 rounded-2xl mb-6 bg-amber-50 border border-amber-200 text-amber-900";
      feedbackEl.innerHTML = `
        <div class="flex items-center gap-2 font-black text-amber-800 text-base mb-1">
          <span>💡 ¡Atención al detalle!</span>
        </div>
        <p class="text-xs sm:text-sm leading-relaxed">${q.explanation}</p>
      `;
    }

    const streakEl = document.getElementById("express-streak-inner");
    if (streakEl) streakEl.textContent = this.expressState.streak;

    const nextBtn = document.getElementById("btn-next-express");
    if (nextBtn) nextBtn.classList.remove("hidden");
  }

  // ===========================================================================
  // VISTA 5: ARCADE DE MULTIPLICACIÓN (CONTRARRELOJ DE 45 SEGUNDOS)
  // ===========================================================================
  renderArcadeSetup() {
    const container = document.getElementById("arcade-container");
    if (!container) return;

    const modes = this.data.arcadeModes;
    container.innerHTML = `
      <div class="card-playful p-6 sm:p-8 max-w-2xl mx-auto text-center space-y-6">
        <div class="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center text-3xl mx-auto shadow-inner">
          🕹️
        </div>
        <div>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 mb-1">Arcade Contrarreloj (45s)</h2>
          <p class="text-xs sm:text-sm text-slate-600">
            Pon a prueba tus reflejos matemáticos: resuelve el máximo número de retos posibles antes de que el reloj llegue a cero.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          ${modes.map(m => `
            <div onclick="app.selectArcadeMode('${m.id}')" class="p-4 rounded-2xl border-2 ${this.arcadeState.currentModeId === m.id ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-200 bg-white'} cursor-pointer hover:border-emerald-400 transition-colors">
              <span class="text-2xl mb-2 block">${m.icon}</span>
              <h4 class="font-black text-sm text-slate-900 mb-1">${m.title}</h4>
              <p class="text-xs text-slate-500 line-clamp-2">${m.description}</p>
            </div>
          `).join("")}
        </div>

        <div class="flex items-center justify-center gap-4 text-xs font-bold text-slate-600">
          <span>🏆 Récord Actual: <strong>${this.arcadeState.highScore} pts</strong></span>
        </div>

        <button onclick="app.startArcadeGame()" class="btn-bounce w-full sm:w-auto px-8 py-3 rounded-2xl font-black text-base text-white bg-emerald-600 hover:bg-emerald-700 shadow-md">
          ¡Empezar Partida de 45 Segundos! 🚀
        </button>
      </div>
    `;
  }

  selectArcadeMode(modeId) {
    this.arcadeState.currentModeId = modeId;
    if (window.soundManager) window.soundManager.playClick();
    this.renderArcadeSetup();
  }

  startArcadeGame() {
    this.arcadeState.isPlaying = true;
    this.arcadeState.score = 0;
    this.arcadeState.streak = 0;
    this.arcadeState.timeLeft = 45;

    const container = document.getElementById("arcade-container");
    if (!container) return;

    container.innerHTML = `
      <div class="card-playful p-6 sm:p-8 max-w-xl mx-auto space-y-6 animate-pop">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xs font-black uppercase text-slate-500">Puntos:</span>
            <span id="arcade-score" class="text-xl font-black text-emerald-600">0</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-black uppercase text-amber-600">Combo:</span>
            <span id="arcade-streak" class="text-xl font-black text-amber-600">0x</span>
          </div>
          <div class="flex items-center gap-1.5 bg-rose-50 text-rose-700 px-3 py-1 rounded-full text-sm font-black border border-rose-200">
            <span>⏱️</span>
            <span id="arcade-timer">45s</span>
          </div>
        </div>

        <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div id="arcade-timer-bar" class="bg-rose-500 h-2.5 rounded-full transition-all duration-1000" style="width: 100%"></div>
        </div>

        <div id="arcade-question-box" class="text-center py-4 space-y-4">
          <!-- Pregunta dinámica -->
        </div>

        <div class="flex justify-center">
          <button onclick="app.stopArcadeGame()" class="text-xs text-slate-400 hover:text-slate-600 font-bold underline">
            Abandonar partida
          </button>
        </div>
      </div>
    `;

    this.startArcadeTimer();
    this.nextArcadeQuestion();
  }

  startArcadeTimer() {
    this.stopArcadeTimer();
    this.arcadeState.timerId = setInterval(() => {
      this.arcadeState.timeLeft--;
      const timerEl = document.getElementById("arcade-timer");
      const barEl = document.getElementById("arcade-timer-bar");

      if (timerEl) timerEl.textContent = `${this.arcadeState.timeLeft}s`;
      if (barEl) {
        const pct = (this.arcadeState.timeLeft / 45) * 100;
        barEl.style.width = `${pct}%`;
      }

      if (this.arcadeState.timeLeft <= 5 && this.arcadeState.timeLeft > 0) {
        if (window.soundManager) window.soundManager.playTimerWarning();
      }

      if (this.arcadeState.timeLeft <= 0) {
        this.finishArcadeGame();
      }
    }, 1000);
  }

  stopArcadeTimer() {
    if (this.arcadeState.timerId) {
      clearInterval(this.arcadeState.timerId);
      this.arcadeState.timerId = null;
    }
  }

  nextArcadeQuestion() {
    if (!this.arcadeState.isPlaying) return;

    const mode = this.data.arcadeModes.find(m => m.id === this.arcadeState.currentModeId) || this.data.arcadeModes[0];
    const qData = mode.generator();
    this.arcadeState.currentQuestion = qData;

    const box = document.getElementById("arcade-question-box");
    if (!box) return;

    box.innerHTML = `
      <h3 class="text-xl sm:text-2xl font-black text-slate-900 mb-4 animate-pop">
        ${qData.question}
      </h3>
      <div class="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        ${qData.options.map((opt, i) => `
          <button onclick="app.answerArcadeQuestion(${i})" class="btn-bounce p-3.5 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-emerald-500 font-black text-slate-800 text-sm sm:text-base transition-all shadow-xs">
            ${opt}
          </button>
        `).join("")}
      </div>
    `;
  }

  answerArcadeQuestion(chosenIdx) {
    if (!this.arcadeState.isPlaying) return;

    const q = this.arcadeState.currentQuestion;
    const isCorrect = (chosenIdx === q.correct);

    if (isCorrect) {
      this.arcadeState.streak++;
      const multiplier = Math.min(this.arcadeState.streak, 5);
      const points = 10 * multiplier;
      this.arcadeState.score += points;

      if (window.soundManager) {
        if (this.arcadeState.streak > 2) window.soundManager.playStreak();
        else window.soundManager.playCorrect();
      }
    } else {
      this.arcadeState.streak = 0;
      if (window.soundManager) window.soundManager.playError();
    }

    const scoreEl = document.getElementById("arcade-score");
    const streakEl = document.getElementById("arcade-streak");
    if (scoreEl) scoreEl.textContent = this.arcadeState.score;
    if (streakEl) streakEl.textContent = `${this.arcadeState.streak}x`;

    this.nextArcadeQuestion();
  }

  finishArcadeGame() {
    this.stopArcadeTimer();
    this.arcadeState.isPlaying = false;

    const isRecord = this.arcadeState.score > this.arcadeState.highScore;
    if (isRecord) {
      this.arcadeState.highScore = this.arcadeState.score;
      this.saveState();
      if (window.confetti) window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.5 } });
      if (window.soundManager) window.soundManager.playSuccess();
    } else {
      if (window.soundManager) window.soundManager.playCorrect();
    }

    const starsWon = Math.floor(this.arcadeState.score / 50);
    if (starsWon > 0) this.addStars(starsWon);

    const container = document.getElementById("arcade-container");
    if (!container) return;

    container.innerHTML = `
      <div class="card-playful p-8 max-w-lg mx-auto text-center space-y-6 animate-pop">
        <div class="w-20 h-20 rounded-3xl ${isRecord ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'} flex items-center justify-center text-4xl mx-auto shadow-inner">
          ${isRecord ? '🏆' : '🎮'}
        </div>
        <div>
          <h3 class="text-2xl font-black text-slate-900 mb-1">¡Tiempo agotado!</h3>
          <p class="text-xs sm:text-sm text-slate-600">
            Has conseguido <strong class="text-emerald-700 text-base">${this.arcadeState.score} puntos</strong> en 45 segundos.
            ${isRecord ? '<br><span class="text-amber-600 font-extrabold">🎉 ¡Nuevo Récord Personal!</span>' : ''}
            ${starsWon > 0 ? `<br>⭐ Has ganado ${starsWon} estrellas bonus.` : ''}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onclick="app.startArcadeGame()" class="w-full sm:w-auto btn-bounce px-6 py-2.5 rounded-xl font-black text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md">
            Jugar otra partida 🕹️
          </button>
          <button onclick="app.renderArcadeSetup()" class="w-full sm:w-auto px-5 py-2.5 rounded-xl font-extrabold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200">
            Cambiar de modo 🔄
          </button>
        </div>
      </div>
    `;
  }

  stopArcadeGame() {
    this.stopArcadeTimer();
    this.arcadeState.isPlaying = false;
    this.renderArcadeSetup();
  }

  // ===========================================================================
  // VISTA 6: TALLER INTERACTIVO / LABORATORIO DE MULTIPLICAR
  // ===========================================================================
  setupLab() {
    this.renderLabGrid();
    this.renderLabDistributive();
    this.renderLabZeros();
    this.renderLabFunFacts();
  }

  renderLabGrid() {
    const container = document.getElementById("lab-grid-visualizer");
    if (!container) return;

    const r = this.labState.gridRows;
    const c = this.labState.gridCols;
    const total = r * c;

    let cellsHtml = "";
    for (let i = 0; i < total; i++) {
      cellsHtml += `<div class="grid-cell bg-emerald-500 text-white shadow-xs animate-pop">🍏</div>`;
    }

    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="text-xs font-black uppercase text-slate-500">
            Filas: <span class="text-emerald-700 font-black">${r}</span> × Columnas: <span class="text-emerald-700 font-black">${c}</span>
          </div>
          <button onclick="app.flipLabGrid()" class="btn-bounce px-3.5 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-black hover:bg-emerald-200 flex items-center gap-1.5">
            <span>🔄 Girar (Giro Conmutativo)</span>
          </button>
        </div>

        <div class="p-6 bg-slate-50 rounded-2xl border-2 border-emerald-100 flex flex-col items-center justify-center overflow-x-auto">
          <div class="grid gap-1.5" style="grid-template-columns: repeat(${c}, minmax(0, 1fr));">
            ${cellsHtml}
          </div>
        </div>

        <div class="text-center font-display font-black text-slate-900 text-base sm:text-lg">
          ${r} filas × ${c} columnas = <span class="text-emerald-600">${total}</span> manzanas
          <br>
          <span class="text-xs text-slate-500 font-sans font-semibold">
            Por la propiedad conmutativa: ${r} × ${c} = ${c} × ${r} = ${total}
          </span>
        </div>
      </div>
    `;
  }

  setLabGridDimensions(r, c) {
    this.labState.gridRows = r;
    this.labState.gridCols = c;
    if (window.soundManager) window.soundManager.playClick();
    this.renderLabGrid();
  }

  flipLabGrid() {
    const temp = this.labState.gridRows;
    this.labState.gridRows = this.labState.gridCols;
    this.labState.gridCols = temp;
    if (window.soundManager) window.soundManager.playCorrect();
    this.renderLabGrid();
  }

  renderLabDistributive() {
    const container = document.getElementById("lab-distributive-visualizer");
    if (!container) return;

    const num = this.labState.distribNum;
    const factor = this.labState.distribFactor;

    const tens = Math.floor(num / 10) * 10;
    const units = num % 10;

    const tensProduct = factor * tens;
    const unitsProduct = factor * units;
    const total = tensProduct + unitsProduct;

    container.innerHTML = `
      <div class="p-5 bg-slate-50 rounded-2xl border-2 border-emerald-100 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xs font-black uppercase text-slate-500">Multiplicar de cabeza:</span>
          <span class="text-lg font-black text-slate-900">${factor} × ${num}</span>
        </div>

        <div class="space-y-3 font-mono font-bold text-sm sm:text-base text-slate-800 bg-white p-4 rounded-xl border border-slate-200">
          <div class="text-slate-500 text-xs font-sans">1.º Descomponemos ${num} en decenas y unidades:</div>
          <div class="text-indigo-700">${factor} × (${tens} + ${units})</div>
          
          <div class="text-slate-500 text-xs font-sans">2.º Distribuimos el ${factor} multiplicando a cada parte:</div>
          <div class="text-emerald-700">(${factor} × ${tens}) + (${factor} × ${units})</div>

          <div class="text-slate-500 text-xs font-sans">3.º Sumamos los dos productos sencillos:</div>
          <div>${tensProduct} + ${unitsProduct} = <span class="text-emerald-600 font-black text-lg sm:text-xl font-display">${total}</span></div>
        </div>

        <div class="flex flex-wrap gap-2 pt-1">
          <span class="text-xs text-slate-500 font-bold self-center">Prueba con:</span>
          ${[14, 23, 35, 42].map(n => `
            <button onclick="app.setLabDistribNum(${n})" class="px-2.5 py-1 rounded-lg text-xs font-black ${this.labState.distribNum === n ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}">
              ${n}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  setLabDistribNum(n) {
    this.labState.distribNum = n;
    if (window.soundManager) window.soundManager.playClick();
    this.renderLabDistributive();
  }

  renderLabZeros() {
    const container = document.getElementById("lab-zeros-visualizer");
    if (!container) return;

    const base = this.labState.zerosBase;
    const mult = this.labState.zerosMultiplier;
    const prod = base * mult;

    container.innerHTML = `
      <div class="p-5 bg-slate-50 rounded-2xl border-2 border-emerald-100 space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-black uppercase text-slate-500">Cálculo con ceros finales:</span>
          <span class="text-lg font-black text-slate-900">${base} × ${mult}</span>
        </div>

        <div class="text-center py-4 bg-white rounded-xl border border-slate-200 font-display">
          <div class="text-3xl sm:text-4xl font-black text-emerald-600">
            ${prod.toLocaleString('es-ES')}
          </div>
          <p class="text-xs text-slate-500 font-sans font-semibold mt-1">
            ${mult >= 10 && mult <= 1000 ? `Se escribe ${base} y se añaden los ceros del factor.` : `Se calcula ${base} × ${mult / 100 || mult / 10} y se añaden los ceros.`}
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          ${[10, 100, 1000, 20, 200].map(m => `
            <button onclick="app.setLabZerosMultiplier(${m})" class="btn-bounce px-3 py-1.5 rounded-xl text-xs font-black ${this.labState.zerosMultiplier === m ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'}">
              × ${m}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  setLabZerosMultiplier(m) {
    this.labState.zerosMultiplier = m;
    if (window.soundManager) window.soundManager.playClick();
    this.renderLabZeros();
  }

  renderLabFunFacts() {
    const container = document.getElementById("lab-fun-facts");
    if (!container) return;

    const facts = this.data.lab.funFacts;
    container.innerHTML = facts.map(f => `
      <div class="card-playful p-5 border-2 border-slate-200 hover:border-amber-300 transition-colors">
        <div class="text-2xl mb-2">${f.icon}</div>
        <h4 class="font-black text-sm text-slate-900 mb-2">${f.title}</h4>
        <p class="text-xs text-slate-600 leading-relaxed">${f.text}</p>
      </div>
    `).join("");
  }

  // ===========================================================================
  // VISTA 7: ESQUEMAS VISUALES Y DIPLOMA OFICIAL IMPRIMIBLE
  // ===========================================================================
  renderCheatsheet() {
    const container = document.getElementById("cheatsheet-sections");
    if (!container) return;

    const sections = this.data.cheatsheet.sections;
    container.innerHTML = sections.map(s => `
      <div class="card-playful p-6 border-2 border-slate-200">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-2xl">${s.icon}</span>
          <h3 class="text-base sm:text-lg font-black text-slate-900">${s.title}</h3>
        </div>
        <div class="text-xs sm:text-sm text-slate-700 leading-relaxed">
          ${s.content}
        </div>
      </div>
    `).join("");

    this.updateDiploma(this.examState.lastScore || 10);
  }

  updateDiploma(grade) {
    const nameEl = document.getElementById("diploma-student-name");
    const gradeEl = document.getElementById("diploma-grade");
    const dateEl = document.getElementById("diploma-date");

    if (nameEl) nameEl.textContent = this.studentName;
    if (gradeEl) gradeEl.textContent = `${grade} / 10`;
    if (dateEl) {
      const today = new Date();
      dateEl.textContent = today.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    }
  }

  setStudentName(name) {
    this.studentName = name || "Olivia";
    this.saveState();
    this.updateDiploma(this.examState.lastScore || 10);
  }

  printDiploma() {
    if (window.soundManager) window.soundManager.playClick();
    window.print();
  }
}

// Inicialización global al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  window.app = new MathApp();
});
