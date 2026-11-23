# 📚 Simulador d'Exàmens PRG 25/26 (DAM / DAW)

Lloc web públic publicat a **GitHub Pages**:  
👉 **[https://Mara1978-val.github.io/SimuladorExamenJava/](https://Mara1978-val.github.io/SimuladorExamenJava/)**

Subpàgina de l'examen:  
👉 **[https://Mara1978-val.github.io/SimuladorExamenJava/1eval/examen1e/](https://Mara1978-val.github.io/SimuladorExamenJava/1eval/examen1e/)**

Repositori a GitHub:  
👉 **[https://github.com/Mara1978-val/SimuladorExamenJava](https://github.com/Mara1978-val/SimuladorExamenJava)**

---

## 📂 Continguts del lloc

- **Home**: Informació del curs (CEEDCV, autors, llicència CC BY-NC-ND, síntesi i RAs avaluats).
- **1a Avaluació**:
  - `Examen`: Simulacre amb els **6 resultats d'aprenentatge** del mòdul de Programació (RA1 a RA6), cadascun amb test de 5 preguntes i exercici pràctic d'execució real de Java. Total: 10 punts.
  - `Solucions`: Respostes correctes del test i implementació completa de cada exercici en codi Java.
  - `Rúbrica correcció`: Criteris detallats de qualificació i percentatge mínim del 50% per superar cada RA.
- **2a Avaluació**: Secció preparada per a futurs continguts.

---

## ⚙️ Execució de codi Java

El botó **«Executar i Corregir codi»** fa servir un **intèrpret del subconjunt Java**
integrat a la pròpia web (`docs/javascripts/java-interpreter.js`): **executa de veritat**
el codi escrit per l'alumne amb les dades d'entrada indicades a cada exercici i mostra
la sortida real a la consola. No hi ha sortides inventades ni cal connexió a internet.

- Els exercicis amb `Scanner` tenen un camp **«Dades d'entrada»** editable.
- RA03 es prova automàticament amb `15`, `-4` i `0`.
- La qualificació combina el resultat real de l'execució amb els criteris de la rúbrica.
- Si el codi té errors, la consola mostra el número de línia i el missatge.
- En modificar el codi després d'executar-lo, la puntuació anterior es posa a zero.

---

## 💻 Com actualitzar el lloc web

Quan vulguis fer canvis als enunciats, solucions o afegir nous exàmens:

1. Modifica els fitxers Markdown dins de la carpeta `docs/`.
2. Publica els canvis actualitzats directament a GitHub Pages executant:
   ```bash
   python -m mkdocs gh-deploy --force
   ```
3. Guarda el codi font a la branca `main`:
   ```bash
   git add docs/
   git commit -m "Actualització de continguts"
   git push
   ```

---

## 🔍 Prova en local

Per a visualitzar la web al teu navegador abans de publicar-la:
```bash
python -m mkdocs serve
```
Accedeix a: `http://127.0.0.1:8000`
