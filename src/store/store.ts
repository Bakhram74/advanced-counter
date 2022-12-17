import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./countReducer";


const reducer = combineReducers({
   counter: countReducer
})
export type RootStateType = ReturnType<typeof reducer>

export const store = legacy_createStore(reducer)