import { ajax } from 'rxjs/observable/dom/ajax';
import * as types from "../actions/actionTypes";
import {loadTestSuccess} from "./../actions/applicationActions";
import {loadApplicationsSuccess} from "./../actions/applicationActions";
import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators'; // rxjs v5.5+
import 'rxjs';

export const testEpic = action$ =>
    action$.ofType(types.LOAD_TEST_START)
    .mergeMap(action =>
        ajax.getJSON(`http://localhost:8001/api/values`)
            .map(respnose => loadTestSuccess(respnose))
    );

export const applicationEpic = action$ =>
    action$.ofType(types.LOAD_APPLICATIONS_START)
    .map(respnose => loadApplicationsSuccess({id:33,name:"777"}))

