var root = document.getElementsByTagName("script")[0].src;
var loc = location.href;

var len = loc.length < root.lenth ? loc.length : root.length;

for (var i = 0; i < len; i++) {
	if (root.charAt(i) != loc.charAt(i)) {
		root = root.substring(0, i);
	}
}
console.log(root);