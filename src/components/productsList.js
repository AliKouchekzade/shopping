import { products } from "../data/data";
import Product from "./product";

const ProductList = () => {
  return (
    <section className="flex flex-wrap justify-center gap-7">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </section>
  );
};

export default ProductList;
