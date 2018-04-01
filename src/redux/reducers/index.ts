import { combineReducers } from "redux";
import { applicationReducer } from "./applicationReducer";
import { testReducer } from "./testReducer";
import  'rxjs';

const rootReducer = combineReducers({
    application: applicationReducer,
    test: testReducer,
});



export default rootReducer;