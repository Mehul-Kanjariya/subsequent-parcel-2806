import * as types from "./actionType";

const initialState = {
    products:[],
    loading:false,
    error:false
}

export const reducer = (state=initialState, {type, payload}) => {
    switch(type){
        case types.GET_FACE_REQUEST:
            return {...state,loading:true}
        case types.GET_FACE_SUCCESS:
            return {...state,loading:false,products:payload}
        case types.GET_FACE_ERROR:
           return{...state,loading:false,error:true}

         case types.GET_FOOD_REQUEST:
            return {...state,loading:true}
        case types.GET_FOOD_SUCCESS:
            return {...state,loading:false,products:payload}
        case types.GET_FOOD_ERROR:
           return{...state,loading:false,error:true}

        case types.GET_DRINK_REQUEST:
            return {...state,loading:true}
        case types.GET_DRINK_SUCCESS:
            return {...state,loading:false,products:payload}
        case types.GET_DRINK_ERROR:
           return{...state,loading:false,error:true}
        default:
            return state;
    }
}