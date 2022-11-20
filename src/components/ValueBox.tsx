import React, {ChangeEvent, FC} from "react";
import {Buttons} from "./Buttons";
type ValueBoxPropsType = {
    setValue:()=>void
    maxValueInput:(value:number)=>void
    minValueInput:(value:number)=>void
}

const ValueBox:FC<ValueBoxPropsType> = ({setValue,minValueInput,maxValueInput}) => {

    const maxValueInputHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        maxValueInput(+e.currentTarget.value)
    }
    const minValueInputHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        minValueInput(+e.currentTarget.value)
    }
    return (
        <div className={"main"}>
            <div className={'container'}>
                <div className="count-box">
                    <label className={'label'} htmlFor="value">max value: </label>
                    <input onChange={maxValueInputHandler} className={'input'} type="number" id="value"/>
                    <label className={'label'} htmlFor="value">start value:</label>
                    <input  onChange={minValueInputHandler} className={'input'} type="number" id="value"/>
                </div>
                <div className={'click-box'}>
                    <Buttons name={'set'} setValue={setValue}/>
                </div>
            </div>
        </div>
    );
};

export default ValueBox;