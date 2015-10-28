var imagebackground = 1;
element = document.getElementById("contentBackground")
function changeSite() {

    imagebackground = imagebackground*(-1)
    if(imagebackground > 0) 
        element.style.backgroundColor = "black";
    else
    	element.style.backgroundColor = "white";

	setTimeout(changeSite, 50);
}

$(document).ready(function() {
    setTimeout(changeSite, 50);        
});