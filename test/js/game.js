'use strict';

function Game() {

	this.state = 'LOADING';

	this.stage = new Stage();
	this.dashboard = new Dashboard();
	this.loop = new Loop();

	this.levels = [];

	this.gravity = new Vector({y:1});

	this.keyUp = false;
	this.keyRight = false;
	this.keyDown = false;
	this.keyLeft = false;
	this.keySpace = false;

}

Game.prototype = {

	loadLevels: function(levels) {
		'use strict';

		this.levels = levels;

	},

	test: function(attributes) {
		'use strict';

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
