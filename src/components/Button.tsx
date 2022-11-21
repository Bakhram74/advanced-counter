import React, {FC, useState} from 'react';
import '../App.css';
import {AbleButtonType} from "./MainBox";

type ButtonsPropsType = {
    name: string
    incValue?: () => void
    resetValue?: () => void
    setValue?: () => void
    isDisabled:boolean
}
export const Button: FC<ButtonsPropsType> = ({name, incValue, resetValue, setValue,isDisabled}) => {
    const onclickHandler = () => {
        if (name === 'inc' && incValue) {
            incValue()
        }
        if (name === 'reset' && resetValue) {
            resetValue()
        }
        if (name === 'set' && setValue) {
            setValue()
        }
    }
    return (
        <div>
            <button disabled={isDisabled} onClick={onclickHandler}
                    className={'button'}>{name}</button>
        </div>
    );
};

