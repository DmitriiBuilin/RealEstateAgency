import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getChosenObject } from "../../store/selectors/selector";
import { getPageValue } from "../../store/selectors/selector";

export const CardComponent = () => {
    const chosenObject = useSelector(getChosenObject);
    const pageKey = useSelector(getPageValue);
    const page = {
        rent: 'Аренда',
        sale: 'Продажа',
        new: 'Новостройки',
    };
    const pageType = {
        flat:'Квартира',
        house:'Дом',
        office:'Офис',
        shop:'Торговое помещение',
        land:'Участок',
    }
    
    // console.log(pageType[chosenObject[0].realAstateType])

    return (
        <>
        <div className="card-title-wrp">
            <nav className="filter-nav" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/'}>
                            <svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4785 2.99047C11.7987 2.79484 12.2013 2.79484 12.5215 2.99047L19.5215 7.26825C19.8187 7.4499 20 7.77316 20 8.12153V18.9999C20 19.5521 19.5523 19.9999 19 19.9999H16V13.9999C16 12.343 14.6569 10.9999 13 10.9999H11C9.34315 10.9999 8 12.343 8 13.9999V19.9999H5C4.44772 19.9999 4 19.5521 4 18.9999V8.12153C4 7.77316 4.1813 7.4499 4.47855 7.26825L11.4785 2.99047ZM10 19.9999V13.9999C10 13.4476 10.4477 12.9999 11 12.9999H13C13.5523 12.9999 14 13.4476 14 13.9999V19.9999H10ZM15 21.9999H19C20.6569 21.9999 22 20.6567 22 18.9999V8.12153C22 7.07643 21.4561 6.10665 20.5644 5.56168L13.5644 1.2839C12.604 0.697032 11.396 0.697032 10.4356 1.2839L3.43565 5.56168C2.54389 6.10665 2 7.07643 2 8.12153V18.9999C2 20.6567 3.34315 21.9999 5 21.9999H9H15Z" />
                            </svg>
                        </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to={`/${pageKey}`}>{page[pageKey]}</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={`/${pageKey}/${chosenObject[0].realAstateType}`}>{pageType[chosenObject[0].realAstateType]}</Link>
                        </li>
                </ol>
            </nav>
            <h2 className="card-name">{chosenObject[0].objectName}</h2>
            <p className="card-id">Номер объекта: {chosenObject[0].id}</p>
        </div>
        </>
    );
}

export default CardComponent;