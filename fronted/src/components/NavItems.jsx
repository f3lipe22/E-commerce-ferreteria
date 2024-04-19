import React, { useState } from 'react'
//import { NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png";

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFiexd, setHeaderFiexd] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          setHeaderFiexd(true);
        } else {
          setHeaderFiexd(false);
        }
      });

  return (
    <header
      className={`header-section style-4 ${
        headerFiexd ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* ------ header top: first div ----- */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/singup" className="lab-btn me-3">
              <span>Crear cuenta</span>
            </Link>
            <Link to="/login">Registrarse</Link>
          </div>
        </div>
      </div>

      {/* header top ends*/}

      {/* ---header botton starts */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo  */}
            <div className="logo-search-acte">
            <div className="logo">
  <Link to="/">
    <img src={logo} alt="logo" style={{ width: '60px' }} />
  </Link>
</div>

            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/shop">Productos</Link>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/about">Nuestra Tienda</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contacto</NavLink>
                  </li>
                </ul>
              </div>
                <>
                  <Link
                    to="/sing-up"
                    className="lab-btn me-3 d-none d-md-block"
                  >
                    <span>Crear Cuenta</span>
                  </Link>
                  <Link to="/login" className="d-none d-md-block">
                    Iniciar Sesión
                  </Link>
                </>


              {/* menu toggle btn */}
              <div
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* social toggler */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header botton ends */}
    </header>
  )
}

export default NavItems