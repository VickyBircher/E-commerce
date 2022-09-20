import React from "react";
import "../App.css";
import PropTypes from "prop-types";

export default function TableItems(props) {
  // const { name, price, image, cantidad } = props;
  const { producto, cantidad } = props;

  return (
    <>
      <tr>
        <td className="shoping__cart__item">
          <img src={producto.image} alt="" className="imageTable" />
          <h5>{producto.name}</h5>
        </td>
        <td className="shoping__cart__price">${producto.price}/kg</td>
        <td className="shoping__cart__quantity">
          <div className="quantity">
            <div className="pro-qty">{cantidad}kg</div>
          </div>
        </td>
      </tr>
    </>
  );
}

TableItems.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string,
  }).isRequired,
  cantidad: PropTypes.number.isRequired
};
