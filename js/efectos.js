$(document).ready(function (){

// ----- ----- EFECTO MENÚ ----- ----- //

	$('.menu a').each(function (index, elemento){
		$(this).css({
			'top': '-200px'
		})

		$(this).animate({
			top: '0'
		}, 2000 + (index * 500));
	});

// ------ ------ EFECTO HEADER ----- ----- //

	if( $(window).width() > 800){
		$('header .textos').css({
			opacity: 0, 
			marginTop: 0
		});	

		$('header .textos').animate({
			opacity: 1, 
			marginTop: '-52px' 
		}, 1500);	
	}

// ----- ----- Scroll Elementos Menú ----- ------ //
	
	var acercaDe = $('#acerca-de').offset().top,
		menu = $('#comidas').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;

	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe - 90
		}, 500);
	});

	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu 
		}, 500);
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria
		}, 500);
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion
		}, 500);
	});

});