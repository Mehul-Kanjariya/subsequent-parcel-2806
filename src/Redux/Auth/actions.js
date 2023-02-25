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
    type: types.AUTH_LOGIN_ERROR,
  };
};


export const logoutReq = () => {
  return {
    type: types.AUTH_LOGOUT_REQUEST
  };
}

export const fetchData = (id,data) => async (dispatch) => {

  await axios
      .patch(`https://alok-verma-rct.onrender.com/userlogin/${id}`,data)
      .then((res)=>{
        return dispatch(sucLogin(res.data))
      })
      .catch((err)=>dispatch(errLogin()));
}