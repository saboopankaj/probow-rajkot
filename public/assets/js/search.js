/* =========================================================
   PROBOW — MENU SEARCH
   ========================================================= */

(function () {

  const searchView =
    document.getElementById("menu-search-view");

  const searchInput =
    document.getElementById("menu-search-input");

  const searchBack =
    document.getElementById("menu-search-back");

  const searchResults =
    document.getElementById("menu-search-results");

  const searchSuggestions =
    document.getElementById("menu-search-suggestions");

  const searchResultsHead =
    document.getElementById("menu-search-results-head");

  const searchResultsCount =
    document.getElementById("menu-search-results-count");

  const searchEmpty =
    document.getElementById("menu-search-empty");

  const menuContainer =
    document.getElementById("menu-items-container");


  /* ---------------------------------------------------------
     OPEN SEARCH
     --------------------------------------------------------- */

function openSearch() {

  if (!searchView) return;

  searchView.classList.add("open");
  searchView.setAttribute("aria-hidden", "false");

  document.body.classList.add("menu-search-open");

  if (searchInput) {
    searchInput.value = "";
  }

  /*
   * Show ALL menu items when search opens.
   */
  showAllSearchItems();

  requestAnimationFrame(() => {

    if (searchInput) {
      searchInput.focus();
    }

  });

}

function showAllSearchItems() {

  if (!searchResults) return;

  const cards = getMenuCards();

  clearSearchResults();

  if (searchResultsHead) {
    searchResultsHead.hidden = false;
  }

  if (searchResultsCount) {
    searchResultsCount.textContent =
      `${cards.length} ${
        cards.length === 1 ? "item" : "items"
      }`;
  }

  cards.forEach(card => {

    const clone = card.cloneNode(true);

    clone.style.display = "flex";

    searchResults.appendChild(clone);

  });

}

  /* ---------------------------------------------------------
     CLOSE SEARCH
     --------------------------------------------------------- */

  function closeSearch() {

    if (!searchView) return;

    searchView.classList.remove("open");
    searchView.setAttribute("aria-hidden", "true");

    document.body.classList.remove("menu-search-open");

    if (searchInput) {
      searchInput.value = "";
    }

    clearSearchResults();

  }


  /* ---------------------------------------------------------
     CLEAR SEARCH
     --------------------------------------------------------- */

  function clearSearchResults() {

    if (searchSuggestions) {
      searchSuggestions.innerHTML = "";
    }

    if (searchResults) {
      searchResults.innerHTML = "";
    }

    if (searchResultsHead) {
      searchResultsHead.hidden = true;
    }

    if (searchEmpty) {
      searchEmpty.hidden = true;
    }

  }


  /* ---------------------------------------------------------
     GET CURRENT MENU CARDS
     
     menu.js creates the cards dynamically from MenuAPI.
     We read those cards after they exist.
     --------------------------------------------------------- */

  function getMenuCards() {

    if (!menuContainer) {
      return [];
    }

    return Array.from(
      menuContainer.querySelectorAll(".menu-item")
    );

  }


  /* ---------------------------------------------------------
     SEARCH
     --------------------------------------------------------- */

  function searchProducts(query) {

    const value =
      String(query || "")
        .trim()
        .toLowerCase();


    clearSearchResults();


    if (!value) {
      return;
    }


    const cards = getMenuCards();


    const matches = cards.filter(card => {

      const text =
        card.innerText
          .toLowerCase();

      return text.includes(value);

    });


    /* -------------------------------------------------------
       RESULT COUNT
       ------------------------------------------------------- */

    if (searchResultsHead) {

      searchResultsHead.hidden = false;

    }


    if (searchResultsCount) {

      searchResultsCount.textContent =
        `${matches.length} ${
          matches.length === 1
            ? "item"
            : "items"
        }`;

    }


    /* -------------------------------------------------------
       NO RESULTS
       ------------------------------------------------------- */

    if (
      matches.length === 0
    ) {

      if (searchEmpty) {
        searchEmpty.hidden = false;
      }

      return;

    }


    /* -------------------------------------------------------
       PREDICTIVE SUGGESTIONS
       
       Show first 6 matching products.
       ------------------------------------------------------- */

    if (searchSuggestions) {

      matches
        .slice(0, 6)
        .forEach(card => {

          const suggestion =
            createSuggestion(card);

          if (suggestion) {
            searchSuggestions.appendChild(
              suggestion
            );
          }

        });

    }


    /* -------------------------------------------------------
       SEARCH RESULT CARDS
       
       Clone the existing card architecture.
       Nothing in the original menu is hidden/changed.
       ------------------------------------------------------- */

    if (searchResults) {

      matches.forEach(card => {

        const clone =
          card.cloneNode(true);

        clone.style.display = "flex";

        /*
         * Prevent duplicate carousel IDs.
         */
        const carousel =
          clone.querySelector(
            ".card-img-carousel"
          );

        if (carousel) {
          carousel.removeAttribute("id");
        }


        /*
         * Prevent duplicate quantity IDs
         * if they exist in future.
         */
        clone
          .querySelectorAll("[id]")
          .forEach(element => {

            if (
              element.id.startsWith("qty-") ||
              element.id.startsWith("price-")
            ) {
              element.removeAttribute("id");
            }

          });


        searchResults.appendChild(clone);

      });

    }

  }


  /* ---------------------------------------------------------
     CREATE PREDICTIVE SUGGESTION
     --------------------------------------------------------- */

  function createSuggestion(card) {

    const title =
      card.querySelector(".card-title");

    const image =
      card.querySelector(
        ".card-img-carousel img"
      );

    const price =
      card.querySelector(".card-price");


    if (!title) {
      return null;
    }


    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "menu-search-suggestion";


    const productName =
      title.textContent.trim();

    const productImage =
      image
        ? image.currentSrc || image.src
        : "";

    const productPrice =
      price
        ? price.textContent.trim()
        : "";


    button.innerHTML = `
      ${
        productImage
          ? `<img
               src="${productImage}"
               alt="${productName}"
             >`
          : ""
      }

      <span class="menu-search-suggestion-text">

        <strong>
          ${productName}
        </strong>

        <span>
          ${productPrice}
        </span>

      </span>
    `;


    /* -------------------------------------------------------
       Clicking a suggestion
       ------------------------------------------------------- */

    button.addEventListener(
      "click",
      function () {

        if (!searchInput) return;

        searchInput.value =
          productName;

        searchProducts(
          productName
        );

        searchInput.focus();

      }
    );


    return button;

  }


  /* ---------------------------------------------------------
     BACK BUTTON
     --------------------------------------------------------- */

  if (searchBack) {

    searchBack.addEventListener(
      "click",
      closeSearch
    );

  }


  /* ---------------------------------------------------------
     SEARCH INPUT
     --------------------------------------------------------- */

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      function (event) {

        searchProducts(
          event.target.value
        );

      }
    );

  }


  /* ---------------------------------------------------------
     ESCAPE KEY
     --------------------------------------------------------- */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        searchView &&
        searchView.classList.contains("open")
      ) {

        closeSearch();

      }

    }
  );


  /* ---------------------------------------------------------
     PUBLIC FUNCTIONS
     --------------------------------------------------------- */

  window.openMenuSearch =
    openSearch;

  window.closeMenuSearch =
    closeSearch;


})();