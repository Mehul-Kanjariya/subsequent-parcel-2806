import axios from "axios";
import * as types from "./actionType";

const reqProduct = () => {
    return {
        type:types.GET_SEARCH_REQUEST,
    }
}

const sucProduct = (payload) => {
    return {
        type:types.GET_SEARCH_SUCCESS,
        payload
    }
}

const errProduct = () => {
    return {
        type:types.GET_SEARCH_ERROR
    }
}


export const searchProducts = (query) => async (dispatch) => {
    dispatch(reqProduct())
    axios
        .get(`https://alok-verma-rct.onrender.com/navSearch?q=${query}`)
        .then((res)=>dispatch(sucProduct(res.data)))
        .catch((err)=>dispatch(errProduct()));
}