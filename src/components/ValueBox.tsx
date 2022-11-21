import React, {ChangeEvent, FC} from "react";
import {Buttons} from "./Buttons";
import {AbleButtonType} from "./MainBox";

type ValueBoxPropsType = {
    setValue: () => void
    maxValueInput: (value: number) => void
    minValueInput: (value: number) => void
    maxCount: number
    minCount: number
    makeAbleButton: (value: AbleButtonType) => void
    isDisable: AbleButtonType
}

const ValueBox: FC<ValueBoxPropsType> = ({
                                             setValue,
                                             minValueInput,
                                             maxValueInput,
                                             maxCount,
                                             minCount,
                                             makeAbleButton,
                                             isDisable
                                         }) => {

    const maxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        maxValueInput(+e.currentTarget.value)
        makeAbleButton(1)
    }
    const minValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        minValueInput(+e.currentTarget.value)
        makeAbleButton(1)
    }
    return (
        <div className={"main"}>
            <div className={'container'}>
                <div className="count-box">
                    <label className={'label'} htmlFor="value">max value: </label>
                    <input value={maxCount} onChange={maxValueInputHandler}
                           className={maxCount <= minCount ? 'input error-input' : 'input'}
                           type="number" id="value"/>
                    <label className={'label'} htmlFor="value">start value:</label>
                    <input value={minCount}
                           onChange={minValueInputHandler}
                           className={minCount >= maxCount || minCount < 0 ? 'input error-input' : 'input'}
                           type="number" id="value"/>
                </div>
                <div className={'click-box'}>
                    <div className={isDisable === 2 ? 'disabled' : ''}>
                        <Buttons name={'set'} setValue={setValue}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValueBox;