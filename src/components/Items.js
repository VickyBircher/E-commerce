import React, { useContext } from "react";
import Product from "./Product";
import ComidasContext from "../context/ComidasContext";

function Items() {
  const { Comidas } = useContext(ComidasContext);

  return (
    <>
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">
                    All
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            {Comidas.map((comida) => {
              return (
                <Product
                  image={comida.image}
                  name={comida.name}
                  price={comida.price}
                  id={comida.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Items;
