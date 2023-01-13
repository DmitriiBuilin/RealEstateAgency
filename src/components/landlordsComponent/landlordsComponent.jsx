import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrencyValue } from "../../store/selectors/selector";

export const LandlordsComponent = () => {
    const currency = useSelector(getCurrencyValue);
    const [currencySymbol, setCurrencySymbol] = useState() 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Landlord submit')
    };

    useEffect(() => {  
        /*Load-photo script*/        
        let inputs = document.querySelectorAll('.input-file');
        console.log(inputs);
        Array.prototype.forEach.call(inputs, function (input) {
            let labelVal = document.querySelector('.load-photo-button-text').innerText;
            console.log(labelVal);
            console.log(input);
            input.addEventListener('change', function (e) {
                let countFiles = '';
                if (this.files && this.files.length >= 1)
                    countFiles = this.files.length;   
                    console.log(countFiles);     
                if (countFiles)
                    document.querySelector('.load-photo-button-text').innerText = 'Выбрано файлов: ' + countFiles;
                else
                    document.querySelector('.load-photo-button-text').innerText = labelVal;
            });
        });

        switch(currency) {
            case 'usd': 
                setCurrencySymbol('$');
                break;
            case 'rub': 
                setCurrencySymbol('₽');
                break;
            case 'euro': 
                setCurrencySymbol('€');
                break;
            case 'trl': 
                setCurrencySymbol('₺');
                break;
            default: setCurrencySymbol('$');
        } 
    });

    return (
        <>
        <div className="container-field container-primary">
            <main className="landlords-main">
                <div className="landloards-header">
                    <h4>Разместите свой объект недвижимости</h4>
                    <p>Заполните форму чтобы продать или сдать в аренду квартиру / офис / торговое помещение или участок</p>
                </div>
                <form encType="multipart/form-data" method="post" className="landlords-form row g-3" id="landlordForm" noValidate>
                    <div className="landlords-leftside">
                        <div className="col-10">
                            <input type="text" className="form-control" id="ownerName" placeholder="Имя Фамилия" required/>
                        </div>
                        <div className="col-10">
                            <input type="email" className="form-control" id="email" placeholder="mail@mail.com" required/>
                        </div>
                        <div className="col-10">
                            <div className="input-group has-validation">                       
                            <input type="tel" className="form-control" id="phoneNumber" placeholder="tel. +90(535)123-45-67" required/>
                            </div>
                        </div>
                        <div className="col-10">
                            <label htmlFor="realAstateType" className="form-label">Выберите объект</label>
                            <select defaultValue='Вид недвижимости' className="form-select" id="realAstateType" required>
                                <option disabled>Вид недвижимости</option>
                                <option>Квартира</option>
                                <option>Дом</option>
                                <option>Офис</option>
                                <option>Участок</option>
                                <option>Торговое помещение</option>
                            </select>
                        </div>                        
                        <div className="sale-rent">
                            <p className="form-label">Цель размещения объекта</p>
                            <input type="radio" id="sale" name="target" value="sale" required/>
                            <label htmlFor="sale">Продать</label>
                            <input type="radio" id="rent" name="target" value="rent" required/>
                            <label htmlFor="rent">Сдать в аренду</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="newBuilding" required />
                            <label className="form-label" htmlFor="newBuilding">
                                Новостройка
                            </label>
                        </div>
                        <div className="col-5 flex-row">
                                <input type="number" className="form-control" id="price" placeholder="Цена" required/>
                                <label className="form-label margin-0 label-padding" htmlFor="price">{currencySymbol}</label>                            
                            </div>
                        <div className="col-10 landlords-row">
                            <div className="col-6">
                                <select defaultValue='Город' className="form-select" id="city" required>
                                    <option disabled >Город</option>
                                    <option>Анталья</option>
                                    <option>Аланья</option>
                                    <option>Фетие</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <select defaultValue='Район' className="form-select" id="district" required>
                                    <option disabled >Район</option>
                                    <option>Кепез</option>
                                    <option>Коньялты</option>
                                    <option>Лара</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-10">
                            <textarea className="landlords-textarea" name="address" id="address" placeholder="Адрес" maxLength="90" required></textarea>
                        </div>
                        <div className="col-10">
                            <textarea className="landlords-textarea" name="description" id="description" placeholder="Описание" maxLength="500"></textarea>
                        </div>
                        <div className="col-10">
                            <label className="btn btn-primary load-photo-button" htmlFor="img"><span className="load-photo-button-text">Загрузите фото</span></label>
                            <input className='input-file' id="img" type="file" name="photo" multiple accept="image/jpeg"></input>
                        </div>                        
                        <div className="col-10">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox"  id="invalidCheck" required/>
                            <label className="form-label" htmlFor="invalidCheck">
                                <Link 
                                className="form-label-link" 
                                to='/protection-personal-data'
                                target='_blank'
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
                            <div className="col-5 flex-row">
                                <input type="number" className="form-control" id="m2gross" placeholder="m² общая" required/>
                                <label className="form-label margin-0 label-padding" htmlFor="m2gross">m²</label>                            
                            </div>
                            <div className="col-5 flex-row">
                                <input type="number" className="form-control" id="m2net" placeholder="m² жилая" required/>
                                <label className="form-label margin-0 label-padding" htmlFor="m2net">m²</label>     
                            </div>
                        </div>
                        <div className="col-10">
                            <select defaultValue='Количество комнат' className="form-select" id="rooms" required>
                                <option disabled >Количество комнат</option>
                                <option>Комнаты 1+1</option>
                                <option>Комнаты 2+1</option>
                                <option>Комнаты 3+1</option>
                                <option>Комнаты 4+1</option>
                                <option>Комнаты 5+1</option>
                            </select>
                        </div>  
                        <div className="col-10">
                            <select defaultValue='Этаж' className="form-select" id="floor" required>
                                <option disabled >Этаж</option>
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
                            <select defaultValue='Всего этажей' className="form-select" id="totalFloor" required>
                                <option disabled >Всего этажей</option>
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
                            <select defaultValue='Отопление' className="form-select" id="heating" required>
                                <option disabled >Отопление</option>
                                <option>Отопление / Нет</option>
                                <option>Отопление / Газ</option>
                                <option>Отопление / Электричество</option>                 
                            </select>
                        </div>
                        <div className="col-10">
                            <select defaultValue='Кондиционер' className="form-select" id="airConditioning" required>
                                <option disabled >Кондиционер</option>
                                <option>Кондиционер / Есть</option>
                                <option>Кондиционер / Нет</option>           
                            </select>
                        </div> 
                        <div className="col-10">
                            <select defaultValue='Количество ванных комнат' className="form-select" id="bathrooms" required>
                                <option disabled >Количество ванных комнат</option>
                                <option>Ванных комнат / 0</option>
                                <option>Ванных комнат / 1</option>
                                <option>Ванных комнат / 2</option>
                                <option>Ванных комнат / 3</option> 
                                <option>Ванных комнат / 4</option>                
                            </select>
                        </div>
                        <div className="col-10">
                            <select defaultValue='Балкон' className="form-select" id="balcony" required>
                                <option disabled >Балкон</option>
                                <option>Балкон / 0</option>
                                <option>Балкон / 1</option>
                                <option>Балкон / 2</option> 
                                <option>Балкон / 3</option>  
                                <option>Балкон / 4</option> 
                                <option>Балкон / 5</option>              
                            </select>
                        </div>  
                        <div className="col-10">
                            <select defaultValue='Мебель' className="form-select" id="furniture" required>
                                <option disabled >Мебель</option>
                                <option>Мебель / Есть</option>
                                <option>Мебель / Нет</option>           
                            </select>
                        </div>
                        <div className="col-10">
                            <select defaultValue='Кухонная мебель' className="form-select" id="kitchen" required>
                                <option disabled >Кухонная мебель</option>
                                <option>Кухонная мебель / Есть</option>
                                <option>Кухонная мебель / Нет</option>           
                            </select>
                        </div>                        
                        <div className="col-10">
                            <p className="form-label">Бытовая техника</p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="stove" name=""/>
                                <label className="form-label" htmlFor="stove">Кухонная плита</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="dishwasher" name=""/>
                                <label className="form-label" htmlFor="dishwasher">Посудомоечная машина</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="washingMachine" name=""/>
                                <label className="form-label" htmlFor="washingMachine">Стиральная машина</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="refrigerator" name=""/>
                                <label className="form-label" htmlFor="refrigerator">Холодильник</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="microwave" name=""/>
                                <label className="form-label" htmlFor="microwave">Микроволновая печь</label>
                            </div>                            
                        </div>                        
                    </div>
                </form>
                <button onClick={handleSubmit} className="btn btn-primary landlord-button" form="landlordForm">Отправить</button>                
            </main>
        </div>
        </>
    );
}

export default LandlordsComponent;

