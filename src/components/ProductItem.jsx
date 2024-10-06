import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { currency, handleAddToCart } = useContext(ShopContext);
  const { id, image, name, price } = props;
  return (
    <div>
      <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-in-out"
            src={image[0]}
            alt=""
          />
        </div>
        <p className="pt-3 pb-1 text-base">{name}</p>
      </Link>
      <div className="flex justify-between mb-0">
        <p className="text-xl font-medium">
          {currency}
          {price}
        </p>
        <button
          className="text-2xl w-5 h-6 flex text-red-500 active:bg-black"
          onClick={() => handleAddToCart(props)}
        >
          <i className="fa fa-shopping-bag" />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
