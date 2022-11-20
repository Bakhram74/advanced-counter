import React, {FC, useEffect, useState} from 'react';
import {Buttons} from "./Buttons";

type CounterBoxPropsType = {
    counter:number,
    maxCount:number
    minCount:number
    incValue:()=>void
    resetValue:()=>void
}

const CounterBox:FC<CounterBoxPropsType> = ({
                                                counter,
                                                maxCount,
                                                minCount,
                                                incValue,
                                                resetValue}) => {
    return (
        <div className={'main'}>
            <div className='container'>
                <div className={'count-box'}>
                    {maxCount <= minCount || minCount < 0 ? <div className={'incorrect-value'}>Incorrect value!</div> :
                    <div className={counter === maxCount ? 'count-value count-limit' : 'count-value'}>{counter}</div>}
                </div>
                <div className={'click-box'}>
                    <div className={counter === maxCount ? 'disabled' : ''}>
                        <Buttons name={"inc"} incValue={incValue}/>
                    </div>
                    <Buttons name={"reset"} resetValue={resetValue} />
                </div>
            </div>
        </div>
    );
};

export default CounterBox;