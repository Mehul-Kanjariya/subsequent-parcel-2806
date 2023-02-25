import * as types from "./actionType";

const initialState = {
  loading: false,
  error: false,
  isAuth:null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.AUTH_LOGIN_REQUEST:
      return { ...state, loading: true };
    case types.AUTH_LOGIN_SUCCESS:
      return { ...state, loading: false, isAuth:payload.Auth};
    case types.AUTH_LOGIN_ERROR:
      return { ...state, loading: false, error: true };
    case types.AUTH_LOGOUT_REQUEST:
      return { ...state, loading: false, isAuth:payload.Auth };
    default:
      return state;
  }
};
