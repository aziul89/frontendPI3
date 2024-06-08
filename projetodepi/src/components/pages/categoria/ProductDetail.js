import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../../CartContext';
import { useAuth } from '../../../AuthContext';
import Swal from 'sweetalert2';
import './ProductDetail.css';

const products = [
  { id: 1, name: 'Vestido estampado Viscose', price: 'R$379', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Camiseta CLASSIC Algodão', price: 'R$147', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Camisa de Linho de manga longa', price: 'R$83,90', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Vestido em Liocel Azul FREE', price: 'R$159,90', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Vestido Preto tubo Poliamida', price: 'R$85,90', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Jaqueta Retro Reciclado Poliéster', price: 'R$1.542', image: 'https://via.placeholder.com/150' },
];

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();
  const product = products.find(p => p.id === parseInt(id));

  const handleAddToCart = () => {
    if (isLoggedIn) {
      addToCart(product);
      Swal.fire({
        title: 'Produto adicionado ao carrinho!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Você precisa estar logado para adicionar ao carrinho.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  };

  if (!product) {
    return <h2>Oops... Produto não encontrado :/ </h2>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <button className="buy-button" onClick={handleAddToCart}>Comprar</button>
        <div className='product-about'>
            <h3>Sobre</h3>
            <p>Descrição do produto.</p>
        </div>
        <div className='product-comentary'>
            <h3>Comentários</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
