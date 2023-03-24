import AdminSearchAside from "./adminSearchAside";
import AdminSearchResult from "./adminSearchResult";

export const AdminPanel = () => {


    return (
        <>
        <div className="container-field container-primary">
            <AdminSearchAside />
            <AdminSearchResult />
        </div>
        </>
    )    
}

export default AdminPanel;