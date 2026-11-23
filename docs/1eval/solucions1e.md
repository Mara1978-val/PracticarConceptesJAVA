# Solucions Oficials i Guia Pedagògica

<div class="author-badge">
  <span>✍️ Autora: Mara Vañó</span>
</div>

Resultats d'aprenentatge del mòdul de **Programació (DAM)** i solucions de cada exercici del simulacre.

---

## 🟦 RA1 — Estructura d'un programa

**Test:** 1-C, 2-B, 3-D, 4-C, 5-C

### Solució de l'exercici

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

## 🟩 RA2 — Escriure i provar programes senzills

**Test:** 1-C, 2-C, 3-C, 4-C, 5-B

### Solució de l'exercici (funcions auxiliars)

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

---

## 🟨 RA3 — Estructures de control

**Test:** 1-B, 2-B, 3-A, 4-B, 5-A

### Solució de l'exercici

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

## 🟪 RA4 — Classes i programació orientada a objectes

**Test:** 1-A, 2-A, 3-A, 4-A, 5-A

### Solució de l'exercici

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

---

## 🟧 RA5 — Entrada i sortida d'informació

**Test:** 1-A, 2-A, 3-A, 4-A, 5-A

### Solució de l'exercici

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

### Solució de l'exercici

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
