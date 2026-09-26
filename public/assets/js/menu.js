/* =========================================================
   PROBOW MENU DATA + RENDERER
   API + FALLBACK + R2 IMAGE OBJECT SUPPORT
   ========================================================= */

(function () {

  "use strict";


  /* =========================================================
     MENU DATA
     FALLBACK DATA
     ========================================================= */

  const MENU_DATA = {

    categories: [

      {
        id: "all",
        name: "All items",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
      },

      {
        id: "salads",
        name: "Salads",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80"
      },

      {
        id: "rice-bowls",
        name: "Rice Bowls",
        image: "https://images.unsplash.com/photo-1512621776951-a57141e2eefd?auto=format&fit=crop&w=400&q=80"
      },

      {
        id: "maggie-mania",
        name: "Maggie Mania",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80"
      },

      {
        id: "drinks",
        name: "Drinks",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&q=80"
      }

    ],


    products: [

      {
        id: 1,
        name: "High Protein Avocado Crunch Bowl",
        category: "salads",

        description:
          "A colourful bowl of fresh vegetables, creamy avocado, protein-rich tofu and our signature herb dressing. Fresh, filling and packed with flavour.",

        price: 299,

        images: [
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=85",
          "https://images.unsplash.com/photo-1512621776951-a57141e2eefd?auto=format&fit=crop&w=700&q=85"
        ],

        badge: {
          text: "Bestseller"
        },

        tags: [
          {
            type: "vegan",
            text: "Vegan",
            icon: "fa-leaf"
          },
          {
            type: "spicy",
            text: "Spicy",
            icon: "fa-pepper-hot"
          },
          {
            type: "high-protein",
            text: "High Protein",
            icon: "fa-dumbbell"
          }
        ],

        featured: {
          todayPick: true
        },

        variants: [
          {
            id: "standard",
            name: "Standard",
            price: 0
          },
          {
            id: "mega",
            name: "Mega Bowl (+50% veg & grain)",
            price: 60
          }
        ],

        relatedProducts: [
          5,
          18,
          29
        ],

        available: true
      },


      {
        id: 2,
        name: "Green Silk Pasta Salad",
        category: "salads",
        description:
          "Served with avocado creamy sauce and serving with green fresh veggies with herb pasta.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 3,
        name: "Crimson Pasta Garden Bowl",
        category: "salads",
        description:
          "Serving with fresh veggies along with fresh pasta and eggless tomato mayo sauce.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1621996346565-e3d5d6281270?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 4,
        name: "Thai Peanuts Buddha Bowl",
        category: "salads",
        description:
          "Fresh veggies along with fresh quinoa and Thai peanut sauce.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 5,
        name: "Basil Pesto Pasta Salad",
        category: "salads",
        description:
          "Fresh penne pasta coated in our signature creamy basil pesto, paired with perfectly stir-fried exotic vegetables for a vibrant, herbaceous bowl that's light, creamy, and packed with flavor.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1621996346565-e3d5d6281270?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 6,
        name: "Veggie Spark Bowl",
        category: "salads",
        description:
          "Fresh mix veggies stir fry with a lemon honey dressing.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 7,
        name: "Corn Carnival Bowl",
        category: "salads",
        description:
          "Serving sweet corns with fresh veggies stir fry in butter along with fresh curd sauce. Subject to Availability.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 8,
        name: "Protein Pop Bowl",
        category: "salads",
        description:
          "Kidney beans with sweet corn, fresh veggies and coriander sauce.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 9,
        name: "Cheesy Veg Burst Salad Bowl",
        category: "salads",
        description:
          "Fresh exotic veggies & paneer cubes layered with creamy melted cheese and a smooth, tangy red sauce.",
        price: 389,
        images: [
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 10,
        name: "Noodle Salad Bowl",
        category: "salads",
        description:
          "Wholesome Aata Maggi noodles tossed in a creamy sauce, paired with a colourful mix of fresh stir-fried veggies for the perfect balance of comfort and crunch.",
        price: 389,
        images: [
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 11,
        name: "Lebanese Tabbouleh Bowl",
        category: "salads",
        description:
          "A wholesome bowl of stir-fried exotic vegetables and nutty wheat bulgur (Daliya), tossed with a refreshing Indian parsley & mint pest for a light, flavorful, and nourishing meal.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 12,
        name: "WakTak Salad Bowl",
        category: "salads",
        description:
          "Rice noodles and exotic mix veggies tossed in our signature dressing for a fresh, crunchy, and delicious Asian salad.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1512621776951-a57141e2eefd?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 13,
        name: "Brocco Crunch Salad",
        category: "salads",
        description:
          "Fresh Broccoli and crunchy mix veggies tossed in a rich, creamy cheesy dressing for the perfect balance of freshness and flavor. A wholesome, crunchy, and satisfying salad bowl made for healthy cravings.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 14,
        name: "K-Crunch Salad Bowl",
        category: "salads",
        description:
          "Crunchy cucumber & onion with mixed veggies, tossed in Indian spices and coated in our signature creamy dressing. Korean-inspired salad bowl.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 15,
        name: "Fiesta Pizza Rice Bowl",
        category: "rice-bowls",
        description:
          "Serving with mexican rice, pico de gallo, nachos mexican herbs and melting cheese.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 16,
        name: "Green Velvet Paneer Bowl",
        category: "rice-bowls",
        description:
          "Fluffy rice, fresh paneer, seasonal veggies, home made avocado green sauce, and aromatic herbs.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 17,
        name: "Pomodoro Veg Rice Bowl",
        category: "rice-bowls",
        description:
          "Freshly cooked rice blended with ripe tomatoes, garden vegetables, natural herbs, light spices cooked in a wholesome red sauce.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 18,
        name: "Mediterranean Hummus Bowl",
        category: "rice-bowls",
        description:
          "Farm fresh veggies with classic hummus, tofu serving with herb rice.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 19,
        name: "One Pot Rice Bowl",
        category: "rice-bowls",
        description:
          "Herb Rice cello fry in garlic sauce and farm fresh veggies.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 20,
        name: "Soya Power Bowl",
        category: "rice-bowls",
        description:
          "Wok-tossed rice with wholesome mixed veggies, protein-rich soya chunks, and aromatic Indian spices.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 21,
        name: "Broccoli Lemon Rice",
        category: "rice-bowls",
        description:
          "Fragrant herb infused rice tossed with stir fried broccoli in butter, fresh lemon juice, aromatic mixed herbs and signature Indian spices for a light yet flavorful bowl.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 22,
        name: "Cheese Chilli Rice Bowl (Ema Datshi)",
        category: "rice-bowls",
        description:
          "A comforting Bhutanese classic featuring fluffy steamed rice paired with a rich, cheesy and creamy gravy infused with fresh green chillies. Warm, mildly spicy and deeply satisfying.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 23,
        name: "Signature Tomato Cheese Bowl",
        category: "rice-bowls",
        description:
          "Herb rice tossed with exotic mixed vegetables in a creamy tomato cheese gravy.",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 24,
        name: "Classic Masala",
        category: "maggie-mania",
        description: "",
        price: 110,
        images: [
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 25,
        name: "Veg Masala",
        category: "maggie-mania",
        description: "",
        price: 149,
        images: [
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 26,
        name: "Veg Butter Masala",
        category: "maggie-mania",
        description: "",
        price: 179,
        images: [
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 27,
        name: "Veg Tadka",
        category: "maggie-mania",
        description: "",
        price: 199,
        images: [
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 28,
        name: "Thukpa Noodle Soup",
        category: "maggie-mania",
        description: "",
        price: 149,
        images: [
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 29,
        name: "Fresh Buttermilk",
        category: "drinks",
        description: "",
        price: 20,
        images: [
          "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 30,
        name: "Coffee Lemonade",
        category: "drinks",
        description: "",
        price: 129,
        images: [
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 31,
        name: "Classic Cold Coffee",
        category: "drinks",
        description: "",
        price: 149,
        images: [
          "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 32,
        name: "Cucu Nana Smoothie",
        category: "drinks",
        description: "",
        price: 149,
        images: [
          "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 33,
        name: "Coffee Banana Smoothie",
        category: "drinks",
        description: "",
        price: 169,
        images: [
          "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      },


      {
        id: 34,
        name: "BanaBerry Bliss Smoothie",
        category: "drinks",
        description: "",
        price: 169,
        images: [
          "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=85"
        ],
        badge: null,
        tags: [],
        featured: {
          todayPick: false
        },
        variants: [],
        relatedProducts: [],
        available: true
      }

    ]

  };


  /* =========================================================
     IMAGE NORMALIZER
     ========================================================= */

  function getImageUrl(image) {

    if (!image) {
      return "";
    }

    /*
     * Normal string URL
     */
    if (typeof image === "string") {
      return image;
    }


    /*
     * API image object
     *
     * Current Worker response:
     *
     * {
     *   id: 123,
     *   key: "probo/products/29/01.webp",
     *   url: "https://probow-assets.ezygodigi.in/...",
     *   sort_order: 0
     * }
     */

    if (typeof image === "object") {

      /*
       * Preferred.
       */
      if (
        typeof image.url === "string" &&
        image.url.trim()
      ) {
        return image.url;
      }


      /*
       * Alternative API naming.
       */
      if (
        typeof image.image_url === "string" &&
        image.image_url.trim()
      ) {
        return image.image_url;
      }


      /*
       * Alternative public URL.
       */
      if (
        typeof image.public_url === "string" &&
        image.public_url.trim()
      ) {
        return image.public_url;
      }


      /*
       * Worker currently exposes `key`.
       */
      if (
        typeof image.key === "string" &&
        image.key.trim()
      ) {

        return buildR2Url(
          image.key
        );

      }


      /*
       * Some API versions may expose storage_key.
       */
      if (
        typeof image.storage_key === "string" &&
        image.storage_key.trim()
      ) {

        return buildR2Url(
          image.storage_key
        );

      }

    }


    return "";
  }


  /* =========================================================
     R2 URL BUILDER
     ========================================================= */

  function buildR2Url(key) {

    if (!key) {
      return "";
    }

    const cleanKey =
      String(key)
        .replace(/^\/+/, "");


    /*
     * If key is already a full URL,
     * don't modify it.
     */

    if (
      cleanKey.startsWith("http://") ||
      cleanKey.startsWith("https://")
    ) {

      return cleanKey;

    }


    return (
      "https://probow-assets.ezygodigi.in/" +
      cleanKey
    );

  }


  /* =========================================================
     NORMALIZE PRODUCT
     ========================================================= */

  function normalizeProduct(product) {

    if (!product) {
      return null;
    }


    /*
     * Clone so we never mutate API response.
     */

    const normalized = {
      ...product
    };


    /*
     * CATEGORY
     *
     * Support:
     *
     * category
     * category_id
     */

    normalized.category =
      product.category ??
      product.category_id ??
      "";


    /*
     * IMAGES
     *
     * Keep image objects intact for future use,
     * but renderer always uses getImageUrl().
     */

    normalized.images =
      Array.isArray(product.images)
        ? product.images
        : [];


    /*
     * Variants:
     *
     * IMPORTANT:
     * Do not invent variants.
     */

    normalized.variants =
      Array.isArray(product.variants)
        ? product.variants
        : [];


    /*
     * Related products:
     *
     * IMPORTANT:
     * Do not invent related products.
     */

    normalized.relatedProducts =
      Array.isArray(product.relatedProducts)
        ? product.relatedProducts
        : [];


    /*
     * Tags
     */

    normalized.tags =
      Array.isArray(product.tags)
        ? product.tags
        : [];


    /*
     * Badge
     */

    if (
      product.badge &&
      typeof product.badge === "object"
    ) {

      normalized.badge =
        product.badge;

    }
    else if (
      product.badge_text
    ) {

      normalized.badge = {
        text: product.badge_text
      };

    }
    else {

      normalized.badge =
        null;

    }


    /*
     * Featured
     */

    normalized.featured = {
      todayPick:
        Boolean(
          product.featured?.todayPick ??
          product.today_pick
        )
    };


    /*
     * Availability
     */

    normalized.available =
      product.available !== false;


    return normalized;

  }


  /* =========================================================
     NORMALIZE CATEGORY
     ========================================================= */

  function normalizeCategory(category) {

    if (!category) {
      return null;
    }


    return {
  ...category,

  id:
    category.id ??
    category.category_id ??
    "",

  name:
    category.name ??
    "",

  image:
    getImageUrl(
      category.image
    ),

  icon:
    category.icon || "fa-utensils",

  sort_order:
    Number(
      category.sort_order ?? 999999
    )

};

  }

/* =========================================================
   DYNAMIC SEO / STRUCTURED DATA
   Generates Menu + MenuSection + Product data
   from the same API data used by the menu renderer.
   ========================================================= */

function updateMenuStructuredData(menu) {

  if (!menu || !Array.isArray(menu.products)) {
    return;
  }

  const products = menu.products || [];
  const categories = menu.categories || [];

  const schemaScript =
    document.getElementById("probow-menu-schema");

  if (!schemaScript) {
    return;
  }

  let schema;

  try {

    schema =
      JSON.parse(
        schemaScript.textContent
      );

  } catch (error) {

    console.error(
      "PROBOW structured data JSON error:",
      error
    );

    return;
  }


  /* =========================================================
     CATEGORY LOOKUP
     ========================================================= */

  const categoryMap =
    new Map(
      categories.map(category => [
        String(category.id),
        category
      ])
    );


  /* =========================================================
     PRODUCT SCHEMA
     ========================================================= */

  const productSchemas = [];


  products
    .filter(product =>
      product &&
      product.available !== false
    )
    .forEach(product => {

      const productId =
        String(product.id);

      const productName =
        String(
          product.name || ""
        ).trim();

      if (!productName) {
        return;
      }


      const category =
        categoryMap.get(
          String(product.category)
        );


      const categoryName =
        category?.name ||
        String(
          product.category || ""
        )
          .split("-")
          .map(word =>
            word
              ? word.charAt(0).toUpperCase() +
                word.slice(1)
              : ""
          )
          .join(" ")
          .trim();


      /*
       * Product image
       */

      const imageUrls =
        Array.isArray(product.images)
          ? product.images
              .map(getImageUrl)
              .filter(Boolean)
          : [];


      /*
       * Selling price
       *
       * Use discounted price when a valid
       * discount exists, otherwise base price.
       */

      const originalPrice =
        Number(
          product.price || 0
        );


      const discountPrice =
        product.discount_price !== null &&
        product.discount_price !== undefined &&
        Number(product.discount_price) > 0 &&
        Number(product.discount_price) < originalPrice
          ? Number(product.discount_price)
          : null;


      const sellingPrice =
        discountPrice !== null
          ? discountPrice
          : originalPrice;


      /*
       * Product URL
       */

      const productUrl =
        "https://probow.in/menu#" +
        encodeURIComponent(
          "product-" + productId
        );


      /*
       * Product object
       */

      const productSchema = {

        "@type": "Product",

        "@id":
          "https://probow.in/menu#product-" +
          productId,

        "name":
          productName,

        "url":
          productUrl,

        "brand": {
          "@type": "Brand",
          "name": "PROBOW"
        },

        "category":
          categoryName || "PROBOW Menu",

        "offers": {

          "@type": "Offer",

          "url":
            productUrl,

          "priceCurrency":
            "INR",

          "price":
            sellingPrice.toFixed(2),

          "availability":
            "https://schema.org/InStock"

        }

      };


      /*
       * Description
       */

      if (
        product.description &&
        String(product.description).trim()
      ) {

        productSchema.description =
          String(
            product.description
          ).trim();

      }


      /*
       * Images
       */

      if (imageUrls.length) {

        productSchema.image =
          imageUrls;

      }


      /*
       * Preserve original price when
       * a genuine discount exists.
       */

      if (
        discountPrice !== null &&
        originalPrice > sellingPrice
      ) {

        productSchema.offers.priceSpecification = {

          "@type":
            "PriceSpecification",

          "price":
            originalPrice.toFixed(2),

          "priceCurrency":
            "INR",

          "valueAddedTaxIncluded":
            true

        };

      }


      productSchemas.push(
        productSchema
      );

    });


  /* =========================================================
     MENU SECTIONS
     ========================================================= */

  const menuSections = [];


  categories
    .filter(category =>
      category &&
      String(category.id) !== "all"
    )
    .sort(
      (a, b) =>
        Number(a.sort_order ?? 999999) -
        Number(b.sort_order ?? 999999)
    )
    .forEach(category => {

      const categoryProducts =
        products.filter(product =>
          product &&
          product.available !== false &&
          String(product.category) ===
            String(category.id)
        );


      if (!categoryProducts.length) {
        return;
      }


      const menuItems =
        categoryProducts.map(product => {

          const productId =
            String(product.id);

          const productSchema =
            productSchemas.find(
              item =>
                item["@id"] ===
                "https://probow.in/menu#product-" +
                productId
            );


          if (!productSchema) {
            return null;
          }


          const menuItem = {

            "@type":
              "MenuItem",

            "name":
              productSchema.name,

            "url":
              productSchema.url

          };


          if (productSchema.description) {

            menuItem.description =
              productSchema.description;

          }


          if (productSchema.image) {

            menuItem.image =
              productSchema.image;

          }


          if (
            productSchema.offers
          ) {

            menuItem.offers = {

              "@type":
                "Offer",

              "priceCurrency":
                "INR",

              "price":
                productSchema
                  .offers
                  .price,

              "availability":
                productSchema
                  .offers
                  .availability,

              "url":
                productSchema
                  .offers
                  .url

            };

          }


          return menuItem;

        })
        .filter(Boolean);


      if (!menuItems.length) {
        return;
      }


      menuSections.push({

        "@type":
          "MenuSection",

        "@id":
          "https://probow.in/menu#section-" +
          encodeURIComponent(
            String(category.id)
          ),

        "name":
          category.name,

        "hasMenuItem":
          menuItems

      });

    });


  /* =========================================================
     MENU OBJECT
     ========================================================= */

  const menuSchema = {

    "@type":
      "Menu",

    "@id":
      "https://probow.in/menu#menu",

    "name":
      "PROBOW Menu",

    "url":
      "https://probow.in/menu",

    "hasMenuSection":
      menuSections

  };


  /* =========================================================
     ITEM LIST
     ========================================================= */

  const itemListSchema = {

    "@type":
      "ItemList",

    "@id":
      "https://probow.in/menu#menu-items",

    "name":
      "PROBOW Menu Items",

    "url":
      "https://probow.in/menu",

    "itemListOrder":
      "https://schema.org/ItemListOrderAscending",

    "numberOfItems":
      productSchemas.length,

    "itemListElement":
      productSchemas.map(
        (product, index) => ({

          "@type":
            "ListItem",

          "position":
            index + 1,

          "name":
            product.name,

          "url":
            product.url,

          "item":
            product

        })
      )

  };


  /* =========================================================
     REBUILD GRAPH
     ========================================================= */

  schema["@graph"] =
    schema["@graph"].filter(
      entry => {

        const id =
          entry &&
          entry["@id"];

        return !(
          id ===
            "https://probow.in/menu#menu" ||

          id ===
            "https://probow.in/menu#menu-items"
        );

      }
    );


  schema["@graph"].push(
    menuSchema,
    itemListSchema
  );


  /*
   * Write updated JSON-LD
   */

  schemaScript.textContent =
    JSON.stringify(
      schema,
      null,
      2
    );


  console.log(
    "PROBOW SEO schema updated:",
    productSchemas.length,
    "products /",
    menuSections.length,
    "categories"
  );

}

  /* =========================================================
     DATA PROVIDER
     ========================================================= */

  const MenuAPI = {

    _menuPromise: null,

    _menuData: null,


    /* =======================================================
       GET COMPLETE MENU
       ======================================================= */

    async getMenu() {

      /*
       * Avoid multiple simultaneous requests.
       *
       * Your page calls getCategories(),
       * getProducts() and getTodayPick().
       *
       * Without this promise cache,
       * all three could call /api/menu.
       */

      if (this._menuData) {
        return this._menuData;
      }


      if (this._menuPromise) {
        return this._menuPromise;
      }


      this._menuPromise =
        (async () => {

          try {

            const response =
              await window.ProbowApi.fetchMenu();


            if (!response.ok) {

              throw new Error(
                `Menu API returned ${response.status}`
              );

            }


            const data =
              await response.json();


            if (
              !data ||
              !Array.isArray(
                data.products
              )
            ) {

              throw new Error(
                "Invalid menu API response"
              );

            }


            /*
             * Normalize products.
             */

            data.products =
              data.products
                .map(
                  normalizeProduct
                )
                .filter(Boolean);


            /*
             * Normalize categories.
             */

            if (
              Array.isArray(
                data.categories
              )
            ) {

              data.categories =
                data.categories
                  .map(
                    normalizeCategory
                  )
                  .filter(Boolean);

            }
            else {

              data.categories = [];

            }


            this._menuData =
              data;


            return data;

          }


          catch (error) {

            console.error(
              "Menu API failed:",
              error
            );


            console.warn(
              "Using local fallback menu data."
            );


            /*
             * Clone fallback data.
             */

            const fallback = {
              ...MENU_DATA,

              categories:
                MENU_DATA.categories.map(
                  category =>
                    normalizeCategory(
                      category
                    )
                ),

              products:
                MENU_DATA.products.map(
                  product =>
                    normalizeProduct(
                      product
                    )
                )
            };


            this._menuData =
              fallback;


            return fallback;

          }

        })();


      try {

        return await this._menuPromise;

      }
      finally {

        this._menuPromise =
          null;

      }

    },


    /* =======================================================
       PRODUCTS
       ======================================================= */

    async getProducts() {

      const menu =
        await this.getMenu();


      return (
        menu.products || []
      );

    },


    /* =======================================================
       CATEGORIES
       ======================================================= */

    async getCategories() {

      const menu =
        await this.getMenu();


      if (
        Array.isArray(
          menu.categories
        ) &&
        menu.categories.length
      ) {

        return menu.categories;

      }


      const products =
        menu.products || [];


      const categoryIds =
        [
          ...new Set(
            products
              .map(
                product =>
                  product.category
              )
              .filter(Boolean)
          )
        ];


      return [

        {
          id: "all",
          name: "All items",
          image:
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
        },

        ...categoryIds.map(
          categoryId => ({

            id: categoryId,

            name:
              categoryId
                .split("-")
                .map(
                  word =>
                    word.charAt(0).toUpperCase() +
                    word.slice(1)
                )
                .join(" "),

            image: "",

            icon: "fa-utensils"

          })
        )

      ];

    },


    /* =======================================================
       SINGLE PRODUCT
       ======================================================= */

    async getProduct(id) {

      const products =
        await this.getProducts();


      return products.find(
        product =>
          String(product.id) ===
          String(id)
      );

    },


    /* =======================================================
       TODAY'S PICK
       ======================================================= */

    async getTodayPick() {

      const products =
        await this.getProducts();


      return products.find(
        product =>
          product.featured &&
          product.featured.todayPick === true
      );

    }

  };


  /* =========================================================
     CATEGORY RENDERER
     ========================================================= */

  async function renderMenuCategories() {

    const container =
      document.getElementById(
        "menu-categories"
      );


    if (!container) {
      return;
    }


    const categories =
      await MenuAPI.getCategories();


    container.innerHTML =
      categories
        .map(
          (category, index) => {

            const imageUrl =
              getImageUrl(
                category.image
              );


            return `

              <button
                class="tab-btn ${index === 0 ? "active" : ""}"
                type="button"
                data-category="${escapeHTML(category.id)}"
                onclick="filterMenu('${escapeJS(category.id)}', this)"
              >

                ${
                  imageUrl

                    ? `

                      <img
                        src="${escapeHTML(imageUrl)}"
                        alt=""
                        class="category-icon-image"
                        loading="lazy"
                      >

                    `

                    : `

                      <i
                        class="fa-solid ${escapeHTML(
                          category.icon ||
                          "fa-utensils"
                        )}"
                        aria-hidden="true">
                      </i>

                    `
                }

                <span>
                  ${escapeHTML(category.name)}
                </span>

              </button>

            `;

          }
        )
        .join("");

  }


function renderProductPrice(product) {

    const price =
        Number(product.price || 0);

    const discountPrice =
        product.discount_price !== null &&
        product.discount_price !== undefined
            ? Number(product.discount_price)
            : null;

    if (
        product.has_discount &&
        discountPrice > 0 &&
        discountPrice < price
    ) {

        return `
            <span class="price-sale">
                ₹${discountPrice}
            </span>

            <span class="price-original">
                ₹${price}
            </span>

            <span class="price-discount">
                ${product.discount_percent}% OFF
            </span>
        `;

    }

    return `
        <span class="price-sale">
            ₹${price}
        </span>
    `;
}

  /* =========================================================
     MENU CARD
     ========================================================= */

  function createMenuCard(product) {

    product =
      normalizeProduct(product);


    if (!product) {
      return "";
    }


    const carouselId =
      `carousel-${product.id}`;


    const images =
      Array.isArray(product.images)
        ? product.images
        : [];


    /*
     * Convert API image objects
     * to usable URLs.
     */

    const imageUrls =
      images
        .map(getImageUrl)
        .filter(Boolean);


    /* =======================================================
       BADGE
       ======================================================= */

    const badgeHTML =
      product.badge &&
      product.badge.text

        ? `

          <span class="card-badge">
            ${escapeHTML(
              product.badge.text
            )}
          </span>

        `

        : "";


    /* =======================================================
       IMAGES
       ======================================================= */

    const imageHTML =
      imageUrls
        .map(
          (image, index) => {

            return `

<div class="image-loading">
  <div class="image-shimmer"></div>

  <img
    src="${escapeHTML(image)}"
    alt="${escapeHTML(product.name)} ${index + 1}"
    loading="lazy"
    onload="this.classList.add('loaded')"
    onerror="this.classList.add('loaded')"
  >
</div>

            `;

          }
        )
        .join("");


    /*
     * If API has no image,
     * create a harmless placeholder.
     */

    const finalImageHTML =
      imageHTML ||

      `

        <div
          class="card-image-placeholder"
          aria-label="${escapeHTML(product.name)}"
        >
          <i
            class="fa-solid fa-bowl-food"
            aria-hidden="true">
          </i>
        </div>

      `;


    /* =======================================================
       CAROUSEL DOTS
       ======================================================= */

    const dotsHTML =
      imageUrls
        .map(
          (image, index) => {

            return `

              <span
                class="dot ${index === 0 ? "active" : ""}"
                onclick="setCardSlide(
                  '${escapeJS(carouselId)}',
                  ${index}
                )">
              </span>

            `;

          }
        )
        .join("");


    /*
     * Only show carousel navigation
     * when there are multiple images.
     */

    const carouselControls =
      imageUrls.length > 1

        ? `

          <button
            class="card-carousel-btn prev"
            type="button"
            onclick="moveCardSlide(
              '${escapeJS(carouselId)}',
              -1
            )"
            aria-label="Previous image"
          >

            <i class="fa-solid fa-chevron-left"></i>

          </button>


          <button
            class="card-carousel-btn next"
            type="button"
            onclick="moveCardSlide(
              '${escapeJS(carouselId)}',
              1
            )"
            aria-label="Next image"
          >

            <i class="fa-solid fa-chevron-right"></i>

          </button>

        `

        : "";


    /* =======================================================
       FOOD TAGS
       ======================================================= */

    const tagsHTML =
      (product.tags || [])
        .map(
          tag => {

            return `

              <span
                class="food-tag tag-${escapeHTML(
                  tag.type || ""
                )}">

                ${
                  tag.icon

                    ? `

                      <i
                        class="fa-solid ${escapeHTML(
                          tag.icon
                        )}"
                        aria-hidden="true">
                      </i>

                    `

                    : ""
                }

                ${escapeHTML(
                  tag.text ||
                  tag.name ||
                  ""
                )}

              </span>

            `;

          }
        )
        .join("");


    /* =======================================================
       CARD
       ======================================================= */

    return `

      <div
        class="card menu-item"
        data-category="${escapeHTML(
          product.category
        )}"
      >

        <!-- IMAGE -->

        <div
          class="card-img-carousel"
          id="${escapeHTML(carouselId)}"
        >

          ${badgeHTML}


          <div
            class="carousel-slides"
            style="transform: translateX(0%);"
          >

            ${finalImageHTML}

          </div>


          ${carouselControls}


          ${
            imageUrls.length > 1

              ? `

                <div class="carousel-dots">

                  ${dotsHTML}

                </div>

              `

              : ""
          }

        </div>


        <!-- BODY -->

        <div class="card-body">

          <div class="card-content-top">


            <!-- TAGS -->

            ${
              tagsHTML

                ? `

                  <div class="card-tags">
                    ${tagsHTML}
                  </div>

                `

                : ""
            }


            <!-- TITLE -->

            <h3
              class="card-title"
              onclick="openMenuProduct(
                ${Number(product.id)}
              )"
            >

              ${escapeHTML(
                product.name
              )}

            </h3>


            <!-- DESCRIPTION -->

            ${
              product.description

                ? `

                  <p
                    class="card-desc"
                    id="desc-${Number(product.id)}"
                  >

                    ${escapeHTML(
                      product.description
                    )}

                  </p>

                `

                : ""
            }


            <!-- READ MORE -->

            ${
              product.description

                ? `

                  <button
                    class="read-more-link"
                    type="button"
                    onclick="openMenuProduct(
                      ${Number(product.id)}
                    )"
                  >
                    Read more
                  </button>

                `

                : ""
            }


          </div>


          <!-- FOOTER -->

          <div class="card-footer">


<div
    class="card-price"
    id="price-${product.id}">

    ${renderProductPrice(product)}

</div>


            <div class="card-action-wrap">


              <!-- QUANTITY -->

              <div class="qty-picker">

                <button
                  class="qty-btn"
                  type="button"
                  onclick="updateQty(
                    ${Number(product.id)},
                    -1,
                    ${Number(product.price || 0)}
                  )"
                >
                  −
                </button>


                <span
                  class="qty-val"
                  id="qty-${Number(product.id)}"
                >
                  1
                </span>


                <button
                  class="qty-btn"
                  type="button"
                  onclick="updateQty(
                    ${Number(product.id)},
                    1,
                    ${Number(product.price || 0)}
                  )"
                >
                  +
                </button>

              </div>


<!-- ADD / CUSTOMIZE -->

${
  Array.isArray(product.variants) &&
  product.variants.length > 0

    ? `
      <button
        class="btn-customize"
        type="button"
        onclick="openMenuProduct(
          ${Number(product.id)}
        )"
      >
        Customize
      </button>
    `

: `
  <button
    class="btn-customize"
    type="button"
    onclick="openMenuProduct(
      ${Number(product.id)}
    )"
  >
    Add
  </button>
`
}


            </div>


          </div>


        </div>


      </div>

    `;

  }


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


function renderProductPrice(product) {

  const originalPrice =
    Number(product?.price || 0);

  const sellingPrice =
    getProductSellingPrice(product);

  if (
    sellingPrice < originalPrice
  ) {

    const discountPercent =
      Number(
        product.discount_percent ||
        Math.round(
          ((originalPrice - sellingPrice) /
            originalPrice) * 100
        )
      );

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
     RENDER PRODUCTS
     ========================================================= */

  async function renderMenuProducts(products) {

    const container =
      document.getElementById(
        "menu-items-container"
      );


    if (!container) {
      return;
    }


    const safeProducts =
      Array.isArray(products)
        ? products
        : [];


    container.innerHTML =
      safeProducts

        .filter(
          product =>
            product &&
            product.available !== false
        )

        .map(
          createMenuCard
        )

        .join("");


    /*
     * Existing carousel JS.
     */

    if (
      typeof initialiseCardCarousels ===
      "function"
    ) {

      initialiseCardCarousels();

    }

  }


  /* =========================================================
     FILTER MENU
     ========================================================= */

  window.filterMenu =
    async function (
      category,
      button
    ) {


      /*
       * ACTIVE CATEGORY
       */

      document
        .querySelectorAll(
          ".menu-tabs .tab-btn"
        )
        .forEach(
          btn => {

            btn.classList.remove(
              "active"
            );

          }
        );


      if (button) {

        button.classList.add(
          "active"
        );

      }


      /*
       * GET PRODUCTS
       */

      const products =
        await MenuAPI.getProducts();


      /*
       * FILTER
       */

const categories =
  await MenuAPI.getCategories();

const filteredProducts =
  category === "all"

    ? [...products].sort((a, b) => {

        const categoryA =
          categories.find(
            cat =>
              String(cat.id) ===
              String(a.category)
          );

        const categoryB =
          categories.find(
            cat =>
              String(cat.id) ===
              String(b.category)
          );

        const categoryOrderA =
          Number(
            categoryA?.sort_order ?? 999999
          );

        const categoryOrderB =
          Number(
            categoryB?.sort_order ?? 999999
          );

        /*
         * First sort by category sort_order.
         * Product order within each category
         * is preserved from the API.
         */
        return (
          categoryOrderA -
          categoryOrderB
        );

      })

    : products.filter(
        product =>
          String(
            product.category
          ) ===
          String(category)
      );

      /*
       * RENDER
       */

      await renderMenuProducts(
        filteredProducts
      );


      /*
       * JUMP TO MENU
       */

      const menuSection =
        document.getElementById(
          "menu-list-section"
        );


      if (menuSection) {

        const header =
          document.querySelector(
            "header"
          );


        const controls =
          document.querySelector(
            ".menu-page-controls"
          );


        const headerHeight =
          header

            ? header.getBoundingClientRect()
                .height

            : 0;


        const controlsHeight =
          controls

            ? controls.getBoundingClientRect()
                .height

            : 0;


        const gap = 12;


        const menuTop =
          menuSection.getBoundingClientRect()
            .top +
          window.scrollY;


        const finalPosition =
          menuTop -
          headerHeight -
          controlsHeight -
          gap;


        window.scrollTo({

          top:
            Math.max(
              0,
              finalPosition
            ),

          behavior:
            "smooth"

        });

      }

    };


  let todaysPickProducts = [];
let todaysPickIndex = 0;


function renderTodayPick(products) {

  const section =
    document.getElementById("todaysPickSection");

  const track =
    document.getElementById("todaysPickTrack");

  const dots =
    document.getElementById("todaysPickDots");


  if (!section || !track || !dots) {
    return;
  }


  // Get ALL Today's Picks
  todaysPickProducts =
    products.filter(product =>
      product &&
      product.available !== false &&
      product.featured &&
      product.featured.todayPick === true
    );


  // Nothing found
  if (todaysPickProducts.length === 0) {
    section.style.display = "none";
    return;
  }


  section.style.display = "";


  // Create slides
  track.innerHTML =
    todaysPickProducts.map(product => {

      const image =
        product.images?.[0]
          ? getImageUrl(product.images[0])
          : "";


      return `
        <article class="todays-pick-slide">

          <div class="todays-pick-card">

            <div class="todays-pick-img-wrap">

              <img
                src="${escapeHTML(image)}"
                alt="${escapeHTML(product.name)}"
              >

            </div>


            <div class="todays-pick-content">

              <span class="eyebrow">
                Handpicked for you today
              </span>


              <h2>
                ${escapeHTML(product.name)}
              </h2>


              <p>
                ${
                  product.description
                    ? escapeHTML(product.description)
                    : ""
                }
              </p>


              <div class="todays-pick-price">
                ${renderProductPrice(product)}
              </div>


              <div class="todays-pick-action">

                <button
                  type="button"
                  class="btn btn-customize"
                  onclick="openMenuProduct(${Number(product.id)})"
                >
                  ${
                    Array.isArray(product.variants) &&
                    product.variants.length
                      ? "Customize"
                      : "Order Today's Pick"
                  }
                </button>

              </div>

            </div>

          </div>

        </article>
      `;

    }).join("");


  // Create dots
  dots.innerHTML =
    todaysPickProducts.map((_, index) => `
      <button
        type="button"
        class="todays-pick-dot ${
          index === 0 ? "active" : ""
        }"
        onclick="goToTodaysPick(${index})"
      ></button>
    `).join("");


  todaysPickIndex = 0;

  updateTodaysPick();

}

function updateTodaysPick() {

  const track =
    document.getElementById("todaysPickTrack");


  if (!track) {
    return;
  }


  track.style.transform =
    `translateX(-${todaysPickIndex * 100}%)`;


  document
    .querySelectorAll(".todays-pick-dot")
    .forEach((dot, index) => {

      dot.classList.toggle(
        "active",
        index === todaysPickIndex
      );

    });

}


function goToTodaysPick(index) {

  todaysPickIndex = index;

  updateTodaysPick();

}


function nextTodaysPick() {

  if (todaysPickProducts.length <= 1) {
    return;
  }


  todaysPickIndex++;

  if (
    todaysPickIndex >=
    todaysPickProducts.length
  ) {
    todaysPickIndex = 0;
  }


  updateTodaysPick();

}


function previousTodaysPick() {

  if (todaysPickProducts.length <= 1) {
    return;
  }


  todaysPickIndex--;

  if (todaysPickIndex < 0) {
    todaysPickIndex =
      todaysPickProducts.length - 1;
  }


  updateTodaysPick();

}

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const prev =
      document.getElementById(
        "todaysPickPrev"
      );

    const next =
      document.getElementById(
        "todaysPickNext"
      );


    if (prev) {
      prev.onclick =
        previousTodaysPick;
    }


    if (next) {
      next.onclick =
        nextTodaysPick;
    }

  }
);


  /* =========================================================
     OPEN PRODUCT
     ========================================================= */

  window.openMenuProduct =
    async function (id) {

      const product =
        await MenuAPI.getProduct(id);


      if (!product) {

        console.warn(
          "Product not found:",
          id
        );

        return;

      }


      /*
       * IMPORTANT
       *
       * We pass the COMPLETE normalized
       * product object to your existing modal.
       *
       * Therefore:
       *
       * variants
       * relatedProducts
       * tags
       * badge
       * images
       *
       * are all available.
       */

      if (
        typeof openModal ===
        "function"
      ) {

        openModal(
          product.name,
          product.price,
          getImageUrl(
            product.images?.[0]
          ),
          product.description || "",
          product
        );

      }

    };


  /* =========================================================
     HTML ESCAPE
     ========================================================= */

  function escapeHTML(value) {

    return String(
      value ?? ""
    )

      .replace(
        /&/g,
        "&amp;"
      )

      .replace(
        /</g,
        "&lt;"
      )

      .replace(
        />/g,
        "&gt;"
      )

      .replace(
        /"/g,
        "&quot;"
      )

      .replace(
        /'/g,
        "&#039;"
      );

  }


  /* =========================================================
     JAVASCRIPT STRING ESCAPE
     ========================================================= */

  function escapeJS(value) {

    return String(
      value ?? ""
    )

      .replace(
        /\\/g,
        "\\\\"
      )

      .replace(
        /'/g,
        "\\'"
      )

      .replace(
        /"/g,
        '\\"'
      )

      .replace(
        /\r/g,
        "\\r"
      )

      .replace(
        /\n/g,
        "\\n"
      );

  }


function sortProductsByCategoryOrder(
  products,
  categories
) {
  const categoryOrder =
    new Map(
      categories.map(category => [
        String(category.id),
        Number(
          category.sort_order ?? 999999
        )
      ])
    );

  return [...products].sort(
    (a, b) => {
      const orderA =
        categoryOrder.get(
          String(a.category)
        ) ?? 999999;

      const orderB =
        categoryOrder.get(
          String(b.category)
        ) ?? 999999;

      return orderA - orderB;
    }
  );
}

  /* =========================================================
     INITIALISE MENU
     ========================================================= */

  /* =========================================================
   INITIALISE MENU
   ========================================================= */

async function initialiseMenu() {

  const menuContainer =
    document.getElementById(
      "menu-items-container"
    );

  if (!menuContainer) {
    return;
  }


  /*
   * 1. Load categories
   */

  await renderMenuCategories();


  /*
   * 2. Get complete menu
   *
   * This is the SAME cached API response
   * used by products/categories.
   */

  const menu =
    await MenuAPI.getMenu();


  const products =
    menu.products || [];


  const categories =
    menu.categories || [];


  /*
   * 3. Generate SEO structured data
   *
   * Uses the exact same products,
   * descriptions, prices, images,
   * categories and availability
   * used by the visible menu.
   */

  updateMenuStructuredData(
    menu
  );


  /*
   * 4. Sort products for display
   */

  const allProducts =
    sortProductsByCategoryOrder(
      products,
      categories
    );


  /*
   * 5. Render products
   */

  await renderMenuProducts(
    allProducts
  );


  /*
   * 6. Today's Picks
   */

  renderTodayPick(
    products
  );

}
  /* =========================================================
     START
     ========================================================= */

  document.addEventListener(
    "DOMContentLoaded",
    initialiseMenu
  );


  /* =========================================================
     EXPOSE API
     ========================================================= */

  window.MenuAPI =
    MenuAPI;


  /* =========================================================
     EXPOSE IMAGE NORMALIZER
     Useful if another page needs it.
     ========================================================= */

  window.getProbowImageUrl =
    getImageUrl;


})();


/* =========================================================
   PROBOW MENU
   STICKY SEARCH + CATEGORY CONTROLS
   ========================================================= */

(function () {

  "use strict";


  function initialiseStickyControls() {

    const controls =
      document.querySelector(
        ".menu-page-controls"
      );


    if (!controls) {
      return;
    }


    /*
     * Prevent duplicate initialisation.
     */

    if (
      controls.dataset.stickyInitialised ===
      "true"
    ) {

      return;

    }


    controls.dataset.stickyInitialised =
      "true";


    /*
     * Placeholder prevents page jump.
     */

    const placeholder =
      document.createElement(
        "div"
      );


    placeholder.className =
      "menu-controls-placeholder";


    controls.parentNode.insertBefore(
      placeholder,
      controls
    );


    let controlsTop = 0;


    /* =====================================================
       UPDATE ORIGINAL POSITION
       ===================================================== */

    function updateControlsPosition() {

      const header =
        document.querySelector(
          "header"
        );


      const headerHeight =
        header

          ? header.getBoundingClientRect()
              .height

          : 0;


      const wasFixed =
        controls.classList.contains(
          "menu-controls-fixed"
        );


      /*
       * Temporarily return to normal
       * document flow.
       */

      if (wasFixed) {

        controls.classList.remove(
          "menu-controls-fixed"
        );


        placeholder.classList.remove(
          "active"
        );

      }


      controlsTop =
        controls.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;


      /*
       * Restore fixed state.
       */

      if (wasFixed) {

        controls.classList.add(
          "menu-controls-fixed"
        );


        placeholder.classList.add(
          "active"
        );

      }

    }


    /* =====================================================
       HANDLE SCROLL
       ===================================================== */

    function handleScroll() {

      const header =
        document.querySelector(
          "header"
        );


      const headerHeight =
        header

          ? header.getBoundingClientRect()
              .height

          : 0;


      const shouldStick =
        window.scrollY >= controlsTop;


      if (shouldStick) {


        if (
          !controls.classList.contains(
            "menu-controls-fixed"
          )
        ) {


          /*
           * Preserve exact height.
           */

          placeholder.style.height =
            controls.offsetHeight +
            "px";


          placeholder.classList.add(
            "active"
          );


          controls.classList.add(
            "menu-controls-fixed"
          );


          /*
           * Position directly below header.
           */

          controls.style.top =
            headerHeight +
            "px";

        }

      }


      else {


        if (
          controls.classList.contains(
            "menu-controls-fixed"
          )
        ) {


          controls.classList.remove(
            "menu-controls-fixed"
          );


          controls.style.top =
            "";


          placeholder.classList.remove(
            "active"
          );


          placeholder.style.height =
            "";

        }

      }

    }


    /* =====================================================
       INITIALISE
       ===================================================== */

    function initialise() {

      updateControlsPosition();

      handleScroll();

    }


    window.addEventListener(
      "load",
      initialise
    );


    window.addEventListener(
      "resize",
      function () {

        updateControlsPosition();

        handleScroll();

      }
    );


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true
      }
    );


    initialise();

  }


  /*
   * Run after DOM exists.
   */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initialiseStickyControls
    );

  }

  else {

    initialiseStickyControls();

  }


})();