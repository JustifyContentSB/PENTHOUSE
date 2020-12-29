const villa = document.querySelectorAll('.villa__list');
for(let i = 0; i < villa.length; i++) {
  let villaSwiper = new Swiper(villa[i], {
    slidesPerView: 'auto',
    spaceBetween: 2,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  }); 
}