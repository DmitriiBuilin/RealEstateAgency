// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Footer from "../../../components/footer/footer";
// import Header from "../../../components/header/header";
// import { userAgreement } from "../../../store/actions/actions";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";


export const FormSent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBack = () => {
        navigate('/landlords');
    };

    const handleMain = () => {
        navigate('/');
    };


    return (
        <>
            <Header />
                <div className="container-field container-primary">
                    <main className="main landlords-main">
                        <h4 className="sent-header">Готово!</h4>
                        <div className="sent-content">Ваша заявка на размещение объекта на нашем сайте успешно отправлена администратору.</div>
                        <div className="sent-content">Мы свяжемся с вами в ближайшее время.</div>
                        <button onClick={handleMain} className="btn btn-primary sent-button-red">Вернуться на главную</button>
                        <button onClick={handleBack} className="btn btn-primary sent-button">Вернуться назад</button>
                    </main>
                </div>   
            <Footer />
        </>
    );    
}

export default FormSent;