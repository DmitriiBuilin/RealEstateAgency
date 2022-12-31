import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './pages/rus/contacts/contacts';
import Landlords from './pages/rus/landlords/landlords';
import Main from './pages/rus/main/main';
import NewBuildings from './pages/rus/newBuildings/newBuildings';
import Rent from './pages/rus/rent/rent';
import Sale from './pages/rus/sale/sale';
import Map from './pages/rus/map/map';



function App() {
  return (
    <div className="App">
      <Routes>        
        <Route path="*" element={<h2>404 Page not found</h2>} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/new" element={<NewBuildings />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/landlords" element={<Landlords />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
