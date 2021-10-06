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


$(function(){
if ($(window).width() > 991) {
$('.newsletter').parallax({imageSrc: 'img/newsletter-bg.jpg',
  speed: 0.6,
  })
}
else {
  $('.newsletter').parallax({imageSrc: 'img/newsletter-bg.jpg',
  speed: 0.0,
  })
}


var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function () {
  console.log("клик по кнопке меню");
  document.querySelector(".navbar-menu").classList.toggle('navbar-menu--visible');
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal)

function openModal(){
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
}

  $(document).on('keydown', function (e) {
    if (e.keyCode == 27) {
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });


function closeModal(event){
  event.preventDefault();
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
}

$('.form').each(function(){
$(this).validate({
  errorClass: "error",
  messages: {
    name: {
      required: "Please specify your name",
      name: "Name must be at least 2 letters"
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
      required: "We need your phone number for verification",
    },
    subscribe: {
      required: "We need your email address to contact you",
      subscribe: "Your email address must be in the format of name@domain.com"
    },
  },
});
});

  $('[type="tel"]').mask("+7 (000) 000-0000");

  AOS.init({disable: 'mobile'});
});