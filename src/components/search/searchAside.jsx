export const SearchAside = () => {
    return (
        <>
        <aside className="aside-search">
            <h3>Недвижимость</h3>
            <ul>
                <li>Аренда</li>
                <li>Продажа</li>
                <li>Новостройки</li>
            </ul>
            <div className="accordion" id="accordionExample">
                <form id="search-form">
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
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                                    <label className="btn btn-user btn-outline-primary" for="btnradio1">USD $</label>
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                                    <label className="btn btn-user btn-outline-primary" for="btnradio2">Euro €</label>
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                                    <label className="btn btn-user btn-outline-primary" for="btnradio3">TRL ₺</label>
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off"/>
                                    <label className="btn btn-user btn-outline-primary" for="btnradio4">Rub ₽</label>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="number" max="5" className="form-control" placeholder="Min" aria-label="Мин"/>
                                        <span>$</span>
                                    </div>
                                    <div className="col">
                                        <input type="number" className="form-control" placeholder="Макс" aria-label="Max"/>
                                        <span>$</span>
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
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Поиск по сайту"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="search-button">
                    <button type="submit" form="search-form" className="btn btn-secondary search-button-item">Искать</button>
                </div>                                
            </div>
        </aside>
            
        </>
    )
}

export default SearchAside;