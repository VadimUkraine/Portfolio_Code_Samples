var show = document.getElementById("lost");
var extra = document.getElementById("feedback_form");
var showclose = document.getElementById("close");

show.onclick = function(){
  extra.style.right = "0%";
};

showclose.onclick = function(){
  console.log(extra);
  extra.style.right = "-100%";
};


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    slideSpeed: 500,
    itemsDesktop: 2,
    autoplay: !0,
    autoplayTimeout: 4000,
    rewind: !0,
    loop: false,
    mouseDrag: false,
    singleItem: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i> ','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
  });
});