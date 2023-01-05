import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencySelect } from "../../store/actions/actions";
import { getCurrencyValue } from "../../store/selectors/selector";

export const SearchAside = () => {
    const currency = useSelector(getCurrencyValue);
    const dispatch = useDispatch();
    const [currencySymbol, setCurrencySymbol] = useState('')
    
    const handleCurrency = (e) => {
        const id = e.target.getAttribute('dataname');
        dispatch(currencySelect(id))
        const currencyLi = document.querySelectorAll('.c-li');
        for(let i=0; i<currencyLi.length; i++) {
            currencyLi[i].classList.remove('selected')
        };
        e.target.parentNode.classList.add('selected')   
    };

    useEffect(() => {
        const currencyAsideLi = document.querySelectorAll('.btn-check')
        for(let i=0; i<currencyAsideLi.length; i++) {            
            if(currencyAsideLi[i].getAttribute('dataname') === `${currency}`) {
                currencyAsideLi[i].checked = true;
            };
        }
        switch(currency) {
            case 'usd': return setCurrencySymbol('$')
            case 'rub': return setCurrencySymbol('₽')
            case 'euro': return setCurrencySymbol('€')
            case 'trl': return setCurrencySymbol('₺')
        }
            
    });


    return (
        <>
        <aside className="aside-search">
            <h3 className="aside-search-head">Недвижимость</h3>
            <form id="search-form">
                <div className="form-check-wrp">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="rent"/>
                        <label className="form-check-label" htmlFor="rent">
                            Аренда
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="sale"/>
                        <label className="form-check-label" htmlFor="sale">
                            Продажа
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="new"/>
                        <label className="form-check-label" htmlFor="new">
                            Новостройки
                        </label>
                    </div>
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