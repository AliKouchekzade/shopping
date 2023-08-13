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
    setCart([...cart, { ...product, qnt: 1 }]);
  };

  const deleteFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updownQNT = (id, x) => {
    const index = cart.findIndex((item) => item.id === id);
    const copyCart = [...cart];
    copyCart[index].qnt += x;
    setCart(copyCart);
  };

  return { addProductToCart, deleteFromCart, updownQNT };
};
