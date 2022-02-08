function HpButton({dataset, text, className, handleFuntion}:{dataset?:string, text:string, className?:string, handleFuntion?:Function} ):JSX.Element {
    let buttonElement:JSX.Element = <></>;
    if (handleFuntion) {
        buttonElement = <button  className={`button-hp text-light ${className || ""}`} data-id={dataset || ""} onClick={()=>{handleFuntion()}}>{text}</button>
    }else{
        buttonElement = <button  className={`button-hp text-light ${className || ""}`} data-id={dataset || ""}>{text}</button>
    }
    return buttonElement;
}

export default HpButton;