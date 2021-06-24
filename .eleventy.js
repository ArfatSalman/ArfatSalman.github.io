const htmlmin = require('html-minifier');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('src/*.css');

  const filesToCopy = ['src/*.css', 'src/*.ico', 'assets', 'CNAME'];
  for (const fileURL of filesToCopy) {
    eleventyConfig.addPassthroughCopy(fileURL);
  }

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
    },
  };
};
