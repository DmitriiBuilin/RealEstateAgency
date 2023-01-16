import { useSelector } from "react-redux";
import Footer from "../../../components/footer/footer";
import Header from "../../../components/header/header";
import { getChosenObject } from "../../../store/selectors/selector";


export const ObjectCard = () => {
    const chosenObject = useSelector(getChosenObject);

    return (
        <>
            <Header />
                <div className="container-field container-primary">
                    <main className="main landlords-main">
                       <p>Object card for id {chosenObject[0].id}</p>
                    </main>
                </div>   
            <Footer />
        </>
    );
}

export default ObjectCard;