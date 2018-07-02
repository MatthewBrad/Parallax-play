
//Parallax 

function parallax() {

    var parallaxcloud3 = document.getElementById("parallaxcloud3");
    var parallaxcloud2 = document.getElementById("parallaxcloud2");
    var parallaxcloud = document.getElementById("parallaxcloud");
    var parallax1 = document.getElementById("parallax1");
    var parallax2 = document.getElementById("parallax2");
    var parallax3 = document.getElementById("parallax3");

    parallaxcloud3.style.top = -(window.pageYOffset/2) + "px";
    parallaxcloud2.style.top = -(window.pageYOffset/3) + "px";
    parallaxcloud.style.top = -(window.pageYOffset/4) + "px";
    parallax1.style.top = -(window.pageYOffset/3) + "px";
    parallax2.style.top = -(window.pageYOffset/2) + "px";
    parallax3.style.top = -(window.pageYOffset/1) + "px";
}

//Event listener to detect scroll and run function
window.addEventListener("scroll",parallax);