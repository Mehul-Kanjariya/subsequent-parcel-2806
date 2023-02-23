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