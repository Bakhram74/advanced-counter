import {Dispatch} from "redux";
import {restoreState, saveState} from "../local-storage/localStorage";
import exp from "constants";
export type AbleButtonType = 1 | 2
type InitStateType = {
    maxValue: number
    minValue: number
    value: number
    isDisable:AbleButtonType
}

const initState: InitStateType = {
    maxValue: 5,
    minValue: 1,
    value: 0,
    isDisable:1
}

export const countReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "CHANGE-VALUE":
            return {...state,value:action.value}
        case "SET-MAX-VALUE":
            return {...state,maxValue:action.maxValue}
        case "SET-MIN-VALUE":
            return {...state,minValue:action.minValue}
        case "SET-IS-DISABLE":
            return {...state,isDisable:action.isDisable}
        default:
            return state
    }
}


export const getMaxValue = ()=> (dispatch:Dispatch) =>{
    dispatch(setMaxValueAC(restoreState('max')))
}

export const setMaxValueAC = (maxValue: number): SetMaxValueAT => ({
    type: 'SET-MAX-VALUE',
    maxValue
})
export const setMinValueAC = (minValue: number): SetMinValueAT => ({
    type: 'SET-MIN-VALUE',
    minValue
})

export const changeValueAC = (value: number): ChangeValueAT => ({
    type: 'CHANGE-VALUE',
    value
})

export const setIsDisableAC =(isDisable:AbleButtonType):SetIsDisableAT => ({
     type:'SET-IS-DISABLE',
    isDisable
})

type ActionType = SetMaxValueAT | SetMinValueAT | ChangeValueAT|SetIsDisableAT

type SetMaxValueAT = {
    type: 'SET-MAX-VALUE',
    maxValue: number
}
type SetMinValueAT = {
    type: 'SET-MIN-VALUE',
    minValue: number
}
type ChangeValueAT = {
    type: 'CHANGE-VALUE',
    value: number
}
type SetIsDisableAT = {
    type:'SET-IS-DISABLE',
    isDisable:AbleButtonType
}