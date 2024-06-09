import React from 'react';
import { useFavorites } from '../../../FavoritesContext';
import './favoritos.css';

const Favoritos = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="favoritos-container">
      <h1 className="favoritos-title">MEUS FAVORITOS</h1>
      {favorites.length === 0 ? (
        <p className='empty-favoritos'>Seu favoritos está vazio.</p>
      ) : (
        <div className="grid-container">
          {favorites.map((item, index) => (
            <div key={index} className="grid-item">
              <img src={item.image} alt={item.name} />
              <div className="heart-icon" onClick={() => removeFromFavorites(item)}>♥</div>
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
