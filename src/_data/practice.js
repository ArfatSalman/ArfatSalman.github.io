// The "Across the stack" figure, top layer first. Tags are the tools you reach for in each layer:
// add the databases, queues, clouds and languages you actually use.
module.exports = [
  {
    area: 'Front end',
    title: 'Interface',
    body:
      'Interfaces that stay fast, accessible and easy to change as they grow: thoughtful component design, state that is easy to reason about, and performance people can feel.',
    tags: ['JavaScript', 'React', 'HTML & CSS'],
  },
  {
    area: 'Back end',
    title: 'Services',
    body:
      'APIs and services that are dependable and pleasant to work on: clear data models, careful error handling, and code the next engineer can pick up without a tour.',
    tags: ['Node.js', 'Python', 'APIs'],
  },
  {
    area: 'Systems',
    title: 'Architecture',
    body:
      'Designing software to scale with the product and the team: where the boundaries go, how data moves, how it behaves under load, and the trade-offs written down.',
    tags: ['System design', 'Scalability', 'Testing'],
  },
];
