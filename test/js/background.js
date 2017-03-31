function Background() {

	this.svg = {};
  this.opacity = 1;
	this.x = 0;
	this.y = 0;
  this.width = 0;
	this.height = 0;
	this.prepare();

}

Background.prototype = {

	prepare: function() {
		'use strict';

		// Add background.
		this.svg.background = document.createElementNS("http://www.w3.org/2000/svg", 'g');
		this.svg.background.setAttributeNS(null, 'id', 'background');
		stage.svg.append(this.svg.background);

		// Add background.
    /*
		this.svg.backgroundImage = document.createElementNS("http://www.w3.org/2000/svg", 'image');
		this.svg.backgroundImage.setAttributeNS(null, 'id', 'backgroundImage');
		this.svg.backgroundImage.setAttributeNS(null, 'preserveAspectRatio', 'xMinYMin slice');
		this.svg.backgroundImage.setAttributeNS(null, 'opacity', this.opacity);
		this.svg.backgroundImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'images/bg3.jpg');
		this.svg.background.append(this.svg.backgroundImage);
    */

	},

	update: function() {
		'use strict';
		this.width = stage.width;
		this.height = stage.height;

	},

	draw: function() {
		'use strict';

		// Resize background.
		this.svg.backgroundImage.setAttributeNS(null, 'width', this.width);
		this.svg.backgroundImage.setAttributeNS(null, 'height', this.height);

	}

}