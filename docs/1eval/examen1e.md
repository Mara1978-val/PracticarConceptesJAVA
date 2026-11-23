# Simulador d'Examen — 1a Avaluació

<div class="author-badge">
  <span>✍️ Autora: Mara Vañó</span>
</div>

Simulacre d'examen de **Programació (DAM)** amb els **6 resultats d'aprenentatge** del mòdul.
Cada RA té un test de 5 preguntes (0,5 punts) i un exercici pràctic amb execució real de codi Java.

<div class="score-dashboard">
  <div class="score-dashboard-header">
    <h2 class="score-title">📊 El teu Progrés i Puntuació de l'Examen</h2>
    <span class="total-score-badge" id="dash-total-score">0.00 / 10</span>
  </div>
  <p>Puntuació actualitzada en temps real segons respongues els tests i executes codi Java.</p>
  <div class="ra-pills-grid">
    <div class="ra-pill">
      <div class="ra-pill-header"><span>RA1 · Estructura</span></div>
      <span class="ra-pill-score" id="dash-ra1-score">0.00 / 1.5</span>
      <span class="ra-status-tag status-pending" id="dash-ra1-tag">Pendent (Mín. 0.75)</span>
    </div>
    <div class="ra-pill">
      <div class="ra-pill-header"><span>RA2 · Programes senzills</span></div>
      <span class="ra-pill-score" id="dash-ra2-score">0.00 / 1.5</span>
      <span class="ra-status-tag status-pending" id="dash-ra2-tag">Pendent (Mín. 0.75)</span>
    </div>
    <div class="ra-pill">
      <div class="ra-pill-header"><span>RA3 · Control de flux</span></div>
      <span class="ra-pill-score" id="dash-ra3-score">0.00 / 1.5</span>
      <span class="ra-status-tag status-pending" id="dash-ra3-tag">Pendent (Mín. 0.75)</span>
    </div>
    <div class="ra-pill">
      <div class="ra-pill-header"><span>RA4 · Classes i OOP</span></div>
      <span class="ra-pill-score" id="dash-ra4-score">0.00 / 2.0</span>
      <span class="ra-status-tag status-pending" id="dash-ra4-tag">Pendent (Mín. 1.0)</span>
    </div>
    <div class="ra-pill">
      <div class="ra-pill-header"><span>RA5 · Entrada/sortida</span></div>
      <span class="ra-pill-score" id="dash-ra5-score">0.00 / 1.5</span>
      <span class="ra-status-tag status-pending" id="dash-ra5-tag">Pendent (Mín. 0.75)</span>
    </div>
    <div class="ra-pill">
      <div class="ra-pill-header"><span>RA6 · Tipus avançats</span></div>
      <span class="ra-pill-score" id="dash-ra6-score">0.00 / 2.0</span>
      <span class="ra-status-tag status-pending" id="dash-ra6-tag">Pendent (Mín. 1.0)</span>
    </div>
  </div>
</div>

## 🟦 RA1 — Reconoce la estructura de un programa informático, identificando y relacionando los elementos propios del lenguaje de programación utilizado. (Total: 1.5 punts)

### 📝 Test RA1 *(0.5 punts — 5 preguntes × 0.1 pts)*

<div class="quiz-card" data-ra="ra1" data-qid="ra1-q1">
  <div class="quiz-question-title">
    <span class="quiz-q-num">1</span>
    <span>Quina d’aquestes opcions <strong>NO</strong> és un tipus de dada bàsic en Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra1-q1" value="A"> A) int</label>
    <label class="quiz-option"><input type="radio" name="ra1-q1" value="B"> B) double</label>
    <label class="quiz-option"><input type="radio" name="ra1-q1" value="C"> C) literal</label>
    <label class="quiz-option"><input type="radio" name="ra1-q1" value="D"> D) char</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra1" data-qid="ra1-q2">
  <div class="quiz-question-title">
    <span class="quiz-q-num">2</span>
    <span>Un <strong>comentari</strong> en Java que ocupa només una línia es fa amb:</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra1-q2" value="A"> A) #</label>
    <label class="quiz-option"><input type="radio" name="ra1-q2" value="B"> B) //</label>
    <label class="quiz-option"><input type="radio" name="ra1-q2" value="C"> C) /* */</label>
    <label class="quiz-option"><input type="radio" name="ra1-q2" value="D"> D) --</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra1" data-qid="ra1-q3">
  <div class="quiz-question-title">
    <span class="quiz-q-num">3</span>
    <span>Quin operador o mètode s’utilitza per comparar si dues <strong>variables String</strong> tenen el mateix contingut?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra1-q3" value="A"> A) =</label>
    <label class="quiz-option"><input type="radio" name="ra1-q3" value="B"> B) ==</label>
    <label class="quiz-option"><input type="radio" name="ra1-q3" value="C"> C) !=</label>
    <label class="quiz-option"><input type="radio" name="ra1-q3" value="D"> D) equals</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra1" data-qid="ra1-q4">
  <div class="quiz-question-title">
    <span class="quiz-q-num">4</span>
    <span>Quin és el nom correcte i vàlid per a una <strong>variable</strong> en Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra1-q4" value="A"> A) 3valor</label>
    <label class="quiz-option"><input type="radio" name="ra1-q4" value="B"> B) 1valor-inici</label>
    <label class="quiz-option"><input type="radio" name="ra1-q4" value="C"> C) valorInicial</label>
    <label class="quiz-option"><input type="radio" name="ra1-q4" value="D"> D) valor inicial</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra1" data-qid="ra1-q5">
  <div class="quiz-question-title">
    <span class="quiz-q-num">5</span>
    <span>Quin d’aquests literals és un <strong>numèric enter</strong> (tipus <code>int</code>)?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra1-q5" value="A"> A) '3'</label>
    <label class="quiz-option"><input type="radio" name="ra1-q5" value="B"> B) "3"</label>
    <label class="quiz-option"><input type="radio" name="ra1-q5" value="C"> C) 3</label>
    <label class="quiz-option"><input type="radio" name="ra1-q5" value="D"> D) 3.0</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

### 💻 Exercici Pràctic RA1 (1 punt)

<div class="java-exercise-card" data-ex-id="ex-ra1">
  <div class="java-ex-header">
    <h4 class="java-ex-title">☕ Repte: Declaració de variables i suma bàsica</h4>
    <span class="java-ex-score-tag">Valor: 1.0 punt</span>
  </div>
  <div class="java-ex-desc">
    <strong>Enunciat:</strong> Completa el programa Java següent per a que:
    <ul>
      <li>Declare dues variables enteres (<code>int</code>) amb valors a la teua elecció.</li>
      <li>Les some guardant el resultat en una altra variable.</li>
      <li>Mostre el resultat per pantalla amb <code>System.out.println()</code>.</li>
      <li>Incloga un comentari d'una sola línia amb <code>//</code> explicant què fa el programa.</li>
    </ul>
  </div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
public class Main {
    public static void main(String[] args) {
        // TODO: Escriu el teu codi aquí
        
        
    }
}
    </textarea>
    <p class="java-run-note">ℹ️ Aquest exercici no necessita dades d'entrada. L'execució mostra la sortida real del teu codi.</p>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>

    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span>
        <span class="terminal-dot dot-yellow"></span>
        <span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>

    <div class="pedagogical-feedback"></div>

    <div class="solution-box">
      <strong>💡 Solució de referència comentada:</strong>
```java
public class Main {
    public static void main(String[] args) {
        // Comentari: Suma de dues variables enteres
        int a = 5;
        int b = 7;
        int suma = a + b;
        System.out.println("La suma és " + suma);
    }
}
```
    </div>
  </div>
</div>

---

## 🟩 RA2 — Escribe y prueba programas sencillos, reconociendo y aplicando los fundamentos de la programación orientada a objetos. (Total: 1.5 punts)

### 📝 Test RA2 *(0.5 punts — 5 preguntes × 0.1 pts)*

<div class="quiz-card" data-ra="ra2" data-qid="ra2-q1">
  <div class="quiz-question-title">
    <span class="quiz-q-num">1</span>
    <span>Quina instrucció mostra text per pantalla amb salt de línia en Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra2-q1" value="A"> A) System.read();</label>
    <label class="quiz-option"><input type="radio" name="ra2-q1" value="B"> B) System.get();</label>
    <label class="quiz-option"><input type="radio" name="ra2-q1" value="C"> C) System.out.println();</label>
    <label class="quiz-option"><input type="radio" name="ra2-q1" value="D"> D) Console.write();</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra2" data-qid="ra2-q2">
  <div class="quiz-question-title">
    <span class="quiz-q-num">2</span>
    <span>Quina paraula clau serveix per <strong>declarar una classe</strong> a Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra2-q2" value="A"> A) function</label>
    <label class="quiz-option"><input type="radio" name="ra2-q2" value="B"> B) struct</label>
    <label class="quiz-option"><input type="radio" name="ra2-q2" value="C"> C) class</label>
    <label class="quiz-option"><input type="radio" name="ra2-q2" value="D"> D) interface</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra2" data-qid="ra2-q3">
  <div class="quiz-question-title">
    <span class="quiz-q-num">3</span>
    <span>Quin tipus de dada retorna el mètode <code>nextInt()</code> de la classe Scanner?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra2-q3" value="A"> A) boolean</label>
    <label class="quiz-option"><input type="radio" name="ra2-q3" value="B"> B) double</label>
    <label class="quiz-option"><input type="radio" name="ra2-q3" value="C"> C) int</label>
    <label class="quiz-option"><input type="radio" name="ra2-q3" value="D"> D) String</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra2" data-qid="ra2-q4">
  <div class="quiz-question-title">
    <span class="quiz-q-num">4</span>
    <span>Quin operador o instrucció serveix per guardar/assignar dades en una variable?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra2-q4" value="A"> A) System.out.println</label>
    <label class="quiz-option"><input type="radio" name="ra2-q4" value="B"> B) Scanner</label>
    <label class="quiz-option"><input type="radio" name="ra2-q4" value="C"> C) =</label>
    <label class="quiz-option"><input type="radio" name="ra2-q4" value="D"> D) input()</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra2" data-qid="ra2-q5">
  <div class="quiz-question-title">
    <span class="quiz-q-num">5</span>
    <span>Quin dels següents programes o sentències <strong>compila correctament</strong> en Java estàndard?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra2-q5" value="A"> A) println("Hola");</label>
    <label class="quiz-option"><input type="radio" name="ra2-q5" value="B"> B) System.out.println("Hola");</label>
    <label class="quiz-option"><input type="radio" name="ra2-q5" value="C"> C) Console.out("Hola");</label>
    <label class="quiz-option"><input type="radio" name="ra2-q5" value="D"> D) Show("Hola");</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

### 💻 Exercici Pràctic RA2 (1 punt)

<div class="java-exercise-card" data-ex-id="ex-ra2">
  <div class="java-ex-header">
    <h4 class="java-ex-title">☕ Repte Avançat: Disseny i Implementació de Funcions auxiliars</h4>
    <span class="java-ex-score-tag">Valor: 1.0 punt</span>
  </div>
  <div class="java-ex-desc">
    <strong>Enunciat:</strong> Volem comprovar la longitud dels noms dels clients. Has d'implementar dues funcions separades:<br>
    <ul>
      <li><code>public static int getLongitud(String text)</code>: Retorna el número de caràcters utilitzant <code>.length()</code>.</li>
      <li><code>public static int compararLongitud(int l1, int l2)</code>: Retorna el valor major entre l1 i l2 amb <code>return</code>.</li>
    </ul>
    Dins del <code>main()</code>, demana dos noms, usa <code>getLongitud()</code> per a cadascun, mostra quantes lletres té cadascun i utilitza <code>compararLongitud()</code> per determinar i imprimir quin nom és el més llarg.
  </div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class Main {

    // TODO 1: Implementa la funció getLongitud(String text)
    public static int getLongitud(String text) {
        // Retorna la longitud del text
    }

    // TODO 2: Implementa la funció compararLongitud(int l1, int l2)
    public static int compararLongitud(int l1, int l2) {
        // Retorna el major dels dos valors
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // TODO 3: Llegeix dos noms, mesura'ls i mostra el guanyador
        
    }
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-ra02a">⌨️ Dades d'entrada (dos noms, un per línia)</label>
      <textarea id="in-ra02a" class="java-input-data" rows="2" spellcheck="false">Marta
Alejandro</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>

    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span>
        <span class="terminal-dot dot-yellow"></span>
        <span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>

    <div class="pedagogical-feedback"></div>

    <div class="solution-box">
      <strong>💡 Solució de referència comentada:</strong>
```java
import java.util.Scanner;

public class Main {

    public static int getLongitud(String text) {
        return text.length();
    }

    public static int compararLongitud(int l1, int l2) {
        if (l1 > l2) {
            return l1;
        } else {
            return l2;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Primer nom: ");
        String nom1 = sc.nextLine();

        System.out.print("Segon nom: ");
        String nom2 = sc.nextLine();

        int l1 = getLongitud(nom1);
        int l2 = getLongitud(nom2);

        System.out.println(nom1 + " té " + l1 + " lletres.");
        System.out.println(nom2 + " té " + l2 + " lletres.");

        int major = compararLongitud(l1, l2);

        if (major == l1) {
            System.out.println("El nom més llarg és: " + nom1);
        } else {
            System.out.println("El nom més llarg és: " + nom2);
        }
    }
}
```
    </div>
  </div>
</div>

---

## 🟨 RA3 — Escribe y depura código, analizando y utilizando las estructuras de control del lenguaje. (Total: 1.5 punts)

### 📝 Test RA3 *(0.5 punts — 5 preguntes × 0.1 pts)*

<div class="quiz-card" data-ra="ra3" data-qid="ra3-q1">
  <div class="quiz-question-title">
    <span class="quiz-q-num">1</span>
    <span>Quina instrucció permet executar un bloc de codi només si una condició es compleix?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra3-q1" value="A"> A) for</label>
    <label class="quiz-option"><input type="radio" name="ra3-q1" value="B"> B) if</label>
    <label class="quiz-option"><input type="radio" name="ra3-q1" value="C"> C) int</label>
    <label class="quiz-option"><input type="radio" name="ra3-q1" value="D"> D) String</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra3" data-qid="ra3-q2">
  <div class="quiz-question-title">
    <span class="quiz-q-num">2</span>
    <span>Quina és la sintaxi correcta d’una estructura <code>while</code> en Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra3-q2" value="A"> A) while x&lt;5 { }</label>
    <label class="quiz-option"><input type="radio" name="ra3-q2" value="B"> B) while (x&lt;5) { }</label>
    <label class="quiz-option"><input type="radio" name="ra3-q2" value="C"> C) while (x&lt;5); { }</label>
    <label class="quiz-option"><input type="radio" name="ra3-q2" value="D"> D) repeat (x&lt;5) { }</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra3" data-qid="ra3-q3">
  <div class="quiz-question-title">
    <span class="quiz-q-num">3</span>
    <span>Quin bucle mostra correctament els números de l'1 al 10 en ordre ascendent?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra3-q3" value="A"> A) for (int i = 1; i &lt;= 10; i++)</label>
    <label class="quiz-option"><input type="radio" name="ra3-q3" value="B"> B) for (int i = 0; i &lt; 10; i--)</label>
    <label class="quiz-option"><input type="radio" name="ra3-q3" value="C"> C) if (i &lt; 10)</label>
    <label class="quiz-option"><input type="radio" name="ra3-q3" value="D"> D) while (10)</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra3" data-qid="ra3-q4">
  <div class="quiz-question-title">
    <span class="quiz-q-num">4</span>
    <span>Quina d’aquestes estructures permet repetir instruccions mentre una condició siga vertadera?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra3-q4" value="A"> A) if</label>
    <label class="quiz-option"><input type="radio" name="ra3-q4" value="B"> B) for</label>
    <label class="quiz-option"><input type="radio" name="ra3-q4" value="C"> C) int</label>
    <label class="quiz-option"><input type="radio" name="ra3-q4" value="D"> D) String</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra3" data-qid="ra3-q5">
  <div class="quiz-question-title">
    <span class="quiz-q-num">5</span>
    <span>Quina estructura permet triar entre una condició i una alternativa si és falsa?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra3-q5" value="A"> A) if / else</label>
    <label class="quiz-option"><input type="radio" name="ra3-q5" value="B"> B) import</label>
    <label class="quiz-option"><input type="radio" name="ra3-q5" value="C"> C) class</label>
    <label class="quiz-option"><input type="radio" name="ra3-q5" value="D"> D) new</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

### 💻 Exercici Pràctic RA3 (1 punt)

<div class="java-exercise-card" data-ex-id="ex-ra3">
  <div class="java-ex-header">
    <h4 class="java-ex-title">☕ Repte: Classificació numèrica amb if / else if / else</h4>
    <span class="java-ex-score-tag">Valor: 1.0 punt</span>
  </div>
  <div class="java-ex-desc">
    <strong>Enunciat:</strong> Fes un programa que demane un número per teclat i mostre per pantalla si és:
    <ul>
      <li><code>"Positiu"</code> (si és major que 0)</li>
      <li><code>"Negatiu"</code> (si és menor que 0)</li>
      <li><code>"Zero"</code> (si és igual a 0)</li>
    </ul>
  </div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Número: ");
        int num = sc.nextInt();

        // TODO: Escriu l'estructura if / else if / else
        
        
    }
}
    </textarea>
    <p class="java-run-note">ℹ️ Aquest exercici es prova automàticament amb tres valors: <code>15</code>, <code>-4</code> i <code>0</code>.</p>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>

    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span>
        <span class="terminal-dot dot-yellow"></span>
        <span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>

    <div class="pedagogical-feedback"></div>

    <div class="solution-box">
      <strong>💡 Solució de referència comentada:</strong>
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Número: ");
        int num = sc.nextInt();

        if (num > 0) {
            System.out.println("Positiu");
        } else if (num < 0) {
            System.out.println("Negatiu");
        } else {
            System.out.println("Zero");
        }
    }
}
```
    </div>
  </div>
</div>

---

## 🟪 RA4 — Desarrolla programas organizados en clases analizando y aplicando los principios de la programación orientada a objetos. (Total: 2.0 punts)

### 📝 Test RA4 *(0.5 punts — 5 preguntes × 0.1 pts)*

<div class="quiz-card" data-ra="ra4" data-qid="ra4-q1">
  <div class="quiz-question-title">
    <span class="quiz-q-num">1</span>
    <span>Quin és el constructor d'una classe Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra4-q1" value="A"> A) Un mètode amb el mateix nom que la classe i sense tipus de retorn</label>
    <label class="quiz-option"><input type="radio" name="ra4-q1" value="B"> B) El mètode main()</label>
    <label class="quiz-option"><input type="radio" name="ra4-q1" value="C"> C) Un mètode static</label>
    <label class="quiz-option"><input type="radio" name="ra4-q1" value="D"> D) Un camp privat</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra4" data-qid="ra4-q2">
  <div class="quiz-question-title">
    <span class="quiz-q-num">2</span>
    <span>Quina paraula clau fa que un camp només sigui accessible des de la seva classe?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra4-q2" value="A"> A) private</label>
    <label class="quiz-option"><input type="radio" name="ra4-q2" value="B"> B) public</label>
    <label class="quiz-option"><input type="radio" name="ra4-q2" value="C"> C) static</label>
    <label class="quiz-option"><input type="radio" name="ra4-q2" value="D"> D) void</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra4" data-qid="ra4-q3">
  <div class="quiz-question-title">
    <span class="quiz-q-num">3</span>
    <span>Què fa l'expressió <code>new Persona()</code>?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra4-q3" value="A"> A) Crea una instància (objecte) de la classe Persona</label>
    <label class="quiz-option"><input type="radio" name="ra4-q3" value="B"> B) Declara una classe nova</label>
    <label class="quiz-option"><input type="radio" name="ra4-q3" value="C"> C) Crida al mètode main</label>
    <label class="quiz-option"><input type="radio" name="ra4-q3" value="D"> D) Elimina un objecte</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra4" data-qid="ra4-q4">
  <div class="quiz-question-title">
    <span class="quiz-q-num">4</span>
    <span>Què és l'encapsulació?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra4-q4" value="A"> A) Amagar els camps i accedir-hi mitjançant mètodes</label>
    <label class="quiz-option"><input type="radio" name="ra4-q4" value="B"> B) Repetir codi</label>
    <label class="quiz-option"><input type="radio" name="ra4-q4" value="C"> C) Heredar d'una classe</label>
    <label class="quiz-option"><input type="radio" name="ra4-q4" value="D"> D) Imprimir dades per pantalla</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra4" data-qid="ra4-q5">
  <div class="quiz-question-title">
    <span class="quiz-q-num">5</span>
    <span>Quin modificador indica que un mètode pertany a la classe i no a un objecte?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra4-q5" value="A"> A) static</label>
    <label class="quiz-option"><input type="radio" name="ra4-q5" value="B"> B) private</label>
    <label class="quiz-option"><input type="radio" name="ra4-q5" value="C"> C) final</label>
    <label class="quiz-option"><input type="radio" name="ra4-q5" value="D"> D) new</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

### 💻 Exercici Pràctic RA4 (1.5 punts)

<div class="java-exercise-card" data-ex-id="ex-ra4">
  <div class="java-ex-header">
    <h4 class="java-ex-title">☕ Repte: Classe Persona, constructor i getters</h4>
    <span class="java-ex-score-tag">Valor: 1.5 punts</span>
  </div>
  <div class="java-ex-desc">
    <strong>Enunciat:</strong> Completa la classe <code>Persona</code> perquè:
    <ul>
      <li>Tenga dos camps privats: <code>String nom</code> i <code>int edat</code>.</li>
      <li>Incloga un constructor <code>Persona(String nom, int edat)</code> que inicialitze els camps amb <code>this</code>.</li>
      <li>Tenga els mètodes <code>getNom()</code> i <code>getEdat()</code> que retornen els valors.</li>
      <li>Des del <code>main</code> es cree l'objecte amb les dades d'entrada i es mostre <code>nom té edat anys.</code></li>
    </ul>
  </div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

class Persona {
    // TODO 1: Declara els camps privats nom i edat

    // TODO 2: Escriu el constructor Persona(String nom, int edat)

    // TODO 3: Escriu els mètodes getNom() i getEdat()
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String nom = sc.nextLine();
        int edat = sc.nextInt();

        Persona p = new Persona(nom, edat);
        System.out.println(p.getNom() + " té " + p.getEdat() + " anys.");
    }
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-ra4">⌨️ Dades d'entrada (nom i edat, un per línia)</label>
      <textarea id="in-ra4" class="java-input-data" rows="2" spellcheck="false">Marta
20</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span>
        <span class="terminal-dot dot-yellow"></span>
        <span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>
    <div class="pedagogical-feedback"></div>
    <div class="solution-box">
      <strong>💡 Solució de referència comentada:</strong>
```java
import java.util.Scanner;

class Persona {
    private String nom;
    private int edat;

    public Persona(String nom, int edat) {
        this.nom = nom;
        this.edat = edat;
    }

    public String getNom() { return nom; }
    public int getEdat() { return edat; }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String nom = sc.nextLine();
        int edat = sc.nextInt();

        Persona p = new Persona(nom, edat);
        System.out.println(p.getNom() + " té " + p.getEdat() + " anys.");
    }
}
```
    </div>
  </div>
</div>

---

## 🟧 RA5 — Realiza operaciones de entrada y salida de información, utilizando procedimientos específicos del lenguaje y librerías de clases. (Total: 1.5 punts)

### 📝 Test RA5 *(0.5 punts — 5 preguntes × 0.1 pts)*

<div class="quiz-card" data-ra="ra5" data-qid="ra5-q1">
  <div class="quiz-question-title">
    <span class="quiz-q-num">1</span>
    <span>Quina classe cal importar per llegir dades per teclat amb Scanner?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra5-q1" value="A"> A) java.util.Scanner</label>
    <label class="quiz-option"><input type="radio" name="ra5-q1" value="B"> B) java.io.Print</label>
    <label class="quiz-option"><input type="radio" name="ra5-q1" value="C"> C) java.lang.Input</label>
    <label class="quiz-option"><input type="radio" name="ra5-q1" value="D"> D) java.text.Reader</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra5" data-qid="ra5-q2">
  <div class="quiz-question-title">
    <span class="quiz-q-num">2</span>
    <span>Què retorna el mètode <code>nextLine()</code> d'un Scanner?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra5-q2" value="A"> A) Un String</label>
    <label class="quiz-option"><input type="radio" name="ra5-q2" value="B"> B) Un int</label>
    <label class="quiz-option"><input type="radio" name="ra5-q2" value="C"> C) Un boolean</label>
    <label class="quiz-option"><input type="radio" name="ra5-q2" value="D"> D) Un double</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra5" data-qid="ra5-q3">
  <div class="quiz-question-title">
    <span class="quiz-q-num">3</span>
    <span>Quin mètode de Scanner llegeix un número enter?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra5-q3" value="A"> A) nextInt()</label>
    <label class="quiz-option"><input type="radio" name="ra5-q3" value="B"> B) nextLine()</label>
    <label class="quiz-option"><input type="radio" name="ra5-q3" value="C"> C) nextDouble()</label>
    <label class="quiz-option"><input type="radio" name="ra5-q3" value="D"> D) nextChar()</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra5" data-qid="ra5-q4">
  <div class="quiz-question-title">
    <span class="quiz-q-num">4</span>
    <span>Quina instrucció mostra text per pantalla sense salt de línia?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra5-q4" value="A"> A) System.out.print()</label>
    <label class="quiz-option"><input type="radio" name="ra5-q4" value="B"> B) System.out.println()</label>
    <label class="quiz-option"><input type="radio" name="ra5-q4" value="C"> C) System.out.write()</label>
    <label class="quiz-option"><input type="radio" name="ra5-q4" value="D"> D) System.out.line()</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra5" data-qid="ra5-q5">
  <div class="quiz-question-title">
    <span class="quiz-q-num">5</span>
    <span>Quina classe s'utilitza habitualment per escriure en un fitxer de text?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra5-q5" value="A"> A) FileWriter</label>
    <label class="quiz-option"><input type="radio" name="ra5-q5" value="B"> B) Scanner</label>
    <label class="quiz-option"><input type="radio" name="ra5-q5" value="C"> C) ArrayList</label>
    <label class="quiz-option"><input type="radio" name="ra5-q5" value="D"> D) Math</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

### 💻 Exercici Pràctic RA5 (1 punt)

<div class="java-exercise-card" data-ex-id="ex-ra5">
  <div class="java-ex-header">
    <h4 class="java-ex-title">☕ Repte Bàsic: Entrada amb Scanner i Càlcul d'Edat</h4>
    <span class="java-ex-score-tag">Valor: 1.0 punt</span>
  </div>
  <div class="java-ex-desc">
    <strong>Enunciat:</strong> Fes un programa que demane per teclat el <strong>nom</strong> de l’usuari i la <strong>seua edat</strong>.<br>
    Després, el programa ha de calcular l'any de naixement (suposant que estem en <strong>2026</strong>) i mostrar el missatge exacte:<br>
    <code>"Hola &lt;nom&gt;, vas nàixer l’any &lt;any&gt;."</code>
  </div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // TODO 1: Demana i llegeix el nom (String)
        
        // TODO 2: Demana i llegeix l'edat (int)
        
        // TODO 3: Calcula l'any de naixement (2026 - edat)
        
        // TODO 4: Mostra el missatge: "Hola <nom>, vas nàixer l'any <any>."
        
    }
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-ra02b">⌨️ Dades d'entrada (una dada per línia: nom i edat)</label>
      <textarea id="in-ra02b" class="java-input-data" rows="2" spellcheck="false">Laura
19</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>

    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span>
        <span class="terminal-dot dot-yellow"></span>
        <span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>

    <div class="pedagogical-feedback"></div>

    <div class="solution-box">
      <strong>💡 Solució de referència comentada:</strong>
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nom: ");
        String nom = sc.nextLine();

        System.out.print("Edat: ");
        int edat = sc.nextInt();

        int anyNaixement = 2026 - edat;

        System.out.println("Hola " + nom + ", vas nàixer l'any " + anyNaixement + ".");
    }
}
```
    </div>
  </div>
</div>

---

## 🟦 RA6 — Escribe programas que manipulen información seleccionando y utilizando tipos avanzados de datos. (Total: 2.0 punts)

### 📝 Test RA6 *(0.5 punts — 5 preguntes × 0.1 pts)*

<div class="quiz-card" data-ra="ra6" data-qid="ra6-q1">
  <div class="quiz-question-title">
    <span class="quiz-q-num">1</span>
    <span>Quin d’aquests declara correctament una variable per a un array o vector d’enters?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra6-q1" value="A"> A) int numeros[];</label>
    <label class="quiz-option"><input type="radio" name="ra6-q1" value="B"> B) vector int numeros;</label>
    <label class="quiz-option"><input type="radio" name="ra6-q1" value="C"> C) int numeros = [];</label>
    <label class="quiz-option"><input type="radio" name="ra6-q1" value="D"> D) int[];</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra6" data-qid="ra6-q2">
  <div class="quiz-question-title">
    <span class="quiz-q-num">2</span>
    <span>Quin és l’índex del <strong>primer element</strong> de qualsevol vector en Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra6-q2" value="A"> A) 0</label>
    <label class="quiz-option"><input type="radio" name="ra6-q2" value="B"> B) 1</label>
    <label class="quiz-option"><input type="radio" name="ra6-q2" value="C"> C) -1</label>
    <label class="quiz-option"><input type="radio" name="ra6-q2" value="D"> D) Depén de la mida</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra6" data-qid="ra6-q3">
  <div class="quiz-question-title">
    <span class="quiz-q-num">3</span>
    <span>A quin paquet estàndard de Java pertany la classe de col·leccions dinàmiques <strong>ArrayList</strong>?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra6-q3" value="A"> A) java.random</label>
    <label class="quiz-option"><input type="radio" name="ra6-q3" value="B"> B) java.util</label>
    <label class="quiz-option"><input type="radio" name="ra6-q3" value="C"> C) java.array</label>
    <label class="quiz-option"><input type="radio" name="ra6-q3" value="D"> D) java.collections</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra6" data-qid="ra6-q4">
  <div class="quiz-question-title">
    <span class="quiz-q-num">4</span>
    <span>Quin mètode <strong>afegeix</strong> un nou element a un objecte ArrayList en Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra6-q4" value="A"> A) add()</label>
    <label class="quiz-option"><input type="radio" name="ra6-q4" value="B"> B) insert()</label>
    <label class="quiz-option"><input type="radio" name="ra6-q4" value="C"> C) push()</label>
    <label class="quiz-option"><input type="radio" name="ra6-q4" value="D"> D) put()</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Qn -->

<div class="quiz-card" data-ra="ra6" data-qid="ra6-q5">
  <div class="quiz-question-title">
    <span class="quiz-q-num">5</span>
    <span>Quina instrucció de control permet <strong>recórrer ordenadament</strong> tots els valors d’un vector?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra6-q5" value="A"> A) if</label>
    <label class="quiz-option"><input type="radio" name="ra6-q5" value="B"> B) main</label>
    <label class="quiz-option"><input type="radio" name="ra6-q5" value="C"> C) for</label>
    <label class="quiz-option"><input type="radio" name="ra6-q5" value="D"> D) new</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

### 💻 Exercici Pràctic RA6 (1.5 punts)

<div class="java-exercise-card" data-ex-id="ex-ra6">
  <div class="java-ex-header">
    <h4 class="java-ex-title">☕ Repte: Recorregut d'un vector i cerca de Màxim i Mínim</h4>
    <span class="java-ex-score-tag">Valor: 1.5 punts</span>
  </div>
  <div class="java-ex-desc">
    <strong>Enunciat:</strong> Fes un programa que:
    <ul>
      <li>Cree un vector d'enters de mida 5 (<code>new int[5]</code>).</li>
      <li>Demane cada número per teclat amb un bucle <code>for</code>.</li>
      <li>Calcule i mostre el <strong>valor màxim</strong> i el <strong>mínim</strong> trobats al vector.</li>
    </ul>
  </div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // TODO 1: Crea un array int[5]
        int[] numeros = new int[5];

        // TODO 2: Demana els 5 valors amb un bucle for
        for (int i = 0; i < 5; i++) {
            System.out.print("Número " + (i + 1) + ": ");
            numeros[i] = sc.nextInt();
        }

        // TODO 3: Inicialitza max i min amb el primer element
        int max = numeros[0];
        int min = numeros[0];

        // TODO 4: Recorre el vector comparant i actualitzant max i min
        

        // TODO 5: Mostra el Màxim i el Mínim
        System.out.println("Màxim: " + max);
        System.out.println("Mínim: " + min);
    }
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-ra06">⌨️ Dades d'entrada (5 números, un per línia)</label>
      <textarea id="in-ra06" class="java-input-data" rows="3" spellcheck="false">12
4
99
1
35</textarea>
    </div>
    <div class="java-ex-actions">
      <button type="button" class="btn-run">▶ Executar i Corregir codi</button>
      <button type="button" class="btn-reset">🔄 Reiniciar codi</button>
      <button type="button" class="btn-solution">💡 Veure solució guiada</button>
    </div>

    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-dot dot-red"></span>
        <span class="terminal-dot dot-yellow"></span>
        <span class="terminal-dot dot-green"></span>
        <span class="terminal-title">Consola de Sortida Java</span>
      </div>
      <div class="terminal-body"></div>
    </div>

    <div class="pedagogical-feedback"></div>

    <div class="solution-box">
      <strong>💡 Solució de referència comentada:</strong>
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] numeros = new int[5];

        for (int i = 0; i < 5; i++) {
            System.out.print("Número " + (i + 1) + ": ");
            numeros[i] = sc.nextInt();
        }

        int max = numeros[0];
        int min = numeros[0];

        for (int i = 1; i < 5; i++) {
            if (numeros[i] > max) {
                max = numeros[i];
            }
            if (numeros[i] < min) {
                min = numeros[i];
            }
        }

        System.out.println("Màxim: " + max);
        System.out.println("Mínim: " + min);
    }
}
```
    </div>
  </div>
</div>

---

Torna a l'inici
