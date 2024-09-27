import React from "react";
import "./style.css";

const CartTab = (props) => {
  const { showCarttab } = props;
  return (
    <div className="cart-tab">
      <div className="cart-header">
        <i
          className="fa fa-long-arrow-alt-right cart-close"
          onClick={showCarttab}
        ></i>
        <h6>My Shopping Cart</h6>
      </div>
      <div className="list-cart-body">
        <div className="list-cart-item">
          <img src="https://media.routine.vn/0x0/prod/media/banner-website-moi-09-jpg.webp" />
          <div className="cart-item-detail">
            <h3>aaa</h3>
            <h5>$120</h5>
            <div className="list-cart-amount">
              <div className="list-cart-amount-plusMinus">
                <i className="fa fa-minus" />
                <span className="qty">1</span>
                <i className="fa fa-plus" />
              </div>

              <span className="list-cart-price">$ 120</span>
              <button className="button-trash">
                <i className="fa fa-trash-alt" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-footer">
        <div className="cart-footer-total">
          <strong>Total</strong>
          <span className="cart-total">$ </span>
        </div>

        <button className="button-clear">CLEAR CART</button>
        <button className="button-checkOut">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartTab;
