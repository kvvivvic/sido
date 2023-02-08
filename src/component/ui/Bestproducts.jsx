import React from "react";
import styles from "../ui/BestProducts.module.css";
import useProducts from "../../hooks/useProducts";
import BestProductsCard from "../ui/BestProductsCard";

const Bestproducts = () => {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  return (
    <section>
      <div className="my-12">
        <h3 className={styles.title}>Best Products</h3>
        <ul className="grid grid-cols-1 md:grid-cols-4 mt-24 gap-4">{products && products.map((product) => <BestProductsCard key={product.id} product={product} />)}</ul>
      </div>
    </section>
  );
};

export default Bestproducts;
