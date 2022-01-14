function HpButton({dataset, text, className}:{dataset?:string, text:string, className?:string}):JSX.Element {
    return(
    <>
        <button  className={`button-hp text-light ${className || ""}`} data-id={dataset || ""}>{text}</button>
    </>
    )
}

export default HpButton;