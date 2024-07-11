import { createContext, useContext, useReducer, useState } from "react";
import { cartReducer } from "./Reducer";

export const Context = createContext();

export function ContextProvider({ children }) {
  
  const [state, dispatch] = useReducer(cartReducer, {
    cart:[],
  })

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  );
}

export const cartState = () => useContext(Context);
