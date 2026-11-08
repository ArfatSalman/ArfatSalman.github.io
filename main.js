(() => {
  const root = document.documentElement;

  // Theme toggle. The saved choice is applied by an inline script in <head>
  // so the page never flashes the wrong theme.
  const toggle = document.querySelector('[data-theme-toggle]');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = () => root.dataset.theme || (prefersDark.matches ? 'dark' : 'light');
  const labelToggle = () => {
    if (!toggle) return;
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', `Switch to ${next} theme`);
  };

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
      labelToggle();
    });
    prefersDark.addEventListener('change', labelToggle);
    labelToggle();
  }

  // Margin notes: on wide screens, slide each note down so it starts level with its marker.
  // Notes and markers pair up in document order (the same order the CSS counters number them).
  const wide = window.matchMedia('(min-width: 1181px)');
  const alignNotes = () => {
    const notes = [...document.querySelectorAll('main .note:not(.facts)')];
    const refs = [...document.querySelectorAll('main .ref')];
    notes.forEach((note, i) => {
      note.style.marginTop = '';
      note.style.paddingTop = '';
      if (!wide.matches || !refs[i]) return;
      note.style.marginTop = '0px';
      note.style.paddingTop = '0px';
      const lineTop = refs[i].parentElement.getBoundingClientRect().top;
      const refTop = refs[i].getBoundingClientRect().top;
      // Line the note's first line up with the marker's line of text.
      const target = refTop - 6 < lineTop ? lineTop : refTop - 6;
      const offset = target - note.getBoundingClientRect().top;
      note.style.marginTop = `${Math.max(0, offset)}px`;
    });
  };
  alignNotes();
  if (document.fonts) document.fonts.ready.then(alignNotes);
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(alignNotes, 100);
  });

  // Email: the page only carries an XOR-encoded copy (see site.js). It is decoded after the first
  // sign of a human (mouse move, tap, key press, wheel) or a click on the button, so scrapers that
  // just load the page, even ones that run JavaScript, never see the address.
  const decode = (hex) =>
    (hex.match(/../g) || []).map((h) => String.fromCharCode(parseInt(h, 16) ^ 23)).join('');
  const humanEvents = ['pointermove', 'pointerdown', 'touchstart', 'keydown', 'wheel'];

  document.querySelectorAll('[data-email]').forEach((el) => {
    const reveal = el.querySelector('.reveal');
    const link = el.querySelector('.email-address');
    const copy = el.querySelector('.copy');
    const status = el.querySelector('.copy-status');
    let address = '';

    const show = () => {
      if (address) return;
      humanEvents.forEach((type) => window.removeEventListener(type, show));
      address = decode(el.dataset.email);
      const hadFocus = document.activeElement === reveal;
      link.href = `mailto:${address}`;
      link.textContent = address;
      link.hidden = false;
      reveal.hidden = true;
      if (copy && navigator.clipboard) copy.hidden = false;
      if (hadFocus) link.focus();
    };

    reveal.hidden = false;
    reveal.addEventListener('click', show);
    humanEvents.forEach((type) => window.addEventListener(type, show, { passive: true }));

    if (!copy) return;
    let timer;
    copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(address);
        status.textContent = 'Copied';
      } catch (e) {
        status.textContent = 'Press ⌘C / Ctrl+C to copy';
        window.getSelection().selectAllChildren(link);
      }
      clearTimeout(timer);
      timer = setTimeout(() => (status.textContent = ''), 2500);
    });
  });
})();
