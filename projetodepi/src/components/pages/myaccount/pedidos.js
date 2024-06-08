import React, { useContext } from 'react';
import { OrdersContext } from '../../../OrdersContext'; // Importando OrdersContext
import './pedidos.css';

const Pedidos = () => {
  const { pedidos } = useContext(OrdersContext); // Utilizando OrdersContext

  return (
    <div className="container">
      <div className="meus-pedidos">
        <h2>MEUS PEDIDOS</h2>
        {pedidos.length > 0 ? (
          pedidos.map((pedido, index) => (
            <div key={index} className="pedido">
              <div className="pedido-image"></div>
              <p>{pedido}</p>
            </div>
          ))
        ) : (
          <h3>Você não tem pedidos.</h3>
        )}
      </div>
      <div className="historico">
        <h2>HISTÓRICO</h2>
        {/* Histórico com efeito de deslizar */}
      </div>
    </div>
  );
};

export default Pedidos;



