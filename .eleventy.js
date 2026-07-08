module.exports = function (eleventyConfig) {
  // El CSS real que usan las páginas es "styles.css" (no "style.css")
  eleventyConfig.addPassthroughCopy("src/styles.css");

  // Copia todas las imágenes que estén sueltas dentro de src/
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/*.jpg");
  eleventyConfig.addPassthroughCopy("src/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/*.svg");
  eleventyConfig.addPassthroughCopy("src/*.webp");

  // Si organizás algunas imágenes dentro de src/img, descomenta esta línea:
  // eleventyConfig.addPassthroughCopy("src/img");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
