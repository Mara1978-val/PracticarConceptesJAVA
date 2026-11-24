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
