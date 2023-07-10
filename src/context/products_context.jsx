import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from '../actions';
import { products_url as url } from '../utils/constants';
import axios from 'axios';

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
};

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  // fetch all products
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const { data: products } = await axios.get(url);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: { products } });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider, useProductsContext };
