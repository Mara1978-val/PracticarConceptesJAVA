# 📚 Simulador d'Exàmens PRG 25/26 (DAM / DAW)

Projecte complet preparat per a publicar a **GitHub Pages** utilitzant **MkDocs** i el tema **Material for MkDocs**, idèntic al lloc web de referència: `https://mbanulsribes.github.io/SimulacresPRG2526/`.

---

## 🚀 Com pujar aquest projecte al teu repositori de GitHub

### Pas 1: Inicialitzar Git i vincular al teu repositori
Obre una terminal (PowerShell o Git Bash) en aquesta carpeta (`SimuladorJAVA`) i executa:

```bash
git init
git add .
git commit -m "Inicialització de la web de simulacres PRG amb MkDocs Material"
git branch -M main
git remote add origin https://github.com/EL_TEU_USUARI/EL_TEU_REPOSITORI.git
git push -u origin main
```
*(Substitueix `EL_TEU_USUARI` i `EL_TEU_REPOSITORI` pel teu nom d'usuari i nom de repositori de GitHub).*

---

### Pas 2: Activar GitHub Pages al teu repositori
Un cop hagis fet el `push`, tens **dues formes** de publicar la pàgina a GitHub Pages:

#### Opció A (Recomanada - Automàtica amb GitHub Actions):
Aquest projecte ja inclou el flux de treball automatitzat `.github/workflows/deploy.yml`.
1. Ves al teu repositori a GitHub.
2. Fes clic a **Settings** (Configuració) -> **Pages** (al menú lateral esquerre).
3. A la secció **Build and deployment** -> **Source**, selecciona:
   👉 **GitHub Actions**
4. Cada vegada que facis un canvi i facis `git push`, GitHub compilarà i actualitzarà la teva web automàticament!

#### Opció B (Des de la branca `gh-pages`):
Si prefereixes publicar directament la branca compilada des de la teva màquina:
```bash
python -m mkdocs gh-deploy --force
```
I després a GitHub: **Settings** -> **Pages** -> Source: **Deploy from a branch** -> Selecciona la branca `gh-pages` i carpeta `/ (root)`.

---

## 📂 Estructura de fitxers

```text
SimuladorJAVA/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Flux de GitHub Actions per desplegar automàticament
├── docs/
│   ├── index.md                # Pàgina d'inici (Home / Informació del curs)
│   ├── 1eval/
│   │   ├── examen1e.md         # Enunciats del simulacre (RA01, RA02, RA03, RA06)
│   │   ├── solucions1e.md      # Respostes del test i codi de les solucions en Java
│   │   └── rubrica1e.md        # Rúbrica de correcció i taules de puntuació
│   └── 2eval/
│       └── index.md            # Pàgina de la 2a avaluació (per a futures ampliacions)
├── site/                       # Fitxers HTML estàtics ja compilats
├── mkdocs.yml                  # Fitxer de configuració del lloc, tema, colors i navegació
├── requirements.txt            # Dependències de Python (mkdocs-material, etc.)
├── .gitignore                  # Ignora fitxers temporals
└── README.md                   # Guia d'ús i desplegament
```

---

## 💻 Com provar la web en local

Per a visualitzar la web en temps real al teu ordinador mentre fas canvis:

1. Assegura't de tenir instal·lades les dependències:
   ```bash
   pip install -r requirements.txt
   ```

2. Arranca el servidor local:
   ```bash
   python -m mkdocs serve
   ```

3. Obre el teu navegador a [http://127.0.0.1:8000](http://127.0.0.1:8000). Els canvis que facis als fitxers de `docs/` s'actualitzaran automàticament a la pantalla!

---

## ✏️ Com afegir nous exàmens o preguntes

Per a afegir un nou examen (per exemple, de la 2a avaluació o un nou tema):
1. Crea o edita els fitxers Markdown dins de la carpeta `docs/`.
2. Actualitza l'apartat `nav:` dins de `mkdocs.yml` per a enllaçar les teves noves pàgines.
3. Fes `git add .`, `git commit -m "Nous continguts"` i `git push`. La web s'actualitzarà sola!
