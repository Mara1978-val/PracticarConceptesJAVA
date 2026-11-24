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
      <label for="in-ra5">⌨️ Dades d'entrada (una dada per línia: nom i edat)</label>
      <textarea id="in-ra5" class="java-input-data" rows="2" spellcheck="false">Laura
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
