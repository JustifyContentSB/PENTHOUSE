const penthouse = document.querySelector('.penthouse');
let penthouseSwiper = new Swiper(penthouse, {
  slidesPerView: 'auto',
  spaceBetween: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});