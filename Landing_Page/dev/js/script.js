$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    slideSpeed: 500,
    itemsDesktop: 5,
    autoplay: !0,
    autoplayTimeout: 4000,
    rewind: !0,
    loop: false,
    mouseDrag: false,
    singleItem: true,
    dots: true,
    margin: 0,
    responsiveClass: true,
  });
});

// script for Hamburger Menu

var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('main_menu');

hamburger.onclick = function(){
    hamburger.classList.toggle('clicked');
    menu.classList.toggle('nav_show');
}