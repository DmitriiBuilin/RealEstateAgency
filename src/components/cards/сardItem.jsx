import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { chosenObject } from "../../store/actions/actions";
import { getFullDataBase } from "../../store/selectors/selector";

export const CardItem = (props) => {
    const dispatch = useDispatch();
    const idCarousel = Math.floor(Math.random() * 1000);
    const fullDataBase = useSelector(getFullDataBase);
    const getThisObject = fullDataBase.filter((item) => {
        return item.id === props.id
    });
    const dispatchChoosenObject = () => {
        dispatch(chosenObject(getThisObject))
    };

    return (
        <>
        <Link to={`/card/${props.id}`} onClick={dispatchChoosenObject} className="card-item-wrp">
            <div className="card-item">                
                <div className="card-item-img-wrp">
                    <div id={idCarousel} className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item card-item-img-wrp active">
                                <img src={props.img_1} className="d-block w-100 card-item-img" alt="..." />
                            </div>
                            <div className="carousel-item card-item-img-wrp">
                                <img src={props.img_2} className="d-block w-100 card-item-img" alt="..."/>
                            </div>
                            <div className="carousel-item card-item-img-wrp">
                                <img src={props.img_3} className="d-block w-100 card-item-img" alt="..."/>
                            </div>
                            <div className="carousel-item card-item-img-wrp">
                                <img src={props.img_4} className="d-block w-100 card-item-img" alt="..."/>
                            </div>
                            <div className="carousel-item card-item-img-wrp">
                                <img src={props.img_5} className="d-block w-100 card-item-img" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={"#" + idCarousel} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={"#" + idCarousel} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="card-item-properties">
                    <h4 className="card-item-name">{props.objectName}</h4>
                    <p className="card-item-price">Price <span>{props.price}</span> $ </p>
                    <p className="card-item-description">
                    {props.description}
                    </p>
                    <div className="card-item-propertties">
                        <p>{props.rooms}</p>
                        <p>{props.m2gross}<span>m²</span></p>
                        <p>{props.city}</p>
                        <p>{props.data}</p>
                    </div>                    
                </div>                
            </div>
        </Link>
        </>
    );
}

export default CardItem;