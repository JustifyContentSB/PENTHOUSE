const mansion = document.querySelector('.mansion-swiper');
let mansionSwiper = new Swiper(mansion, {
  slidesPerView: 'auto',
  spaceBetween: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
  	1366: {
  		slidesPerView: 1,
  		spaceBetween: 200
  	},
  },
});

let mansionToggle = document.querySelectorAll('.mansion__img');
let mansionClose = document.querySelector('.mansion-swiper__close');

for(let i = 0; i < mansionToggle.length; i++) {
	mansionToggle[i].addEventListener('click', function(e) {
		e.preventDefault();
		mansion.classList.add('visible');
		overlayModal.classList.add('visible');
		body.classList.add('no-scroll');
	});
}

overlayModal.addEventListener('click', function() {
	mansion.classList.remove('visible');
	overlayModal.classList.remove('visible');
	body.classList.remove('no-scroll');
});

mansionClose.addEventListener('click', function(e) {
	e.preventDefault();
	mansion.classList.remove('visible');
	overlayModal.classList.remove('visible');
	body.classList.remove('no-scroll');
});