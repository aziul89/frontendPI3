import React, { createContext, useContext, useState } from 'react';

export const OrdersContext = createContext();

export const useOrders = () => {
  return useContext(OrdersContext);
};

export const OrdersProvider = ({ children }) => {
  const [pedidos, setPedidos] = useState([]);

  const adicionarPedido = (pedido) => {
    setPedidos([...pedidos, pedido]);
  };

  return (
    <OrdersContext.Provider value={{ pedidos, adicionarPedido }}>
      {children}
    </OrdersContext.Provider>
  );
};
