import React, {ButtonHTMLAttributes, FC, useEffect, useState} from 'react';
import {Button} from "./Button";
import {AbleButtonType, changeValueAC} from "../store/countReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";

type CounterBoxPropsType = {
    minCount: number
    resetValue: () => void
    isDisable: AbleButtonType
}

const CounterBox: FC<CounterBoxPropsType> = ({
                                                 // counter,
                                                 // maxCount,
                                                 minCount,
                                                 // incValue,
                                                 resetValue,
                                                 isDisable
                                             }) => {
    const maxCount = useSelector<RootStateType,number>(state => state.counter.maxValue)
    const currentCounterValue = useSelector<RootStateType,number>(state => state.counter.value)
    const dispatch = useDispatch()
    const incValue = () => {
        if (currentCounterValue === maxCount)
            return
        dispatch(changeValueAC(currentCounterValue + 1))
    }
    const disabledIncrement = currentCounterValue === maxCount || isDisable === 1
    const disabledReset = isDisable === 1
    return (
        <div className={'main'}>
            <div className='container'>
                <div className={'count-box'}>
                    {maxCount <= minCount || minCount < 0 ? <div className={'incorrect-value'}>Incorrect value!</div> :
                        <div
                            className={currentCounterValue === maxCount ? 'count-value count-limit' : 'count-value'}>{currentCounterValue}</div>}
                </div>
                <div className={'click-box'}>
                        <div>
                            <Button isDisabled={disabledIncrement} name={"inc"} callback={incValue} />
                        </div>
                    <div>
                        <Button isDisabled={disabledReset} name={"reset"} callback={resetValue} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterBox;