import { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import setAuthHeader from "../../utils/setAuthHeader";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
    products: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    // Setting a global header to keep user loaded
    if (localStorage.token) {
      setAuthHeader(localStorage.token);
    }

    try {
      const res = await axios.get("/mart/login");

      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register User
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/mart/sign-up", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg || err.response.data.errors[0].msg,
      });
    }
  };

  // Login User

  const loginUser = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/mart/login", formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg || err.response.data.errors[0].msg,
      });
    }
  };

  // Logout User

  const logOut = () => {
    dispatch({ type: LOGOUT });
  };

  // Clear Error

  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  //  Save Product
  const saveProduct = async (productData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "/admin/manage-products",
        productData,
        config
      );

      dispatch({
        type: PRODUCT_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_FAIL,
        payload: err.response.data.msg || err.response.data.errors[0].msg,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        products: state.products,
        register,
        loadUser,
        loginUser,
        logOut,
        clearErrors,
        saveProduct,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
