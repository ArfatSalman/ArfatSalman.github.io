module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('*.css');
  eleventyConfig.addPassthroughCopy('*.css');
  eleventyConfig.addPassthroughCopy('*.ico');
  eleventyConfig.addPassthroughCopy('assets');
  return {
    passthroughFileCopy: true,
  };
};
