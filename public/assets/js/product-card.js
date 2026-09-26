/* =========================================================
   PROBOW — PRODUCT CARD
   Shared card behaviour
   ========================================================= */

(function () {

  /*
   * Product-card specific interactions live here.
   *
   * Card HTML/CSS remains shared across:
   * Home
   * Menu
   * Search
   * Category pages
   */


  /* Read-more buttons */

  document.addEventListener('click', event => {

    const button =
      event.target.closest('.read-more-link');

    if (!button) return;

    event.preventDefault();

  });


})();