# Solucions Oficials i Guia Pedagògica

<div class="author-badge">
  <span>✍️ Autora: Mara Vañó</span>
</div>

Solucions dels 4 resultats d'aprenentatge del mòdul de Programació que s'avaluen en aquest simulacre:
**RA1** (estructura), **RA3** (control), **RA5** (entrada/sortida) i **RA6** (tipus avançats).

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

## 🧩 Exercicis integrats (pràctica addicional)

### 1. Anàlisi de temperatures

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

### 2. Notes i mitjana

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
