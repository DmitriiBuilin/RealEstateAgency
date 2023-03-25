import AdminSearchAside from "./adminSearchAside";
import AdminSearchResult from "./adminSearchResult";

export const AdminPanel = ({component}) => {


    return (
        <>
        <div className="container-field container-primary">
            <AdminSearchAside />
            <AdminSearchResult component={component}/>
        </div>
        </>
    )    
}

export default AdminPanel;