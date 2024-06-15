import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Categoria.css';
  
function CategoriaCalcado(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://pi-3-concon.onrender.com/productCAL")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="categoria">
      <h2>CALÇADOS</h2>
      <div className="grid">
        {products.map(product => (
          <Link key={product.idProduto} to={`/productCAL/${product.idProduto}`} className="product-card">
            <img src={product.imgProduto} alt={product.nomeProduto} />
            <div className="product-info">
              <h3>{product.nomeProduto}</h3>
              <p>R${product.precoProduto}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default CategoriaCalcado;


