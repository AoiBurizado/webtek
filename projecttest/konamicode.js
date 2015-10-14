var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var konamiCounter = 0;
var interval;

window.onkeydown = function(event) {
	if (event.keyCode == code[konamiCounter]) {
		konamiCounter++;
	} else {
		konamiCounter = 0;
	}
	if (konamiCounter == 10) {
		fun();
	}
}

function fun() {
	var img = document.createElement("img");
	img.src = "animegirl.gif";
	img.id = "asdf";
	img.style.position = "absolute";
	document.body.appendChild(img);
	interval = window.setInterval(move, 30);
}

function move() {
	var left = document.getElementById("asdf").style.left;
	left = left.substr(0, left.length - 2);
	if (Number(left) > window.innerWidth) {
		document.body.removeChild(document.getElementById("asdf"));
		clearInterval(interval);
		konamiCounter = 0;
		return;
	}
	document.getElementById("asdf").style.left = (Number(left) + 5) + "px";
	document.getElementById("asdf").style.top = document.body.scrollTop + window.innerHeight - 128 + "px";
}