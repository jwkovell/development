$(function(){
	'use strict';

	//On key press...
	$(document).keydown(function(event) {

		// If key code is 38 (up key)...
		if (event.keyCode == 38) {
			game.keyUp = true;
		}

		// If key code is 39 (right key)...
		if (event.keyCode == 39) {
			game.keyRight = true;
		}

		// If key code is 40 (down key)...
		if (event.keyCode == 40) {
			game.keyDown = true;
		}

		// If key code is 37 (left key)...
		if (event.keyCode == 37) {
			game.keyLeft = true;
		}

		// If key code is 32 (space key)...
		if (event.keyCode == 32) {
			game.keySpace = true;
		}

	});

	//On key release...
	$(document).keyup(function(event) {

		// If key code is 38 (up key)...
		if (event.keyCode == 38) {
			game.keyUp = false;
		}

		// If key code is 39 (right key)...
		if (event.keyCode == 39) {
			game.keyRight = false;
		}

		// If key code is 40 (down key)...
		if (event.keyCode == 40) {
			game.keyDown = false;
		}

		// If key code is 37 (left key)...
		if (event.keyCode == 37) {
			game.keyLeft = false;
		}

		// If key code is 37 (left key)...
		if (event.keyCode == 32) {
			game.keySpace = false;
		}

		// If key code is 27 (escape key)...
		if (event.keyCode == 27) {
			// If game is playing...
			if (game.state == 'PLAYING') {
				game.state = 'WAITING';
			} else {
				game.state = 'PLAYING';
			}
		}

	});

});
