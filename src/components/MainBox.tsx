import React, {useState} from 'react';
import '../App.css';
import {Buttons} from "./Buttons";

const MainBox = () => {
    const maxCounter = 5
    const minCounter = 0
    const [counter, setCounter] = useState(0)
    const incValue = () => {
        if (counter === maxCounter) {
            return
        }
        setCounter(counter + 1)
    }
    const resetValue = () => {
        setCounter(minCounter)

    }
    return (
        <div className={'main'}>
            <div className='container'>
                <div className={'count-box'}>
                    <div className={counter === maxCounter ? 'count-value count-limit' : 'count-value'}>
                        {counter}</div>
                </div>
                <div className={'click-box'}>
                    <div className={counter === maxCounter ? 'disabled' : ''}>
                        <Buttons name={"inc"} incValue={incValue}/>
                    </div>
                    <Buttons name={"reset"} resetValue={resetValue} />
                </div>
            </div>
        </div>
    );
};

export default MainBox;