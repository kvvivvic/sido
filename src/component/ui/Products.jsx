import React from "react";
import useProducts from "../../hooks/useProducts";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

const Products = () => {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  return (
    <>
      {isLoading && <Loading />}
      {error && <p>{error}</p>}
      <div className=" pt-24 flex justify-center">
        <h3 className="text-2xl text-center  mt-12 font-en pb-2 border-b-2 border-black">Costume</h3>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-4 mt-12  lg-grid-cols-4 gap-1 p-4">{products && products.map((product) => <ProductCard key={product.id} product={product} />)}</ul>
    </>
  );
};

export default Products;
