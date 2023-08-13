import { createContext, useContext, useState } from "react";

const cartContext = createContext();
const setCartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={cart}>
      <setCartContext.Provider value={setCart}>
        {children}
      </setCartContext.Provider>
    </cartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(cartContext);
export const useCartActions = () => {
  const setCart = useContext(setCartContext);
  const cart = useCart();
  const addProductToCart = (product) => {
    setCart([...cart, { product: product, qnt: 1 }]);
  };
  return { addProductToCart };
};
