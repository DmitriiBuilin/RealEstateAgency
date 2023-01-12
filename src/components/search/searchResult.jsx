import { useParams } from "react-router-dom";
import CardItem from "../cards/сardItem";
import Sorter from "../sorter/sorter";

export const SearchResult = () => {
    const { param } = useParams();
    // const { paramparam } = getPageParamValue();
    // console.log(paramparam)

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

    const pageParametr = {
        flat: 'Квартира',
        house: 'Дом',
        office: 'Офис',
        shop: 'Торговое помещение',
        land: 'Участок',
    };

    return (
        <>
        <main className="main">
            <Sorter pageParametr={pageParametr[param]}/>
            <div className="search-result">
                <CardItem img_1={image.img_1} img_2={image.img_2} img_3={image.img_3} img_4={image.img_4} img_5={image.img_5}/>
                <CardItem img_1={image.img_6} img_2={image.img_2} img_3={image.img_3} img_4={image.img_4} img_5={image.img_5}/>
                <CardItem img_1={image.img_7} img_2={image.img_2} img_3={image.img_3} img_4={image.img_4} img_5={image.img_5}/>
                <CardItem img_1={image.img_8} img_2={image.img_2} img_3={image.img_3} img_4={image.img_4} img_5={image.img_5}/>
                <CardItem img_1={image.img_9} img_2={image.img_2} img_3={image.img_3} img_4={image.img_4} img_5={image.img_5}/>
                <CardItem img_1={image.img_10} img_2={image.img_2} img_3={image.img_3} img_4={image.img_4} img_5={image.img_5}/>
                <CardItem img_1={image.img_11} img_2={image.img_2} img_3={image.img_3} img_4={image.img_4} img_5={image.img_5}/>
                <CardItem img_1={image.img_12} img_2={image.img_2} img_3={image.img_3} img_4={image.img_4} img_5={image.img_5}/>
                <CardItem img_1={image.img_8} img_2={image.img_2} img_3={image.img_3} img_4={image.img_4} img_5={image.img_5}/>
            </div>            
        </main>
        </>
    )
}

export default SearchResult;