import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { ComidaResumeShape } from "../shapes";
import CarritoContext from "../context/CarritoContext";

export default function Resume(props) {
  const { carrito } = props;
  const { obtenerTotalContext } = useContext(CarritoContext);
  const [total, setTotal] = useState(0);

  const saludo = () => {
    alert("Gracias por su compra!");
  };

  useEffect(() => {
    setTotal(obtenerTotalContext);
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
