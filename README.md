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
  - `Examen`: Simulacre d'examen per a format paper (Test RA01, Exercici RA01, Test RA02, Exercici bàsic i avançat RA02, Test RA03, Exercici RA03, Test RA06, Exercici RA06).
  - `Solucions`: Respostes correctes del test i implementació completa de cada exercici en codi Java.
  - `Rúbrica correcció`: Criteris detallats de qualificació i percentatge mínim del 50% per superar cada RA.
- **2a Avaluació**: Secció preparada per a futurs continguts.

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
