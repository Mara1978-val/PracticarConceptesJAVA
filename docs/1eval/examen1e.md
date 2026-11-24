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


## 🧩 Practica integrada — tots els RAs *(bonificació, no compta a la nota)*

Dos exercicis que combinen **estructura (RA1)**, **control (RA3)**, **entrada/sortida (RA5)** i **vectors (RA6)**.
Tenen trossos de codi ja escrits i altres que has de completar. Pots veure la solució i l'intèrpret
t'explica línia a línia qualsevol error.

### 🧪 Exercici integrat 1 — Anàlisi de temperatures

<div class="java-exercise-card" data-ex-id="ex-integ1">
  <div class="java-ex-header">
    <h4 class="java-ex-title">🌡️ Repte integrat: temperatures màxima, mínima i dies calorosos</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt</span>
  </div>
  <div class="java-ex-desc">
    <strong>Enunciat:</strong> llegeix 5 temperatures, guarda-les en un vector i mostra la màxima,
    la mínima i quantes són superiors a 30. Completa els <code>TODO</code>:
    <ul>
      <li><strong>RA1:</strong> afegeix un comentari <code>//</code> i declara la variable <code>calorosos</code>.</li>
      <li><strong>RA6:</strong> recorre el vector per trobar <code>max</code> i <code>min</code>.</li>
      <li><strong>RA3:</strong> compta els valors &gt; 30 amb un <code>if</code>.</li>
      <li><strong>RA5:</strong> mostra les tres dades amb <code>System.out.println</code>.</li>
    </ul>
  </div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO RA1: escriu ací un comentari que explique què fa el programa
        Scanner sc = new Scanner(System.in);
        int[] temps = new int[5];

        for (int i = 0; i < 5; i++) {
            System.out.print("Temperatura " + (i + 1) + ": ");
            temps[i] = sc.nextInt();
        }

        int max = temps[0];
        int min = temps[0];
        // TODO RA1: declara i inicialitza calorosos a 0

        // TODO RA6 + RA3: recorre el vector, actualitza max i min i compta els > 30

        // TODO RA5: mostra "Màxima: X", "Mínima: Y" i "Dies calorosos: Z"
    }
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-integ1">⌨️ Dades d'entrada (5 temperatures, una per línia)</label>
      <textarea id="in-integ1" class="java-input-data" rows="3" spellcheck="false">20
35
31
18
40</textarea>
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
      <strong>💡 Solució guiada:</strong>
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Llegeix temperatures i calcula la màxima, la mínima i els dies calorosos
        Scanner sc = new Scanner(System.in);
        int[] temps = new int[5];

        for (int i = 0; i < 5; i++) {
            System.out.print("Temperatura " + (i + 1) + ": ");
            temps[i] = sc.nextInt();
        }

        int max = temps[0];
        int min = temps[0];
        int calorosos = 0;

        for (int i = 1; i < 5; i++) {
            if (temps[i] > max) { max = temps[i]; }
            if (temps[i] < min) { min = temps[i]; }
            if (temps[i] > 30) { calorosos++; }
        }

        System.out.println("Màxima: " + max);
        System.out.println("Mínima: " + min);
        System.out.println("Dies calorosos: " + calorosos);
    }
}
```
    </div>
  </div>
</div>

### 🧪 Exercici integrat 2 — Notes i mitjana

<div class="java-exercise-card" data-ex-id="ex-integ2">
  <div class="java-ex-header">
    <h4 class="java-ex-title">🎓 Repte integrat: mitjana i recompte d'aprovats</h4>
    <span class="java-ex-score-tag">Pràctica · 1.0 punt</span>
  </div>
  <div class="java-ex-desc">
    <strong>Enunciat:</strong> llegeix 4 notes, guarda-les en un vector, calcula la mitjana sencera
    i compte quantes són majors o iguals que 5. Completa els <code>TODO</code> de <strong>RA1</strong>
    (comentari i variables), <strong>RA5</strong> (entrada i sortida), <strong>RA6</strong> (vector) i
    <strong>RA3</strong> (bucle i <code>if</code>).
  </div>
  <div class="java-editor-wrapper">
    <textarea class="java-code-area" spellcheck="false">
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // TODO RA1: afegeix un comentari d'una línia
        Scanner sc = new Scanner(System.in);
        int[] notes = new int[4];
        int suma = 0;
        // TODO RA1: declara aprovats a 0

        // TODO RA5 + RA6: llegeix les 4 notes amb un bucle for i suma-les

        // TODO RA3 + RA6: recorre el vector i compte les notes >= 5

        int mitjana = suma / 4;

        // TODO RA5: mostra "Mitjana: X" i "Aprovats: Y"
    }
}
    </textarea>
    <div class="java-input-panel">
      <label for="in-integ2">⌨️ Dades d'entrada (4 notes, una per línia)</label>
      <textarea id="in-integ2" class="java-input-data" rows="2" spellcheck="false">4
7
5
8</textarea>
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
      <strong>💡 Solució guiada:</strong>
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Llegeix notes, calcula la mitjana i compta els aprovats
        Scanner sc = new Scanner(System.in);
        int[] notes = new int[4];
        int suma = 0;
        int aprovats = 0;

        for (int i = 0; i < 4; i++) {
            System.out.print("Nota " + (i + 1) + ": ");
            notes[i] = sc.nextInt();
            suma = suma + notes[i];
        }

        for (int i = 0; i < 4; i++) {
            if (notes[i] >= 5) {
                aprovats++;
            }
        }

        int mitjana = suma / 4;

        System.out.println("Mitjana: " + mitjana);
        System.out.println("Aprovats: " + aprovats);
    }
}
```
    </div>
  </div>
</div>

---

Torna a l'inici
