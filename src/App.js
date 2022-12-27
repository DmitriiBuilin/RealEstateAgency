import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './pages/rus/contacts/contacts';
import Landlords from './pages/rus/landlords';
import Main from './pages/rus/main/main';
import NewBuildings from './pages/rus/newBuildings/newBuildings';
import Office from './pages/rus/office/office';
import Rent from './pages/rus/rent/rent';
import Sale from './pages/rus/sale/sale';



function App() {
  return (
    <div className="App">
      <Routes>        
        <Route path="*" element={<h2>404 Page not found</h2>} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/new" element={<NewBuildings />} />
        <Route path="/office" element={<Office />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/landlords" element={<Landlords />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
