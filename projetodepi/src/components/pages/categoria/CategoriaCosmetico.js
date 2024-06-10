import React from 'react';
import './Categoria.css';

const products = [
  { id: 1, name: 'Batom CC hidratante', price: 'R$49,90', image: 'https://brunatavares.vtexassets.com/arquivos/ids/158435-1600-auto?v=638106840594800000&width=1600&height=auto&aspect=true/100' },
  { id: 2, name: 'Base sérum', price: 'R$147', image: 'https://www.marimariamakeup.com/arquivos/ids/164964-undefined-undefined/Base-e-corretivo-matte-velvet-skin-caramelo-mari-maria-make-up.png?v=638457706470500000/100' },
  { id: 3, name: 'Blush color face', price: 'R$83,90', image: 'https://brunatavares.vtexassets.com/arquivos/ids/158018-1600-auto?v=638035627470730000&width=1600&height=auto&aspect=true/100' },
  { id: 4, name: 'Perfume infusão botanica 75ml', price: 'R$259,90', image: 'https://www.granado.com.br/media/catalog/product/e/a/ean7896512959218_2247_3.jpg?optimize=high&fit=bounds&height=1614&width=1254&canvas=1254:1614/100' },
  { id: 5, name: 'Corretivo', price: 'R$149,90', image: 'https://brunatavares.vtexassets.com/arquivos/ids/158192-1600-auto?v=638060243340800000&width=1600&height=auto&aspect=true/100' },
  { id: 6, name: 'Esfoliante para lábios', price: 'R$65,90', image: 'https://brunatavares.vtexassets.com/arquivos/ids/157164-1600-auto?v=638017498826230000&width=1600&height=auto&aspect=true/100' },
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

