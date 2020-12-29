const gallery = document.querySelectorAll('.gallery__list');
for(let i = 0; i < gallery.length; i++) {
  let gallerySwiper = new Swiper(gallery[i], {
    slidesPerView: 'auto',
    spaceBetween: 2,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    breakpoints: { 
      1440: {
        spaceBetween: 9,
      }
    }
  }); 
}