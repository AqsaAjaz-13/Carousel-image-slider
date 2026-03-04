

// var index = 0;

// function nextImage() {
//     index++;

//     if (index >= images.length) {
//         index = 0;
//     }

//     document.getElementById("slider").src = images[index];
// }

// function prevImage() {
//     index--;

//     if (index < 0) {
//         index = images.length - 1;
//     }

//     document.getElementById("slider").src = images[index];
// }

var slides = document.getElementsByClassName("slide");
var index = 0;

/* Pehli image show karo */
slides[index].style.display = "block";

function nextImage() {

    slides[index].style.display = "none";
    index++;

    if (index >= slides.length) {
        index = 0;
    }

    slides[index].style.display = "block";
}

function prevImage() {

    slides[index].style.display = "none";
    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    slides[index].style.display = "block";
}
