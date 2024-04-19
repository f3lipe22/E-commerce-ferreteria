const subTitle = "Save The Day";
const title = (
  <h2 className="title">
    Registrate y obtendras un cupon de <b>Descuento</b>{" "} 
    en <span className="yellow-color">Todos</span> <b>Nuestros productos</b>
  </h2>
);
const desc = "¡Oferta de tiempo limitado! Apresúrate";
const regTitle = "Registrate Ahora";
const btnText = "Registrar";

const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="section-header">
              <span className="subtitle">{subTitle}</span>
              {title}
              <p>{desc}</p>
            </div>
          </div>
          <div className="col">
            <div className="section-wrapper">
              <h4>{regTitle}</h4>
              <form className="register-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Usuario"
                  className="reg-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  className="reg-input"
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Telefono"
                  className="reg-input"
                />
                <button type="submit" className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
