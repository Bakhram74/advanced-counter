import React, {useEffect, useState} from 'react';
import '../App.css';
import CounterBox from "./CounterBox";
import ValueBox from "./ValueBox";
import {restoreState, saveState} from "../local-storage/localStorage";

export type AbleButtonType = 1 | 2
const MainBox = () => {
    const [counter, setCounter] = useState(0)
    const [maxCount, setMaxCount] = useState(5)
    const [minCount, setMinCount] = useState(0)
    const [isDisable, setIsDisable] = useState<AbleButtonType>(1)

    const makeAbleButton = (value: AbleButtonType) => {
        setIsDisable(value)
    }

    useEffect(() => {
        setMaxCount(restoreState('max'))
    }, [])

    const setValue = () => {
        setIsDisable(2)
        resetValue()
        saveState('max', maxCount)
    }

    const maxValueInput = (value: number) => {
        setMaxCount(value)
    }
    const minValueInput = (value: number) => {
        setMinCount(value)
    }
    // counter-box
    const incValue = () => {
        if (counter === maxCount)
            return
        setCounter(counter + 1)
    }
    const resetValue = () => {
        setCounter(minCount)
    }

    return (
        <div className={'app'}>
            <ValueBox maxValueInput={maxValueInput} maxCount={maxCount} minCount={minCount}
                      makeAbleButton={makeAbleButton} isDisable={isDisable}
                      minValueInput={minValueInput} setValue={setValue}/>
            <CounterBox incValue={incValue} resetValue={resetValue} counter={counter} maxCount={maxCount}
                        minCount={minCount} isDisable={isDisable}/>
        </div>
    );
};

export default MainBox;