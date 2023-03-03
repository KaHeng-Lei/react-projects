import React, { useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const init = {
    loading: false,
    cart: [],
    totalPrice: 0,
    totalQty: 0,
  };

  const [state, dispatch] = useReducer(reducer, init);

  const inputCartData = (data) => {
    dispatch({
      type: "INPUT_DATA",
      payload: data,
    });
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
      payload: false,
    });
  };

  const removeCartItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const increaseAmount = (id) => {
    dispatch({
      type: "INCREASE_QTY",
      payload: id,
    });
  };

  const decreaseAmount = (id) => {
    dispatch({
      type: "DECREASE_QTY",
      payload: id,
    });
  };

  const getTotal = () => {
    dispatch({
      type: "GET_TOTAL",
    });
  };
  const fetchData = async () => {
    try {
      setLoading();
      await fetch(url)
        .then((response) => response.json())
        .then((data) => inputCartData(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getTotal();
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        removeCartItem,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
