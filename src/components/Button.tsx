import React, {FC, useState} from 'react';
import '../App.css';

type ButtonsPropsType = {
    name: string
    callback?: () => void;
    incValue?: () => void
    resetValue?: () => void
    setValue?: () => void
    isDisabled:boolean
}
export const Button: FC<ButtonsPropsType> = ({name, callback ,incValue, resetValue, setValue,isDisabled}) => {
    // const onclickHandler = () => {
    //     if (name === 'inc' && incValue) {
    //         incValue()
    //     }
    //     if (name === 'reset' && resetValue) {
    //         resetValue()
    //     }
    //     if (name === 'set' && setValue) {
    //         setValue()
    //     }
    // }
    return (
        <div>
            <button disabled={isDisabled} onClick={callback}
                    className={'button'}>{name}</button>
        </div>
    );
};

