import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW } from '../actions';

const filter_reducer = (state, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCTS: {
      let maxPrice = payload.products.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        all_products: [...payload.products],
        filtered_products: [...payload.products],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    }

    case SET_GRIDVIEW: {
      return { ...state, grid_view: true };
    }
    case SET_LISTVIEW: {
      return { ...state, grid_view: false };
    }

    default: {
      throw new Error(`No matching ${type} - action type`);
    }
  }
};

export default filter_reducer;
