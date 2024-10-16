import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import BestSeller from "../components/BestSeller";

const Product = () => {
  const { _productId } = useParams();
  const { products, currency, handleAddToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData =  () => {
    products.map((item) => {
      if (item._id === _productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [_productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-4 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-4 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <div className="mt-20  mb-3">
            <button
              onClick={() => handleAddToCart(productData)}
              className="bg-red-400 text-white px-8 py-3 hover:bg-blue-400"
            >
              ADD TO CART
            </button>
          </div>
          <hr className="mt-2 sm:w-4/5" />
          <div className="py-4">
            <div className="flex flex-col gap-1">
              <b>Made in VietNam</b>
              <p>
              100% Original product. <br />
              Cash on delivery is available on this product. <br />
              Easy return and exchange policy within 7 days. <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <BestSeller />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
