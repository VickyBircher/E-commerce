import React, { createContext, useState, useMemo, useEffect } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [Carrito, setCarrito] = useState([]);

  const sumarProductoContext = (producto) => {
    if (!Carrito.includes(producto)) {
      setCarrito([...Carrito, producto]);
    } else {
      let index = Carrito.indexOf(producto);
      Carrito[index].cant += 1;
      setCarrito([...Carrito]);
    }
  };

  const restarProductoContext = (producto) => {
    const index = Carrito.indexOf(producto);
    Carrito[index].cant -= 1;
    if (Carrito[index].cant === 0) {
      Carrito.splice(index, 1);
    }
    setCarrito([...Carrito]);
  };

  const borrarProductoContext = (producto) => {
    const index = Carrito.indexOf(producto);
    Carrito.splice(index, 1);
    setCarrito([...Carrito]);
  };

  const obtenerTotalContext = () => {
    let total = 0;
    Carrito.forEach((producto) => {
      total += producto.price * producto.cant;
    });
    return total;
  };

  useEffect(() => {
    if(Carrito.length > 0){
    localStorage.setItem("Carrito", JSON.stringify(Carrito));
    }
  }, [Carrito]);

  useEffect(() => {
    let productos = localStorage.getItem("Carrito");
    setCarrito(JSON.parse(productos));
  }, []);

  const currentValueCarrito = useMemo(() => {
    return {
      Carrito,
      setCarrito,
      sumarProductoContext,
      restarProductoContext,
      borrarProductoContext,
      obtenerTotalContext,
    };
  }, [Carrito]);

  return (
    <CarritoContext.Provider value={currentValueCarrito}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContext;
