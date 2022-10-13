import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import CarritoContext from "../context/CarritoContext";

function Header() {
  const { Carrito } = useContext(CarritoContext);

  return (
    <>
      <header className="header fondo">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <NavLink to={`/`}>
                  <img src="img/logo.png" alt="" />
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li>
                    <NavLink to={`/`}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/Shopcart`}>Shopcart</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <i className="fa fa-user"></i>
                  </li>
                  <NavLink to={`/Shopcart`}>
                    <li className="shopping-bag">
                      <a>
                        <i className="fa fa-shopping-bag">
                          <span>
                            {Carrito.length}
                            </span>
                        </i>
                      </a>
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
