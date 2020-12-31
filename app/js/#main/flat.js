const flat = document.querySelectorAll('.flat__list');
for(let i = 0; i < flat.length; i++) {
  let flatSwiper = new Swiper(flat[i], {
    slidesPerView: 'auto',
    spaceBetween: 2,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  }); 
}

let galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 'auto',
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});

let galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 0,
	slidesPerView: 'auto',
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs
	}
});