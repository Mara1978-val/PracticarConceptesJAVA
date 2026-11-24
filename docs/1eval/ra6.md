## 🟦 RA6 — Escribe programas que manipulen información seleccionando y utilizando tipos avanzados de datos. (Total: 2.5 punts)

### 📝 Test RA6 *(0.5 punts — 5 preguntes × 0.1 pts)*

<div class="quiz-card" data-ra="ra6" data-qid="ra6-q1">
  <div class="quiz-question-title">
    <span class="quiz-q-num">1</span>
    <span>Quin d'eixos declara correctament una variable per a un array o vector d’enters?</span>
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
      <label for="in-ra6">⌨️ Dades d'entrada (5 números, un per línia)</label>
      <textarea id="in-ra6" class="java-input-data" rows="3" spellcheck="false">12
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
