import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

//NOTE: WITH CONTEXT WE CAN PASS ALL THE STATE USING CHILDREN.

const Context = createContext();

export default function StateContext({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, serCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useStateContext = () => useContext(Context);
