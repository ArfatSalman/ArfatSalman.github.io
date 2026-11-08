// Everything about you that appears in more than one place lives here.
module.exports = {
  url: 'https://arfat.dev',
  name: 'Arfat Salman',
  role: 'Software engineer',
  location: 'Oslo, Norway',
  description:
    'Arfat Salman is a software engineer in Oslo who builds software end to end, from interfaces to scalable back-end systems, and teaches how it works underneath.',

  // The email address, XOR-encoded (key 23) so it never appears in the page source or in this repo.
  // main.js decodes it only after a visitor interacts with the page. To change it, run:
  //   node -e "console.log([...process.argv[1]].map(c => (c.charCodeAt(0) ^ 23).toString(16).padStart(2, '0')).join(''))" you@example.com
  emailEncoded: '707e79726e3967766576737e647257707a767e7b3974787a',

  links: [
    { label: 'GitHub', handle: 'ArfatSalman', url: 'https://github.com/ArfatSalman' },
    { label: 'Medium', handle: '@arfatsalman', url: 'https://medium.com/@arfatsalman' },
    { label: 'LinkedIn', handle: 'in/arfatsalman', url: 'https://www.linkedin.com/in/arfatsalman/' },
    { label: 'Twitter', handle: '@salman_arfat', url: 'https://twitter.com/salman_arfat' },
  ],
};
