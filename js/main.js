const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  effect: "coverflow",
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--right',
    prevEl: '.hotel-slider__button--left',
  },

keyboard: {
  enabled: true,
  onlyInViewport: true,
  pageUpDown: true,
},
});


const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

keyboard: {
  enabled: true,
  onlyInViewport: true,
  pageUpDown: true,
},
});

