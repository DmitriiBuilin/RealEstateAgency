import { useParams } from "react-router-dom";
import CardItem from "../cards/сardItem";
import Sorter from "../sorter/sorter";
import image from "../../server/server"

export const SearchResult = () => {
    const { param } = useParams();
    // const { paramparam } = getPageParamValue();
    // console.log(paramparam)

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