$(document).ready(function() {
	clear();
	init();
	draw();
	
	// Clears pad when needed
	function clear() {
		$('.pad').empty();
	}
	
	function draw() {
		$('.dot').on('mouseenter', function() {
			$(this).addClass('draw');
		});
	}
	
	function vanish() {
		$('.dot').on('mouseenter', function() {
			$(this).fadeTo("slow", 0);
		});
	}
	
	function init() {
		// loops through to create rows and columns for dots
		for (var i = 0; i < 20; i++) {
			for (var j = 0; j < 20; j++) {
				$("<div></div>").addClass('dot').appendTo('.pad');
			}
			$("<div></div>").css({'clear': 'both'}).appendTo('.pad');
		};
	}
	
	$('.custom').on('click',  function() {
		clear();
		var x = parseInt(prompt("What size grid? Please select 20 to 100.", "0"), 10);
		// minus 2 is to compensate for border size of 1px
		var w 	= (( 900 / x)-2)+'px'; 
		var h 	= w;
		
		for (var i = 0; i < x; i++) {
			for (var j = 0; j < x; j++) {
				$("<div></div>").addClass('dot').css({'width': w, 'height': h}).appendTo('.pad');
			}
			$("<div></div>").css({'clear': 'both'}).appendTo('.pad');
		};
		draw();
	});
	
	$('.clear').on('click', function() {
		clear();
		init();
		draw();
	})
	
	$('.vanish').on('click', function() {
		vanish();
	});
	
});



