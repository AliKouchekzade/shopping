import { useCart } from "../providers/cartProvider";
import Cart from "./cart";

const CartList = () => {
  const carts = useCart();

  return (
    <section className="mx-10 py-2 bg-cyan-50">
      <h2 className="mt-5 px-10 text-4xl">Cart</h2>
      <div className="flex flex-col gap-y-5 mt-5 px-10">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}
      </div>
    </section>
  );
};

export default CartList;
