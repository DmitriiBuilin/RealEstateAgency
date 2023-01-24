import { useParams } from "react-router-dom";
import CardItem from "../cards/сardItem";
import Sorter from "../sorter/sorter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFullDataBase, getPageValue, getSorterValue } from "../../store/selectors/selector";
import { objectsDataBase, pageParam } from "../../store/actions/actions";
import { onValue, ref } from "firebase/database";
import { dataRef } from "../../server/googleFirebase";

export const SearchResult = () => {
    const { param } = useParams();    
    const dispatch = useDispatch();
    // const fullDataBase = useSelector(getFullDataBase);
    // const [fullDataBase, setFullDataBase] = useState([]);
    const target = useSelector(getPageValue);
    const storeSorterValue = useSelector(getSorterValue);
    const [cardsList, setCardsList] = useState([])
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

    /* Sort module */

    switch(storeSorterValue) {
        case "chipiest":
            cardsListFilter.sort((a, b) => {
                if (a.price > b.price) {
                    return 1;
                    }
                    if (a.price < b.price) {
                    return -1;
                    }
                    return 0;
            });
            break;                
        case "expensive": 
            cardsListFilter.sort((a, b) => {
                if (a.price > b.price) {
                    return -1;
                }
                if (a.price < b.price) {
                    return 1;
                }
                return 0;
            });
            break;   
        case "old":
            cardsListFilter.sort((a, b) => {
                if (a.date > b.date) {
                    return 1;
                    }
                    if (a.date < b.date) {
                    return -1;
                    }
                    return 0;
            });
            break;   
        case "new":  
            cardsListFilter.sort((a, b) => {
                if (a.date > b.date) {
                    return -1;
                    }
                    if (a.date < b.date) {
                    return 1;
                    }
                    return 0;
            });
            break; 
        default:
    };

    dispatch(pageParam(totalValue));

    useEffect(() => {
        onValue(dataRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                setCardsList(data);      
                dispatch(objectsDataBase(data));
            }
        });        
    }, []);

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
                            <CardItem key={item.id} id={item.id} objectName={item.objectName} price={item.price} description={item.description} rooms={item.rooms} m2gross={item.m2gross} city={item.city} date={item.date} img={item.img} img_1={item.img[0]} img_2={item.img[1]} img_3={item.img[2]} img_4={item.img[3]} img_5={item.img[4]}/>
                        )                    
                    })}
                </div>            
            </main>
            </>
        )
    }   
}

export default SearchResult;