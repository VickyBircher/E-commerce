import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import DetailProduct from "../components/DetailProduct";

function Detail(props) {
  const { id } = useParams();
  const { comidas } = props;
  const [comidaDetallada, setComidaDetallada] = useState([]);

  const getData = async () => {
    const result = comidas.filter(
      (comida) => parseInt(comida.id) === parseInt(id)
    );
    setComidaDetallada(result[0]);
  };

  useEffect(() => {
    getData();
  }, [comidas, id]);

  return (
    <>
      <Header />
      <DetailProduct comidaDetallada={comidaDetallada} />
      <div className="container">
        <div className="row">
          {comidas.map((comida) => {
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
      <Footer />
    </>
  );
}

export default Detail;
