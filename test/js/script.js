var game;

$(function(){
	'use strict';

	// Instantiate stage.
	game = new Game();

	var levels = [
		{
			name: 'Demo',
			layout: [
				new Block({
					x: 50,
					y: 50,
					width: 50,
					height: 50,
					showHitbox: true,
					mutable: true,
					mobile: true,
					gravity: true,
					type: 'brick',
          tangible: true,
          momentum: new Vector({x:1,y:-10})
				}),
				new Element({
					x: 100,
					y: 100,
					width: 100,
					height: 100,
					showHitbox: true
				}),
				new Element({
					x: 0,
					y: 250,
					width: 800,
					height: 50,
          tangible: true,
					showHitbox: true
				})
			]
		}
	];

	game.loadLevels(levels);
	game.state = 'PLAYING';

});
