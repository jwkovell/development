function Dashboard() {

	this.element = $('#dashboard');
	this.prepare();

}

Dashboard.prototype = {

	prepare: function() {
		'use strict';

		var attributes = ['state', 'fps', 'up-key', 'right-key', 'down-key', 'left-key', 'space-key']

		for (var i = 0; i < attributes.length; i++) {
      this.element.append('<div id="' + attributes[i] + '" class="field"><label>' + attributes[i].replace('-', ' ') + '</label><span></span></div>');
    }

  },

	update: function() {
		'use strict';
	},

	draw: function() {
		'use strict';

		$('#state span').html(game.state);

		if (game.keyUp) {
			$('#up-key span').html('True');
		} else {
			$('#up-key span').html('False');
		}

		if (game.keyRight) {
			$('#right-key span').html('True');
		} else {
			$('#right-key span').html('False');
		}

		if (game.keyDown) {
			$('#down-key span').html('True');
		} else {
			$('#down-key span').html('False');
		}

		if (game.keyLeft) {
			$('#left-key span').html('True');
		} else {
			$('#left-key span').html('False');
		}

		if (game.keySpace) {
			$('#space-key span').html('True');
		} else {
			$('#space-key span').html('False');
		}

	},

}