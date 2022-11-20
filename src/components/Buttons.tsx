import React, {FC, useState} from 'react';
import '../App.css';

type ButtonsPropsType = {
    name: string
    incValue?: () => void
    resetValue?: () => void
    setValue?: () => void
}
export const Buttons: FC<ButtonsPropsType> = ({name, incValue, resetValue, setValue}) => {
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
            <button onClick={onclickHandler}
                    className={'button'}>{name}</button>
        </div>
    );
};

