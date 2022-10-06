import React from "react";
import TableItems from "./TableItems";
import PropTypes from "prop-types";
import { ComidaTableShape } from "../shapes";

export default function Table(props) {
  const { carrito } = props;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="shoping__product">Products</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {carrito.length > 0 ? (
            carrito.map((producto) => {
              return <TableItems producto={producto} />;
            })
          ) : (
            <tr>
              <td className="shoping__cart__item">
                <h5>No hay productos en el carrito</h5>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

Table.propTypes = {
  carrito: PropTypes.arrayOf({
    comida: ComidaTableShape,
  }).isRequired,
};
