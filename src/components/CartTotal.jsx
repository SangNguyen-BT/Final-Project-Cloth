import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, deliveryFee, totalPriceInCart } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={" TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p className="text-xl">Subtotal</p>
          <p className="text-xl">
            {currency} {totalPriceInCart()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="text-lg">Shipping Fee</p>
          <p className="text-lg">
            {currency} {deliveryFee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b className="text-2xl">Total</b>
          <b className="text-2xl">
            {currency}
            {totalPriceInCart() === 0 ? 0 : totalPriceInCart() + deliveryFee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
