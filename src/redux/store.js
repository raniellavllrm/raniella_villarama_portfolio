import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import uiReducer from "./reducers/uiReducer";
import userReducer from "./reducers/userReducer";

const initialState = {};


const middleware = [thunk];

const reducers = combineReducers({
    ui: uiReducer,
    user: userReducer
});
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;