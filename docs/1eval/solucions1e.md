# Solucions Oficials i Guia Pedagògica

<div class="author-badge">
  <span>✍️ Autora: Mara Vañó</span>
</div>

Solucions dels 4 resultats d'aprenentatge treballats (RA1, RA3, RA5 i RA6) i dels exercicis integrats per nivells.

---

## 🟦 RA1 — Estructura d'un programa

**Test:** 1-C, 2-B, 3-D, 4-C, 5-C

```java
public class Main {
    public static void main(String[] args) {
        // Comentari: suma de dues variables enteres
        int a = 5;
        int b = 7;
        int suma = a + b;
        System.out.println("La suma és " + suma);
    }
}
```

---

## 🟨 RA3 — Estructures de control

**Test:** 1-B, 2-B, 3-A, 4-B, 5-A

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

---

## 🟧 RA5 — Entrada i sortida d'informació

**Test:** 1-A, 2-A, 3-A, 4-A, 5-A

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

---

## 🟦 RA6 — Tipus avançats de dades

**Test:** 1-A, 2-A, 3-B, 4-A, 5-C

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
            if (numeros[i] > max) { max = numeros[i]; }
            if (numeros[i] < min) { min = numeros[i]; }
        }

        System.out.println("Màxim: " + max);
        System.out.println("Mínim: " + min);
    }
}
```

---

## 🧩 Exercicis integrats per nivells

Les solucions guiades completes dels 30 exercicis (10 bàsics, 10 mitjans i 10 avançats) es mostren dins de cada exercici amb el botó «Veure solució guiada». Cada solució s'executa amb dades reals i l'intèrpret explica qualsevol error línia a línia.
