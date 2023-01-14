import { useParams } from "react-router-dom";
import CardItem from "../cards/сardItem";
import Sorter from "../sorter/sorter";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFullDataBase } from "../../store/selectors/selector";
// import axios from "axios";

export const SearchResult = () => {
    const { param } = useParams();    
    const fullDataBase = useSelector(getFullDataBase);
    const [cardsList, setCardsList] = useState(fullDataBase)

    const pageParametr = {
        flat: 'Квартира',
        house: 'Дом',
        office: 'Офис',
        shop: 'Торговое помещение',
        land: 'Участок',
    };

    useEffect(() => {        
        // axios.get(fullDataBase)
        //     .then((response) => {
        //         console.log(response.data);
        //     });
        console.log(cardsList);        
    });

    return (
        <>
        <main className="main">
            <Sorter pageParametr={pageParametr[param]}/>
            <div className="search-result">
                {cardsList.map((item) => {
                    return(
                        <CardItem key={item.id} objectName={item.objectName} price={item.price} description={item.description} rooms={item.rooms} m2gross={item.m2gross} city={item.city} data={item.data} img_1={item.img_1} img_2={item.img_2} img_3={item.img_3} img_4={item.img_4} img_5={item.img_5}/>
                    )                    
                })}
            </div>            
        </main>
        </>
    )
}

export default SearchResult;