import React, { createContext, useState, useMemo } from "react";
const ProductosElegidosContext = createContext();

export const ProductosElegidosProvider = ({ children }) => {
  const [ProductosElegidos, setProductosElegidos] = useState([]);

  const currentValueProductosElegidos = useMemo(() => {
    return {
      ProductosElegidos,
      setProductosElegidos,
    };
  }, [ProductosElegidos]);

  return (
    <ProductosElegidosContext.Provider value={currentValueProductosElegidos}>
      {children}
    </ProductosElegidosContext.Provider>
  );
};

export default ProductosElegidosContext;
