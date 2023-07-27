export const initSliderCoaches = () => {
  const sliderElement = document.querySelector('[data-slider="coaches"]');
  const swiperCoaches = new window.Swiper(sliderElement, {
    loop: true,
    navigation: {
      prevEl: document.querySelector('[data-prev="coaches"]'),
      nextEl: document.querySelector('[data-next="coaches"]'),
    },
    breakpoints: {
      320: {
        initialSlide: 2,
        slidesPerView: 1,
      },
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

  return swiperCoaches;
};

export const initSliderReviews = () => {
  const sliderElement = document.querySelector('[data-slider="reviews"]');
  const swiperReviews = new window.Swiper(sliderElement, {
    navigation: {
      prevEl: document.querySelector('[data-prev="reviews"]'),
      nextEl: document.querySelector('[data-next="reviews"]'),
    },
  });

  return swiperReviews;
};
