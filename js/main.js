const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // autoHeight: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--right',
    prevEl: '.slider-button--left',
  },

keyboard: {
  enabled: true,
  onlyInViewport: true,
  pageUpDown: true,
},
});