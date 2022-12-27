export const BigCardItem = (props) => {
    return (
        <>
        <div className="offer-cart">
            <img className="offer-cart-img" src={props.img_1} alt="..." />
            <div className="offer-cart-properties">
                <h4 className="offer-cart-name">Name</h4>
                <p className="offer-cart-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod alias ipsam modi odio repellendus a, explicabo.</p>
                <p className="offer-cart-price">Price <span>1200</span> $ </p>
            </div>
        </div>
        </>
    );
}

export default BigCardItem;