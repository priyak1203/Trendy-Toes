import { createContext, useContext, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../actions';
import { products } from '../utils/products';

const featured = products.filter((item) => item.featured === true);

const initialState = {
  isSidebarOpen: false,
  products: products,
  featured_products: featured,
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
