import * as types from "./actionType"
import axios from "axios"
export const getFaceData=()=>async(dispatch)=>{

    dispatch({type:types.GET_FACE_REQUEST})


    try {
       let r= await axios.get(`https://alok-verma-rct.onrender.com/beautyface`)
       
       dispatch({type:types.GET_FACE_SUCCESS,payload:r.data})
    } catch (e) {
        dispatch({type:types.GET_FACE_ERROR,payload:e})
    }

}


export const getFoodData=()=>async(dispatch)=>{

    dispatch({type:types.GET_FOOD_REQUEST})


    try {
       let r= await axios.get(`https://alok-verma-rct.onrender.com/fooditem`)
       
       dispatch({type:types.GET_FOOD_SUCCESS,payload:r.data})
    } catch (e) {
        dispatch({type:types.GET_FOOD_ERROR,payload:e})
    }

}


export const getDrinkData=()=>async(dispatch)=>{

    dispatch({type:types.GET_DRINK_REQUEST})


    try {
       let r= await axios.get(`https://alok-verma-rct.onrender.com/healthdrinks`)
       
       dispatch({type:types.GET_DRINK_SUCCESS,payload:r.data})
    } catch (e) {
        dispatch({type:types.GET_DRINK_ERROR,payload:e})
    }

}