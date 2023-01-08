export const CardItem = (props) => {
    const idCarousel = Math.floor(Math.random() * 1000);

    return (
        <>
            <div className="card-item">
                <div className="card-item-img-wrp">
                    {/* <img className="card-item-img" src={props.img_1} alt="..." /> */}
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
                    <h4 className="card-item-name">Full object name</h4>
                    <p className="card-item-price">Price <span>1200</span> $ </p>
                    <p className="card-item-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam voluptas minima quas expedita! Ea facilis quasi illum laudantium impedit porro, quia, temporibus excepturi rem id error. Eius, voluptatibus soluta!
                    </p>
                    <div className="card-item-propertties">
                        <p>1+1</p>
                        <p>150 m²</p>
                        <p>Antalya</p>
                        <p>30/12/2022</p>
                    </div>                    
                </div>
            </div>
        </>
    );
}

export default CardItem;