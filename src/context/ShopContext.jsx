import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

function ShopContextProvider(props) {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartList, setCartList] = useState([]);
  const navigate = useNavigate()

  function showCarttab() {
    const body = document.querySelector(".header-page");
    body.classList.toggle("showCart");
  }

  function handleAddToCart(productItem) {
    const productExisted = cartList.find((item) => item.id === productItem.id);
    if (productExisted) {
      productExisted.quantity += 1;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, { ...productItem, quantity: 1 }]);
    }
  }

  function totalItemInCart() {
    return cartList.reduce((total, item) => total + item.quantity, 0);
  }

  function totalPriceInCart() {
    return cartList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  const value = {
    products, currency, deliveryFee,
    search, setSearch,
    showSearch, setShowSearch,
    showCarttab,
    cartList, setCartList, handleAddToCart, totalItemInCart,
    totalPriceInCart,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
