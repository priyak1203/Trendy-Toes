import { createContext, useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';
import { ADD_TO_CART } from '../actions';

const initialState = {
  cart: [],
  total_items: 3,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart
  const addToCart = (id, amount, color, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, color, product } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
