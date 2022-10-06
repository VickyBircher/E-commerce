import React, { useContext } from "react";
import "../App.css";
import PropTypes from "prop-types";
import { ProductoShape } from "../shapes";
import CarritoContext from "../context/CarritoContext";

export default function TableItems(props) {
  const { sumarProductoContext, restarProductoContext, borrarProductoContext } = useContext(CarritoContext);
  const { producto } = props;

  return (
    <>
      <tr>
        <td className="shoping__cart__item">
          <img src={producto.image} alt="" className="imageTable" />
          <h5>{producto.name}</h5>
          <button onClick={() => sumarProductoContext(producto)} className="btn-add">
            +
          </button>
          <button onClick={() => restarProductoContext(producto)} className="btn-substract">
            -
          </button>
          <button onClick={() => borrarProductoContext(producto)} className="btn-trash">
            🗑️
          </button>
        </td>
        <td className="shoping__cart__price">${producto.price}/kg</td>
        <td className="shoping__cart__quantity">
          <div className="quantity">
            <div className="pro-qty">{producto.cant} Kg</div>
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
