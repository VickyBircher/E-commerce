import React from "react";
import "../App.css";

export default function Discount() {
  const applyDiscount = () => {
    alert("Descuento aplicado");
  };

  return (
    <>
      <div className="col-lg-6">
        <div className="shoping__continue">
          <div className="shoping__discount">
            <h5>Discount Codes</h5>
            <div className="contedor-flexible">
              <input
                type="text"
                placeholder="Enter your coupon code"
                className="inputDiscount"
              />
              <button
                className="site-btn buttonDiscount"
                onClick={applyDiscount}
              >
                APPLY COUPON
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
