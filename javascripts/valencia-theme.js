/* Adaptació al valencià de qualsevol text visible generat pel tema MkDocs
   (missatges del cercador, etc.). No toca codi ni camps de text. */
(function () {
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
