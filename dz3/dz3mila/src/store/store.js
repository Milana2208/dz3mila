import { combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./reducers/authReducer";

const reducers = combineReducers({
    auth: authReducer,
})
export const store = createStore(reducers)