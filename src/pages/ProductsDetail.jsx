import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useCart from "../hooks/useCart";

const ProductsDetail = () => {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);

  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess("장바구니에 추가되었습니다.");
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };
  return (
    <>
      <section className="flex flex-col md:flex-row p-4">
        <div className="w-full basis-7/12 p-24 pb-4 md:p-24">
          <img className=" w-96 mx-auto md:w-3/4" src={image} alt={title} />
        </div>
        <div className="w-full basis-5/12 md:pl-12 flex flex-col p-4 pt-4 md:pt-24">
          <p className=" w-20 text-center inline-block border bg-indigo-400 text-white font-bold text-sm px-2 py-1 rounded-lg">{category}</p>
          <h2 className="text-3xl font-bold py-2 border-b border-gray-400 font-lato">{title}</h2>
          <p className="text-2xl font-bold py-2 font-lato">KRW {price}</p>
          <p className="flex items-center">{description}</p>
          <label htmlFor="select" className=" text-indigo-400 font-bold">
            Option :
          </label>
          <select className="p-2 m-4 border-2 border-dashed border-indigo-400 outline-none" id="select" onChange={handleSelect} value={selected}>
            {options && options.map((option, index) => <option key={index}>{option}</option>)}
          </select>
          {success && <p className="my-2">{success}</p>}
          <button className="border border-black w-36 mx-auto font-lato font-bold rounded-sm hover:scale-105" onClick={handleClick}>
            ADD A CART
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductsDetail;
