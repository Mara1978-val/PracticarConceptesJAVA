window.RA_DATA = window.RA_DATA || {};

window.RA_DATA.ra6 = {
  nom: "RA6 · Tipus avançats de dades",
  test: {
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
      }
  },
  exercici: {
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
    }
  }
};
