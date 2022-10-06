import React, { createContext, useState, useMemo, useEffect } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [Carrito, setCarrito] = useState([]);

  //JSON.parse(localStorage.getItem("Carrito"))

  const sumarProductoContext = (producto) => {
    if (!Carrito.includes(producto)) {
      setCarrito([...Carrito, producto]);
    }
    else {
      let index = Carrito.indexOf(producto)
      Carrito[index].cant += 1;
      setCarrito([...Carrito]);
    }
  }

  const restarProductoContext = (producto) => {
    const index = Carrito.indexOf(producto);
    Carrito[index].cant -= 1;
    if (Carrito[index].cant === 0) {
      Carrito.splice(index, 1);
    }
    setCarrito([...Carrito])
  }

  const borrarProductoContext = (producto) =>{
    const index = Carrito.indexOf(producto);
    Carrito.splice(index, 1);
    setCarrito([...Carrito])
  }

  // useEffect(()=>{
  //   localStorage.getItem('Carrito', JSON.stringify(Carrito))
  // },[Carrito])

  const currentValueCarrito = useMemo(() => {
    return {
      Carrito,
      setCarrito,
      sumarProductoContext,
      restarProductoContext,
      borrarProductoContext
    };
  }, [Carrito]);

  return (
    <CarritoContext.Provider value={currentValueCarrito}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContext;
