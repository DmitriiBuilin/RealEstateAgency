const languageBtn = document.querySelector("#language");
const menuBtn = document.querySelector("#menu");
const languagePopUp = document.querySelector(".currency-and-language");
const menuPopUp = document.querySelector(".menu");
const languageCloseBtn = document.querySelector(".language-close-btn-point");
const menuCloseBtn = document.querySelector(".menu-close-btn-point");
const languageCloseField = document.querySelector('.currency-and-menu-wrp');

const currency = document.querySelector('.currency');
const lenguage = document.querySelector('.lenguage');
const currencyLi = document.querySelectorAll('.c-li');
const lenguageLi = document.querySelectorAll('.l-li');

languageBtn.onclick = () => {
    console.log('click')
    document.querySelector(".currency-and-language").classList.add('show');
    document.querySelector(".currency-and-menu-wrp").classList.add('show');
};
    

menuBtn.onclick = () => {
    document.querySelector(".menu").classList.add('show');
    document.querySelector(".currency-and-menu-wrp").classList.add('show');
};
languageCloseBtn.onclick = () => {
    document.querySelector(".currency-and-language").classList.remove('show');
    document.querySelector(".currency-and-menu-wrp").classList.remove('show');
};
menuCloseBtn.onclick = () => {
    document.querySelector(".menu").classList.remove('show');
    document.querySelector(".currency-and-menu-wrp").classList.remove('show');
};  
languageCloseField.addEventListener('click', (e) => {
	const langDiv = e.composedPath().includes(languagePopUp);
    const MenuDiv = e.composedPath().includes(menuPopUp);
 	if (!langDiv & !MenuDiv) {
		languagePopUp.classList.remove('show');
        menuPopUp.classList.remove('show');
        languageCloseField.classList.remove('show');
	}
});
currency.addEventListener('click', (e) => {
    for(let i=0; i<currencyLi.length; i++) {
        currencyLi[i].classList.remove('selected')
    };
    e.target.classList.add('selected')
});
lenguage.addEventListener('click', (e) => {
    for(let i=0; i<lenguageLi.length; i++) {
        lenguageLi[i].classList.remove('selected')
    };
    e.target.classList.add('selected')
});



