import * as types from "./actionType";

const initialState = {
    products:[],
    loading:false,
    error:false
}

export const reducer = (state=initialState, {type, payload}) => {
    switch(type){
        case types.GET_SEARCH_REQUEST:
            return {...state,loading:true}
        case types.GET_SEARCH_SUCCESS:
            return {...state,loading:false,products:payload}
        case types.GET_SEARCH_ERROR:
            return {...state,loading:false,error:true}    

        default:
            return state;
    }
}