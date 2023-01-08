import { Link } from "react-router-dom";

export const LandlordsComponent = () => {
    return (
        <>
        <div className="container-field container-primary">
            <main className="landlords-main">
                <div className="landloards-header">
                    <h4>Разместите свой объект недвижимости</h4>
                    <p>Заполните форму чтобы продать или сдать в аренду квартиру / офис / торговое помещение или участок</p>
                </div>
                <form className="landlords-form row g-3" id="landlordForm" novalidate>
                    <div className="landlords-leftside">
                        <div className="col-10">
                            <input type="text" className="form-control" id="name" placeholder="Имя Фамилия" required/>
                        </div>
                        <div className="col-10">
                            <input type="email" className="form-control" id="email" placeholder="mail@mail.com" required/>
                        </div>
                        <div className="col-10">
                            <div className="input-group has-validation">                       
                            <input type="tel" className="form-control" id="tel" placeholder="tel. +90(535)123-45-67" required/>
                            </div>
                        </div>
                        <div className="col-10">
                            <label for="realAstateType" className="form-label">Выберите объект</label>
                            <select className="form-select" id="realAstateType" required>
                                <option selected disabled value="">Вид недвижимости</option>
                                <option>Квартира</option>
                                <option>Дом</option>
                                <option>Офис</option>
                                <option>Участок</option>
                                <option>Торговое помещение</option>
                            </select>
                        </div>                        
                        <div className="sale-rent">
                            <p className="form-label">Цель размещения объекта</p>
                            <input type="radio" id="sale" name="sale-rent" value="sale" required/>
                            <label for="sale">Продать</label>
                            <input type="radio" id="rent" name="sale-rent" value="rent" required/>
                            <label for="rent">Сдать в аренду</label>
                        </div>
                        <div className="col-10 landlords-row">
                            <div className="col-6">
                                <select className="form-select" id="city" required>
                                    <option selected disabled value="">Город</option>
                                    <option>Анталья</option>
                                    <option>Аланья</option>
                                    <option>Фетие</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <select className="form-select" id="district" required>
                                    <option selected disabled value="">Район</option>
                                    <option>Кепез</option>
                                    <option>Коньялты</option>
                                    <option>Лара</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-10">
                            <textarea className="landlords-textarea" name="address" id="address" cols="36" rows="3" placeholder="Адрес" maxlength="90" required></textarea>
                        </div>
                        <div className="col-10">
                            <textarea className="landlords-textarea" name="address" id="description" cols="36" rows="11" placeholder="Описание" maxlength="500"></textarea>
                        </div>
                        <div className="col-10">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label className="form-label" for="invalidCheck">
                                <Link 
                                className="form-label-link" 
                                to='/protection-personal-data'
                                // target='_blank'
                                >Я прочитал и согласен с положением о защите персональных данных</Link>                                
                            </label>
                                <div className="invalid-feedback">
                                    Вы долджны подтвердить согласие перед отправкой данных
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landlords-rightside">
                        <p className="form-label">Параметры объекта недвижимости</p>
                        <div className="col-10 landlords-row">
                            <div className="col-5">
                                <input type="number" className="form-control" id="m2gross" placeholder="m² gross" required/>                            
                            </div>
                            <div className="col-5">
                                <input type="number" className="form-control" id="m2net" placeholder="m² net" required/>    
                            </div>
                        </div>
                        <div className="col-10">
                            <select className="form-select" id="rooms" required>
                                <option selected disabled value="">Количество комнат</option>
                                <option>Комнаты 1+1</option>
                                <option>Комнаты 2+1</option>
                                <option>Комнаты 3+1</option>
                                <option>Комнаты 4+1</option>
                                <option>Комнаты 5+1</option>
                            </select>
                        </div>  
                        <div className="col-10">
                            <select className="form-select" id="floor" required>
                                <option selected disabled value="">Этаж</option>
                                <option>Этаж / 0</option>
                                <option>Этаж / 1</option>
                                <option>Этаж / 2</option>
                                <option>Этаж / 3</option>
                                <option>Этаж / 4</option>
                                <option>Этаж / 5</option>
                                <option>Этаж / 6</option>
                                <option>Этаж / 7</option>
                                <option>Этаж / 8</option>
                                <option>Этаж / 9</option>
                                <option>Этаж / 10</option>
                                <option>Этаж / 11</option>
                                <option>Этаж / 12</option>
                                <option>Этаж / 13</option>
                                <option>Этаж / 14</option>
                                <option>Этаж / 15</option>
                                <option>Этаж / 16</option>
                                <option>Этаж / 17</option>
                                <option>Этаж / 18</option>
                                <option>Этаж / 19</option>
                                <option>Этаж / 20</option>
                            </select>
                        </div>  
                        <div className="col-10">
                            <select className="form-select" id="totalFloor" required>
                                <option selected disabled value="">Всего этажей</option>
                                <option>Всего этажей / 0</option>
                                <option>Всего этажей / 1</option>
                                <option>Всего этажей / 2</option>
                                <option>Всего этажей / 3</option>
                                <option>Всего этажей / 4</option>
                                <option>Всего этажей / 5</option>
                                <option>Всего этажей / 6</option>
                                <option>Всего этажей / 7</option>
                                <option>Всего этажей / 8</option>
                                <option>Всего этажей / 9</option>
                                <option>Всего этажей / 10</option>
                                <option>Всего этажей / 11</option>
                                <option>Всего этажей / 12</option>
                                <option>Всего этажей / 13</option>
                                <option>Всего этажей / 14</option>
                                <option>Всего этажей / 15</option>
                                <option>Всего этажей / 16</option>
                                <option>Всего этажей / 17</option>
                                <option>Всего этажей / 18</option>
                                <option>Всего этажей / 19</option>
                                <option>Всего этажей / 20</option>
                            </select>
                        </div> 
                        <div className="col-10">
                            <select className="form-select" id="heating" required>
                                <option selected disabled value="">Отопление</option>
                                <option>Отопление / Нет</option>
                                <option>Отопление / Газ</option>
                                <option>Отопление / Электричество</option>                 
                            </select>
                        </div>
                        <div className="col-10">
                            <select className="form-select" id="airConditioning" required>
                                <option selected disabled value="">Кондиционер</option>
                                <option>Кондиционер / Есть</option>
                                <option>Кондиционер / Нет</option>           
                            </select>
                        </div> 
                        <div className="col-10">
                            <select className="form-select" id="bathrooms" required>
                                <option selected disabled value="">Количество ванных комнат</option>
                                <option>Ванных комнат / 0</option>
                                <option>Ванных комнат / 1</option>
                                <option>Ванных комнат / 2</option>
                                <option>Ванных комнат / 3</option> 
                                <option>Ванных комнат / 4</option>                
                            </select>
                        </div>
                        <div className="col-10">
                            <select className="form-select" id="balcony" required>
                                <option selected disabled value="">Балкон</option>
                                <option>Балкон / 0</option>
                                <option>Балкон / 1</option>
                                <option>Балкон / 2</option> 
                                <option>Балкон / 3</option>  
                                <option>Балкон / 4</option> 
                                <option>Балкон / 5</option>              
                            </select>
                        </div>  
                        <div className="col-10">
                            <select className="form-select" id="furniture" required>
                                <option selected disabled value="">Мебель</option>
                                <option>Мебель / Есть</option>
                                <option>Мебель / Нет</option>           
                            </select>
                        </div>
                        <div className="col-10">
                            <select className="form-select" id="kitchen" required>
                                <option selected disabled value="">Кухонная мебель</option>
                                <option>Кухонная мебель / Есть</option>
                                <option>Кухонная мебель / Нет</option>           
                            </select>
                        </div>                        
                        <div className="col-10">
                            <p className="form-label">Бытовая техника</p>
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" id="stove" name=""/>
                                <label className="form-label" for="stove">Кухонная плита</label>
                            </div>
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" id="dishwasher" name=""/>
                                <label className="form-label" for="dishwasher">Посудомоечная машина</label>
                            </div>
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" id="washingMachine" name=""/>
                                <label className="form-label" for="washingMachine">Стиральная машина</label>
                            </div>
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" id="refrigerator" name=""/>
                                <label className="form-label" for="refrigerator">Холодильник</label>
                            </div>
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" id="microwave" name=""/>
                                <label className="form-label" for="microwave">Микроволновая печь</label>
                            </div>                            
                        </div>                        
                    </div>
                </form>
                <button className="btn btn-primary landlord-button" form="landlordForm">Отправить</button>                
            </main>
        </div>
        </>
    );
}

export default LandlordsComponent;

