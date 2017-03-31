function Character(options) {

	this.svg = {};
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.potentialX = 0;
	this.potentialY = 0;
  this.width = options.width || 0;
	this.height = options.height || 0;

	this.totalMomentum;
	this.controlledMomentum;
	this.gravityMomentum;

	// State variables.
	this.lookingUp = false;
	this.ducking = false;
	this.walking = false;
	this.running = false;
	this.falling = false;
	this.jumping = false;
	this.onGround = false;

	this.prepare();

}

Character.prototype = {

	prepare: function() {
		'use strict';

		// Instantiate vector for character momentum.
		this.controlledMomentum = new Vector();
		this.gravityMomentum = new Vector();
		this.totalMomentum = new Vector();

		// Add character.
		this.svg.character = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
		this.svg.character.setAttributeNS(null, 'width', this.width);
		this.svg.character.setAttributeNS(null, 'height', this.height);
		var transformMap = 'translate(' + this.x + ', ' + this.y + ')';
		this.svg.character.setAttributeNS(null, 'transform', transformMap);
		stage.svg.append(this.svg.character);

	},

	update: function() {
		'use strict';

		// Reset total momentum vectors.
		this.totalMomentum = new Vector();
		this.controlledMomentum = new Vector();

		// Apply gravity to the character's momentum.
		this.gravityMomentum.addVector(stage.gravity);
		this.gravityMomentum.limitY(15);

		if (stage.keyUp) {

      // If controlled momentum doesnt already have a y component...
      if (this.totalMomentum.y == 0) {
        this.controlledMomentum.addVector(new Vector(0, -100));
      }

		}

		if (stage.keyRight) {
      if (stage.keySpace) {
        this.controlledMomentum.addVector(new Vector(10, 0));
      }
      else {
        this.controlledMomentum.addVector(new Vector(5, 0));
      }
		}

    if (stage.keyDown) {

    }

    if (stage.keyLeft) {
      if (stage.keySpace) {
        this.controlledMomentum.addVector(new Vector(-10, 0));
      }
      else {
        this.controlledMomentum.addVector(new Vector(-5, 0));
      }
    }
    else {
			//this.controlledMomentum = new Vector();
		}

/*
// If character is in a standing, walking, running state...
if (true) {
  // If current momentum is in the opposite direction...
  if (this.controlledMomentum.x > 0) {
    this.controlledMomentum = new Vector();
  }
  this.controlledMomentum.addVector(new Vector(-1, 0));
}
*/


		// Calculate total momentum.
		this.totalMomentum.addVector(this.controlledMomentum);
		this.totalMomentum.addVector(this.gravityMomentum);

		// Calculate character's potential position using total momentum.
		this.potentialX = this.x + this.totalMomentum.x;
		this.potentialY = this.y + this.totalMomentum.y;

    var collisions = [];

    // Loop through blocks.
    for (var blockIndex in stage.blocks) {

      // Check for collission
      var collision = stage.blocks[blockIndex].checkCollision({
        x: this.potentialX,
        y: this.potentialY,
        width: this.width,
        height: this.height
      });

      // If colissions...
      if (collision) {
        collisions.push(collision);
      }

    }
      
		// Loop though colissions.
		for (var collisionIndex in collisions) {

      // If direction is top...
      if (collisions[collisionIndex].direction == 'top') {
        // Apply offset to y.
        this.potentialY = this.potentialY + collisions[collisionIndex][collision.direction];
        // Reset y controlled momentum.
        this.controlledMomentum.y = 0;
      }

      // Else, if direction is right
      else if (collisions[collisionIndex].direction == 'right') {
        // Apply offset to x.
        this.potentialX = this.potentialX + collisions[collisionIndex][collision.direction];
        // Reset x controlled momentum.
        this.controlledMomentum.x = 0;
      }

      // Else, if direction is bottom
      else if (collisions[collisionIndex].direction == 'bottom') {
        // Apply offset to y.
        this.potentialY = this.potentialY + collisions[collisionIndex][collision.direction];
        // Reset y controlled momentum.
        this.controlledMomentum.y = 0;
      }

      // Else, if direction is left
      else if (collisions[collisionIndex].direction == 'left') {
        // Apply offset to x.
        this.potentialX = this.potentialX + collisions[collisionIndex][collision.direction];
        // Reset x controlled momentum.
        this.controlledMomentum.x = 0;
      }

		}

    // Set charater's position to the potential position.
    this.x = this.potentialX;
    this.y = this.potentialY;




		// Apply momentum to character's position.
		//this.x = this.x + this.momentum.x;
		//this.y = this.y + this.momentum.y;

		// Loop through blocks map.
		/*
    for (var blockIndex = 0; blockIndex < stage.blocks.length; blockIndex++) {

			var collide = stage.blocks[blockIndex].checkCollision(this);

			// If collision...
			if (collide) {

				// If movement is primarilly horizontal...


				// Get distance above 

			}

		}
    */


/*
if (stage.keyRight) {
  this.momentum.addVector(new Vector(1, 0));
}
else if (stage.keyLeft) {
  this.momentum.addVector(new Vector(-1, 0));
}
else if (stage.keyUp) {
  if (this.onGround) {
    this.onGround = FALSE;
    this.momentum.addVector(new Vector(0, -20));
  }
}
*/





	},

	draw: function() {
		'use strict';

		$('#x span').html(this.x);
		$('#y span').html(this.y);

		this.svg.character.setAttributeNS(null, 'width', this.width);
		this.svg.character.setAttributeNS(null, 'height', this.height);
		var transformMap = 'translate(' + this.x + ', ' + this.y + ')';
		this.svg.character.setAttributeNS(null, 'transform', transformMap);

	}

}