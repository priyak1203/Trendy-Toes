import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
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

    case UPDATE_FILTERS: {
      const { name, value } = payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    }

    case FILTER_PRODUCTS: {
      const { all_products } = state;
      const { text, category, brand, color, price, shipping } = state.filters;

      let temp_products = [...all_products];

      // Filtering
      // text
      if (text) {
        temp_products = temp_products.filter((product) =>
          product.name.toLowerCase().startsWith(text)
        );
      }

      // category
      if (category !== 'all') {
        temp_products = temp_products.filter(
          (product) => product.category === category
        );
      }

      // brand
      if (brand !== 'all') {
        temp_products = temp_products.filter(
          (product) => product.brand === brand
        );
      }

      // color
      if (color !== 'all') {
        temp_products = temp_products.filter((product) =>
          product.colors.find((c) => c === color)
        );
      }

      // price
      temp_products = temp_products.filter((product) => product.price <= price);

      // shipping
      if (shipping) {
        temp_products = temp_products.filter(
          (product) => product.shipping === true
        );
      }

      return { ...state, filtered_products: temp_products };
    }

    case CLEAR_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          category: 'all',
          brand: 'all',
          color: 'all',
          price: state.filters.max_price,
          shipping: false,
        },
      };
    }

    default: {
      throw new Error(`No matching ${type} - action type`);
    }
  }
};

export default filter_reducer;
