import React from 'react';
import './Categoria.css';

const products = [
  { id: 1, name: 'Bolsa Tira Colo Preta', price: 'R$169,90', image: 'https://static.wixstatic.com/media/3042b8_a053a3fa4a0741ce9823276a3d8528fb~mv2.png/v1/fill/w_315,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3042b8_a053a3fa4a0741ce9823276a3d8528fb~mv2.png/100' },
  { id: 2, name: 'Cinto Lacre', price: 'R$88,91', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2M3dv1yLaW7l8iPPtXvSagFJ5fwzL-tdIug&s/100' },
  { id: 3, name: 'Pulseira Câmara de Bicicleta', price: 'R$63,90', image: 'https://static.wixstatic.com/media/3042b8_afb70030120c4ad8982aedeb84bcdff9~mv2.png/v1/fill/w_315,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3042b8_afb70030120c4ad8982aedeb84bcdff9~mv2.png/100' },
  { id: 4, name: 'Anel Ada', price: 'R$159,90', image: 'https://hippieartesanatos.fbitsstatic.net/img/p/anel-de-resina-ouro-e-flores-naturais-cor-de-rosa-120963/331110-1.jpg?w=740&h=1000&v=no-value/100' },
  { id: 5, name: 'Ecobag Cristo', price: 'R$85,90', image: 'https://static.wixstatic.com/media/3042b8_2baeaf90008a4c0e92ec8b9e47b40f8b~mv2.jpeg/v1/fill/w_315,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3042b8_2baeaf90008a4c0e92ec8b9e47b40f8b~mv2.jpeg/100' },
  { id: 6, name: 'Conjunto colar e brinco', price: 'R$57,00', image: 'https://cdn.dooca.store/69773/products/conjunto-de-colar-e-brincos-de-gota-verde-rodeado-de-zirconias-folheado-em-rodio-branco-01-francisca-1-1600x2000fill-ffffff_600x800+fill_ffffff.jpg?v=1685621100/100' },
  ];
  
function CategoriaRoupa (){
    return(
       
            <div className="categoria">
              <h2>ACESSÓRIOS</h2>
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
export default CategoriaRoupa;

