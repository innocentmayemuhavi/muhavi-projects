document.getElementById("submitBtn").addEventListener("click",
)
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent =document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  
  document.getElementById(pageName).style.display = "block";


  elmnt.style.backgroundColor = color;
}


document.getElementById("defaultOpen").click()
function send() {
  window.location.href="lgn.html";
}
function login(){
  window.location.href="mku.html"
}
function cancel(){
  window.location.href="lkk.html"
}
function terms(){
  window.location.href="mkurules.html"
}
function reg(){
  window.location.href="reg.html"
}
function back(){
  window.location.href="mku.html"
}
function logout(){
  window.location.href="lkk.html"
}
function gal(){
  window.location.href="gallery.html"
}
function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
  tabcontent =document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

   tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  
  document.getElementById(pageName).style.display = "block";


  elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click()
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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}