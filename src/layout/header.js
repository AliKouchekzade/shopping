import { NavLink } from "react-router-dom";

const Header = () => {
  const activeHandler = (data) =>
    data.isActive
      ? "bg-white text-cyan-800 text-xl px-2 py-1 rounded"
      : "text-cyan-800 text-xl px-2 py-1 rounded hover:bg-white transition-colors duration-500";

  return (
    <header className="bg-cyan-300 px-10 py-3.5 sticky top-0">
      <nav>
        <ul className="flex gap-x-10">
          <li>
            <NavLink className={activeHandler} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/todo" className={activeHandler}>
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink to="/todo2" className={activeHandler}>
              Todo
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
