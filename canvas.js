
var canvas = document.getElementById("myCanvas");

backgrounds = ["#FBE8A6","#3B8BEB","#E7E3D4","#B23850","#479761","#555555"];
var ctx = canvas.getContext("2d");
ctx.canvas.width  =810 ;
ctx.canvas.height =620  ;

windows = [];

function addCanvasSizes(win){
	windows.push(win);
}

function background(i){
	
	ctx.fillStyle = backgrounds[i];
    ctx.fillRect(windows[i].x, windows[i].y, windows[i].w, windows[i].h);
}

function Rect(x,y,w,h,color){
	ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawText(text, color){
	ctx.fillStyle = color;
	ctx.font = "20px Arial";
	ctx.fillText(text,windows[0].x,windows[0].y+20);
}

function getWindow(pos){
	console.log(pos);
	for (var i = 0; i < windows.length; i++) {
		if(pos.x > windows[i].x && pos.x < windows[i].x + windows.w){
			if(pos.y > windows[i].y && pos.y < windows[i].y + windows.h){
				return i;
			}			
		}
	}
	return -1;
}