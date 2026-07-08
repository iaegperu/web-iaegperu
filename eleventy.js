module.exports = function (eleventyConfig) {
  // CSS
  eleventyConfig.addPassthroughCopy("src/styles.css");

  // Loose images inside src/
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/*.jpg");
  eleventyConfig.addPassthroughCopy("src/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/*.svg");
  eleventyConfig.addPassthroughCopy("src/*.webp");

  // Local images uploaded through Decap CMS for new posts
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Decap CMS config file — not an HTML/Nunjucks/Markdown file, so Eleventy
  // won't copy it unless we tell it to explicitly.
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");

  // Formats a date like "January 15, 2026" for news posts
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
