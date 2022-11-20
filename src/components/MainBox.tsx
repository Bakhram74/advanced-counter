import React, {useState} from 'react';
import '../App.css';
import CounterBox from "./CounterBox";
import ValueBox from "./ValueBox";
import {restoreState, saveState} from "../local-storage/localStorage";

const MainBox = () => {
    const [counter, setCounter] = useState(0)
    const [maxCount, setMaxCount] = useState(0)
    const [minCount, setMinCount] = useState(0)


    const setValue = () => {
        resetValue()
        const value = restoreState('max')
        if (value)
            setMaxCount(value)
    }
    const maxValueInput = (value: number) => {
        saveState('max', value)
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
            <ValueBox maxValueInput={maxValueInput} minValueInput={minValueInput}
                      setValue={setValue}/>
            <CounterBox incValue={incValue} resetValue={resetValue} counter={counter} maxCounter={maxCount}/>
        </div>
    );
};

export default MainBox;