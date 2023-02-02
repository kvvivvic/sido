import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../hooks/useCart";

const CartStatus = () => {
  const {
    cartQuery: { data: products },
  } = useCart();
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-4xl" />
      {products && <p className="w-5 h-5 text-center bg-indigo-400 text-white font-bold rounded-full absolute -top-1 -right-2">{products.length}</p>}
    </div>
  );
};

export default CartStatus;
