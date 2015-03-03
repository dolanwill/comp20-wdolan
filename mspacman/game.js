function init(){
	canvas = document.getElementById('game_canvas');
	ctx = canvas.getContext('2d');

	//draw board
	ctx.drawImage(pacman10-hp-sprite.png, 322px, 2px, 463px, 136px);

	//draw ms pac man
	ctx.drawImage(pacman10-hp-sprite.png, 82px, 22px, 18px, 18px);

}
