var navbar = document.getElementById("nav");
var docked = true;

window.onscroll = function() {
	if (docked && document.body.scrollTop >= 210) {
		navbar.style.position = "fixed";
		navbar.style.top = "0px";
		docked = false;
	} else if (!docked && document.body.scrollTop < 210) {
		navbar.style.position = "static";
		docked = true;
	}
}