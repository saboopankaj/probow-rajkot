/* =========================================================
   PROBOW — QUANTITY
   Discount-aware quantity handling
   ========================================================= */

(function () {

  function getSellingPrice(id, fallbackPrice) {

    /*
     * Find the product from MenuAPI if available.
     */
    if (
      window.MenuAPI &&
      typeof window.MenuAPI.getProduct === "function"
    ) {

      /*
       * This is async normally, so we don't use it here.
       * The card itself stores the correct selling price.
       */
    }


    /*
     * Read the current card's data attribute.
     */
    const priceElement =
      document.getElementById(`price-${id}`);

    if (
      priceElement &&
      priceElement.dataset.salePrice
    ) {

      return Number(
        priceElement.dataset.salePrice
      );

    }


    return Number(
      fallbackPrice || 0
    );

  }


  function updateQty(
    id,
    change,
    basePrice
  ) {

    const qtyElement =
      document.getElementById(
        `qty-${id}`
      );


    const priceElement =
      document.getElementById(
        `price-${id}`
      );


    if (!qtyElement) {
      return;
    }


    let qty =
      parseInt(
        qtyElement.innerText,
        10
      ) || 1;


    qty +=
      Number(change) || 0;


    if (qty < 1) {
      qty = 1;
    }


    qtyElement.innerText =
      qty;


    /*
     * IMPORTANT:
     *
     * Do not replace priceElement.innerHTML.
     *
     * The price element contains:
     *
     * ₹249
     * ₹299
     * 17% OFF
     *
     * We only update the actual sale
     * price span.
     */

    if (priceElement) {

      const salePriceElement =
        priceElement.querySelector(
          ".price-sale"
        );


      const originalPriceElement =
        priceElement.querySelector(
          ".price-original"
        );


      const discountElement =
        priceElement.querySelector(
          ".price-discount"
        );


      /*
       * Determine the selling price.
       *
       * salePrice is stored on the
       * price container by menu.js.
       */

      const unitPrice =
        Number(
          priceElement.dataset.salePrice ||
          basePrice ||
          0
        );


      const total =
        qty * unitPrice;


      /*
       * Discounted product
       */

      if (
        salePriceElement &&
        originalPriceElement &&
        discountElement
      ) {

        salePriceElement.innerText =
          `₹${total}`;


        /*
         * Original price also scales
         * with quantity.
         */

        const originalUnitPrice =
          Number(
            priceElement.dataset.originalPrice ||
            0
          );


        if (
          originalUnitPrice > 0
        ) {

          originalPriceElement.innerText =
            `₹${qty * originalUnitPrice}`;

        }


        /*
         * Percentage stays the same.
         */

        return;

      }


      /*
       * Normal product without discount.
       */

      if (salePriceElement) {

        salePriceElement.innerText =
          `₹${total}`;

      }
      else {

        /*
         * Backward compatibility
         * with an older card.
         */

        priceElement.innerText =
          `₹${total}`;

      }

    }

  }


  window.updateQty =
    updateQty;


})();