import React from 'react';
import { useOrders } from '../../../OrdersContext';
// import './pedidos.css';

function Pedidos() {
  const { orders } = useOrders();

  return (
    <div className='pedidos'>
      <h2>MEUS PEDIDOS</h2>
      {orders.length === 0 ? (
        <p>Você não tem pedidos.</p>
      ) : (
        <ul>
          {orders.map((pedido, index) => (
            <li key={index}>
              <p className='info'>Pedido realizado em: {pedido.date}</p>
              <ul>
                {pedido.items.map((item, idx) => (
                  <li key={idx} className='pedido-item'>
                    <img src={item.image} alt={item.name} />
                    <div className='pedido-info'>
                      <p>{item.name} - {item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Pedidos;
