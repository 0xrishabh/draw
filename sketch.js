var w = document.documentElement.clientWidth
var h = document.documentElement.clientHeight
function setup() {
	console.log(w,h)
	createCanvas(w, h);
}
function mouseDragged(){
  	console.log(mouseX,mouseY)
  	strokeWeight(3)
  	line(mouseX,mouseY,pmouseX,pmouseY)
}
function draw() {
}


