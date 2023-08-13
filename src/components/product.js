import { useState } from "react";
import { useCart, useCartActions } from "../providers/cartProvider";
import UpDownQNT from "../common/updownQNT";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ product }) => {
  const carts = useCart();
  const { addProductToCart } = useCartActions();
  const addProductToCartHandler = (product) => {
    if (!isInCart) {
      addProductToCart(product);
      toast.success("Added to Cart", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
        <div className="flex gap-x-2 items-center">
          {isInCart && (
            <Link className="text-cyan-600" to="/cart">
              see cart
            </Link>
          )}
          <button
            onClick={() => addProductToCartHandler(product)}
            className="bg-cyan-700 text-white text-lg px-3.5 py-1.5 rounded"
          >
            {!isInCart ? (
              "Add to Cart"
            ) : (
              <UpDownQNT id={product.id} setIsInCart={setIsInCart} />
            )}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Product;
