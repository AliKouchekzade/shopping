import CartProvider from "../providers/cartProvider";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <CartProvider>
      <Header />
      {children}
    </CartProvider>
  );
};

export default Layout;
