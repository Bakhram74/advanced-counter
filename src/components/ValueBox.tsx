import React, {ChangeEvent, FC} from "react";
import {Button} from "./Button";
import {AbleButtonType, setIsDisableAC, setMaxValueAC, setMinValueAC} from "../store/countReducer";
import {useDispatch} from "react-redux";



type ValueBoxPropsType = {
    setValue: () => void
    maxCount: number
    minCount: number
    isDisable: AbleButtonType
}

const ValueBox: FC<ValueBoxPropsType> = ({
                                             setValue,
                                             maxCount,
                                             minCount,
                                             isDisable
                                         }) => {
    const dispatch = useDispatch()

    const maxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {

        dispatch(setMaxValueAC(+e.currentTarget.value))
        dispatch(setIsDisableAC(1))
    }
    const minValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(+e.currentTarget.value))
        dispatch(setIsDisableAC(1))
    }
    const isDisableSet = isDisable === 2 || minCount >= maxCount
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
                    <div>
                        <Button isDisabled={isDisableSet} name={'set'} callback={setValue}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValueBox;