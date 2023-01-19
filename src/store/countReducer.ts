import {Dispatch} from "redux";
import {restoreState} from "../local-storage/localStorage";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootStateType} from "./store";

export type AbleButtonType = 1 | 2

type InitStateType = {
    maxValue: number
    minValue: number
    value: number
    isDisable: AbleButtonType
}

const initialState: InitStateType = {
    maxValue: 5,
    minValue: 1,
    value: 0,
    isDisable: 1
}
 export const countReducer = createSlice({
    name: 'counters', ///todo
    initialState,
    reducers: {
        changeValueAC(state, action: PayloadAction<number>) {
            state.value = action.payload
        },
        setMaxValueAC(state, action: PayloadAction<number>) {
            state.maxValue = action.payload
        },
        setMinValueAC(state, action: PayloadAction<number>) {
            state.minValue = action.payload
        },
        setIsDisableAC(state,action: PayloadAction<AbleButtonType>){
            state.isDisable = action.payload
        }
    }
})

export const { changeValueAC, setMaxValueAC, setMinValueAC, setIsDisableAC } = countReducer.actions



export const getMaxValue = () => (dispatch: Dispatch) => {
    dispatch(setMaxValueAC(restoreState('max')))
}

export const maxValue = (state: RootStateType) => state.counter.maxValue
export const minValue = (state: RootStateType) => state.counter.minValue
export const value = (state: RootStateType) => state.counter.value
export const isDisabled = (state: RootStateType) => state.counter.isDisable
