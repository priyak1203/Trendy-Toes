import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../actions';

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN: {
      return { ...state, isSidebarOpen: true };
    }
    case SIDEBAR_CLOSE: {
      return { ...state, isSidebarOpen: false };
    }

    default: {
      throw new Error(`No matching ${action.type} - action type`);
    }
  }
};

export default products_reducer;
