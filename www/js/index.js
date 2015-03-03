function init() {

	if ("cordova" in window) {
		document.addEventListener("deviceready", function() {
			$(document).ready(function() {
				app();
			});
		}, false);
	} else {
		$(document).ready(function() {
			app();
		});
	}
}

function app() {
	String.prototype.repeat = function( num )
	{
	    return new Array( num + 1 ).join( this );
	}

	$(window).resize(function() {
		adjustingHeights();
	});

	adjustingHeights();
}

function adjustingHeights(){
	
	//making the content div to the best maximum height
	$("#content").height($(document).height() - $("#menu").height() - $("#footer").height() - 55);
}