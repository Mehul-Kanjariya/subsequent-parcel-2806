import * as types from "./actionType";

const initialState = {
  products: [],
  loading: false,
  error: false,
  singleproduct:{}
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case types.GET_PRODUCT_SUCCESS:
      return { ...state, loading: false, products: payload };
    case types.GET_PRODUCT_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
