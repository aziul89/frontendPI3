import React, { createContext, useContext, useState } from 'react';


const FavoritosContext = createContext();

export const useFavoritos = () => {
  return useContext(FavoritosContext);
};

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const addToFavoritos = (item) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, item]);
  };

  const removeFromFavoritos = (item) => {
    setFavoritos((prevFavoritos) =>
      prevFavoritos.filter((favorito) => favorito.id !== item.id)
    );
  };

  const clearFavoritos = () => {
    setFavoritos([]);
  };

  return (
    <FavoritosContext.Provider
      value={{ favoritos, addToFavoritos, removeFromFavoritos, clearFavoritos }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};