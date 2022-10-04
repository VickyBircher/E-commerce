import React, { useState, useEffect, useContext } from "react";
import TableItems from "./TableItems";
import PropTypes from "prop-types";
import { ComidaTableShape } from "../shapes";
import ProductosUnicosContext from "../context/ProductosUnicosContext";
import ProductosRepetidosContext from "../context/ProductosRepetidosContext";
import CarritoContext from "../context/CarritoContext";

export default function Table(props) {
  const { carrito, setCarrito } = props;

  const [carritoOrdenado, setCarritoOrdenado] = useState([]);
  const {ProductosUnicos, setProductosUnicos} = useContext(ProductosUnicosContext);
  const {ProductosRepetidos, setProductosRepetidos} = useContext(ProductosRepetidosContext);

  const ordenarProductos = () => {
    const ordenados = carrito.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    setCarritoOrdenado(ordenados);
  };

  const obtenerProductosUnicos = () => {
    const productos = carritoOrdenado.reduce((accArr, valor) => {
      if (accArr.indexOf(valor) < 0) {
        accArr.push(valor);
      }
      return accArr;
    }, []);
    console.log("productos: ", productos);
    setProductosUnicos(productos);
  };

  const obtenerCantRepetidos = () => {
    let cantidad = 1;
    let repetidos = [];
    for (let i = 0; i < carritoOrdenado.length; i++) {
      if (carritoOrdenado[i + 1] === carritoOrdenado[i]) {
        cantidad++;
      } else {
        repetidos.push(cantidad);
        cantidad = 1;
      }
    }
    setProductosRepetidos(repetidos);
  };

  useEffect(() => {
    ordenarProductos();
    if (carritoOrdenado.length > 0) {
      obtenerProductosUnicos();
      obtenerCantRepetidos();
    }
  }, [carrito, carritoOrdenado]);

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
          ProductosUnicos.map((producto, index) => {
            return (
              <TableItems producto={producto} cantidad={ProductosRepetidos[index]} />
            );
          })) : (
            <tr>
              <td className="shoping__cart__item">
                <h5>No hay productos en el carrito</h5>
              </td>
            </tr>
          )
          }
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
