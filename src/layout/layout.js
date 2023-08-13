import { ToastContainer } from "react-toastify";
import CartProvider from "../providers/cartProvider";
import Header from "./header";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <CartProvider>
      <ToastContainer />
      <Header />
      {children}
    </CartProvider>
  );
};

export default Layout;
