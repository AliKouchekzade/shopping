import { useCart } from "../providers/cartProvider";

const CartSummry = () => {
  const cards = useCart();
  return (
    <section className="pt-2 pb-5 px-3 bg-cyan-50 basis-1/4 rounded-lg h-min">
      <div className="mt-5 flex justify-between items-center">
        <span className="text-xl">Total ({cards.length}) :</span>
        <span className="text-2xl font-bold">
          $
          {cards
            .map((item) => item.qnt * item.price)
            .reduce((tot, item) => tot + item,0)}
        </span>
      </div>
      <button className="w-full m-auto mt-10 py-2 bg-cyan-700 text-white text-lg rounded-lg">
        CheckOut
      </button>
    </section>
  );
};

export default CartSummry;
