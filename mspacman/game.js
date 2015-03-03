function init(){
	canvas = document.getElementById('game_canvas');
	ctx = canvas.getContext('2d');

	  var img = new Image();

	  img.onload = function(){
		//draw board
		ctx.drawImage(img, 322, 2, 463, 136);

		//draw ms pac man
		ctx.drawImage(img, 82, 22, 18, 18);
	};
	  img.src = 'pacman10-hp-sprite.png';

}
