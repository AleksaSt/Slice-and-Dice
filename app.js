var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testimonials-item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  function myFunction(x) {
    if (x.matches) { 
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    } else {
      slides[slideIndex-1].style.display = "flex";  
      dots[slideIndex-1].className += " active";
    }
  }
  
  var x = window.matchMedia("(max-width: 768px)")
  myFunction(x) 
  x.addListener(myFunction) // Attach listener function on state changes
}

/* Nav Toggle */
let nav = $("#nav");
let navToggle =$("#navToggle");

$("#navToggle").on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
});






