import React from 'react';
import { useFavoritos } from '../../../FavoritosContext';
import './favoritos.css';

const Favoritos = () => {
  const { favoritos, removeFromFavoritos } = useFavoritos();

  return (
    <div className="favoritos-container">
      <h1 className="favoritos-title">FAVORITOS</h1>
      {favoritos.length === 0 ? (
        <p className='empty-favoritos'>Seu favoritos está vazio.</p>
      ) : (
        <div className="grid-container">
          {favoritos.map((item, index) => (
            <div key={index} className="grid-item">
              <img src={item.image} alt={item.name} />
              <div className="heart-icon" onClick={() => removeFromFavoritos(item)}>♥</div>
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




