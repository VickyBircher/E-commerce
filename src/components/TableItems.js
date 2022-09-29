import React from "react";
import "../App.css";
import PropTypes from "prop-types";
import { ProductoShape } from "../shapes";

export default function TableItems(props) {
  const { producto, cantidad } = props;
  const sumarProducto = () => {
    alert("sumaste un producto");
  };
  const restarProducto = () => {
    alert("restaste un producto");
  };
  const borrarProducto = () => {
    alert("Borraste los productos");
  };

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
