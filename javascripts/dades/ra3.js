window.RA_DATA = window.RA_DATA || {};

window.RA_DATA.ra3 = {
  nom: "RA3 · Estructures de control",
  test: {
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
      }
  },
  exercici: {
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
    }
  }
};
