$(document).ready(function() {
	$( function() {
		$( ".ui-slider-handle" ).draggable();
		$( "#penthousePrice" ).slider({
			range: true,
	        min: 10000000,
	        max: 1500000000,
	        values: [ 100000000, 300000000 ],
	        slide: function( event, ui ) {
	        	$( "#penthouseAmount" ).val(ui.values[ 0 ].toLocaleString('ru-RU'));
	        	$( "#penthouseAmount2" ).val(ui.values[ 1 ].toLocaleString('ru-RU'));
	      	}
		    });
			$( "#penthouseAmount" ).val($( "#penthousePrice" ).slider( "values", 0 ).toLocaleString('ru-RU')) ;
			$( "#penthouseAmount2" ).val($( "#penthousePrice" ).slider( "values", 1 ).toLocaleString('ru-RU')) ;
	});

	$( function() {
		$( "#sizeRange" ).slider({
			range: true,
	        min: 50,
	        max: 999,
	        values: [ 150, 550 ],
	        slide: function( event, ui ) {
	        	$( "#sizeAmount" ).val(ui.values[ 0 ].toLocaleString('ru-RU'));
	        	$( "#sizeAmount2" ).val(ui.values[ 1 ].toLocaleString('ru-RU'));
	      	}
		    });
			$( "#sizeAmount" ).val($( "#sizeRange" ).slider( "values", 0 ).toLocaleString('ru-RU'));
			$( "#sizeAmount2" ).val($( "#sizeRange" ).slider( "values", 1 ).toLocaleString('ru-RU'));
	});

	$( function() {
		$( "#terraceRange" ).slider({
			range: true,
	        min: 50,
	        max: 300,
	        values: [ 100, 200 ],
	        slide: function( event, ui ) {
	        	$( "#terraceAmount" ).val(ui.values[ 0 ].toLocaleString('ru-RU'));
	        	$( "#terraceAmount2" ).val(ui.values[ 1 ].toLocaleString('ru-RU'));
	      	}
		    });
			$( "#terraceAmount" ).val($( "#sizeRange" ).slider( "values", 0 ).toLocaleString('ru-RU'));
			$( "#terraceAmount2" ).val($( "#sizeRange" ).slider( "values", 1 ).toLocaleString('ru-RU'));
	});
});