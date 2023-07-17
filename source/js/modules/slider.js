export const initSlider = () => {
  const slider = document.querySelector('[data-slider]');
  const swiper = new window.Swiper(slider, {
    slidesPerView: 4,
    spaceBetween: 50,
    wrapperClass: 'swiper-wrapper',
  });

  return swiper;
};
