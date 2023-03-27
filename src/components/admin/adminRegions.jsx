import { useState } from "react";
import { useSelector } from "react-redux";
import { getRegionsDataBase } from "../../store/selectors/selector";

export const AdminRegions = () => {
    const regions = useSelector(getRegionsDataBase);
    const [choosenRegion, setChoosenRegion] = useState()

    const getCountryList = () => {
        try {
            let regionstArr = []
            for (let i in regions) {
                regionstArr.push(
                <div className="admin-btngroup">
                <button className="btn btn-primary admin-city-btn" onClick={changeRegion} key={regions[i].id} id={regions[i].id}>{regions[i].id}</button>
                <button data-name={regions[i].id} className="btn btn-primary admin-city-btn-remove">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.14645 2.85355C1.95118 2.65829 1.95118 2.34171 2.14645 2.14645C2.34171 1.95118 2.65829 1.95118 2.85355 2.14645L8 7.29289L13.1464 2.14645C13.3417 1.95118 13.6583 1.95118 13.8536 2.14645C14.0488 2.34171 14.0488 2.65829 13.8536 2.85355L8.70711 8L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.6583 14.0488 13.3417 14.0488 13.1464 13.8536L8 8.70711L2.85355 13.8536C2.65829 14.0488 2.34171 14.0488 2.14645 13.8536C1.95119 13.6583 1.95119 13.3417 2.14645 13.1464L7.29289 8L2.14645 2.85355Z" fill="white"/>
                    </svg>
                </button>
                </div>
                )
            }
            return regionstArr
        } catch (error) {
        }
    }

    const changeRegion = (e) => {
        e.preventDefault();
        setChoosenRegion(e.target.id);
    }

    const getDistrict = () => {
        try {
        const district = regions.find(element=>element.id === choosenRegion)
        let districtArr = []
        for (let i in district) {
            if (i!='id') {
                districtArr.push(
                <div className="admin-btngroup">
                <p  className="admin-disttrict-item" key={district[i]} value={district[i]}>{district[i]}</p>
                <button data-name={district[i]} className="admin-district-btn-remove">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.14645 2.85355C1.95118 2.65829 1.95118 2.34171 2.14645 2.14645C2.34171 1.95118 2.65829 1.95118 2.85355 2.14645L8 7.29289L13.1464 2.14645C13.3417 1.95118 13.6583 1.95118 13.8536 2.14645C14.0488 2.34171 14.0488 2.65829 13.8536 2.85355L8.70711 8L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.6583 14.0488 13.3417 14.0488 13.1464 13.8536L8 8.70711L2.85355 13.8536C2.65829 14.0488 2.34171 14.0488 2.14645 13.8536C1.95119 13.6583 1.95119 13.3417 2.14645 13.1464L7.29289 8L2.14645 2.85355Z" fill="red"/>
                    </svg>
                </button>
                </div>

                )
            }
        }
        return districtArr
        } catch (error) {
        }
    }

    return (
        <>
        <div className="admin-panel-wrp">
            <div className="admin-panel-item">            
                <div className="admin-city-btn-wrp">
                    <h4 className="admin-city-btn-header">Город</h4>
                    {getCountryList()}
                    <button className="btn btn-primary admin-city-btn-red">Добавить город</button>                    
                </div>
                <div className="admin-district-btn-wrp">
                    <h4 className="admin-city-btn-header">Район</h4>
                    {getDistrict()}
                    <button className="btn btn-primary admin-city-btn-red">Добавить район</button>
                </div>
            </div>

        </div>
        </>
    )    
}

export default AdminRegions;