var slides = document.querySelectorAll('#slides .image-slide');
var currentSlide = 0;


function nextSlide(){
  goToSlide(currentSlide+1);
}

function backSlide(){
  goToSlide(currentSlide-1);
}

function goToSlide(n){
  slides[currentSlide].className = 'image-slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'image-slide slider';
}

var next = document.getElementById('next');
var back = document.getElementById('back');

next.onclick = function(){
  nextSlide();
};
back.onclick = function(){
  backSlide();
};