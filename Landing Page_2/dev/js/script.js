// script for loader

var loader;

function loaderFunction(){
	loader=setTimeout(showPage, 3000);
}

function showPage(){
	document.getElementById("preloader").style.display = "none";
	document.getElementById("header").style.visibility = "visible";
	document.getElementById("service").style.visibility = "visible";
}

// script for Hamburger Menu

var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('header_menu');

hamburger.onclick = function(){
	hamburger.classList.toggle('clicked');
	menu.classList.toggle('nav_show');
}

// script for Scrolling

window.onscroll = function() {showScrollElement()};

var check = document.getElementById("service");

var off21=document.getElementById("off21");
var off22=document.getElementById("off22");
var off23=document.getElementById("off23");
var off24=document.getElementById("off24");
var off25=document.getElementById("off25");
var off26=document.getElementById("off26");
var off27=document.getElementById("off27");
var off28=document.getElementById("off28");
var off29=document.getElementById("off29");
var off30=document.getElementById("off30");

var offer=document.getElementById("ouroffer");

var ser1=document.getElementById("ser1");
var ser2=document.getElementById("ser2");
var ser3=document.getElementById("ser3");
var ser4=document.getElementById("ser4");
var ser5=document.getElementById("ser5");
var ser6=document.getElementById("ser6");
var ser7=document.getElementById("ser7");

var footer=document.getElementById("footer");


var elemtrue21 = off21.offsetTop + off21.offsetHeight + 50;
var elemtrue22 = off22.offsetTop + off22.offsetHeight + 50;
var elemtrue23 = off23.offsetTop + off23.offsetHeight + 50;
var elemtrue24 = off24.offsetTop + off24.offsetHeight + 50;
var elemtrue25 = off25.offsetTop + off25.offsetHeight + 50;
var elemtrue26 = off26.offsetTop + off26.offsetHeight + 50;
var elemtrue27 = off27.offsetTop + off27.offsetHeight + 50;
var elemtrue28 = off28.offsetTop + off28.offsetHeight + 50;
var elemtrue29 = off29.offsetTop + off29.offsetHeight + 50;
var elemtrue30 = off30.offsetTop + off30.offsetHeight + 50;
var elemtrueoffer = offer.offsetTop + offer.offsetHeight + 100;
var elemtrueser1 = ser1.offsetTop + ser1.offsetHeight + 10;
var elemtrueser2 = ser2.offsetTop + ser2.offsetHeight + 10;
var elemtrueser3 = ser3.offsetTop + ser3.offsetHeight + 10;
var elemtrueser4 = ser4.offsetTop + ser4.offsetHeight + 10;
var elemtrueser5 = ser5.offsetTop + ser5.offsetHeight + 10;
var elemtrueser6 = ser6.offsetTop + ser6.offsetHeight + 10;
var elemtrueser7 = ser7.offsetTop + ser7.offsetHeight + 10;
var elemtruefooter = footer.offsetTop + footer.offsetHeight;



function showScrollElement() {
    if (getComputedStyle(check).visibility === "visible"){
        if(elemtrue21 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            off21.classList.add("scrolling");
        }
        if(elemtrue22 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            off22.classList.add("scrolling");
        }
        if(elemtrue23 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            off23.classList.add("scrolling");
        }
        if(elemtrue24 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            off24.classList.add("scrolling");
        }
        if(elemtrue25 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            off25.classList.add("scrolling");
        }
        if(elemtrue26 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            off26.classList.add("scrolling");
        }
        if(elemtrue27 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            off27.classList.add("scrolling");
        }
        if(elemtrue28 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            off28.classList.add("scrolling");
        }
        if(elemtrue29 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            off29.classList.add("scrolling");
        }
        if(elemtrue30 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            off30.classList.add("scrolling");
        }
        if(elemtrueoffer <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            offer.classList.add("scrolling");
        }
        if(elemtrueser1 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            ser1.classList.add("scrolling");
        }
        if(elemtrueser2 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            ser2.classList.add("scrolling");
        }
        if(elemtrueser3 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            ser3.classList.add("scrolling");
        }
        if(elemtrueser4 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            ser4.classList.add("scrolling");
        }
        if(elemtrueser5 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            ser5.classList.add("scrolling");
        }
        if(elemtrueser6 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            ser6.classList.add("scrolling");
        }
        if(elemtrueser7 <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            ser7.classList.add("scrolling");
        }
        if(elemtruefooter <= (document.documentElement.clientHeight + document.documentElement.scrollTop)){
            footer.classList.add("scrolling");
        }
    }

}
