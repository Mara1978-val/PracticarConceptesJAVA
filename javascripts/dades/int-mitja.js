/* =========================================================
   int-mitja.js · 10 exercicis de nivell MITJÀ per a pràctica
   integrada de Java (RA1 + RA3 + RA5 + RA6).

   Cada exercici té un codi inicial executable amb TODOs i una
   solució que, amb les entrades indicades, produeix exactament
   les línies descrites a `sortides`.
   ========================================================= */

window.INTEGRATS = window.INTEGRATS || {};
window.INTEGRATS.mitja = [
  {
    id: "int-mitja-1",
    titol: "Tiquet amb descompte",
    enunciat: "Un supermercat necessita un tiquet. Llegeix primer el nombre de productes i després els seus preus. Mostra el total, el preu més car i l'import final aplicant un 10% de descompte quan el total supera 500.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: escriu un comentari que expliqui què fa eixe tiquet
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] preus = new int[n];
        int total = 0;
        int maxim = 0;
        int descompte = 0;

        for (int i = 0; i < n; i++) {
            preus[i] = sc.nextInt();
            // TODO: acumula preus[i] a la variable total
            // TODO: si preus[i] es mes gran que maxim, actualitza maxim
        }

        if (total > 500) {
            // TODO: calcula el 10% de descompte sobre total
        } else {
            // TODO: el descompte continua sent 0
        }

        System.out.println("Total: " + total);
        System.out.println("Preu maxim: " + maxim);
        System.out.println("A pagar: " + (total - descompte));
    }
}`,
    entrades: ["4", "120", "80", "200", "150"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Tiquet: suma els preus, troba el maxim i aplica el descompte
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] preus = new int[n];
        int total = 0;
        int maxim = 0;
        int descompte = 0;

        for (int i = 0; i < n; i++) {
            preus[i] = sc.nextInt();
            total = total + preus[i];
            if (preus[i] > maxim) {
                maxim = preus[i];
            }
        }

        if (total > 500) {
            descompte = total * 10 / 100;
        } else {
            descompte = 0;
        }

        System.out.println("Total: " + total);
        System.out.println("Preu maxim: " + maxim);
        System.out.println("A pagar: " + (total - descompte));
    }
}`,
    sortides: ["Total: 550", "Preu maxim: 200", "A pagar: 495"],
    vector: "preus",
    bucle: "for",
    variables: ["total", "maxim"],
    condicio: "total > 500"
  },
  {
    id: "int-mitja-2",
    titol: "Informe de temperatures",
    enunciat: "Llegeix el nombre de dies i les temperatures de cada dia. Calcula la mitjana sencera, compta els dies calorosos (més de 25 graus) i els normals, i mostra la temperatura màxima registrada.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: afegeix un comentari sobre l'informe de temperatures
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] temps = new int[n];
        int suma = 0;
        int mitjana = 0;
        int calorosos = 0;
        int normals = 0;
        int maxima = 0;

        for (int i = 0; i < n; i++) {
            temps[i] = sc.nextInt();
            // TODO: suma temps[i] a la variable suma
            // TODO: guarda a maxima el valor mes gran vist
            if (temps[i] > 25) {
                // TODO: incrementa calorosos
            } else {
                // TODO: incrementa normals
            }
        }

        // TODO: calcula mitjana = suma / n

        System.out.println("Mitjana: " + mitjana);
        System.out.println("Calorosos: " + calorosos + " / Normals: " + normals);
        System.out.println("Temperatura maxima: " + maxima);
    }
}`,
    entrades: ["5", "12", "18", "7", "25", "30"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Informe: acumula temperatura, compta dies calorosos i busca la maxima
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] temps = new int[n];
        int suma = 0;
        int mitjana = 0;
        int calorosos = 0;
        int normals = 0;
        int maxima = 0;

        for (int i = 0; i < n; i++) {
            temps[i] = sc.nextInt();
            suma = suma + temps[i];
            if (temps[i] > maxima) {
                maxima = temps[i];
            }
            if (temps[i] > 25) {
                calorosos = calorosos + 1;
            } else {
                normals = normals + 1;
            }
        }

        mitjana = suma / n;

        System.out.println("Mitjana: " + mitjana);
        System.out.println("Calorosos: " + calorosos + " / Normals: " + normals);
        System.out.println("Temperatura maxima: " + maxima);
    }
}`,
    sortides: ["Mitjana: 18", "Calorosos: 1 / Normals: 4", "Temperatura maxima: 30"],
    vector: "temps",
    bucle: "for",
    variables: ["mitjana", "calorosos"],
    condicio: "temps[i] > 25"
  },
  {
    id: "int-mitja-3",
    titol: "Butlleti de notes",
    enunciat: "Llegeix 4 notes d'un alumne. Calcula la mitjana sencera, compta quantes notes són aprovades (5 o més) i mostra si l'alumne aprova segons la mitjana amb un if / else.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: descriu amb un comentari el butlleti de notes
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] notes = new int[n];
        int suma = 0;
        int mitjana = 0;
        int aprovats = 0;
        String resultat = "";

        for (int i = 0; i < n; i++) {
            notes[i] = sc.nextInt();
            // TODO: acumula notes[i] a suma
            if (notes[i] >= 5) {
                // TODO: incrementa aprovats
            }
        }

        // TODO: calcula la mitjana sencera
        if (mitjana >= 5) {
            // TODO: assigna "Aprovat" a resultat
        } else {
            // TODO: assigna "Suspes" a resultat
        }

        System.out.println("Mitjana: " + mitjana);
        System.out.println("Aprovats: " + aprovats);
        System.out.println("Resultat: " + resultat);
    }
}`,
    entrades: ["4", "6", "7", "4", "9"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Butlleti: suma notes, compta aprovats i decideix el resultat
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] notes = new int[n];
        int suma = 0;
        int mitjana = 0;
        int aprovats = 0;
        String resultat = "";

        for (int i = 0; i < n; i++) {
            notes[i] = sc.nextInt();
            suma = suma + notes[i];
            if (notes[i] >= 5) {
                aprovats = aprovats + 1;
            }
        }

        mitjana = suma / n;
        if (mitjana >= 5) {
            resultat = "Aprovat";
        } else {
            resultat = "Suspes";
        }

        System.out.println("Mitjana: " + mitjana);
        System.out.println("Aprovats: " + aprovats);
        System.out.println("Resultat: " + resultat);
    }
}`,
    sortides: ["Mitjana: 6", "Aprovats: 3", "Resultat: Aprovat"],
    vector: "notes",
    bucle: "for",
    variables: ["mitjana", "aprovats"],
    condicio: "mitjana >= 5"
  },
  {
    id: "int-mitja-4",
    titol: "Vendes i comissio",
    enunciat: "Llegeix 5 imports de vendes. Calcula el total, troba la venda més petita i suma una comissió de 20 al total quan eixe supera 200.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: comenta què representa cada variable del programa
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] vendes = new int[n];
        int total = 0;
        int minim = 9999;
        int comissio = 0;

        for (int i = 0; i < n; i++) {
            vendes[i] = sc.nextInt();
            // TODO: acumula vendes[i] a total
            // TODO: actualitza minim si vendes[i] es mes petit
        }

        if (total > 200) {
            // TODO: posa comissio a 20
        } else {
            // TODO: deixa comissio a 0
        }

        System.out.println("Total vendes: " + total);
        System.out.println("Venda minima: " + minim);
        System.out.println("Total amb comissio: " + (total + comissio));
    }
}`,
    entrades: ["5", "40", "55", "30", "60", "45"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Vendes: acumula imports, busca el minim i aplica la comissio
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] vendes = new int[n];
        int total = 0;
        int minim = 9999;
        int comissio = 0;

        for (int i = 0; i < n; i++) {
            vendes[i] = sc.nextInt();
            total = total + vendes[i];
            if (vendes[i] < minim) {
                minim = vendes[i];
            }
        }

        if (total > 200) {
            comissio = 20;
        } else {
            comissio = 0;
        }

        System.out.println("Total vendes: " + total);
        System.out.println("Venda minima: " + minim);
        System.out.println("Total amb comissio: " + (total + comissio));
    }
}`,
    sortides: ["Total vendes: 230", "Venda minima: 30", "Total amb comissio: 250"],
    vector: "vendes",
    bucle: "for",
    variables: ["total", "minim"],
    condicio: "total > 200"
  },
  {
    id: "int-mitja-5",
    titol: "Edat mitjana del grup",
    enunciat: "Llegeix 6 edats d'un grup. Mostra l'edat mitjana sencera, quants participants són adults (18 anys o més) i quants són menors d'edat.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: afegeix un comentari explicatiu del grup
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] edats = new int[n];
        int suma = 0;
        int mitjana = 0;
        int adults = 0;
        int menors = 0;

        for (int i = 0; i < n; i++) {
            edats[i] = sc.nextInt();
            // TODO: suma edats[i] a suma
            if (edats[i] >= 18) {
                // TODO: incrementa adults
            } else {
                // TODO: incrementa menors
            }
        }

        // TODO: mitjana = suma / n

        System.out.println("Edat mitjana: " + mitjana);
        System.out.println("Adults: " + adults);
        System.out.println("Menors d'edat: " + menors);
    }
}`,
    entrades: ["6", "18", "25", "14", "40", "65", "33"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Grup: suma edats, separa adults de menors i calcula la mitjana
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] edats = new int[n];
        int suma = 0;
        int mitjana = 0;
        int adults = 0;
        int menors = 0;

        for (int i = 0; i < n; i++) {
            edats[i] = sc.nextInt();
            suma = suma + edats[i];
            if (edats[i] >= 18) {
                adults = adults + 1;
            } else {
                menors = menors + 1;
            }
        }

        mitjana = suma / n;

        System.out.println("Edat mitjana: " + mitjana);
        System.out.println("Adults: " + adults);
        System.out.println("Menors d'edat: " + menors);
    }
}`,
    sortides: ["Edat mitjana: 32", "Adults: 5", "Menors d'edat: 1"],
    vector: "edats",
    bucle: "for",
    variables: ["mitjana", "adults"],
    condicio: "edats[i] >= 18"
  },
  {
    id: "int-mitja-6",
    titol: "Classificacio de puntuacions",
    enunciat: "Llegeix 5 puntuacions d'un concurs. Mostra la puntuació màxima, la mínima i quantes puntuacions destaquen (10 punts o més) i quantes no hi arriben.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: comenta la finalitat del programa
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] puntuacions = new int[n];
        int maxim = 0;
        int minim = 9999;
        int destacats = 0;
        int normals = 0;

        for (int i = 0; i < n; i++) {
            puntuacions[i] = sc.nextInt();
            // TODO: actualitza maxim si puntuacions[i] es mes gran
            // TODO: actualitza minim si puntuacions[i] es mes petit
            if (puntuacions[i] >= 10) {
                // TODO: incrementa destacats
            } else {
                // TODO: incrementa normals
            }
        }

        System.out.println("Puntuacio maxima: " + maxim);
        System.out.println("Puntuacio minima: " + minim);
        System.out.println("Destacats: " + destacats + " / Normals: " + normals);
    }
}`,
    entrades: ["5", "10", "8", "15", "7", "12"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Concurs: busca maxim i minim i compta les puntuacions destacades
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] puntuacions = new int[n];
        int maxim = 0;
        int minim = 9999;
        int destacats = 0;
        int normals = 0;

        for (int i = 0; i < n; i++) {
            puntuacions[i] = sc.nextInt();
            if (puntuacions[i] > maxim) {
                maxim = puntuacions[i];
            }
            if (puntuacions[i] < minim) {
                minim = puntuacions[i];
            }
            if (puntuacions[i] >= 10) {
                destacats = destacats + 1;
            } else {
                normals = normals + 1;
            }
        }

        System.out.println("Puntuacio maxima: " + maxim);
        System.out.println("Puntuacio minima: " + minim);
        System.out.println("Destacats: " + destacats + " / Normals: " + normals);
    }
}`,
    sortides: ["Puntuacio maxima: 15", "Puntuacio minima: 7", "Destacats: 3 / Normals: 2"],
    vector: "puntuacions",
    bucle: "for",
    variables: ["maxim", "destacats"],
    condicio: "puntuacions[i] >= 10"
  },
  {
    id: "int-mitja-7",
    titol: "Temps de cursa",
    enunciat: "Llegeix 5 temps de cursa en segons. Mostra el temps més baix, la mitjana sencera i quants corredors han baixat de 60 segons i quants no.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: escriu un comentari sobre la cursa
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] carrera = new int[n];
        int suma = 0;
        int minim = 9999;
        int mitjana = 0;
        int rapids = 0;
        int lents = 0;

        for (int i = 0; i < n; i++) {
            carrera[i] = sc.nextInt();
            // TODO: suma carrera[i] a suma
            // TODO: actualitza minim si carrera[i] es mes petit
            if (carrera[i] < 60) {
                // TODO: incrementa rapids
            } else {
                // TODO: incrementa lents
            }
        }

        // TODO: mitjana = suma / n

        System.out.println("Temps minim: " + minim);
        System.out.println("Temps mig: " + mitjana);
        System.out.println("Rapids: " + rapids + " / Lents: " + lents);
    }
}`,
    entrades: ["5", "62", "58", "49", "75", "66"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Cursa: acumula temps, busca el minim i compta els corredors rapids
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] carrera = new int[n];
        int suma = 0;
        int minim = 9999;
        int mitjana = 0;
        int rapids = 0;
        int lents = 0;

        for (int i = 0; i < n; i++) {
            carrera[i] = sc.nextInt();
            suma = suma + carrera[i];
            if (carrera[i] < minim) {
                minim = carrera[i];
            }
            if (carrera[i] < 60) {
                rapids = rapids + 1;
            } else {
                lents = lents + 1;
            }
        }

        mitjana = suma / n;

        System.out.println("Temps minim: " + minim);
        System.out.println("Temps mig: " + mitjana);
        System.out.println("Rapids: " + rapids + " / Lents: " + lents);
    }
}`,
    sortides: ["Temps minim: 49", "Temps mig: 62", "Rapids: 2 / Lents: 3"],
    vector: "carrera",
    bucle: "for",
    variables: ["minim", "rapids"],
    condicio: "carrera[i] < 60"
  },
  {
    id: "int-mitja-8",
    titol: "Ruta i distancies",
    enunciat: "Llegeix 5 trams d'una ruta en quilòmetres. Mostra la distància total, el tram més llarg i un estat que indiqui si s'ha assolit l'objectiu de 500 km.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: comenta què fa eixe programa de ruta
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] distancies = new int[n];
        int total = 0;
        int maxim = 0;
        String estat = "";

        for (int i = 0; i < n; i++) {
            distancies[i] = sc.nextInt();
            // TODO: acumula distancies[i] a total
            // TODO: actualitza maxim si distancies[i] es mes gran
        }

        if (total >= 500) {
            // TODO: assigna "Objectiu assolit" a estat
        } else {
            // TODO: assigna "Objectiu pendent" a estat
        }

        System.out.println("Distancia total: " + total);
        System.out.println("Tram maxim: " + maxim);
        System.out.println("Estat: " + estat);
    }
}`,
    entrades: ["5", "120", "85", "200", "95", "150"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Ruta: suma trams, troba el mes llarg i comprova l'objectiu
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] distancies = new int[n];
        int total = 0;
        int maxim = 0;
        String estat = "";

        for (int i = 0; i < n; i++) {
            distancies[i] = sc.nextInt();
            total = total + distancies[i];
            if (distancies[i] > maxim) {
                maxim = distancies[i];
            }
        }

        if (total >= 500) {
            estat = "Objectiu assolit";
        } else {
            estat = "Objectiu pendent";
        }

        System.out.println("Distancia total: " + total);
        System.out.println("Tram maxim: " + maxim);
        System.out.println("Estat: " + estat);
    }
}`,
    sortides: ["Distancia total: 650", "Tram maxim: 200", "Estat: Objectiu assolit"],
    vector: "distancies",
    bucle: "for",
    variables: ["total", "maxim"],
    condicio: "total >= 500"
  },
  {
    id: "int-mitja-9",
    titol: "Control d'estoc",
    enunciat: "Llegeix 5 quantitats d'estoc. Mostra l'estoc total, quants productes tenen zero unitats i si cal fer reposició quan n'hi ha algun sense estoc.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: afegeix un comentari del control d'estoc
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] estoc = new int[n];
        int total = 0;
        int senseEstoc = 0;
        String estat = "";

        for (int i = 0; i < n; i++) {
            estoc[i] = sc.nextInt();
            // TODO: acumula estoc[i] a total
            if (estoc[i] == 0) {
                // TODO: incrementa senseEstoc
            }
        }

        if (senseEstoc > 0) {
            // TODO: assigna "Reposicio necessaria" a estat
        } else {
            // TODO: assigna "Estoc correcte" a estat
        }

        System.out.println("Estoc total: " + total);
        System.out.println("Sense estoc: " + senseEstoc);
        System.out.println("Estat: " + estat);
    }
}`,
    entrades: ["5", "20", "5", "40", "0", "15"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Estoc: suma unitats, compta els productes buits i avisa si cal reposar
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] estoc = new int[n];
        int total = 0;
        int senseEstoc = 0;
        String estat = "";

        for (int i = 0; i < n; i++) {
            estoc[i] = sc.nextInt();
            total = total + estoc[i];
            if (estoc[i] == 0) {
                senseEstoc = senseEstoc + 1;
            }
        }

        if (senseEstoc > 0) {
            estat = "Reposicio necessaria";
        } else {
            estat = "Estoc correcte";
        }

        System.out.println("Estoc total: " + total);
        System.out.println("Sense estoc: " + senseEstoc);
        System.out.println("Estat: " + estat);
    }
}`,
    sortides: ["Estoc total: 80", "Sense estoc: 1", "Estat: Reposicio necessaria"],
    vector: "estoc",
    bucle: "for",
    variables: ["total", "senseEstoc"],
    condicio: "senseEstoc > 0"
  },
  {
    id: "int-mitja-10",
    titol: "Pressupost mensual",
    enunciat: "Llegeix 5 partides d'un pressupost. Mostra la despesa total, la partida més cara i si la despesa supera el límit de 2000.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO: descriu amb un comentari el pressupost mensual
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] pressupost = new int[n];
        int total = 0;
        int maxim = 0;
        String estat = "";

        for (int i = 0; i < n; i++) {
            pressupost[i] = sc.nextInt();
            // TODO: acumula pressupost[i] a total
            // TODO: actualitza maxim si pressupost[i] es mes gran
        }

        if (total > 2000) {
            // TODO: assigna "Pressupost excedit" a estat
        } else {
            // TODO: assigna "Dins pressupost" a estat
        }

        System.out.println("Despesa total: " + total);
        System.out.println("Partida maxima: " + maxim);
        System.out.println("Estat: " + estat);
    }
}`,
    entrades: ["5", "300", "450", "200", "600", "350"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Pressupost: suma partides, troba la mes cara i comprova el limit
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] pressupost = new int[n];
        int total = 0;
        int maxim = 0;
        String estat = "";

        for (int i = 0; i < n; i++) {
            pressupost[i] = sc.nextInt();
            total = total + pressupost[i];
            if (pressupost[i] > maxim) {
                maxim = pressupost[i];
            }
        }

        if (total > 2000) {
            estat = "Pressupost excedit";
        } else {
            estat = "Dins pressupost";
        }

        System.out.println("Despesa total: " + total);
        System.out.println("Partida maxima: " + maxim);
        System.out.println("Estat: " + estat);
    }
}`,
    sortides: ["Despesa total: 1900", "Partida maxima: 600", "Estat: Dins pressupost"],
    vector: "pressupost",
    bucle: "for",
    variables: ["total", "maxim"],
    condicio: "total > 2000"
  }
];
