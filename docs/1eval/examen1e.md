# Simulador Interactiu d'Examen — 1a Avaluació

<div class="author-badge">
  <span>✍️ Autora: Mara Vañó</span>
</div>

<!-- ======================================================================= -->
<!-- DASHBOARD DE PUNTUACIÓ EN TEMPS REAL -->
<!-- ======================================================================= -->
<div class="score-dashboard">
  <div class="score-dashboard-header">
    <div>
      <h3 class="score-title">📊 El teu Progrés i Puntuació de l'Examen</h3>
      <small style="opacity:0.85;">Puntuació actualitzada en temps real segons respons els tests i executes codi Java</small>
    </div>
    <div class="total-score-badge">
      <span id="dash-total-score">0.00 / 10</span>
    </div>
  </div>

  <div class="ra-pills-grid">
    <div class="ra-pill">
      <div class="ra-pill-header">
        <span>🟦 RA01 — Estructura</span>
        <span class="ra-pill-score" id="dash-ra01-score">0.00 / 2</span>
      </div>
      <span class="ra-status-tag status-pending" id="dash-ra01-tag">Pendent (Mín. 1.0)</span>
    </div>

    <div class="ra-pill">
      <div class="ra-pill-header">
        <span>🟩 RA02 — Programes i Funcions</span>
        <span class="ra-pill-score" id="dash-ra02-score">0.00 / 4</span>
      </div>
      <span class="ra-status-tag status-pending" id="dash-ra02-tag">Pendent (Mín. 2.0)</span>
    </div>

    <div class="ra-pill">
      <div class="ra-pill-header">
        <span>🟨 RA03 — Control de Flux</span>
        <span class="ra-pill-score" id="dash-ra03-score">0.00 / 2</span>
      </div>
      <span class="ra-status-tag status-pending" id="dash-ra03-tag">Pendent (Mín. 1.0)</span>
    </div>

    <div class="ra-pill">
      <div class="ra-pill-header">
        <span>🟦 RA06 — Vectors / Arrays</span>
        <span class="ra-pill-score" id="dash-ra06-score">0.00 / 2</span>
      </div>
      <span class="ra-status-tag status-pending" id="dash-ra06-tag">Pendent (Mín. 1.0)</span>
    </div>
  </div>
</div>

---

## 🟦 RA01 — Estructura d’un programa (Total: 2 punts)

### 📝 Test RA01 *(1 punt — 5 preguntes × 0.2 pts)*

<!-- Q1 -->
<div class="quiz-card" data-ra="ra01" data-qid="ra01-q1">
  <div class="quiz-question-title">
    <span class="quiz-q-num">1</span>
    <span>Quina d’aquestes opcions <strong>NO</strong> és un tipus de dada bàsic en Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra01-q1" value="A"> A) int</label>
    <label class="quiz-option"><input type="radio" name="ra01-q1" value="B"> B) double</label>
    <label class="quiz-option"><input type="radio" name="ra01-q1" value="C"> C) literal</label>
    <label class="quiz-option"><input type="radio" name="ra01-q1" value="D"> D) char</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q2 -->
<div class="quiz-card" data-ra="ra01" data-qid="ra01-q2">
  <div class="quiz-question-title">
    <span class="quiz-q-num">2</span>
    <span>Un <strong>comentari</strong> en Java que ocupa només una línia es fa amb:</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra01-q2" value="A"> A) #</label>
    <label class="quiz-option"><input type="radio" name="ra01-q2" value="B"> B) //</label>
    <label class="quiz-option"><input type="radio" name="ra01-q2" value="C"> C) /* */</label>
    <label class="quiz-option"><input type="radio" name="ra01-q2" value="D"> D) --</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q3 -->
<div class="quiz-card" data-ra="ra01" data-qid="ra01-q3">
  <div class="quiz-question-title">
    <span class="quiz-q-num">3</span>
    <span>Quin operador o mètode s’utilitza per comparar si dues <strong>variables String</strong> tenen el mateix contingut?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra01-q3" value="A"> A) =</label>
    <label class="quiz-option"><input type="radio" name="ra01-q3" value="B"> B) ==</label>
    <label class="quiz-option"><input type="radio" name="ra01-q3" value="C"> C) !=</label>
    <label class="quiz-option"><input type="radio" name="ra01-q3" value="D"> D) equals</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q4 -->
<div class="quiz-card" data-ra="ra01" data-qid="ra01-q4">
  <div class="quiz-question-title">
    <span class="quiz-q-num">4</span>
    <span>Quin és el nom correcte i vàlid per a una <strong>variable</strong> en Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra01-q4" value="A"> A) 3valor</label>
    <label class="quiz-option"><input type="radio" name="ra01-q4" value="B"> B) 1valor-inici</label>
    <label class="quiz-option"><input type="radio" name="ra01-q4" value="C"> C) valorInicial</label>
    <label class="quiz-option"><input type="radio" name="ra01-q4" value="D"> D) valor inicial</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q5 -->
<div class="quiz-card" data-ra="ra01" data-qid="ra01-q5">
  <div class="quiz-question-title">
    <span class="quiz-q-num">5</span>
    <span>Quin d’aquests literals és un <strong>numèric enter</strong> (tipus <code>int</code>)?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra01-q5" value="A"> A) '3'</label>
    <label class="quiz-option"><input type="radio" name="ra01-q5" value="B"> B) "3"</label>
    <label class="quiz-option"><input type="radio" name="ra01-q5" value="C"> C) 3</label>
    <label class="quiz-option"><input type="radio" name="ra01-q5" value="D"> D) 3.0</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

### 💻 Exercici Pràctic RA01 *(1 punt)*

<div class="java-exercise-card" data-ex-id="ex-ra01">
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

## 🟩 RA02 — Escriure i provar programes senzills (Total: 4 punts)

### 📝 Test RA02 *(1 punt — 5 preguntes × 0.2 pts)*

<!-- Q1 -->
<div class="quiz-card" data-ra="ra02" data-qid="ra02-q1">
  <div class="quiz-question-title">
    <span class="quiz-q-num">1</span>
    <span>Quina instrucció mostra text per pantalla amb salt de línia en Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra02-q1" value="A"> A) System.read();</label>
    <label class="quiz-option"><input type="radio" name="ra02-q1" value="B"> B) System.get();</label>
    <label class="quiz-option"><input type="radio" name="ra02-q1" value="C"> C) System.out.println();</label>
    <label class="quiz-option"><input type="radio" name="ra02-q1" value="D"> D) Console.write();</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q2 -->
<div class="quiz-card" data-ra="ra02" data-qid="ra02-q2">
  <div class="quiz-question-title">
    <span class="quiz-q-num">2</span>
    <span>Quina instrucció permet <strong>llegir una línia de text</strong> des del teclat utilitzant Scanner?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra02-q2" value="A"> A) System.out.println()</label>
    <label class="quiz-option"><input type="radio" name="ra02-q2" value="B"> B) keyboard.read()</label>
    <label class="quiz-option"><input type="radio" name="ra02-q2" value="C"> C) scanner.nextLine()</label>
    <label class="quiz-option"><input type="radio" name="ra02-q2" value="D"> D) console.input()</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q3 -->
<div class="quiz-card" data-ra="ra02" data-qid="ra02-q3">
  <div class="quiz-question-title">
    <span class="quiz-q-num">3</span>
    <span>Quin tipus de dada retorna el mètode <code>nextInt()</code> de la classe Scanner?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra02-q3" value="A"> A) boolean</label>
    <label class="quiz-option"><input type="radio" name="ra02-q3" value="B"> B) double</label>
    <label class="quiz-option"><input type="radio" name="ra02-q3" value="C"> C) int</label>
    <label class="quiz-option"><input type="radio" name="ra02-q3" value="D"> D) String</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q4 -->
<div class="quiz-card" data-ra="ra02" data-qid="ra02-q4">
  <div class="quiz-question-title">
    <span class="quiz-q-num">4</span>
    <span>Quin operador o instrucció serveix per guardar/assignar dades en una variable?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra02-q4" value="A"> A) System.out.println</label>
    <label class="quiz-option"><input type="radio" name="ra02-q4" value="B"> B) Scanner</label>
    <label class="quiz-option"><input type="radio" name="ra02-q4" value="C"> C) =</label>
    <label class="quiz-option"><input type="radio" name="ra02-q4" value="D"> D) input()</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q5 -->
<div class="quiz-card" data-ra="ra02" data-qid="ra02-q5">
  <div class="quiz-question-title">
    <span class="quiz-q-num">5</span>
    <span>Quin dels següents programes o sentències <strong>compila correctament</strong> en Java estàndard?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra02-q5" value="A"> A) println("Hola");</label>
    <label class="quiz-option"><input type="radio" name="ra02-q5" value="B"> B) System.out.println("Hola");</label>
    <label class="quiz-option"><input type="radio" name="ra02-q5" value="C"> C) Console.out("Hola");</label>
    <label class="quiz-option"><input type="radio" name="ra02-q5" value="D"> D) Show("Hola");</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

### 💻 Exercici Pràctic Bàsic RA02 *(1 punt)*

<div class="java-exercise-card" data-ex-id="ex-ra02-basic">
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

### 💻 Exercici Avançat RA02 *(2 punts)*

<div class="java-exercise-card" data-ex-id="ex-ra02-adv">
  <div class="java-ex-header">
    <h4 class="java-ex-title">☕ Repte Avançat: Disseny i Implementació de Funcions auxiliars</h4>
    <span class="java-ex-score-tag">Valor: 2.0 punts</span>
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

## 🟨 RA03 — Estructures de control (Total: 2 punts)

### 📝 Test RA03 *(1 punt — 5 preguntes × 0.2 pts)*

<!-- Q1 -->
<div class="quiz-card" data-ra="ra03" data-qid="ra03-q1">
  <div class="quiz-question-title">
    <span class="quiz-q-num">1</span>
    <span>Quina instrucció permet executar un bloc de codi només si una condició es compleix?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra03-q1" value="A"> A) for</label>
    <label class="quiz-option"><input type="radio" name="ra03-q1" value="B"> B) if</label>
    <label class="quiz-option"><input type="radio" name="ra03-q1" value="C"> C) int</label>
    <label class="quiz-option"><input type="radio" name="ra03-q1" value="D"> D) String</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q2 -->
<div class="quiz-card" data-ra="ra03" data-qid="ra03-q2">
  <div class="quiz-question-title">
    <span class="quiz-q-num">2</span>
    <span>Quina és la sintaxi correcta d’una estructura <code>while</code> en Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra03-q2" value="A"> A) while x&lt;5 { }</label>
    <label class="quiz-option"><input type="radio" name="ra03-q2" value="B"> B) while (x&lt;5) { }</label>
    <label class="quiz-option"><input type="radio" name="ra03-q2" value="C"> C) while (x&lt;5); { }</label>
    <label class="quiz-option"><input type="radio" name="ra03-q2" value="D"> D) repeat (x&lt;5) { }</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q3 -->
<div class="quiz-card" data-ra="ra03" data-qid="ra03-q3">
  <div class="quiz-question-title">
    <span class="quiz-q-num">3</span>
    <span>Quin bucle mostra correctament els números de l'1 al 10 en ordre ascendent?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra03-q3" value="A"> A) for (int i = 1; i &lt;= 10; i++)</label>
    <label class="quiz-option"><input type="radio" name="ra03-q3" value="B"> B) for (int i = 0; i &lt; 10; i--)</label>
    <label class="quiz-option"><input type="radio" name="ra03-q3" value="C"> C) if (i &lt; 10)</label>
    <label class="quiz-option"><input type="radio" name="ra03-q3" value="D"> D) while (10)</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q4 -->
<div class="quiz-card" data-ra="ra03" data-qid="ra03-q4">
  <div class="quiz-question-title">
    <span class="quiz-q-num">4</span>
    <span>Quina d’aquestes estructures permet repetir instruccions mentre una condició siga vertadera?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra03-q4" value="A"> A) if</label>
    <label class="quiz-option"><input type="radio" name="ra03-q4" value="B"> B) for</label>
    <label class="quiz-option"><input type="radio" name="ra03-q4" value="C"> C) int</label>
    <label class="quiz-option"><input type="radio" name="ra03-q4" value="D"> D) String</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q5 -->
<div class="quiz-card" data-ra="ra03" data-qid="ra03-q5">
  <div class="quiz-question-title">
    <span class="quiz-q-num">5</span>
    <span>Quina estructura permet triar entre una condició i una alternativa si és falsa?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra03-q5" value="A"> A) if / else</label>
    <label class="quiz-option"><input type="radio" name="ra03-q5" value="B"> B) import</label>
    <label class="quiz-option"><input type="radio" name="ra03-q5" value="C"> C) class</label>
    <label class="quiz-option"><input type="radio" name="ra03-q5" value="D"> D) new</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

### 💻 Exercici Pràctic RA03 *(1 punt)*

<div class="java-exercise-card" data-ex-id="ex-ra03">
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

## 🟦 RA06 — Estructures de dades (Vectors / Arrays) (Total: 2 punts)

### 📝 Test RA06 *(1 punt — 5 preguntes × 0.2 pts)*

<!-- Q1 -->
<div class="quiz-card" data-ra="ra06" data-qid="ra06-q1">
  <div class="quiz-question-title">
    <span class="quiz-q-num">1</span>
    <span>Quin d’aquests declara correctament una variable per a un array o vector d’enters?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra06-q1" value="A"> A) int numeros[];</label>
    <label class="quiz-option"><input type="radio" name="ra06-q1" value="B"> B) vector int numeros;</label>
    <label class="quiz-option"><input type="radio" name="ra06-q1" value="C"> C) int numeros = [];</label>
    <label class="quiz-option"><input type="radio" name="ra06-q1" value="D"> D) int[];</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q2 -->
<div class="quiz-card" data-ra="ra06" data-qid="ra06-q2">
  <div class="quiz-question-title">
    <span class="quiz-q-num">2</span>
    <span>Quin és l’índex del <strong>primer element</strong> de qualsevol vector en Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra06-q2" value="A"> A) 0</label>
    <label class="quiz-option"><input type="radio" name="ra06-q2" value="B"> B) 1</label>
    <label class="quiz-option"><input type="radio" name="ra06-q2" value="C"> C) -1</label>
    <label class="quiz-option"><input type="radio" name="ra06-q2" value="D"> D) Depén de la mida</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q3 -->
<div class="quiz-card" data-ra="ra06" data-qid="ra06-q3">
  <div class="quiz-question-title">
    <span class="quiz-q-num">3</span>
    <span>A quin paquet estàndard de Java pertany la classe de col·leccions dinàmiques <strong>ArrayList</strong>?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra06-q3" value="A"> A) java.random</label>
    <label class="quiz-option"><input type="radio" name="ra06-q3" value="B"> B) java.util</label>
    <label class="quiz-option"><input type="radio" name="ra06-q3" value="C"> C) java.array</label>
    <label class="quiz-option"><input type="radio" name="ra06-q3" value="D"> D) java.collections</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q4 -->
<div class="quiz-card" data-ra="ra06" data-qid="ra06-q4">
  <div class="quiz-question-title">
    <span class="quiz-q-num">4</span>
    <span>Quin mètode <strong>afegeix</strong> un nou element a un objecte ArrayList en Java?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra06-q4" value="A"> A) add()</label>
    <label class="quiz-option"><input type="radio" name="ra06-q4" value="B"> B) insert()</label>
    <label class="quiz-option"><input type="radio" name="ra06-q4" value="C"> C) push()</label>
    <label class="quiz-option"><input type="radio" name="ra06-q4" value="D"> D) put()</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

<!-- Q5 -->
<div class="quiz-card" data-ra="ra06" data-qid="ra06-q5">
  <div class="quiz-question-title">
    <span class="quiz-q-num">5</span>
    <span>Quina instrucció de control permet <strong>recórrer ordenadament</strong> tots els valors d’un vector?</span>
  </div>
  <div class="quiz-options">
    <label class="quiz-option"><input type="radio" name="ra06-q5" value="A"> A) if</label>
    <label class="quiz-option"><input type="radio" name="ra06-q5" value="B"> B) main</label>
    <label class="quiz-option"><input type="radio" name="ra06-q5" value="C"> C) for</label>
    <label class="quiz-option"><input type="radio" name="ra06-q5" value="D"> D) new</label>
  </div>
  <button type="button" class="quiz-btn-check">Comprovar resposta</button>
  <div class="quiz-feedback"></div>
</div>

### 💻 Exercici Pràctic RA06 *(1 punt)*

<div class="java-exercise-card" data-ex-id="ex-ra06">
  <div class="java-ex-header">
    <h4 class="java-ex-title">☕ Repte: Recorregut d'un vector i cerca de Màxim i Mínim</h4>
    <span class="java-ex-score-tag">Valor: 1.0 punt</span>
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
