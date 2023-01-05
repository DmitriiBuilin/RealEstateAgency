export const LandlordsComponent = () => {
    return (
        <>
            <main className="main landlords-main">
                <div className="landloards-header">
                    <h4>Разместите свой объект недвижимости</h4>
                    <p>Заполните форму чтобы продать или сдать в аренду квартиру / офис / торговое помещение или участок</p>
                </div>
                <form className="landlords-form row g-3" id="landlordForm" novalidate>
                    <div className="landlords-leftside">
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="validationCustom01" placeholder="Имя Фамилия" required/>
                        </div>
                        <div className="col-md-10">
                            <input type="email" className="form-control" id="validationCustom02" placeholder="mail@mail.com" required/>
                        </div>
                        <div className="col-md-10">
                            <div className="input-group has-validation">                       
                            <input type="tel" className="form-control" id="validationCustom03" placeholder="tel. +90(535)123-45-67" required/>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <label for="validationCustom04" className="form-label">Выберите объект</label>
                            <select className="form-select" id="validationCustom04" required>
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
                        <input type="radio" id="sale" name="sale-rent" value="sale"/>
                        <label for="sale">Продать</label>
                        <input type="radio" id="rent" name="sale-rent" value="rent"/>
                        <label for="rent">Сдать в аренду</label>
                        </div>


                        <div className="col-10">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label className="form-label" for="invalidCheck">
                                Я прочитал и согласен с положением о защите персональных данных
                            </label>
                                <div className="invalid-feedback">
                                    Вы долджны подтвердить согласие перед отправкой данных
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landlords-rightside"></div>
                </form>
                <button className="btn btn-primary landlord-button" form="landlordForm">Отправить</button>                
            </main>
        </>
    );
}

export default LandlordsComponent;