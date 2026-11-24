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
    integ1: { test: 0, code: 0, max: 1.0, min: 0.5 },
    integ2: { test: 0, code: 0, max: 1.0, min: 0.5 },
  },
  quizAnswers: {},
};

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

const QUIZ_DATA = {
  // RA01
  "ra1-q1": {
    correct: "C",
    explanations: {
      A: "Incorrecte: 'int' és un tipus primitiu bàsic (enter de 32 bits).",
      B: "Incorrecte: 'double' és un tipus primitiu bàsic (número decimal de 64 bits).",
      C: "Correcte! 'literal' NO és un tipus de dada en Java, és simplement la representació fixa d'un valor al codi (com 42 o 'a'). Els tipus primitius són byte, short, int, long, float, double, char i boolean.",
      D: "Incorrecte: 'char' és un tipus primitiu bàsic per a caràcters simples."
    }
  },
  "ra1-q2": {
    correct: "B",
    explanations: {
      A: "Incorrecte: El símbol '#' s'utilitza en Python o Bash, no en Java.",
      B: "Correcte! '//' és el delimitador de comentari d'una sola línia en Java.",
      C: "Incorrecte: '/* ... */' s'utilitza per a comentaris de múltiples línies.",
      D: "Incorrecte: '--' és un operador de decrement en Java, no un comentari."
    }
  },
  "ra1-q3": {
    correct: "D",
    explanations: {
      A: "Incorrecte: '=' és l'operador d'assignació, no de comparació.",
      B: "Incorrecte: En Java, '==' compara referències de memòria en objectes, no el seu contingut de text. Per a String sempre s'ha d'usar .equals()!",
      C: "Incorrecte: '!=' comprova desigualtat de referències, no igualtat de contingut.",
      D: "Correcte! En Java, per comparar el contingut de dues cadenes String s'utilitza el mètode .equals()."
    }
  },
  "ra1-q4": {
    correct: "C",
    explanations: {
      A: "Incorrecte: Els identificadors en Java no poden començar per un dígit (3valor és il·legal).",
      B: "Incorrecte: Comença per un número i a més conté el guió '-', que és l'operador de resta.",
      C: "Correcte! 'valorInicial' compleix les regles de Java i segueix la convenció camelCase recomanada.",
      D: "Incorrecte: Els noms de variables no poden contenir espais en blanc."
    }
  },
  "ra1-q5": {
    correct: "C",
    explanations: {
      A: "Incorrecte: '3' és un literal de tipus 'char' (caràcter, delimitat per cometes simples).",
      B: "Incorrecte: \"3\" és un literal de tipus 'String' (text).",
      C: "Correcte! 3 escrit sense cometes ni punt decimal és un enter numèric ('int').",
      D: "Incorrecte: 3.0 és un literal numèric decimal ('double')."
    }
  },

  // RA02
  "ra3-q1": {
    correct: "B",
    explanations: {
      A: "Incorrecte: 'for' és un bucle de repetició, no una condició simple.",
      B: "Correcte! L'estructura 'if' avalua una expressió booleana i executa el bloc només si és certa.",
      C: "Incorrecte: 'int' és un tipus de dada.",
      D: "Incorrecte: 'String' és una classe per a cadenes de text."
    }
  },
  "ra3-q2": {
    correct: "B",
    explanations: {
      A: "Incorrecte: En Java la condició sempre ha d'anar entre parèntesis ().",
      B: "Correcte! La sintaxi és: while (condicio) { bloc_de_codi }.",
      C: "Incorrecte: El punt i coma ';' just després del parèntesi fa que el bucle siga buit i mai execute el bloc!",
      D: "Incorrecte: 'repeat' no és una paraula reservada en Java."
    }
  },
  "ra3-q3": {
    correct: "A",
    explanations: {
      A: "Correcte! Comença en 1, repeteix mentre i <= 10, i augmenta d'1 en 1 amb i++.",
      B: "Incorrecte: Decrementa amb i-- i el rang és inconsistent.",
      C: "Incorrecte: 'if' només s'executa una vegada, no és un bucle.",
      D: "Incorrecte: 'while (10)' no compila en Java perquè la condició ha de ser de tipus boolean."
    }
  },
  "ra3-q4": {
    correct: "B",
    explanations: {
      A: "Incorrecte: 'if' no repeteix, només tria si executar una vegada o no.",
      B: "Correcte! Tant 'for' com 'while' permeten repetir instruccions mentre una condició siga certa.",
      C: "Incorrecte: 'int' és un tipus numèric.",
      D: "Incorrecte: 'String' és text."
    }
  },
  "ra3-q5": {
    correct: "A",
    explanations: {
      A: "Correcte! 'if' executa el bloc si la condició és vertadera i 'else' l'alternativa si és falsa.",
      B: "Incorrecte: 'import' importa paquets i classes.",
      C: "Incorrecte: 'class' declara una classe.",
      D: "Incorrecte: 'new' instancia un objecte en memòria."
    }
  },

  // RA06
  "ra6-q1": {
    correct: "A",
    explanations: {
      A: "Correcte! 'int numeros[];' o 'int[] numeros;' són les formes vàlides de declarar un array d'enters en Java.",
      B: "Incorrecte: 'vector' no és paraula clau de tipus en Java bàsic.",
      C: "Incorrecte: En Java els arrays s'instancien amb 'new int[mida]' o claus '{1, 2}'.",
      D: "Incorrecte: Manca el nom de la variable."
    }
  },
  "ra6-q2": {
    correct: "A",
    explanations: {
      A: "Correcte! En Java (i a la majoria de llenguatges de programació), els vectors estan indexats començant en 0.",
      B: "Incorrecte: L'índex 1 és el segon element.",
      C: "Incorrecte: Índexs negatius provoquen ArrayIndexOutOfBoundsException en Java.",
      D: "Incorrecte: Sempre és fix en 0."
    }
  },
  "ra6-q3": {
    correct: "B",
    explanations: {
      A: "Incorrecte: java.random no és el paquet de col·leccions.",
      B: "Correcte! ArrayList es troba a 'java.util.ArrayList'.",
      C: "Incorrecte: java.array no existeix.",
      D: "Incorrecte: El paquet és java.util."
    }
  },
  "ra6-q4": {
    correct: "A",
    explanations: {
      A: "Correcte! El mètode .add(element) afegeix elements al final de la llista.",
      B: "Incorrecte: insert() no és el mètode d'ArrayList en Java.",
      C: "Incorrecte: push() és propi de piles (Stack) o JavaScript.",
      D: "Incorrecte: put() s'utilitza en Map (clau-valor)."
    }
  },
  "ra6-q5": {
    correct: "C",
    explanations: {
      A: "Incorrecte: 'if' avalua una sola condició.",
      B: "Incorrecte: 'main' és el mètode d'inici de l'aplicació.",
      C: "Correcte! El bucle 'for' (tradicional o for-each) permet recórrer ordenadament tots els elements del vector.",
      D: "Incorrecte: 'new' crea l'array a la memòria heap."
    }
  },
  // RA4 — Classes i programació orientada a objectes
  "ra5-q1": {
    correct: "A",
    explanations: {
      A: "Correcte! Scanner està al paquet java.util: import java.util.Scanner;",
      B: "Incorrecte: java.io.Print no és una classe estàndard per a entrada.",
      C: "Incorrecte: java.lang no conté la classe Scanner.",
      D: "Incorrecte: java.text.Reader no existeix per a aquest ús."
    }
  },
  "ra5-q2": {
    correct: "A",
    explanations: {
      A: "Correcte! nextLine() llegeix una línia sencera i la retorna com a String.",
      B: "Incorrecte: per a enters s'usa nextInt().",
      C: "Incorrecte: per a booleans s'usa nextBoolean().",
      D: "Incorrecte: per a decimals s'usa nextDouble()."
    }
  },
  "ra5-q3": {
    correct: "A",
    explanations: {
      A: "Correcte! nextInt() llegeix el següent token i el converteix a int.",
      B: "Incorrecte: nextLine() retorna text (String).",
      C: "Incorrecte: nextDouble() retorna un decimal.",
      D: "Incorrecte: no existeix nextChar() a Scanner."
    }
  },
  "ra5-q4": {
    correct: "A",
    explanations: {
      A: "Correcte! print() escriu sense afegir salt de línia; println() sí que l'afegeix.",
      B: "Incorrecte: println() afegeix un salt de línia.",
      C: "Incorrecte: write() no és la forma habitual de System.out.",
      D: "Incorrecte: System.out.line() no existeix."
    }
  },
  "ra5-q5": {
    correct: "A",
    explanations: {
      A: "Correcte! FileWriter (o BufferedWriter/Files) permet escriure en fitxers de text.",
      B: "Incorrecte: Scanner serveix per llegir dades.",
      C: "Incorrecte: ArrayList emmagatzema dades en memòria.",
      D: "Incorrecte: Math conté operacions matemàtiques."
    }
  },
};



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
        if (!selected) {
          alert("Si us plau, selecciona una opció abans de comprovar.");
          return;
        }
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

// --------------------------------------------------------------------------
// MOTOR DE CODI JAVA
// --------------------------------------------------------------------------
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

    const scoreKey = { "ex-ra1": "ra1", "ex-ra3": "ra3", "ex-ra5": "ra5", "ex-ra6": "ra6", "ex-integ1": "integ1", "ex-integ2": "integ2" }[exId];
    if (codeArea && scoreKey) {
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

const JAVA_EXERCISES = {
  "ex-ra1": {
    ra: "ra1", max: 2.0,
    proves: [{ inputs: [], etiqueta: "Execució del programa" }],
    criteris: function (ctx) {
      return [
        { ok: ctx.sortida.trim().length > 0, punts: 0.5, text: "El programa mostra un resultat per pantalla (sortida real)." },
        { ok: /int\s+[A-Za-z_][A-Za-z0-9_]*\s*=/.test(ctx.net), punts: 0.5, text: "Declara variables enteres amb int." },
        { ok: /\+\s*[A-Za-z0-9_]+/.test(ctx.net), punts: 0.5, text: " fa la suma amb l'operador +." },
        { ok: /\/\/.+/.test(ctx.code), punts: 0.5, text: "Inclou un comentari d'una línia amb //." }
      ];
    }
  },


  "ex-ra3": {
    ra: "ra3", max: 2.0,
    proves: [
      { inputs: ["15"], etiqueta: "Prova amb 15", esperat: "Positiu" },
      { inputs: ["-4"], etiqueta: "Prova amb -4", esperat: "Negatiu" },
      { inputs: ["0"], etiqueta: "Prova amb 0", esperat: "Zero" }
    ],
    criteris: function (ctx) {
      const criteris = ctx.resultats.map(function (r) {
        return { ok: r.resultat && r.resultat.sortida.indexOf(r.prova.esperat) !== -1, punts: 0.5, text: r.prova.etiqueta + " → mostra " + r.prova.esperat + "." };
      });
      criteris.push({ ok: /\bif\s*\(/.test(ctx.net) && /else\s+if\s*\(/.test(ctx.net) && /\belse\b/.test(ctx.net), punts: 0.5, text: "Fa servir if / else if / else." });
      return criteris;
    }
  },


  "ex-ra5": {
    ra: "ra5", max: 2.0, defaultInputs: ["Laura", "19"],
    criteris: function (ctx) {
      const nom = ctx.inputs[0] || "Laura";
      const edat = parseInt(ctx.inputs[1], 10) || 19;
      const esperat = "Hola " + nom + ", vas nàixer l'any " + (2026 - edat) + ".";
      return [
        { ok: /Scanner\s+[A-Za-z_][A-Za-z0-9_]*\s*=\s*new\s+Scanner/.test(ctx.net), punts: 0.4, text: "Crea l'objecte Scanner." },
        { ok: /\.nextLine\s*\(\s*\)/.test(ctx.net), punts: 0.4, text: "Llegeix el nom amb nextLine()." },
        { ok: /\.nextInt\s*\(\s*\)/.test(ctx.net), punts: 0.4, text: "Llegeix l'edat amb nextInt()." },
        { ok: /20\d\d\s*-\s*[A-Za-z_][A-Za-z0-9_]*/.test(ctx.net), punts: 0.4, text: "Calcula l'any restant l'edat a 2026." },
        { ok: ctx.sortida.indexOf(esperat) !== -1, punts: 0.4, text: 'La sortida real conté: "' + esperat + '"' }
      ];
    }
  },

  "ex-ra6": {
    ra: "ra6", max: 2.0, defaultInputs: ["12", "4", "99", "1", "35"],
    criteris: function (ctx) {
      const nums = ctx.inputs.map(Number).filter(function (n) { return Number.isFinite(n); });
      const max = nums.length ? Math.max.apply(null, nums) : 99;
      const min = nums.length ? Math.min.apply(null, nums) : 1;
      return [
        { ok: /int\s*\[\s*\]\s*[A-Za-z_][A-Za-z0-9_]*\s*=\s*new\s+int\s*\[\s*5\s*\]/.test(ctx.net) || /int\s+[A-Za-z_][A-Za-z0-9_]*\s*\[\s*\]\s*=\s*new\s+int\s*\[\s*5\s*\]/.test(ctx.net), punts: 0.4, text: "Crea el vector int[5]." },
        { ok: /for\s*\(/.test(ctx.net), punts: 0.4, text: "Fa servir un bucle for." },
        { ok: /\bmax\b/.test(ctx.net) && /\bmin\b/.test(ctx.net), punts: 0.4, text: "Empra les variables max i min." },
        { ok: />\s*[A-Za-z_][A-Za-z0-9_]*/.test(ctx.net) && /<\s*[A-Za-z_][A-Za-z0-9_]*/.test(ctx.net), punts: 0.4, text: "Compara els valors del vector." },
        { ok: ctx.sortida.indexOf("Màxim: " + max) !== -1 && ctx.sortida.indexOf("Mínim: " + min) !== -1, punts: 0.4, text: "La sortida mostra Màxim: " + max + " i Mínim: " + min + "." }
      ];
    }
  },

  // Exercicis integrats: pràctica addicional, no compten dins dels 10 punts
  "ex-integ1": {
    ra: "integ1", max: 1.0, defaultInputs: ["20", "35", "31", "18", "40"],
    criteris: function (ctx) {
      return [
        { ok: /\/\/.+/.test(ctx.code), punts: 0.15, text: "RA1: has afegit un comentari amb //." },
        { ok: /calorosos\s*=\s*0/.test(ctx.net), punts: 0.15, text: "RA1: has declarat i inicialitzat calorosos." },
        { ok: /for\s*\(/.test(ctx.net), punts: 0.15, text: "RA6: fas servir un bucle for per recórrer el vector." },
        { ok: />\s*max/.test(ctx.net) && /<\s*min/.test(ctx.net), punts: 0.15, text: "RA3: compares per actualitzar la màxima i la mínima." },
        { ok: ctx.sortida.indexOf("Màxima: 40") !== -1, punts: 0.2, text: "RA5: la sortida mostra Màxima: 40." },
        { ok: ctx.sortida.indexOf("Mínima: 18") !== -1, punts: 0.1, text: "RA5: la sortida mostra Mínima: 18." },
        { ok: ctx.sortida.indexOf("Dies calorosos: 3") !== -1, punts: 0.1, text: "RA3: la sortida mostra Dies calorosos: 3." }
      ];
    }
  },

  "ex-integ2": {
    ra: "integ2", max: 1.0, defaultInputs: ["4", "7", "5", "8"],
    criteris: function (ctx) {
      return [
        { ok: /\/\/.+/.test(ctx.code), punts: 0.15, text: "RA1: has afegit un comentari amb //." },
        { ok: /aprovats\s*=\s*0/.test(ctx.net), punts: 0.15, text: "RA1: has declarat i inicialitzat aprovats." },
        { ok: /for\s*\(/.test(ctx.net), punts: 0.15, text: "RA6: fas servir un bucle for amb el vector." },
        { ok: /notes\s*\[[^\]]+\]\s*>=\s*5/.test(ctx.net), punts: 0.15, text: "RA3: comptes les notes >= 5 amb un if." },
        { ok: ctx.sortida.indexOf("Mitjana: 6") !== -1, punts: 0.2, text: "RA5: la sortida mostra Mitjana: 6." },
        { ok: ctx.sortida.indexOf("Aprovats: 3") !== -1, punts: 0.2, text: "RA5: la sortida mostra Aprovats: 3." }
      ];
    }
  }
};

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
