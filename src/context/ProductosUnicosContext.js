import React, { createContext, useState, useMemo } from "react";
const ProductosUnicosContext = createContext();

export const ProductosUnicosProvider = ({ children }) => {
  const [ProductosUnicos, setProductosUnicos] = useState([]);

  const currentValueProductosUnicos = useMemo(() => {
    return {
      ProductosUnicos,
      setProductosUnicos,
    };
  }, [ProductosUnicos]);

  return (
    <ProductosUnicosContext.Provider value={currentValueProductosUnicos}>
      {children}
    </ProductosUnicosContext.Provider>
  );
};

export default ProductosUnicosContext;
