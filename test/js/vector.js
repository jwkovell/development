'use strict';

function Vector(attributes) {

	this.x = 0;
	this.y = 0;

	this.prepare(attributes);

}

Vector.prototype = {

	prepare: function(attributes) {
		// If attributes were provided...
		if (attributes) {
			// Loop through provided attributes.
			for (var attribute in attributes) {
				// Update provided attributes.
				this[attribute] = attributes[attribute];
			}
		}
	},

	getMagnitude : function() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	},

	getDirection : function() {
		return Math.atan2(this.y, this.x);
	},

	limitMagnitude : function(limit) {

		// Get magnitude.
		var magnitude = this.getMagnitude();

		// If this magnitude exceeds the limit...
		if (magnitude > limit) {

			// Determine the ratio of the limit to the current magnitude.
			var ratio = limit / magnitude;

			// Update x and y to conform to the limit.
			this.x = this.x * ratio;
			this.y = this.y * ratio;

		}

	},

	limitX : function(limit) {

		// If this magnitude exceeds the limit...
		if (this.x > limit) {

			// Determine the ratio of the limit to the current x value.
			var ratio = limit / this.x;

			// Update x to conform to the limit.
      this.x = limit;

		}

	},

	limitY : function(limit) {

		// If this magnitude exceeds the limit...
		if (this.y > limit) {

			// Determine the ratio of the limit to the current y value.
			var ratio = limit / this.y;

			// Update y to conform to the limit.
      this.y = limit;

		}

	},

	addVector : function(vector) {

			this.x = this.x + vector.x;
			this.y = this.y + vector.y;

	}

}