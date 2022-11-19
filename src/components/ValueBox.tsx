import React from "react";
import {Buttons} from "./Buttons";
import Input from "./Input";


const ValueBox = () => {
    return (
        <div className={"main"}>
            <div className={'container'}>
                <div className="count-box">
                  <Input value={"max value:  "}/>
                  <Input value={"start value:"}/>
                </div>
                <div className={'click-box'}>
                    <Buttons name={'set'}/>
                </div>
            </div>
        </div>
    );
};

export default ValueBox;