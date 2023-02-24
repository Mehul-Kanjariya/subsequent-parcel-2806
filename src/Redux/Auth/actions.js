import axios from "axios";
import * as types from "./actionType";

export const reqlogin = () => {
  return {
    type: types.AUTH_LOGIN_REQUEST,
  };
};

export const sucLogin = (payload) => {
  return {
    type: types.AUTH_LOGIN_SUCCESS,
    payload,
  };
};

export const errLogin = () => {
  return {
    type: types.AUTH_SUCCESS_ERROR,
  };
};


export const logoutReq = () => {
  return {
    type: types.AUTH_LOGOUT_REQUEST
  };
}

export const fetchData = (data) => async (dispatch) => {
  dispatch(reqlogin())
  await axios
      .get(`https://alok-verma-rct.onrender.com/userlogin`)
      .then((res)=>dispatch(sucLogin(res.data)))
      .catch((err)=>dispatch(errLogin()));
}