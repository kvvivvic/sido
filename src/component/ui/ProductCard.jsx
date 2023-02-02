import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, product: { id, image, title, category, price } }) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="rounded-lg shaodw-md overflow-hidden cursor-pointer"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="mt-2 px-2 text-lg flex flex-col items-center">
        <h3 className="py-2">{title}</h3>
        <p>{`KRW ${price}`}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600">{category}</p>
    </li>
  );
};

export default ProductCard;
