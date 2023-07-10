import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
} from '../actions';

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

    case UPDATE_SORT: {
      return { ...state, sort: payload.value };
    }
    case SORT_PRODUCTS: {
      const { sort, filtered_products } = state;

      let temp_products = [...filtered_products];

      if (sort === 'price-lowest') {
        temp_products = temp_products.sort((a, b) => a.price - b.price);
      }
      if (sort === 'price-highest') {
        temp_products = temp_products.sort((a, b) => b.price - a.price);
      }
      if (sort === 'name-a') {
        temp_products = temp_products.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sort === 'name-z') {
        temp_products = temp_products.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      return { ...state, filtered_products: temp_products };
    }

    default: {
      throw new Error(`No matching ${type} - action type`);
    }
  }
};

export default filter_reducer;
