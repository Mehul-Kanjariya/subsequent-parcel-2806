import * as types from "./actionType";

const initialState = {
  loading: false,
  error: false,
  isAuth:false
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.AUTH_LOGOUT_REQUEST:
      return { ...state, loading: true };
    case types.AUTH_LOGIN_SUCCESS:
      return { ...state, loading: false, products: payload };
    case types.GET_PRODUCT_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
