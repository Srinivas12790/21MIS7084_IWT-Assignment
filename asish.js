let image = document.querySelectorAll('.image');
let btn = document.querySelectorAll('button');
let footer = document.getElementsByClassName('footer')[0];

let no_of_image = image.length;
let curr_image_index = 0;
let index = image.length;

for( b of btn)
b.addEventListener('click',move)

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  if (n === -1 && slideIndex === 1) {
    return; 
  }
  if (n === 1 && slideIndex === document.getElementsByClassName("image").length) {
    return; 
  }
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setInterval(nextImage,3000);
}

  





