import React, { useState } from "react";
import "../../components/modal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa"); // Pestaña activa inicial

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // confirmación del pedido y redireccionamiento a la página de inicio
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleOrderConfirm = () => {
      alert("Your order placed successfully!")
      localStorage.removeItem("cart");
      navigate(from, { replace: true });
  }

  return (
    <div className="modalCard">
      <Button variant="primary" onClick={handleShow} className="py-2">
      Proceder al pago
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Selecciona tu metodo de pago</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      id="visa-tab"
                      data-toggle="tab"
                      href="#visa"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                    >
                      <img src="https://i.imgur.com/sB4jftM.png" width="80" />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      id="paypal-tab"
                      data-toggle="tab"
                      href="#paypal"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                    >
                      <img src="https://i.imgur.com/yK7EDD1.png" width="80" />
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  {/* visa content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    {/* Visa tab content */}
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Tarjeta de credito</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            required="required"
                          />
                          <span>Nombre del titular</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            min="1"
                            max="999"
                            className="form-control"
                            required="required"
                          />
                          <span>Número de tarjeta</span> <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="name"
                              min="1"
                              max="999"
                              className="form-control"
                              required="required"
                            />
                            <span>Fecha de expiración</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="name"
                              min="1"
                              max="3"
                              className="form-control"
                              required="required"
                            />
                            <span>CVV</span>
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>
                          Agregar tarjeta
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* paypal content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "paypal" ? "show active" : ""
                    }`}
                    id="paypal"
                    role="tabpanel"
                    aria-labelledby="paypal-tab"
                  >
                    {/* Paypal tab content */}
                    <div className="mx-4 mt-4">
                      <div className="text-center">
                        <h5>Información de la cuenta Paypal</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            required="required"
                          />
                          <span>Enter your email</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            min="1"
                            max="999"
                            className="form-control"
                            required="required"
                          />
                          <span>Your Name</span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="name"
                              min="1"
                              max="999"
                              className="form-control"
                              required="required"
                            />
                            <span>Extra Info</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="name"
                              min="1"
                              max="999"
                              className="form-control"
                              required="required"
                            />
                            <span></span>
                          </div>
                        </div>
                        <div className="pay px-5">
                          <button className="btn btn-primary btn-block" onClick={handleOrderConfirm}>
                            Add paypal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* payment desclaimer */}
              <p className="mt-3 px-4 p-Disclaimer">
              <em>Payment Disclaimer:</em> In no event shall payment or partial payment by Owner for any material or service
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
