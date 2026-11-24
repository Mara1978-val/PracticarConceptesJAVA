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
  <p>4 resultats d'aprenentatge · 10 punts. Els exercicis integrats són pràctica addicional i no modifiquen aquesta nota.</p>
  <div class="ra-pills-grid">
    <div class="ra-pill">
      <div class="ra-pill-header"><span>RA1 · Estructura</span></div>
      <span class="ra-pill-score" id="dash-ra1-score">0.00 / 2.5</span>
      <span class="ra-status-tag status-pending" id="dash-ra1-tag">Pendent (Mín. 1.25)</span>
    </div>
    <div class="ra-pill">
      <div class="ra-pill-header"><span>RA3 · Control de flux</span></div>
      <span class="ra-pill-score" id="dash-ra3-score">0.00 / 2.5</span>
      <span class="ra-status-tag status-pending" id="dash-ra3-tag">Pendent (Mín. 1.25)</span>
    </div>
    <div class="ra-pill">
      <div class="ra-pill-header"><span>RA5 · Entrada/sortida</span></div>
      <span class="ra-pill-score" id="dash-ra5-score">0.00 / 2.5</span>
      <span class="ra-status-tag status-pending" id="dash-ra5-tag">Pendent (Mín. 1.25)</span>
    </div>
    <div class="ra-pill">
      <div class="ra-pill-header"><span>RA6 · Tipus avançats</span></div>
      <span class="ra-pill-score" id="dash-ra6-score">0.00 / 2.5</span>
      <span class="ra-status-tag status-pending" id="dash-ra6-tag">Pendent (Mín. 1.25)</span>
    </div>
  </div>
</div>

## 🟦 RA1 — Reconoce la estructura de un programa informático, identificando y relacionando los elementos propios del lenguaje de programación utilizado. (Total: 2.5 punts)

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

### 💻 Exercici Pràctic RA1 (2 punts)

<div class="java-exercise-card" data-ex-id="ex-ra1">
  <div class="java-ex-header">
    <h4 class="java-ex-title">☕ Repte: Declaració de variables i suma bàsica</h4>
    <span class="java-ex-score-tag">Valor: 2.0 punts</span>
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

## 🟨 RA3 — Escribe y depura código, analizando y utilizando las estructuras de control del lenguaje. (Total: 2.5 punts)

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

### 💻 Exercici Pràctic RA3 (2 punts)

<div class="java-exercise-card" data-ex-id="ex-ra3">
  <div class="java-ex-header">
    <h4 class="java-ex-title">☕ Repte: Classificació numèrica amb if / else if / else</h4>
    <span class="java-ex-score-tag">Valor: 2.0 punts</span>
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

## 🟧 RA5 — Realiza operaciones de entrada y salida de información, utilizando procedimientos específicos del lenguaje y librerías de clases. (Total: 2.5 punts)

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

### 💻 Exercici Pràctic RA5 (2 punts)

<div class="java-exercise-card" data-ex-id="ex-ra5">
  <div class="java-ex-header">
    <h4 class="java-ex-title">☕ Repte Bàsic: Entrada amb Scanner i Càlcul d'Edat</h4>
    <span class="java-ex-score-tag">Valor: 2.0 punts</span>
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

## 🟦 RA6 — Escribe programas que manipulen información seleccionando y utilizando tipos avanzados de datos. (Total: 2.5 punts)

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

### 💻 Exercici Pràctic RA6 (2 punts)

<div class="java-exercise-card" data-ex-id="ex-ra6">
  <div class="java-ex-header">
    <h4 class="java-ex-title">☕ Repte: Recorregut d'un vector i cerca de Màxim i Mínim</h4>
    <span class="java-ex-score-tag">Valor: 2.0 punts</span>
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



## 🧩 Practica integrada per nivells — tots els RAs *(bonificació, no compta a la nota)*

Tres aplicacions que combinen **estructura (RA1)**, **control (RA3)**, **entrada/sortida (RA5)** i **vectors (RA6)**.
Cada una té trossos de codi ja implementats i altres que has de completar. Pots veure la solució guiada
i l'intèrpret t'explica qualsevol error línia a línia. Els tres nivells són pràctica addicional i no
modifiquen la nota de 10 punts de l'examen.

### 🟢 Nivell bàsic — Fitxa d'alumne amb mitjana i resultat

<div class="java-exercise-card" data-ex-id="ex-int-basic">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Fitxa d'alumne amb mitjana i resultat</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc">
    <strong>Enunciat:</strong> Llegeix el nom, l'edat i 3 notes d'un alumne. Les notes ja es guarden en un vector amb un bucle <code>for</code> escrit. Has de completar: la suma de notes, el càlcul de la mitjana i un <code>if / else</code> que mostri <em>Aprovat</em> o <em>Suspès</em>. Finalment imprimeix la fitxa completa amb el nom, l'edat, la mitjana i el resultat.
  </div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO RA1: escriu un comentari que descriga aquest programa
        Scanner sc = new Scanner(System.in);

        System.out.print("Nom: ");
        String nom = sc.nextLine();
        System.out.print("Edat: ");
        int edat = sc.nextInt();

        int[] notes = new int[3];
        int suma = 0;

        for (int i = 0; i < 3; i++) {
            System.out.print("Nota " + (i + 1) + ": ");
            notes[i] = sc.nextInt();
            // TODO RA6: afegeix notes[i] a la variable suma
        }

        // TODO RA1: calcula la mitjana sencera (suma / 3)
        int mitjana = 0;

        // TODO RA3: posa "Aprovat" si mitjana >= 5, si no "Suspés"
        String resultat = "";

        System.out.println("--- Fitxa de l'alumne ---");
        System.out.println(nom + " (" + edat + " anys)");
        // TODO RA5: mostra "Mitjana: X" i "Resultat: Y"
    }
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-ex-int-basic">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-ex-int-basic" class="java-input-data" rows="4" spellcheck="false">Marta
20
6
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
        // Llegeix la fitxa d'un alumne i calcula la seua mitjana
        Scanner sc = new Scanner(System.in);

        System.out.print("Nom: ");
        String nom = sc.nextLine();
        System.out.print("Edat: ");
        int edat = sc.nextInt();

        int[] notes = new int[3];
        int suma = 0;

        for (int i = 0; i < 3; i++) {
            System.out.print("Nota " + (i + 1) + ": ");
            notes[i] = sc.nextInt();
            suma = suma + notes[i];
        }

        int mitjana = suma / 3;

        String resultat;
        if (mitjana >= 5) {
            resultat = "Aprovat";
        } else {
            resultat = "Suspés";
        }

        System.out.println("--- Fitxa de l'alumne ---");
        System.out.println(nom + " (" + edat + " anys)");
        System.out.println("Mitjana: " + mitjana);
        System.out.println("Resultat: " + resultat);
    }
}
```
    </div>
  </div>
</div>

### 🟡 Nivell mitjà — Tiquet de compra amb descompte

<div class="java-exercise-card" data-ex-id="ex-int-mitja">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Tiquet de compra amb descompte</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc">
    <strong>Enunciat:</strong> Fes una aplicació de tiquet: llegeix el número de productes i els seus preus, guarda'ls en un vector, calcula el total, el preu màxim i quants productes superen 100. Si el total passa de 500, aplica un descompte del 10%. Mostra un tiquet formatat amb tots els conceptes. El vector i la lectura ja estan escrits; completeu el càlcul i les condicions.
  </div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO RA1: comentari i declaracions de total, maxim i cars
        Scanner sc = new Scanner(System.in);

        System.out.print("Nombre de productes: ");
        int n = sc.nextInt();
        int[] preus = new int[n];
        int total = 0;
        int maxim = 0;
        int cars = 0;

        for (int i = 0; i < n; i++) {
            System.out.print("Preu " + (i + 1) + ": ");
            preus[i] = sc.nextInt();
            // TODO RA6: suma el preu al total i actualitza el màxim
        }

        // TODO RA3 + RA6: compta quants preus són > 100

        int descompte = 0;
        // TODO RA3: si total > 500, descompte = total * 10 / 100

        int aPagar = total - descompte;

        System.out.println("===== TIQUET =====");
        // TODO RA5: mostra Total, Preu maxim, Productes > 100,
        //           Descompte i A pagar
    }
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-ex-int-mitja">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-ex-int-mitja" class="java-input-data" rows="4" spellcheck="false">4
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
        // Llegeix preus, calcula estadístiques i aplica descompte
        Scanner sc = new Scanner(System.in);

        System.out.print("Nombre de productes: ");
        int n = sc.nextInt();
        int[] preus = new int[n];
        int total = 0;
        int maxim = 0;
        int cars = 0;

        for (int i = 0; i < n; i++) {
            System.out.print("Preu " + (i + 1) + ": ");
            preus[i] = sc.nextInt();
            total = total + preus[i];
            if (preus[i] > maxim) {
                maxim = preus[i];
            }
        }

        for (int i = 0; i < n; i++) {
            if (preus[i] > 100) {
                cars++;
            }
        }

        int descompte = 0;
        if (total > 500) {
            descompte = total * 10 / 100;
        }

        int aPagar = total - descompte;

        System.out.println("===== TIQUET =====");
        System.out.println("Total: " + total);
        System.out.println("Preu maxim: " + maxim);
        System.out.println("Productes > 100: " + cars);
        System.out.println("Descompte: " + descompte);
        System.out.println("A pagar: " + aPagar);
    }
}
```
    </div>
  </div>
</div>

### 🔴 Nivell avançat — Informe de qualitat de sensors

<div class="java-exercise-card" data-ex-id="ex-int-avancada">
  <div class="java-ex-header">
    <h4 class="java-ex-title">Informe de qualitat de sensors</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt · RA1 + RA3 + RA5 + RA6</span>
  </div>
  <div class="java-ex-desc">
    <strong>Enunciat:</strong> Aplicació més completa per validar 6 lectures de sensors. La funció <code>esValida(int)</code> i l'estructura bàsica ja estan escrites. Has de completar: la funció de validació (valor entre 0 i 40), el recompte de lectures vàlides/invàlides, la suma i el màxim/mínim només de les vàlides, i un informe final amb la mitjana i el número de sensors òptims (≥ 25). Mostra també l'estat de cada sensor amb <code>if / else</code>.
  </div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class Main {
    // TODO RA3 (avan.cat): completa aquesta funció
    public static boolean esValida(int valor) {
        return false;
    }

    public static void main(String[] args) {
        // TODO RA1: comentari general del programa
        Scanner sc = new Scanner(System.in);
        int[] sensors = new int[6];
        int valides = 0;
        int suma = 0;
        int maxim = 0;
        int minima = 9999;
        int optims = 0;

        for (int i = 0; i < 6; i++) {
            System.out.print("Sensor " + (i + 1) + ": ");
            sensors[i] = sc.nextInt();

            // TODO RA3: si esValida(sensors[i]), suma, compta,
            //           actualitza maxim i minima, i compta els >= 25.
            //           Si no, mostra "Sensor X:Invalid"
        }

        System.out.println("===== INFORME =====");
        System.out.println("Lectures valides: " + valides);
        // TODO RA5: mostra Mitjana, Maxima, Minima i Optims
        //           (mitjana = suma / valides; protegeix si valides == 0)
    }
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-ex-int-avancada">⌨️ Dades d'entrada (una dada per línia)</label>
      <textarea id="in-ex-int-avancada" class="java-input-data" rows="4" spellcheck="false">18
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

public class Main {
    public static boolean esValida(int valor) {
        return valor >= 0 && valor <= 40;
    }

    public static void main(String[] args) {
        // Validació i estadístiques de lectures de sensors
        Scanner sc = new Scanner(System.in);
        int[] sensors = new int[6];
        int valides = 0;
        int suma = 0;
        int maxim = 0;
        int minima = 9999;
        int optims = 0;

        for (int i = 0; i < 6; i++) {
            System.out.print("Sensor " + (i + 1) + ": ");
            sensors[i] = sc.nextInt();

            if (esValida(sensors[i])) {
                System.out.println("Sensor " + (i + 1) + ": Correcte");
                valides++;
                suma = suma + sensors[i];
                if (sensors[i] > maxim) { maxim = sensors[i]; }
                if (sensors[i] < minima) { minima = sensors[i]; }
                if (sensors[i] >= 25) { optims++; }
            } else {
                System.out.println("Sensor " + (i + 1) + ": Invalid");
            }
        }

        System.out.println("===== INFORME =====");
        System.out.println("Lectures valides: " + valides);
        if (valides > 0) {
            System.out.println("Mitjana: " + (suma / valides));
            System.out.println("Maxima: " + maxim);
            System.out.println("Minima: " + minima);
            System.out.println("Optims: " + optims);
        } else {
            System.out.println("Sense lectures valides");
        }
    }
}
```
    </div>
  </div>
</div>

---
Torna a l'inici
