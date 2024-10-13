import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { currency, handleAddToCart } = useContext(ShopContext);
  const { _id, image, name, price } = props;
  return (
    <div className="bg-slate-100 rounded-b-lg h-96 position: relative">
      <Link className="text-gray-700 cursor-pointer" to={`/product/${_id}`}>
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-in-out"
            src={image[0]}
            alt=""
          />
        </div>
        <p className="pt-3 pb-1 text-lg ml-2 mr-2">{name}</p>
      </Link>
      <div className="flex justify-between mb-0 position: absolute bottom-0 w-full">
        <p className="text-xl font-medium ml-2">
          {currency}
          {price}
        </p>
        <button
          className="text-2xl w-5 h-9 mr-4 flex text-red-300 hover:text-blue-400"
          onClick={() => handleAddToCart(props)}
        >
          <i className="fa-solid fa-cart-shopping" />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
