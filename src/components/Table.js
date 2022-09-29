import React, { useState, useEffect, useContext } from "react";
import TableItems from "./TableItems";
import PropTypes from "prop-types";
import { ComidaTableShape } from "../shapes";
import ProductosElegidos from "../context/ProductosElegidosContext";

export default function Table(props) {
  const { carrito } = props;
  const { ProductosElegidosContext, setProductosElegidosContext } = useContext(ProductosElegidos);

  const [carritoOrdenado, setCarritoOrdenado] = useState([]);
  const [productosUnicos, setProductosUnicos] = useState([]);
  const [cantRepetidos, setCantRepetidos] = useState([]);

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
    setCantRepetidos(repetidos);
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
          {productosUnicos.map((producto, index) => {
            return (
              <TableItems producto={producto} cantidad={cantRepetidos[index]} />
            );
          })}
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
