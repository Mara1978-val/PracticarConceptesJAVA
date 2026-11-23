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

const RAS = ["ra1", "ra2", "ra3", "ra4", "ra5", "ra6"];

const appState = {
  scores: {
    ra1: { test: 0, code: 0, max: 1.5, min: 0.75 },
    ra2: { test: 0, code: 0, max: 1.5, min: 0.75 },
    ra3: { test: 0, code: 0, max: 1.5, min: 0.75 },
    ra4: { test: 0, code: 0, max: 2.0, min: 1.0 },
    ra5: { test: 0, code: 0, max: 1.5, min: 0.75 },
    ra6: { test: 0, code: 0, max: 2.0, min: 1.0 },
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
  "ra2-q1": {
    correct: "C",
    explanations: {
      A: "Incorrecte: System.read() no és la instrucció per mostrar text.",
      B: "Incorrecte: System.get() no existeix per a sortida estàndard.",
      C: "Correcte! System.out.println() imprimeix el text indicat a la consola seguit d'un salt de línia.",
      D: "Incorrecte: Console.write() pertany a C# o altres llenguatges, no a l'estàndard de Java."
    }
  },
  "ra2-q2": {
    correct: "C",
    explanations: {
      A: "Incorrecte: 'function' no és paraula clau de Java (és pròpia d'altres llenguatges).",
      B: "Incorrecte: 'struct' és pròpia de C o C#, no de Java.",
      C: "Correcte! Les classes es declaren amb la paraula clau 'class', per exemple: class Persona { ... }.",
      D: "Incorrecte: 'interface' declara una interfície, no una classe."
    }
  },
  "ra2-q3": {
    correct: "C",
    explanations: {
      A: "Incorrecte: Per a booleans s'utilitza nextBoolean().",
      B: "Incorrecte: Per a decimals s'utilitza nextDouble().",
      C: "Correcte! nextInt() llegeix i retorna el següent número enter ('int') de l'entrada.",
      D: "Incorrecte: Per a String s'utilitza next() o nextLine()."
    }
  },
  "ra2-q4": {
    correct: "C",
    explanations: {
      A: "Incorrecte: System.out.println només imprimeix dades.",
      B: "Incorrecte: Scanner serveix per llegir el flux, però cal guardar-lo amb '='.",
      C: "Correcte! L'operador d'assignació '=' és el que emmagatzema el resultat d'una expressió dins d'una variable.",
      D: "Incorrecte: input() pertany a Python."
    }
  },
  "ra2-q5": {
    correct: "B",
    explanations: {
      A: "Incorrecte: En Java pur cal indicar la classe i flux 'System.out.println'.",
      B: "Correcte! System.out.println(\"Hola\"); és sintàcticament perfecte en Java.",
      C: "Incorrecte: Console.out no és vàlid.",
      D: "Incorrecte: Show() no és un mètode integrat en Java."
    }
  },

  // RA03
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
  "ra4-q1": {
    correct: "A",
    explanations: {
      A: "Correcte! El constructor té el mateix nom que la classe i no indica tipus de retorn; s'executa en crear l'objecte amb new.",
      B: "Incorrecte: main és el punt d'entrada del programa, no el constructor.",
      C: "Incorrecte: static indica que el mètode pertany a la classe, no al constructor.",
      D: "Incorrecte: un camp privat és un atribut, no un constructor."
    }
  },
  "ra4-q2": {
    correct: "A",
    explanations: {
      A: "Correcte! private limita l'accés al camp a la pròpia classe (encapsulació).",
      B: "Incorrecte: public deixa el camp accessible des de qualsevol classe.",
      C: "Incorrecte: static fa que el camp sigui de classe, no controla la visibilitat.",
      D: "Incorrecte: void indica que un mètode no retorna valor."
    }
  },
  "ra4-q3": {
    correct: "A",
    explanations: {
      A: "Correcte! new crea una instància (objecte) de la classe i crida el seu constructor.",
      B: "Incorrecte: la classe es declara amb class, no amb new.",
      C: "Incorrecte: main no es crida amb new.",
      D: "Incorrecte: per eliminar objectes Java ja té el recol·lector de memòria."
    }
  },
  "ra4-q4": {
    correct: "A",
    explanations: {
      A: "Correcte! Encapsular és amagar els camps (private) i exposar mètodes públics per accedir-hi.",
      B: "Incorrecte: repetir codi és exactament el que cal evitar.",
      C: "Incorrecte: heretar és un altre principi (heretatge).",
      D: "Incorrecte: imprimir dades és entrada/sortida, no encapsulació."
    }
  },
  "ra4-q5": {
    correct: "A",
    explanations: {
      A: "Correcte! static indica que el mètode o camp pertany a la classe i es pot cridar sense crear un objecte.",
      B: "Incorrecte: private controla la visibilitat, no la pertinença a la classe.",
      C: "Incorrecte: final evita que el valor o la classe es modifici.",
      D: "Incorrecte: new serveix per crear instàncies."
    }
  },
  // RA5 — Entrada i sortida d'informació
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

    const scoreKey = { "ex-ra1": "ra1", "ex-ra2": "ra2", "ex-ra3": "ra3", "ex-ra4": "ra4", "ex-ra5": "ra5", "ex-ra6": "ra6" }[exId];
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
    ra: "ra1", max: 1.0,
    proves: [{ inputs: [], etiqueta: "Execució del programa" }],
    criteris: function (ctx) {
      return [
        { ok: ctx.sortida.trim().length > 0, punts: 0.25, text: "El programa mostra un resultat per pantalla (sortida real)." },
        { ok: /int\s+[A-Za-z_][A-Za-z0-9_]*\s*=/.test(ctx.net), punts: 0.25, text: "Declara variables enteres amb int." },
        { ok: /\+\s*[A-Za-z0-9_]+/.test(ctx.net), punts: 0.25, text: " fa la suma amb l'operador +." },
        { ok: /\/\/.+/.test(ctx.code), punts: 0.25, text: "Inclou un comentari d'una línia amb //." }
      ];
    }
  },

  "ex-ra2": {
    ra: "ra2", max: 1.0, defaultInputs: ["Marta", "Alejandro"],
    criteris: function (ctx) {
      const n1 = ctx.inputs[0] || "Marta", n2 = ctx.inputs[1] || "Alejandro";
      const l1 = n1.length, l2 = n2.length;
      const guanyador = l1 >= l2 ? n1 : n2;
      const llines = [n1 + " té " + l1 + " lletres.", n2 + " té " + l2 + " lletres.", "El nom més llarg és: " + guanyador];
      return [
        { ok: ctx.metodes.indexOf("getLongitud") !== -1, punts: 0.2, text: "Defineix la funció getLongitud(String)." },
        { ok: ctx.metodes.indexOf("compararLongitud") !== -1, punts: 0.2, text: "Defineix la funció compararLongitud(int, int)." },
        { ok: /\.length\s*\(\s*\)/.test(ctx.net), punts: 0.2, text: "Fa servir .length() per comptar caràcters." },
        { ok: (ctx.net.match(/\breturn\b/g) || []).length >= 2, punts: 0.2, text: "Les funcions retornen valors amb return." },
        { ok: llines.every(function (l) { return ctx.sortida.indexOf(l) !== -1; }), punts: 0.2, text: "La sortida real mostra les tres línies esperades." }
      ];
    }
  },

  "ex-ra3": {
    ra: "ra3", max: 1.0,
    proves: [
      { inputs: ["15"], etiqueta: "Prova amb 15", esperat: "Positiu" },
      { inputs: ["-4"], etiqueta: "Prova amb -4", esperat: "Negatiu" },
      { inputs: ["0"], etiqueta: "Prova amb 0", esperat: "Zero" }
    ],
    criteris: function (ctx) {
      const criteris = ctx.resultats.map(function (r) {
        return { ok: r.resultat && r.resultat.sortida.indexOf(r.prova.esperat) !== -1, punts: 0.25, text: r.prova.etiqueta + " → mostra " + r.prova.esperat + "." };
      });
      criteris.push({ ok: /\bif\s*\(/.test(ctx.net) && /else\s+if\s*\(/.test(ctx.net) && /\belse\b/.test(ctx.net), punts: 0.25, text: "Fa servir if / else if / else." });
      return criteris;
    }
  },

  "ex-ra4": {
    ra: "ra4", max: 1.5, defaultInputs: ["Marta", "20"],
    criteris: function (ctx) {
      const nom = ctx.inputs[0] || "Marta";
      const edat = parseInt(ctx.inputs[1], 10) || 20;
      const esperat = nom + " té " + edat + " anys.";
      return [
        { ok: ctx.classes.indexOf("Persona") !== -1, punts: 0.3, text: "Declara la classe Persona." },
        { ok: /private\s+(String|int)\s+[A-Za-z_]/.test(ctx.net), punts: 0.3, text: "Declara camps privats (private)." },
        { ok: /Persona\s*\(\s*String\s+[A-Za-z_][A-Za-z0-9_]*\s*,\s*int\s+[A-Za-z_][A-Za-z0-9_]*\s*\)/.test(ctx.net), punts: 0.3, text: "Implementa el constructor Persona(String, int)." },
        { ok: ctx.metodes.indexOf("getNom") !== -1 && ctx.metodes.indexOf("getEdat") !== -1, punts: 0.3, text: "Defineix els mètodes getNom() i getEdat()." },
        { ok: ctx.sortida.indexOf(esperat) !== -1, punts: 0.3, text: "La sortida real mostra: " + esperat + "." }
      ];
    }
  },

  "ex-ra5": {
    ra: "ra5", max: 1.0, defaultInputs: ["Laura", "19"],
    criteris: function (ctx) {
      const nom = ctx.inputs[0] || "Laura";
      const edat = parseInt(ctx.inputs[1], 10) || 19;
      const esperat = "Hola " + nom + ", vas nàixer l'any " + (2026 - edat) + ".";
      return [
        { ok: /Scanner\s+[A-Za-z_][A-Za-z0-9_]*\s*=\s*new\s+Scanner/.test(ctx.net), punts: 0.2, text: "Crea l'objecte Scanner." },
        { ok: /\.nextLine\s*\(\s*\)/.test(ctx.net), punts: 0.2, text: "Llegeix el nom amb nextLine()." },
        { ok: /\.nextInt\s*\(\s*\)/.test(ctx.net), punts: 0.2, text: "Llegeix l'edat amb nextInt()." },
        { ok: /20\d\d\s*-\s*[A-Za-z_][A-Za-z0-9_]*/.test(ctx.net), punts: 0.2, text: "Calcula l'any restant l'edat a 2026." },
        { ok: ctx.sortida.indexOf(esperat) !== -1, punts: 0.2, text: 'La sortida real conté: "' + esperat + '"' }
      ];
    }
  },

  "ex-ra6": {
    ra: "ra6", max: 1.5, defaultInputs: ["12", "4", "99", "1", "35"],
    criteris: function (ctx) {
      const nums = ctx.inputs.map(Number).filter(function (n) { return Number.isFinite(n); });
      const max = nums.length ? Math.max.apply(null, nums) : 99;
      const min = nums.length ? Math.min.apply(null, nums) : 1;
      return [
        { ok: /int\s*\[\s*\]\s*[A-Za-z_][A-Za-z0-9_]*\s*=\s*new\s+int\s*\[\s*5\s*\]/.test(ctx.net) || /int\s+[A-Za-z_][A-Za-z0-9_]*\s*\[\s*\]\s*=\s*new\s+int\s*\[\s*5\s*\]/.test(ctx.net), punts: 0.3, text: "Crea el vector int[5]." },
        { ok: /for\s*\(/.test(ctx.net), punts: 0.3, text: "Fa servir un bucle for." },
        { ok: /\bmax\b/.test(ctx.net) && /\bmin\b/.test(ctx.net), punts: 0.3, text: "Empra les variables max i min." },
        { ok: />\s*[A-Za-z_][A-Za-z0-9_]*/.test(ctx.net) && /<\s*[A-Za-z_][A-Za-z0-9_]*/.test(ctx.net), punts: 0.3, text: "Compara els valors del vector." },
        { ok: ctx.sortida.indexOf("Màxim: " + max) !== -1 && ctx.sortida.indexOf("Mínim: " + min) !== -1, punts: 0.3, text: "La sortida mostra Màxim: " + max + " i Mínim: " + min + "." }
      ];
    }
  }
};

function llegirEntrades(text) {
  return String(text || "").split(/\r?\n/).map(function (x) { return x.trim(); }).filter(function (x) { return x.length > 0; });
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
    });
    feedback.push("Corregix els errors d'execució i torna a prémer «Executar i Corregir codi».");
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
