import React from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard";

const Products = () => {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  return (
    <>
      {isLoading && <p>Loading..</p>}
      {error && <p>{error}</p>}
      <ul className="flex shrink-0 px-5 pt-12 mt-24 flex-wrap">{products && products.map((product) => <ProductCard key={product.id} product={product} />)}</ul>
    </>
  );
};

export default Products;
