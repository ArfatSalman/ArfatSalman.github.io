// Articles, grouped into the "course" on the home page.
// `minutes` is an estimate from word count (~230 words per minute).
const articles = {
  asyncAwait: {
    title: 'Deeply Understanding JavaScript Async and Await with Examples',
    url: 'https://medium.com/bitsrc/understanding-javascript-async-and-await-with-examples-a010b03926ea',
    where: 'Bits and Pieces',
    date: '2019-05',
    minutes: 10,
  },
  objectsDeeper: {
    title: 'Diving Deeper in JavaScript’s Objects',
    url: 'https://medium.com/bitsrc/diving-deeper-in-javascripts-objects-318b1e13dc12',
    where: 'Bits and Pieces',
    date: '2019-01',
    minutes: 9,
  },
  objectsChronicles: {
    title: 'The Chronicles of JavaScript Objects',
    url: 'https://medium.com/bitsrc/the-chronicles-of-javascript-objects-2d6b9205cd66',
    where: 'Bits and Pieces',
    date: '2019-01',
    minutes: 16,
  },
  arrowFunctions: {
    title: 'A Practical Guide to ES6 Arrow Functions',
    url: 'https://medium.com/bitsrc/a-practical-guide-to-es6-arrow-functions-c16975100cf5',
    where: 'Bits and Pieces',
    date: '2018-12',
    minutes: 10,
  },
  generators: {
    title: 'Understanding Generators in ES6 JavaScript with Examples',
    url: 'https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5',
    where: 'codeburst',
    date: '2018-04',
    minutes: 10,
  },
  proxies: {
    title: 'Understanding JavaScript Proxies by Examining on-change Library',
    url: 'https://codeburst.io/understanding-javascript-proxies-by-examining-on-change-library-f252eddf76c2',
    where: 'codeburst',
    date: '2018-03',
    minutes: 9,
  },
  reactAntiPatterns: {
    title: 'How to NOT React: Common Anti-Patterns and Gotchas in React',
    url: 'https://codeburst.io/how-to-not-react-common-anti-patterns-and-gotchas-in-react-40141fe0dcd',
    where: 'codeburst',
    date: '2018-03',
    minutes: 9,
  },
  vscode: {
    title: 'Top JavaScript VSCode Extensions for Faster Development',
    url: 'https://codeburst.io/top-javascript-vscode-extensions-for-faster-development-c687c39596f5',
    where: 'codeburst',
    date: '2018-03',
    minutes: 6,
  },
  reactPackages: {
    title: 'Top React and Redux Packages for Faster Development',
    url: 'https://codeburst.io/top-react-and-redux-packages-for-faster-development-5fa0ace42fe7',
    where: 'codeburst',
    date: '2018-02',
    minutes: 5,
  },
  pwa: {
    title: 'Why should you care about Progressive Web Apps (PWAs)?',
    url: 'https://codeburst.io/why-should-you-care-about-progressive-web-apps-pwas-3c3f73cb8c92',
    where: 'codeburst',
    date: '2018-02',
    minutes: 5,
  },
};

module.exports = {
  units: [
    {
      title: 'How JavaScript waits',
      topics:
        'Callbacks, then promises, then async/await: what an async function returns, where it pauses, and the mistakes that make code accidentally sequential.',
      readings: [articles.asyncAwait],
    },
    {
      title: 'Objects, all the way down',
      topics:
        'Creating, reading and checking properties; a primer on prototypes; then the hidden attributes (writable, enumerable, configurable) every property carries.',
      readings: [articles.objectsChronicles, articles.objectsDeeper],
    },
    {
      title: 'Functions with opinions',
      topics:
        'Arrow functions and lexical <code>this</code>. Generators that pause midway, power iterables and stream infinite data lazily.',
      readings: [articles.arrowFunctions, articles.generators],
    },
    {
      title: 'Metaprogramming',
      topics: 'Proxies and Reflect, learned by rebuilding a real library, on-change, from scratch.',
      readings: [articles.proxies],
    },
    {
      title: 'React, minus the foot-guns',
      topics:
        'Binding in render, array indexes as keys, asynchronous <code>setState</code>: what goes wrong, and why.',
      readings: [articles.reactAntiPatterns],
    },
    {
      title: 'Write an interpreter',
      topics:
        'Scanning, parsing and evaluating a whole language by hand. The best way I know to understand everything above.',
      readings: [
        {
          title: 'lox.js',
          url: 'https://github.com/ArfatSalman/lox.js',
          where: 'Code on GitHub',
        },
      ],
    },
  ],

  // Shorter pieces, listed under "Also on Medium".
  more: [articles.vscode, articles.reactPackages, articles.pwa],

  articleCount: Object.keys(articles).length,
};
