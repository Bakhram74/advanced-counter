import React, {ButtonHTMLAttributes, FC, useEffect, useState} from 'react';
import {Button} from "./Button";
import {AbleButtonType} from "./MainBox";

type CounterBoxPropsType = {
    counter: number,
    maxCount: number
    minCount: number
    incValue: () => void
    resetValue: () => void
    isDisable: AbleButtonType
}

const CounterBox: FC<CounterBoxPropsType> = ({
                                                 counter,
                                                 maxCount,
                                                 minCount,
                                                 incValue,
                                                 resetValue,
                                                 isDisable
                                             }) => {
    const disabledIncrement = counter === maxCount || isDisable === 1
    const disabledReset = isDisable === 1
    return (
        <div className={'main'}>
            <div className='container'>
                <div className={'count-box'}>
                    {maxCount <= minCount || minCount < 0 ? <div className={'incorrect-value'}>Incorrect value!</div> :
                        <div
                            className={counter === maxCount ? 'count-value count-limit' : 'count-value'}>{counter}</div>}
                </div>
                <div className={'click-box'}>
                        <div>
                            <Button isDisabled={disabledIncrement} name={"inc"} incValue={incValue}/>
                        </div>
                    <div>
                        <Button isDisabled={disabledReset} name={"reset"} resetValue={resetValue}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterBox;