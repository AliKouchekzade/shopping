import { FaTrashCan,} from "react-icons/fa6";
import { useCartActions } from "../providers/cartProvider";
import UpDownQNT from "../common/updownQNT";
import Price from '../common/price'

const Cart = ({ cart }) => {
  const { deleteFromCart } = useCartActions();
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
          {/* <span className="font-bold text-2xl">$ {cart.price * cart.qnt}</span> */}
          <Price item={cart} qnt={cart.qnt} />
          <p className="text-lg font-semibold">{cart.name}</p>
          <UpDownQNT
            id={cart.id}
          />
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
