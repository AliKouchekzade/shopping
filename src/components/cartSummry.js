import { Link } from "react-router-dom";
import { useCart } from "../providers/cartProvider";

const CartSummry = () => {
  const cards = useCart();

  let tot = cards
    .map((item) => item.qnt * item.price)
    .reduce((tot, item) => tot + item, 0);

  let offTot = cards
    .map((item) => item.qnt * item.offPrice)
    .reduce((tot, item) => tot + item, 0);
  return (
    <section className="pt-2 pb-5 px-3 bg-cyan-50 basis-1/4 rounded-lg h-min">
      <div className="py-3 flex justify-between items-center">
        <span className="text-xl">Total ({cards.length}) :</span>
        <span className="text-2xl font-bold">${tot}</span>
      </div>
      <div className="py-3 flex justify-between items-center border-b-2 border-cyan-600">
        <span className="text-xl">Discount :</span>
        <span className="text-2xl font-bold"> - ${tot - offTot}</span>
      </div>
      <div className="py-3 flex justify-between items-center">
        <span className="text-xl">Final Total:</span>
        <span className="text-2xl font-bold">${offTot}</span>
      </div>
      <Link to="/checkout">
        <button className="w-full m-auto mt-10 py-2 bg-cyan-700 text-white text-lg rounded-lg">
          {`CheckOut $ ${offTot}`}
        </button>
      </Link>
    </section>
  );
};

export default CartSummry;
