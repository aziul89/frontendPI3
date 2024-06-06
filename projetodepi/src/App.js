import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//styles
import './App.css';
//pages
import HomePage from './components/pages/home/HomePage';
import CategoriaRoupa from './components/pages/categoria/CategoriaRoupa';
import CategoriaAcessorio from './components/pages/categoria/CategoriaAcessorio';
import CategoriaCalcado from './components/pages/categoria/CategoriaCalcado';
import CategoriaCosmetico from './components/pages/categoria/CategoriaCosmetico';
import QuemSomos from './components/pages/home/QuemSomos';
import LoginPage from './components/pages/login/LoginPage';
import DataPage from './components/pages/login/DataPage';
import RegisterPage from './components/pages/login/RegisterPage';
import MinhaConta from './components/pages/login/MinhaConta';
//components
import Header from './components/pages/home/Header';


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
          <Route path="/QuemSomos" element={<QuemSomos />} />
          <Route path="/MinhaConta" element={<MinhaConta />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
