## 🧩 Practica integrada — 10 exercicis per nivell *(bonificació, no compta a la nota)*

30 exercicis que combinen els 4 resultats d'aprenentatge del curs: **RA1** (estructura),
**RA3** (control), **RA5** (entrada/sortida) i **RA6** (vectors). Cada exercici té trossos de codi
ja implementats i altres que has de completar, dades d'entrada editables, solució guiada i
explicació dels errors. Són pràctica addicional i no modifiquen la nota de 10 punts.

### 🟢 Nivell bàsic

#### int-basic-1 — Mitjana de notes

<div class="java-exercise-card" data-ex-id="int-basic-1">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Mitjana de notes</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix tres notes enteres, desa-les en un vector <code>int[]</code> anomenat <code>notes</code> i calcula la mitjana sencera amb un bucle <code>for</code>. Mostra «Mitjana: X» i «Resultat: Aprovat» si la mitjana és almenys 5, o «Resultat: Suspès» si no.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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

    </textarea>
    <div class="java-input-panel">
      <label for="in-int-basic-1">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-basic-1" class="java-input-data" rows="4" spellcheck="false">6
7
5</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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

```
    </div>
  </div>
</div>

#### int-basic-2 — Temperatura mitjana

<div class="java-exercise-card" data-ex-id="int-basic-2">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Temperatura mitjana</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix tres temperatures enteres, guarda-les en un vector <code>int[]</code> anomenat <code>temp</code> i calcula la mitjana amb un bucle <code>while</code>. Mostra «Temperatura mitjana: X» i «Clima: Càlida» si la mitjana és almenys 15, o «Clima: Freda» altrament.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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

    </textarea>
    <div class="java-input-panel">
      <label for="in-int-basic-2">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-basic-2" class="java-input-data" rows="4" spellcheck="false">12
14
10</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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

```
    </div>
  </div>
</div>

#### int-basic-3 — Edat mitjana d'un grup

<div class="java-exercise-card" data-ex-id="int-basic-3">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Edat mitjana d'un grup</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix tres edats enteres, desa-les en el vector <code>int[]</code> <code>edats</code> i calcula l'edat mitjana amb un bucle <code>for</code>. Mostra «Edat mitjana: X» i «Grup: Adult» si la mitjana és almenys 18, o «Grup: Jove» en cas contrari.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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

    </textarea>
    <div class="java-input-panel">
      <label for="in-int-basic-3">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-basic-3" class="java-input-data" rows="4" spellcheck="false">20
22
18</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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

```
    </div>
  </div>
</div>

#### int-basic-4 — Preu mitjà de la cistella

<div class="java-exercise-card" data-ex-id="int-basic-4">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Preu mitjà de la cistella</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix tres preus enteres, emmagatzema'ls en un vector <code>int[]</code> anomenat <code>preus</code> i calcula'n la mitjana amb un bucle <code>while</code>. Mostra «Preu mitjà: X» i «Categoria: Car» si la mitjana és almenys 15, o «Categoria: Barat» altrament.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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

    </textarea>
    <div class="java-input-panel">
      <label for="in-int-basic-4">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-basic-4" class="java-input-data" rows="4" spellcheck="false">10
20
30</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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

```
    </div>
  </div>
</div>

#### int-basic-5 — Punts d'un equip

<div class="java-exercise-card" data-ex-id="int-basic-5">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Punts d'un equip</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix tres puntuacions enteres, guarda-les en un vector <code>int[]</code> anomenat <code>punts</code> i calcula la mitjana amb un bucle <code>for</code>. Mostra «Punts mitjans: X» i «Equip: Guanyador» si la mitjana és almenys 8, o «Equip: Perdedor» si no.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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

    </textarea>
    <div class="java-input-panel">
      <label for="in-int-basic-5">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-basic-5" class="java-input-data" rows="4" spellcheck="false">8
9
7</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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

```
    </div>
  </div>
</div>

#### int-basic-6 — Temps mitjà d'una cursa

<div class="java-exercise-card" data-ex-id="int-basic-6">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Temps mitjà d'una cursa</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix tres temps en segons, desa'ls en un vector <code>int[]</code> anomenat <code>segons</code> i calcula'n la mitjana amb un bucle <code>while</code>. Mostra «Temps mitjà: X» i «Valoració: Rècord» si la mitjana és com a màxim 60, o «Valoració: Normal» altrament.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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

    </textarea>
    <div class="java-input-panel">
      <label for="in-int-basic-6">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-basic-6" class="java-input-data" rows="4" spellcheck="false">50
60
70</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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

```
    </div>
  </div>
</div>

#### int-basic-7 — Distància mitjana d'una ruta

<div class="java-exercise-card" data-ex-id="int-basic-7">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Distància mitjana d'una ruta</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix tres distàncies enteres en quilòmetres, desa-les en un vector <code>int[]</code> anomenat <code>distancies</code> i calcula la mitjana amb un bucle <code>for</code>. Mostra «Distància mitjana: X» i «Ruta: Llarga» si la mitjana és més gran que 10, o «Ruta: Curta» altrament.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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

    </textarea>
    <div class="java-input-panel">
      <label for="in-int-basic-7">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-basic-7" class="java-input-data" rows="4" spellcheck="false">5
7
9</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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

```
    </div>
  </div>
</div>

#### int-basic-8 — Pes mitjà dels paquets

<div class="java-exercise-card" data-ex-id="int-basic-8">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Pes mitjà dels paquets</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix tres pesos enteres, emmagatzema'ls en un vector <code>int[]</code> anomenat <code>pesos</code> i calcula'n la mitjana amb un bucle <code>while</code>. Mostra «Pes mitjà: X» i «Paquet: Pesant» si la mitjana és almenys 3, o «Paquet: Lleuger» altrament.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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

    </textarea>
    <div class="java-input-panel">
      <label for="in-int-basic-8">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-basic-8" class="java-input-data" rows="4" spellcheck="false">2
3
4</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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

```
    </div>
  </div>
</div>

#### int-basic-9 — Vendes mitjanes

<div class="java-exercise-card" data-ex-id="int-basic-9">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Vendes mitjanes</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix tres vendes diàries enteres, desa-les en un vector <code>int[]</code> anomenat <code>vendes</code> i calcula la mitjana amb un bucle <code>for</code>. Mostra «Mitjana de vendes: X» i «Estat: Complert» si la mitjana és almenys 100, o «Estat: Pendent» altrament.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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

    </textarea>
    <div class="java-input-panel">
      <label for="in-int-basic-9">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-basic-9" class="java-input-data" rows="4" spellcheck="false">100
200
150</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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

```
    </div>
  </div>
</div>

#### int-basic-10 — Hores de treball

<div class="java-exercise-card" data-ex-id="int-basic-10">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Hores de treball</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix tres jornades enteres d'hores, guarda-les en un vector <code>int[]</code> anomenat <code>hores</code> i calcula la mitjana amb un bucle <code>while</code>. Mostra «Hores mitjanes: X» i «Jornada: Completa» si la mitjana és almenys 8, o «Jornada: Parcial» en cas contrari.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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

    </textarea>
    <div class="java-input-panel">
      <label for="in-int-basic-10">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-basic-10" class="java-input-data" rows="4" spellcheck="false">8
6
10</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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

```
    </div>
  </div>
</div>

---

### 🟡 Nivell mitjà

#### int-mitja-1 — Tiquet amb descompte

<div class="java-exercise-card" data-ex-id="int-mitja-1">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Tiquet amb descompte</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Un supermercat necessita un tiquet. Llegeix primer el nombre de productes i després els seus preus. Mostra el total, el preu més car i l'import final aplicant un 10% de descompte quan el total supera 500.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-mitja-1">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-mitja-1" class="java-input-data" rows="4" spellcheck="false">4
120
80
200
150</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-mitja-2 — Informe de temperatures

<div class="java-exercise-card" data-ex-id="int-mitja-2">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Informe de temperatures</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix el nombre de dies i les temperatures de cada dia. Calcula la mitjana sencera, compta els dies calorosos (més de 25 graus) i els normals, i mostra la temperatura màxima registrada.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-mitja-2">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-mitja-2" class="java-input-data" rows="4" spellcheck="false">5
12
18
7
25
30</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-mitja-3 — Butlleti de notes

<div class="java-exercise-card" data-ex-id="int-mitja-3">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Butlleti de notes</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix 4 notes d'un alumne. Calcula la mitjana sencera, compta quantes notes són aprovades (5 o més) i mostra si l'alumne aprova segons la mitjana amb un if / else.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-mitja-3">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-mitja-3" class="java-input-data" rows="4" spellcheck="false">4
6
7
4
9</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-mitja-4 — Vendes i comissio

<div class="java-exercise-card" data-ex-id="int-mitja-4">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Vendes i comissio</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix 5 imports de vendes. Calcula el total, troba la venda més petita i suma una comissió de 20 al total quan eixe supera 200.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-mitja-4">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-mitja-4" class="java-input-data" rows="4" spellcheck="false">5
40
55
30
60
45</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-mitja-5 — Edat mitjana del grup

<div class="java-exercise-card" data-ex-id="int-mitja-5">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Edat mitjana del grup</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix 6 edats d'un grup. Mostra l'edat mitjana sencera, quants participants són adults (18 anys o més) i quants són menors d'edat.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-mitja-5">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-mitja-5" class="java-input-data" rows="4" spellcheck="false">6
18
25
14
40
65
33</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-mitja-6 — Classificacio de puntuacions

<div class="java-exercise-card" data-ex-id="int-mitja-6">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Classificacio de puntuacions</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix 5 puntuacions d'un concurs. Mostra la puntuació màxima, la mínima i quantes puntuacions destaquen (10 punts o més) i quantes no hi arriben.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-mitja-6">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-mitja-6" class="java-input-data" rows="4" spellcheck="false">5
10
8
15
7
12</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-mitja-7 — Temps de cursa

<div class="java-exercise-card" data-ex-id="int-mitja-7">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Temps de cursa</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix 5 temps de cursa en segons. Mostra el temps més baix, la mitjana sencera i quants corredors han baixat de 60 segons i quants no.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-mitja-7">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-mitja-7" class="java-input-data" rows="4" spellcheck="false">5
62
58
49
75
66</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-mitja-8 — Ruta i distancies

<div class="java-exercise-card" data-ex-id="int-mitja-8">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Ruta i distancies</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix 5 trams d'una ruta en quilòmetres. Mostra la distància total, el tram més llarg i un estat que indiqui si s'ha assolit l'objectiu de 500 km.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-mitja-8">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-mitja-8" class="java-input-data" rows="4" spellcheck="false">5
120
85
200
95
150</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-mitja-9 — Control d'estoc

<div class="java-exercise-card" data-ex-id="int-mitja-9">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Control d'estoc</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix 5 quantitats d'estoc. Mostra l'estoc total, quants productes tenen zero unitats i si cal fer reposició quan n'hi ha algun sense estoc.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-mitja-9">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-mitja-9" class="java-input-data" rows="4" spellcheck="false">5
20
5
40
0
15</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-mitja-10 — Pressupost mensual

<div class="java-exercise-card" data-ex-id="int-mitja-10">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Pressupost mensual</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Llegeix 5 partides d'un pressupost. Mostra la despesa total, la partida més cara i si la despesa supera el límit de 2000.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-mitja-10">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-mitja-10" class="java-input-data" rows="4" spellcheck="false">5
300
450
200
600
350</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

---

### 🔴 Nivell avançat

#### int-avancada-1 — Informe de sensors

<div class="java-exercise-card" data-ex-id="int-avancada-1">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Informe de sensors</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Una estació meteorològica rep <strong>6 lectures</strong> de sensors. Només són vàlides les lectures entre 0 i 40 (ambdós inclosos). Completa l'aplicació per obtenir l'informe final: recompte de lectures vàlides, mitjana sencera, lectura màxima, lectura mínima i quantes lectures són òptimes (major o igual que 25).</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class InformeSensors {
    // TODO (RA1): escriu un comentari que expliqui què calcula eixe informe
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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-avancada-1">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-avancada-1" class="java-input-data" rows="4" spellcheck="false">18
25
-5
30
17
70</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-avancada-2 — Revisió de notes d'examen

<div class="java-exercise-card" data-ex-id="int-avancada-2">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Revisió de notes d'examen</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> El departament de matemàtiques introdueix <strong>6 notes</strong> d'examen. Una nota és correcta si està entre 0 i 10. Escriu l'informe amb el recompte de notes vàlides, la mitjana sencera, el nombre d'aprovats (nota major o igual que 5), la nota màxima i la mínima.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class InformeNotes {
    // TODO (RA1): escriu un comentari que expliqui què calcula eixe informe
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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-avancada-2">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-avancada-2" class="java-input-data" rows="4" spellcheck="false">7
9
12
5
8
-1</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-avancada-3 — Registre de temperatures

<div class="java-exercise-card" data-ex-id="int-avancada-3">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Registre de temperatures</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Un hivernacle registra <strong>6 temperatures</strong>. Una temperatura és plausible si està entre -20 i 45 graus (ambdós inclosos). Calcula, amb un bucle <code>while</code>, el recompte de registres vàlids, la mitjana sencera, els registres calorosos (30 graus o més), la temperatura màxima i la mínima.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class InformeTemperatures {
    // TODO (RA1): escriu un comentari que expliqui què calcula eixe informe
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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-avancada-3">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-avancada-3" class="java-input-data" rows="4" spellcheck="false">22
31
-25
18
40
50</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-avancada-4 — Resum de vendes diàries

<div class="java-exercise-card" data-ex-id="int-avancada-4">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Resum de vendes diàries</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Una botiga introdueix <strong>6 imports</strong> de venda. Un import és vàlid si és positiu i no supera 1000. Completa el programa per mostrar el nombre de vendes vàlides, l'import total, la mitjana sencera, les vendes altes (més de 200), l'import màxim i el mínim.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class InformeVendes {
    // TODO (RA1): escriu un comentari que expliqui què calcula eixe informe
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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-avancada-4">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-avancada-4" class="java-input-data" rows="4" spellcheck="false">120
350
0
80
500
1200</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-avancada-5 — Fitxa de participants

<div class="java-exercise-card" data-ex-id="int-avancada-5">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Fitxa de participants</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> En una activitat es recullen <strong>6 edats</strong>. Una edat és vàlida si està entre 0 i 110 (ambdós inclosos). Genera un informe amb el recompte d'edats vàlides, la mitjana sencera, el nombre d'adults (18 anys o més), l'edat màxima i la mínima.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class InformeEdats {
    // TODO (RA1): escriu un comentari que expliqui què calcula eixe informe
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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-avancada-5">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-avancada-5" class="java-input-data" rows="4" spellcheck="false">34
17
-3
65
28
120</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-avancada-6 — Classificació de puntuacions

<div class="java-exercise-card" data-ex-id="int-avancada-6">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Classificació de puntuacions</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Un torneig registra <strong>8 puntuacions</strong>. Una puntuació és vàlida si està entre 0 i 100. L'informe ha de mostrar el recompte de puntuacions vàlides, la mitjana sencera, el rècord, la pitjor puntuació i quants resultats són excel·lents (90 punts o més).</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class InformePuntuacions {
    // TODO (RA1): escriu un comentari que expliqui què calcula eixe informe
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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-avancada-6">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-avancada-6" class="java-input-data" rows="4" spellcheck="false">88
95
101
74
60
-2
82
90</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-avancada-7 — Temps de cursa validats

<div class="java-exercise-card" data-ex-id="int-avancada-7">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Temps de cursa validats</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Un club d'atletisme anota <strong>6 temps</strong> de cursa en segons. Un temps és vàlid si està entre 0 i 300 segons (ambdós inclosos). Amb un bucle <code>while</code> calcula el recompte de temps vàlids, la mitjana sencera, el millor temps (el menor), el pitjor (el major) i quants baixen de 60 segons.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class InformeCurses {
    // TODO (RA1): escriu un comentari que expliqui què calcula eixe informe
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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-avancada-7">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-avancada-7" class="java-input-data" rows="4" spellcheck="false">62
48
-1
55
310
70</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-avancada-8 — Auditoria d'estoc

<div class="java-exercise-card" data-ex-id="int-avancada-8">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Auditoria d'estoc</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Un magatzem compta <strong>7 unitats</strong> per producte. Un recompte és vàlid si està entre 0 i 500 (ambdós inclosos). L'informe ha de mostrar el nombre de productes validats, el total d'unitats, la mitjana sencera, el recompte màxim, el mínim i quants productes tenen menys de 50 unitats (estoc baix).</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class InformeEstoc {
    // TODO (RA1): escriu un comentari que expliqui què calcula eixe informe
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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-avancada-8">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-avancada-8" class="java-input-data" rows="4" spellcheck="false">120
45
-10
300
80
520
60</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-avancada-9 — Control de pressupost

<div class="java-exercise-card" data-ex-id="int-avancada-9">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Control de pressupost</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Una associació introdueix <strong>6 quanties</strong> del seu pressupost. Una quantia és vàlida si és positiva i no supera 10000. Escriu l'informe amb el recompte de partides vàlides, el total, la mitjana sencera, les partides altes (més de 3000), la quantia màxima i la mínima.</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class InformePressupost {
    // TODO (RA1): escriu un comentari que expliqui què calcula eixe informe
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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-avancada-9">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-avancada-9" class="java-input-data" rows="4" spellcheck="false">1500
3200
0
800
4500
11000</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

#### int-avancada-10 — Control de qualitat

<div class="java-exercise-card" data-ex-id="int-avancada-10">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Control de qualitat</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc"><strong>Enunciat:</strong> Una fàbrica registra <strong>5 mostres</strong> amb el nombre de defectes de cada peça. Una mostra és vàlida si té entre 0 i 20 defectes (ambdós inclosos). L'informe ha de mostrar el recompte de mostres vàlides, la mitjana sencera de defectes, la millor mostra (menor nombre de defectes), la pitjor i quantes mostres són defectuoses (més de 10 defectes).</div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class InformeQualitat {
    // TODO (RA1): escriu un comentari que expliqui què calcula eixe informe
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
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-int-avancada-10">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-int-avancada-10" class="java-input-data" rows="4" spellcheck="false">3
7
-2
12
5</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució guiada completa:</strong>
```java
import java.util.Scanner;

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
}
```
    </div>
  </div>
</div>

---

