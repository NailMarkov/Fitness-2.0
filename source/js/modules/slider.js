export const initSliderCoaches = () => {
  const sliderCoaches = document.querySelector('[data-slider="coaches"]');
  const swiper = new window.Swiper(sliderCoaches, {
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

  return swiper;
};

export const initSliderReviews = () => {
  const sliderReviews = document.querySelector('[data-slider="reviews"]');
  const swiperReviews = new window.Swiper(sliderReviews, {
    navigation: {
      prevEl: document.querySelector('[data-prev="reviews"]'),
      nextEl: document.querySelector('[data-next="reviews"]'),
    },
  });

  return swiperReviews;
};

