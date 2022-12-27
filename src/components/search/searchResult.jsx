import BigCardItem from "../cards/bigCardItem";

export const SearchResult = () => {
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
        <main className="main">
            <h3>Filter</h3>
            <h3>Search Result</h3>
            <BigCardItem img_1={image.img_1} />
        </main>
        </>
    )
}

export default SearchResult;