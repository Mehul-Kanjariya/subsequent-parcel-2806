import axios from "axios";
import * as types from "./actionType";

const reqProduct = () => {
    return {
        type:types.GET_PRODUCT_REQUEST
    }
}

const sucProduct = (payload) => {
    return {
        type:types.GET_PRODUCT_SUCCESS,
        payload
    }
}

const errProduct = () => {
    return {
        type:types.GET_PRODUCT_ERROR
    }
}

export const fetchProducts = () => async (dispatch) => {
    dispatch(reqProduct())
    axios
        .get(`https://alok-verma-rct.onrender.com/MensFootwear`)
        .then((res)=>dispatch(sucProduct(res.data)))
        .catch((err)=>dispatch(errProduct()));
}