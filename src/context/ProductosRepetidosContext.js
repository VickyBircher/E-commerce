import React, { createContext, useState, useMemo } from "react";
const ProductosRepetidosContext = createContext();

export const ProductosRepetidosProvider = ({ children }) => {
  const [ProductosRepetidos, setProductosRepetidos] = useState([]);

  const currentValueProductosRepetidos = useMemo(() => {
    return {
      ProductosRepetidos,
      setProductosRepetidos,
    };
  }, [ProductosRepetidos]);

  return (
    <ProductosRepetidosContext.Provider value={currentValueProductosRepetidos}>
      {children}
    </ProductosRepetidosContext.Provider>
  );
};

export default ProductosRepetidosContext;
