function showRegForm(){formReg.style.right="0"}function closeRegForm(){formReg.style.right="-100%",deletePassword.value="",deleteUsername.value=""}function preventSendForm(e){e.preventDefault()}function showResult(){0==search.value?result.classList.remove("sr-show"):result.classList.add("sr-show")}function showHeaderResult(){0==searchHeader.value?resultHeader.classList.remove("header-sr-show"):resultHeader.classList.add("header-sr-show")}function showHideMenu(){hamburger.classList.toggle("clicked"),menu.classList.toggle("nav-show")}function showHideHeaderSearch(){headerSearchInput.classList.toggle("header-form-show"),resultHeader.classList.remove("header-sr-show")}function saveEmail(){var e={};e.email=saveInput.value,localStorage.setItem("email",JSON.stringify(e)),saveInput.value="",console.log(JSON.parse(localStorage.getItem("email")))}$(document).ready(function(){$(".news-menu").inewsticker({speed:5e3,effect:"fade"}),$(".owl-carousel").owlCarousel({items:1,slideSpeed:500,itemsDesktop:3,autoplay:!0,autoplayTimeout:5e3,rewind:!0,loop:!1,mouseDrag:!1,singleItem:!0,dots:!0,dotsClass:"dots-container",margin:0,responsiveClass:!0,nav:!1,navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i> ','<i class="fa fa-chevron-right" aria-hidden="true"></i>']})});var formReg=document.getElementsByClassName("registration")[0],logButton=document.getElementsByClassName("login")[0],closeButton=document.getElementsByClassName("reg-form-close-wrap")[0],form=document.getElementsByClassName("reg-form")[0],login=document.querySelector("div.confirm-wrap input[name=Login]"),register=document.querySelector("div.confirm-wrap input[name=Register]"),deleteUsername=document.querySelector("form.reg-form input[name=Username]"),deletePassword=document.querySelector("form.reg-form input[name=Password]");logButton.addEventListener("click",showRegForm),closeButton.addEventListener("click",closeRegForm),login.addEventListener("click",closeRegForm),register.addEventListener("click",closeRegForm),form.addEventListener("click",preventSendForm);var search=document.querySelector("form.form-search input[type=search]"),result=document.getElementsByClassName("search-result")[0];search.addEventListener("input",showResult);var searchHeader=document.getElementsByClassName("header-search")[0],resultHeader=document.getElementsByClassName("header-search-result")[0];searchHeader.addEventListener("input",showHeaderResult);var pushText=document.getElementsByClassName("owl-dot");window.addEventListener("load",function(){var e=document.createElement("div");e.className="slider-footer-content",e.innerHTML='<span class="slider-footer__caption">Pink Shoes</span><span class="slider-footer__text">Now af $145,99</span>',pushText[0].appendChild(e);var t=document.createElement("div");t.className="slider-footer-content",t.innerHTML='<span class="slider-footer__caption">Anna Fields</span><span class="slider-footer__text">Limited Edition</span>',pushText[1].appendChild(t);var n=document.createElement("div");n.className="slider-footer-content",n.innerHTML='<span class="slider-footer__caption">Prada</span><span class="slider-footer__text">Summer is coming</span>',pushText[2].appendChild(n)});var newContent=document.getElementsByClassName("shoes-block__new-content")[0],newContent2=document.getElementsByClassName("shoes-block__new-content")[1];window.addEventListener("resize",function(){window.innerWidth<971?(newContent.textContent="Even&Odd",newContent2.textContent="Even&Odd"):(newContent.textContent="Buffalo Decollete",newContent2.textContent="Buffalo Decollete")}),window.addEventListener("load",function(){window.innerWidth<971?(newContent.textContent="Even&Odd",newContent2.textContent="Even&Odd"):(newContent.textContent="Buffalo Decollete",newContent2.textContent="Buffalo Decollete")});var hamburger=document.getElementsByClassName("gamburger-menu")[0],menu=document.getElementsByClassName("main-menu")[0];hamburger.addEventListener("click",showHideMenu);var headerSearch=document.getElementsByClassName("search-header-wrap")[0],headerSearchInput=document.getElementsByClassName("header-search")[0];headerSearch.addEventListener("click",showHideHeaderSearch);var saveBtn=document.getElementsByClassName("send-email__btn")[0],saveInput=document.getElementsByClassName("send-email__input")[0];saveBtn.addEventListener("click",saveEmail);