import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import ProductosUnicosContext from '../context/ProductosUnicosContext'

function Header() {
  const {ProductosUnicos} = useContext(ProductosUnicosContext)
  
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
                      {console.log('test', ProductosUnicos.length)}
                      <i className="fa fa-shopping-bag"><span>{!ProductosUnicos.length ? '0' : `${ProductosUnicos.length}`}</span></i>
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
