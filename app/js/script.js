$(document).ready(function(){
	//NAV 
	$(document).ready(function(){
		$('.nav__toggle').on('click', function(event){
			event.preventDefault();
			$(this).find('.nav__toggle-icon').toggleClass("open");
			$('.nav__inner').toggleClass('visible');
			$('body').toggleClass('no-scroll');
			$('.overlay').toggleClass('visible');
		});
		$('.overlay').on('click', function(){
			$('.nav__toggle-icon').toggleClass("open");
			$('.nav__inner').toggleClass('visible');
			$(this).toggleClass('visible');
			$('body').toggleClass('no-scroll');
		});
	})

	//SWIPER
	const penthouse = document.querySelector('.penthouse');
	let penthouseSwiper = new Swiper(penthouse, {
      slidesPerView: 'auto',
      spaceBetween: 2
    });

    const house = document.querySelectorAll('.house__list');
    for(let i = 0; i < house.length; i++) {
    	let houseSwiper = new Swiper(house[i], {
	      slidesPerView: 'auto',
	      spaceBetween: 2
	    });
    }
});