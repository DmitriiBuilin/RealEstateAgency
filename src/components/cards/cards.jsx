export const Cards = (props) => {
    return (
        <>
            <div className="offers-carousel-item">
                <p className="offers-carousel-item-name">{props.name}</p>
                <div className="offers-carousel-cart-block">
                    <div className="offer-cart hid1">
                        <img className="offer-cart-img" src={props.img_1} alt="..." />
                        <div className="offer-cart-properties">
                        <h4 className="offer-cart-name">Name</h4>
                        <p className="offer-cart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod alias ipsam modi odio repellendus a, explicabo.</p>
                        <p className="offer-cart-price">Price <span>1200</span> $ </p>
                    </div>
                </div>
                <div className="offer-cart hid2">
                    <img className="offer-cart-img" src={props.img_2} alt="..." />
                    <div className="offer-cart-properties">
                    <h4 className="offer-cart-name">Name</h4>
                    <p className="offer-cart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod alias ipsam modi odio repellendus a, explicabo.</p>
                    <p className="offer-cart-price">Price <span>1200</span> $ </p>
                    </div>
                </div>
                <div className="offer-cart hid3">
                    <img className="offer-cart-img" src={props.img_3} alt="..." />
                    <div className="offer-cart-properties">
                    <h4 className="offer-cart-name">Name</h4>
                    <p className="offer-cart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod alias ipsam modi odio repellendus a, explicabo.</p>
                    <p className="offer-cart-price">Price <span>1200</span> $ </p>
                    </div>
                </div>
                <div className="offer-cart">
                    <img className="offer-cart-img" src={props.img_4} alt="..." />
                    <div className="offer-cart-properties">
                    <h4 className="offer-cart-name">Name</h4>
                    <p className="offer-cart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod alias ipsam modi odio repellendus a, explicabo.</p>
                    <p className="offer-cart-price">Price <span>1200</span> $ </p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Cards;