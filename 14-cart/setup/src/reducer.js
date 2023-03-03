export const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT_DATA":
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    // using filter doesn't work
    case "INCREASE_QTY":
      console.log("Increase Qty");
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload ? (item.amount += 1) : item
        ),
      };
    // using map work
    /* case "INCREASE_QTY":
      console.log("Increase Qty");
      const tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return {
        ...state,
        cart: tempCart,
      }; */
    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload ? (item.amount -= 1) : item
        ),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "GET_TOTAL":
      let { totalPrice, totalQty } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQty += amount;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQty: 0,
        }
      );
      totalPrice = parseFloat(totalPrice.toFixed(2));
      return {
        ...state,
        totalPrice,
        totalQty,
      };
    default:
      return state;
  }
};
