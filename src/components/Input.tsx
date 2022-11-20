import React, {ChangeEvent} from 'react';
type InputPropsType = {
    value:string
    maxValueInput?:(value:number)=>void
    minValueInput?:(value:number)=>void
}
const Input = (props:InputPropsType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        if (props.maxValueInput){
            props.maxValueInput (+e.currentTarget.value)
        }
        if (props.minValueInput){
            props.minValueInput (+e.currentTarget.value)
        }
    }
    return (
        <div>
            <label className={'label'} htmlFor="value">{props.value}</label>
            <input onChange={onChangeHandler} className={'input'} type="text" id="value"/>
        </div>
    );
};

export default Input;