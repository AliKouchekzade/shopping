import { useState } from "react";
import { useCart, useCartActions } from "../providers/cartProvider";

const Product = ({ product }) => {
  const carts = useCart();
  const { addProductToCart } = useCartActions();
  const addProductToCartHandler = (product) => {
    if (!isInCart) {
      addProductToCart(product);
      setIsInCart(true);
    }
  };

  const [isInCart, setIsInCart] = useState(
    carts.some((cart) => cart.id === product.id)
  );

  return (
    <div className="w-96 bg-cyan-50 rounded-lg px-10 py-5 flex flex-col gap-y-5">
      <header>
        <h2 className="font-semibold">{product.name}</h2>
      </header>
      <main className="flex flex-col items-center">
        <img
          className="w-full h-44 object-cover"
          src={product.image}
          alt={product.name}
        />
      </main>
      <footer className="flex justify-between items-center">
        <span className="font-bold text-xl">$ {product.price}</span>
        <button
          onClick={() => addProductToCartHandler(product)}
          className="bg-cyan-700 text-white text-lg px-3.5 py-1.5 rounded"
        >
          {!isInCart ? "Add to Cart" : "Continue in Cart"}
        </button>
      </footer>
    </div>
  );
};

export default Product;
