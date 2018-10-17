
window_width  = 200;
window_height = 200;

addCanvasSizes({x:210,y:5  ,w:window_width,h:window_height});
addCanvasSizes({x:5  ,y:210,w:window_width,h:window_height});
addCanvasSizes({x:210,y:210,w:window_width,h:window_height});
addCanvasSizes({x:415,y:210,w:window_width,h:window_height});
addCanvasSizes({x:210,y:415,w:window_width,h:window_height});
addCanvasSizes({x:620,y:210,w:window_width,h:window_height});

console.log("x: "+windows[0].x +" y:"+ windows[0].y +" w:"+ windows[0].w +" h:"+windows[0].h);
var myVar = setInterval(setup, 100);

step = 10;
initX = random(windows[0].x,(windows[0].w + windows[0].x - step));
initY = random(windows[0].y,(windows[0].h + windows[0].y - step));
initCoinX = random(windows[0].x,(windows[0].w + windows[0].x - step));
initCoinY = random(windows[0].y,(windows[0].h + windows[0].y - step));
body = [{x:initX , y:initY}];
head = {x:initX , y:initY};
point = {x:0 , y:0}


moveLeft  	= [{x:((head.y-windows[0].y)+windows[1].x),y:windows[1].y}					,{x: (windows[5].x + windows[5].w - step) ,y:head.y}							,{x: (windows[1].x + windows[1].w-step),y:head.y}		,{x: (windows[2].x + windows[2].w - step),y:head.y}													,{x: (windows[4].h-(head.y - windows[4].y)+windows[1].x) ,y: (windows[1].y + windows[1].h - step)}		,{x: (windows[3].x + windows[3].w - step), y: (head.y) }];
moveRight 	= [{x:(windows[0].h-(head.y-windows[0].y)+windows[3].x) , y: windows[3].y}	,{x: (windows[2].x) , y: head.y}			 									,{x: (windows[3].x ),y:head.y}							,{x: (windows[5].x), y:head.y}																		,{x: ((head.y - windows[4].y)+windows[3].x), y: (windows[3].y + windows[3].h - step) }					,{x: (windows[1].x), y: (head.y) }];
moveUp		= [{x:(windows[0].w-(head.x-windows[0].x)), y: windows[5].y}				,{x: (windows[0].x) , y: ((head.x-windows[1].x)+windows[0].y) }					,{x: head.x,y:(windows[0].y + windows[0].h - step) }	,{x: (windows[0].x + windows[0].w - step), y:(windows[3].w - (head.x - windows[3].x)+windows[0].y)}	,{x: (head.x), y: (windows[2].y + windows[2].h - step) }												,{x: (windows[5].w - (head.x - windows[5].x) + windows[0].x), y:(windows[0].y)}];
moveDown	= [{x:(head.x) , y: windows[2].y}											,{x: windows[4].x , y: (windows[1].w-(head.x - windows[1].x)+windows[4].y) }	,{x: head.x,y:(windows[4].y ) }							,{x: (windows[4].x + windows[4].w - step), y:((head.x - windows[3].w)+windows[4].y)}				,{x: (windows[4].w-(head.x-windows[4].x)+windows[5].x), y:(windows[5].y + windows[5].h - step) }		,{x: (windows[5].w - (head.x - windows[5].x) + windows[0].x), y: (windows[4].x + windows[4].w - step)}];

number_window = 0;

points = 0;

coin = {x:initCoinX,y:initCoinY};

movetail = 5;
tail = 1;

speedX = 1;
speedY = 1;

function setup(){
	if(number_window != -1){
		move();
		draw();
	}else{
	}
}

function movehead (){
	speedX = moveX * step;
	speedY = moveY * step;

	head.x = head.x + speedX;
	head.y = head.y + speedY;
	
	moveWindow();
	
	number_window = get_window_number();

}

function moveWindow(){
	if(head.x > (windows[number_window].w + windows[number_window].x - step)){ 
		//Right
		MoveXY = {x:0,y:0};
		switch(number_window) {
		    case 0:
		    	MoveXY ={x:(windows[0].h-(head.y-windows[0].y)+windows[3].x) , y: windows[3].y } ;
		    	movedown();
		        break;
		    case 1:
		        MoveXY = {x: (windows[2].x) , y: head.y};
		        break;
		    case 2:
		    	MoveXY = {x: (windows[3].x ),y:head.y};
		        break;
		    case 3:
		        MoveXY = {x: (windows[5].x), y:head.y};
		        break;
		    case 4:
		    	MoveXY = {x: ((head.y - windows[4].y)+windows[3].x), y: (windows[3].y + windows[3].h - step) };
		    	moveup();
		        break;
		    case 5:
		    	MoveXY = {x: (windows[1].x), y: (head.y) };
		        break;
		}
		head.x = MoveXY.x;
		head.y = MoveXY.y;
	}else if(head.x < windows[number_window].x){
		//Left
		MoveXY = {x:0,y:0};
		switch(number_window) {
		    case 0:
		    	MoveXY = {x:((head.y-windows[0].y)+windows[1].x),y:windows[1].y};
		    	movedown();
		        break;
		    case 1:
		        MoveXY = {x: (windows[5].x + windows[5].w - step) ,y:head.y};
		        break;
		    case 2:
		    	MoveXY = {x: (windows[1].x + windows[1].w-step),y:head.y};
		        break;
		    case 3:
		        MoveXY = {x: (windows[2].x + windows[2].w - step),y:head.y};
		        break;
		    case 4:
		    	MoveXY = {x: (windows[4].h-(head.y - windows[4].y)+windows[1].x) ,y: (windows[1].y + windows[1].h - step)};
		    	moveup();
		        break;
		    case 5:
		    	MoveXY = {x: (windows[3].x + windows[3].w - step), y: (head.y) };
		        break;
		}
		head.x = MoveXY.x;
		head.y = MoveXY.y;
	}else{
		if(head.y > (windows[number_window].h + windows[number_window].y - step)){
			//Down
			MoveXY = {x:0,y:0};
			switch(number_window) {
			    case 0:
			    	MoveXY = {x:(head.x) , y: windows[2].y};
			        break;
			    case 1:
			        MoveXY = {x: windows[4].x , y: (windows[1].w-(head.x - windows[1].x)+windows[4].y) };
			        moveright();
			        break;
			    case 2:
			    	MoveXY = {x: head.x,y:(windows[4].y ) };
			        break;
			    case 3:
			        MoveXY = {x: (windows[4].x + windows[4].w - step), y:((head.x - windows[3].x)+windows[4].y)};
			        moveleft();
			        break;
			    case 4:
			    	MoveXY = {x: (windows[4].w-(head.x-windows[4].x)+windows[5].x), y:(windows[5].y + windows[5].h - step) } ;
			    	moveup();
			        break;
			    case 5:
			    	MoveXY = {x: (windows[5].w - (head.x - windows[5].x) + windows[0].x), y: (windows[4].y + windows[4].h - step)};
			    	moveup();
			        break;
			}

			head.x = MoveXY.x;
			head.y = MoveXY.y;
		}else if(head.y < windows[number_window].y){
			//UP
			MoveXY = {x:0,y:0};

			switch(number_window) {
			    case 0:
			    	MoveXY = {x:(windows[0].w-(head.x-windows[0].x)+windows[5].x), y: windows[5].y};
			    	movedown();
			        break;
			    case 1:
			        MoveXY = {x: (windows[0].x) , y: ((head.x-windows[1].x)+windows[0].y)};
			        moveright();
			        break;
			    case 2:
			    	MoveXY = {x: head.x,y:(windows[0].y + windows[0].h - step) };
			        break;
			    case 3:
			        MoveXY = {x: (windows[0].x + windows[0].w - step), y:(windows[3].w - (head.x - windows[3].x)+windows[0].y)};
			        moveleft();
			        break;
			    case 4:
			    	MoveXY = {x: (head.x), y: (windows[2].y + windows[2].h - step) };
			        break;
			    case 5:
			    	MoveXY = {x: (windows[5].w - (head.x - windows[5].x) + windows[0].x), y:(windows[0].y)};
			    	movedown();
			        break;
			}

			head.x = MoveXY.x;
			head.y = MoveXY.y;
		}
	}
}

function get_window_number(){
	for (var i = 0; i < windows.length; i++) {
		if(head.x <= (windows[i].w + windows[i].x)){ 
			if(head.x >= windows[i].x){
				if(head.y <= (windows[i].h + windows[i].y)){
					if(head.y >= windows[i].y){
						console.log("window: " + i);
						return i;
					}
				}
			}
		}
	}
	return -1;
}

function movebody (){
	body.push({x:head.x , y:head.y});

	if (tail === movetail) {
		body.shift();	
	}else{
		tail++;
	}
}
function random (min , max){
	return Math.floor((Math.random() * (max - min)) + min);
}

function move(){	

	movehead();
	movebody ();
	
	headcenterx = Math.abs(head.x - coin.x);
	headcentery = Math.abs(head.y - coin.y);

	if ( headcenterx < step && headcentery < step ) {
		points++;
		movetail++;
		randomWindow = random(0, windows.length -1);
		coin.x = random(windows[randomWindow].x,(windows[randomWindow].w + windows[randomWindow].x - step));
		coin.y = random(windows[randomWindow].y,(windows[randomWindow].h + windows[randomWindow].y - step));

		console.log("you get the coin");
	}
}

function draw(){

	for (var i = 0; i < windows.length; i++) {
		background(i);
	}
	drawSnake();
	drawCoins();
	drawInformation();
}
	
function drawSnake(){
	for (var j = body.length - 1; j >= 0; j--) {
		Rect(body[j].x , body[j].y , step,step , "#F4976C");
	}
}

function drawCoins(){
	Rect(coin.x , coin.y , step,step , "#B4DFE5");
}

function drawInformation(){
	drawText(("points: "+ points) , "#303C6C" );
}

function moveup(){
	moveX = 0 ;
	moveY = -1;
}

function movedown(){
	moveX = 0;
	moveY = 1;
}
function moveright(){
	moveX = 1;
	moveY = 0;
}
function moveleft(){
	moveX = -1;
	moveY = 0;
}