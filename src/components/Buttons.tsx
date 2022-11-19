import React, {FC, useState} from 'react';
import '../App.css';

type ButtonsPropsType = {
    name: string
    incValue?: () => void
    resetValue?: () => void
}
export const Buttons: FC<ButtonsPropsType> = ({name, incValue, resetValue}) => {
    const onclickHandler = () => {
        if (name === 'inc' && incValue) {
            incValue()
        }
        if (name === 'reset' && resetValue) {
            resetValue()
        }
    }
    return (
        <div>
            <button onClick={onclickHandler}
                    className={'button'}>{name}</button>
        </div>
    );
};

