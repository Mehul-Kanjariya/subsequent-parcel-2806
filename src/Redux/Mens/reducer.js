import * as types from "./actionType";

const initialState = {
    products:[],
    loading:false,
    error:false
}

export const reducer = (state=initialState, {type, payload}) => {
    switch(type){
        case types.GET_FOOTWARE_REQUEST:
            return {...state,loading:true}
        case types.GET_FOOTWARE_SUCCESS:
            return {...state,loading:false,products:payload}
        case types.GET_FOOTWARE_ERROR:
            return {...state,loading:false,error:true}    

        case types.GET_CLOTHING_REQUEST:
            return {...state,loading:true}
        case types.GET_CLOTHING_SUCCESS:
            return {...state,loading:false,products:payload}
        case types.GET_CLOTHING_ERROR:
            return {...state,loading:false,error:true}

        case types.GET_EYEWEAR_REQUEST:
            return {...state,loading:true}
        case types.GET_EYEWEAR_SUCCESS:
            return {...state,loading:false,products:payload}
        case types.GET_EYEWEAR_ERROR:
            return {...state,loading:false,error:true}

            
        default:
            return state;
    }
}