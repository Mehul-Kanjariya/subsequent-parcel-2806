import axios from "axios";
import * as types from "./actionType";

const reqFootwareProduct = () => {
    return {
        type:types.GET_FOOTWARE_REQUEST,
       
    }
}

const sucFootwareProduct = (payload) => {
    return {
        type:types.GET_FOOTWARE_SUCCESS,
        payload
    }
}

const errProduct = () => {
    return {
        type:types.GET_FOOTWARE_ERROR
    }
}

export const fetchFootwareProducts = () => async (dispatch) => {
    dispatch(reqFootwareProduct())
    axios
        .get(`https://alok-verma-rct.onrender.com/MensFootwear`)
        .then((res)=>dispatch(sucFootwareProduct(res.data)))
        .catch((err)=>dispatch(errProduct()));
}

const reqClothingProduct = () => {
    return {
        type:types.GET_CLOTHING_REQUEST,
       
    }
}

const sucClothingProduct = (payload) => {
    return {
        type:types.GET_CLOTHING_SUCCESS,
        payload
    }
}

const errClothingProduct = () => {
    return {
        type:types.GET_CLOTHING_ERROR
    }
}

export const fetchClothingeProducts = () => async (dispatch) => {
    dispatch(reqClothingProduct())
    axios
        .get(`https://alok-verma-rct.onrender.com/MensClothing`)
        .then((res)=>dispatch(sucClothingProduct(res.data)))
        .catch((err)=>dispatch(errClothingProduct()));
}

const reqEyeWearProduct = () => {
    return {
        type:types.GET_CLOTHING_REQUEST,
       
    }
}

const sucEyeWearProduct = (payload) => {
    return {
        type:types.GET_CLOTHING_SUCCESS,
        payload
    }
}

const errEyeWearProduct = () => {
    return {
        type:types.GET_CLOTHING_ERROR
    }
}

export const fetchEyeWearProducts = () => async (dispatch) => {
    dispatch(reqEyeWearProduct())
    axios
        .get(`https://alok-verma-rct.onrender.com/MenseyeWear`)
        .then((res)=>dispatch(sucEyeWearProduct(res.data)))
        .catch((err)=>dispatch(errEyeWearProduct()));
}