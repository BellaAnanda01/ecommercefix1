import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const localCart = localStorage.getItem("cart")
    const [cart, setCart] = useState({});

  return (
    <DataContext.Provider value={{ cart, setCart, localCart }}>
      {children}
    </DataContext.Provider>
  );
};