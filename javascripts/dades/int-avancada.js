window.INTEGRATS = window.INTEGRATS || {};
window.INTEGRATS.avancada = [
  {
    id: "int-avancada-1",
    titol: "Informe de sensors",
    enunciat: "Una estació meteorològica rep <strong>6 lectures</strong> de sensors. Només són vàlides les lectures entre 0 i 40 (ambdós inclosos). Completa l'aplicació per obtenir l'informe final: recompte de lectures vàlides, mitjana sencera, lectura màxima, lectura mínima i quantes lectures són òptimes (major o igual que 25).",
    codi: `import java.util.Scanner;

public class InformeSensors {
    // TODO (RA1): escriu un comentari que expliqui què calcula aquest informe
    static boolean esValida(int valor) {
        // TODO (RA3): substitueix false per la condicio valor >= 0 && valor <= 40
        return false;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] sensors = new int[6];
        int valides = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int optims = 0;

        // TODO (RA5 i RA6): llegeix 6 enters i desa'ls al vector sensors
        for (int i = 0; i < 6; i++) {
            sensors[i] = lector.nextInt();
        }

        // TODO (RA3 i RA6): recorre el vector, valida i actualitza les estadístiques
        for (int i = 0; i < sensors.length; i++) {
            int valor = sensors[i];
            if (esValida(valor)) {
                // TODO: afegeix el valor a les estadístiques
                valides = valides + 0;
            } else {
                // TODO: compta els valors descartats
            }
        }

        int mitjana = 0;
        if (valides > 0) {
            mitjana = suma / valides;
        } else {
            mitjana = 0;
        }

        // TODO (RA5): completa les tres línies de l'informe final
        System.out.println("Lectures valides: " + valides);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Maxima: " + maxim + " | Minima: " + minim + " | Optims: " + optims);
    }
}`,
    entrades: ["18", "25", "-5", "30", "17", "70"],
    solucio: `import java.util.Scanner;

public class InformeSensors {
    // Aplicació integrada: validació de dades, estadístiques i informe final.
    // RA1: funció auxiliar estàtica que centralitza la validació.
    static boolean esValida(int valor) {
        return valor >= 0 && valor <= 40;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] sensors = new int[6];
        int valides = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int optims = 0;

        // RA5: lectura de les dades per Scanner i emmagatzematge al vector.
        for (int i = 0; i < 6; i++) {
            sensors[i] = lector.nextInt();
        }

        // RA3 i RA6: recorregut del vector, validació composta i estadístiques.
        for (int i = 0; i < sensors.length; i++) {
            int valor = sensors[i];
            if (esValida(valor)) {
                valides = valides + 1;
                suma = suma + valor;
                if (valor > maxim) {
                    maxim = valor;
                }
                if (valor < minim) {
                    minim = valor;
                }
                if (valor >= 25) {
                    optims = optims + 1;
                }
            } else {
                // Dada descartada: no entra a les estadístiques.
            }
        }

        int mitjana = 0;
        if (valides > 0) {
            mitjana = suma / valides;
        } else {
            mitjana = 0;
        }

        // RA5: informe final amb sortida formatejada per concatenació.
        System.out.println("Lectures valides: " + valides);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Maxima: " + maxim + " | Minima: " + minim + " | Optims: " + optims);
    }
}`,
    sortides: ["Lectures valides: 4", "Mitjana: 22", "Maxima: 30 | Minima: 17 | Optims: 2"],
    vector: "sensors",
    bucle: "for",
    variables: ["valides", "suma"],
    condicio: "valor >= 0 && valor <= 40"
  },
  {
    id: "int-avancada-2",
    titol: "Revisió de notes d'examen",
    enunciat: "El departament de matemàtiques introdueix <strong>6 notes</strong> d'examen. Una nota és correcta si està entre 0 i 10. Escriu l'informe amb el recompte de notes vàlides, la mitjana sencera, el nombre d'aprovats (nota major o igual que 5), la nota màxima i la mínima.",
    codi: `import java.util.Scanner;

public class InformeNotes {
    // TODO (RA1): escriu un comentari que expliqui què calcula aquest informe
    static boolean notaValida(int nota) {
        // TODO (RA3): substitueix false per la condicio nota >= 0 && nota <= 10
        return false;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] notes = new int[6];
        int notesValides = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int aprovats = 0;

        // TODO (RA5 i RA6): llegeix 6 enters i desa'ls al vector notes
        for (int i = 0; i < 6; i++) {
            notes[i] = lector.nextInt();
        }

        // TODO (RA3 i RA6): recorre el vector, valida i actualitza les estadístiques
        for (int i = 0; i < notes.length; i++) {
            int nota = notes[i];
            if (notaValida(nota)) {
                // TODO: afegeix el valor a les estadístiques
                notesValides = notesValides + 0;
            } else {
                // TODO: compta els valors descartats
            }
        }

        int mitjana = 0;
        if (notesValides > 0) {
            mitjana = suma / notesValides;
        } else {
            mitjana = 0;
        }

        // TODO (RA5): completa les tres línies de l'informe final
        System.out.println("Notes valides: " + notesValides);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Aprovats: " + aprovats + " | Maxima: " + maxim + " | Minima: " + minim);
    }
}`,
    entrades: ["7", "9", "12", "5", "8", "-1"],
    solucio: `import java.util.Scanner;

public class InformeNotes {
    // Aplicació integrada: validació de dades, estadístiques i informe final.
    // RA1: funció auxiliar estàtica que centralitza la validació.
    static boolean notaValida(int nota) {
        return nota >= 0 && nota <= 10;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] notes = new int[6];
        int notesValides = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int aprovats = 0;

        // RA5: lectura de les dades per Scanner i emmagatzematge al vector.
        for (int i = 0; i < 6; i++) {
            notes[i] = lector.nextInt();
        }

        // RA3 i RA6: recorregut del vector, validació composta i estadístiques.
        for (int i = 0; i < notes.length; i++) {
            int nota = notes[i];
            if (notaValida(nota)) {
                notesValides = notesValides + 1;
                suma = suma + nota;
                if (nota > maxim) {
                    maxim = nota;
                }
                if (nota < minim) {
                    minim = nota;
                }
                if (nota >= 5) {
                    aprovats = aprovats + 1;
                }
            } else {
                // Dada descartada: no entra a les estadístiques.
            }
        }

        int mitjana = 0;
        if (notesValides > 0) {
            mitjana = suma / notesValides;
        } else {
            mitjana = 0;
        }

        // RA5: informe final amb sortida formatejada per concatenació.
        System.out.println("Notes valides: " + notesValides);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Aprovats: " + aprovats + " | Maxima: " + maxim + " | Minima: " + minim);
    }
}`,
    sortides: ["Notes valides: 4", "Mitjana: 7", "Aprovats: 4 | Maxima: 9 | Minima: 5"],
    vector: "notes",
    bucle: "for",
    variables: ["notesValides", "suma"],
    condicio: "nota >= 0 && nota <= 10"
  },
  {
    id: "int-avancada-3",
    titol: "Registre de temperatures",
    enunciat: "Un hivernacle registra <strong>6 temperatures</strong>. Una temperatura és plausible si està entre -20 i 45 graus (ambdós inclosos). Calcula, amb un bucle <code>while</code>, el recompte de registres vàlids, la mitjana sencera, els registres calorosos (30 graus o més), la temperatura màxima i la mínima.",
    codi: `import java.util.Scanner;

public class InformeTemperatures {
    // TODO (RA1): escriu un comentari que expliqui què calcula aquest informe
    static boolean tempValida(int temp) {
        // TODO (RA3): substitueix false per la condicio temp >= -20 && temp <= 45
        return false;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] temperatures = new int[6];
        int registres = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int caloroses = 0;

        // TODO (RA5 i RA6): llegeix 6 enters i desa'ls al vector temperatures
        int i = 0;
        while (i < 6) {
            temperatures[i] = lector.nextInt();
            i++;
        }

        // TODO (RA3 i RA6): recorre el vector, valida i actualitza les estadístiques
        i = 0;
        while (i < temperatures.length) {
            int temp = temperatures[i];
            if (tempValida(temp)) {
                // TODO: afegeix el valor a les estadístiques
                registres = registres + 0;
            } else {
                // TODO: compta els valors descartats
            }
            i++;
        }

        int mitjana = 0;
        if (registres > 0) {
            mitjana = suma / registres;
        } else {
            mitjana = 0;
        }

        // TODO (RA5): completa les tres línies de l'informe final
        System.out.println("Registres valids: " + registres);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Caloroses: " + caloroses + " | Maxima: " + maxim + " | Minima: " + minim);
    }
}`,
    entrades: ["22", "31", "-25", "18", "40", "50"],
    solucio: `import java.util.Scanner;

public class InformeTemperatures {
    // Aplicació integrada: validació de dades, estadístiques i informe final.
    // RA1: funció auxiliar estàtica que centralitza la validació.
    static boolean tempValida(int temp) {
        return temp >= -20 && temp <= 45;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] temperatures = new int[6];
        int registres = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int caloroses = 0;

        // RA5: lectura de les dades per Scanner i emmagatzematge al vector.
        int i = 0;
        while (i < 6) {
            temperatures[i] = lector.nextInt();
            i++;
        }

        // RA3 i RA6: recorregut del vector, validació composta i estadístiques.
        i = 0;
        while (i < temperatures.length) {
            int temp = temperatures[i];
            if (tempValida(temp)) {
                registres = registres + 1;
                suma = suma + temp;
                if (temp > maxim) {
                    maxim = temp;
                }
                if (temp < minim) {
                    minim = temp;
                }
                if (temp >= 30) {
                    caloroses = caloroses + 1;
                }
            } else {
                // Dada descartada: no entra a les estadístiques.
            }
            i++;
        }

        int mitjana = 0;
        if (registres > 0) {
            mitjana = suma / registres;
        } else {
            mitjana = 0;
        }

        // RA5: informe final amb sortida formatejada per concatenació.
        System.out.println("Registres valids: " + registres);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Caloroses: " + caloroses + " | Maxima: " + maxim + " | Minima: " + minim);
    }
}`,
    sortides: ["Registres valids: 4", "Mitjana: 27", "Caloroses: 2 | Maxima: 40 | Minima: 18"],
    vector: "temperatures",
    bucle: "while",
    variables: ["registres", "suma"],
    condicio: "temp >= -20 && temp <= 45"
  },
  {
    id: "int-avancada-4",
    titol: "Resum de vendes diàries",
    enunciat: "Una botiga introdueix <strong>6 imports</strong> de venda. Un import és vàlid si és positiu i no supera 1000. Completa el programa per mostrar el nombre de vendes vàlides, l'import total, la mitjana sencera, les vendes altes (més de 200), l'import màxim i el mínim.",
    codi: `import java.util.Scanner;

public class InformeVendes {
    // TODO (RA1): escriu un comentari que expliqui què calcula aquest informe
    static boolean vendaValida(int venda) {
        // TODO (RA3): substitueix false per la condicio venda > 0 && venda <= 1000
        return false;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] vendes = new int[6];
        int vendesValides = 0;
        int total = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int altes = 0;

        // TODO (RA5 i RA6): llegeix 6 enters i desa'ls al vector vendes
        for (int i = 0; i < 6; i++) {
            vendes[i] = lector.nextInt();
        }

        // TODO (RA3 i RA6): recorre el vector, valida i actualitza les estadístiques
        for (int i = 0; i < vendes.length; i++) {
            int venda = vendes[i];
            if (vendaValida(venda)) {
                // TODO: afegeix el valor a les estadístiques
                vendesValides = vendesValides + 0;
            } else {
                // TODO: compta els valors descartats
            }
        }

        int mitjana = 0;
        if (vendesValides > 0) {
            mitjana = total / vendesValides;
        } else {
            mitjana = 0;
        }

        // TODO (RA5): completa les tres línies de l'informe final
        System.out.println("Vendes valides: " + vendesValides);
        System.out.println("Total: " + total);
        System.out.println("Mitjana: " + mitjana + " | Altes: " + altes + " | Maxima: " + maxim + " | Minima: " + minim);
    }
}`,
    entrades: ["120", "350", "0", "80", "500", "1200"],
    solucio: `import java.util.Scanner;

public class InformeVendes {
    // Aplicació integrada: validació de dades, estadístiques i informe final.
    // RA1: funció auxiliar estàtica que centralitza la validació.
    static boolean vendaValida(int venda) {
        return venda > 0 && venda <= 1000;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] vendes = new int[6];
        int vendesValides = 0;
        int total = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int altes = 0;

        // RA5: lectura de les dades per Scanner i emmagatzematge al vector.
        for (int i = 0; i < 6; i++) {
            vendes[i] = lector.nextInt();
        }

        // RA3 i RA6: recorregut del vector, validació composta i estadístiques.
        for (int i = 0; i < vendes.length; i++) {
            int venda = vendes[i];
            if (vendaValida(venda)) {
                vendesValides = vendesValides + 1;
                total = total + venda;
                if (venda > maxim) {
                    maxim = venda;
                }
                if (venda < minim) {
                    minim = venda;
                }
                if (venda > 200) {
                    altes = altes + 1;
                }
            } else {
                // Dada descartada: no entra a les estadístiques.
            }
        }

        int mitjana = 0;
        if (vendesValides > 0) {
            mitjana = total / vendesValides;
        } else {
            mitjana = 0;
        }

        // RA5: informe final amb sortida formatejada per concatenació.
        System.out.println("Vendes valides: " + vendesValides);
        System.out.println("Total: " + total);
        System.out.println("Mitjana: " + mitjana + " | Altes: " + altes + " | Maxima: " + maxim + " | Minima: " + minim);
    }
}`,
    sortides: ["Vendes valides: 4", "Total: 1050", "Mitjana: 262 | Altes: 2 | Maxima: 500 | Minima: 80"],
    vector: "vendes",
    bucle: "for",
    variables: ["vendesValides", "total"],
    condicio: "venda > 0 && venda <= 1000"
  },
  {
    id: "int-avancada-5",
    titol: "Fitxa de participants",
    enunciat: "En una activitat es recullen <strong>6 edats</strong>. Una edat és vàlida si està entre 0 i 110 (ambdós inclosos). Genera un informe amb el recompte d'edats vàlides, la mitjana sencera, el nombre d'adults (18 anys o més), l'edat màxima i la mínima.",
    codi: `import java.util.Scanner;

public class InformeEdats {
    // TODO (RA1): escriu un comentari que expliqui què calcula aquest informe
    static boolean edatValida(int edat) {
        // TODO (RA3): substitueix false per la condicio edat >= 0 && edat <= 110
        return false;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] edats = new int[6];
        int edatsValides = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int adults = 0;

        // TODO (RA5 i RA6): llegeix 6 enters i desa'ls al vector edats
        for (int i = 0; i < 6; i++) {
            edats[i] = lector.nextInt();
        }

        // TODO (RA3 i RA6): recorre el vector, valida i actualitza les estadístiques
        for (int i = 0; i < edats.length; i++) {
            int edat = edats[i];
            if (edatValida(edat)) {
                // TODO: afegeix el valor a les estadístiques
                edatsValides = edatsValides + 0;
            } else {
                // TODO: compta els valors descartats
            }
        }

        int mitjana = 0;
        if (edatsValides > 0) {
            mitjana = suma / edatsValides;
        } else {
            mitjana = 0;
        }

        // TODO (RA5): completa les tres línies de l'informe final
        System.out.println("Edats valides: " + edatsValides);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Adults: " + adults + " | Maxima: " + maxim + " | Minima: " + minim);
    }
}`,
    entrades: ["34", "17", "-3", "65", "28", "120"],
    solucio: `import java.util.Scanner;

public class InformeEdats {
    // Aplicació integrada: validació de dades, estadístiques i informe final.
    // RA1: funció auxiliar estàtica que centralitza la validació.
    static boolean edatValida(int edat) {
        return edat >= 0 && edat <= 110;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] edats = new int[6];
        int edatsValides = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int adults = 0;

        // RA5: lectura de les dades per Scanner i emmagatzematge al vector.
        for (int i = 0; i < 6; i++) {
            edats[i] = lector.nextInt();
        }

        // RA3 i RA6: recorregut del vector, validació composta i estadístiques.
        for (int i = 0; i < edats.length; i++) {
            int edat = edats[i];
            if (edatValida(edat)) {
                edatsValides = edatsValides + 1;
                suma = suma + edat;
                if (edat > maxim) {
                    maxim = edat;
                }
                if (edat < minim) {
                    minim = edat;
                }
                if (edat >= 18) {
                    adults = adults + 1;
                }
            } else {
                // Dada descartada: no entra a les estadístiques.
            }
        }

        int mitjana = 0;
        if (edatsValides > 0) {
            mitjana = suma / edatsValides;
        } else {
            mitjana = 0;
        }

        // RA5: informe final amb sortida formatejada per concatenació.
        System.out.println("Edats valides: " + edatsValides);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Adults: " + adults + " | Maxima: " + maxim + " | Minima: " + minim);
    }
}`,
    sortides: ["Edats valides: 4", "Mitjana: 36", "Adults: 3 | Maxima: 65 | Minima: 17"],
    vector: "edats",
    bucle: "for",
    variables: ["edatsValides", "suma"],
    condicio: "edat >= 0 && edat <= 110"
  },
  {
    id: "int-avancada-6",
    titol: "Classificació de puntuacions",
    enunciat: "Un torneig registra <strong>8 puntuacions</strong>. Una puntuació és vàlida si està entre 0 i 100. L'informe ha de mostrar el recompte de puntuacions vàlides, la mitjana sencera, el rècord, la pitjor puntuació i quants resultats són excel·lents (90 punts o més).",
    codi: `import java.util.Scanner;

public class InformePuntuacions {
    // TODO (RA1): escriu un comentari que expliqui què calcula aquest informe
    static boolean puntsValids(int punts) {
        // TODO (RA3): substitueix false per la condicio punts >= 0 && punts <= 100
        return false;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] puntuacions = new int[8];
        int valides = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int excelents = 0;

        // TODO (RA5 i RA6): llegeix 8 enters i desa'ls al vector puntuacions
        for (int i = 0; i < 8; i++) {
            puntuacions[i] = lector.nextInt();
        }

        // TODO (RA3 i RA6): recorre el vector, valida i actualitza les estadístiques
        for (int i = 0; i < puntuacions.length; i++) {
            int punts = puntuacions[i];
            if (puntsValids(punts)) {
                // TODO: afegeix el valor a les estadístiques
                valides = valides + 0;
            } else {
                // TODO: compta els valors descartats
            }
        }

        int mitjana = 0;
        if (valides > 0) {
            mitjana = suma / valides;
        } else {
            mitjana = 0;
        }

        // TODO (RA5): completa les tres línies de l'informe final
        System.out.println("Puntuacions valides: " + valides);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Rècord: " + maxim + " | Pitjor: " + minim + " | Excelents: " + excelents);
    }
}`,
    entrades: ["88", "95", "101", "74", "60", "-2", "82", "90"],
    solucio: `import java.util.Scanner;

public class InformePuntuacions {
    // Aplicació integrada: validació de dades, estadístiques i informe final.
    // RA1: funció auxiliar estàtica que centralitza la validació.
    static boolean puntsValids(int punts) {
        return punts >= 0 && punts <= 100;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] puntuacions = new int[8];
        int valides = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int excelents = 0;

        // RA5: lectura de les dades per Scanner i emmagatzematge al vector.
        for (int i = 0; i < 8; i++) {
            puntuacions[i] = lector.nextInt();
        }

        // RA3 i RA6: recorregut del vector, validació composta i estadístiques.
        for (int i = 0; i < puntuacions.length; i++) {
            int punts = puntuacions[i];
            if (puntsValids(punts)) {
                valides = valides + 1;
                suma = suma + punts;
                if (punts > maxim) {
                    maxim = punts;
                }
                if (punts < minim) {
                    minim = punts;
                }
                if (punts >= 90) {
                    excelents = excelents + 1;
                }
            } else {
                // Dada descartada: no entra a les estadístiques.
            }
        }

        int mitjana = 0;
        if (valides > 0) {
            mitjana = suma / valides;
        } else {
            mitjana = 0;
        }

        // RA5: informe final amb sortida formatejada per concatenació.
        System.out.println("Puntuacions valides: " + valides);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Rècord: " + maxim + " | Pitjor: " + minim + " | Excelents: " + excelents);
    }
}`,
    sortides: ["Puntuacions valides: 6", "Mitjana: 81", "Rècord: 95 | Pitjor: 60 | Excelents: 2"],
    vector: "puntuacions",
    bucle: "for",
    variables: ["valides", "suma"],
    condicio: "punts >= 0 && punts <= 100"
  },
  {
    id: "int-avancada-7",
    titol: "Temps de cursa validats",
    enunciat: "Un club d'atletisme anota <strong>6 temps</strong> de cursa en segons. Un temps és vàlid si està entre 0 i 300 segons (ambdós inclosos). Amb un bucle <code>while</code> calcula el recompte de temps vàlids, la mitjana sencera, el millor temps (el menor), el pitjor (el major) i quants baixen de 60 segons.",
    codi: `import java.util.Scanner;

public class InformeCurses {
    // TODO (RA1): escriu un comentari que expliqui què calcula aquest informe
    static boolean tempsValid(int temps) {
        // TODO (RA3): substitueix false per la condicio temps >= 0 && temps <= 300
        return false;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] tempsCursa = new int[6];
        int tempsValids = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int sub60 = 0;

        // TODO (RA5 i RA6): llegeix 6 enters i desa'ls al vector tempsCursa
        int i = 0;
        while (i < 6) {
            tempsCursa[i] = lector.nextInt();
            i++;
        }

        // TODO (RA3 i RA6): recorre el vector, valida i actualitza les estadístiques
        i = 0;
        while (i < tempsCursa.length) {
            int temps = tempsCursa[i];
            if (tempsValid(temps)) {
                // TODO: afegeix el valor a les estadístiques
                tempsValids = tempsValids + 0;
            } else {
                // TODO: compta els valors descartats
            }
            i++;
        }

        int mitjana = 0;
        if (tempsValids > 0) {
            mitjana = suma / tempsValids;
        } else {
            mitjana = 0;
        }

        // TODO (RA5): completa les tres línies de l'informe final
        System.out.println("Temps valids: " + tempsValids);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Millor: " + minim + " | Pitjor: " + maxim + " | Sub60: " + sub60);
    }
}`,
    entrades: ["62", "48", "-1", "55", "310", "70"],
    solucio: `import java.util.Scanner;

public class InformeCurses {
    // Aplicació integrada: validació de dades, estadístiques i informe final.
    // RA1: funció auxiliar estàtica que centralitza la validació.
    static boolean tempsValid(int temps) {
        return temps >= 0 && temps <= 300;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] tempsCursa = new int[6];
        int tempsValids = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int sub60 = 0;

        // RA5: lectura de les dades per Scanner i emmagatzematge al vector.
        int i = 0;
        while (i < 6) {
            tempsCursa[i] = lector.nextInt();
            i++;
        }

        // RA3 i RA6: recorregut del vector, validació composta i estadístiques.
        i = 0;
        while (i < tempsCursa.length) {
            int temps = tempsCursa[i];
            if (tempsValid(temps)) {
                tempsValids = tempsValids + 1;
                suma = suma + temps;
                if (temps > maxim) {
                    maxim = temps;
                }
                if (temps < minim) {
                    minim = temps;
                }
                if (temps < 60) {
                    sub60 = sub60 + 1;
                }
            } else {
                // Dada descartada: no entra a les estadístiques.
            }
            i++;
        }

        int mitjana = 0;
        if (tempsValids > 0) {
            mitjana = suma / tempsValids;
        } else {
            mitjana = 0;
        }

        // RA5: informe final amb sortida formatejada per concatenació.
        System.out.println("Temps valids: " + tempsValids);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Millor: " + minim + " | Pitjor: " + maxim + " | Sub60: " + sub60);
    }
}`,
    sortides: ["Temps valids: 4", "Mitjana: 58", "Millor: 48 | Pitjor: 70 | Sub60: 2"],
    vector: "tempsCursa",
    bucle: "while",
    variables: ["tempsValids", "suma"],
    condicio: "temps >= 0 && temps <= 300"
  },
  {
    id: "int-avancada-8",
    titol: "Auditoria d'estoc",
    enunciat: "Un magatzem compta <strong>7 unitats</strong> per producte. Un recompte és vàlid si està entre 0 i 500 (ambdós inclosos). L'informe ha de mostrar el nombre de productes validats, el total d'unitats, la mitjana sencera, el recompte màxim, el mínim i quants productes tenen menys de 50 unitats (estoc baix).",
    codi: `import java.util.Scanner;

public class InformeEstoc {
    // TODO (RA1): escriu un comentari que expliqui què calcula aquest informe
    static boolean unitatValida(int unitats) {
        // TODO (RA3): substitueix false per la condicio unitats >= 0 && unitats <= 500
        return false;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] estoc = new int[7];
        int validats = 0;
        int total = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int baixos = 0;

        // TODO (RA5 i RA6): llegeix 7 enters i desa'ls al vector estoc
        for (int i = 0; i < 7; i++) {
            estoc[i] = lector.nextInt();
        }

        // TODO (RA3 i RA6): recorre el vector, valida i actualitza les estadístiques
        for (int i = 0; i < estoc.length; i++) {
            int unitats = estoc[i];
            if (unitatValida(unitats)) {
                // TODO: afegeix el valor a les estadístiques
                validats = validats + 0;
            } else {
                // TODO: compta els valors descartats
            }
        }

        int mitjana = 0;
        if (validats > 0) {
            mitjana = total / validats;
        } else {
            mitjana = 0;
        }

        // TODO (RA5): completa les tres línies de l'informe final
        System.out.println("Productes validats: " + validats);
        System.out.println("Total unitats: " + total);
        System.out.println("Mitjana: " + mitjana + " | Baixos: " + baixos + " | Max: " + maxim + " | Min: " + minim);
    }
}`,
    entrades: ["120", "45", "-10", "300", "80", "520", "60"],
    solucio: `import java.util.Scanner;

public class InformeEstoc {
    // Aplicació integrada: validació de dades, estadístiques i informe final.
    // RA1: funció auxiliar estàtica que centralitza la validació.
    static boolean unitatValida(int unitats) {
        return unitats >= 0 && unitats <= 500;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] estoc = new int[7];
        int validats = 0;
        int total = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int baixos = 0;

        // RA5: lectura de les dades per Scanner i emmagatzematge al vector.
        for (int i = 0; i < 7; i++) {
            estoc[i] = lector.nextInt();
        }

        // RA3 i RA6: recorregut del vector, validació composta i estadístiques.
        for (int i = 0; i < estoc.length; i++) {
            int unitats = estoc[i];
            if (unitatValida(unitats)) {
                validats = validats + 1;
                total = total + unitats;
                if (unitats > maxim) {
                    maxim = unitats;
                }
                if (unitats < minim) {
                    minim = unitats;
                }
                if (unitats < 50) {
                    baixos = baixos + 1;
                }
            } else {
                // Dada descartada: no entra a les estadístiques.
            }
        }

        int mitjana = 0;
        if (validats > 0) {
            mitjana = total / validats;
        } else {
            mitjana = 0;
        }

        // RA5: informe final amb sortida formatejada per concatenació.
        System.out.println("Productes validats: " + validats);
        System.out.println("Total unitats: " + total);
        System.out.println("Mitjana: " + mitjana + " | Baixos: " + baixos + " | Max: " + maxim + " | Min: " + minim);
    }
}`,
    sortides: ["Productes validats: 5", "Total unitats: 605", "Mitjana: 121 | Baixos: 1 | Max: 300 | Min: 45"],
    vector: "estoc",
    bucle: "for",
    variables: ["validats", "total"],
    condicio: "unitats >= 0 && unitats <= 500"
  },
  {
    id: "int-avancada-9",
    titol: "Control de pressupost",
    enunciat: "Una associació introdueix <strong>6 quanties</strong> del seu pressupost. Una quantia és vàlida si és positiva i no supera 10000. Escriu l'informe amb el recompte de partides vàlides, el total, la mitjana sencera, les partides altes (més de 3000), la quantia màxima i la mínima.",
    codi: `import java.util.Scanner;

public class InformePressupost {
    // TODO (RA1): escriu un comentari que expliqui què calcula aquest informe
    static boolean quantiaValida(int quantia) {
        // TODO (RA3): substitueix false per la condicio quantia > 0 && quantia <= 10000
        return false;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] pressupost = new int[6];
        int partides = 0;
        int total = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int altes = 0;

        // TODO (RA5 i RA6): llegeix 6 enters i desa'ls al vector pressupost
        for (int i = 0; i < 6; i++) {
            pressupost[i] = lector.nextInt();
        }

        // TODO (RA3 i RA6): recorre el vector, valida i actualitza les estadístiques
        for (int i = 0; i < pressupost.length; i++) {
            int quantia = pressupost[i];
            if (quantiaValida(quantia)) {
                // TODO: afegeix el valor a les estadístiques
                partides = partides + 0;
            } else {
                // TODO: compta els valors descartats
            }
        }

        int mitjana = 0;
        if (partides > 0) {
            mitjana = total / partides;
        } else {
            mitjana = 0;
        }

        // TODO (RA5): completa les tres línies de l'informe final
        System.out.println("Partides valides: " + partides);
        System.out.println("Total: " + total);
        System.out.println("Mitjana: " + mitjana + " | Altes: " + altes + " | Maxima: " + maxim + " | Minima: " + minim);
    }
}`,
    entrades: ["1500", "3200", "0", "800", "4500", "11000"],
    solucio: `import java.util.Scanner;

public class InformePressupost {
    // Aplicació integrada: validació de dades, estadístiques i informe final.
    // RA1: funció auxiliar estàtica que centralitza la validació.
    static boolean quantiaValida(int quantia) {
        return quantia > 0 && quantia <= 10000;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] pressupost = new int[6];
        int partides = 0;
        int total = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int altes = 0;

        // RA5: lectura de les dades per Scanner i emmagatzematge al vector.
        for (int i = 0; i < 6; i++) {
            pressupost[i] = lector.nextInt();
        }

        // RA3 i RA6: recorregut del vector, validació composta i estadístiques.
        for (int i = 0; i < pressupost.length; i++) {
            int quantia = pressupost[i];
            if (quantiaValida(quantia)) {
                partides = partides + 1;
                total = total + quantia;
                if (quantia > maxim) {
                    maxim = quantia;
                }
                if (quantia < minim) {
                    minim = quantia;
                }
                if (quantia > 3000) {
                    altes = altes + 1;
                }
            } else {
                // Dada descartada: no entra a les estadístiques.
            }
        }

        int mitjana = 0;
        if (partides > 0) {
            mitjana = total / partides;
        } else {
            mitjana = 0;
        }

        // RA5: informe final amb sortida formatejada per concatenació.
        System.out.println("Partides valides: " + partides);
        System.out.println("Total: " + total);
        System.out.println("Mitjana: " + mitjana + " | Altes: " + altes + " | Maxima: " + maxim + " | Minima: " + minim);
    }
}`,
    sortides: ["Partides valides: 4", "Total: 10000", "Mitjana: 2500 | Altes: 2 | Maxima: 4500 | Minima: 800"],
    vector: "pressupost",
    bucle: "for",
    variables: ["partides", "total"],
    condicio: "quantia > 0 && quantia <= 10000"
  },
  {
    id: "int-avancada-10",
    titol: "Control de qualitat",
    enunciat: "Una fàbrica registra <strong>5 mostres</strong> amb el nombre de defectes de cada peça. Una mostra és vàlida si té entre 0 i 20 defectes (ambdós inclosos). L'informe ha de mostrar el recompte de mostres vàlides, la mitjana sencera de defectes, la millor mostra (menor nombre de defectes), la pitjor i quantes mostres són defectuoses (més de 10 defectes).",
    codi: `import java.util.Scanner;

public class InformeQualitat {
    // TODO (RA1): escriu un comentari que expliqui què calcula aquest informe
    static boolean mostraValida(int defectes) {
        // TODO (RA3): substitueix false per la condicio defectes >= 0 && defectes <= 20
        return false;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] mostres = new int[5];
        int valides = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int defectuoses = 0;

        // TODO (RA5 i RA6): llegeix 5 enters i desa'ls al vector mostres
        for (int i = 0; i < 5; i++) {
            mostres[i] = lector.nextInt();
        }

        // TODO (RA3 i RA6): recorre el vector, valida i actualitza les estadístiques
        for (int i = 0; i < mostres.length; i++) {
            int defectes = mostres[i];
            if (mostraValida(defectes)) {
                // TODO: afegeix el valor a les estadístiques
                valides = valides + 0;
            } else {
                // TODO: compta els valors descartats
            }
        }

        int mitjana = 0;
        if (valides > 0) {
            mitjana = suma / valides;
        } else {
            mitjana = 0;
        }

        // TODO (RA5): completa les tres línies de l'informe final
        System.out.println("Mostres valides: " + valides);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Millor: " + minim + " | Pitjor: " + maxim + " | Defectuoses: " + defectuoses);
    }
}`,
    entrades: ["3", "7", "-2", "12", "5"],
    solucio: `import java.util.Scanner;

public class InformeQualitat {
    // Aplicació integrada: validació de dades, estadístiques i informe final.
    // RA1: funció auxiliar estàtica que centralitza la validació.
    static boolean mostraValida(int defectes) {
        return defectes >= 0 && defectes <= 20;
    }

    public static void main(String[] args) {
        Scanner lector = new Scanner(System.in);
        int[] mostres = new int[5];
        int valides = 0;
        int suma = 0;
        int maxim = -1000000;
        int minim = 1000000;
        int defectuoses = 0;

        // RA5: lectura de les dades per Scanner i emmagatzematge al vector.
        for (int i = 0; i < 5; i++) {
            mostres[i] = lector.nextInt();
        }

        // RA3 i RA6: recorregut del vector, validació composta i estadístiques.
        for (int i = 0; i < mostres.length; i++) {
            int defectes = mostres[i];
            if (mostraValida(defectes)) {
                valides = valides + 1;
                suma = suma + defectes;
                if (defectes > maxim) {
                    maxim = defectes;
                }
                if (defectes < minim) {
                    minim = defectes;
                }
                if (defectes > 10) {
                    defectuoses = defectuoses + 1;
                }
            } else {
                // Dada descartada: no entra a les estadístiques.
            }
        }

        int mitjana = 0;
        if (valides > 0) {
            mitjana = suma / valides;
        } else {
            mitjana = 0;
        }

        // RA5: informe final amb sortida formatejada per concatenació.
        System.out.println("Mostres valides: " + valides);
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Millor: " + minim + " | Pitjor: " + maxim + " | Defectuoses: " + defectuoses);
    }
}`,
    sortides: ["Mostres valides: 4", "Mitjana: 6", "Millor: 3 | Pitjor: 12 | Defectuoses: 1"],
    vector: "mostres",
    bucle: "for",
    variables: ["valides", "suma"],
    condicio: "defectes >= 0 && defectes <= 20"
  }
];
