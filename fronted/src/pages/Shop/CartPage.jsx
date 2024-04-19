import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../../assets/images/shop/del.png";
import CheckoutPage from "./CheckoutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Obtener artículos del carrito desde el almacenamiento local
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  //Calcular el precio total de cada artículo del carrito
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // Manejar el aumento de cantidad
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
    //Actualiza el almacenamiento local con los nuevos artículos del carrito
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // Manejar la disminución de la cantidad
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      //Actualiza el almacenamiento local con los nuevos artículos del carrito
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  // Manejar la eliminación de elementos
  const handleRemoveItem = (item) => {
    // Filtrar el elemento a eliminar
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    //Actualiza el estado con el nuevo carrito
    setCartItems(updatedCart);
    //Actualiza el almacenamiento local con el carrito actualizado
    updateLocalStorage(updatedCart);
  };

  //Actualiza el almacenamiento local con los artículos del carrito
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  //Calcular el subtotal del carrito
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  //Calcula el total del pedido
  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title={"Carrito"} curPage={"Carrito"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Producto</th>
                    <th className="cat-price">Precio</th>
                    <th className="cat-quantity">Cantidad</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, indx) => (
                    <tr key={indx}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop-single">
                            <img src={`${item.img}`} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop-single">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon" action="/">
                  <input
                    type="text"
                    name="coupon"
                    placeholder="Cupon..."
                    className="cart-page-input-text"
                  />
                  <input type="submit" value="Aplicar Cupon" />
                </form>
                <form className="cart-checkout" action="/">
                  <input type="submit" value="Actualizar Carrito" />
                  {/* <Link to="/check-out"><input type="submit" value="Proceed to Checkout" /></Link> */}
                  <div>
                    <CheckoutPage />
                  </div>
                </form>
              </div>

              {/* shopping box */}
              <div className="shiping-box">
                <div className="row">
                  {/* shipping  */}
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calcular costo de envío</h3>
                      <div className="outline-select">
                        <select>
                          <option value="volvo">Bogotá</option>
                          <option value="saab">Cali</option>
                          <option value="saab">Barranquilla</option>
                          <option value="saab">Medellin</option>
                          <option value="saab">Cartagena</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      
                      <input
                        type="text"
                        name="coupon"
                        placeholder="Código postal/ZIP"
                        className="cart-page-input-text"
                      />
                      <button type="submit">Actualizar</button>
                    </div>
                    
                  </div>

                  {/* cart total */}
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Total del Carrito</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Subtotal del carrito</span>
                          <p className="pull-right">$ {cartSubtotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                          Envío y manipulación
                          </span>
                          <p className="pull-right">Envío gratis</p>
                        </li>
                        <li>
                          <span className="pull-left">Total del pedido</span>
                          <p className="pull-right">
                            $ {orderTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
