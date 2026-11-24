/* =========================================================
   int-basic.js · 10 exercicis bàsics de pràctica integrada
   Cada exercici cobreix RA1, RA3, RA5 i RA6.
   ========================================================= */

window.INTEGRATS = window.INTEGRATS || {};
window.INTEGRATS.basic = [
  {
    id: "int-basic-1",
    titol: "Mitjana de notes",
    enunciat: "Llegeix tres notes enteres, desa-les en un vector <code>int[]</code> anomenat <code>notes</code> i calcula la mitjana sencera amb un bucle <code>for</code>. Mostra «Mitjana: X» i «Resultat: Aprovat» si la mitjana és almenys 5, o «Resultat: Suspès» si no.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Creem l'objecte Scanner i el vector on desarem les notes
        Scanner sc = new Scanner(System.in);
        int[] notes = new int[3];
        int suma = 0;
        String resultat = "";

        // TODO: llegeix les 3 notes amb sc.nextInt() i desa-les al vector
        for (int i = 0; i < notes.length; i++) {
            notes[i] = sc.nextInt();
        }

        // TODO: acumula cada nota del vector a la variable suma
        for (int i = 0; i < notes.length; i++) {
            // TODO: suma = suma + notes[i];
        }

        // TODO: calcula la mitjana sencera dividint la suma entre el nombre de notes
        int mitjana = suma / notes.length;

        // TODO: classifica la mitjana amb if / else
        if (mitjana >= 5) {
            resultat = "";
        } else {
            resultat = "";
        }

        // TODO: mostra la mitjana i el resultat amb System.out.println
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Resultat: " + resultat);
    }
}
`,
    entrades: ["6", "7", "5"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Llegim les notes i les desem en un vector int[]
        Scanner sc = new Scanner(System.in);
        int[] notes = new int[3];
        int suma = 0;
        String resultat = "";

        for (int i = 0; i < notes.length; i++) {
            notes[i] = sc.nextInt();
        }

        for (int i = 0; i < notes.length; i++) {
            suma = suma + notes[i];
        }
        int mitjana = suma / notes.length;

        if (mitjana >= 5) {
            resultat = "Aprovat";
        } else {
            resultat = "Suspès";
        }

        System.out.println("Mitjana: " + mitjana);
        System.out.println("Resultat: " + resultat);
    }
}
`,
    sortides: ["Mitjana: 6", "Resultat: Aprovat"],
    vector: "notes",
    bucle: "for",
    variables: ["suma", "mitjana"],
    condicio: "mitjana >= 5"
  },
  {
    id: "int-basic-2",
    titol: "Temperatura mitjana",
    enunciat: "Llegeix tres temperatures enteres, guarda-les en un vector <code>int[]</code> anomenat <code>temp</code> i calcula la mitjana amb un bucle <code>while</code>. Mostra «Temperatura mitjana: X» i «Clima: Càlida» si la mitjana és almenys 15, o «Clima: Freda» altrament.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Preparam l'objecte Scanner, el vector int[] i els acumuladors
        Scanner sc = new Scanner(System.in);
        int[] temp = new int[3];
        int suma = 0;
        String resultat = "";

        // TODO: llegeix les 3 temperatures amb un bucle while
        int i = 0;
        while (i < temp.length) {
            temp[i] = sc.nextInt();
            i++;
        }

        // TODO: suma cada temperatura del vector dins d'un while
        i = 0;
        while (i < temp.length) {
            // TODO: suma = suma + temp[i];
            i++;
        }

        // TODO: calcula la mitjana sencera
        int mitjana = suma / temp.length;

        // TODO: classifica la mitjana amb if / else
        if (mitjana >= 15) {
            resultat = "";
        } else {
            resultat = "";
        }

        // TODO: mostra les dues línies amb System.out.println
        System.out.println("Temperatura mitjana: " + mitjana);
        System.out.println("Clima: " + resultat);
    }
}
`,
    entrades: ["12", "14", "10"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Llegim les temperatures i calculem la mitjana amb while
        Scanner sc = new Scanner(System.in);
        int[] temp = new int[3];
        int suma = 0;
        String resultat = "";

        int i = 0;
        while (i < temp.length) {
            temp[i] = sc.nextInt();
            i++;
        }

        i = 0;
        while (i < temp.length) {
            suma = suma + temp[i];
            i++;
        }
        int mitjana = suma / temp.length;

        if (mitjana >= 15) {
            resultat = "Càlida";
        } else {
            resultat = "Freda";
        }

        System.out.println("Temperatura mitjana: " + mitjana);
        System.out.println("Clima: " + resultat);
    }
}
`,
    sortides: ["Temperatura mitjana: 12", "Clima: Freda"],
    vector: "temp",
    bucle: "while",
    variables: ["suma", "mitjana"],
    condicio: "mitjana >= 15"
  },
  {
    id: "int-basic-3",
    titol: "Edat mitjana d'un grup",
    enunciat: "Llegeix tres edats enteres, desa-les en el vector <code>int[]</code> <code>edats</code> i calcula l'edat mitjana amb un bucle <code>for</code>. Mostra «Edat mitjana: X» i «Grup: Adult» si la mitjana és almenys 18, o «Grup: Jove» en cas contrari.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Declarem Scanner, el vector int[] i les variables de treball
        Scanner sc = new Scanner(System.in);
        int[] edats = new int[3];
        int total = 0;
        String resultat = "";

        // TODO: llegeix 3 edats i desa-les al vector amb un for
        for (int i = 0; i < edats.length; i++) {
            edats[i] = sc.nextInt();
        }

        // TODO: acumula els valors del vector a total
        for (int i = 0; i < edats.length; i++) {
            // TODO: total = total + edats[i];
        }

        // TODO: calcula la mitjana sencera
        int mitjana = total / edats.length;

        // TODO: decideix el grup amb if / else
        if (mitjana >= 18) {
            resultat = "";
        } else {
            resultat = "";
        }

        // TODO: imprimeix els resultats amb System.out.println
        System.out.println("Edat mitjana: " + mitjana);
        System.out.println("Grup: " + resultat);
    }
}
`,
    entrades: ["20", "22", "18"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Llegim les edats i classifiquem el grup
        Scanner sc = new Scanner(System.in);
        int[] edats = new int[3];
        int total = 0;
        String resultat = "";

        for (int i = 0; i < edats.length; i++) {
            edats[i] = sc.nextInt();
        }

        for (int i = 0; i < edats.length; i++) {
            total = total + edats[i];
        }
        int mitjana = total / edats.length;

        if (mitjana >= 18) {
            resultat = "Adult";
        } else {
            resultat = "Jove";
        }

        System.out.println("Edat mitjana: " + mitjana);
        System.out.println("Grup: " + resultat);
    }
}
`,
    sortides: ["Edat mitjana: 20", "Grup: Adult"],
    vector: "edats",
    bucle: "for",
    variables: ["total", "mitjana"],
    condicio: "mitjana >= 18"
  },
  {
    id: "int-basic-4",
    titol: "Preu mitjà de la cistella",
    enunciat: "Llegeix tres preus enteres, emmagatzema'ls en un vector <code>int[]</code> anomenat <code>preus</code> i calcula'n la mitjana amb un bucle <code>while</code>. Mostra «Preu mitjà: X» i «Categoria: Car» si la mitjana és almenys 15, o «Categoria: Barat» altrament.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Creem l'entrada, el vector int[] i els acumuladors
        Scanner sc = new Scanner(System.in);
        int[] preus = new int[3];
        int total = 0;
        String resultat = "";

        // TODO: llegeix els 3 preus amb un bucle while
        int i = 0;
        while (i < preus.length) {
            preus[i] = sc.nextInt();
            i++;
        }

        // TODO: acumula els preus del vector dins del while
        i = 0;
        while (i < preus.length) {
            // TODO: total = total + preus[i];
            i++;
        }

        // TODO: calcula la mitjana sencera
        int mitjana = total / preus.length;

        // TODO: classifica la cistella amb if / else
        if (mitjana >= 15) {
            resultat = "";
        } else {
            resultat = "";
        }

        // TODO: mostra la sortida amb System.out.println
        System.out.println("Preu mitjà: " + mitjana);
        System.out.println("Categoria: " + resultat);
    }
}
`,
    entrades: ["10", "20", "30"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Llegim els preus i classifiquem la cistella
        Scanner sc = new Scanner(System.in);
        int[] preus = new int[3];
        int total = 0;
        String resultat = "";

        int i = 0;
        while (i < preus.length) {
            preus[i] = sc.nextInt();
            i++;
        }

        i = 0;
        while (i < preus.length) {
            total = total + preus[i];
            i++;
        }
        int mitjana = total / preus.length;

        if (mitjana >= 15) {
            resultat = "Car";
        } else {
            resultat = "Barat";
        }

        System.out.println("Preu mitjà: " + mitjana);
        System.out.println("Categoria: " + resultat);
    }
}
`,
    sortides: ["Preu mitjà: 20", "Categoria: Car"],
    vector: "preus",
    bucle: "while",
    variables: ["total", "mitjana"],
    condicio: "mitjana >= 15"
  },
  {
    id: "int-basic-5",
    titol: "Punts d'un equip",
    enunciat: "Llegeix tres puntuacions enteres, guarda-les en un vector <code>int[]</code> anomenat <code>punts</code> i calcula la mitjana amb un bucle <code>for</code>. Mostra «Punts mitjans: X» i «Equip: Guanyador» si la mitjana és almenys 8, o «Equip: Perdedor» si no.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Inicialitzem Scanner, el vector int[] i els valors de treball
        Scanner sc = new Scanner(System.in);
        int[] punts = new int[3];
        int suma = 0;
        String resultat = "";

        // TODO: llegeix els punts amb un for i desa'ls al vector
        for (int i = 0; i < punts.length; i++) {
            punts[i] = sc.nextInt();
        }

        // TODO: suma els punts del vector
        for (int i = 0; i < punts.length; i++) {
            // TODO: suma = suma + punts[i];
        }

        // TODO: calcula la mitjana sencera
        int mitjana = suma / punts.length;

        // TODO: determina el resultat amb if / else
        if (mitjana >= 8) {
            resultat = "";
        } else {
            resultat = "";
        }

        // TODO: escriu les dues línies amb System.out.println
        System.out.println("Punts mitjans: " + mitjana);
        System.out.println("Equip: " + resultat);
    }
}
`,
    entrades: ["8", "9", "7"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Llegim els punts i decidim l'equip guanyador
        Scanner sc = new Scanner(System.in);
        int[] punts = new int[3];
        int suma = 0;
        String resultat = "";

        for (int i = 0; i < punts.length; i++) {
            punts[i] = sc.nextInt();
        }

        for (int i = 0; i < punts.length; i++) {
            suma = suma + punts[i];
        }
        int mitjana = suma / punts.length;

        if (mitjana >= 8) {
            resultat = "Guanyador";
        } else {
            resultat = "Perdedor";
        }

        System.out.println("Punts mitjans: " + mitjana);
        System.out.println("Equip: " + resultat);
    }
}
`,
    sortides: ["Punts mitjans: 8", "Equip: Guanyador"],
    vector: "punts",
    bucle: "for",
    variables: ["suma", "mitjana"],
    condicio: "mitjana >= 8"
  },
  {
    id: "int-basic-6",
    titol: "Temps mitjà d'una cursa",
    enunciat: "Llegeix tres temps en segons, desa'ls en un vector <code>int[]</code> anomenat <code>segons</code> i calcula'n la mitjana amb un bucle <code>while</code>. Mostra «Temps mitjà: X» i «Valoració: Rècord» si la mitjana és com a màxim 60, o «Valoració: Normal» altrament.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Preparem l'objecte Scanner i el vector int[] dels segons
        Scanner sc = new Scanner(System.in);
        int[] segons = new int[3];
        int acumulat = 0;
        String resultat = "";

        // TODO: llegeix els 3 temps amb un bucle while
        int i = 0;
        while (i < segons.length) {
            segons[i] = sc.nextInt();
            i++;
        }

        // TODO: acumula els segons del vector dins del while
        i = 0;
        while (i < segons.length) {
            // TODO: acumulat = acumulat + segons[i];
            i++;
        }

        // TODO: calcula la mitjana sencera
        int mitjana = acumulat / segons.length;

        // TODO: valora el temps amb if / else
        if (mitjana <= 60) {
            resultat = "";
        } else {
            resultat = "";
        }

        // TODO: mostra els resultats amb System.out.println
        System.out.println("Temps mitjà: " + mitjana);
        System.out.println("Valoració: " + resultat);
    }
}
`,
    entrades: ["50", "60", "70"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Llegim els temps i valorem la cursa
        Scanner sc = new Scanner(System.in);
        int[] segons = new int[3];
        int acumulat = 0;
        String resultat = "";

        int i = 0;
        while (i < segons.length) {
            segons[i] = sc.nextInt();
            i++;
        }

        i = 0;
        while (i < segons.length) {
            acumulat = acumulat + segons[i];
            i++;
        }
        int mitjana = acumulat / segons.length;

        if (mitjana <= 60) {
            resultat = "Rècord";
        } else {
            resultat = "Normal";
        }

        System.out.println("Temps mitjà: " + mitjana);
        System.out.println("Valoració: " + resultat);
    }
}
`,
    sortides: ["Temps mitjà: 60", "Valoració: Rècord"],
    vector: "segons",
    bucle: "while",
    variables: ["acumulat", "mitjana"],
    condicio: "mitjana <= 60"
  },
  {
    id: "int-basic-7",
    titol: "Distància mitjana d'una ruta",
    enunciat: "Llegeix tres distàncies enteres en quilòmetres, desa-les en un vector <code>int[]</code> anomenat <code>distancies</code> i calcula la mitjana amb un bucle <code>for</code>. Mostra «Distància mitjana: X» i «Ruta: Llarga» si la mitjana és més gran que 10, o «Ruta: Curta» altrament.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Declarem el Scanner, el vector int[] i els acumuladors
        Scanner sc = new Scanner(System.in);
        int[] distancies = new int[3];
        int suma = 0;
        String resultat = "";

        // TODO: llegeix les distàncies amb un for i guarda-les al vector
        for (int i = 0; i < distancies.length; i++) {
            distancies[i] = sc.nextInt();
        }

        // TODO: acumula les distàncies del vector
        for (int i = 0; i < distancies.length; i++) {
            // TODO: suma = suma + distancies[i];
        }

        // TODO: calcula la mitjana sencera
        int mitjana = suma / distancies.length;

        // TODO: classifica la ruta amb if / else
        if (mitjana > 10) {
            resultat = "";
        } else {
            resultat = "";
        }

        // TODO: mostra la informació amb System.out.println
        System.out.println("Distància mitjana: " + mitjana);
        System.out.println("Ruta: " + resultat);
    }
}
`,
    entrades: ["5", "7", "9"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Llegim les distàncies i classifiquem la ruta
        Scanner sc = new Scanner(System.in);
        int[] distancies = new int[3];
        int suma = 0;
        String resultat = "";

        for (int i = 0; i < distancies.length; i++) {
            distancies[i] = sc.nextInt();
        }

        for (int i = 0; i < distancies.length; i++) {
            suma = suma + distancies[i];
        }
        int mitjana = suma / distancies.length;

        if (mitjana > 10) {
            resultat = "Llarga";
        } else {
            resultat = "Curta";
        }

        System.out.println("Distància mitjana: " + mitjana);
        System.out.println("Ruta: " + resultat);
    }
}
`,
    sortides: ["Distància mitjana: 7", "Ruta: Curta"],
    vector: "distancies",
    bucle: "for",
    variables: ["suma", "mitjana"],
    condicio: "mitjana > 10"
  },
  {
    id: "int-basic-8",
    titol: "Pes mitjà dels paquets",
    enunciat: "Llegeix tres pesos enteres, emmagatzema'ls en un vector <code>int[]</code> anomenat <code>pesos</code> i calcula'n la mitjana amb un bucle <code>while</code>. Mostra «Pes mitjà: X» i «Paquet: Pesant» si la mitjana és almenys 3, o «Paquet: Lleuger» altrament.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Creem l'entrada, el vector int[] i les variables necessàries
        Scanner sc = new Scanner(System.in);
        int[] pesos = new int[3];
        int total = 0;
        String resultat = "";

        // TODO: llegeix els pesos amb un bucle while
        int i = 0;
        while (i < pesos.length) {
            pesos[i] = sc.nextInt();
            i++;
        }

        // TODO: suma els pesos del vector dins del while
        i = 0;
        while (i < pesos.length) {
            // TODO: total = total + pesos[i];
            i++;
        }

        // TODO: calcula la mitjana sencera
        int mitjana = total / pesos.length;

        // TODO: classifica el paquet amb if / else
        if (mitjana >= 3) {
            resultat = "";
        } else {
            resultat = "";
        }

        // TODO: mostra les dades amb System.out.println
        System.out.println("Pes mitjà: " + mitjana);
        System.out.println("Paquet: " + resultat);
    }
}
`,
    entrades: ["2", "3", "4"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Llegim els pesos i classifiquem el paquet
        Scanner sc = new Scanner(System.in);
        int[] pesos = new int[3];
        int total = 0;
        String resultat = "";

        int i = 0;
        while (i < pesos.length) {
            pesos[i] = sc.nextInt();
            i++;
        }

        i = 0;
        while (i < pesos.length) {
            total = total + pesos[i];
            i++;
        }
        int mitjana = total / pesos.length;

        if (mitjana >= 3) {
            resultat = "Pesant";
        } else {
            resultat = "Lleuger";
        }

        System.out.println("Pes mitjà: " + mitjana);
        System.out.println("Paquet: " + resultat);
    }
}
`,
    sortides: ["Pes mitjà: 3", "Paquet: Pesant"],
    vector: "pesos",
    bucle: "while",
    variables: ["total", "mitjana"],
    condicio: "mitjana >= 3"
  },
  {
    id: "int-basic-9",
    titol: "Vendes mitjanes",
    enunciat: "Llegeix tres vendes diàries enteres, desa-les en un vector <code>int[]</code> anomenat <code>vendes</code> i calcula la mitjana amb un bucle <code>for</code>. Mostra «Mitjana de vendes: X» i «Estat: Complert» si la mitjana és almenys 100, o «Estat: Pendent» altrament.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Inicialitzem el Scanner, el vector int[] i els acumuladors
        Scanner sc = new Scanner(System.in);
        int[] vendes = new int[3];
        int acumulat = 0;
        String resultat = "";

        // TODO: llegeix les vendes amb un for i desa-les al vector
        for (int i = 0; i < vendes.length; i++) {
            vendes[i] = sc.nextInt();
        }

        // TODO: acumula les vendes del vector
        for (int i = 0; i < vendes.length; i++) {
            // TODO: acumulat = acumulat + vendes[i];
        }

        // TODO: calcula la mitjana sencera
        int mitjana = acumulat / vendes.length;

        // TODO: comprova l'objectiu amb if / else
        if (mitjana >= 100) {
            resultat = "";
        } else {
            resultat = "";
        }

        // TODO: mostra l'informe amb System.out.println
        System.out.println("Mitjana de vendes: " + mitjana);
        System.out.println("Estat: " + resultat);
    }
}
`,
    entrades: ["100", "200", "150"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Llegim les vendes i comprovem l'objectiu
        Scanner sc = new Scanner(System.in);
        int[] vendes = new int[3];
        int acumulat = 0;
        String resultat = "";

        for (int i = 0; i < vendes.length; i++) {
            vendes[i] = sc.nextInt();
        }

        for (int i = 0; i < vendes.length; i++) {
            acumulat = acumulat + vendes[i];
        }
        int mitjana = acumulat / vendes.length;

        if (mitjana >= 100) {
            resultat = "Complert";
        } else {
            resultat = "Pendent";
        }

        System.out.println("Mitjana de vendes: " + mitjana);
        System.out.println("Estat: " + resultat);
    }
}
`,
    sortides: ["Mitjana de vendes: 150", "Estat: Complert"],
    vector: "vendes",
    bucle: "for",
    variables: ["acumulat", "mitjana"],
    condicio: "mitjana >= 100"
  },
  {
    id: "int-basic-10",
    titol: "Hores de treball",
    enunciat: "Llegeix tres jornades enteres d'hores, guarda-les en un vector <code>int[]</code> anomenat <code>hores</code> i calcula la mitjana amb un bucle <code>while</code>. Mostra «Hores mitjanes: X» i «Jornada: Completa» si la mitjana és almenys 8, o «Jornada: Parcial» en cas contrari.",
    codi: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Preparem Scanner, el vector int[] i els valors de treball
        Scanner sc = new Scanner(System.in);
        int[] hores = new int[3];
        int suma = 0;
        String resultat = "";

        // TODO: llegeix les hores amb un bucle while
        int i = 0;
        while (i < hores.length) {
            hores[i] = sc.nextInt();
            i++;
        }

        // TODO: acumula les hores del vector dins del while
        i = 0;
        while (i < hores.length) {
            // TODO: suma = suma + hores[i];
            i++;
        }

        // TODO: calcula la mitjana sencera
        int mitjana = suma / hores.length;

        // TODO: determina la jornada amb if / else
        if (mitjana >= 8) {
            resultat = "";
        } else {
            resultat = "";
        }

        // TODO: mostra el resum amb System.out.println
        System.out.println("Hores mitjanes: " + mitjana);
        System.out.println("Jornada: " + resultat);
    }
}
`,
    entrades: ["8", "6", "10"],
    solucio: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Llegim les hores i classifiquem la jornada
        Scanner sc = new Scanner(System.in);
        int[] hores = new int[3];
        int suma = 0;
        String resultat = "";

        int i = 0;
        while (i < hores.length) {
            hores[i] = sc.nextInt();
            i++;
        }

        i = 0;
        while (i < hores.length) {
            suma = suma + hores[i];
            i++;
        }
        int mitjana = suma / hores.length;

        if (mitjana >= 8) {
            resultat = "Completa";
        } else {
            resultat = "Parcial";
        }

        System.out.println("Hores mitjanes: " + mitjana);
        System.out.println("Jornada: " + resultat);
    }
}
`,
    sortides: ["Hores mitjanes: 8", "Jornada: Completa"],
    vector: "hores",
    bucle: "while",
    variables: ["suma", "mitjana"],
    condicio: "mitjana >= 8"
  }
];
