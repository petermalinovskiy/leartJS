$(document).ready(function () {

  // свайпер видео
  var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      },
 
      // when window width is >= 992px
      992: {
        slidesPerView: 2
      }
    }
  })

});