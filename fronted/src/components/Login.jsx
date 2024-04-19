import React, { useContext, useState } from "react";
import  {Link, useLocation, useNavigate} from "react-router-dom";

const title = "Iniciar Sesión";
const socialTitle = "Iniciar sesión con las redes sociales";
const btnText = "Iniciar Sesión";

const socialList = [
  {
    
    link: "#",
    iconName: "icofont-github",
    className: "github",
  },
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
];

const Login = () => {
 
  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>

            <form className="account-form" >
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electronico *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña *"
                />
              </div>
              
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Recordar contraseña</label>
                  </div>
                  <Link to="#">¿ Olvidaste la contraseña ?</Link>
                </div>
              </div>
              <div className="form-group text-center">
                <button className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
              ¿ No tienes cuenta ? <Link to="/sing-up">Registrate</Link>
              </span>
              <span className="or">
                <span>Ó</span>
              </span>

              {/* social icons */}
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

export default Login;
