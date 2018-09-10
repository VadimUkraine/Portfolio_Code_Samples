$(document).ready(function() {

// initializing the Slider for Blog News

	$('.news-menu').inewsticker({
		speed: 5000,
		effect:"fade",
	});

// initializing the main Slider OWL

	 $(".owl-carousel").owlCarousel({
	    items: 1,
	    slideSpeed: 500,
	    itemsDesktop: 3,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    rewind: !0,
	    loop: false,
	    mouseDrag: false,
	    singleItem: true,
	    dots: true,
	    dotsClass: 'dots-container',
	    margin: 0,
	    responsiveClass: true,
	    nav: false,
	    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i> ','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
	});
});

// script for Form of Login or Register

var formReg = document.getElementsByClassName('registration')[0];
var logButton = document.getElementsByClassName('login')[0];
var closeButton = document.getElementsByClassName('reg-form-close-wrap')[0];
var form = document.getElementsByClassName('reg-form')[0];
var login = document.querySelector("div.confirm-wrap input[name=Login]");
var register = document.querySelector("div.confirm-wrap input[name=Register]");
var deleteUsername = document.querySelector("form.reg-form input[name=Username]");
var deletePassword = document.querySelector("form.reg-form input[name=Password]");

function showRegForm(){
	formReg.style.right = '0';
};

function closeRegForm(){
	formReg.style.right = '-100%';
	deletePassword.value = '';
	deleteUsername.value = '';
};

function preventSendForm(event){
	event.preventDefault();
};

logButton.addEventListener('click', showRegForm);
closeButton.addEventListener('click', closeRegForm);
login.addEventListener('click', closeRegForm);
register.addEventListener('click', closeRegForm);
form.addEventListener('click', preventSendForm);


// script for Search Input to show prepared results

var search = document.querySelector("form.form-search input[type=search]");
var result = document.getElementsByClassName('search-result')[0];

function showResult(){
	if (search.value == 0){
		result.classList.remove('sr-show');
	} else{
		result.classList.add('sr-show');
	}	
};

search.addEventListener('input', showResult);


// script for Search Input to show prepared results in Navigation Block

var searchHeader = document.getElementsByClassName('header-search')[0];
var resultHeader = document.getElementsByClassName('header-search-result')[0];

function showHeaderResult(){
	if (searchHeader.value == 0){
		resultHeader.classList.remove('header-sr-show');
	} else{
		resultHeader.classList.add('header-sr-show');
	}	
};

searchHeader.addEventListener('input', showHeaderResult);


// script for Footer with content in Slider

var pushText = document.getElementsByClassName('owl-dot');

window.addEventListener('load', function () {

	var newDiv = document.createElement('div');
	newDiv.className = 'slider-footer-content';
	newDiv.innerHTML = '<span class="slider-footer__caption">Pink Shoes</span>' + '<span class="slider-footer__text">Now af $145,99</span>';
	pushText[0].appendChild(newDiv);

	var newDiv2 = document.createElement('div');
	newDiv2.className = 'slider-footer-content';
	newDiv2.innerHTML = '<span class="slider-footer__caption">Anna Fields</span>' + '<span class="slider-footer__text">Limited Edition</span>';
	pushText[1].appendChild(newDiv2);

	var newDiv3 = document.createElement('div');
	newDiv3.className = 'slider-footer-content';
	newDiv3.innerHTML = '<span class="slider-footer__caption">Prada</span>' + '<span class="slider-footer__text">Summer is coming</span>';
	pushText[2].appendChild(newDiv3);

});


// script to change Content on Main page in product Item

var newContent = document.getElementsByClassName('shoes-block__new-content')[0];
var newContent2 = document.getElementsByClassName('shoes-block__new-content')[1];

window.addEventListener('resize', function(){
	if(window.innerWidth<971){
		newContent.textContent = 'Even&Odd';
		newContent2.textContent = 'Even&Odd';
	} else{
		newContent.textContent = 'Buffalo Decollete';
		newContent2.textContent = 'Buffalo Decollete';
	}
});

window.addEventListener('load', function () {
	if(window.innerWidth<971){
			newContent.textContent = 'Even&Odd';
			newContent2.textContent = 'Even&Odd';
		} else{
			newContent.textContent = 'Buffalo Decollete';
			newContent2.textContent = 'Buffalo Decollete';
		}
});


// script for Hamburger Menu

var hamburger =  document.getElementsByClassName('gamburger-menu')[0];
var menu =  document.getElementsByClassName('main-menu')[0];

function showHideMenu(){
	hamburger.classList.toggle('clicked');
	menu.classList.toggle('nav-show');
};

hamburger.addEventListener('click', showHideMenu);


// script for Form of Search in Navigation Block

var headerSearch =  document.getElementsByClassName('search-header-wrap')[0];
var headerSearchInput =  document.getElementsByClassName('header-search')[0];

function showHideHeaderSearch(){
	headerSearchInput.classList.toggle('header-form-show');
	resultHeader.classList.remove('header-sr-show');
};

headerSearch.addEventListener('click', showHideHeaderSearch);

//script to save email in JSON format to LocalStorage

var saveBtn =  document.getElementsByClassName('send-email__btn')[0];
var saveInput =  document.getElementsByClassName('send-email__input')[0];

function saveEmail(){
	var saveJSON = {};
	saveJSON.email = saveInput.value;
	localStorage.setItem("email", JSON.stringify(saveJSON));
	saveInput.value = '';
	console.log(JSON.parse(localStorage.getItem("email")));
};

saveBtn.addEventListener ('click', saveEmail);