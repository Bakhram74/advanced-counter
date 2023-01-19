import React, {useEffect} from 'react';
import '../App.css';
import CounterBox from "./CounterBox";
import ValueBox from "./ValueBox";
import {
    changeValueAC,
    getMaxValue,
    isDisabled,
    maxValue,
    minValue,
    setIsDisableAC,
} from "../store/countReducer";
import {useDispatch} from "react-redux";
import {RootStateType, useAppSelector} from "../store/store";
import {AnyAction, ThunkDispatch} from "@reduxjs/toolkit";

const MainBox = () => {
    const maxCount = useAppSelector(maxValue)
    const minCount = useAppSelector(minValue)
    const isDisable = useAppSelector(isDisabled)

    const dispatch = useDispatch() as ThunkDispatch<RootStateType, {}, AnyAction>


    useEffect(() => {
        dispatch(getMaxValue())
    }, [])

    const setValue = () => {
        dispatch(setIsDisableAC(2))
        resetValue()
    }

    const resetValue = () => {
        dispatch(changeValueAC(minCount))
    }

    return (
        <div className={'app'}>

            <ValueBox setValue={setValue} maxCount={maxCount} minCount={minCount} isDisable={isDisable}/>
            <CounterBox resetValue={resetValue}
                        minCount={minCount} isDisable={isDisable}/>
        </div>
    );
};

export default MainBox;