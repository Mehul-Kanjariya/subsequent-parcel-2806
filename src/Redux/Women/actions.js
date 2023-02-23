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
