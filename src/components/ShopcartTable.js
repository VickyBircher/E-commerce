import React from "react";
import Discount from "./Discount";
import Resume from "./Resume";
import Table from "./Table";
import { useContext } from "react";
import CarritoContext from "../context/CarritoContext";

export default function ShopcartTable() {
  const { Carrito, setCarrito } = useContext(CarritoContext);

  return (
    <>
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <Table carrito={Carrito} setCarrito={setCarrito} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <a href={null} className="primary-btn cart-btn">
                  CONTINUE SHOPPING
                </a>
                <a href={null} className="primary-btn cart-btn cart-btn-right">
                  Upadate Cart
                </a>
              </div>
            </div>
            <Discount />
            <Resume carrito={Carrito} />
          </div>
        </div>
      </section>
    </>
  );
}
