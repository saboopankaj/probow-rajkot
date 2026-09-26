/* =========================================================
   PROBOW — PRODUCT / CUSTOMIZATION MODAL
   Shared by Home / Menu / Search

   Features:
   - Product modal
   - Variants / add-ons
   - Quantity
   - Discount price
   - Related products
   - Related product +/- quantity
   - WhatsApp ordering
   ========================================================= */

(function () {

  "use strict";


  /* =========================================================
     CURRENT PRODUCT STATE
     ========================================================= */

  let currentItemName = "";
  let currentBasePrice = 0;
  let currentOriginalPrice = 0;
  let currentItemImage = "";
  let currentItemDesc = "";
  let currentModalQty = 1;

  let currentRelatedItems = {};

  let currentProduct = null;


  /* =========================================================
     PRICE HELPERS
     ========================================================= */

  function getProductSellingPrice(product) {

    const originalPrice =
      Number(product?.price || 0);

    const discountPrice =
      product?.discount_price !== null &&
      product?.discount_price !== undefined &&
      Number(product.discount_price) > 0 &&
      Number(product.discount_price) < originalPrice
        ? Number(product.discount_price)
        : originalPrice;

    return discountPrice;
  }


  function hasDiscount(product) {

    const originalPrice =
      Number(product?.price || 0);

    const discountPrice =
      Number(product?.discount_price || 0);

    return (
      discountPrice > 0 &&
      discountPrice < originalPrice
    );
  }


  function getDiscountPercent(product) {

    const originalPrice =
      Number(product?.price || 0);

    const sellingPrice =
      getProductSellingPrice(product);

    if (
      !originalPrice ||
      sellingPrice >= originalPrice
    ) {
      return 0;
    }

    return Math.round(
      (
        (originalPrice - sellingPrice) /
        originalPrice
      ) * 100
    );
  }


  function escapeHTML(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  /* =========================================================
     PRICE HTML
     ========================================================= */

  function getPriceHTML(product) {

    if (!product) {
      return "";
    }

    const originalPrice =
      Number(product.price || 0);

    const sellingPrice =
      getProductSellingPrice(product);


    if (
      hasDiscount(product)
    ) {

      const discountPercent =
        getDiscountPercent(product);

      return `
        <span class="price-sale">
          ₹${sellingPrice}
        </span>

        <span class="price-original">
          ₹${originalPrice}
        </span>

        <span class="price-discount">
          ${discountPercent}% OFF
        </span>
      `;

    }


    return `
      <span class="price-sale">
        ₹${sellingPrice}
      </span>
    `;

  }


  /* =========================================================
     VARIANT SECTION
     ========================================================= */

  function findVariantSection() {

    const modal =
      document.getElementById(
        "variantModal"
      );

    if (!modal) {
      return null;
    }


    let section =
      modal.querySelector(
        ".modal-variants"
      );

    if (section) {
      return section;
    }


    section =
      modal.querySelector(
        ".variant-section"
      );

    if (section) {
      return section;
    }


    section =
      modal.querySelector(
        ".portion-section"
      );

    if (section) {
      return section;
    }


    /*
     * Don't use .variant-options itself as the
     * section to hide because it is the inner
     * options container.
     */

    const firstRadio =
      modal.querySelector(
        'input[name="portion"]'
      );

    if (!firstRadio) {
      return null;
    }


    const firstLabel =
      firstRadio.closest(
        ".variant-label"
      );

    if (firstLabel) {
      return firstLabel.parentElement;
    }


    return firstRadio.parentElement;

  }


  /* =========================================================
     RENDER VARIANTS
     ========================================================= */

function renderVariants() {

  const section =
    findVariantSection();

  if (!section) {
    return;
  }

  const variants =
    Array.isArray(
      currentProduct?.variants
    )
      ? currentProduct.variants
      : [];

  /*
   * Always completely rebuild the variant area.
   * Do NOT create an additional "Choose your option"
   * heading because the modal already has its
   * "Select portion / size" heading.
   */

  section.innerHTML = "";

  /*
   * NO ADD-ONS
   */

  if (!variants.length) {

    section.style.display =
      "none";

    return;
  }

  section.style.display =
    "";

  section.innerHTML = `

    <div class="variant-options">

      <!-- STANDARD -->

      <label
        class="variant-label selected"
      >

        <input
          type="radio"
          name="portion"
          value="0"
          data-label="Standard"
          checked
        >

        <span class="variant-name">
          Standard
        </span>

        <span class="variant-price">
          ₹${currentBasePrice}
        </span>

      </label>


      <!-- ADD-ONS -->

      ${
        variants.map(
          (variant, index) => {

            const label =
              variant.name ||
              variant.label ||
              variant.title ||
              `Add-on ${index + 1}`;

            const value =
              Number(
                variant.price ??
                variant.price_delta ??
                variant.additional_price ??
                variant.amount ??
                variant.value ??
                0
              );

            return `

              <label
                class="variant-label"
              >

                <input
                  type="checkbox"
                  name="portion"
                  value="${value}"
                  data-label="${escapeHTML(label)}"
                >

                <span class="variant-name">
                  ${escapeHTML(label)}
                </span>

                <span class="variant-price">
                  +₹${value}
                </span>

              </label>

            `;

          }
        ).join("")
      }

    </div>

  `;


  section
    .querySelectorAll(
      'input[name="portion"]'
    )
    .forEach(
      input => {

        input.addEventListener(
          "change",
          function () {

            /*
             * Standard is always selected as
             * the base option.
             *
             * Add-ons can be selected together.
             */

            if (
              input.type === "radio"
            ) {

              if (
                input.value === "0"
              ) {

                input.checked =
                  true;

              }

            }

            calcModalTotal();

          }
        );

      }
    );

}


  /* =========================================================
     UPDATE VARIANT VISIBILITY
     ========================================================= */

  function updateVariantVisibility() {

    const section =
      findVariantSection();


    const variants =
      Array.isArray(
        currentProduct?.variants
      )
        ? currentProduct.variants
        : [];


    /*
     * NO VARIANTS
     */

    if (!variants.length) {

      if (section) {

        section.style.display =
          "none";

      }


      const radios =
        document.querySelectorAll(
          '#variantModal input[name="portion"]'
        );


      radios.forEach(
        radio => {

          radio.checked =
            false;

          radio.disabled =
            true;

        }
      );


      return;

    }


    /*
     * HAS VARIANTS
     */

    renderVariants();


    const radios =
      document.querySelectorAll(
        '#variantModal input[name="portion"]'
      );


    radios.forEach(
      radio => {

        radio.disabled =
          false;

      }
    );


    const selected =
      document.querySelector(
        '#variantModal input[name="portion"]:checked'
      );


    if (
      !selected &&
      radios.length
    ) {

      radios[0].checked =
        true;

    }

  }


  /* =========================================================
     MODAL PRICE DISPLAY
     ========================================================= */

  function updateModalPriceDisplay() {

    const priceElement =
      document.getElementById(
        "varPriceStd"
      );

    if (!priceElement) {
      return;
    }


    priceElement.innerHTML =
      getPriceHTML(
        currentProduct
      );

  }


  /* =========================================================
     OPEN MODAL
     ========================================================= */

  async function openModal(
    name,
    price,
    imgUrl,
    desc,
    product
  ) {

    currentProduct =
      product || null;


    currentItemName =
      name || "";


    currentOriginalPrice =
      Number(
        product?.price ?? price
      ) || 0;


    currentBasePrice =
      getProductSellingPrice(
        product || {
          price: price
        }
      );


    currentItemImage =
      imgUrl || "";


    currentItemDesc =
      desc || "";


    currentModalQty =
      1;


    /*
     * Reset only when opening a new main product.
     */

    currentRelatedItems =
      {};


    const modal =
      document.getElementById(
        "variantModal"
      );


    if (!modal) {
      return;
    }


    /* =======================================================
       BASIC ELEMENTS
       ======================================================= */

    const title =
      document.getElementById(
        "modalTitle"
      );


    const description =
      document.getElementById(
        "modalDesc"
      );


    const image =
      document.getElementById(
        "modalImg"
      );


    const quantity =
      document.getElementById(
        "modalQty"
      );


    /* =======================================================
       PRODUCT DATA
       ======================================================= */

    if (title) {

      title.innerText =
        currentItemName;

    }


    if (description) {

      description.innerText =
        currentItemDesc;

    }


    if (image) {

      image.src =
        currentItemImage;

      image.alt =
        currentItemName;

    }


    if (quantity) {

      quantity.innerText =
        "1";

    }


    /* =======================================================
       PRICE
       ======================================================= */

    updateModalPriceDisplay();


    /* =======================================================
       TAGS
       ======================================================= */

    const modalFoodTags =
      document.getElementById(
        "modalFoodTags"
      );


    if (modalFoodTags) {

      modalFoodTags.innerHTML =
        "";


      const matchingCard =
        Array.from(
          document.querySelectorAll(
            ".menu-item"
          )
        ).find(
          card => {

            const cardTitle =
              card.querySelector(
                ".card-title"
              );


            return (
              cardTitle &&
              cardTitle.textContent.trim() ===
                currentItemName
            );

          }
        );


      if (matchingCard) {

        matchingCard
          .querySelectorAll(
            ".card-tags .food-tag"
          )
          .forEach(
            tag => {

              modalFoodTags.appendChild(
                tag.cloneNode(true)
              );

            }
          );

      }

    }


    /* =======================================================
       VARIANTS
       ======================================================= */

   const variantSections =
  document.querySelectorAll(
    "#variantModal .modal-variants, #variantModal .variant-section, #variantModal .portion-section"
  );

variantSections.forEach(section => {
  section.innerHTML = "";
  section.style.display = "none";
});

updateVariantVisibility();


    /* =======================================================
       INITIAL TOTAL
       ======================================================= */

    calcModalTotal();


    /* =======================================================
       SHOW
       ======================================================= */

    modal.style.display =
      "flex";


    modal.setAttribute(
      "aria-hidden",
      "false"
    );


    document.body.classList.add(
      "modal-open"
    );


    /* =======================================================
       RELATED PRODUCTS
       ======================================================= */

    await renderRelatedProducts();


    /*
     * Related products are async,
     * so calculate again after loading.
     */

    calcModalTotal();


    /* =======================================================
       RESET SCROLL
       ======================================================= */

    requestAnimationFrame(
      () => {

        const body =
          modal.querySelector(
            ".modal-body"
          );


        if (body) {

          body.scrollTop =
            0;

        }

      }
    );

  }


  /* =========================================================
     CLOSE MODAL
     ========================================================= */

  function closeModal() {

    const modal =
      document.getElementById(
        "variantModal"
      );


    if (!modal) {
      return;
    }


    modal.style.display =
      "none";


    modal.setAttribute(
      "aria-hidden",
      "true"
    );


    document.body.classList.remove(
      "modal-open"
    );

  }


  /* =========================================================
     MAIN PRODUCT QUANTITY
     ========================================================= */

  function changeModalQty(
    change
  ) {

    currentModalQty +=
      Number(change) || 0;


    if (
      currentModalQty < 1
    ) {

      currentModalQty =
        1;

    }


    if (
      currentModalQty > 99
    ) {

      currentModalQty =
        99;

    }


    const quantity =
      document.getElementById(
        "modalQty"
      );


    if (quantity) {

      quantity.innerText =
        currentModalQty;

    }


    calcModalTotal();

  }


  /* =========================================================
     SELECTED OPTION / ADD-ON
     ========================================================= */

  function getSelectedVariant() {

    const variants =
      Array.isArray(
        currentProduct?.variants
      )
        ? currentProduct.variants
        : [];


    if (!variants.length) {
      return null;
    }


    const selected =
      Array.from(
        document.querySelectorAll(
          '#variantModal input[name="portion"]:checked'
        )
      );


    if (!selected.length) {
      return null;
    }


    const selectedVariants =
      selected.map(
        input => {

          const label =
            input.dataset.label ||
            input.getAttribute(
              "data-label"
            ) ||
            "Standard";


          const value =
            Number(
              input.value
            ) || 0;


          return {
            name: label,
            price: value
          };

        }
      );


    return selectedVariants;

  }


  /* =========================================================
     CALCULATE TOTAL
     ========================================================= */

  function calcModalTotal() {

    const variant =
      getSelectedVariant();


    const variantPrice =
      Array.isArray(variant)
        ? variant.reduce(
            (sum, item) =>
              sum + Number(item.price || 0),
            0
          )
        : 0;


    /*
     * Discounted price is the base price.
     */

    const unitPrice =
      currentBasePrice +
      variantPrice;


    const mainProductTotal =
      unitPrice *
      currentModalQty;


    /* =======================================================
       RELATED TOTAL
       ======================================================= */

    let relatedProductsTotal =
      0;


    Object.values(
      currentRelatedItems
    ).forEach(
      item => {

        if (
          !item ||
          !item.product
        ) {

          return;

        }


        const relatedPrice =
          getProductSellingPrice(
            item.product
          );


        const relatedQty =
          Number(
            item.quantity || 0
          );


        relatedProductsTotal +=
          relatedPrice *
          relatedQty;

      }
    );


    /* =======================================================
       FINAL
       ======================================================= */

    const total =
      mainProductTotal +
      relatedProductsTotal;


    const totalElement =
      document.getElementById(
        "modalTotalPrice"
      );


    if (totalElement) {

      totalElement.innerText =
        `₹${total}`;

    }


    /* =======================================================
       WHATSAPP
       ======================================================= */

    let relatedMessage =
      "";


    Object.values(
      currentRelatedItems
    ).forEach(
      item => {

        if (
          !item ||
          !item.product
        ) {

          return;

        }


        const relatedPrice =
          getProductSellingPrice(
            item.product
          );


        const relatedQty =
          Number(
            item.quantity || 0
          );


        relatedMessage +=
`
Additional item: ${item.product.name}
Quantity: ${relatedQty}
Price: ₹${relatedPrice * relatedQty}
`;

      }
    );


    let variantMessage =
      "";


    if (Array.isArray(variant)) {

      const addOns =
        variant
          .filter(item => item.name !== "Standard")
          .map(item => item.name);


      if (addOns.length) {

        variantMessage =
`
Add-ons: ${addOns.join(", ")}
`;

      }

    }


const message =
`Hi PROBOW,

I want to order:

Item: ${currentItemName}${variantMessage}
Quantity: ${currentModalQty}
Price: ₹${mainProductTotal}
${relatedMessage}
Total: ₹${total}

To confirm your order, please pay:
https://razorpay.me/@probow

Once payment is done, please share a screenshot of the payment and call/message us on WhatsApp.`;


    const whatsappButton =
      document.getElementById(
        "modalWaBtn"
      );


    if (whatsappButton) {

      whatsappButton.href =
        `https://wa.me/917874610393?text=${
          encodeURIComponent(
            message
          )
        }`;

    }


    /* =======================================================
       VARIANT VISUAL STATE
       ======================================================= */

    document
      .querySelectorAll(
        "#variantModal .variant-label"
      )
      .forEach(
        label => {

          const input =
            label.querySelector(
              "input"
            );


          label.classList.toggle(
            "selected",
            !!(
              input &&
              input.checked &&
              !input.disabled
            )
          );

        }
      );

  }


  /* =========================================================
     RENDER RELATED PRODUCTS
     ========================================================= */

  async function renderRelatedProducts() {

    const section =
      document.getElementById(
        "relatedProductsSection"
      );


    const list =
      document.getElementById(
        "relatedProductsList"
      );


    if (
      !section ||
      !list
    ) {

      return;

    }


    /*
     * Always reset first.
     */

    list.innerHTML =
      "";

    section.hidden =
      true;


    if (!currentProduct) {
      return;
    }


    const relatedIds =
      Array.isArray(
        currentProduct.relatedProducts
      )
        ? currentProduct.relatedProducts
        : [];


    if (
      relatedIds.length === 0
    ) {

      return;

    }


    if (
      !window.MenuAPI ||
      typeof window.MenuAPI.getProducts !==
        "function"
    ) {

      return;

    }


    let allProducts;


    try {

      allProducts =
        await window.MenuAPI.getProducts();

    }

    catch (error) {

      console.error(
        "Related products failed:",
        error
      );

      return;

    }


    if (
      !Array.isArray(
        allProducts
      )
    ) {

      return;

    }


    const relatedProducts =
      relatedIds
        .map(
          relatedId => {

            return allProducts.find(
              product =>
                String(product.id) ===
                String(relatedId)
            );

          }
        )
        .filter(
          product => {

            return (
              product &&
              product.available !== false &&
              String(product.id) !==
                String(currentProduct.id)
            );

          }
        );


    if (
      relatedProducts.length === 0
    ) {

      return;

    }


    /* =======================================================
       EXISTING RELATED PRODUCT MARKUP
       ======================================================= */

    list.innerHTML =
      relatedProducts
        .map(
          product => {

const image =
  product.images &&
  product.images.length
    ? getImageUrl(product.images[0])
    : "";


            return `

              <div
                class="related-product-card"
                data-product-id="${escapeHTML(
                  product.id
                )}"
              >

                ${
                  image
                    ? `
                      <img
                        src="${escapeHTML(
                          image
                        )}"
                        alt="${escapeHTML(
                          product.name
                        )}"
                        loading="lazy"
                      >
                    `
                    : `
                      <div
                        class="related-product-image-placeholder"
                        aria-hidden="true"
                      >
                        <i class="fa-solid fa-utensils"></i>
                      </div>
                    `
                }


                <div
                  class="related-product-info"
                >

                  <div
                    class="related-product-name"
                  >
                    ${escapeHTML(
                      product.name
                    )}
                  </div>


                  <div
                    class="related-product-price"
                  >
                    ${getPriceHTML(
                      product
                    )}
                  </div>


                  <button
                    type="button"
                    class="related-product-add"
                    onclick="handleRelatedProduct(
                      ${Number(product.id)}
                    )"
                  >

                    <span>
                      ADD
                    </span>

                    <span
                      aria-hidden="true"
                    >
                      +
                    </span>

                  </button>

                </div>

              </div>

            `;

          }
        )
        .join("");


    /*
     * IMPORTANT:
     *
     * Don't use display:flex here.
     * Your existing CSS controls the section.
     */

    section.hidden =
      false;

  }


  /* =========================================================
     RELATED PRODUCT ADD
     ========================================================= */

/* =========================================================
   RELATED PRODUCT ADD
   ========================================================= */

async function handleRelatedProduct(
  id
) {

  if (
    !window.MenuAPI ||
    typeof window.MenuAPI.getProduct !==
      "function"
  ) {

    return;

  }


  let product;


  try {

    product =
      await window.MenuAPI.getProduct(
        id
      );

  }

  catch (error) {

    console.error(
      "Related product failed:",
      error
    );

    return;

  }


  if (!product) {
    return;
  }


  if (
    product.available === false
  ) {

    return;

  }


  /*
   * Related products are always added directly.
   *
   * ADD → 1
   * +   → 2
   * +   → 3
   *
   * They do NOT open the customization modal.
   */

  const productId =
    String(product.id);


  if (
    !currentRelatedItems[
      productId
    ]
  ) {

    currentRelatedItems[
      productId
    ] = {

      product:
        product,

      quantity:
        1

    };

  }

  else {

    currentRelatedItems[
      productId
    ].quantity +=
      1;

  }


  updateRelatedProductUI(
    productId
  );


  calcModalTotal();

}


  /* =========================================================
     UPDATE RELATED PRODUCT UI
     ========================================================= */

  function updateRelatedProductUI(
    productId
  ) {

    const id =
      String(productId);


    const card =
      document.querySelector(
        `.related-product-card[data-product-id="${CSS.escape(
          id
        )}"]`
      );


    if (!card) {
      return;
    }


    /*
     * KEEP EXISTING .related-product-add CLASS
     *
     * We don't introduce a new action class.
     */

    const button =
      card.querySelector(
        ".related-product-add"
      );


    if (!button) {
      return;
    }


    const item =
      currentRelatedItems[id];


    /* =======================================================
       NOT ADDED
       ======================================================= */

    if (
      !item ||
      Number(item.quantity || 0) <= 0
    ) {

      button.classList.remove(
        "is-added"
      );


      button.innerHTML = `

        <span>
          ADD
        </span>

        <span
          aria-hidden="true"
        >
          +
        </span>

      `;


      /*
       * Make the entire button ADD again.
       */

      button.onclick =
        function (event) {

          event.preventDefault();
          event.stopPropagation();

          handleRelatedProduct(
            Number(id)
          );

        };


      return;

    }


    /* =======================================================
       ADDED
       ======================================================= */

    const quantity =
      Number(
        item.quantity || 1
      );


    button.classList.add(
      "is-added"
    );


    /*
     * Keep the EXISTING button.
     *
     * Don't create another wrapper/class.
     */

    button.innerHTML = `

      <span
        class="related-minus"
        aria-label="Decrease quantity"
      >
        −
      </span>

      <span
        class="related-qty-value"
      >
        ${quantity}
      </span>

      <span
        class="related-plus"
        aria-label="Increase quantity"
      >
        +
      </span>

    `;


    /*
     * IMPORTANT:
     *
     * Don't use inline onclick inside the
     * button's inner HTML.
     *
     * Attach separate handlers.
     */

    const minus =
      button.querySelector(
        ".related-minus"
      );


    const plus =
      button.querySelector(
        ".related-plus"
      );


    if (minus) {

      minus.onclick =
        function (event) {

          event.preventDefault();
          event.stopPropagation();

          removeRelatedProduct(
            Number(id)
          );

        };

    }


    if (plus) {

      plus.onclick =
        function (event) {

          event.preventDefault();
          event.stopPropagation();

          addRelatedProduct(
            Number(id)
          );

        };

    }

  }


  /* =========================================================
     ADD RELATED PRODUCT QUANTITY
     ========================================================= */

  function addRelatedProduct(
    id
  ) {

    const productId =
      String(id);


    const item =
      currentRelatedItems[
        productId
      ];


    if (!item) {
      return;
    }


    item.quantity =
      Number(
        item.quantity || 0
      ) + 1;


    updateRelatedProductUI(
      productId
    );


    calcModalTotal();

  }


  /* =========================================================
     REMOVE RELATED PRODUCT QUANTITY
     ========================================================= */

  function removeRelatedProduct(
    id
  ) {

    const productId =
      String(id);


    const item =
      currentRelatedItems[
        productId
      ];


    if (!item) {
      return;
    }


    const nextQuantity =
      Number(
        item.quantity || 0
      ) - 1;


    /*
     * IMPORTANT:
     *
     * 1 → 0
     *
     * Completely remove product.
     *
     * UI becomes ADD again.
     */

    if (
      nextQuantity <= 0
    ) {

      delete currentRelatedItems[
        productId
      ];

    }

    else {

      item.quantity =
        nextQuantity;

    }


    updateRelatedProductUI(
      productId
    );


    calcModalTotal();

  }


  /* =========================================================
     GLOBAL API
     ========================================================= */

  window.openModal =
    openModal;


  window.closeModal =
    closeModal;


  window.changeModalQty =
    changeModalQty;


  window.calcModalTotal =
    calcModalTotal;


  window.handleRelatedProduct =
    handleRelatedProduct;


  window.addRelatedProduct =
    addRelatedProduct;


  window.removeRelatedProduct =
    removeRelatedProduct;


})();