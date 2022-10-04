import React, { useState, useContext, useEffect } from "react";
import CarritoContext from "../context/CarritoContext";
import ProductosUnicosContext from '../context/ProductosUnicosContext'
import PropTypes from "prop-types";
import { ComidaResumeShape } from "../shapes";

export default function DetailProduct(props) {
  const { comidaDetallada } = props;
  const { Carrito, setCarrito } = useContext(CarritoContext);
  const [carritoOrdenado, setCarritoOrdenado] = useState([]);
  const {ProductosUnicos, setProductosUnicos} = useContext(ProductosUnicosContext);

  const agregarAlCarrito = async () => {
    if (Carrito.length === 0) {
      setCarrito([comidaDetallada]);
    } else {
      setCarrito([...Carrito, comidaDetallada]);
    }
    alert("Producto agregado al carrito");
  };

  const ordenarProductos = () => {
    const ordenados = Carrito.sort((a, b) => {
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

  useEffect(() => {
    ordenarProductos();
    if (carritoOrdenado.length > 0) {
      obtenerProductosUnicos();
    }
  }, [Carrito, carritoOrdenado]);

  return (
    <>
      <div className="container">
        <div className="row">
          <img
            src={comidaDetallada.image}
            style={{ width: "50%", height: "50%" }}
            alt={comidaDetallada.id}
          />
          <div className="column">
            <h1 style={{ fontSize: 50 }}>{comidaDetallada.name}</h1>
            <h2 style={{ fontWeight: "bold" }}>${comidaDetallada.price}/kg</h2>
            <p>{comidaDetallada.desc}</p>
            <button className="button" onClick={agregarAlCarrito}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

DetailProduct.propTypes = {
  comidaDetallada: PropTypes.oneOfType([
    PropTypes.arrayOf(
      ComidaResumeShape
    ),
    ComidaResumeShape,
  ]).isRequired,
};
