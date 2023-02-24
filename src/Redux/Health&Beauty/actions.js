import * as types from "./actionType"
import axios from "axios"
export const getFaceData=(sort)=>async(dispatch)=>{

    dispatch({type:types.GET_FACE_REQUEST})


    try {
       let r= await axios.get(`https://alok-verma-rct.onrender.com/beautyface?_sort=price&_order=${sort}`)
       
       dispatch({type:types.GET_FACE_SUCCESS,payload:r.data})
    } catch (e) {
        dispatch({type:types.GET_FACE_ERROR,payload:e})
    }

}


export const getFoodData=(sort)=>async(dispatch)=>{

    dispatch({type:types.GET_FOOD_REQUEST})


    try {
       let r= await axios.get(`https://alok-verma-rct.onrender.com/fooditem?_sort=price&_order=${sort}`)
       
       dispatch({type:types.GET_FOOD_SUCCESS,payload:r.data})
    } catch (e) {
        dispatch({type:types.GET_FOOD_ERROR,payload:e})
    }

}


export const getDrinkData=(sort)=>async(dispatch)=>{

    dispatch({type:types.GET_DRINK_REQUEST})


    try {
       let r= await axios.get(`https://alok-verma-rct.onrender.com/healthdrinks?_sort=price&_order=${sort}`,
       
       )
       
       dispatch({type:types.GET_DRINK_SUCCESS,payload:r.data})
    } catch (e) {
        dispatch({type:types.GET_DRINK_ERROR,payload:e})
    }

}