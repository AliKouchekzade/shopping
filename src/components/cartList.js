import { useCart } from "../providers/cartProvider";
import Cart from "./cart";

const CartList = () => {
  const carts = useCart();

  return (
    <section className="py-2 bg-cyan-50 basis-3/4 rounded-lg">
      <h2 className="mt-5 px-10 text-4xl">Cart</h2>
      <div className="flex flex-col gap-y-5 mt-5 px-10">
        {carts.length ? (
          carts.map((cart) => <Cart key={cart.id} cart={cart} />)
        ) : (
          <p>cart is empty</p>
        )}
      </div>
    </section>
  );
};

export default CartList;
