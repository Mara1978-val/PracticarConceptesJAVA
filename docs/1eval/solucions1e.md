# Solucions Oficials i Guia Pedagògica

<div class="author-badge">
  <span>✍️ Autora: Mara Vañó</span>
</div>

Solucions dels 4 resultats d'aprenentatge avaluats (RA1, RA3, RA5 i RA6) i dels exercicis integrats per nivells.

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

### 🟢 Bàsic — Fitxa d'alumne

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

### 🟡 Mitjà — Tiquet de compra amb descompte

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

### 🔴 Avançat — Informe de qualitat de sensors

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
