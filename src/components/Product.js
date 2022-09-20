import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Product(props) {
  const { comida } = props;

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
        <div className="featured__item">
          <div
            className="featured__item__pic set-bg"
            data-setbg="img/featured/feature-3.jpg"
          >
            <NavLink to={`/Detail/${comida.id}`}>
              <img src={comida.image} />
            </NavLink>
          </div>
          <div className="featured__item__text">
            <h6>
              <a href="#">{comida.name}</a>
            </h6>
            <h5>${comida.price}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

Product.propTypes = {
  comida: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Product;
