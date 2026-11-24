window.RA_DATA = window.RA_DATA || {};

window.RA_DATA.ra1 = {
  nom: "RA1 · Estructura d'un programa",
  test: {
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
      }
  },
  exercici: {
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
    }
  }
};
