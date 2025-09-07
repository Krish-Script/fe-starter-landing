// Mobile nav toggle with accessibility
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  if (!toggle || !nav) return;

  // Ensure nav is hidden by default for accessibility
  nav.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');

  let isOpen = false;

  function openNav() {
    if (isOpen) return;
    isOpen = true;
    toggle.setAttribute('aria-expanded', 'true');
    nav.hidden = false;
    nav.classList.add('open');

    const firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus();

    document.addEventListener('keydown', onKeydown);
    document.addEventListener('click', onClickOutside, { capture: true });
  }

  function closeNav() {
    if (!isOpen) return;
    isOpen = false;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    nav.hidden = true;

    toggle.focus();

    document.removeEventListener('keydown', onKeydown);
    document.removeEventListener('click', onClickOutside, { capture: true });
  }

  function onKeydown(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeNav();
    }
  }

  function onClickOutside(e) {
    const withinToggle = toggle.contains(e.target);
    const withinNav = nav.contains(e.target);
    if (!withinToggle && !withinNav) {
      closeNav();
    }
  }

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeNav();
    } else {
      openNav();
    }
  });
})();

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
