import React from "react";
import ProductItem from "./ProductItem";

const RenderProducts = (props) => {
  const { filterProducts } = props;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
      {filterProducts &&
        filterProducts.map((item, index) => {
          return (
            <ProductItem
              key={index}
              name={item.name}
              _id={item._id}
              price={item.price}
              image={item.image}
            />
          );
        })}
    </div>
  );
};

export default RenderProducts;
