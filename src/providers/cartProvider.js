import { createContext, useContext, useState } from "react";

const cartContext = createContext();
const setCartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Winter body",
      description: [
        { support: "گارانتی مادام العمر" },
        { support: "ارسال رایگان" },
        { support: "اورجینال" },
      ],
      price: 120,
      offPrice: 120,
      discount: 0,
      image:
        "https://s6.uupload.ir/files/daniel-storek-jm-qked1gmi-unsplash_ja2.jpg",
      qnt: 1,
    },
    {
      id: 2,
      name: "Adidas",
      description: [
        { support: "گارانتی مادام العمر" },
        { support: "اورجینال" },
      ],
      price: 110,
      offPrice: 100,
      discount: 8,
      image:
        "https://s6.uupload.ir/files/andres-jasso-pqbl_mxmaue-unsplash_gkir.jpg",
      qnt: 1,
    },
  ]);

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
