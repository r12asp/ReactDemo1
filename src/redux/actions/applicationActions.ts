import * as types from "./actionTypes";
import { IApplication } from "./../../models";

export function loadApplicationsSuccess(payload) {
	return { type: types.LOAD_APPLICATIONS_SUCCESS, payload };
}

export function loadApplications() {
	return { type: types.LOAD_APPLICATIONS_START };
} 

export const loadTestStart = () => ({type: types.LOAD_TEST_START});

export const loadTestSuccess = (payload) => ({type: types.LOAD_TEST_SUCCESS, payload: payload});