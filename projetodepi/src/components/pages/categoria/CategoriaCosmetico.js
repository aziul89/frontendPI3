import React from 'react';
import './Categoria.css';

const products = [
    { id: 1, name: 'Vestido estampado Viscose', price: 'R$379', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Camisata CLASSIC Algodão', price: 'R$147', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Camisa de linho de manga longa', price: 'R$83,90', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Vestido em Liocel Azul', price: 'R$159,90', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Vestido preto tubinho canelado Poliamida', price: 'R$85,90', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Jaqueta Retro Poliéster reciclado', price: 'R$1.542', image: 'https://via.placeholder.com/150' },
  ];
  
function CategoriaCosmetico (){
    return(
       
            <div className="categoria">
              <h2>COSMÉTICOS</h2>
              <div className="grid">
                {products.map(product => (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    )
}
export default CategoriaCosmetico;

