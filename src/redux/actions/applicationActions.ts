import * as types from "./actionTypes";

import { IApplication } from "./../../models";

export function loadApplicationsSuccess(payload) {
	return { type: types.LOAD_APPLICATIONS_SUCCESS, payload };
}

export function loadApplications() {
	return function(dispatch) {
        dispatch(loadApplicationsSuccess({id:33,name:"999999999999"}));
	};
} 