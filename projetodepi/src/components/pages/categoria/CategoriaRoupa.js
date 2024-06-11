import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Categoria.css';

function CategoriaRoupa() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://inici-1.onrender.com/product")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="categoria">
      <h2>ROUPAS</h2>
      <div className="grid">
        {products.map(product  => (
          <Link key={product.idProduto} to={`/product/${product.idProduto}`} className="product-card">
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

export default CategoriaRoupa;
