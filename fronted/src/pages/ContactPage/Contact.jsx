import React from "react";
import GoogleMap from "../../components/Sidebar/GoogleMap";
import PageHeader from "../../components/PageHeader";

const subTitle = "Póngase en contacto con nosotros";
const title = "¡Siempre estamos ansiosos por saber de usted!";
const conSubTitle = "Póngase en contacto con nosotros";
const conTitle =
  "Complete el formulario a continuación para que podamos conocer sus necesidades.";
const btnText = "Envia tus peticiones";

const contactList = [
  {
    imgUrl: "/src/assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Direccion de la tienda",
    desc: "Cra. 1 #26a1 ",
  },
  {
    imgUrl: "/src/assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Numero de telefono",
    desc: "(+1) 588 5204, 0800-00200",
  },
  {
    imgUrl: "/src/assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Correo Electronico",
    desc: "andres03@arce.com",
  },
  {
    imgUrl: "/src/assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Nuestro Sitio Web",
    desc: "www.ArCe.com",
  },
];

const Contact = () => {
  return (
    <div>
      {/*<PageHeader title={"Póngase en contacto con nosotros"} curPage={"Contacto"} />*/}
      
      <div className="contact-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{conSubTitle}</span>
            <h2 className="title">{conTitle}</h2>
          </div>
          <div className="section-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Nombre *" />
              </div>
              <div className="form-group">
                <input type="text" name="email" placeholder="Correo *" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="number"
                  placeholder="Numero de telefono *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto *"
                />
              </div>
              <div className="form-group w-100">
                <textarea
                  rows="8"
                  type="text"
                  placeholder="Descripción"
                ></textarea>
              </div>
              <div className="form-group w-100 text-center">
                <button className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="map-address-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
          </div>
          <div className="section-wrapper">
            <div className="row flex-row-reverse">
              <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-wrapper">
                  {contactList.map((val, i) => (
                    <div className="contact-item" key={i}>
                      <div className="contact-thumb">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="contact-content">
                        <h6 className="title">{val.title}</h6>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 col-12">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
