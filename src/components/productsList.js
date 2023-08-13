import { useEffect, useState } from "react";
import Product from "./product";
import { getAllProductHttp } from "../services/http";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductHttp()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
    console.log("get data");
  }, []);

  return (
    <section className="flex flex-wrap justify-center gap-7">
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
