import * as types from "./actionType";

const initialState = {
    products:[],
    loading:false,
    error:false
}

export const reducer = (state=initialState, {type, payload}) => {
    switch(type){
        case types.GET_PRODUCT_SUCCESS:
            return {loading:false}
        default:
            return state;
    }
}