$(document).ready(function(){
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
});

