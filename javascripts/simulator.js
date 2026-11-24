/**
 * SIMULADOR D'EXÀMENS INTERACTIU - JAVA DAM (PRG)
 * Autora: Mara Vañó
 * Motor de correcció de tests i avaluació de codi Java amb intèrpret integrat.
 */

document.addEventListener("DOMContentLoaded", function () {
  initScoreDashboard();
  initQuizSystem();
  initJavaCodeRunners();
});

const RAS = ["ra1", "ra3", "ra5", "ra6"];

const appState = {
  scores: {
    ra1: { test: 0, code: 0, max: 2.5, min: 1.25 },
    ra3: { test: 0, code: 0, max: 2.5, min: 1.25 },
    ra5: { test: 0, code: 0, max: 2.5, min: 1.25 },
    ra6: { test: 0, code: 0, max: 2.5, min: 1.25 },
  },
  quizAnswers: {},
};

// Cada exercici integrat té el seu propi estat (pràctica addicional)
Object.keys(window.INTEGRATS || {}).forEach(function (nivell) {
  window.INTEGRATS[nivell].forEach(function (ex) {
    appState.scores[ex.id] = { test: 0, code: 0, max: 1.0, min: 0.5 };
  });
});

function initScoreDashboard() { updateDashboardUI(); }

function updateDashboardUI() {
  let grandTotal = 0;
  RAS.forEach(function (ra) {
    const dades = appState.scores[ra];
    const total = (dades.test + dades.code).toFixed(2);
    grandTotal += parseFloat(total);
    updatePillUI(ra, total, dades.max, dades.min);
  });
  const totalEl = document.getElementById("dash-total-score");
  if (totalEl) totalEl.textContent = grandTotal.toFixed(2) + " / 10";
}

function updatePillUI(raKey, currentScore, maxScore, minPass) {
  const scoreEl = document.getElementById(`dash-${raKey}-score`);
  const tagEl = document.getElementById(`dash-${raKey}-tag`);
  if (!scoreEl || !tagEl) return;
  scoreEl.textContent = `${currentScore} / ${maxScore}`;
  const num = parseFloat(currentScore);
  if (num === 0) {
    tagEl.className = "ra-status-tag status-pending";
    tagEl.textContent = "Pendent (Mín. " + minPass + ")";
  } else if (num >= minPass) {
    tagEl.className = "ra-status-tag status-passed";
    tagEl.textContent = "✔ Superat (>= 50%)";
  } else {
    tagEl.className = "ra-status-tag status-failed";
    tagEl.textContent = "✘ No superat (< " + minPass + ")";
  }
}

function initQuizSystem() {
  document.querySelectorAll(".quiz-card").forEach(function (card) {
    const qid = card.getAttribute("data-qid");
    const options = card.querySelectorAll(".quiz-option");
    const checkBtn = card.querySelector(".quiz-btn-check");
    const feedbackBox = card.querySelector(".quiz-feedback");

    options.forEach(function (opt) {
      opt.addEventListener("click", function () {
        const radio = opt.querySelector("input[type='radio']");
        if (radio) radio.checked = true;
      });
    });

    if (checkBtn) {
      checkBtn.addEventListener("click", function () {
        const selected = card.querySelector("input[type='radio']:checked");
        if (!selected) { alert("Si us plau, selecciona una opció abans de comprovar."); return; }
        const chosenVal = selected.value;
        const qData = QUIZ_DATA[qid];
        if (!qData) return;
        const isCorrect = chosenVal === qData.correct;
        appState.quizAnswers[qid] = isCorrect;
        options.forEach(function (opt) {
          opt.classList.remove("correct-option", "incorrect-option");
          const radio = opt.querySelector("input[type='radio']");
          if (radio.value === qData.correct) opt.classList.add("correct-option");
          else if (radio.value === chosenVal && !isCorrect) opt.classList.add("incorrect-option");
        });
        const explText = qData.explanations[chosenVal] || "";
        feedbackBox.className = "quiz-feedback " + (isCorrect ? "feedback-correct" : "feedback-incorrect");
        feedbackBox.innerHTML = `<strong>${isCorrect ? "✔ Resposta Correcta!" : "✘ Resposta Incorrecta!"}</strong><br>${explText}`;
        recalcRaQuizScores();
        updateDashboardUI();
      });
    }
  });
}

function recalcRaQuizScores() {
  RAS.forEach(function (ra) {
    let correctCount = 0;
    for (let i = 1; i <= 5; i++) {
      if (appState.quizAnswers[`${ra}-q${i}`] === true) correctCount++;
    }
    appState.scores[ra].test = correctCount * 0.1;
  });
}

function initJavaCodeRunners() {
  document.querySelectorAll(".java-exercise-card").forEach(function (card) {
    const exId = card.getAttribute("data-ex-id");
    const codeArea = card.querySelector(".java-code-area");
    const runBtn = card.querySelector(".btn-run");
    const resetBtn = card.querySelector(".btn-reset");
    const solBtn = card.querySelector(".btn-solution");
    const terminal = card.querySelector(".terminal-window");
    const termBody = card.querySelector(".terminal-body");
    const feedBox = card.querySelector(".pedagogical-feedback");
    const solBox = card.querySelector(".solution-box");
    const defaultCode = codeArea.value;
    const scoreKey = exId.startsWith("ex-ra") ? exId.slice(3) : exId;

    if (codeArea && appState.scores[scoreKey]) {
      codeArea.addEventListener("input", function () {
        appState.scores[scoreKey].code = 0;
        updateDashboardUI();
        if (feedBox) {
          feedBox.className = "pedagogical-feedback";
          feedBox.style.display = "none";
          feedBox.innerHTML = "";
        }
      });
    }
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        codeArea.value = defaultCode;
        if (terminal) terminal.style.display = "none";
        if (feedBox) feedBox.style.display = "none";
      });
    }
    if (solBtn && solBox) {
      solBtn.addEventListener("click", function () {
        const isHidden = solBox.style.display === "none" || solBox.style.display === "";
        solBox.style.display = isHidden ? "block" : "none";
        solBtn.textContent = isHidden ? "Ocultar solució" : "💡 Veure solució guiada";
      });
    }
    if (runBtn) {
      runBtn.addEventListener("click", function () {
        const code = codeArea.value;
        terminal.style.display = "block";
        feedBox.style.display = "block";
        termBody.textContent = "Executant el codi amb l'intèrpret integrat…\n";
        setTimeout(function () {
          avaluarExerciciJava(exId, code, termBody, feedBox, card);
          updateDashboardUI();
        }, 120);
      });
    }
  });
}

// Les dades de cada RA viuen a dades/ra*.js i les pràctiques a dades/int-*.js
const QUIZ_DATA = Object.assign({}, ...Object.keys(window.RA_DATA).map((ra) => window.RA_DATA[ra].test));
const JAVA_EXERCISES = Object.assign(
  {},
  Object.fromEntries(Object.keys(window.RA_DATA).map((ra) => {
    const e = window.RA_DATA[ra].exercici;
    return [Object.keys(e)[0], e[Object.keys(e)[0]]];
  })),
  Object.fromEntries(Object.keys(window.INTEGRATS || {}).flatMap((nivell) =>
    window.INTEGRATS[nivell].map((ex) => {
      const base = ex.id;
      const criteris = function (ctx) {
        const comprova = (re, text) => new RegExp(re).test(text);
        const variablesOk = ex.variables.every((v) => comprova("\\b" + v + "\\s*=", ctx.net));
        const sortides = ex.sortides.concat(["", "", ""]).slice(0, 3);
        return [
          { ok: /\/\/.+/.test(ctx.code), punts: 0.1, text: "RA1: has afegit un comentari amb //." },
          { ok: variablesOk, punts: 0.1, text: "RA1: declara les variables " + ex.variables.join(", ") + "." },
          { ok: /=\s*[^;]+[+*\/-]/.test(ctx.net), punts: 0.1, text: "RA1: fa servir una operació aritmètica." },
          { ok: new RegExp(ex.bucle + "\\s*\\(").test(ctx.net), punts: 0.1, text: "RA3: fa servir un bucle " + ex.bucle + "." },
          { ok: ctx.net.includes(ex.condicio), punts: 0.1, text: "RA3: aplica la condició " + ex.condicio + "." },
          ...sortides.map((sortida, i) => ({ ok: sortida ? ctx.sortida.includes(sortida) : ctx.sortida.trim().length > 0, punts: 0.1, text: "RA5: sortida " + (i + 1) + (sortida ? ": " + sortida : " visible") + "." })),
          { ok: new RegExp("int\\s*\\[\\s*\\]\\s*" + ex.vector + "|int\\s+" + ex.vector + "\\s*\\[").test(ctx.net), punts: 0.1, text: "RA6: declara el vector " + ex.vector + "." },
          { ok: ctx.net.includes(ex.vector + "["), punts: 0.1, text: "RA6: accedeix al vector " + ex.vector + "." }
        ];
      };
      return [base, { ra: base, max: 1.0, defaultInputs: ex.entrades, criteris: criteris }];
    })
  ))
);



function llegirEntrades(text) {
  return String(text || "").split(/\r?\n/).map(function (x) { return x.trim(); }).filter(function (x) { return x.length > 0; });
}

// Explicació pedagogica dels errors d'execució més habituals
function consellError(missatge) {
  if (/no està declarada/i.test(missatge))
    return "Comprova que has declarat la variable abans de fer-la servir, per exemple: int calorosos = 0;";
  if (/S'esperava ';'/i.test(missatge))
    return "Sembla que falta un punt i coma ';' al final de la instrucció de la línia indicada.";
  if (/S'esperava '\)'/i.test(missatge))
    return "Revisa els parèntesis: potser t'hi falta un ')' o has posat una coma de més.";
  if (/índex fora|Index fora/i.test(missatge))
    return "L'índex del vector està fora de rang. Recorda que un int[5] va de l'índex 0 al 4.";
  if (/No queden dades/i.test(missatge))
    return "Has cridat nextInt()/nextLine() més vegades que dades d'entrada. Revisa el camp «Dades d'entrada».";
  if (/no existeix/i.test(missatge))
    return "Revisa el nom del mètode o de la variable: potser està mal escrit o encara no l'has declarat.";
  return "Llegeix la línia indicada i revisa la sintaxi: punts i coma, parèntesis i noms de variables.";
}

function avaluarExerciciJava(exId, code, termBody, feedBox, card) {
  const cfg = JAVA_EXERCISES[exId];
  if (!cfg) return;
  const net = code.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, "");
  const campEntrada = card ? card.querySelector(".java-input-data") : null;
  const entradesUsuari = campEntrada ? llegirEntrades(campEntrada.value) : [];
  const entrades = entradesUsuari.length ? entradesUsuari : (cfg.defaultInputs || []);
  const proves = (cfg.proves || [{ inputs: entrades, etiqueta: "Execució del programa" }]).map(function (p, i) {
    return { etiqueta: p.etiqueta || "Prova " + (i + 1), inputs: p.inputs || entrades, esperat: p.esperat };
  });

  const resultats = proves.map(function (prova) {
    try { return { prova: prova, resultat: window.JavaMini.executar(code, prova.inputs), error: null }; }
    catch (err) { return { prova: prova, resultat: null, error: err }; }
  });

  const logs = ["[intèrpret Java integrat] Execució real del codi", ""];
  let score = 0;
  let feedback = [];
  const errors = resultats.filter(function (r) { return r.error; });

  if (errors.length) {
    logs.push("✘ No s'ha pogut executar el programa:");
    errors.forEach(function (r) {
      logs.push("  " + r.prova.etiqueta + " → " + (r.error.linia ? "línia " + r.error.linia + ": " : "") + r.error.message);
      logs.push("    💡 " + consellError(r.error.message));
    });
    feedback.push("Corregix els errors d'execució (la consola t'ho explica línia a línia) i torna a prémer «Executar i Corregir codi».");
  } else {
    resultats.forEach(function (r) {
      logs.push("▸ " + r.prova.etiqueta + (r.prova.inputs.length ? " · dades: " + r.prova.inputs.join(", ") : ""));
      logs.push(r.resultat.sortida.length ? r.resultat.sortida.replace(/\n$/, "") : "(el programa no ha mostrat res)");
      logs.push("");
    });
    const primera = resultats[0].resultat;
    const ctx = {
      code: code, net: net, inputs: entrades,
      sortida: resultats.map(function (r) { return r.resultat.sortida; }).join("\n"),
      metodes: primera.metodes, classes: primera.classes || [], resultats: resultats
    };
    cfg.criteris(ctx).forEach(function (c) {
      if (c.ok) { score += c.punts; logs.push("  ✔ " + c.text + "  (+" + c.punts.toFixed(2) + ")"); }
      else { logs.push("  ✘ " + c.text); feedback.push(c.text); }
    });
  }

  logs.push("🏁 Qualificació: " + score.toFixed(2) + " / " + cfg.max.toFixed(2) + " punts");
  termBody.textContent = logs.join("\n");

  if (!feedback.length) {
    feedBox.className = "pedagogical-feedback feedback-correct";
    feedBox.innerHTML = "<strong>🎉 Molt bé!</strong> El codi s'ha executat correctament i compleix tots els criteris (" + score.toFixed(2) + " / " + cfg.max.toFixed(2) + ").";
  } else {
    feedBox.className = "pedagogical-feedback feedback-incorrect";
    feedBox.innerHTML = "<strong>🔍 Revisa aquests punts (" + score.toFixed(2) + " / " + cfg.max.toFixed(2) + "):</strong><br><ul>" +
      feedback.map(function (f) { return "<li>" + f + "</li>"; }).join("") + "</ul>";
  }

  appState.scores[cfg.ra].code = Math.round(score * 100) / 100;
}

function evalJavaExercise(exId, code, termBody, feedBox, card) {
  avaluarExerciciJava(exId, code, termBody, feedBox, card);
}
