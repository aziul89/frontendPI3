import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//styles
import './App.css';
//page_home
import HomePage from './components/pages/home/HomePage';
//pages_categorias
import CategoriaRoupa from './components/pages/categoria/CategoriaRoupa';
import CategoriaAcessorio from './components/pages/categoria/CategoriaAcessorio';
import CategoriaCalcado from './components/pages/categoria/CategoriaCalcado';
import CategoriaCosmetico from './components/pages/categoria/CategoriaCosmetico';
//page_aboutus
import QuemSomos from './components/pages/home/QuemSomos';
//pages_login
import LoginPage from './components/pages/login/LoginPage';
import DataPage from './components/pages/login/DataPage';
import RegisterPage from './components/pages/login/RegisterPage';
import AddressPagePage from './components/pages/login/AddressPage';
//pages_myaccount
import Favoritos from './components/pages/myaccount/favoritos'
import Pedidos from './components/pages/myaccount/pedidos'
//components
import Header from './components/pages/home/Header';
import AddressPage from './components/pages/login/AddressPage';


function App() {
  return (
    <div className="App">
     
      <Router>    
        <Header/>
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CategoriaRoupa" element={<CategoriaRoupa />} />
          <Route path="/CategoriaAcessorio" element={<CategoriaAcessorio />} />
          <Route path="/CategoriaCalcado" element={<CategoriaCalcado />} />
          <Route path="/CategoriaCosmetico" element={<CategoriaCosmetico />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/DataPage" element={<DataPage />}/>
          <Route path="/RegisterPage" element={<RegisterPage />}/>
          <Route path="/AddressPage" element={<AddressPage />}/>
          <Route path="/QuemSomos" element={<QuemSomos />} />
          
          <Route path="/Pedidos" element={<Pedidos />} />
          <Route path="/Favoritos" element={<Favoritos />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
