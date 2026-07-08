module.exports = function (eleventyConfig) {
  // CSS
  eleventyConfig.addPassthroughCopy("src/styles.css");

  // Imágenes sueltas dentro de src/
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/*.jpg");
  eleventyConfig.addPassthroughCopy("src/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/*.svg");
  eleventyConfig.addPassthroughCopy("src/*.webp");

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
