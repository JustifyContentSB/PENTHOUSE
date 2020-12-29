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