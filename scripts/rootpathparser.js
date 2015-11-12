// Because some html files in different directories use the same scripts
// we can't simply use a relative path in the scripts to link to images.
// This script finds the absolute path to the root of the webpage so
// that the other scripts can find the images, regardless of the position
// of the html file it is linked to.
var root = document.getElementsByTagName("script")[0].src;
var loc = location.href;

// finds the shortest of the two strings
var len = loc.length < root.lenth ? loc.length : root.length;

for (var i = 0; i < len; i++) {
	// if the two string differ at the given index, the root has been found
	if (root.charAt(i) != loc.charAt(i)) {
		root = root.substring(0, i);
		break;
	}
}