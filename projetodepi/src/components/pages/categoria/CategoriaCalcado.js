import React from 'react';
import './Categoria.css';

const products = [
  { id: 1, name: 'Percata de Crochê', price: 'R$1.218', image: 'https://lojafarm.vteximg.com.br/arquivos/ids/3319374-472-708/333428_0005_1-FLATFORM-CROCHE-ARTESANAL.jpg?v=638460396273730000/100' },
  { id: 2, name: 'Bota Cano Curto Floral', price: 'R$247', image: 'https://lojafarm.vteximg.com.br/arquivos/ids/2864096-472-708/310163_1739_1-BOTA-PUFFER-CANO-BAIXO.jpg?v=637964248365230000/100' },
  { id: 3, name: 'Percata Mule', price: 'R$83,90', image: 'https://lojafarm.vteximg.com.br/arquivos/ids/2572724-472-708/296923_1520_1-MULE-BRASIL-TROPICAL.jpg?v=637619840922600000/100' },
  { id: 4, name: 'Tênis vibes colorido', price: 'R$159,90', image: 'https://cdn.vnda.com.br/550x/sloul/2024/04/24/10_37_18_701_10_4_2_239_tenis20vegano20vibs20colorido204.jpg?v=1713965843/100' },
  { id: 5, name: 'Tênis em Liocel preto', price: 'R$179,90', image: 'https://lojafarm.vteximg.com.br/arquivos/ids/3334972-472-708/319966_0013_1-SAPATO-OXFORD-COSTELA-DE-ADAO.jpg?v=638479287889400000/100' },
  { id: 6, name: 'Chinelo Vegalli Brisa', price: 'R$1.542', image: 'https://lojafarm.vteximg.com.br/arquivos/ids/3349846-472-708/322353_0300_1-SAND-RASTEIRA-MICANGA.jpg?v=638489836436430000/100' },
  ];
  
function CategoriaCalcado(){
    return(
       
            <div className="categoria">
              <h2>CALÇADOS</h2>
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
export default CategoriaCalcado;


