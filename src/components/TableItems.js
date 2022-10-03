import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import PropTypes from "prop-types";
import { ProductoShape } from "../shapes";
import CarritoContext from "../context/CarritoContext";

export default function TableItems(props) {
  const { Carrito, setCarrito } = useContext(CarritoContext);

  const { producto, cantidad } = props;

  const sumarProducto = () => {
    setCarrito([...Carrito, producto]);
  };

  const restarProducto = () => {
    const index = Carrito.indexOf(producto);
    if (index > -1) {
      Carrito.splice(index, 1);
    }
    setCarrito([...Carrito]);
  };

  const borrarProducto = () => {
    const index = Carrito.indexOf(producto);
    if (index > -1) {
      Carrito.splice(index, cantidad);
    }
    setCarrito([...Carrito]);
    alert("Se han eliminado los productos del carrito");
  };

  console.log("Carrito: ", Carrito);

  return (
    <>
      <tr>
        <td className="shoping__cart__item">
          <img src={producto.image} alt="" className="imageTable" />
          <h5>{producto.name}</h5>
          <button onClick={sumarProducto} className="btn-add">
            +
          </button>
          <button onClick={restarProducto} className="btn-substract">
            -
          </button>
          <button onClick={borrarProducto} className="btn-trash">
            🗑️
          </button>
        </td>
        <td className="shoping__cart__price">${producto.price}/kg</td>
        <td className="shoping__cart__quantity">
          <div className="quantity">
            <div className="pro-qty">{cantidad} Kg</div>
          </div>
        </td>
      </tr>
    </>
  );
}

TableItems.propTypes = {
  producto: ProductoShape,
  cantidad: PropTypes.number.isRequired,
};
