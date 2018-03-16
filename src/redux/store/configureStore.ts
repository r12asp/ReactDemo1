import { createStore, applyMiddleware, Middleware, compose } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {createLogger} from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "../../redux/reducers";

const __DEV__= true;

function configureStore() {
  const store = createStore(
    rootReducer,    
    compose(
      applyMiddleware(..._getMiddleware()),
      ));
  
  return store;
}

function _getMiddleware(): Middleware[] { 		
	let middleware = [
		promise(),
		thunk
	];

	if (__DEV__) {
		middleware = [...middleware, createLogger(), reduxImmutableStateInvariant()]
	}
	 
	return middleware;
}

export default configureStore;