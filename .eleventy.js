module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");

  eleventyConfig.addCollection("gallery", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/gallery/*.md");
  });

  eleventyConfig.addCollection("notice", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/notice/*.md");
  });

  eleventyConfig.addCollection("resources", function(collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/resources/*.md");
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};