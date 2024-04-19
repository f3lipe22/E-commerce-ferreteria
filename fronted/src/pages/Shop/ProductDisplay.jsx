/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
/*const desc = "Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging 	psd template."; */

const ProductDisplay = ({ item }) => {
  const { id, img, price, name, quantity, ratingsCount, seller } = item;
  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };

  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crea un objeto que representa el producto que se agregará al carrito.
    const product = {
      id: id,
      img: img,
      name: name,
      price: price, 
      quantity: prequantity,
      coupon: coupon,
    };

    // Recuperar artículos del carrito existentes del almacenamiento local o inicializar una matriz vacía
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    //Comprueba si el producto con el mismo ID ya está en el carrito
    const existingProductIndex = existingCart.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      // Producto ya en el carrito; cantidad de actualización
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      // Producto no en el carrito; agregarlo
      existingCart.push(product);
    }

    //Actualiza el almacenamiento local con los artículos actualizados del carrito
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Restablecer campos y cantidad del formulario
    setQuantity(1);
    setCoupon("");

    // Puede agregar más lógica, como mostrar un mensaje de confirmación.
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
        <h4 >{name}</h4>
        <p className="rating ">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span> {ratingsCount} Reseña(s)</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        </div>
      </div>
      {/* Componente del carrito de un solo producto aquí */}
      <div>
      <form onSubmit={handleSubmit}>  
      <div className="cart-plus-minus ">
        <div onClick={handleDecrease} className="dec qtybutton">
          -
        </div>
        <input
          className="cart-plus-minus-box"
          type="text"
          name="qtybutton"
          value={prequantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
        <div className="inc qtybutton" onClick={handleIncrease}>
          +
        </div>
      </div>
      <div className="discount-code mb-2">
        <input
          type="text"
          placeholder="Ingresa cupon de descuento "
          onChange={(e) => setCoupon(e.target.value)}
        />
      </div>
      <button type="submit" className="lab-btn">
        <span>Añadir al Carrito</span>
      </button>

      <Link to="/cart-page" className="lab-btn bg-primary">
        <span>Comprar</span>
      </Link>
    </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
