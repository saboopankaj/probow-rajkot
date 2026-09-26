/* =========================================================
   PROBOW — PRODUCT IMAGE CAROUSEL
   Shared by Home / Menu / Search / Category pages
   ========================================================= */

(function () {

  const cardSlidesState = {};


  function initProductCarousels() {

    document
      .querySelectorAll('.card-img-carousel')
      .forEach(carousel => {

        const id = carousel.id;

        if (!id) return;

        if (typeof cardSlidesState[id] !== 'number') {
          cardSlidesState[id] = 0;
        }

        updateCardCarousel(id);

      });

  }


  function getSlides(carousel) {

    if (!carousel) return [];

    return carousel.querySelectorAll(
      '.carousel-slides img'
    );

  }


  function updateCardCarousel(carouselId) {

    const carousel =
      document.getElementById(carouselId);

    if (!carousel) return;

    const track =
      carousel.querySelector('.carousel-slides');

    const dots =
      carousel.querySelectorAll('.dot');

    if (!track) return;

    const slides = getSlides(carousel);

    const total = slides.length;

    if (!total) return;

    let index =
      cardSlidesState[carouselId] || 0;

    if (index >= total) index = 0;
    if (index < 0) index = total - 1;

    cardSlidesState[carouselId] = index;

    track.style.transform =
      `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {

      dot.classList.toggle(
        'active',
        i === index
      );

    });

  }


  function moveCardSlide(carouselId, direction) {

    const carousel =
      document.getElementById(carouselId);

    if (!carousel) return;

    const slides = getSlides(carousel);

    const total = slides.length;

    if (!total) return;

    let current =
      cardSlidesState[carouselId] || 0;

    current =
      (current + direction + total) % total;

    cardSlidesState[carouselId] = current;

    updateCardCarousel(carouselId);

  }


  function setCardSlide(carouselId, index) {

    cardSlidesState[carouselId] =
      Number(index) || 0;

    updateCardCarousel(carouselId);

  }


  window.moveCardSlide = moveCardSlide;
  window.setCardSlide = setCardSlide;
  window.updateCardCarousel = updateCardCarousel;

  document.addEventListener(
    'DOMContentLoaded',
    initProductCarousels
  );

})();