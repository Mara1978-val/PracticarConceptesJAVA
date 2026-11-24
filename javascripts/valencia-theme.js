/* Adaptació al valencià de qualsevol text visible generat pel tema MkDocs
   (missatges del cercador, etc.). No toca codi ni camps de text. */
(function () {
  // Adaptar també les cadenes de configuració del tema (cercador, etc.)
  const config = document.getElementById("__config");
  if (config) {
    try {
      const obj = JSON.parse(config.textContent);
      const valencia = (valor) => {
        if (typeof valor === "string") {
          return valor
            .replace(/aquestes/gi, "eixes")
            .replace(/aquests/gi, "eixos")
            .replace(/aquesta/gi, "eixa")
            .replace(/aquest/gi, "eixe");
        }
        if (Array.isArray(valor)) return valor.map(valencia);
        if (valor && typeof valor === "object") {
          Object.keys(valor).forEach((clau) => { valor[clau] = valencia(valor[clau]); });
        }
        return valor;
      };
      config.textContent = JSON.stringify(valencia(obj));
    } catch (e) { /* config no disponible */ }
  }

  function arreglar(node) {
    if (node.nodeType === 3) {
      const pare = node.parentElement;
      if (pare && ["SCRIPT", "STYLE", "TEXTAREA"].indexOf(pare.tagName) !== -1) return;
      const nou = node.nodeValue
        .replace(/aquestes/gi, "eixes")
        .replace(/aquests/gi, "eixos")
        .replace(/aquesta/gi, "eixa")
        .replace(/aquest/gi, "eixe");
      if (nou !== node.nodeValue) node.nodeValue = nou;
    } else if (node.childNodes) {
      Array.prototype.forEach.call(node.childNodes, arreglar);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    arreglar(document.body);
    new MutationObserver(function (canvis) {
      canvis.forEach(function (canvi) {
        if (canvi.type === "characterData") arreglar(canvi.target);
        else Array.prototype.forEach.call(canvi.addedNodes, arreglar);
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  });
})();
