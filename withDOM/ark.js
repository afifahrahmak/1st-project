// DOM Selection

// MENU (NAVBAR) SET
var toggleStat = false;
var toggle = function(x){
    x.classList.toggle("change");
    var getSidebar = document.querySelector('.side-bar');
    var getSidebarLink= document.querySelector('.side-bar a');

    if (toggleStat === false){
        getSidebar.style.visibility = 'visible';
        for (var i=0; i<getSidebarLink.length; i++){
            getSidebarLink[i].style.opacity = '1';
        }
        toggleStat = true;
    }
    else if (toggleStat === true){
        getSidebar.style.visibility = 'hidden';
        for (var i=0; i<getSidebarLink.length; i++){
            getSidebarLink[i].style.opacity = '0';
        }
        toggleStat = false;
    }
}

//EFFECTS SET

// TYPEWRITER EFFECT
var i = 0;
var speed1 = 150;
var logo = function typeWriter() {
    var txt = 'Dusty Memories';
    if (i < txt.length) {
        document.getElementById('logo-effect').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed1);
    }
}

var j = 0;
var speed2 = 80;
var quote = function typeWriter() {
    var txt = 'memories in a snap - capturing life, creating art';
    if (j < txt.length) {
        document.getElementById('slogan').innerHTML += txt.charAt(j);
        j++;
        setTimeout(typeWriter, speed2);
  }
}



document.addEventListener('DOMContentLoaded', 
    function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, options);
    });


//SLIDE IMAGE
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
} 