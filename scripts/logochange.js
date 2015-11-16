// when mouse enters the image, change to japanese logo
document.getElementById("headerImage").onmouseover = function () {
	document.getElementById("headerImage").src = root + "images/logoj.png";
}

// when mouse exits the image, change to english logo
document.getElementById("headerImage").onmouseout = function () {
	document.getElementById("headerImage").src = root + "images/logo.png";
}