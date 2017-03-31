'use strict';

function Loop() {

	this.maxFPS = 5;
	this.lastFrame = 0;
	this.timePassed = 0;

	// Start loop.
	requestAnimationFrame(this.mainLoop.bind(this));

}

Loop.prototype = {

	mainLoop: function(timestamp) {

		if (timestamp < this.lastFrame + (1000 / this.maxFPS)) {

			requestAnimationFrame(this.mainLoop.bind(this));

		} else {

			this.timePassed = (timestamp - this.lastFrame) / 100;
			this.lastFrame = timestamp;

			this.update();
			this.draw();

			// If a lot of time has passed, possibly because screen was minimized...
			if (this.timePassed > 1000) {

				// Reset the time passed counter.
				this.timePassed = 0;

			}

			requestAnimationFrame(this.mainLoop.bind(this));

		}

	},

	update: function() {

		// If game state is "LOADING"...
		if (game.state == 'LOADING') {
      
		}
		// Else, if game state is "PLAYING"...
		else if (game.state == 'PLAYING') {

			// Update dashboard.
			game.dashboard.update();

			// Get all elements in the level.
			var elements = game.levels[0].layout;

			// Loop through level elements.
			for (var elementIndex in elements ) {

				// If element is mutable...
				if (elements[elementIndex].mutable) {

					// Update element.
					elements[elementIndex].update();

				}

			}

			//game.dashboard.update();

		}
		// Else, if game state is "WAITING"...
		else if (game.state == 'WAITING') {

			// Update dashboard.
			game.dashboard.update();

		}
		// Else, if game state is "COMPLETE"...
		else if (game.state == 'COMPLETE') {

    
		}


	},

	draw: function(timestamp) {

		// If game state is "LOADING"...
		if (game.state == 'LOADING') {
      
		}
		// Else, if game state is "PLAYING"...
		else if (game.state == 'PLAYING') {

			// Draw dashboard.
			game.dashboard.draw();

			// Get all elements in the level.
			var elements = game['levels'][0]['layout'];

			// Loop through level elements.
			for (var elementIndex in elements ) {

				// If element is mutable...
				if (elements[elementIndex].mutable) {

					// Update element.
					elements[elementIndex].draw();

				}

			}

		}
		// Else, if game state is "WAITING"...
		else if (game.state == 'WAITING') {

			// Draw dashboard.
			game.dashboard.draw();

		}
		// Else, if game state is "COMPLETE"...
		else if (game.state == 'COMPLETE') {

    
		}

	}

}