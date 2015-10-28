var navbar = document.getElementById("nav");
var docked = true;

window.onscroll = function() {
	if (docked && document.body.scrollTop >= 240) {
		navbar.style.position = "fixed";
		navbar.style.width="750px";
		navbar.style.right = "0";
		navbar.style.left="0";
		navbar.style.top = "0";
		navbar.style.borderRadius = "0em 0em 0.3em 0.3em";
		docked = false;
	} else if (!docked && document.body.scrollTop < 240) {
		navbar.style.position = "static";
		navbar.style.width="700px";
		navbar.style.borderRadius = "0.3em";
		docked = true;
	}
}