import { NavLink } from "react-router-dom";
import { useCart } from "../providers/cartProvider";

const Header = () => {
  const activeHandler = (data) =>
    data.isActive
      ? "bg-white text-cyan-800 text-xl px-2 py-1 rounded"
      : "text-cyan-800 text-xl px-2 py-1 rounded hover:bg-white transition-colors duration-500";

  const cart = useCart();

  return (
    <header className="bg-cyan-300 px-10 py-2.5 sticky top-0 z-10">
      <nav className="flex justify-between items-center">
        <ul className="flex gap-x-10">
          <li>
            <NavLink className={activeHandler} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={activeHandler}>
              Cart
            </NavLink>
            {cart.length ? (
              <span className="relative bottom-4 right-2 bg-cyan-700 text-white  h-5 w-5 px-1.5 rounded-full">
                {cart.length}
              </span>
            ) : null}
          </li>
        </ul>
        <ul>
          <li className="flex gap-x-5">
            <NavLink to="/signup" className={activeHandler}>
              SignUp
            </NavLink>
            <NavLink to="/login" className={activeHandler}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
