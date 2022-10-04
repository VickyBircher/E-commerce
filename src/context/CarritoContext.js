import React, { createContext, useState, useMemo } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [Carrito, setCarrito] = useState(
    //   ()=>{
    //   try {
    //     const item = window.localStorage.getItem('Carrito');
    //     return item ? JSON.parse(item) : [];
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    []
  );

  const currentValueCarrito = useMemo(() => {
    return {
      Carrito,
      setCarrito,
    };
  }, [Carrito]);

  return (
    <CarritoContext.Provider value={currentValueCarrito}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContext;
