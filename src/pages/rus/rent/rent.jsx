import CardItem from "../../../components/cards/cardItem";
import Cards from "../../../components/cards/cards";
import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";

export const Rent = () => {
    const image = {
        img_1: "img/offers/1.jpeg",
        img_2: "img/offers/2.jpg",
        img_3: "img/offers/3.jpeg",
        img_4: "img/offers/4.jpg",
        img_5: "img/offers/5.jpg",
        img_6: "img/offers/6.jpg",
        img_7: "img/offers/7.jpg",
        img_8: "img/offers/8.jpg",
        img_9: "img/offers/9.jpg",
        img_10: "img/offers/10.jpg",
        img_11: "img/offers/11.jpg",
        img_12: "img/offers/12.jpg",        
    };

    return (
        <>
            <Header />
            <CardItem img_1={image.img_1} />
            <Footer />
        </>
    );
}

export default Rent;

