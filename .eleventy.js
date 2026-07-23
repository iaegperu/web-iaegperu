const markdownIt = require("markdown-it")({ html: false, breaks: true, linkify: true });

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
  // Explicit "committees" collection — one entry per file in src/committees/.
  // Used on the Home page to show a live, always-accurate committee count
  // (e.g. "{{ collections.committees.length }}") instead of a hardcoded number.
  eleventyConfig.addCollection("committees", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/committees/*.md");
  });
  // Explicit "partnersPage" collection — points at src/partners.html so we
  // can pull the live count of partner organizations on the Home page
  // (e.g. "{{ collections.partnersPage[0].data.partners.length }}") instead
  // of a hardcoded number.
  eleventyConfig.addCollection("partnersPage", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/partners.html");
  });
  // Explicit "eventsPage" collection — points at src/events.html so we can
  // pull the next upcoming event on the Home page
  // (e.g. "{{ collections.eventsPage[0].data.events[0] }}") instead of a
  // hardcoded event card that goes stale.
  eleventyConfig.addCollection("eventsPage", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/events.html");
  });
  // Formats a date like "January 15, 2026" for news posts
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });
  // Converts Markdown text (from list-widget "markdown" fields, e.g. Project
  // descriptions) into real HTML — bold, links, bullet lists, paragraphs, etc.
  // Usage in templates: {{ someText | markdownify | safe }}
  eleventyConfig.addFilter("markdownify", (content) => {
    if (!content) return "";
    return markdownIt.render(content);
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
