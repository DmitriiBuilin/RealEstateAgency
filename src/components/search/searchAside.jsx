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
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Адрес
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" data-bs-parent="#accordionExample" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <select className="form-select form-select-dev" id="inputCountry" required>
                                <option value="rus">Россия</option>
                                <option value="trk">Турция</option>
                            </select>
                            <div className="invalid-feedback">
                            Please select a valid option.
                            </div>
                            <select className="form-select" id="inputCity" required>
                                <option value="antalya">...</option>
                                <option value="antalya">Анталья</option>
                                <option value="alanya">Аланья</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Цена
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" data-bs-parent="#accordionExample" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                                <label class="btn btn-outline-primary" for="btnradio1">USD $</label>
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                                <label class="btn btn-outline-primary" for="btnradio2">Euro €</label>
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                                <label class="btn btn-outline-primary" for="btnradio3">TRL ₺</label>
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off"/>
                                <label class="btn btn-outline-primary" for="btnradio4">Rub ₽</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Поиск
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" data-bs-parent="#accordionExample"  class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </aside>
            
        </>
    )
}

export default SearchAside;