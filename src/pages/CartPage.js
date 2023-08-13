import CartList from "../components/cartList";
import CartSummry from "../components/cartSummry";

const CartPage = () => {
  return (
    <main className="my-8 container m-auto flex gap-x-10 px-10">
      <CartList />
      <CartSummry />
    </main>
  );
};

export default CartPage;
