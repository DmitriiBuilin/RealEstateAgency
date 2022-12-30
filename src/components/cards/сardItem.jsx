export const CardItem = (props) => {
    return (
        <>
            <div className="card-item">
                <div className="card-item-img-wrp">
                    <img className="card-item-img" src={props.img_1} alt="..." />
                </div>
                <div className="card-item-properties">
                    <h4 className="card-item-name">Full object name</h4>
                    <p className="card-item-price">Price <span>1200</span> $ </p>
                    <p className="card-item-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe at dolor libero reprehenderit cumque veritatis iure assumenda mollitia omnis! Ad beatae minus quisquam eaque temporibus?
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