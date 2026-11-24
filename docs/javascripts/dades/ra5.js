window.RA_DATA = window.RA_DATA || {};

window.RA_DATA.ra5 = {
  nom: "RA5 · Entrada i sortida",
  test: {
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
      }
  },
  exercici: {
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
    }
  }
};
