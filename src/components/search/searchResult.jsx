import { useParams } from "react-router-dom";
import CardItem from "../cards/сardItem";
import Sorter from "../sorter/sorter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFullDataBase, getPageValue } from "../../store/selectors/selector";
import { pageParam } from "../../store/actions/actions";
// import axios from "axios";

export const SearchResult = () => {
    const { param } = useParams();    
    const dispatch = useDispatch();
    const fullDataBase = useSelector(getFullDataBase);
    const target = useSelector(getPageValue);
    const [cardsList] = useState(fullDataBase)
    const cardsListFilter = (
        cardsList.filter((item) => {
            if(!param) {
                return (item.target === target)}
            return (
                item.target === target && item.realAstateType === param
            )
            
    }));
    const totalValue = String(cardsListFilter.length);

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
        
        dispatch(pageParam(totalValue))
    });

    if(cardsListFilter.length === 0) {
        return (
            <>
            <main className="main">
                <Sorter pageParametr={pageParametr[param]} />
                <div className="search-result">
                    <p className="empty-search-result">В этом разделе пока ещё нет объектов </p>
                </div>
            </main>            
            </>      
        )
    }
    else {    
        return (
            <>
            <main className="main">
                <Sorter pageParametr={pageParametr[param]}/>
                <div className="search-result">                
                    {cardsListFilter.map((item) => {
                        return(
                            <CardItem key={item.id} objectName={item.objectName} price={item.price} description={item.description} rooms={item.rooms} m2gross={item.m2gross} city={item.city} data={item.data} img_1={item.img_1} img_2={item.img_2} img_3={item.img_3} img_4={item.img_4} img_5={item.img_5}/>
                        )                    
                    })}
                </div>            
            </main>
            </>
        )
    }   
}

export default SearchResult;