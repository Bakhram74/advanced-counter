import React, {FC} from 'react';
import {Buttons} from "./Buttons";

type CounterBoxPropsType = {
    counter:number,
    maxCounter:number
    incValue:()=>void
    resetValue:()=>void
}

const CounterBox:FC<CounterBoxPropsType> = ({
                                                counter,
                                                maxCounter,
                                                incValue,
                                                resetValue}) => {
    return (
        <div className={'main'}>
            <div className='container'>
                <div className={'count-box'}>
                    <div className={counter === maxCounter ? 'count-value count-limit' : 'count-value'}>
                        {counter}</div>
                </div>
                <div className={'click-box'}>
                    <div className={counter === maxCounter ? 'disabled' : ''}>
                        <Buttons name={"inc"} incValue={incValue} />
                    </div>
                    <Buttons name={"reset"} resetValue={resetValue} />
                </div>
            </div>
        </div>
    );
};

export default CounterBox;