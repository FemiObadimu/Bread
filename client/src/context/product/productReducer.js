import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FILTER_PRODUCT,
  CLEAR_FILTER,
  GET_PRODUCT,
  UNGET_PRODUCT,
  CLEAR_CART,
} from "../types";

const productReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
        error: null,
      };

    case UNGET_PRODUCT:
      return {
        ...state,
        products: [],
        error: action.payload,
      };
    case ADD_PRODUCT:
      if (state.cart.find((product) => product._id === action.payload._id)) {
        return {
          ...state,
          cart: [...state.cart],
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case DELETE_PRODUCT:
      if (state.cart.length)
        return {
          ...state,
          cart: state.cart.filter((product) => product._id !== action.payload),
        };
      return { ...state };
    case FILTER_PRODUCT:
      return {
        ...state,
        filtered: state.cart.filter((product) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return product.name.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: [],
      };

    case CLEAR_CART:
      return {
        ...state,
        filtered: [],
        cart: [],
      };

    default:
      return state;
  }
};

export default productReducer;
