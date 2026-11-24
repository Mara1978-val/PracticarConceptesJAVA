/* =========================================================
   java-interpreter.js · Intèrpret del subconjunt Java emprat
   als exercicis del simulador (PRG · 1r DAM).
   Autora: Mara Vañó

   Executa de veritat el codi de l'alumne: variables, int/String/
   double/boolean, arrays, Scanner, if/else, for, while, funcions
   static i System.out.print/println. No necessita internet.
   ========================================================= */

(function (global) {
  "use strict";

  const TIPUS = new Set([
    "int", "String", "double", "boolean", "char", "void", "Scanner",
    "int[]", "String[]", "double[]", "boolean[]"
  ]);
  const MODIFICADORS = new Set(["public", "private", "protected", "static", "final"]);
  const SISTEMA = { __sistema: true };
  const SORTIDA = { __sortida: true };
  const MATHS = { __maths: true };
  const LIMITE_PASOS = 30000;

  function error(linia, missatge) {
    const e = new Error(missatge);
    e.linia = linia;
    return e;
  }

  /* ------------------------- Lexer ------------------------- */
  function tokenitzar(codi) {
    const tokens = [];
    let i = 0, linia = 1;
    const operadors = [
      ">>>", "<<", ">>", "++", "--", "+=", "-=", "*=", "/=", "%=",
      "==", "!=", "<=", ">=", "&&", "||",
      "+", "-", "*", "/", "%", "<", ">", "=", "!", "(", ")",
      "{", "}", "[", "]", ";", ",", "."
    ];

    while (i < codi.length) {
      const c = codi[i];
      if (c === "\n") { linia++; i++; continue; }
      if (/\s/.test(c)) { i++; continue; }

      if (c === "/" && codi[i + 1] === "/") {
        while (i < codi.length && codi[i] !== "\n") i++;
        continue;
      }
      if (c === "/" && codi[i + 1] === "*") {
        i += 2;
        while (i < codi.length && !(codi[i] === "*" && codi[i + 1] === "/")) {
          if (codi[i] === "\n") linia++;
          i++;
        }
        if (i >= codi.length) throw error(linia, "Comentari de bloc sense tancar");
        i += 2;
        continue;
      }

      if (c === '"' || c === "'") {
        const quote = c;
        let j = i + 1, valor = "";
        while (j < codi.length && codi[j] !== quote) {
          if (codi[j] === "\n") linia++;
          if (codi[j] === "\\") {
            const n = codi[j + 1];
            valor += n === "n" ? "\n" : n === "t" ? "\t" : n === "r" ? "\r" : n;
            j += 2;
          } else {
            valor += codi[j];
            j++;
          }
        }
        if (j >= codi.length) throw error(linia, "Literal de text sense tancar");
        tokens.push({ t: "literal", v: valor, l: linia });
        i = j + 1;
        continue;
      }

      if (/[0-9]/.test(c)) {
        let j = i;
        while (j < codi.length && /[0-9]/.test(codi[j])) j++;
        if (codi[j] === "." && /[0-9]/.test(codi[j + 1] || "")) {
          j++;
          while (j < codi.length && /[0-9]/.test(codi[j])) j++;
        }
        tokens.push({ t: "literal", v: Number(codi.slice(i, j)), l: linia });
        i = j;
        continue;
      }

      if (/[A-Za-z_$À-ÿ]/.test(c)) {
        let j = i;
        while (j < codi.length && /[A-Za-z0-9_$À-ÿ]/.test(codi[j])) j++;
        tokens.push({ t: "id", v: codi.slice(i, j), l: linia });
        i = j;
        continue;
      }

      let trobat = false;
      for (const op of operadors) {
        if (codi.startsWith(op, i)) {
          tokens.push({ t: "op", v: op, l: linia });
          i += op.length;
          trobat = true;
          break;
        }
      }
      if (!trobat) throw error(linia, "Caràcter no reconegut: " + c);
    }

    tokens.push({ t: "eof", v: "", l: linia });
    return tokens;
  }

  /* ------------------------- Parser ------------------------ */
  class Parser {
    constructor(tokens) { this.ts = tokens; this.i = 0; }
    peek(k) { return this.ts[Math.min(this.i + (k || 0), this.ts.length - 1)]; }
    next() { return this.ts[this.i++]; }
    match(t, v) {
      const x = this.peek();
      if (x.t === t && (v === undefined || x.v === v)) { this.i++; return x; }
      return null;
    }
    expect(t, v) {
      const x = this.match(t, v);
      if (!x) throw error(this.peek().l, "S'esperava '" + (v || t) + "' però troba '" + this.peek().v + "'");
      return x;
    }

    parsePrograma() {
      const metodes = {};
      const classes = {};
      // Ignorem les sentències import / package
      while (this.peek().t === "id" && ["import", "package"].includes(this.peek().v)) {
        while (this.peek().v !== ";" && this.peek().t !== "eof") this.next();
        this.match("op", ";");
      }
      while (this.peek().t !== "eof") {
        while (this.peek().t === "id" && MODIFICADORS.has(this.peek().v)) this.next();
        this.expect("id", "class");
        const nomClasse = this.expect("id").v;
        this.expect("op", "{");
        const classe = { camps: {}, metodes: {}, constructor: null };
        while (!this.match("op", "}")) {
          if (this.peek().t === "eof") throw error(this.peek().l, "Classe " + nomClasse + " sense tancar");
          while (this.peek().t === "id" && MODIFICADORS.has(this.peek().v)) this.next();
          let tipus, nomMembre;
          if (this.peek().t === "id" && this.peek().v === nomClasse && this.peek(1).v === "(") {
            nomMembre = this.next().v; // constructor: no té tipus de retorn
            tipus = "void";
          } else {
            tipus = this.parseTipus();
            nomMembre = this.expect("id").v;
          }
          if (this.match("op", "(")) {
            const params = [];
            if (!this.match("op", ")")) {
              do {
                const pt = this.parseTipus();
                const pn = this.expect("id").v;
                params.push({ tipus: pt, nom: pn });
              } while (this.match("op", ","));
              this.expect("op", ")");
            }
            const cos = this.parseBloc();
            const metode = { nom: nomMembre, tipus, params, cos };
            if (nomMembre === nomClasse) classe.constructor = metode;
            else classe.metodes[nomMembre] = metode;
          } else {
            let init = null;
            if (this.match("op", "=")) init = this.parseExpressio();
            this.expect("op", ";");
            classe.camps[nomMembre] = { tipus, init };
          }
        }
        classes[nomClasse] = classe;
        TIPUS.add(nomClasse);
        Object.assign(metodes, classe.metodes);
      }
      if (!metodes.main) throw error(1, "No s'ha trobat el mètode main(String[] args)");
      return { metodes, classes };
    }

    parseTipus() {
      const t = this.next();
      if (t.t !== "id") throw error(t.l, "S'esperava un tipus de dada");
      let nom = t.v;
      if (this.match("op", "[")) { this.expect("op", "]"); nom += "[]"; }
      return nom;
    }

    parseBloc() {
      this.expect("op", "{");
      const cos = [];
      while (!this.match("op", "}")) {
        if (this.peek().t === "eof") throw error(this.peek().l, "Bloc de codi sense tancar");
        cos.push(this.parseSentencia());
      }
      return { k: "bloc", cos };
    }

    esDeclaracio() {
      return this.peek().t === "id" && TIPUS.has(this.peek().v) &&
        (this.peek(1).t === "id" || (this.peek(1).t === "op" && this.peek(1).v === "["));
    }

    parseSentencia() {
      const t = this.peek();
      if (t.t === "op" && t.v === "{") return this.parseBloc();
      if (t.t === "id" && t.v === "return") {
        this.next();
        const e = this.parseExpressio();
        this.expect("op", ";");
        return { k: "return", e };
      }
      if (t.t === "id" && t.v === "if") {
        this.next();
        this.expect("op", "(");
        const cond = this.parseExpressio();
        this.expect("op", ")");
        const llavors = this.parseSentencia();
        let sinon = null;
        if (this.match("id", "else")) sinon = this.parseSentencia();
        return { k: "si", cond, llavors, sinon };
      }
      if (t.t === "id" && t.v === "for") {
        this.next();
        this.expect("op", "(");
        let init = null;
        if (this.esDeclaracio()) { init = this.parseDeclaracio(true); this.expect("op", ";"); }
        else if (!this.match("op", ";")) { init = { k: "expr", e: this.parseExpressio() }; this.expect("op", ";"); }
        let cond = null;
        if (!this.match("op", ";")) { cond = this.parseExpressio(); this.expect("op", ";"); }
        let actual = null;
        if (!this.match("op", ")")) { actual = this.parseExpressio(); this.expect("op", ")"); }
        const cos = this.parseSentencia();
        return { k: "per", init, cond, actual, cos };
      }
      if (t.t === "id" && t.v === "while") {
        this.next();
        this.expect("op", "(");
        const cond = this.parseExpressio();
        this.expect("op", ")");
        return { k: "mentre", cond, cos: this.parseSentencia() };
      }
      if (this.esDeclaracio()) return this.parseDeclaracio(false);

      const e = this.parseExpressio();
      this.expect("op", ";");
      return { k: "expr", e };
    }

    parseDeclaracio(forInit) {
      const tipus = this.parseTipus();
      const nom = this.expect("id").v;
      let init = null;
      if (this.match("op", "=")) init = this.parseExpressio();
      if (!forInit) this.expect("op", ";");
      return { k: "var", tipus, nom, init };
    }

    parseExpressio() { return this.parseAssignacio(); }

    parseAssignacio() {
      const esquerra = this.parseOr();
      const op = this.peek().v;
      if (this.peek().t === "op" && ["=", "+=", "-=", "*=", "/=", "%="].includes(op)) {
        this.next();
        return { k: "assigna", objectiu: esquerra, op, valor: this.parseAssignacio() };
      }
      return esquerra;
    }
    parseOr() { return this.parseCadena("||", () => this.parseAnd()); }
    parseAnd() { return this.parseCadena("&&", () => this.parseIgualtat()); }
    parseIgualtat() { return this.parseCadena(["==", "!="], () => this.parseRelacio()); }
    parseRelacio() { return this.parseCadena(["<", ">", "<=", ">="], () => this.parseSuma()); }
    parseSuma() { return this.parseCadena(["+", "-"], () => this.parseProducte()); }
    parseProducte() { return this.parseCadena(["*", "/", "%"], () => this.parseUnari()); }

    parseCadena(ops, seguent) {
      let node = seguent();
      const llista = Array.isArray(ops) ? ops : [ops];
      while (this.peek().t === "op" && llista.includes(this.peek().v)) {
        const op = this.next().v;
        node = { k: "bin", op, a: node, b: seguent() };
      }
      return node;
    }

    parseUnari() {
      const op = this.peek().v;
      if (this.peek().t === "op" && ["!", "-", "+", "++", "--"].includes(op)) {
        this.next();
        return { k: "unari", op, a: this.parseUnari() };
      }
      return this.parsePostfix();
    }

    parsePostfix() {
      let node = this.parsePrimari();
      while (true) {
        if (this.match("op", "(")) {
          const args = [];
          if (!this.match("op", ")")) {
            do { args.push(this.parseExpressio()); } while (this.match("op", ","));
            this.expect("op", ")");
          }
          node = { k: "crida", funcio: node, args };
        } else if (this.match("op", "[")) {
          const idx = this.parseExpressio();
          this.expect("op", "]");
          node = { k: "index", arr: node, idx };
        } else if (this.match("op", ".")) {
          node = { k: "membre", obj: node, nom: this.expect("id").v };
        } else if (this.peek().t === "op" && ["++", "--"].includes(this.peek().v)) {
          const op = this.next().v;
          node = { k: "post", op, a: node };
        } else break;
      }
      return node;
    }

    parsePrimari() {
      const t = this.next();
      if (t.t === "literal") return { k: "literal", v: t.v };
      if (t.t === "id") {
        if (t.v === "true") return { k: "literal", v: true };
        if (t.v === "false") return { k: "literal", v: false };
        if (t.v === "null") return { k: "literal", v: null };
        if (t.v === "new") {
          if (this.peek().v === "Scanner") {
            this.next();
            this.expect("op", "(");
            this.expect("id", "System");
            this.expect("op", ".");
            this.expect("id", "in");
            this.expect("op", ")");
            return { k: "scanner" };
          }
          const tipus = this.expect("id").v;
          if (this.match("op", "[")) {
            const mida = this.parseExpressio();
            this.expect("op", "]");
            return { k: "arraynou", tipus, mida };
          }
          this.expect("op", "(");
          const args = [];
          if (!this.match("op", ")")) {
            do { args.push(this.parseExpressio()); } while (this.match("op", ","));
            this.expect("op", ")");
          }
          return { k: "newobj", tipus, args };
        }
        return { k: "var", nom: t.v };
      }
      if (t.t === "op" && t.v === "(") {
        const e = this.parseExpressio();
        this.expect("op", ")");
        return e;
      }
      throw error(t.l, "Expressió no vàlida: '" + t.v + "'");
    }
  }

  /* ----------------------- Avaluador ----------------------- */
  function aText(v) {
    if (v === null || v === undefined) return "null";
    if (typeof v === "boolean") return v ? "true" : "false";
    if (typeof v === "number") return String(v);
    if (typeof v === "string") return v;
    if (Array.isArray(v)) return "[" + v.map(aText).join(", ") + "]";
    if (v.__scanner) return "java.util.Scanner";
    return String(v);
  }

  function esCert(v) {
    if (typeof v === "boolean") return v;
    if (typeof v === "number") return v !== 0;
    if (typeof v === "string") return v.length > 0;
    return Boolean(v);
  }

  function suma(a, b) {
    if (typeof a === "string" || typeof b === "string") return aText(a) + aText(b);
    return Number(a) + Number(b);
  }

  function buscar(scope, nom) {
    let s = scope;
    while (s) { if (Object.prototype.hasOwnProperty.call(s.vars, nom)) return s; s = s.pare; }
    return null;
  }

  function llegirVar(node, scope, env) {
    if (node.k === "var") {
      if (node.nom === "System") return SISTEMA;
      if (node.nom === "Math") return MATHS;
      const s = buscar(scope, node.nom);
      if (s) return s.vars[node.nom];
      // Accés implícit a un camp de l'objecte dins d'un mètode
      let sc = scope;
      while (sc) {
        const obj = sc.vars.this;
        if (obj && obj.__obj && Object.prototype.hasOwnProperty.call(obj.camps, node.nom)) return obj.camps[node.nom];
        sc = sc.pare;
      }
      throw error(env.linia, "La variable '" + node.nom + "' no està declarada");
    }
    if (node.k === "index") {
      const arr = avaluar(node.arr, scope, env);
      const idx = avaluar(node.idx, scope, env);
      if (!Array.isArray(arr)) throw error(env.linia, "No es pot indexar un valor que no és un vector");
      if (idx < 0 || idx >= arr.length) throw error(env.linia, "Índex fora del vector: " + idx);
      return arr[idx];
    }
    if (node.k === "membre") {
      const obj = avaluar(node.obj, scope, env);
      if (obj === SISTEMA && node.nom === "out") return SORTIDA;
      if (obj && obj.__obj && Object.prototype.hasOwnProperty.call(obj.camps, node.nom)) return obj.camps[node.nom];
      if (typeof obj === "string" && node.nom === "length") return obj.length;
      if (Array.isArray(obj) && node.nom === "length") return obj.length;
      if (obj && obj.__scanner && node.nom === "in") return obj;
      return undefined;
    }
    throw error(env.linia, "No es pot llegir eixe valor");
  }

  function escriureVar(objectiu, valor, scope, env) {
    if (objectiu.k === "var") {
      const s = buscar(scope, objectiu.nom);
      if (!s) throw error(env.linia, "La variable '" + objectiu.nom + "' no està declarada");
      s.vars[objectiu.nom] = valor;
    } else if (objectiu.k === "index") {
      const arr = avaluar(objectiu.arr, scope, env);
      const idx = avaluar(objectiu.idx, scope, env);
      if (!Array.isArray(arr) || idx < 0 || idx >= arr.length)
        throw error(env.linia, "Índex fora del vector: " + idx);
      arr[idx] = valor;
    } else if (objectiu.k === "membre") {
      const obj = avaluar(objectiu.obj, scope, env);
      if (!obj || !obj.__obj) throw error(env.linia, "No es pot assignar a eixe membre");
      obj.camps[objectiu.nom] = valor;
    } else throw error(env.linia, "Assignació no vàlida");
  }

  function cridaFuncio(node, scope, env) {
    const f = node.funcio;
    const args = node.args.map((a) => avaluar(a, scope, env));

    if (f.k === "membre") {
      const obj = avaluar(f.obj, scope, env);
      if (obj === SORTIDA) {
        const valor = args.length ? aText(args[0]) : "";
        if (f.nom === "println") { env.sortida.push(valor + "\n"); env.stats.printlns++; }
        else if (f.nom === "print") { env.sortida.push(valor); env.stats.prints++; }
        else throw error(env.linia, "System.out." + f.nom + " no està implementat");
        return undefined;
      }
      if (obj && obj.__obj) {
        const classe = env.classes[obj.classe];
        const metode = classe && classe.metodes[f.nom];
        if (!metode) throw error(env.linia, "El mètode '" + f.nom + "' no existeix a la classe " + obj.classe);
        const scopeMetode = { vars: { this: obj }, pare: env.globals };
        metode.params.forEach((p, i) => { scopeMetode.vars[p.nom] = args[i]; });
        try {
          executarBloc(metode.cos, scopeMetode, env);
        } catch (senyal) {
          if (senyal && senyal.__return) return senyal.valor;
          throw senyal;
        }
        return undefined;
      }
      if (obj && obj.__scanner) {
        if (f.nom === "nextLine") {
          if (obj.pos >= obj.dades.length) throw error(env.linia, "No queden dades d'entrada (nextLine)");
          return obj.dades[obj.pos++];
        }
        if (f.nom === "nextInt") {
          if (obj.pos >= obj.dades.length) throw error(env.linia, "No queden dades d'entrada (nextInt)");
          const valor = Number(String(obj.dades[obj.pos++]).trim());
          if (!Number.isFinite(valor)) throw error(env.linia, "L'entrada no és un enter vàlid: " + obj.dades[obj.pos - 1]);
          return Math.trunc(valor);
        }
        if (f.nom === "next") { return obj.dades[obj.pos++]; }
        if (f.nom === "hasNext") return obj.pos < obj.dades.length;
        throw error(env.linia, "Mètode de Scanner no implementat: " + f.nom);
      }
      if (obj === MATHS) {
        if (f.nom === "max") return Math.max(Number(args[0]), Number(args[1]));
        if (f.nom === "min") return Math.min(Number(args[0]), Number(args[1]));
        if (f.nom === "abs") return Math.abs(Number(args[0]));
        throw error(env.linia, "Math." + f.nom + " no està implementat");
      }
      if (typeof obj === "string" && f.nom === "equals") return obj === args[0];
      if (typeof obj === "string" && f.nom === "length") return obj.length;
      if (Array.isArray(obj) && f.nom === "length") return obj.length;
      throw error(env.linia, "No es pot cridar el mètode '" + f.nom + "'");
    }

    if (f.k === "var") {
      const metode = env.metodes[f.nom];
      if (!metode) throw error(env.linia, "El mètode '" + f.nom + "' no existeix");
      const scopeFuncio = { vars: {}, pare: env.globals };
      metode.params.forEach((p, i) => { scopeFuncio.vars[p.nom] = args[i]; });
      try {
        executarBloc(metode.cos, scopeFuncio, env);
      } catch (senyal) {
        if (senyal && senyal.__return) return senyal.valor;
        throw senyal;
      }
      if (metode.tipus !== "void") return 0;
      return undefined;
    }
    throw error(env.linia, "Crida de funció no vàlida");
  }

  function avaluar(n, scope, env) {
    env.passos++;
    if (env.passos > LIMITE_PASOS) throw error(env.linia, "Excés d'operacions: possible bucle infinit");
    env.linia = n.l || env.linia;

    switch (n.k) {
      case "literal": return n.v;
      case "var": case "index": case "membre": return llegirVar(n, scope, env);
      case "scanner":
        return { __scanner: true, dades: env.entrada.slice(), pos: 0 };
      case "newobj": {
        const classe = env.classes[n.tipus];
        if (!classe) throw error(env.linia, "La classe '" + n.tipus + "' no existeix");
        const obj = { __obj: true, classe: n.tipus, camps: {} };
        Object.keys(classe.camps).forEach((nom) => {
          const camp = classe.camps[nom];
          obj.camps[nom] = camp.init ? avaluar(camp.init, scope, env) : 0;
        });
        const args = n.args.map((a) => avaluar(a, scope, env));
        if (classe.constructor) {
          const scopeCtor = { vars: { this: obj }, pare: env.globals };
          classe.constructor.params.forEach((p, i) => { scopeCtor.vars[p.nom] = args[i]; });
          try {
            executarBloc(classe.constructor.cos, scopeCtor, env);
          } catch (senyal) {
            if (!(senyal && senyal.__return)) throw senyal;
          }
        }
        return obj;
      }
      case "arraynou": {
        const mida = Math.trunc(Number(avaluar(n.mida, scope, env)));
        if (mida < 0 || mida > 10000) throw error(env.linia, "Mida de vector no vàlida: " + mida);
        return new Array(mida).fill(0);
      }
      case "unari": {
        const v = avaluar(n.a, scope, env);
        if (n.op === "!") return !esCert(v);
        if (n.op === "-") return -Number(v);
        if (n.op === "+") return Number(v);
        if (n.op === "++") {
          const nou = Number(v) + 1;
          escriureVar(n.a, nou, scope, env);
          return nou;
        }
        if (n.op === "--") {
          const nou = Number(v) - 1;
          escriureVar(n.a, nou, scope, env);
          return nou;
        }
        return v;
      }
      case "post": {
        const v = avaluar(n.a, scope, env);
        const nou = Number(v) + (n.op === "++" ? 1 : -1);
        escriureVar(n.a, nou, scope, env);
        return v;
      }
      case "bin": {
        const a = avaluar(n.a, scope, env);
        const b = avaluar(n.b, scope, env);
        switch (n.op) {
          case "+": return suma(a, b);
          case "-": return Number(a) - Number(b);
          case "*": return Number(a) * Number(b);
          case "/":
            if (Number(b) === 0) throw error(env.linia, "Divisió per zero");
            return typeof a === "number" && typeof b === "number" ? Math.trunc(Number(a) / Number(b)) : Number(a) / Number(b);
          case "%": return Number(a) % Number(b);
          case "==": return a === b || (typeof a === "number" && Number(b) === a);
          case "!=": return !(a === b || (typeof a === "number" && Number(b) === a));
          case "<": return typeof a === "string" ? a < b : Number(a) < Number(b);
          case ">": return typeof a === "string" ? a > b : Number(a) > Number(b);
          case "<=": return typeof a === "string" ? a <= b : Number(a) <= Number(b);
          case ">=": return typeof a === "string" ? a >= b : Number(a) >= Number(b);
          case "&&": return esCert(a) && esCert(b);
          case "||": return esCert(a) || esCert(b);
          default: throw error(env.linia, "Operador no implementat: " + n.op);
        }
      }
      case "assigna": {
        const valor = avaluar(n.valor, scope, env);
        if (n.op !== "=") {
          const anterior = avaluar(n.objectiu, scope, env);
          switch (n.op) {
            case "+=": return escriureVar(n.objectiu, suma(anterior, valor), scope, env), valor;
            case "-=": return escriureVar(n.objectiu, Number(anterior) - Number(valor), scope, env), valor;
            case "*=": return escriureVar(n.objectiu, Number(anterior) * Number(valor), scope, env), valor;
            case "/=": return escriureVar(n.objectiu, Number(anterior) / Number(valor), scope, env), valor;
            case "%=": return escriureVar(n.objectiu, Number(anterior) % Number(valor), scope, env), valor;
          }
        }
        escriureVar(n.objectiu, valor, scope, env);
        return valor;
      }
      case "crida": return cridaFuncio(n, scope, env);
      default: throw error(env.linia, "Node no reconegut: " + n.k);
    }
  }

  function executarBloc(bloc, scope, env) {
    for (const s of bloc.cos) executarSentencia(s, scope, env);
  }

  function executarSentencia(s, scope, env) {
    env.passos++;
    if (env.passos > LIMITE_PASOS) throw error(env.linia, "Excés d'operacions: possible bucle infinit");
    switch (s.k) {
      case "bloc": executarBloc(s, { vars: {}, pare: scope }, env); break;
      case "var": {
        let valor = s.init ? avaluar(s.init, scope, env) : 0;
        if (s.tipus === "String") valor = valor === 0 ? "" : aText(valor);
        if (s.tipus === "int") valor = Math.trunc(Number(valor));
        if (s.tipus === "double") valor = Number(valor);
        if (s.tipus === "boolean") valor = esCert(valor);
        scope.vars[s.nom] = valor;
        break;
      }
      case "expr": avaluar(s.e, scope, env); break;
      case "return": throw { __return: true, valor: avaluar(s.e, scope, env) };
      case "si":
        if (esCert(avaluar(s.cond, scope, env))) executarSentencia(s.llavors, scope, env);
        else if (s.sinon) executarSentencia(s.sinon, scope, env);
        break;
      case "per": {
        const scopeBucle = { vars: {}, pare: scope };
        if (s.init) executarSentencia(s.init, scopeBucle, env);
        let iteracions = 0;
        while (!s.cond || esCert(avaluar(s.cond, scopeBucle, env))) {
          executarSentencia(s.cos, scopeBucle, env);
          if (s.actual) avaluar(s.actual, scopeBucle, env);
          if (++iteracions > LIMITE_PASOS) throw error(env.linia, "Bucle for infinit");
        }
        break;
      }
      case "mentre": {
        let iteracions = 0;
        while (esCert(avaluar(s.cond, scope, env))) {
          executarSentencia(s.cos, scope, env);
          if (++iteracions > LIMITE_PASOS) throw error(env.linia, "Bucle while infinit");
        }
        break;
      }
      default: throw error(env.linia, "Sentència no reconeguda: " + s.k);
    }
  }

  /* ------------------------- API -------------------------- */
  function executar(codi, dadesEntrada) {
    const tokens = tokenitzar(codi);
    const parser = new Parser(tokens);
    const programa = parser.parsePrograma();
    const metodes = programa.metodes;
    const env = {
      metodes,
      classes: programa.classes,
      globals: { vars: {}, pare: null },
      sortida: [],
      entrada: Array.isArray(dadesEntrada) ? dadesEntrada.slice() : [],
      passos: 0,
      linia: 1,
      stats: { printlns: 0, prints: 0 },
    };
    const scopeMain = { vars: {}, pare: env.globals };
    executarBloc(metodes.main.cos, scopeMain, env);
    return {
      sortida: env.sortida.join(""),
      linies: env.sortida.map((x) => x.replace(/\n$/, "")),
      error: null,
      metodes: Object.keys(metodes),
      classes: Object.keys(programa.classes),
      stats: env.stats,
    };
  }

  global.JavaMini = { executar };
})(typeof window !== "undefined" ? window : globalThis);
