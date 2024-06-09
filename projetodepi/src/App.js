import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Importar páginas
import HomePage from './components/pages/home/HomePage';
import CategoriaRoupa from './components/pages/categoria/CategoriaRoupa';
import CategoriaAcessorio from './components/pages/categoria/CategoriaAcessorio';
import CategoriaCalcado from './components/pages/categoria/CategoriaCalcado';
import CategoriaCosmetico from './components/pages/categoria/CategoriaCosmetico';
import ProductDetail from './components/pages/categoria/ProductDetail';
import QuemSomos from './components/pages/home/QuemSomos';
import LoginPage from './components/pages/login/LoginPage';
import DataPage from './components/pages/login/DataPage';
import RegisterPage from './components/pages/login/RegisterPage';
import AddressPage from './components/pages/login/AddressPage';
import Favoritos from './components/pages/myaccount/favoritos';
import Pedidos from './components/pages/myaccount/pedidos';
import Carrinho from './components/pages/myaccount/carrinho';
import Header from './components/pages/home/Header';
import Cart from './components/pages/myaccount/carrinho';
// Importar contextos
import { CartProvider } from './CartContext';
import { AuthProvider } from './AuthContext';
import { FavoritesProvider } from './FavoritesContext';
// import { FavoritosProvider } from './FavoritesContext'; // Importar FavoritosProvider
import { OrdersProvider } from './OrdersContext'; // Importar OrdersProvider

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <OrdersProvider> 
            <div className="App">
              <Router>
                <Header />
                <div className="content">
                  <div className="main-content">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/CategoriaRoupa" element={<CategoriaRoupa />} />
                      <Route path="/CategoriaAcessorio" element={<CategoriaAcessorio />} />
                      <Route path="/CategoriaCalcado" element={<CategoriaCalcado />} />
                      <Route path="/CategoriaCosmetico" element={<CategoriaCosmetico />} />
                      <Route path="/LoginPage" element={<LoginPage />} />
                      <Route path="/DataPage" element={<DataPage />} />
                      <Route path="/RegisterPage" element={<RegisterPage />} />
                      <Route path="/AddressPage" element={<AddressPage />} />
                      <Route path="/QuemSomos" element={<QuemSomos />} />
                      <Route path="/Carrinho" element={<Carrinho />} />
                      <Route path="/Pedidos" element={<Pedidos />} />
                      <Route path="/Favoritos" element={<Favoritos />} />
                      <Route path="/product/:id" element={<ProductDetail />} />
                      <Route path="/cart" element={<Cart />} />
                    </Routes>
                  </div>
                </div>
              </Router>
            </div>
          </OrdersProvider>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
