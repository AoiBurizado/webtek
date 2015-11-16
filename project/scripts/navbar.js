var navbar = document.getElementById("nav");
// when the navbar follows the top of the page
var follow = true;

window.onscroll = function() {
	// if it is not following and you scroll past the "follow threshold", set it to follow
	if (!follow && document.body.scrollTop >= 240) {
		navbar.style.position = "fixed";
		navbar.style.width="750px";
		navbar.style.right = "0";
		navbar.style.left="0";
		navbar.style.top = "0";
		navbar.style.borderRadius = "0em 0em 0.3em 0.3em";
		follow = true;
	// if it is following and the user scrolls towards the top of the page, set it to not follow
	} else if (follow && document.body.scrollTop < 240) {
		navbar.style.position = "static";
		navbar.style.width="700px";
		navbar.style.borderRadius = "0.3em";
		follow = false;
	}
}