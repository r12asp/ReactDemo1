import * as types from "../actions/actionTypes";
import {initialState} from "./initialState";


export const testReducer = (state = initialState.test, action) => {
    switch(action.type) {
        case types.LOAD_TEST_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}