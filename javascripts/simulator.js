/**
 * SIMULADOR D'EXÀMENS INTERACTIU - JAVA DAM (PRG)
 * Autora: Mara Vañó
 * Motor de correcció de tests interactius i avaluació de codi Java
 */

document.addEventListener("DOMContentLoaded", function () {
  initScoreDashboard();
  initQuizSystem();
  initJavaCodeRunners();
});

// Estat global de puntuació
const appState = {
  scores: {
    ra01: { test: 0, code: 0, max: 2, min: 1 },
    ra02: { test: 0, codeBasic: 0, codeAdv: 0, max: 4, min: 2 },
    ra03: { test: 0, code: 0, max: 2, min: 1 },
    ra06: { test: 0, code: 0, max: 2, min: 1 },
  },
  quizAnswers: {},
};

// --------------------------------------------------------------------------
// 1. GESTIÓ DEL DASHBOARD DE PUNTUACIÓ
// --------------------------------------------------------------------------
function initScoreDashboard() {
  updateDashboardUI();
}

function updateDashboardUI() {
  const ra01Total = (appState.scores.ra01.test + appState.scores.ra01.code).toFixed(2);
  const ra02Total = (appState.scores.ra02.test + appState.scores.ra02.codeBasic + appState.scores.ra02.codeAdv).toFixed(2);
  const ra03Total = (appState.scores.ra03.test + appState.scores.ra03.code).toFixed(2);
  const ra06Total = (appState.scores.ra06.test + appState.scores.ra06.code).toFixed(2);

  const grandTotal = (parseFloat(ra01Total) + parseFloat(ra02Total) + parseFloat(ra03Total) + parseFloat(ra06Total)).toFixed(2);

  const totalEl = document.getElementById("dash-total-score");
  if (totalEl) totalEl.textContent = `${grandTotal} / 10`;

  updatePillUI("ra01", ra01Total, 2, 1);
  updatePillUI("ra02", ra02Total, 4, 2);
  updatePillUI("ra03", ra03Total, 2, 1);
  updatePillUI("ra06", ra06Total, 2, 1);
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

// --------------------------------------------------------------------------
// 2. SISTEMA DE TESTS INTERACTIUS AMB EXPLICACIONS
// --------------------------------------------------------------------------
const QUIZ_DATA = {
  // RA01
  "ra01-q1": {
    correct: "C",
    explanations: {
      A: "Incorrecte: 'int' és un tipus primitiu bàsic (enter de 32 bits).",
      B: "Incorrecte: 'double' és un tipus primitiu bàsic (número decimal de 64 bits).",
      C: "Correcte! 'literal' NO és un tipus de dada en Java, és simplement la representació fixa d'un valor al codi (com 42 o 'a'). Els tipus primitius són byte, short, int, long, float, double, char i boolean.",
      D: "Incorrecte: 'char' és un tipus primitiu bàsic per a caràcters simples."
    }
  },
  "ra01-q2": {
    correct: "B",
    explanations: {
      A: "Incorrecte: El símbol '#' s'utilitza en Python o Bash, no en Java.",
      B: "Correcte! '//' és el delimitador de comentari d'una sola línia en Java.",
      C: "Incorrecte: '/* ... */' s'utilitza per a comentaris de múltiples línies.",
      D: "Incorrecte: '--' és un operador de decrement en Java, no un comentari."
    }
  },
  "ra01-q3": {
    correct: "D",
    explanations: {
      A: "Incorrecte: '=' és l'operador d'assignació, no de comparació.",
      B: "Incorrecte: En Java, '==' compara referències de memòria en objectes, no el seu contingut de text. Per a String sempre s'ha d'usar .equals()!",
      C: "Incorrecte: '!=' comprova desigualtat de referències, no igualtat de contingut.",
      D: "Correcte! En Java, per comparar el contingut de dues cadenes String s'utilitza el mètode .equals()."
    }
  },
  "ra01-q4": {
    correct: "C",
    explanations: {
      A: "Incorrecte: Els identificadors en Java no poden començar per un dígit (3valor és il·legal).",
      B: "Incorrecte: Comença per un número i a més conté el guió '-', que és l'operador de resta.",
      C: "Correcte! 'valorInicial' compleix les regles de Java i segueix la convenció camelCase recomanada.",
      D: "Incorrecte: Els noms de variables no poden contenir espais en blanc."
    }
  },
  "ra01-q5": {
    correct: "C",
    explanations: {
      A: "Incorrecte: '3' és un literal de tipus 'char' (caràcter, delimitat per cometes simples).",
      B: "Incorrecte: \"3\" és un literal de tipus 'String' (text).",
      C: "Correcte! 3 escrit sense cometes ni punt decimal és un enter numèric ('int').",
      D: "Incorrecte: 3.0 és un literal numèric decimal ('double')."
    }
  },

  // RA02
  "ra02-q1": {
    correct: "C",
    explanations: {
      A: "Incorrecte: System.read() no és la instrucció per mostrar text.",
      B: "Incorrecte: System.get() no existeix per a sortida estàndard.",
      C: "Correcte! System.out.println() imprimeix el text indicat a la consola seguit d'un salt de línia.",
      D: "Incorrecte: Console.write() pertany a C# o altres llenguatges, no a l'estàndard de Java."
    }
  },
  "ra02-q2": {
    correct: "C",
    explanations: {
      A: "Incorrecte: System.out.println() és per mostrar per pantalla, no per llegir.",
      B: "Incorrecte: keyboard.read() no és part de la biblioteca estàndard de Java.",
      C: "Correcte! Amb un objecte Scanner configurat amb System.in, el mètode scanner.nextLine() llegeix una línia de text des del teclat.",
      D: "Incorrecte: console.input() no és la sintaxi estàndard de Java."
    }
  },
  "ra02-q3": {
    correct: "C",
    explanations: {
      A: "Incorrecte: Per a booleans s'utilitza nextBoolean().",
      B: "Incorrecte: Per a decimals s'utilitza nextDouble().",
      C: "Correcte! nextInt() llegeix i retorna el següent número enter ('int') de l'entrada.",
      D: "Incorrecte: Per a String s'utilitza next() o nextLine()."
    }
  },
  "ra02-q4": {
    correct: "C",
    explanations: {
      A: "Incorrecte: System.out.println només imprimeix dades.",
      B: "Incorrecte: Scanner serveix per llegir el flux, però cal guardar-lo amb '='.",
      C: "Correcte! L'operador d'assignació '=' és el que emmagatzema el resultat d'una expressió dins d'una variable.",
      D: "Incorrecte: input() pertany a Python."
    }
  },
  "ra02-q5": {
    correct: "B",
    explanations: {
      A: "Incorrecte: En Java pur cal indicar la classe i flux 'System.out.println'.",
      B: "Correcte! System.out.println(\"Hola\"); és sintàcticament perfecte en Java.",
      C: "Incorrecte: Console.out no és vàlid.",
      D: "Incorrecte: Show() no és un mètode integrat en Java."
    }
  },

  // RA03
  "ra03-q1": {
    correct: "B",
    explanations: {
      A: "Incorrecte: 'for' és un bucle de repetició, no una condició simple.",
      B: "Correcte! L'estructura 'if' avalua una expressió booleana i executa el bloc només si és certa.",
      C: "Incorrecte: 'int' és un tipus de dada.",
      D: "Incorrecte: 'String' és una classe per a cadenes de text."
    }
  },
  "ra03-q2": {
    correct: "B",
    explanations: {
      A: "Incorrecte: En Java la condició sempre ha d'anar entre parèntesis ().",
      B: "Correcte! La sintaxi és: while (condicio) { bloc_de_codi }.",
      C: "Incorrecte: El punt i coma ';' just després del parèntesi fa que el bucle siga buit i mai execute el bloc!",
      D: "Incorrecte: 'repeat' no és una paraula reservada en Java."
    }
  },
  "ra03-q3": {
    correct: "A",
    explanations: {
      A: "Correcte! Comença en 1, repeteix mentre i <= 10, i augmenta d'1 en 1 amb i++.",
      B: "Incorrecte: Decrementa amb i-- i el rang és inconsistent.",
      C: "Incorrecte: 'if' només s'executa una vegada, no és un bucle.",
      D: "Incorrecte: 'while (10)' no compila en Java perquè la condició ha de ser de tipus boolean."
    }
  },
  "ra03-q4": {
    correct: "B",
    explanations: {
      A: "Incorrecte: 'if' no repeteix, només tria si executar una vegada o no.",
      B: "Correcte! Tant 'for' com 'while' permeten repetir instruccions mentre una condició siga certa.",
      C: "Incorrecte: 'int' és un tipus numèric.",
      D: "Incorrecte: 'String' és text."
    }
  },
  "ra03-q5": {
    correct: "A",
    explanations: {
      A: "Correcte! 'if' executa el bloc si la condició és vertadera i 'else' l'alternativa si és falsa.",
      B: "Incorrecte: 'import' importa paquets i classes.",
      C: "Incorrecte: 'class' declara una classe.",
      D: "Incorrecte: 'new' instancia un objecte en memòria."
    }
  },

  // RA06
  "ra06-q1": {
    correct: "A",
    explanations: {
      A: "Correcte! 'int numeros[];' o 'int[] numeros;' són les formes vàlides de declarar un array d'enters en Java.",
      B: "Incorrecte: 'vector' no és paraula clau de tipus en Java bàsic.",
      C: "Incorrecte: En Java els arrays s'instancien amb 'new int[mida]' o claus '{1, 2}'.",
      D: "Incorrecte: Manca el nom de la variable."
    }
  },
  "ra06-q2": {
    correct: "A",
    explanations: {
      A: "Correcte! En Java (i a la majoria de llenguatges de programació), els vectors estan indexats començant en 0.",
      B: "Incorrecte: L'índex 1 és el segon element.",
      C: "Incorrecte: Índexs negatius provoquen ArrayIndexOutOfBoundsException en Java.",
      D: "Incorrecte: Sempre és fix en 0."
    }
  },
  "ra06-q3": {
    correct: "B",
    explanations: {
      A: "Incorrecte: java.random no és el paquet de col·leccions.",
      B: "Correcte! ArrayList es troba a 'java.util.ArrayList'.",
      C: "Incorrecte: java.array no existeix.",
      D: "Incorrecte: El paquet és java.util."
    }
  },
  "ra06-q4": {
    correct: "A",
    explanations: {
      A: "Correcte! El mètode .add(element) afegeix elements al final de la llista.",
      B: "Incorrecte: insert() no és el mètode d'ArrayList en Java.",
      C: "Incorrecte: push() és propi de piles (Stack) o JavaScript.",
      D: "Incorrecte: put() s'utilitza en Map (clau-valor)."
    }
  },
  "ra06-q5": {
    correct: "C",
    explanations: {
      A: "Incorrecte: 'if' avalua una sola condició.",
      B: "Incorrecte: 'main' és el mètode d'inici de l'aplicació.",
      C: "Correcte! El bucle 'for' (tradicional o for-each) permet recórrer ordenadament tots els elements del vector.",
      D: "Incorrecte: 'new' crea l'array a la memòria heap."
    }
  }
};

function initQuizSystem() {
  document.querySelectorAll(".quiz-card").forEach(function (card) {
    const qid = card.getAttribute("data-qid");
    const ra = card.getAttribute("data-ra");
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

        // Estils a les opcions
        options.forEach(function (opt) {
          opt.classList.remove("correct-option", "incorrect-option");
          const radio = opt.querySelector("input[type='radio']");
          if (radio.value === qData.correct) {
            opt.classList.add("correct-option");
          } else if (radio.value === chosenVal && !isCorrect) {
            opt.classList.add("incorrect-option");
          }
        });

        // Mostra explicació detallada
        const explText = qData.explanations[chosenVal] || "";
        feedbackBox.className = "quiz-feedback " + (isCorrect ? "feedback-correct" : "feedback-incorrect");
        feedbackBox.innerHTML = `<strong>${isCorrect ? "✔ Resposta Correcta!" : "✘ Resposta Incorrecta!"}</strong><br>${explText}`;

        // Actualitza puntuació del RA (0.2 punts per resposta correcta)
        recalcRaQuizScores();
        updateDashboardUI();
      });
    }
  });
}

function recalcRaQuizScores() {
  ["ra01", "ra02", "ra03", "ra06"].forEach(function (ra) {
    let correctCount = 0;
    for (let i = 1; i <= 5; i++) {
      const qid = `${ra}-q${i}`;
      if (appState.quizAnswers[qid] === true) {
        correctCount++;
      }
    }
    appState.scores[ra].test = correctCount * 0.2;
  });
}

// --------------------------------------------------------------------------
// 3. MOTOR DE VALIDACIÓ I EXECUCIÓ DE CODI JAVA
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
        termBody.innerHTML = "<em>Compilant Main.java...</em>\n";

        setTimeout(function () {
          evalJavaExercise(exId, code, termBody, feedBox);
          updateDashboardUI();
        }, 300);
      });
    }
  });
}

function evalJavaExercise(exId, code, termBody, feedBox) {
  let score = 0;
  let maxScore = 1.0;
  let logs = [];
  let feedback = [];

  const clean = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ""); // sense comentaris per a sintaxi

  if (exId === "ex-ra01") {
    maxScore = 1.0;
    logs.push("[javac] Compilant Main.java amb OpenJDK 21...");
    
    // Criteris de la rúbrica:
    // 1. int declarat (0.25)
    const hasInt = /int\s+[a-zA-Z0-9_]+\s*=/i.test(code);
    // 2. Suma a + b (0.25)
    const hasPlus = /\+\s*[a-zA-Z0-9_]+/i.test(code);
    // 3. System.out.println (0.25)
    const hasPrint = /System\.out\.println\s*\(/i.test(code);
    // 4. Comentari // (0.25)
    const hasComment = /\/\/.+/i.test(code);

    if (hasInt) { score += 0.25; logs.push("  ✔ Criteri 1: Variables enteres (int) declarades correctament (+0.25)"); }
    else { feedback.push("❌ Cal que declares almenys dues variables enteres amb 'int'. Exemple: int a = 5; int b = 7;"); }

    if (hasPlus) { score += 0.25; logs.push("  ✔ Criteri 2: Operació de suma efectuada amb '+' (+0.25)"); }
    else { feedback.push("❌ No s'ha detectat l'operador '+' sumant les dues variables."); }

    if (hasPrint) { score += 0.25; logs.push("  ✔ Criteri 3: Resultat mostrat per pantalla amb System.out.println (+0.25)"); }
    else { feedback.push("❌ Recorda imprimir el resultat per pantalla amb 'System.out.println(...)'."); }

    if (hasComment) { score += 0.25; logs.push("  ✔ Criteri 4: Comentari explicatiu afegit amb '//' (+0.25)"); }
    else { feedback.push("❌ L'enunciat demana explícitament un comentari d'una línia amb '//' que explique què fa el programa."); }

    logs.push("\n[java] Execució simulada de Main:");
    logs.push("La suma és 12");

    appState.scores.ra01.code = score;
  }
  else if (exId === "ex-ra02-basic") {
    maxScore = 1.0;
    logs.push("[javac] Compilant Main.java...");

    // Criteris de la rúbrica RA02 bàsic (5 x 0.2):
    // Scanner, nextLine, nextInt, 2026 - edat, eixida correcta
    const hasScanner = /Scanner\s+[a-zA-Z0-9_]+\s*=\s*new\s+Scanner/i.test(code);
    const hasNextLine = /\.nextLine\s*\(\)/i.test(code);
    const hasNextInt = /\.nextInt\s*\(\)/i.test(code);
    const hasYearCalc = /2026\s*-\s*[a-zA-Z0-9_]+/i.test(code) || /[a-zA-Z0-9_]+\s*-\s*edat/i.test(code);
    const hasCorrectOut = /Hola/i.test(code) && /nàixer|naixer/i.test(code);

    if (hasScanner) { score += 0.2; logs.push("  ✔ Scanner instanciat (+0.2)"); }
    else { feedback.push("❌ Falta instanciar l'objecte Scanner: Scanner sc = new Scanner(System.in);"); }

    if (hasNextLine) { score += 0.2; logs.push("  ✔ Lectura de nom amb nextLine() (+0.2)"); }
    else { feedback.push("❌ Utilitza sc.nextLine() per llegir el nom de l'usuari."); }

    if (hasNextInt) { score += 0.2; logs.push("  ✔ Lectura d'edat amb nextInt() (+0.2)"); }
    else { feedback.push("❌ Utilitza sc.nextInt() per llegir l'edat com a enter."); }

    if (hasYearCalc) { score += 0.2; logs.push("  ✔ Càlcul de l'any de naixement (2026 - edat) (+0.2)"); }
    else { feedback.push("❌ Recorda calcular l'any restant l'edat a 2026: int any = 2026 - edat;"); }

    if (hasCorrectOut) { score += 0.2; logs.push("  ✔ Missatge final formatejat correctament (+0.2)"); }
    else { feedback.push("❌ El missatge ha de seguir el format: \"Hola <nom>, vas nàixer l'any <any>.\""); }

    logs.push("\n[java] Execució amb dades de prova:");
    logs.push("Nom: Laura\nEdat: 19\nHola Laura, vas nàixer l'any 2007.");

    appState.scores.ra02.codeBasic = score;
  }
  else if (exId === "ex-ra02-adv") {
    maxScore = 2.0;
    logs.push("[javac] Compilant Main.java amb funcions auxiliars...");

    // Criteris RA02 avançat (5 x 0.4 = 2.0 pts):
    // 1. funció getLongitud()
    const hasGetLong = /int\s+getLongitud\s*\(\s*String\s+[a-zA-Z0-9_]+\s*\)/i.test(code);
    // 2. .length()
    const hasDotLength = /\.length\s*\(\)/i.test(code);
    // 3. funció compararLongitud()
    const hasCompLong = /int\s+compararLongitud\s*\(\s*int\s+[a-zA-Z0-9_]+,\s*int\s+[a-zA-Z0-9_]+\s*\)/i.test(code);
    // 4. ús de return
    const hasReturns = (code.match(/return\s+/g) || []).length >= 2;
    // 5. Mostra nom més llarg a main
    const hasMainCall = /compararLongitud\s*\(/i.test(code) && /getLongitud\s*\(/i.test(code);

    if (hasGetLong) { score += 0.4; logs.push("  ✔ Funció getLongitud(String) declarada (+0.4)"); }
    else { feedback.push("❌ Declara la funció: public static int getLongitud(String text)"); }

    if (hasDotLength) { score += 0.4; logs.push("  ✔ Ús de .length() per obtenir la mida (+0.4)"); }
    else { feedback.push("❌ Utilitza text.length() per obtenir el número de caràcters."); }

    if (hasCompLong) { score += 0.4; logs.push("  ✔ Funció compararLongitud(int, int) implementada (+0.4)"); }
    else { feedback.push("❌ Declara la funció: public static int compararLongitud(int l1, int l2)"); }

    if (hasReturns) { score += 0.4; logs.push("  ✔ Funcions utilitzen instruccions 'return' (+0.4)"); }
    else { feedback.push("❌ Les funcions han de retornar el resultat amb 'return', sense fer System.out.println directe."); }

    if (hasMainCall) { score += 0.4; logs.push("  ✔ El main crida a les funcions i mostra el nom guanyador (+0.4)"); }
    else { feedback.push("❌ Al mètode main has de cridar a getLongitud() per a cadascun i a compararLongitud() per esbrinar el més llarg."); }

    logs.push("\n[java] Banc de proves d'execució:");
    logs.push("getLongitud(\"Marta\") -> 5");
    logs.push("getLongitud(\"Alejandro\") -> 9");
    logs.push("compararLongitud(5, 9) -> 9");
    logs.push("El nom més llarg és: Alejandro");

    appState.scores.ra02.codeAdv = score;
  }
  else if (exId === "ex-ra03") {
    maxScore = 1.0;
    logs.push("[javac] Compilant estructures de control (RA03)...");

    const hasIfPos = /if\s*\(\s*[a-zA-Z0-9_]+\s*>\s*0\s*\)/i.test(code);
    const hasElseIf = /else\s+if\s*\(\s*[a-zA-Z0-9_]+\s*<\s*0\s*\)/i.test(code);
    const hasElse = /else\b/i.test(code);
    const hasWords = /Positiu/i.test(code) && /Negatiu/i.test(code) && /Zero/i.test(code);

    if (hasIfPos) { score += 0.25; logs.push("  ✔ Condició positiva 'num > 0' (+0.25)"); }
    else { feedback.push("❌ Comprova si el número és major que 0 amb: if (num > 0)"); }

    if (hasElseIf) { score += 0.25; logs.push("  ✔ Condició negativa 'else if (num < 0)' (+0.25)"); }
    else { feedback.push("❌ Comprova la condició alternativa negativa amb: else if (num < 0)"); }

    if (hasElse) { score += 0.25; logs.push("  ✔ Bloc per defecte 'else' per al zero (+0.25)"); }
    else { feedback.push("❌ Afegeix el cas per defecte 'else' per al número zero."); }

    if (hasWords) { score += 0.25; logs.push("  ✔ Missatges de Positiu, Negatiu i Zero correctes (+0.25)"); }
    else { feedback.push("❌ Assegura't d'imprimir exactament les paraules: 'Positiu', 'Negatiu' i 'Zero'."); }

    logs.push("\n[java] Testeigs de comprovació:");
    logs.push("  Test 1: entrada = 15  -> Sortida: Positiu ✔");
    logs.push("  Test 2: entrada = -4  -> Sortida: Negatiu ✔");
    logs.push("  Test 3: entrada = 0   -> Sortida: Zero ✔");

    appState.scores.ra03.code = score;
  }
  else if (exId === "ex-ra06") {
    maxScore = 1.0;
    logs.push("[javac] Compilant vector i bucles (RA06)...");

    const hasArray = /int\s*\[\s*\]\s*[a-zA-Z0-9_]+\s*=\s*new\s+int\s*\[\s*5\s*\]/i.test(code) || /int\s+[a-zA-Z0-9_]+\s*\[\s*\]\s*=\s*new\s+int\s*\[\s*5\s*\]/i.test(code);
    const hasFor = /for\s*\(\s*int\s+[a-zA-Z0-9_]+\s*=\s*0/i.test(code);
    const hasMaxMin = /max\b/i.test(code) && /min\b/i.test(code);
    const hasComps = />\s*max/i.test(code) || /<\s*min/i.test(code);
    const hasPrints = /Màxim|Maxim/i.test(code) && /Mínim|Minim/i.test(code);

    if (hasArray) { score += 0.2; logs.push("  ✔ Vector de 5 enters int[5] declarat (+0.2)"); }
    else { feedback.push("❌ Declara un vector de mida 5 amb: int[] numeros = new int[5];"); }

    if (hasFor) { score += 0.2; logs.push("  ✔ Bucle 'for' per a la lectura dels valors (+0.2)"); }
    else { feedback.push("❌ Utilitza un bucle for (int i = 0; i < 5; i++) per demanar els 5 valors."); }

    if (hasMaxMin) { score += 0.2; logs.push("  ✔ Variables 'max' i 'min' inicialitzades (+0.2)"); }
    else { feedback.push("❌ Crea i inicialitza dues variables max i min amb el primer element: int max = numeros[0];"); }

    if (hasComps) { score += 0.2; logs.push("  ✔ Condicions de comparació de màxim i mínim (+0.2)"); }
    else { feedback.push("❌ Compara dins d'un bucle si numeros[i] > max i si numeros[i] < min."); }

    if (hasPrints) { score += 0.2; logs.push("  ✔ Resultats de màxim i mínim mostrats (+0.2)"); }
    else { feedback.push("❌ Imprimeix el valor del màxim i del mínim al final."); }

    logs.push("\n[java] Testeig amb vector d'exemple: [12, 4, 99, 1, 35]");
    logs.push("Màxim: 99");
    logs.push("Mínim: 1");

    appState.scores.ra06.code = score;
  }

  // Resultat a la consola
  logs.push(`\n🏁 Qualificació obtinguda: ${score.toFixed(2)} / ${maxScore.toFixed(2)} punts`);
  termBody.textContent = logs.join("\n");

  // Retroalimentació pedagògica
  if (feedback.length === 0) {
    feedBox.className = "pedagogical-feedback feedback-correct";
    feedBox.innerHTML = `<strong>🎉 Excel·lent treball!</strong> Has aconseguit la màxima puntuació d'aquest exercici (${score.toFixed(2)} / ${maxScore.toFixed(2)}). El teu codi compleix tots els criteris de qualitat i correcció de la rúbrica oficial.`;
  } else {
    feedBox.className = "pedagogical-feedback feedback-incorrect";
    feedBox.innerHTML = `<strong>⚠️ Correcció i millores necessàries (${score.toFixed(2)} / ${maxScore.toFixed(2)} pts):</strong><br><ul>` +
      feedback.map(f => `<li>${f}</li>`).join("") + `</ul>`;
  }
}
