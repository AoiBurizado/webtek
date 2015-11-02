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
	createPersonInterval = window.setInterval(function() {createPerson(people[currentPerson]);}, 750);
	moveInterval = window.setInterval(move, 30);
}

function createPerson(name) {
	var img = document.createElement("img");
	img.src = root + "images/running_" + people[currentPerson] + ".gif";
	img.className = "groupmembers";
	img.style.position = "absolute";
	document.body.appendChild(img);
	currentPerson++;
	if (currentPerson >= people.length) {
		clearInterval(createPersonInterval);
	}
}

function move() {
	var groupmembers = document.getElementsByClassName("groupmembers");
	var removeIndex = -1;
	for (var i = 0; i < groupmembers.length; i++) {
		var left = groupmembers[i].style.left;
		left = left.substr(0, left.length - 2);
		if (Number(left) > window.innerWidth) {
			removeIndex = i;
		}
		groupmembers[i].style.left = (Number(left) + 5) + "px";
		groupmembers[i].style.top = document.body.scrollTop + window.innerHeight - 128 + "px";
		if (removeIndex != -1) {
			document.body.removeChild(groupmembers[removeIndex]);
			removeIndex = -1;
			if (groupmembers.length == 0) {
				clearInterval(moveInterval);
				konamiCounter = 0;
				currentPerson = 0;
				return;
			}
		}
	}
}