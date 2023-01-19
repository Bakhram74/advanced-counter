import {combineReducers} from "redux";
import {countReducer} from "./countReducer";
import {saveState} from "../local-storage/localStorage";
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import {TypedUseSelectorHook, useSelector} from "react-redux";


const reducer = combineReducers({
   counter: countReducer.reducer
})

export const store = configureStore({
   reducer:reducer,
   middleware: [thunk] as const,
})
export type RootStateType = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

store.subscribe(() => {
   saveState('max', store.getState().counter.maxValue)
});

