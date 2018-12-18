
//js cho slide ảnh
var slideIndex=1;
showSlides(1);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("box_slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}
window.onscroll = function(){menu()}
function menu(){
// xử lý phần menu
if (document.body.scrollTop>140 || document.documentElement.scrollTop > 140) {
     document.getElementById('header').classList.add("sticky");
     document.getElementById('nav').classList.add("fixed");
  }else{
     document.getElementById('header').classList.remove("sticky");
     document.getElementById('nav').classList.remove("fixed");
  }
}
window.addEventListener("resize", myFunction);
function myFunction() {
     var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
if (w>780) {
   document.getElementsByClassName('menu')[0].style.display='inline-flex';
  document.getElementsByClassName('login')[0].style.display='flex';
}
};

function menu_show(){
  var x=document.getElementsByClassName('menu')[0].style.display;
  var y=document.getElementsByClassName('login')[0].style.display;
  if (x==='none'&& y==='none') {
     document.getElementsByClassName('menu')[0].style.display='inline-flex';
  document.getElementsByClassName('login')[0].style.display='flex';
}else{
  document.getElementsByClassName('menu')[0].style.display='none';
  document.getElementsByClassName('login')[0].style.display='none';
}
 
}
$(document).ready(function() {
	
  $(".back_to_top").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);


});
});

