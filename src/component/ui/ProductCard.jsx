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
      <div className="mt-2 px-2 text-lg flex flex-col">
        <p className=" text-base pb-2 font-en">{category}</p>
        <h3 className="font-roboto">{title}</h3>
        <p className="font-lato">{`KRW ${price}`}</p>
      </div>
    </li>
  );
};

export default ProductCard;
