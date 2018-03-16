import * as types from "../actions/actionTypes";
import {initialState} from "./initialState";

export const applicationReducer = (state = initialState.application, action) => {
	switch(action.type) {		
		case types.LOAD_APPLICATIONS_SUCCESS:				
			return action.payload;
		default:			
			return state;
	}	
}