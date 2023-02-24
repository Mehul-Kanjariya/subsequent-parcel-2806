import axios from "axios";
import * as types from "./actionType";

export const reqProduct = () => {
  return {
    type: types.GET_PRODUCT_REQUEST,
  };
};

export const sucProduct = (payload) => {
  return {
    type: types.GET_PRODUCT_SUCCESS,
    payload,
  };
};

export const errProduct = () => {
  return {
    type: types.GET_PRODUCT_ERROR,
  };
};

export const fetchProducts = (payload) => async (dispatch) => {
  dispatch(reqProduct())
  await axios
      .get(`https://alok-verma-rct.onrender.com/${payload}`)
      .then((res)=>dispatch(sucProduct(res.data)))
      .catch((err)=>dispatch(errProduct()));
};