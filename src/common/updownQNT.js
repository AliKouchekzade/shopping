import { FaTrashCan, FaPlus, FaMinus } from "react-icons/fa6";
import { useCart, useCartActions } from "../providers/cartProvider";

const UpDownQNT = ({ id, setIsInCart }) => {
  const { updownQNT, deleteFromCart } = useCartActions();
  const cart = useCart().find((item) => item.id === id);
  return (
    <div className="flex items-center gap-x-3 border border-cyan-700 rounded w-min px-2 py-0.5">
      <FaPlus onClick={() => updownQNT(id, 1)} className="cursor-pointer" />
      <span className="text-xl">{cart.qnt}</span>
      {cart.qnt > 1 ? (
        <FaMinus onClick={() => updownQNT(id, -1)} className="cursor-pointer" />
      ) : (
        <FaTrashCan
          onClick={() => {
            deleteFromCart(id);
            try {
              setIsInCart(false);
            } catch (error) {}
          }}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default UpDownQNT;
