import React, { useReducer } from "react";
// import { v4 as uuid } from "uuid";
import productContext from "./productContext";
import productReducer from "./productReducer";
import axios from "axios";

import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FILTER_PRODUCT,
  CLEAR_FILTER,
  GET_PRODUCT,
  UNGET_PRODUCT,
  CLEAR_CART,
} from "../types";

const ProductState = (props) => {
  const initialState = {
    products: [],
    cart: [],
    filtered: [],
    error: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  // GET ALL PRODUCT_SUCCESS

  const getAll = () => {
    // GET_ALL_PRODUCTS
    async function fetchProducts() {
      try {
        const res = await axios.get("/mart/dashboard/shop");

        dispatch({ type: GET_PRODUCT, payload: res.data });
        console.log(res.data);
      } catch (err) {
        dispatch({ type: UNGET_PRODUCT, payload: err.response.data.msg });
      }
    }

    fetchProducts();
  };

  // ADD_PRODUCT

  const addProduct = (product) => {
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  // DELETE_PRODUCT

  const deleteProduct = (id) => {
    dispatch({ type: DELETE_PRODUCT, payload: id });
  };
  // FILTER_PRODUCT

  const filterProduct = (text) => {
    dispatch({ type: FILTER_PRODUCT, payload: text });
  };

  // CLEAR_FILTER
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // CLEAR_CART
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        filtered: state.filtered,
        error: state.error,
        addProduct,
        deleteProduct,
        filterProduct,
        clearFilter,
        clearCart,
        getAll,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
