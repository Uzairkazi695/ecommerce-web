export const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_to_cart":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "Remove_from_cart":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "Change_cart_qty":
      return {
        ...state,
        cart: state.cart
          .map((c) =>
            c.id === action.payload.id ? { ...c, qty: action.payload.qty } : c
          )
          .filter((c) => c.qty > 0),
      };
      case "Clear_cart":
        return { ...state, cart: [] }

    default:
      return state;
  }
};
