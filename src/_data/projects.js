// Selected work, shown in this order. `note` is optional and renders as a margin note.
// Add professional work here too; a project doesn't need public code to belong on the list.
module.exports = [
  {
    title: 'QCross',
    kind: 'Research',
    year: '2023',
    summary: 'Cross-platform testing for quantum computing frameworks.',
    body:
      'A testing platform that applies differential and metamorphic testing to three quantum SDKs: IBM Qiskit, Rigetti PyQuil and Google Cirq. Run the same program everywhere, transform it in ways that should not change the answer, and look closely when the answers differ.',
    stack: ['Python', 'Qiskit', 'Cirq', 'PyQuil'],
    links: [{ label: 'Code', url: 'https://github.com/ArfatSalman/qcross' }],
    note:
      'Builds on MorphQ, a metamorphic testing approach for Qiskit (<a href="https://arxiv.org/abs/2206.01111">arXiv:2206.01111</a>).',
  },
  {
    title: 'lox.js',
    kind: 'Language',
    year: '2020',
    summary: 'An interpreter for the Lox programming language, in JavaScript.',
    body:
      'A from-scratch implementation of Lox, the small scripting language from Robert Nystrom’s <em>Crafting Interpreters</em>. Scanning, parsing and evaluating, written to understand how a language actually runs.',
    stack: ['JavaScript', 'Node.js'],
    links: [{ label: 'Code', url: 'https://github.com/ArfatSalman/lox.js' }],
    note: '<em>Crafting Interpreters</em> is also known for its margin notes. This site borrows the idea.',
  },
  {
    title: 'JSONPath Highlighter',
    kind: 'Tool',
    year: '2020',
    summary: 'See what a JSONPath expression selects.',
    body:
      'A small web app that highlights the parts of a JSON document matched by a JSONPath expression, so you can check a query by looking instead of by reasoning.',
    stack: ['React', 'JSONPath'],
    links: [
      { label: 'Live', url: 'https://jsonpath-highlighter.netlify.app/' },
      { label: 'Code', url: 'https://github.com/ArfatSalman/jsonpath-highlighter' },
    ],
  },
];
