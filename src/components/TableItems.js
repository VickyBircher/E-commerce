import React from "react";
import "../App.css";

export default function TableItems(props) {
  const { name, price, image, cantidad } = props;

  return (
    <>
      <tr>
        <td className="shoping__cart__item">
          <img src={image} alt="" className="imageTable" />
          <h5>{name}</h5>
        </td>
        <td className="shoping__cart__price">${price}/kg</td>
        <td className="shoping__cart__quantity">
          <div className="quantity">
            <div className="pro-qty">{cantidad}kg</div>
          </div>
        </td>
      </tr>
    </>
  );
}
