import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import { products } from '../utils/products';

let maxPrice = products.map((item) => item.price);
maxPrice = Math.max(...maxPrice);

const initialState = {
  filtered_products: products,
  all_products: products,
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    brand: 'all',
    color: 'all',
    min_price: 0,
    max_price: maxPrice,
    price: maxPrice,
    shipping: false,
  },
};

const FilterContext = createContext();

const FliterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FliterProvider, useFilterContext };
