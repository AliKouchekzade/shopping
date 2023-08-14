import { ToastContainer } from "react-toastify";
import CartProvider from "../providers/cartProvider";
import Header from "./header";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "../providers/AuthProvider";

const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastContainer />
        <Header />
        {children}
      </CartProvider>
    </AuthProvider>
  );
};

export default Layout;
