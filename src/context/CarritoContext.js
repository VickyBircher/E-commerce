import React, { createContext, useState, useMemo } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [Carrito, setCarrito] = useState([]);

    const currentValueCarrito = useMemo(() => {
        return {
            Carrito,
            setCarrito
        }
    } , [Carrito]);

    return (
        <CarritoContext.Provider value={currentValueCarrito}>
            {children}
        </CarritoContext.Provider>
    );
};

export default CarritoContext;