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
                regionstArr.push(<button onClick={changeRegion} key={regions[i].id} id={regions[i].id}>{regions[i].id}</button>)
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
                districtArr.push(<button key={district[i]} value={district[i]}>{district[i]}</button>)
            }
        }
        return districtArr
        } catch (error) {
        }
    }

    
    console.log(getDistrict())

    return (
        <>
        <div className="admin-panel-wrp">
            {getCountryList()}
            <br />
            {getDistrict()}
        </div>
        </>
    )    
}

export default AdminRegions;