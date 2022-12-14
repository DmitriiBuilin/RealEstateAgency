const languageBtn = document.querySelector("#language");
const languagePopUp = document.querySelector(".currency-and-language");
const languageCloseBtn = document.querySelector(".language-close-btn-point");
const languageCloseField = document.querySelector('.currency-and-language-wrp');
const currency = document.querySelector('.currency');
const lenguage = document.querySelector('.lenguage');
const currencyLi = document.querySelectorAll('.c-li');
const lenguageLi = document.querySelectorAll('.l-li');

languageBtn.onclick = () => {
    document.querySelector(".currency-and-language").classList.add('show');
    document.querySelector(".currency-and-language-wrp").classList.add('show');
};


languageCloseBtn.onclick = () => {
    document.querySelector(".currency-and-language").classList.remove('show');
    document.querySelector(".currency-and-language-wrp").classList.remove('show');
};
 
 
languageCloseField.addEventListener('click', (e) => {
	const withinBoundaries = e.composedPath().includes(languagePopUp);
 	if ( ! withinBoundaries ) {
		languagePopUp.classList.remove('show');
        languageCloseField.classList.remove('show');
	}
})

currency.addEventListener('click', (e) => {
    for(let i=0; i<currencyLi.length; i++) {
        currencyLi[i].classList.remove('selected')
    };
    e.target.classList.add('selected')
})

lenguage.addEventListener('click', (e) => {
    for(let i=0; i<lenguageLi.length; i++) {
        lenguageLi[i].classList.remove('selected')
    };
    e.target.classList.add('selected')
})


