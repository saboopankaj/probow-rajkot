/* =========================================================
   PROBOW — HAMBURGER / MOBILE NAVIGATION
   Shared across all pages
   ========================================================= */

(function () {

  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (!hamburgerBtn || !navMenu) return;

  const icon = hamburgerBtn.querySelector('i');


  function openMenu() {
    navMenu.classList.add('active');

    if (icon) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
  }


  function closeMenu() {
    navMenu.classList.remove('active');

    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  }


  function toggleMenu() {

    if (navMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }

  }


  hamburgerBtn.addEventListener('click', toggleMenu);


  /* Close when navigation item is clicked */

  document.querySelectorAll('.nav-item').forEach(item => {

    item.addEventListener('click', () => {
      closeMenu();
    });

  });


  /* Close sticky mobile Menu CTA */

  const stickyMenuCta =
    document.querySelector('.mobile-menu-cta');

  if (stickyMenuCta) {

    stickyMenuCta.addEventListener('click', () => {
      closeMenu();
    });

  }


  /* ESC */

  document.addEventListener('keydown', event => {

    if (event.key === 'Escape') {
      closeMenu();
    }

  });


  /* Make available if another script needs it */

  window.PROBOWNav = {
    open: openMenu,
    close: closeMenu,
    toggle: toggleMenu
  };

})();