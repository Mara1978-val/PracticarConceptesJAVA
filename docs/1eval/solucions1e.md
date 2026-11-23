# Solucions Oficials i Guia Pedagògica

<div class="author-badge">
  <span>✍️ Autora: Mara Vañó</span>
</div>

A continuació es detallen les respostes correctes de cada pregunta tipus test i el codi Java complet i comentat per a cadascun dels exercicis pràctics del simulacre.

---

## 🟦 RA01 — Estructura d’un programa

### Respostes del Test RA01
1. **C** — `literal` no és un tipus primitiu (els bàsics són `int`, `double`, `char`, `boolean`, etc.).
2. **B** — `//` és el símbol per a comentaris d'una sola línia.
3. **D** — `equals()` és el mètode adequat per comparar contingut de cadenes de text `String`.
4. **C** — `valorInicial` compleix la nomenclatura i convenció camelCase (sense començar per números ni espais).
5. **C** — `3` és el literal enter (`int`). `'3'` és caràcter i `"3"` és String.

### Codi Solució Exercici RA01
```java
public class Main {
    public static void main(String[] args) {
        // Comentari: Declaració de dues variables enteres i la seua suma
        int a = 5;
        int b = 7;
        int suma = a + b;
        System.out.println("La suma és " + suma);
    }
}
```

---

## 🟩 RA02 — Escriure i provar programes senzills

### Respostes del Test RA02
1. **C** — `System.out.println()` imprimeix text seguit d'un salt de línia.
2. **C** — `scanner.nextLine()` llegeix una línia sencera des del teclat.
3. **C** — `nextInt()` retorna un valor de tipus enter (`int`).
4. **C** — `=` és l'operador d'assignació en Java.
5. **B** — `System.out.println("Hola");` és la sentència vàlida que compila sense errors.

### Codi Solució Exercici Bàsic RA02
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

### Codi Solució Exercici Avançat RA02 (Funcions)
```java
import java.util.Scanner;

public class Main {

    // Funció que calcula la longitud d'un String
    public static int getLongitud(String text) {
        return text.length();
    }

    // Funció que retorna el major de dos enters
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

## 🟨 RA03 — Estructures de control

### Respostes del Test RA03
1. **B** — `if` executa el bloc només si la condició és certa.
2. **B** — `while (x<5) { }` és la sintaxi correcta amb parèntesis i sense punt i coma final.
3. **A** — `for (int i = 1; i <= 10; i++)` recorre de l'1 al 10 en ordre creixent.
4. **B** — `for` i `while` són estructures de repetició o bucles.
5. **A** — `if / else` permet l'execució condicional alternativa.

### Codi Solució Exercici RA03
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

## 🟦 RA06 — Estructures de dades (Vectors / Arrays)

### Respostes del Test RA06
1. **A** — `int numeros[];` (o `int[] numeros;`) és la declaració estàndard de vectors en Java.
2. **A** — `0` és sempre l'índex del primer element d'un vector.
3. **B** — `ArrayList` es troba al paquet `java.util`.
4. **A** — `add()` afegeix elements al final de la llista.
5. **C** — `for` permet recórrer ordenadament tots els valors d'un vector.

### Codi Solució Exercici RA06
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
