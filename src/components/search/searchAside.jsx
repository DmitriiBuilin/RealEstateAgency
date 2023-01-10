import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { currencySelect, pageSelect } from "../../store/actions/actions";
import { getCurrencyValue, getPageValue } from "../../store/selectors/selector";

export const SearchAside = () => {
    const currency = useSelector(getCurrencyValue);
    const dispatch = useDispatch();
    const [currencySymbol, setCurrencySymbol] = useState('')
    const pageKey = useSelector(getPageValue);
    
    const handleCurrency = (e) => {
        const id = e.target.getAttribute('dataname');
        dispatch(currencySelect(id))
        const currencyLi = document.querySelectorAll('.c-li');
        for(let i=0; i<currencyLi.length; i++) {
            currencyLi[i].classList.remove('selected')
        };
        e.target.parentNode.classList.add('selected')   
    };
    const handleSearchCloseButton = () => {
        document.querySelector('.aside-search').style.display = 'none';
    };
    const handlePage = (e) => {
        const pageId = e.target.getAttribute('datapage');
        dispatch(pageSelect(pageId));
    };
    

    useEffect(() => {
        const currencyAsideLi = document.querySelectorAll('.btn-check');
        const contextMenu = document.querySelectorAll('.header-menu-item-context');        

        for(let i=0; i<contextMenu.length; i++) {
            contextMenu[i].classList.add('hidden');
        };        
        for(let i=0; i<currencyAsideLi.length; i++) {            
            if(currencyAsideLi[i].getAttribute('dataname') === `${currency}`) {
                currencyAsideLi[i].checked = true;
            };
        }      

        switch(currency) {
            case 'usd': setCurrencySymbol('$');
            case 'rub': setCurrencySymbol('₽');
            case 'euro': setCurrencySymbol('€');
            case 'trl': setCurrencySymbol('₺');
            default: setCurrencySymbol('$');
        } 
        switch(pageKey) {
            case 'rent': return document.querySelector('.rent').classList.remove('hidden');
            case 'sale': return document.querySelector('.sale').classList.remove('hidden');
            case 'new': return document.querySelector('.new').classList.remove('hidden');
            default: return;
        };
    });


    return (
        <>
        <aside className="aside-search">
            <h3 className="aside-search-head">Недвижимость</h3>
            <div className="language-close-btn searchbar-close-button">
                            <svg onClick={handleSearchCloseButton} className="language-close-btn-point" width="20" height="20" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM5.35355 4.64645C5.15829 4.45118 4.84171 4.45118 4.64645 4.64645C4.45118 4.84171 4.45118 5.15829 4.64645 5.35355L7.29289 8L4.64645 10.6464C4.45118 10.8417 4.45118 11.1583 4.64645 11.3536C4.84171 11.5488 5.15829 11.5488 5.35355 11.3536L8 8.70711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.70711 8L11.3536 5.35355C11.5488 5.15829 11.5488 4.84171 11.3536 4.64645C11.1583 4.45118 10.8417 4.45118 10.6464 4.64645L8 7.29289L5.35355 4.64645Z" />
                            </svg>
                        </div>
            <form id="search-form">
                <div className="form-check-wrp">
                    <NavLink onClick={handlePage} datapage='rent' to="/rent" className="header-menu-item">
                        Аренда
                    </NavLink>
                    <ul className="header-menu-item-context rent">
                        <li>Квартира</li>
                        <li>Дом</li>
                        <li>Офис</li>
                        <li>Торговое помещение</li>
                        <li>Участок</li>
                    </ul>
                    <NavLink onClick={handlePage} datapage='sale' to="/sale" className="header-menu-item">
                        Продажа
                    </NavLink>
                    <ul className="header-menu-item-context sale">
                        <li>Квартира</li>
                        <li>Дом</li>
                        <li>Офис</li>
                        <li>Торговое помещение</li>
                        <li>Участок</li>
                    </ul>
                    <NavLink onClick={handlePage} datapage='new' to="/new" className="header-menu-item">
                        Новостройки
                    </NavLink>
                    <ul className="header-menu-item-context new">
                        <li>Квартира</li>
                        <li>Дом</li>
                        <li>Офис</li>
                        <li>Торговое помещение</li>
                    </ul>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button accordion-button-user" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Адрес
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" data-bs-parent="#accordionExample" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <select className="form-select form-select-dev" id="inputCountry" required>
                                    <option value="rus">Страна</option>
                                    <option value="trk">Турция</option>
                                </select>
                                <div className="invalid-feedback">
                                Please select a valid option.
                                </div>
                                <select className="form-select" id="inputCity" required>
                                    <option value="antalya">Город</option>
                                    <option value="antalya">Анталья</option>
                                    <option value="alanya">Аланья</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Цена
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" data-bs-parent="#accordionExample" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" onClick={handleCurrency} className="btn-check" dataname="usd" name="btnradio" id="btnradio1" autoComplete="off" />
                                    <label className="btn btn-user btn-outline-primary" htmlFor="btnradio1">USD $</label>

                                    <input type="radio" onClick={handleCurrency} className="btn-check" dataname="euro" name="btnradio" id="btnradio2" autoComplete="off"/>
                                    <label className="btn btn-user btn-outline-primary" htmlFor="btnradio2">Euro €</label>

                                    <input type="radio" onClick={handleCurrency} className="btn-check" dataname="trl" name="btnradio" id="btnradio3" autoComplete="off"/>
                                    <label className="btn btn-user btn-outline-primary" htmlFor="btnradio3">TRL ₺</label>

                                    <input type="radio" onClick={handleCurrency} className="btn-check" dataname="rub" name="btnradio" id="btnradio4" autoComplete="off"/>
                                    <label className="btn btn-user btn-outline-primary" htmlFor="btnradio4">Rub ₽</label>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="number" max="5" className="form-control" placeholder="Мин" aria-label="Min"/>
                                        <span>{currencySymbol}</span>
                                    </div>
                                    <div className="col">
                                        <input type="number" className="form-control" placeholder="Макс" aria-label="Max"/>
                                        <span>{currencySymbol}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Поиск
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" data-bs-parent="#accordionExample"  className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="По всем параметрам"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-button">
                    <button type="submit" form="search-form" className="btn btn-primary search-button-item">Искать</button>
                    </div>   
                </div>
            </form>    
        </aside>
            
        </>
    )
}

export default SearchAside;