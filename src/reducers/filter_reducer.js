import { LOAD_PRODUCTS } from '../actions';

const filter_reducer = (state, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCTS: {
      let maxPrice = payload.products.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        filtered_products: [...payload.products],
        all_products: [...payload.products],
        max_price: maxPrice,
        price: maxPrice,
      };
    }

    default: {
      throw new Error(`No matching ${type} - action type`);
    }
  }
};

export default filter_reducer;
