var navbar = document.getElementById("nav");
var docked = true;

window.onscroll = function() {
	if (docked && document.body.scrollTop >= 240) {
		navbar.style.position = "fixed";
		navbar.style.right = "0";
		navbar.style.left = "0";
		navbar.style.top = "0";
		docked = false;
	} else if (!docked && document.body.scrollTop < 240) {
		navbar.style.position = "static";
		docked = true;
	}
}