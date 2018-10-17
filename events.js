
moveX = 0;
moveY = 1;

function mousePressed({clientX , clientY}) {
	console.log("myCanvas pressed X:"+clientX+" Y:"+clientY);
	console.log(head);
}

function keypress(event){
	//console.log("myCanvas keypress "  );
	//console.log(event);
}

function keydown(event){
	//console.log("myCanvas keydown ");
	//console.log(event);
	if (event.code === "ArrowUp" && (moveY == -1 | moveY == 0) ) {
		//console.log("ArrowUp");
		//moveUp();
		moveX = 0;
		moveY = -1;
	} else if (event.code === "ArrowDown"&& (moveY == 1 | moveY == 0)) {
		//console.log("ArrowDown");
		//moveDown();
		moveX = 0;
		moveY = 1;
	} else if (event.code === "ArrowRight"&& (moveX == 1 | moveX == 0)) {
		//console.log("ArrowRight");
		//moveRight();
		moveX = 1;
		moveY = 0;
	} else if (event.code === "ArrowLeft"&& (moveX == -1 | moveX == 0)) {
		//console.log("ArrowLeft");
		//moveLeft();
		moveX = -1;
		moveY = 0;
	} else if (event.code === "Space"){
		movetail++;
	}
	
}

