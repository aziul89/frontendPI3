import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../../CartContext';
import { useFavorites } from '../../../FavoritesContext';
import { useAuth } from '../../../AuthContext';
import Swal from 'sweetalert2';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();
  const { isLoggedIn } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {git

    fetch("https://inici-1.onrender.com/product")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const product = products.find(p => p.idProduto === parseInt(id));

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

  const handleAddToFavorites = () => {
    if (isLoggedIn) {
      addToFavorites(product);
      Swal.fire({
        title: 'Produto adicionado aos favoritos!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Você precisa estar logado para adicionar aos favoritos.',
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
        <img src={product.imgProduto} alt={product.nomeProduto} />
      </div>
      <div className="product-detail-info">
        <h2>{product.nomeProduto}</h2>
        <p>R${product.precoProduto}</p>
        <div className="button-group">
          <button className="buy-button" onClick={handleAddToCart}>Comprar</button>
          <button className="favorite-button" onClick={handleAddToFavorites}>Adicionar aos Favoritos</button>
        </div>
        <div className='product-about'>
            <h3>Sobre</h3>
            <p>{product.descricaoProduto}.</p>
        </div>
        <div className='product-comentary'>
            <h3>Comentários</h3>
            <p>Ainda não possui comentários.</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;