'use strict';

function Element(attributes) {

	this.svg = {};

	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;

	this.momentum = new Vector();
	this.acceleration = new Vector();

	this.test = '';

	this.visible = false;
	this.mutable = false;
	this.mobile = false;
	this.gravity = false;
	this.tangible = false;
	this.showHitbox = false;
	this.elasticity = 0;

	this.prepare(attributes);

}

Element.prototype = {

	prepare: function(attributes) {

		// If attributes were provided...
		if (attributes) {
			// Loop through provided attributes.
			for (var attribute in attributes) {
				// Update provided attributes.
				this[attribute] = attributes[attribute];
			}
		}

		this.svg = document.createElementNS("http://www.w3.org/2000/svg", 'g');
		this.svg.setAttributeNS(null, 'class', 'element');
		this.svg.setAttributeNS(null, 'transform', 'translate(' + this.x + ',' + this.y + ')');
		game.stage.svg.append(this.svg);

		var hitbox = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
		hitbox.setAttributeNS(null, 'class', 'hitbox');
 	 	hitbox.setAttributeNS(null, 'x', 0);
		hitbox.setAttributeNS(null, 'y', 0);
		hitbox.setAttributeNS(null, 'width', this.width);
		hitbox.setAttributeNS(null, 'height', this.height);
		hitbox.setAttributeNS(null, 'fill-opacity', 0);
 		this.svg.append(hitbox);

 		if (this.showHitbox) {
 		 	hitbox.setAttributeNS(null, 'stroke', '#000000');
 		}






		//this.update();
		//this.draw();

	},

	update: function() {

		// Set acceleration to the element's current momentum.
		this.acceleration = this.momentum;

		// If element has gravity.
		if (this.gravity) {

			// Add gravitational vector.
			this.acceleration.addVector(game.gravity);

		}

		var potentialX = this.x + this.acceleration.x;
		var potentialY = this.y + this.acceleration.y;

		// If this element is tangible...
		if (this.tangible) {

			// Get all elements in the level.
			var elements = game.levels[0].layout;

			// Loop through level elements.
			for (var elementIndex in elements ) {

				// If this element is not the current object...
				if (this !== elements[elementIndex]) {

					// If element is tangible...
					if (elements[elementIndex].tangible) {

						// Check for collision.
						var collision = this.checkCollision(elements[elementIndex]);

						if (collision) {

							console.log(collision);

						}

					}

				}

			}

		}

		// Update positions.
		this.x = potentialX;
		this.y = potentialY;

	},

	draw: function() {

		// If element is mobile...
		if (this.mobile) {

			this.svg.setAttributeNS(null, 'transform', 'translate(' + this.x + ',' + this.y + ')');

		}

	},

	checkCollision: function(object) {

		if (
			this.x < object.x + object.width &&
			this.x + this.width > object.x &&
			this.y < object.y + object.height &&
			this.height + this.y > object.y
		) {

			// Get collision edge.
			var collisionDetails = this.getCollisionDetails(object);

			console.log(collisionDetails);

// If collision edge is top or bottom...
/* if (collisionDetails == 'top' || collisionEdge == 'bottom') {

} else {
  
} */



		} else {
			return false;
		}

	},

	getCollisionDetails: function(object) {

		var collisionDetails = {
			top: (object.y + object.height) - this.y,
			right: (this.x + this.width) - object.x,
			bottom: (this.y + this.height) - object.y,
			left: (object.x + object.width) - this.x,
		}






		return collisionDetails;

	}

}
