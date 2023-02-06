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
      <ul className="grid grid-cols-1 md:grid-cols-4  lg-grid-cols-4 gap-1 p-4">{products && products.map((product) => <ProductCard key={product.id} product={product} />)}</ul>
    </>
  );
};

export default Products;
