//burde ha funnet bilder av klassen "thumbnailPicture" i stedet for alle bilder. 
var images = document.getElementsByTagName("img");

for(var i = 0; i < images.length; i++) {
    var image = images[i];
    if (!(image.id == "headerImage")) {
    	image.onclick = function(event) {
        	window.location.href = this.id + '.html';
    }
    };
}
