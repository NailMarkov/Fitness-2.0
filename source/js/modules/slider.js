export const initSlider = () => {
  const slider = document.querySelector('[data-slider]');
  const swiper = new window.Swiper(slider, {
    navigation: {
      prevEl: document.querySelector('[data-prev]'),
      nextEl: document.querySelector('[data-next]'),
    },
    breakpoints: {
      768: {
        initialSlide: 2,
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  return swiper;
};
