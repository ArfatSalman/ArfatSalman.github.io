// schema.org data that tells search engines who this site is about.
// Rendered as JSON-LD on the home page (see base.njk).
const site = require('./site.js');

module.exports = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${site.url}/`,
  mainEntity: {
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.name,
    url: `${site.url}/`,
    image: `${site.url}/assets/profile.jpeg`,
    jobTitle: 'Full-stack software engineer',
    description: site.description,
    address: { '@type': 'PostalAddress', addressLocality: 'Oslo', addressCountry: 'NO' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Oslo' },
    knowsAbout: [
      'Software architecture',
      'Scalable systems',
      'Back-end development',
      'Front-end development',
      'JavaScript',
      'React',
      'Node.js',
      'Python',
      'Programming languages',
    ],
    sameAs: site.links.map((link) => link.url),
  },
};
