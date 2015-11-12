// UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, B, A
var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var konamiCounter = 0;
var people = ["dag", "iselin", "kristoffer", "marius", "my"];
var currentPerson = 0;
var moveInterval;
var createPersonInterval;

window.onkeydown = function(event) {
	if (event.keyCode == code[konamiCounter]) {
		konamiCounter++;
	}
	// in the event that your last 2 inputs were UP, and you press UP again
	// your last 2 inputs are still UP and the counter shouldn't reset
	else if (konamiCounter == 2 && event.keyCode == 38) {
		return;
	} else {
		konamiCounter = 0;
	}
	if (konamiCounter == 10) {
		fun();
	}
}

/*
  The function called when the konami code has been entered correctly
*/
function fun() {
	createPersonInterval = window.setInterval(function() {createPerson(people[currentPerson]);}, 750);
	moveInterval = window.setInterval(move, 30);
}

/*
  Instantiates a new image for the person with the given name
*/
function createPerson(name) {
	var img = document.createElement("img");
	// root is the absolute path to the root folder, needed because this script is linked to
	// pages in different directories (can't simply use relative path)
	img.src = root + "images/running_" + people[currentPerson] + ".gif";
	img.className = "groupmembers";
	img.style.position = "absolute";
	document.body.appendChild(img);
	currentPerson++;
	// if everyone has been created, stop trying to create more people
	if (currentPerson >= people.length) {
		clearInterval(createPersonInterval);
	}
}

/*
  Moves all currently active images and handles deletion of images
*/
function move() {
	var groupmembers = document.getElementsByClassName("groupmembers");
	for (var i = 0; i < groupmembers.length; i++) {
		var left = groupmembers[i].style.left;
		left = left.substr(0, left.length - 2);
		// if image has reached right edge of the screen
		if (Number(left) > window.innerWidth) {
			// delete the image
			document.body.removeChild(groupmembers[i]);
			// if all images have been deleted, reset the script
			if (groupmembers.length == 0) {
				clearInterval(moveInterval);
				konamiCounter = 0;
				currentPerson = 0;
				return;
			}
			continue;
		}
		groupmembers[i].style.left = (Number(left) + 5) + "px";
		// document.documentElement.scrollTop will return scrollHeight in Firefox and IE
		// document.body.scrollTop does the same for Chrome and Opera
		// in any case, one of them will return 0 and the other will return a positive value
		// because of the boolean OR expression, the non-zero value will be chosen
		groupmembers[i].style.top = (document.documentElement.scrollTop || 
			document.body.scrollTop) + window.innerHeight - 128 + "px";
	}
}