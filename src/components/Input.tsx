import React from 'react';
type InputPropsType = {
    value:string
}
const Input = (props:InputPropsType) => {
    return (
        <div>
            <label className={'label'} htmlFor="value">{props.value}</label>
            <input className={'input'} type="text" id="value"/>
        </div>
    );
};

export default Input;