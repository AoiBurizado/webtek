var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var konamiCounter = 0;
var people = ["dag", "iselin", "kristoffer", "marius", "my"];
var currentPerson = 0;
var moveInterval;
var createPersonInterval;

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
	createPersonInterval = window.setInterval(function() {createPerson(people[currentPerson]);}, 200);
	moveInterval = window.setInterval(move, 30);
}

function createPerson(name) {
	var img = document.createElement("img");
	img.src = "../images/running_" + people[i] + ".gif";
	console.log(img.src);
	img.className = "groupmembers";
	img.style.position = "absolute";
	document.body.appendChild(img);
	currentPerson++;
	if (currentPerson >= people.length) {
		clearInterval(createPersonInterval);
	}
}

function move() {
	var left = document.getElementById("groupmembers").style.left;
	left = left.substr(0, left.length - 2);
	if (Number(left) > window.innerWidth) {
		document.body.removeChild(document.getElementById("groupmembers"));
		clearInterval(moveInterval);
		konamiCounter = 0;
		return;
	}
	document.getElementById("groupmembers").style.left = (Number(left) + 5) + "px";
	document.getElementById("groupmembers").style.top = document.body.scrollTop + window.innerHeight - 128 + "px";
}