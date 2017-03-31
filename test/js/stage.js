'use strict';

function Stage() {

	this.svg = $('svg');
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;

	this.layout = [];

	this.prepare();

}

Stage.prototype = {

	prepare: function(attributes) {
		'use strict';

		// Resize the stage to fit the window.
		this.resize();
		this.update();
		this.draw();

		// Instantiate Loop.
		//this.loop = new Loop();
		// Instantiate Dashboard.
		//this.dashboard = new Dashboard();

	},

	loadLevel: function(level) {
		'use strict';
		this.layout = level.layout;
	},

	update: function() {
		'use strict';

		// Loop through layout elements.
		for (var elementID in this.layout) {

			// Update layout element.
			this.layout[elementID].update();

		}

	},

	draw: function() {
		'use strict';

		// Loop through layout elements.
		for (var elementID in this.layout) {

			// Draw layout element.
			this.layout[elementID].draw();

		}

	},

	resize: function() {
		'use strict';
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.svg.attr('viewBox', '0 0 ' + this.width + ' ' + this.height);
	},

}





/*
var createStage = function() {
  var stage = Object.create(Stage);
  stage.prepare();
  return stage;
}

var Stage = {
	svg: {},
	width: 0,
	height: 0,
	elements: [],
	loop: {},
	prepare: function(){
		console.log('Prepare stage');
	},
}
*/
