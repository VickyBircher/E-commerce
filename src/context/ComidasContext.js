import React, { createContext, useState, useMemo } from "react";
import listaComidas from "../comidas";

const ComidasContext = createContext();

export const ComidasProvider = ({ children }) => {
  const [Comidas, setComidas] = useState(listaComidas);

  const currentValueComidas = useMemo(() => {
    return {
      Comidas,
      setComidas,
    };
  }, [Comidas]);

  return (
    <ComidasContext.Provider value={currentValueComidas}>
      {children}
    </ComidasContext.Provider>
  );
};

export default ComidasContext;
