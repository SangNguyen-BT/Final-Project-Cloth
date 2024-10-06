import React, { useContext, useState } from "react";
import "./css/CartTab.css";
import { ShopContext } from "../context/ShopContext";
import EmptyCartModal from "./EmptyCartModal";

const CartTab = () => {
  const { showCarttab, cartList, setCartList, totalPriceInCart, navigate } =
    useContext(ShopContext);
  const [isEmptyModalOpen, setIsEmptyModalOpen] = useState(false);

  const isEmpty = cartList.length === 0;
  let cartBodyElement = "";

  function handleIncreaseQuantity(id) {
    const updatedCartList = cartList.map((item) => {
      if (item.id == id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartList(updatedCartList);
  }

  function handleDecreaseQuantity(id) {
    const updatedCartList = cartList.map((item) => {
      if (item.id == id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartList(updatedCartList);
  }

  function handleDelete(id) {
    const updatedCartList = cartList.filter((item) => item.id !== id);
    setCartList(updatedCartList);
  }

  function linkToPayment() {
    if (isEmpty) {
      setIsEmptyModalOpen(true)
    } else {
      navigate("/place-order");
      showCarttab();
    }
 
  }

  if (isEmpty) {
    cartBodyElement = (
      <div className="cart-empty">
        <p>The cart is empty</p>
      </div>
    );
  } else {
    cartBodyElement = cartList.map((item) => {
      const { id, image, name, price, quantity } = item;
      const totalPricePerProduct = quantity * price;
      const isDisableDecreaseButton = quantity === 1;

      return (
        <div className="list-cart-item" key={id}>
          <img src={image[0]} />
          <div className="cart-item-detail">
            <h3>{name}</h3>
            <h5>${price}</h5>
            <div className="list-cart-amount">
              <div className="list-cart-amount-plusMinus">
                <button
                  className="btn btn-primary"
                  disabled={isDisableDecreaseButton}
                  onClick={() => handleDecreaseQuantity(id)}
                >
                  <i className="fa fa-minus" />
                </button>

                <span className="qty">{quantity}</span>
                <button
                  className="btn btn-primary"
                  onClick={() => handleIncreaseQuantity(id)}
                >
                  <i className="fa fa-plus" />
                </button>
              </div>

              <span className="list-cart-price">$ {totalPricePerProduct}</span>
              <button className="button-trash" onClick={() => handleDelete(id)}>
                <i className="fa fa-trash-alt" />
              </button>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="cart-tab">
      <div className="cart-header">
        <i
          className="fa fa-long-arrow-alt-right cart-close"
          onClick={showCarttab}
        ></i>
        <h6>My Shopping Cart</h6>
      </div>
      <div className="list-cart-body">{cartBodyElement}</div>
      <div className="cart-footer">
        <div className="cart-footer-total">
          <strong>Total</strong>
          <span className="cart-total">$ {totalPriceInCart()}.00</span>
        </div>
        <button className="button-clear" onClick={() => setCartList([])}>
          CLEAR CART
        </button>
        <button className="button-checkOut" onClick={linkToPayment}>
          CHECKOUT
        </button>
      </div>
      <EmptyCartModal isEmptyModalOpen={isEmptyModalOpen} onClose={() => setIsEmptyModalOpen(false)}/>
    </div>
  );
};

export default CartTab;
