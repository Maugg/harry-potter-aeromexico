
import React, { Component } from "react";

class HpButton2 extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let buttonElement = <></>;
        const {dataset, text, className, handleFuntion} = this.props;
        if (this.props.handleFuntion) {
            buttonElement = <button  className={`button-hp text-light ${className || ""}`} data-id={dataset || ""} onClick={()=>{handleFuntion()}}>{text}</button>
        }else{
            buttonElement = <button  className={`button-hp text-light ${className || ""}`} data-id={dataset || ""}>{text}</button>
        }
        return buttonElement
    }
}

export default HpButton2;