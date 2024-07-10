import { createContext, useContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [cartQty, setCartQty] = useState(0);
  const [totalQty, setTotalQty] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product, quantity) => {
    const checkCart = cartItems.find((item) => item.id === product.id);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQty((prevTotalQty) => prevTotalQty + quantity);
    if (checkCart) {
      const updateCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updateCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };

  const incrQty = () => {
    setCartQty((prevQty) => prevQty + 1);
  };
  const decrQty = () => {
    setCartQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider value={{ cartQty, incrQty, decrQty, onAdd }}>
      {children}
    </Context.Provider>
  );
}

export const useStateContext = () => useContext(Context);
