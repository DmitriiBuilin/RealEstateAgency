export const Cards = (props) => {
    return (
        <>
            <div className="offers-carousel-item">
                <p className="offers-carousel-item-name">{props.name}</p>
                <div className="offers-carousel-card-block">
                    <div className="offer-card hid1">
                        <img className="offer-card-img" src={props.img_1} alt="..." />
                        <div className="offer-card-properties">
                            <h4 className="offer-card-name">Name</h4>
                            <p className="offer-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod alias ipsam modi odio repellendus a, explicabo.</p>
                            <p className="offer-card-price">Price <span>1200</span> $ </p>
                        </div>
                    </div>
                    <div className="offer-card hid2">
                        <img className="offer-card-img" src={props.img_2} alt="..." />
                        <div className="offer-card-properties">
                            <h4 className="offer-card-name">Name</h4>
                            <p className="offer-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod alias ipsam modi odio repellendus a, explicabo.</p>
                            <p className="offer-card-price">Price <span>1200</span> $ </p>
                        </div>
                    </div>
                    <div className="offer-card hid3">
                        <img className="offer-card-img" src={props.img_3} alt="..." />
                        <div className="offer-card-properties">
                            <h4 className="offer-card-name">Name</h4>
                            <p className="offer-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod alias ipsam modi odio repellendus a, explicabo.</p>
                            <p className="offer-card-price">Price <span>1200</span> $ </p>
                        </div>
                    </div>
                    <div className="offer-card">
                        <img className="offer-card-img" src={props.img_4} alt="..." />
                        <div className="offer-card-properties">
                            <h4 className="offer-card-name">Name</h4>
                            <p className="offer-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod alias ipsam modi odio repellendus a, explicabo.</p>
                            <p className="offer-card-price">Price <span>1200</span> $ </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;