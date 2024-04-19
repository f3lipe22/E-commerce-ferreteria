import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const title = "Registrate Ahora";
const socialTitle = "Regístrese con las redes sociales";
const btnText = "Empieza Ahora";

let socialList = [
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
  {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
  },
];

const Signup = () => {

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" >
              <div className="form-group">
                <input type="text" name="name" placeholder="Usuario" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Correo Electronico" />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Contraseña" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmar contraseña"
                />
              </div>
              <div className="form-group">
                <button className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
               ¿ Ya tiene cuenta ? <Link to="/login">Inicia Sesión</Link>
              </span>
              <span className="or">
                <span>Ó</span>
              </span>

              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button className="github">
                    <i className="icofont-github"></i>
                  </button>
                </li>
                <li>
                  <a href="/" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="twitter">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="instagram">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
