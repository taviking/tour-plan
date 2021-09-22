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

ymaps.ready(init);
    function init () {
    var myMap = new ymaps.Map("map", {
            center: [34.81795729233179, 33.601589198556155],
            zoom: 13
        }, {
        }),
      }