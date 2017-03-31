function Block(attributes) {

	this.type = '';

	Element.apply(this, arguments);

}

Block.prototype = Object.create(Element.prototype);
Block.prototype.constructor = Block;

Block.prototype.test = function() {
	'use strict';

}
















/*
Block.prototype.prepare = function() {

console.log('prepare log');

	this.svg = document.createElementNS("http://www.w3.org/2000/svg", 'g');

	// Add object to stage.
	stage.svg.append(this.svg);

}
*//*
var frame = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
frame.setAttributeNS(null, 'x', 100);
frame.setAttributeNS(null, 'y', 100);
frame.setAttributeNS(null, 'width', 100);
frame.setAttributeNS(null, 'height', 100);
stage.svg.append(frame);
*/



/*
var frame = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
frame.setAttributeNS(null, 'x', 100);
frame.setAttributeNS(null, 'y', 100);
frame.setAttributeNS(null, 'width', 100);
frame.setAttributeNS(null, 'height', 100);
stage.svg.append(frame);
*/
