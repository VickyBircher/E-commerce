import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ComidaResumeShape } from "../shapes";

export default function Resume(props) {
  const { carrito } = props;
  const [cantRepetidos, setCantRepetidos] = useState([]);
  const [productosUnicos, setProductosUnicos] = useState([]);
  const [total, setTotal] = useState(0);

  const obtenerCantRepetidos = () => {
    let cantidad = 1;
    let repetidos = [];
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i + 1] === carrito[i]) {
        cantidad++;
      } else {
        repetidos.push(cantidad);
        cantidad = 1;
      }
    }
    setCantRepetidos(repetidos);
  };

  const obtenerProductosUnicos = () => {
    const productos = carrito.reduce((accArr, valor) => {
      if (accArr.indexOf(valor) < 0) {
        accArr.push(valor);
      }
      return accArr;
    }, []);
    setProductosUnicos(productos);
  };

  const calcularTotal = () => {
    let total = 0;
    for (let i = 0; i < productosUnicos.length; i++) {
      total += productosUnicos[i].price * cantRepetidos[i];
    }
    setTotal(total);
  };

  const saludo = () => {
    alert("Gracias por su compra!");
  };

  useEffect(() => {
    obtenerCantRepetidos();
    obtenerProductosUnicos();
    calcularTotal();
  }, [carrito]);

  return (
    <>
      <div className="col-lg-6">
        <div className="shoping__checkout">
          <h5>RESUME</h5>
          <ul>
            <li>
              Total <span>${total}</span>
            </li>
          </ul>
          <button className="primary-btn" onClick={saludo}>
            PAY
          </button>
        </div>
      </div>
    </>
  );
}

Resume.propTypes = {
  carrito: PropTypes.oneOfType([
    PropTypes.arrayOf(
      ComidaResumeShape
    ),
    ComidaResumeShape,
  ]).isRequired,
};
