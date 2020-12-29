const penthouse = document.querySelector('.penthouse');
let penthouseSwiper = new Swiper(penthouse, {
  slidesPerView: 'auto',
  spaceBetween: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const house = document.querySelectorAll('.house__list');
for(let i = 0; i < house.length; i++) {
  let houseSwiper = new Swiper(house[i], {
    slidesPerView: 'auto',
    spaceBetween: 2,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  }); 
}

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
