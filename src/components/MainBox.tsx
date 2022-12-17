import React, {useEffect} from 'react';
import '../App.css';
import CounterBox from "./CounterBox";
import ValueBox from "./ValueBox";
import {restoreState, saveState, saveMaxValue} from "../local-storage/localStorage";
import {AbleButtonType, changeValueAC, getMaxValue, setIsDisableAC, setMaxValueAC} from "../store/countReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";

const MainBox = () => {
    const maxCount = useSelector<RootStateType, number>(state => state.counter.maxValue)
    const minCount = useSelector<RootStateType, number>(state => state.counter.minValue)
    const isDisable = useSelector<RootStateType, AbleButtonType>(state => state.counter.isDisable)
    const dispatch = useDispatch()


    useEffect(() => {
         dispatch(setMaxValueAC(restoreState('max')))
        //  getMaxValue()
    }, [])

    const setValue = () => {
        dispatch(setIsDisableAC(2))
        resetValue()
        saveMaxValue(maxCount)
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