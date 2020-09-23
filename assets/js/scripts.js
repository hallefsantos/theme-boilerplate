
const menuHamburguer = document.getElementById('header-hamburger'),
      closeHamburguer = document.getElementById('menu-close'),
      menu = document.getElementById('menu-wrapper');


menuHamburguer.addEventListener('click', openCloseMenu);
closeHamburguer.addEventListener('click', openCloseMenu);

function openCloseMenu() {
  menu.classList.toggle('active');
}

var swiper = new Swiper('.proativo__slide.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.proativo_swiper-button-next',
    prevEl: '.proativo_swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

 var swiper2 = new Swiper('.solucao__slide', {
  slidesPerView: 1,
  spaceBetween: 35,
  loop: true,
  navigation: {
    nextEl: '.solucao_swiper-button-next',
    prevEl: '.solucao_swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  }
});

 var swiper3 = new Swiper('.aprova__slide', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.aprova_swiper-button-next',
    prevEl: '.aprova_swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  }
});