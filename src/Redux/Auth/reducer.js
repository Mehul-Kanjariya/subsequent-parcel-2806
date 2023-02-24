import * as types from "./actionType";

const initialState = {
  loading: false,
  error: false,
  isAuth:false,
  data:[]
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.AUTH_LOGOUT_REQUEST:
      return { ...state, loading: true };
    case types.AUTH_LOGIN_SUCCESS:
      return { ...state, loading: false, data:payload};
    case types.AUTH_SUCCESS_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
