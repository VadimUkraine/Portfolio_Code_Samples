
// script for Menus in Product Assortment Block

//Menu of Brands in Product Page

var menuArrow =  document.getElementsByClassName('brands-name__arrow')[0];
var menuField =  document.getElementsByClassName('brands-name-wrap')[0];
var menuFieldText =  document.getElementsByClassName('brands-name__caption')[0];
var dropdownMenuBrands =  document.getElementsByClassName('brands-menu')[0];
var dropdownItemBrands =  document.getElementsByClassName('brands-menu__item');


function chooseBrand(){
	menuArrow.classList.toggle('rotate');
	dropdownMenuBrands.classList.toggle('menu-show__brands');
	menuArrowCategory.classList.remove('rotate');
	dropdownMenuCategory.classList.remove('menu-show__category');
	menuArrowPrice.classList.remove('rotate');
	dropdownMenuPrice.classList.remove('menu-show__price');	
};

function addBrand(e){
	var target = e.target;
	menuFieldText.textContent = target.textContent;
	chooseBrand();
};

for (var w=0; w<dropdownItemBrands.length; w++){
	dropdownItemBrands[w].addEventListener ('click', addBrand);
};

menuField.addEventListener ('click', chooseBrand);

//Menu of Categories in Product Page

var menuArrowCategory =  document.getElementsByClassName('categories__arrow')[0];
var menuFieldCategory =  document.getElementsByClassName('categories-name-wrap')[0];
var menuFieldTextCategory =  document.getElementsByClassName('categories-name__caption')[0];
var dropdownMenuCategory =  document.getElementsByClassName('categories-menu')[0];
var dropdownItemCategory =  document.getElementsByClassName('categories-menu__item');


function chooseCategory(){
	menuArrowCategory.classList.toggle('rotate');
	dropdownMenuCategory.classList.toggle('menu-show__category');
	menuArrow.classList.remove('rotate');
	dropdownMenuBrands.classList.remove('menu-show__brands');	
	menuArrowPrice.classList.remove('rotate');
	dropdownMenuPrice.classList.remove('menu-show__price');
};

function addCategory(e){
	var target = e.target;
	menuFieldTextCategory.textContent = target.textContent;
	chooseCategory();
};

for (var w=0; w<dropdownItemCategory.length; w++){
	dropdownItemCategory[w].addEventListener ('click', addCategory);
};

menuFieldCategory.addEventListener ('click', chooseCategory);

//Menu of Price in Product Page

var menuArrowPrice =  document.getElementsByClassName('price__arrow')[0];
var menuFieldPrice =  document.getElementsByClassName('price-name-wrap')[0];
var menuFieldTextPrice =  document.getElementsByClassName('price-name__caption')[0];
var dropdownMenuPrice =  document.getElementsByClassName('price-menu')[0];
var dropdownItemPrice =  document.getElementsByClassName('price-menu__item');


function choosePrice(){
	menuArrowPrice.classList.toggle('rotate');
	dropdownMenuPrice.classList.toggle('menu-show__price');	
	menuArrow.classList.remove('rotate');
	dropdownMenuBrands.classList.remove('menu-show__brands');
	menuArrowCategory.classList.remove('rotate');
	dropdownMenuCategory.classList.remove('menu-show__category');
};

function addPrice(e){
	var target = e.target;
	menuFieldTextPrice.textContent = target.textContent;
	choosePrice();
};

for (var w=0; w<dropdownItemPrice.length; w++){
	dropdownItemPrice[w].addEventListener ('click', addPrice);
};

menuFieldPrice.addEventListener ('click', choosePrice);



// script for Grid change on Product Page

var gridSort =  document.getElementsByClassName('grid-wrap')[0];
var lineSort =  document.getElementsByClassName('line-wrap')[0];
var productContent =  document.getElementsByClassName('products-content')[0];

function gridShow(){
	gridSort.classList.toggle('grid-show-select');
	lineSort.classList.remove('line-show-select');
	productContent.classList.remove('products-content-show');
};
function lineShow(){
	lineSort.classList.toggle('line-show-select');
	gridSort.classList.remove('grid-show-select');
	productContent.classList.add('products-content-show');
};

lineSort.addEventListener('click', lineShow);
gridSort.addEventListener('click', gridShow);

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


$(document).ready(function() {

// initializing the Slider for Blog News

	$('.news-menu').inewsticker({
		speed: 5000,
		effect:"fade",
	});

});
