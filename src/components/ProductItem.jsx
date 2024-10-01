import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { currency, handleAddToCart } = useContext(ShopContext);
  const { id, image, name, price } = props
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
        <p className="pt-3 pb-1 text-sm">{name}</p>
      </Link>
      <div className="flex justify-between">
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
        <button><span className="w-5 h-6 bg-red-500 rounded-full flex pl-1.5" onClick={() => handleAddToCart(props)}>+</span></button>
      </div>
    </div>
  );
};

export default ProductItem;
