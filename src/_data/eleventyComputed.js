module.exports = {
  // Mantiene la salida como archivos .html planos (about.html, news.html, etc.)
  // en vez de carpetas (about/index.html), para que coincida con los <a href="about.html">
  // que ya usan las páginas del sitio.
  permalink: (data) => `${data.page.filePathStem}.html`
};
