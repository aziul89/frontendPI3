import React from 'react';
import { Link } from 'react-router-dom';
import './Categoria.css';

const products = [
  { id: 1, name: 'Vestido estampado Viscose', price: 'R$379', image: 'https://lojafarm.vteximg.com.br/arquivos/ids/3288416/323849_46304_1-CALCA-RETA-ESTAMPADA-HELENA.jpg?v=638429088297900000/100' },
    { id: 2, name: 'Camisata CLASSIC Algodão', price: 'R$147', image: 'https://lojafarm.vteximg.com.br/arquivos/ids/3269090-472-708/328209_0013_1-BLUSA-T-SHIRT-COM-OMBREIRA-REMOVIVEL.jpg?v=638411333787670000/100' },
    { id: 3, name: 'Camisa de Linho de manga longa', price: 'R$83,90', image: 'https://lojafarm.vteximg.com.br/arquivos/ids/3282274-472-708/323628_0024_1-CAMISA-AMPLA-BOLSO.jpg?v=638423198876230000/100' },
    { id: 4, name: 'Vestido em Liocel Azul', price: 'R$159,90', image: 'https://lojafarm.vteximg.com.br/arquivos/ids/3308849-472-708/324089_46289_1-VESTIDO-CURTO-LENCO-ESTAMPADO-MAGIA-TROPICAL.jpg?v=638446564836730000/100' },
    { id: 5, name: 'Vestido Preto tubo Poliamida', price: 'R$85,90', image: 'https://vivolle.com.br/cdn/shop/files/adais6.jpg?v=1710720858&width=1500/100' },
    { id: 6, name: 'Jaqueta Retro Poliéster Reciclado', price: 'R$1.542', image: 'https://lojafarm.vteximg.com.br/arquivos/ids/3137854-472-708/313981_02015_1-JAQUETA-GOLA-SARJA.jpg?v=638254828055400000/100' },
];

function CategoriaRoupa() {
  return (
    <div className="categoria">
      <h2>ROUPAS</h2>
      <div className="grid">
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriaRoupa;
