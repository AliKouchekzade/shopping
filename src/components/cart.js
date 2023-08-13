import { FaTrashCan, FaPlus, FaMinus } from "react-icons/fa6";
import { useCartActions } from "../providers/cartProvider";

const Cart = ({ cart }) => {
  const { deleteFromCart, updownQNT } = useCartActions();
  return (
    <div className="border-t-2 py-4 border-cyan-200 flex justify-between">
      <div className="flex justify-start gap-x-5">
        <div>
          <img
            src={cart.image}
            alt={cart.name}
            className="w-48 h-40 object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-7">
          <span className="font-bold text-2xl">$ {cart.price}</span>
          <p className="text-lg font-semibold">{cart.name}</p>
          <div className="flex items-center gap-x-3 border border-cyan-700 rounded w-min px-2 py-0.5">
            <FaPlus
              onClick={() => updownQNT(cart.id, 1)}
              className="cursor-pointer"
            />
            <span className="text-xl">{cart.qnt}</span>
            {cart.qnt > 1 ? (
              <FaMinus
                onClick={() => updownQNT(cart.id, -1)}
                className="cursor-pointer"
              />
            ) : (
              <FaTrashCan
                onClick={() => deleteFromCart(cart.id)}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <FaTrashCan
          onClick={() => deleteFromCart(cart.id)}
          className="w-5 h-5 cursor-pointer text-red-500"
        />
      </div>
    </div>
  );
};

export default Cart;
