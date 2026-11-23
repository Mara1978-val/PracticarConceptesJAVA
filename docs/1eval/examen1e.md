# Examen

!!! abstract "Simulacre d'examen"
    Aquest document presenta un possible examen corresponent a la primera avaluació. 
    Els exercicis s'han de realitzar en format paper amb l'objectiu de reproduir, de la manera més fidel possible, les condicions reals de l'examen.

---

## 🟦 Estructura d’un programa

### Test RA01
*(1punt)*   

1. Quina d’aquestes opcions **NO** és un tipus de dada bàsic?  
   A) int  
   B) double  
   C) literal  
   D) char  

2. Un **comentari** en Java que ocupa només una línia es fa amb:  
   A) #  
   B) //  
   C) /**/  
   D) --  

3. Quin operador s’utilitza per comparar si dues **variables String** tenen el mateix valor?  

   A) =  
   B) ==  
   C) !=  
   D) equals  

4. Quin és el nom correcte per a una **variable**?  
   A) 3valor  
   B) 1valor-inici  
   C) valorInicial  
   D) valor inicial  

5. Quin d’aquests és un **numèric enter**?  
   A) '3'  
   B) "3"  
   C) 3  
   D) 3.0  

### Exercici RA01
*(1punt)*  
**Enunciat:**  
Escriu un programa Java que declare dues variables enteres, les some i mostre el resultat en pantalla amb un comentari explicant què fa el programa.

---

## 🟩 Escriure i provar programes senzills

### Test RA02
*(1punt)*   

1. Quina instrucció mostra text per pantalla?  
   A) System.read();  
   B) System.get();  
   C) System.out.println();  
   D) Console.write();  

2. Quina instrucció permet **llegir dades** des del teclat?  
   A) System.out.println()  
   B) keyboard.read()  
   C) scanner.nextLine()  
   D) console.input()  

3. Quin tipus de dada rep el mètode `nextInt()`?  
   A) boolean  
   B) double  
   C) int  
   D) String  

4. Quina instrucció serveix per guardar dades en una variable?  
   A) System.out.println  
   B) Scanner  
   C) =  
   D) input()  

5. Quin dels següents programes **compila correctament**?  
   A) `println("Hola");`  
   B) `System.out.println("Hola");`  
   C) `Console.out("Hola");`  
   D) `Show("Hola");`  

### Exercici RA02
*(1punt)*  
**Enunciat:**  
Fes un programa que demane per teclat el **nom** de l’usuari i la **seua edat**.  
Després, el programa ha de mostrar el missatge:

**"Hola \<nom>, vas nàixer l’any \<any>."**

Suposant que **estem en 2026**

### Exercici avançat RA02
*(2punts)*  
**Enunciat:**  

Volem comprovar si els noms d’usuari que introdueixen els clients són massa llargs.

Fes un programa que tinga **dues funcions**:

- `getLongitud(String text)` → retorne el número de caràcters d’un text  
- `compararLongitud(int l1, int l2)` → retorne el major dels dos valors  

El `main()` ha de:

1. Demanar per teclat **dos noms** (dos Strings).  
2. Utilitzar `getLongitud()` per obtindre la longitud de cadascun.  
3. Mostrar quants caràcters té cada nom.  
4. Utilitzar `compararLongitud()` per saber **quin dels dos noms és més llarg** i mostrar-lo per pantalla.

**Exemple d’eixida esperada:**

```
Introdueix primer nom: Marta
Introdueix segon nom: Alejandro

"Marta" té 5 lletres.
"Alejandro" té 9 lletres.
El nom més llarg és: Alejandro
```

**Pista:**  
- Pots obtindre la longitud d’un String amb: `nom.length();`  
- Les funcions han de retornar valors (no imprimir directament).

---

## 🟨 Estructures de control

### Test RA03
*(1punt)*   

1. Quina instrucció permet executar un bloc de codi només si una condició es compleix?  
   A) for  
   B) if  
   C) int  
   D) String  

2. Quina és la forma correcta d’una estructura `while`?  
   A) `while x<5 { }`  
   B) `while (x<5) { }`  
   C) `while (x<5); { }`  
   D) `repeat (x<5) { }`  

3. Quin codi mostra els números del 1 al 10?  
   A) `for (int i = 1; i <= 10; i++)`  
   B) `for (int i = 0; i < 10; i--)`  
   C) `if (i < 10)`  
   D) `while (10)`

4. Quina d’aquestes estructures permet repetir instruccions mentre una condició siga certa?  
   A) if  
   B) for  
   C) int  
   D) String  

5. Quina estructura permet triar entre una condició i una alternativa?  
   A) if / else  
   B) import  
   C) class  
   D) new

### Exercici RA03
*(1punt)*  
**Enunciat:**  
Fes un programa que demane per teclat un número i mostre si és **positiu, negatiu o zero**

---

## 🟦 Estructures de dades

### Test RA06
*(1punt)*   

1. Quin d’aquests declara correctament un vector d’enters?  
   A) `int numeros[];`  
   B) `vector int numeros;`  
   C) `int numeros = [];`  
   D) `int[];`  

2. Quin és l’índex del **primer element** d’un vector?  
   A) 0  
   B) 1  
   C) -1  
   D) Depén  

3. Un **ArrayList** pertany a:  
   A) `java.random`  
   B) `java.util`  
   C) `java.array`  
   D) `java.collections`  

4. Quin mètode **afegeix** un element a un ArrayList?  
   A) add()  
   B) insert()  
   C) push()  
   D) put()  

5. Quin element permet **recórrer** tots els valors d’un vector?  
   A) if  
   B) main  
   C) for  
   D) new  

### Exercici RA06
*(1punt)*  
**Enunciat:**  
Fes un programa que cree un vector de 5 números enters, demane cada número per teclat i després mostre el **valor màxim i el mínim**.
