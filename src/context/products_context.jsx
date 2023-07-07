import { createContext, useContext, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../actions';

const ProductsContext = createContext();

const initialState = {
  isSidebarOpen: false,
};

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
