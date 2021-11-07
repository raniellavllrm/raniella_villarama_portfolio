import * as actionTypes from "../types";

const initialState = {
    divisibilityStatus: "",
    error: null
}

export default function userReducer(state=initialState, action){
    switch(action.type){

        case actionTypes.USER_ERROR: {
            return {
                ...state,
                error: action.payload
            };
        }
        default: {
            return{
                ...state
            };
        }
    }
}


