import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';

import { useProductsContext } from './products_context';
import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW } from '../actions';

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    brand: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = createContext();

const FliterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: { products } });
  }, [products]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FliterProvider, useFilterContext };
