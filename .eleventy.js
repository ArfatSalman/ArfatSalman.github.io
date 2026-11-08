module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('src/*.css');
  eleventyConfig.addWatchTarget('src/*.js');

  // Copied to the site root as-is.
  eleventyConfig.addPassthroughCopy('src/*.css');
  eleventyConfig.addPassthroughCopy('src/*.js');
  eleventyConfig.addPassthroughCopy('src/*.ico');
  eleventyConfig.addPassthroughCopy('src/*.svg');
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('CNAME');

  // "2019-05" -> "May 2019"
  eleventyConfig.addFilter('monthYear', (value) => {
    const [year, month] = String(value).split('-').map(Number);
    return new Date(Date.UTC(year, month - 1)).toLocaleString('en-GB', {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    });
  });

  // Two-digit counters for section and item numbers.
  eleventyConfig.addFilter('pad', (n) => String(n).padStart(2, '0'));

  eleventyConfig.addGlobalData('year', () => new Date().getFullYear());

  return {
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
    },
  };
};
